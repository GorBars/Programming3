class Wolf{
    constructor(x,y){
        this.x = x;
        this.y = y;
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

getDirections(t,u) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t || matrix[y][x] == u) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    move() {
    var fundCords = this.getDirections(1);
    var cord = random(fundCords);

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
    var fundcords = this.getDirections(2,3);
    var cord = random(fundcords);

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
            let bc = random(bf);

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