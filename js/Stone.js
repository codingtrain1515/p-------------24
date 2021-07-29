class Stone{
    constructor(x,y,r){

        let options={
            isStatic: false,
            friction:0.1,
            density:1 
        }
        this.stone = Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
    this.r =r
        World.add(world,this.stone)
    }

    display(){
        push()
        var pos = this.stone.position
        ellipse(pos.x,pos.y,this.r);
        pop()
    }

}