const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var p1,p2
var l1,l2,l3,l4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    p1= new pig(810,350);
    l1= new log(810,260,300,PI/2);
    box3= new Box(700,240,70,70);
    box4= new Box(920,240,70,70);
    p2= new pig(810,220);
    l2= new log(810,180,300,PI/2);
    box5=new Box(810,160,70,70);
    l3= new log(760,120,150,PI/7);
    l4= new log(870,120,150,-PI/7);
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    p1.display();
    p2.display();
    
    l1.display();
    l2.display();
    l3.display();
    l4.display();

}