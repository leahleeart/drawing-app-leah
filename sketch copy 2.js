let clipiart;
let data;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background (230);
}



function preload(){
  image1= loadImage("images/clipart.png");
  image2= loadImage("images/data.png");
}

function draw(){

  colorMode(RGB);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 150, 200);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 150, 250);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 150, 300);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 150, 350);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 950, 200);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 950, 250);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 950, 300);

  noStroke();
  fill(100);
  textSize (15);
  text("Press space key for what", 950, 350);

  image(image1, width/2, height/2,500,500);

  colorMode(HSB);

  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);

    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
     if(keyIsPressed){
     image(image2, width/2, height/2, 200, 100);
   }
}
