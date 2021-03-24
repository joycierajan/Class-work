//Namespacing - nicknaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var box, box1, box2, box3, box4;
var ground;
var bird1;
var pig1, pig2;
var log1, log2, logExtra;
var chain1;
var backgroundImage;

function preload(){
  backgroundImage = loadImage("images/day.png")
}

function setup() {
  createCanvas(1200,400);
  //creating the engine
  myEngine = Engine.create();
  //creating the world
  myWorld = myEngine.world;
  ground = new Ground(600,height,1200,20);
  platform = new Ground(150, 305, 300, 170);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810,260,300, PI/2);

  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  pig2 = new Pig(810, 250);
  
  //log2 =  new Log(810,220,300, PI/2);

  

  bird1 = new Bird(200,50);

  //log6 = new Log(230,180,80, PI/2);
  sling1 = new SlingShot(bird1.physicsBody,{x:200, y:50});

}

function draw() {
  background(backgroundImage); 
  //updating the engine
  Engine.update(myEngine) 
  console.log(pig2.physicsBody.position.y)
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  ground.display();
  platform.display();
  bird1.display();
  pig1.display();
  pig2.display();
  log1.display();
  //log2.display();
  //logExtra.display();
  //chain1.display();
  sling1.display();

  

}

function mouseDragged(){
  Matter.Body.setPosition(bird1.physicsBody, {x:mouseX, y:mouseY})

}

function mouseReleased(){
  sling1.fly()
}

function keyPressed(){
  console.log("key is pressed")
  console.log(keyCode)
}