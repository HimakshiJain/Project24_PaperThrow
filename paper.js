class Paper {
    constructor(x,y, radius){
        var options = {
            isStatic: false,
            'restitution': 0,
            'friction': 0,
            'density': 2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world, this.body);
    }

    display(){
        var position = this.body.position;
        var angle = this.body.angle;

        push();
        translate(position.x, position.y);
        rotate(angle);

        ellipseMode(CENTER);

        fill("pink");
        stroke("aqua");
        strokeWeight(3);

        ellipse(0,0,this.radius, this.radius);
        pop();

    }
}