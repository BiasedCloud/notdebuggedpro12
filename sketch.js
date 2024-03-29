var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage("gardenImg",gardenImg);

//creating boy running
rabbit = createSprite(World.mouseX,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbitImg",rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  createApples();
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage("apple.png");
  apple.velocityY = 3;
  apple.lifeTime = 150;
}
