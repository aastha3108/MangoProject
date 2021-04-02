class Chain{
    constructor(A, point){
        var options = {
            bodyA: A,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
 this.img1 = loadImage("images/boy.png")
 this.img2 = loadImage("images/stone.png")

    this.chain = Constraint.create(options);
    World.add(world, this.chain);
    }
fly(){
    this.chain.bodyA = null
}
    display(){
     image(this.img1,200,20)
     image(this.img2,170,20)

        if(this.chain.bodyA){
    
        
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        push()
        if(pointA.x<220){
            stroke(48,22,8)
      strokeWeight(7)
      line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
        image(this.img3,pointA.x-30,pointA.y-10,15,30)
        }
        else{
        stroke(48,22,8)
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        line(pointA.x-20, pointA.y, pointB.x+30, pointB.y);
        image(this.img3,pointA.x+25,pointA.y-10,15,30)
        }
        pop()
    }
    }
    
}