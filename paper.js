class Paper{
constructor(){
var options={
    isStatic:false,
    restitution:0.5,
    friction:0.5,
    density:1.2
}
this.body=Bodies.circle(600,300,60, options);
this.image=loadImage("paper.png")
World.add(world, this.body);


}
display(){

    var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			ellipseMode(RADIUS);
			//strokeWeight(4);
			fill(128,128,128)
        
			
			
			imageMode(CENTER)
			image(this.image, 0,0,100);
			pop()






}




}