var x = 300;
var y = 200;
var img;

function preload(){
      img = loadImage("780efd13b3919fef6285f6c1d671fa09.jpg");
}

function setup() {
    createCanvas(710, 500);
    background(180);
    
}

function draw() {
  face(130, 80);
  
  if(mouseIsPressed){
      face(mouseX, mouseY);
  }
}

function face(x, y){
    //outerface
    imageMode(CENTER);
    image(img, x, y, 100, 120);
}