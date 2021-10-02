class SlingShot{

    constructor(bodyA,pointB){
        var options={
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:1,

    }
    this.sling=Constraint.create(options);
    this.pointB=pointB;
    World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        if(this.sling.bodyA){
    strokeWeight(4);
    stroke("white");
line(this.pointB.x,this.pointB.y,this.sling.bodyA.position.x,this.sling.bodyA.position.y);
}
    }

}