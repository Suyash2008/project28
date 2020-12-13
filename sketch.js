
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy;
var boyIm;
var tree;
var treeIm;

function preload(){
boyIm = loadImage("sprites/boy.png")
treeIm = loadImage("sprites/tree.png")
}
	

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,700,800,50)
  stone = new Stone(200,600,30)
  tree = new Tree(500,450,500,500)
  chain = new Chain(stone.body,{x:150,y:555})
  mango = new Mango(400,400,30)
  mango2 = new Mango(450,400,30)
  mango3 = new Mango(500,400,30)
  mango4 = new Mango(550,400,30)
  mango5 = new Mango(600,400,30)
  mango6 = new Mango(650,400,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  boy = createSprite(200,620);
  boy.addImage(boyIm)
  boy.scale = 0.1
  ground.display()
  stone.display();
  tree.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  detedtcollision(mango,stone);
  detedtcollision(mango2,stone);
  detedtcollision(mango3,stone);
  detedtcollision(mango4,stone)
  detedtcollision(mango5,stone)
  detedtcollision(mango6,stone)

  chain.display();
  drawSprites();
 
}
function mouseDragged(){
  
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain.fly();
  
}

function detedtcollision(mango,stone){
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position
  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance <=mango.radius+stone.radius){
Matter.Body.setStatic(mango.body,false)
  }
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:200,y:200})
    chain.attach(stone.body);
  }
}



