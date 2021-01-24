class paper extends Master{
    constructor(x,y){

        var options={
            isStatic:false,
            restitution:0.3,
            friction: 0.5,
            density: 1
        }
      super(x,y,50,50);
      this.image = loadImage("paper.png");
    }
    display(){
     
      super.display();
      
    }
  }