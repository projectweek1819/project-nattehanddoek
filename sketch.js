let kleuren = [{color: "red"}, {color: "blue"}, {color: "grey"}, {color: "yellow"}, {color: "green"}, {color: "purple"}];
const width = 10;
const height = 10;
const spacer = 50;
const canvasHeight = 700;
const canvasWidth = 1000;
const paddingTop = 50;
const paddingLeft = 50;
let grid = [...Array(width)].map(e => Array(height));

let x = 0;
let y = 0;


function Position(x, y){
    this.x = x;
    this.y = y
}

function Stone(color, position){
    this.color = color;
    this.position = position
}

function setup() {

    createCanvas(canvasWidth, canvasHeight);

        for (let i = 0; i < width ; i++) {
            for (let j = 0; j < height ; j++) {
                let kleur = int(random(6));
                grid[i][j] = new Stone(kleur, new Position(i * spacer, j * spacer));
            }
        }
    console.log(grid);
}

function draw() {


    for (let i = 0; i < grid[0].length ; i++) {
        for (let j = 0; j < grid.length ; j++) {
            let stone;
            let kleur = int(Math.floor(Math.random() * 6));
            ellipse(i * spacer + paddingTop, j * spacer + paddingLeft, 45, 45);
            fill(kleuren[kleur].color);
            noLoop()
        }
    }
}