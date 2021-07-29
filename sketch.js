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
var stone;
var bridge
var bridge_con;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  base1  = new Base(width -1950 ,height/2.5,500,30);
  base2  = new Base(width - 350,height/2.5,500,30);

  stone = new Stone(width/2 , height/9,80);

  bridge = new Bridge(15,{x: base1 .x,y: base1.y}); 

  Matter.Composite.add(base2,base1,bridge.body);

  bridge_con = new Link(bridge,base2,base1);
  frameRate(80);

}

function draw() {
  background(51);
  base1.display();
  base2.display();
  stone.display();
  bridge.show();
  Engine.update(engine);

}
