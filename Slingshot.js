class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.image1,200,90)
        image(this.image2,170,90)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(13);
            stroke(48,22,8)
            if(pointA.x < 220){
                line(pointA.x-25, pointA.y, pointB.x-15, pointB.y);
                line(pointA.x+24, pointA.y, pointB.x+24, pointB.y);
                image(this.image3,pointA.x-30,pointA.y-15,15,30)
            }
            else{
                line(pointA.x+25, pointA.y, pointB.x+15, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x-23, pointB.y);
                image(this.image3,pointA.x+25,pointA.y-10,15,30)

            }
            
        }

        
    }
    
}