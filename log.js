class Log extends BaseClass{
    constructor(x,y,height,angle){
        super(x,y,20,height,angle)
        Matter.Body.setAngle(this.physicsBody, angle);
        this.image = loadImage("images/wood2.png")
    }
}