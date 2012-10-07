function KillBalls(xPos, yPos, canvas, context, world)
{
	this.KB1InitialX = xPos;
	this.KB1InitialY = yPos;

	this.KB2InitialX = xPos + 3;
	this.KB2InitialY = yPos - 1.3;

	this.KB1 = new PhysicsObject(
		canvas,context,world,"kinematic",
		0.1, 0.1,
		this.KB1InitialX, this.KB1InitialY,
		1.0, 1.0, 1.1,
		"KB1", "circle");

	this.KB2 = new PhysicsObject(
		canvas,context,world,"kinematic",
		0.1, 0.1,
		this.KB2InitialX, this.KB2InitialY,
		1.0, 1.0, 1.1,
		"KB2", "circle");

	this.speed = 2;

	this.KB1.theBody.SetLinearVelocity(new b2Vec2(this.speed, 0));
	this.KB2.theBody.SetLinearVelocity(new b2Vec2(-this.speed, 0));

	console.log(this.KB1);
	console.log(this.KB2);
}

KillBalls.prototype.update = function()
{
	if (this.KB1.theBody.GetPosition().x >= this.KB2InitialX)
	{
		this.KB1.theBody.SetLinearVelocity(new b2Vec2(-this.speed, 0));
	}
	else if (this.KB1.theBody.GetPosition().x <= this.KB1InitialX)
	{
		this.KB1.theBody.SetLinearVelocity(new b2Vec2(this.speed, 0));
	}

	if (this.KB2.theBody.GetPosition().x >= this.KB2InitialX)
	{
		this.KB2.theBody.SetLinearVelocity(new b2Vec2(-this.speed, 0));
	}
	else if (this.KB2.theBody.GetPosition().x <= this.KB1InitialX)
	{
		this.KB2.theBody.SetLinearVelocity(new b2Vec2(this.speed, 0));
	}
};