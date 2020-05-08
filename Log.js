class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("angry friend/ruler.jpg");
    Matter.Body.setAngle(this.body, angle);
  }
}