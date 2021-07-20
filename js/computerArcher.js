class ComputerArcher {
    constructor(x, y, width, height,archerangle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: false

      };
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x, y, this.width, this.height,archerangle, options);
      this.image = loadImage("./assets/computerArcher.png");
      World.add(world, this.body);
    }
   display() {

    if(keyIsDown(RIGHT_ARROW)) {
      this.angle = 0.1;

    }

    
    if(keyIsDown(LEFT_ARROW)) {
      this.angle = -0.2;
    }


  
    var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  