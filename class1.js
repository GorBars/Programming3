class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = 0; 
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        this.multiply++;
        if (this.multiply == 3) {


            var fundCords = this.getDirections(0);
            var cord = random(fundCords);
            if (cord) {
                var x = cord[0];
                var y = cord[1];


                var norXot = new Grass(x, y, this.index);
                xotArr.push(norXot);

                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }



}
class Eatgrass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 3;
        this.directions =[];
    }


    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }




    move() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;


            this.x = x;
            this.y = y;

        }
    }



    eat() {

        var fundCords = this.getDirections(1);
        var cord = random(fundCords);


        if (cord) {
            var x = cord[0];
            var y = cord[1];


            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

  
            this.x = x;
            this.y = y;


            this.multiply++;


            this.energy++;


            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }


            if (this.multiply == 2) {
                this.mul()
                this.multiply = 0;
            }


        } else {
 
            this.move();
            this.energy--;
            if (this.energy == 0) { 
                this.die();
            }
        }
    }


    mul() {

        var fundCords = this.getDirections(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            this.multiply++;


            var norXotaker = new Eatgrass(x, y, this.index);
            eatArr.push(norXotaker);

            matrix[y][x] = 1;
            this.multiply = 0;
        } 
    }


    die() {

        matrix[this.y][this.x] = 0;


        for (var i in eatArr) {
            if (this.x == eatArr[i].x && this.y == eatArr[i].y) {
                eatArr.splice(i, 1);
            }
        }
    }

}

//  GISHATICH

class Nighteat{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 50;
        this.multiply = 0;
    }

    newDirections() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}

    getDirections(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    move() {
    var fundCords = this.getDirections(0);
    var cord = random(fundCords);

    if (cord) {
        var x = cord[0];
        var y = cord[1];


        matrix[y][x] = 3;
        matrix[this.y][this.x] = 0;

        this.x = x;
        this.y = y;

    }
}

eat() {

    
      
        var fundCords = this.getDirections(2);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

         
            
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

           
            this.x = x;
            this.y = y;

            this.multiply++;

        
            this.energy = this.energy + 2;



            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                }
            }


            if (this.multiply == 3) {
                let nf = this.getDirections(0);
                let nc = nf[0];

                if (nc) {
                    let x = nc[0];
                    let y = nc[1];

                    matrix[y][x] = 4;

                    var wolf = new Wolf(x,y);
                    wolfArr.push(wolf);
                }
            }




        } else {
        
            this.move();
            this.energy = this.energy - 2;
            if (this.energy == 0) { 
                this.die();
            }
        }
    }

        die() {

        matrix[this.y][this.x] = 0;

        for (var i in nightArr) {
            if (this.x == nightArr[i].x && this.y == nightArr[i].y) {
                nightArr.splice(i, 1);
            }
        }
    }

}

//  WOLF
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


class Bomb{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }





boom(){

    let b;

    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if (matrix[y][x] == 1 || matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 4) {
                b = matrix[y][x] = 0;
            }

        }
    }
    return b;
    }

}





