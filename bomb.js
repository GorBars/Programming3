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
