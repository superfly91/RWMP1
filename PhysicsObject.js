/**
 * @author Jamie
 */

function PhysicsObject(canvas,context,theWorld, object_type, width, height, xPos , yPos, density, friction ,restitution, object_name,shape)
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

	// SETS DEFAULT DATA FOR THE OBJECT WHICH CAN BE RETRIEVED LATER
	this.bodyDef.userData = { name: object_name, initial_x: xPos, initial_y: yPos, friction: friction, restitution: restitution };

	switch(object_type)
	{
		case "kinematic":
			this.bodyDef.type = b2Body.b2_kinematicBody;
			break;
		case "dynamic":
			this.bodyDef.type = b2Body.b2_dynamicBody;
			break;
		case "static":
			this.bodyDef.type = b2Body.b2_staticBody;
			break;
	}

	switch(shape)
	{
		case "circle":
			this.fixDef.shape = new b2CircleShape();
			this.fixDef.shape.m_radius = height;
			break;
		default:
			this.fixDef.shape = new b2PolygonShape();
			this.fixDef.shape.SetAsBox(width, height);
			break;
	}

		this.bodyDef.position.Set(this.x, this.y);
		this.theBody = this.world.CreateBody(this.bodyDef);
		this.theBody.CreateFixture(this.fixDef);

}



