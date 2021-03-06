class Stone{
    constructor(x, y,r) {
        var options = {
           isStatic:false,
           restitution:0,
           friction:1,
           density:1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        this.x = x
        this.y = y
        this.image = loadImage("images/stone.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        ellipseMode(RADIUS)
        image(this.image, 0, 0, this.r*2,this.r*2);
        pop();
      }
}