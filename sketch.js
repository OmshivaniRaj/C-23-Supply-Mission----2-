
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var helicopterIMG, helicopter, package,packageIMG, packageBody,ground,box1,box2,box3,box4,box5;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,695);
	engine = Engine.create();
	world = engine.world;

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG);
	package.scale=0.2;
	package.velocityY = 3;
	package.visible=false;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG);
	helicopter.scale=0.6;
	helicopter.velocityX = 3;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("blue");

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	box1 = createSprite(260,600,10,110);
	box1 .shapeColor = ("blue");

	box2 = createSprite(260,600,110,10);
	box2 .shapeColor = ("blue");

	box3 = createSprite(600,600,10,110);
	box3 .shapeColor = ("blue");

	box4 = createSprite(600,600,110,10);
	box4 .shapeColor = ("blue");

	box5 = createSprite(430,660,350,10);
	box5.shapeColor = ("blue");

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	package.visible=true;
    
  }
}



