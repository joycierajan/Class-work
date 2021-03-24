class Pig extends BaseClass {
    constructor(x, y){
      super(x,y,50,50);
      this.image = loadImage("images/enemy.png");
      this.Visibility = 255;
    }
  
   display(){
     //console.log(this.physicsBody.position.x, this.physicsBody.position.y)
     Matter.Body.setStatic(this.physicsBody, true)
     //if(this.physicsBody < 3){
      super.display();
     //}
     //else{
       /*World.remove(myWorld, this.physicsBody);
       push();
       this.Visibility = this.Visibility - 5;
       tint(255,this.Visibility);
       image(this.image, this.physicsBody.position.x, this.physicsBody.position.y, 50, 50);
       pop();*/
     //}
     
   }
  
  
  
  };