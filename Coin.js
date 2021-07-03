class Coin{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.image = loadImage("images/coin.png");

        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;

        this.body.position.x -= 2;
        this.body.position.y = 500;
        
        if(this.body.position.x<0){
          this.body.position.x = 900;
        }

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0,100,100);
        pop();
      }
}