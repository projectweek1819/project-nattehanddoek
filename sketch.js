const width = 10;
const height = 10;
const spacer = 50;
let result = [];

function Position(x, y){
    this.x = x;
    this.y = y
}

function Steen(color, position){
    this.color = color;
    this.position = position
}

function setup() {

        for (let i = 0; i !== width ; i++) {
            result[i] = [];
            for (let j = 0; j !== height ; j++) {
                let color = Math.floor(Math.random() * 6);
                result[i][j] = new Steen(color, new Position(i * spacer, j * spacer))
            }
        }

    console.log(result);


}

function draw() {

    color = new Array(5);
    for (let i = 0; i !== innerWidth ; i++) {
        for (let j = 0; j !== innerHeight ; j++) {
            if (!(result[i][j].color === 0)) 
                switch(result[i][j].color){
                    case 0:
                        color = "red";
                        break;
                    case 1:
                        color = "green";
                        break;
                    case 2:
                        color = "yellow";
                        break;
                    case 3:
                        color = "blue";
                        break;
                    case 4:
                        color = "white";
                        break;
                    case 5:
                        color = "purple";
                        break;
                }

        }
    }




}