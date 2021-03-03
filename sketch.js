const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;
var drops;




function setup(){
   createCanvas(400, 1100);
   engine = Engine.create();
   world = engine.world;

   for(var i=0; 1<maxDrops; i++){
       drops.push(new Drops(random(0,400),random(0,400)) )
   }
  
   Engine.run(engine);
}

function draw(){
    updateY()
    { if(this.rain.position.y > height){ Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)}) } }
     
 
    background("black");
}   

