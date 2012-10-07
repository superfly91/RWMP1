function Player(canvas, context, world)
{

	this.mPOS = new b2Vec2((SCREEN_WIDTH-10)/WORLD_SCALE,(SCREEN_HEIGHT-10)/WORLD_SCALE);
	this.name = "player";
	this.height = 0.2;
	this.width = 0.13;
	this.lives = PLYR_LIVES;

	// PhysicsObject(canvas,context,theWorld, object_type, height, width, xPos , yPos, density, friction ,restitution, object_name,shape)
	this.PlayerBody = new PhysicsObject(
		canvas,context,world,"dynamic",
		this.width,this.height,
		this.mPOS.x,this.mPOS.y,
		PLYR_DENSITY,PLYR_FRICTION,PLYR_REST,
		this.name);
		
	this.speed = 5;
	this.jumpImpulse = -5;
	this.PlayerBody.theBody.SetFixedRotation(true);
	this.moveLeft = false;
	this.moveRight = false;
	this.jump = false;
}

Player.prototype.update = function()
{
	if(this.moveLeft === true && this.PlayerBody.theBody.GetLinearVelocity().x<this.speed)
		this.DoMoveLeft();

	if(this.moveRight === true && this.PlayerBody.theBody.GetLinearVelocity().x>-this.speed)
		this.DoMoveRight();
	
	
};


Player.prototype.DoMoveLeft = function()
{
	//console.log(this.PlayerBody.theBody.GetLinearVelocity().x);
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(-this.speed,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.DoMoveRight = function()
{
	//console.log(this.PlayerBody.theBody.GetLinearVelocity().x);
	this.PlayerBody.theBody.SetLinearVelocity(new b2Vec2(this.speed,this.PlayerBody.theBody.GetLinearVelocity().y));
};

Player.prototype.DoJump = function()
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

Player.prototype.died = function()
{

	//this.bodyDef.position.Set(this.mPOS);
	//this.PlayerBody.theBody.SetPosition(this.mPOS);
	this.lives-=1;

};
