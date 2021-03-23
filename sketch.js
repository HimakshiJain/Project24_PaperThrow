
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(3200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(1500,680,3400,10);

	paper1 = new Paper(100,300,40);

	dustbin1 = new Dustbin(2900,615,20,120);
	dustbin2 = new Dustbin(3100,615,20,120);
	dustbin3 = new Dustbin(3000,665,180,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);

  Engine.update(engine);

  ground.display();
  
  paper1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5, y:-35});
	}
}



