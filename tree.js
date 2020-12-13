class Tree{
    constructor(x,y,width,height){
      var options = {
          isStatic : true,
          
      } 
      this.Image = loadImage("sprites/tree.png");
      this.body = Bodies.rectangle(x,y,width,height,options)
      this.width = width;
      this.height = height;
      World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push();
        fill("gray");
        imageMode(CENTER)
        image(this.Image,pos.x,pos.y,this.width,this.height)
        pop();
    }
    }