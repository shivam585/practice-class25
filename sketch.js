const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,ground3,ground4,ball2;

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,100,100,50);
    box1.shapeColor=("red")
    


    box2 = new Box(430,130,50,50);
    box3 = new Box(450,110,150,150);
    ball2 = new ball(width/10,height/10,100,100,4);
    ground3 = new ground(100,300,600,20);
    ground4=new ground(width/2,height/1.3,width,20)


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    ground3.display();
    ground4.display();
    ball2.display();
   
}