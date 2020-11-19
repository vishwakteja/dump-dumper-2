class Dustbin2 {
    constructor(x, y, height,angle ) {
        var options = {
            isStatic:true
        }
        this.body =  Matter.Bodies.rectangle(x, y, height, angle,  options);
        this.width = 58;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(0, 128, 0);
        strokeWeight(4)
        stroke(0, 128, 0)
        rect( 0, 0, this.width, this.height);
        pop();
      }
    }
