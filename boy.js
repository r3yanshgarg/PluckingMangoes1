class Boy {
    constructor(){
    var options = {
        "isStatic": true,
        "density": 2
    }

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.height = height;
    this.width = width;
    this.image = loadImage("boy.png");
    World.add(world, this.body);
}

    display(){
     var pos = this.body.position;
    rectMode(CENTER);
    fill(0);
    rect(pos.x, pos.y, this.width, this.height);
    }

}