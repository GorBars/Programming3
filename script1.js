var socket = io();

matrix = [];

var side = 40;

matrix = [
    [0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 3, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 3, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 3, 0, 1, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 4, 0, 1, 3, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 3, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 3, 0, 0, 1, 4, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 4, 1, 0, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
]



function setup() {
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side, side ,side);
    background('#acacac');

    socket.on("ugharkum em matrix", drawMATRIX);
}



function drawMATRIX(data) {
    matrix = data.matrix;
    weather = data.season;
    n = data.action;
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                if (weather == 'winter') {
                  if (n != 1) {
                        fill('white');
                    }else{
                        fill('#EA5203');
                    }
                }
                if (weather == 'summer') {
                  if (n != 1) {
                        fill('green');
                    }else{
                        fill('#EA5203');
                    }
                }
                if (weather == 'autumn') {
                    if (n != 1) {
                        fill('orange');
                    }else if (weather == 'autumn') {
                        fill('#EA5203');
                    }
                }
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#3F2A15');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('blue')
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                if (weather == 'winter') {
                    fill("#6289A3");
                }else if (weather == 'autumn') {
                  fill("#D09D6A")
                 }else{
                     fill('#2B2B2B');
              }
                rect(j * side, i * side, side, side);
            
            
            
            }else if (matrix[i][j] == 5) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
        }
    }



}
socket.on("ugharkum em matrix", drawMATRIX)

// Weather

function winter() {
    socket.emit("winter")
}

function summer() {
    socket.emit("summer")
}

function autumn() {
    socket.emit("autumn")
}

//


// Actions

function fire() {
    socket.emit("fire")
}

function freeze() {
    socket.emit("freeze")
}





