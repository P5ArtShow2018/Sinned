var galaxy; 

function preload(){
galaxy = loadImage("Assets/Galaxy.jpg");
father = loadSound("Assets/father.wav")
earth = loadImage("Assets/Earth.png")
}

function setup() {
  createCanvas(1000,1000);
  father.loop();
frameRate(10);

}

function draw() {

 background(200,20,56);
 fill(random(1,255),random(1,255),random(1,255));

 image(galaxy,0,0);
 textSize("50");
 text("LIFE",random(1,1000),random(1,1000))
 
 image(earth,mouseX,mouseY)
}
