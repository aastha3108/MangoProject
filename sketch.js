
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1040,180,30);
	mango2=new mango(1200,170,30);
	mango3=new mango(900,200,30);
	mango4=new mango(1050,162,30);
	mango5=new mango(1070,140,30);
	mango6=new mango(1030,210,30);
	mango7=new mango(1010,150,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
    stoneObj=new Stone(1000,210,90) 
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stoneObj.display();

  groundObject.display();
}

function keyPressed(){
if (keyCode === 32)
Matter.body.setPosition(stoneObj.body,{x:235,y:420})
launcherObject.attach(stoneObj.body)
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly()
}