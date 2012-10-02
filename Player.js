function Player(canvas, context, world)
{
	console.log(this);
	this.PlayerBody = new PhysicsObject(canvas,context,world,"dynamic",0.1,0.2,5,5,0.1,0.1,0.1);
}

Player.prototype.moveLeft = function()
{
	console.log('MOVE LEFT!!!!!!!!!!!!');
	//this.PlayerBody.body.ApplyImpulse(new Vector2(1000,1000),new Vector2( this.PlayerBody.body.GetPosition().x+10,this.PlayerBody.body.GetPosition().y+10));
	//this.PlayerBody.body.SetLinearVelocity(new Vector2(-10, this.PlayerBody.body.GetLinearVelocity().y));
	this.PlayerBody.theBody.SetLinearVelocity(new Vector2(-2,0));
};

Player.prototype.moveRight = function()
{
	console.log('MOVE RIGHT!!!!!!!!!!!!');
	this.PlayerBody.theBody.SetLinearVelocity(new Vector2(2,0));
	
	//this.PlayerBody.
	//this.po.bodyDef.x--;
};

Player.prototype.jump = function()
{
	//console.log('jump');
	//this.PlayerBody.
	//this.po.bodyDef.x--;
};

Player.prototype.duck = function()
{
	//console.log('duck');
	//this.PlayerBody.
	//this.po.bodyDef.x--;
};

Player.prototype.noInput = function()
{
	this.PlayerBody.theBody.SetLinearVelocity(new Vector2(0,this.PlayerBody.theBody.GetLinearVelocity().y));
	//console.log('duck');
	//this.PlayerBody.
	//this.po.bodyDef.x--;
};
