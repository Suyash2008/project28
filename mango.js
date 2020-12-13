class Mango{
    constructor(x,y,radius){
      var options = {
          isStatic : true,
          
      }  
       this.Image = loadImage("sprites/mango.png")
      this.body = Bodies.circle(x,y,radius,options)
      this.radius = radius;
      World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push();
        imageMode(CENTER)
        image(this.Image,pos.x,pos.y,this.radius,this.radius)
        pop();
    }
    }