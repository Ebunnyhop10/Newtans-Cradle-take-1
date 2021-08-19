const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var con





var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;

var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

var bob_options={
	isStatic:true
}

	var roof_options={
		isStatic:true			
	}

	rope1 = new rope(bob1,roof,-80,0)

	rope2 = new rope(bob2,roof,-80,0)
	
	rope3 = new rope(bob3,roof,-80,0)

	rope4 = new rope(bob4,roof,-80,0)

	rope5 = new rope(bob5,roof,-80,0)
	

	roof = Bodies.rectangle(415,100,250,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(370,300,50,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(320,300,50,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(420,300,50,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(470,300,50,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(520,300,50,bob_options);
	World.add(world,bob5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("teal");

  rect(roof.position.x,roof.position.y,250,20);

  //call display() to show ropes here
show();
  
  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x,bob1.position.y,50,50);
ellipse(bob2.position.x,bob2.position.y,50,50);
ellipse(bob3.position.x,bob3.position.y,50,50);
ellipse(bob4.position.x,bob4.position.y,50,50);
ellipse(bob5.position.x,bob5.position.y,50,50);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode==UP_ARROW)
	{
		Matter.Body.applyForce(bob2,{x:0,y:0},{x:0.05,y:0});
	}
}