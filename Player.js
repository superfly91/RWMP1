function Player(canvas, context, world)
{
	this.PlayerBody = new PhysicsObject(canvas,context,world,"dynamic",0.1,0.2,5,5,0.1,0.1,0.1);
}

Player.prototype.moveLeft = function()
{
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(-2,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.moveRight = function()
{
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(2,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.jump = function()
{
	if(this.PlayerBody.theBody.GetLinearVelocity().y < 0.01 && this.PlayerBody.theBody.GetLinearVelocity().y > -0.01)
	{
		//this.velocity = new Vector2 theBody.GetLinearVelocity();
		this.PlayerBody.theBody.ApplyForce(new b2Vec2(this.PlayerBody.theBody.GetLinearVelocity().x,-3))
		
	}
	
};

Player.prototype.duck = function()
{

};

Player.prototype.noInput = function()
{

};
