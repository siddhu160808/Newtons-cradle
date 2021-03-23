const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	fill("#cd82fa");
	bob1=new Bob(300,350,50);
	bob2=new Bob(350,350,50);
	bob3=new Bob(400,350,50);
	bob4=new Bob(450,350,50);
	bob5=new Bob(500,350,50);
	
	 
	  ground1 = new Ground(400,100,300,40);
	  sling1= new Chain(bob1.body,ground1.body,-50*2,18);
	  sling2= new Chain(bob2.body,ground1.body,-25*2,18);
	  sling3= new Chain(bob3.body,ground1.body,-0*2,18);
	  sling4= new Chain(bob4.body,ground1.body,25*2,18);
	  sling5= new Chain(bob5.body,ground1.body,50*2,18);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#89fff9");
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  

  keyPressed();
  
  drawSprites();
 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-60,y:-60}); } 
} 

