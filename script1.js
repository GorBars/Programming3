var side = 10;
var xotArr = []; //խոտերի զանգված
var eatArr = []; //խոտակերների զանգված
var nightArr = []; // Gishatich
var wolfArr = []; // First character
var bombArr = []; // Second character


function genetareMatrix(lengthY, lengthX, number) {

    let matrix = [];

    function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
    }

    for (let y = 0; y < lengthY; y++) {
    matrix.push([]);
    for (let x = 0; x < lengthX; x++) {
    let randomCount = getRandomInt(number);
    matrix[y].push(randomCount);
    }
    }
    return matrix;

}


let matrix = genetareMatrix(50,50,4);




function setup() {
    frameRate(4);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }else if (matrix[y][x] == 3) {
                var night = new Nighteat(x,y);
                nightArr.push(night);
            }
    }
}

}



function draw() {

    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("blue");
                rect(j * side , i * side, side ,side);
            }else if (matrix[i][j] == 4) {
                fill("#2B2B2B");
                rect(j * side  , i * side , side ,side);
            }else if (matrix[i][j] == 5) {
                fill("red");
                 rect(j * side  , i * side , side ,side);
            }
        }
    }



    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for(var i in nightArr){
        nightArr[i].eat();
    }

    for(var i in wolfArr){
        wolfArr[i].eat();
    }

    for(var i in bombArr){
        bombArr[i].boom();
    }
}
