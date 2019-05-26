side = 10;
xotArr = [];
eatArr = [];
wolfArr = [];
nightArr = [];
bombArr = [];
matrix = [];

matrix = [
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 0, 0, 2, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 4, 0, 1, 3, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 3, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 3, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 3, 0, 0, 1, 4, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 0, 0, 0, 4, 1, 0, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1],
];

// Server start
var fs = require('fs');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index1.html');
});




server.listen(5000, () =>{
    console.log("RUN");
});
//



//Classes



var Grass = require("./modules/grass");
var Eatgrass = require("./modules/eatgrass");
var Nighteat = require("./modules/nighteat");
var Wolf = require("./modules/wolf");
var Bomb = require("./modules/bomb");

//



for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 2) {
            var eatgrass = new Eatgrass(x, y);
            eatArr.push(eatgrass);
        } else if (matrix[y][x] == 1) {
            var grass = new Grass(x, y);
            xotArr.push(grass);
        } else if (matrix[y][x] == 3) {
            var night = new Nighteat(x, y);
            nightArr.push(night);
        } else if (matrix[y][x] == 4) {
            var wolf = new Wolf(x, y);
            wolfArr.push(wolf);
        } else if (matrix[y][x] == 5) {
            var bomb = new Bomb(x, y);
            bombArr.push(bomb);
        }
    }
}


var weather = 'summer';

var n = 0;



function game() {
     if (xotArr[0] != undefined){
    for (var i in xotArr) {
        xotArr[i].mul();
    }
     }
    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in nightArr) {
        nightArr[i].eat();
    }
    if (wolfArr[0] != undefined){
    for (var i in wolfArr) {
        wolfArr[i].eat();
    }}

    if (bombArr[0] != undefined){
    for (var i in bombArr) {
        bombArr[i].boom();
    }}
    var data = {
        matrix: matrix,
        season: weather,
        action: n
    }



    io.sockets.emit("ugharkum em matrix", data)


}


// weather functions

function winter() {
    weather = 'winter';
}

function summer() {
    weather = 'summer';
}

function autumn() {
    weather = 'autumn';
}

//



// Aciton Functions

function flame(){
    
    n = 1;


setTimeout(function(){

    let b;

        for(var y = 0; y < matrix.length; y++){
          for(var x = 0; x < matrix[y].length; x++){
             if (matrix[y][x] == 1) {
               matrix[y][x] = 0;
               b = matrix[y][x];
             }

         }
     }
     return b;
 
},1000);

n = 2;

}
function freeze(){n = 2;}
function boost(){n = 3;}



if (n == 2) {
    setInterval(game ,3000)
    console.log('slow speed')
}else if(n == 3){
    setInterval(game,500)
    console.log('fast speed')
}else{
     setInterval(game,1000)
    console.log('normal speed')   
} 
// weather

io.on('connection', function (socket) {
    socket.on("winter", winter)
});

io.on('connection', function (socket) {
    socket.on("summer", summer)
});

io.on('connection', function (socket) {
    socket.on("autumn", autumn)
});

//


//Actions

io.on('connection', function (socket) {
    socket.on("fire", flame)
});

io.on('connection', function (socket) {
    socket.on("freeze", freeze)
});

io.on('connection', function (socket) {
    socket.on("boost", boost)
});

// 



var statistics = {};


setInterval(function () {
    statistics.xArr = xotArr.length;
    statistics.eArr = eatArr.length;


    fs.writeFileSync("statistics.json", JSON.stringify(statistics), () => {
        {
            console.log("Start");
        }
    })
}, 10)