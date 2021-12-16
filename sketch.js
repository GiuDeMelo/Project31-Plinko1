var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight = 300;
var score = 0;

///////////////////////////////////////////
function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  //objetos de divisão
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
    //change so it can create more divisions
    //division distance = 80 pixels


  //1ª linha de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //2ª linha de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  //3ª linha de objetos plinko
  for (var j = 25; j <=width-20; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }
  
  //4ª linha de objetos plinko
  for (var j = 0; j <=width-30; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
    
}
 
///////////////////////////////////////////
function draw() {
  background("black");

  textSize(25)
  text("Score: "+score,15,35);
  fill("white");
 
  Engine.update(engine);
  ground.display();
  
  //exibir os plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }
   
  //exibir os divisões
  for (var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //criar objetos de partículas
   if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10));
   }

   for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

}