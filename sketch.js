
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var monkey
var banana

function preload(){
  monkeyImg=loadImage("monkey.png");
  bananaImg=loadImage("banana.png")
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
}

