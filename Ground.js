class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true 
        }
        this.physicsBody = Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld, this.physicsBody);

        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.physicsBody.position
        push()
        rectMode(CENTER)
        fill("Brown")
        rect(pos.x,pos.y,this.width,this.height)
        pop()

    }
}