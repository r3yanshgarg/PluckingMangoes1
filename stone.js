class Stone{
    constructor(){
        var options = {
            friction: 0.4,
            density: 0.2,
            restitution: 0,
            isStatic: false
        }

        this.body = Bodies.circle(x, y, diameter, options);
        this.diameter = diameter;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        translate(this.body.position.x, this.body.position.y);
   ellipseMode(CENTER);
   ImageMode(CENTER);
   this.image(this.image, 0, 0, this.diameter);
    }
}