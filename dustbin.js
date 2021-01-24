class dustbin extends Master{
	constructor(x,y, width, height){
	  super(x,y,150,150);
	  this.image = loadImage("dustbingreen.png");

	 
		

	  this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
	this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
	Matter.Body.setAngle(this.leftWallBody, this.angle);

	this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
	Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
	World.add(world, this.bottomBody);
	World.add(world, this.leftWallBody);
	World.add(world, this.rightWallBody);


	}

	display(){
	

		
	  super.display();
	}
  }