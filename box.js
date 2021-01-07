class Box {
  constructor(x, y, width, height){
    var options = {
      isStatic: false
  }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  rectMode(CENTER);
  fill("white");
  rect(pos.x, pos.y, this.width, this.height);
   if (this.body.speed > 3){
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
   }
  }
}