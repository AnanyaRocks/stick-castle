const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,450,100,450);
    box2 = new Box(397,450,100,360);
    box3 = new Box(700,450,100,550);
    box4 = new Box(600,450,100,360);
    box5 = new Box(290,450,100,550);
}

function draw(){
    background(0);
  Engine.update(engine);
  fill("pink");
  box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   triangle (500,60,550,230,450,230);
}