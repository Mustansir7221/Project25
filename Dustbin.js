class Dustbin {
    constructor(x, y, width, height) {

      var option={
        isStatic:true
      }
    
      this.body = Bodies.rectangle(x, y, width, height,option);
      this.width = width;
      this.height = height;
      this.image=loadImage("assets/dustbin.png");
      
      World.add(world, this.body);
    }
    display(){
     
      
      
      image(this.image,500,500,160,180);
    }
  }
  