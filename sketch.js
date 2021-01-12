
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	image = loadImage("boy.png")
	image = loadImage("stone.png")
	image = loadImage("mango.png")
	image = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(675, 450);
	mango2 = new Mango(725, 50);
	mango3 = new Mango(670, 230);
	mango4 = new Mango(550, 310);
	mango5 = new Mango(560 ,300);

	boy1 = new Boy(150, 630, 240, 240);

	stone1 = new Stone(135, 620, 25, 25);

	slingshot = new Slingshot(Stone.body, {x:135, y:620});
	
	ground1 = new Ground(400, 796, 800, 10);
	
	tree = createSprite(625, 400, 450, 450);
	tree.addImage("tree.png");

	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);


detectcollision(stones,mango1);
detectcollision(stones,mango2);
detectcollision(stones,mango3);
detectcollision(stones,mango4);
detectcollision(stones,mango5);

if (stones.isTouching(mango1)){
	mango1.isStatic = false;
}

if (stones.isTouching(mango2)){
	mango2.isStatic = false;
}

if (stones.isTouching(mango3)){
	mango3.isStatic = false;
}

if (stones.isTouching(mango4)){
	mango4.isStatic = false;
}

if (stones.isTouching(mango5)){
	mango5.isStatic = false;
}


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  boy1.display();

  stone1.display();

  slingshot.display();

  ground1.display();

  
  drawSprites();
 }


 
 function mouseDragged() {
      Matter.Body.setPosition(stones.body,{x:mouseX, y:mouseY});
	}


function mouseReleased(){
	attach.fly();
}


function keyPressed(){
	if(keyDown === 32){
		stone1 = new Stone(135, 620, 25, 25);
	}
}


