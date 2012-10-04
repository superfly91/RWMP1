/**
 * @author Jamie
 */

function PhysicsObject(canvas,context,theWorld, object_type, height, width, xPos , yPos, density, friction ,restitution, object_name)
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
	
	if(object_type=="kinematic") // USE THIS OBJECT TYPE FOR OBSTACLES
		this.bodyDef.type = b2Body.b2_kinematicBody;

	if(object_type=="dynamic")
		this.bodyDef.type = b2Body.b2_dynamicBody;

	if(object_type=="static")
		this.bodyDef.type = b2Body.b2_staticBody;

		this.fixDef.shape = new b2PolygonShape();
		this.fixDef.shape.SetAsBox(height,width);
		this.bodyDef.position.Set(this.x, this.y);
		this.theBody = this.world.CreateBody(this.bodyDef);
		this.theBody.CreateFixture(this.fixDef);
	
}


