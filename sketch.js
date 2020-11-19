
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin1, dustbin2, dustbin3, dustbin4,  ground;
function preload(){
	





}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	
		
	Engine.run(engine);
	ground=new Surface(1, 400, 222000, 8)

	paper= new Paper(400, 370,39, 39);  
 dustbin1 = new Dustbin(700, 348, 0, PI/10)
 dustbin2 = new Dustbin2(633, 348, 100, PI/10 )
 dustbin3 = new Dustbin2(760, 348, 100, PI/10 )
 
 
 keyPressed();
}



function draw() {
  rectMode(CENTER);
  background("green");
  
  
 
  
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
 


}

function keyPressed () {
		
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position, {x:190, y:865} )
	}

}


  







