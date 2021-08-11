class PlayerBase {
    constructor(x,y,width,height){

      var options= {
        isStatic :true
      }
  
  
      this.body = Bodies.rectangle(x,y,width,height,options)
      World.add(world, this.body)
      this.w = width;
      this.h = height;
      this.image = loadImage("assets/base1.png");
            
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
     
      push();
      translate(pos.x,pos.y)
      rotate(angle);
      imageMode(CENTER)
      image(this.image, 0,0, this.w, this.h);
      pop();
    }
    
  }