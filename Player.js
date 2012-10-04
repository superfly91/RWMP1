function Player(canvas, context, world)
{

	this.PlayerBody = new PhysicsObject(canvas,context,world,"dynamic",0.125,0.2,5,5,0.1,1.0,0.0,"player");
	this.speed = 4;
	this.jumpForce = -0.05;
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
<<<<<<< HEAD
		this.PlayerBody.theBody.ApplyForce(new b2Vec2(this.PlayerBody.theBody.GetLinearVelocity().x,-3));
	
=======
	{
		//this.velocity = new Vector2 theBody.GetLinearVelocity();
		this.PlayerBody.theBody.ApplyImpulse(new b2Vec2(0,this.jumpForce), this.PlayerBody.theBody.GetWorldCenter());
	}
>>>>>>> Fixed player movement and locked its rotation
};

Player.prototype.duck = function()
{

};

Player.prototype.noInput = function()
{

};
