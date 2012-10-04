function Player(canvas, context, world)
{
	
	this.PlayerBody = new PhysicsObject(canvas,context,world,"dynamic",0.125,0.2,5,5,0.1,0.1,0.1,"player");
}

Player.prototype.moveLeft = function()
{
	//console.log(this.PlayerBody.theBody.GetLinearVelocity().x);
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(-2,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.moveRight = function()
{
	//console.log(this.PlayerBody.theBody.GetLinearVelocity().x);
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(2,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.jump = function()
{
	this.test_name = this.PlayerBody.theBody.GetUserData().name;
	
	console.log(this.test_name);
	
	if(this.PlayerBody.theBody.GetLinearVelocity().y < 0.001 && this.PlayerBody.theBody.GetLinearVelocity().y > -0.001)
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
