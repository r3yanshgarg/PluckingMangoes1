class Slingshot {
    constructor() {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.5,
          length: 175
      }

      this.sling = Constraint.create(options);
      World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}