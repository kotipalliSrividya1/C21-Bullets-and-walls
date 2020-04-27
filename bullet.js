class Bullet{
    constructor(weight,speed){
        this.x=100;
        this.y=100;
        this.obj=createSprite(this.x,this.y,30,30);
        this.weight=weight;
        this.speed=speed;
        this.obj.velocityX=this.speed;
        this.obj.shapeColor=color(255);

    }
}
