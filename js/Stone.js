class Stone{
    constructor(x,y,r){

        let options={
            isStatic: false,
            restitution:0.8
        }
        this.stone = Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r =r
        
        World.add(world,this.stone)
    }
    
  

    display(){

        for(var i = 0;i<= 8;i++){
            var x= random(width/2 -200,width/2 +300);
           var y = random(-10,140);
         var  stone = new Stone(x,y,80);      
           stones.push(stone);
        } 

        push()
        var pos = this.stone.position
        ellipse(pos.x,pos.y,this.r);
        pop()

    }

}