class Dustbin {
    constructor(x, y, height,angle ) {
        var options = {
            isStatic:true
        }
        this.body =  Matter.Bodies.rectangle(x, y, height, angle,  options);
        this.width = 70;
        this.height = height;
        this.image=loadImage("dustbingreen.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        strokeWeight(4)
        stroke("green")
        image(this.image, 0, 0, this.width, 100);
        pop();
      }
    }
