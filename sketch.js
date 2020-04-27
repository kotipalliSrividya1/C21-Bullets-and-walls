
var bullet,wall,weight, speed,thickness;
function setup() {
  createCanvas(1200,400);
  wall=createSprite(1200,200,60,400);
  wall.shapeColor=color(80,80,80);

  weight=random(30,52);
  speed=random(223,321);
 
  bullet=new Bullet(weight,speed)
  thickness=random(22,83);
}
function draw() {
  background("blue");  
  isTounching(wall,bullet);
  drawSprites();
}
function damage(){
  bullet.obj.velocityX=0;
 var damage=0.5*(weight*speed*speed)/(thickness*thickness*thickness);

 if(damage>10){
  textSize(20);
  text("Not effective Wall",600,200);
  wall.shapeColor=color(255,0,0);
 }
 if(damage<=10){
  textSize(20);
  text("Good",600,200);
  wall.shapeColor=color(0,255,0);
 }
}
function isTounching(wallA,bulletA){

  if(wallA.x-bulletA.obj.x<wallA.width/2+bulletA.obj.width/2){
    
    damage();
  }
}


