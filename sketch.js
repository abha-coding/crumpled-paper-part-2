const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinIMG;

function preload()
{
	dustbinIMG=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,20);
  ground = new Ground(600,650,1200,20);
  
  dustbin1 = new Dustbin(480,580,20,100);
	dustbin2 = new Dustbin(660,580,20,100);
  dustbin3 = new Dustbin(570,640,200,20);
  

  dustbinSprite=createSprite(570,530);
  dustbinSprite.addImage(dustbinIMG);
  dustbinSprite.scale=0.8;
  
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  
  Engine.update(engine);

  imageMode(CENTER);
  

  paper.display();
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
 
}

function keyPressed() 
{
  if (keyCode === UP_ARROW) 
  {
    Body.applyForce(paper.body,paper.body.position,{x:105,y:-155});
  }
}