class Drops {
    constructor(x, y, r) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 0.1,
        }
        this.x = x;
        this.y = y;
        this.r = r
        this.body = Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }

   display() {
        //var mangoPos=this.body.position;	
        updateY()
        {
            if (this.rain.position.y > height) { Matter.Body.setPosition(this.rain, { x: random(0, 400), y: random(0, 400) }) }
        }
        // rectMode(CENTER);
       // rotate(this.body.angle)
        fill(255, 0, 255)
        ellipseMode(CENTER);
       // image(this.image, 0, 0, this.r * 2, this.r * 2)

    }
    
}