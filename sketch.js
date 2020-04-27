
var bullet,wall,weight, speed,thickness;
function setup() {
  createCanvas(1200,400);
  bullet=createSprite(100,100,30,30);
  wall=createSprite(1200,200,60,400);
  wall.shapeColor=color(80,80,80);
  weight=random(30,52);
  speed=random(223,321);
  thickness=random(22,83);
  bullet.velocityX=15;
}
function draw() {
  background("blue");  
  isTounching(wall,bullet);
  drawSprites();
}
function damage(){
 var damage=0.5*(weight*speed*speed)/(thickness*thickness*thickness);

 if(damage>10){
  textSize(20);
  text("Not effective Wall",600,200);
  bullet.shapeColor=color(255,0,0);
 }
 if(damage<=10){
  textSize(20);
  text("Good",600,200);
  bullet.shapeColor=color(0,255,0);
 }
}
function isTounching(wall,bullet){
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    damage();
  }
}