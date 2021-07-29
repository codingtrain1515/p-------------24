const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1;
var base2;

var bridge
var bridge_con;
var stones =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  base1  = new Base(width -1950 ,height/2.5,500,30);
  base2  = new Base(width - 350,height/2.5,500,30);

  stone = new Stone(width/2 , height/9,50);      

  bridge = new Bridge(15,{x: base1 .x,y: base1.y}); 

  Matter.Composite.add(bridge.body,base2.body);

  bridge_con = new Link(bridge,base2);

  frameRate(111180);

}

function draw() {
  background(51);
  
  base1.display();
  base2.display();
  stone.display()

 

 // stone.create()
  bridge.show();
  
  

  Engine.update(engine);



}

