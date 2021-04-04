
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground = new Ground(500,400,1000,35),
  dustbin1 = new Dustbin(600,300,30,100)
  

  drawSprites();
  ground.display();
  dustbin1.display();
}

function keyPressed() {
   if(keyCode === UP_ARROW) {

	   Matter.Body.applyForce(paper.Body, paper.Body.position,{x:85,y:-85});
   }



}



