function Player(canvas, context, world)
{
	console.log(this);
	this.PlayerBody = new PhysicsObject(canvas,context,world,"dynamic",0.1,0.2,5,5,0.1,0.1,0.1);
}

Player.prototype.moveLeft = function()
{
	console.log('MOVE LEFT!!!!!!!!!!!!');
	//this.PlayerBody.bodyDef.ApplyForce();
	//this.pos = new Point(0,0);
	//this.po.bodyDef.x--;
};

Player.prototype.moveRight = function()
{
	console.log('MOVE RIGHT!!!!!!!!!!!!');
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