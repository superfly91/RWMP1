function Spikes(xPos, yPos, canvas, context, world, direction,speed)
{
	this.initialX = xPos;
	this.initialY = yPos;
	this.speed = speed;
	

	this.spikes1 = new PhysicsObject(
    	canvas,context,world,"kinematic",
    	2,0.1,
    	this.initialX,this.initialY,DENSITY,FRICTION,REST,"spikes");

	if(direction == "up")
		this.spikes1.theBody.SetLinearVelocity(new b2Vec2(0, -this.speed));
	else if(direction == "down")
		this.spikes1.theBody.SetLinearVelocity(new b2Vec2(0, this.speed));


}

Spikes.prototype.update = function()
{
	if (this.spikes1.theBody.GetPosition().y >= this.initialY+0.9)
		this.spikes1.theBody.SetLinearVelocity(new b2Vec2(0,-this.speed));	
	else if (this.spikes1.theBody.GetPosition().y <= this.initialY-0.9)
		this.spikes1.theBody.SetLinearVelocity(new b2Vec2(0,this.speed));

};