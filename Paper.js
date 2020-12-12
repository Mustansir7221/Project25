class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2
			
			
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		this.image=loadImage("assets/paper.png");
	}
	display()
	{
			
			var paperpos=this.body.position;		
			
			push()
			translate(paperpos.x, paperpos.y);
			image(this.image,0,0,20,20);
			pop()
			
	}

}
  