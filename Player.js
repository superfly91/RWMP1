function Player(canvas, context, world)
{
	this.PlayerBody = new PhysicsObject(canvas,context,world,"dynamic",0.125,0.2,5,5,0.1,1.0,0.0,"player");
	this.speed = 4;
	this.jumpImpulse = -3;
	this.PlayerBody.theBody.SetFixedRotation(true);
}

Player.prototype.moveLeft = function()
{
	//console.log(this.PlayerBody.theBody.GetLinearVelocity().x);
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(-this.speed,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.moveRight = function()
{
	//console.log(this.PlayerBody.theBody.GetLinearVelocity().x);
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(this.speed,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.jump = function()
{
	if(this.PlayerBody.theBody.GetLinearVelocity().y < 0.001 && this.PlayerBody.theBody.GetLinearVelocity().y > -0.001)
	{
		this.PlayerBody.theBody.ApplyForce(new b2Vec2(0,this.jumpImpulse), this.PlayerBody.theBody.GetWorldCenter());
	}
};

Player.prototype.duck = function()
{

};

Player.prototype.noInput = function()
{

};
