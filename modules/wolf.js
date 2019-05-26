var LiveForm = require("./live");

module.exports = class Wolf extends LiveForm {
    constructor(x,y){
        super(x,y)
        this.eaten = 0;
    }


newDirections() {
    this.directions = [
        [this.x - 3, this.y - 3],
        [this.x, this.y - 3],
        [this.x + 3, this.y - 3],
        [this.x - 3, this.y],
        [this.x + 3, this.y],
        [this.x - 3, this.y + 3],
        [this.x, this.y + 3],
        [this.x + 3, this.y + 3]
    ];


}

    move() {
    var fundCords = this.getDirections(1);
    var cord = fundCords[Math.floor(Math.random()*fundCords.length)];

    if (cord) {
        var x = cord[0];
        var y = cord[1];


        matrix[y][x] = 4;

 
        matrix[this.y][this.x] = 1;

        this.x = x;
        this.y = y;

    }
}

eat(){
    var fundCords = this.getDirections(2,3);
    var cord = fundCords[Math.floor(Math.random()*fundCords.length)];

    if (cord) {
        var x = cord[0];
        var y = cord[1];


        matrix[y][x] = 4;

        matrix[this.y][this.x] == 1;

        this.y = y;
        this.x = x;

        this.eaten++;


        for (var i in eatArr) {
            if (x == eatArr[i].x && y == eatArr[i].y) {
                eatArr.splice(i, 1);
                
            }
        }


        for (var i in nightArr) {
            if (x == nightArr[i].x && y == nightArr[i].y) {
                nightArr.splice(i, 1);
            }
        }

        if (this.eaten == 50) {
            let bf = this.getDirections(0);
            let bc = bf[Math.floor(Math.random()*bf.length)];;

            if (bc) {
                let x = bc[0];
                let y = bc[1];

                matrix[y][x] = 5;

                var bomb = new Bomb(x,y);
                bombArr.push(bomb);

            }
        }


    } else {
        
            this.move();
        }   

}


}