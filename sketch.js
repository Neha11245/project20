const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;



var car,wall;
var speed,wall

var world,engine;




function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
createSprite(400, 200, 50, 50);
  car= createSprite(50,200,50,50)
  wall = createsprite(2500,200,60,height/2)

  speed=random(55,90)
  weight=random (400,1500)
  car.velocityX = speed; 
}

function draw() {
  Engine.update(engine);
  background(255,255,255);
  car.display();
  wall.display();
   
  

  drawSprites();
}