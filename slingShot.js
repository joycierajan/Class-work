class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.sling = Constraint.create(options)
        World.add(myWorld, this.sling)
        this.slingImage1=loadImage('images/sling1.png')
        this.slingImage2=loadImage('images/sling2.png')
        this.slingImage3=loadImage('images/sling3.png')
    }
    display(){
        image(this.slingImage1, 200, 20)
        image(this.slingImage2, 170, 20)
        
        if(this.sling.bodyA!=null){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            stroke(48,22,8)
            strokeWeight(3)
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.slingImage3, pointA.x -30, pointA.y -10, 15, 30)

        }
        
    }

    fly(){
        this.sling.bodyA = null
    }
}
//bodyA is birds body, thats why bird is tied to the constraint
//if we want the bird to be freed from the constraint, we have to tell the computer the bird is no longer tied to the constraint
//bodyA is NULL