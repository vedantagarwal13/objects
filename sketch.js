
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world,hammer1,stone,g,rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone = new box(300,370,70,65,);
	hammer1 = new hammer(300,250,100,50);
	g = new Ground(600,390,1200,20);
	rubber1 = new rubber(500,250,25,25);

	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);


  hammer1.display();
  g.display();
  stone.display();
  rubber1.display();
 
}



