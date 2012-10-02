function PhysicsObject(canvas,context,theWorld, object_type, height, width, xPos , yPos, density,friction,restitution)
{
	this.x = xPos;
	this.y = yPos;

	this.world = theWorld;
	this.canvas = canvas;
	this.context = context;

	this.fixDef = new b2FixtureDef();
	this.fixDef.density = density;
	this.fixDef.friction = friction;
	this.fixDef.restitution = restitution;
	this.bodyDef = new b2BodyDef();
	//this.body = new b2Body(this.bodyDef);
	
	if(object_type=="kinematic")
	{
		this.bodyDef.type = b2Body.b2_kinematicBody;
		this.fixDef.shape = new b2PolygonShape();
		this.fixDef.shape.SetAsBox(height,width);
		this.bodyDef.position.Set(this.x, this.y);
		this.theBody=this.world.CreateBody(this.bodyDef);
		this.theBody.CreateFixture(this.fixDef);
	}

	if(object_type=="dynamic")
	{
		this.bodyDef.type = b2Body.b2_dynamicBody;
		this.fixDef.shape = new b2PolygonShape();
		this.fixDef.shape.SetAsBox(height,width);
		this.bodyDef.position.Set(this.x, this.y);
		this.theBody=this.world.CreateBody(this.bodyDef);
		this.theBody.CreateFixture(this.fixDef);
	}

	if(object_type=="static")
	{
		this.bodyDef.type = b2Body.b2_staticBody;
		this.fixDef.shape = new b2PolygonShape();
		this.fixDef.shape.SetAsBox(height,width);
		this.bodyDef.position.Set(this.x, this.y);
		this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
		
	}
	
}


