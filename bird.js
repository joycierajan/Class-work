class Bird extends BaseClass{
    constructor(x,y){
        super(x,y,50,50)
        this.image = loadImage("images/bird.png")

    }
    display(){
        var pos = this.physicsBody.position;
        //pos.x = mouseX;
        //pos.y = mouseY;  
        super.display()      
    }
}
