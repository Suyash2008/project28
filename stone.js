class Stone{
    constructor(x,y,radius){
      var options = {
          isStatic : false,
          density : 1.2,
      }  
       this.Image = loadImage("sprites/stone.png")
      this.body = Bodies.circle(x,y,radius)
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