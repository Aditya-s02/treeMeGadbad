class Throw{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 10
        }
        this.pointB=pointB;
        this.bodyA =bodyA
        this.throw = Constraint.create(options);
        World.add(world, this.throw);
    }
    attach(body){
        this.throw.body=body;

    }
    fly(){
        this.throw.bodyA=null;
    }

    

    display(){
        if(this.throw.bodyA){
            var pointA = this.bodyA.position
            var pointB = this.pointB
            line (pointA.x,pointA.y,pointB.x,pointB.y)
            
        }
       
    }
    
}