class Paper {

    constructor(x, y, width, height) {

        var options = {
        
            'restitution':0.09,
            'friction':0.00005,
            'density':1.2
        }
        this.body =  Bodies.circle(x, y, width, options);
       this.width = width;
       this.height = height;
       this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
    
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill("pink");
        strokeWeight(4)
        stroke("pink")
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
    }