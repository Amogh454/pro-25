
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bg, bgImage;
var dustbinObj,groundObject	
var paperSprite;
var world;

function preload(){

	bgImage = loadImage("bg.jpg");
	
}
function setup() {
	createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	groundObject.visible = false;
	dustbinObj=new dustbin(1200,650);
	paperSprite = new paper(200, 600);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImage);
 

  groundObject.display();
  dustbinObj.display();
   paperSprite.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW){

	  Matter.Body.applyForce(paperSprite.body,paperSprite.body.position,{x:85,y:-85});
	  
	}

}

