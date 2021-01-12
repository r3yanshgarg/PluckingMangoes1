class Mango {
   constructor(){
   var options = {
   isStatic: true,
   restitution: 0.1,
   friction: 1,
   density: 0.4
   }

   this.body = Bodies.circle(x, y, diameter, options);
   this.diameter = diameter;
   this.image = loadImage("mango.png");
   World.add(world, this.body);
}

display(){
  translate(this.body.position.x, this.body.position.y);
  ellipseMode(CENTER);
   ImageMode(CENTER);
   this.image(this.image, 0, 0, this.diameter);

     }
}