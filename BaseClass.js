
class BaseClass{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.physicsBody = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/base.png");
      World.add(myWorld, this.physicsBody);
    }
    display(){
      var angle = this.physicsBody.angle;
      push();
      translate(this.physicsBody.position.x, this.physicsBody.position.y);
      angleMode(RADIANS)
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}