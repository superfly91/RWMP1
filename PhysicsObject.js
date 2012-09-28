function PhysicsObject(canvas,context,theWorld, object_type, height, width, xPos , yPos, density,friction,restitution)
{
	this.x = xPos;
	this.y = yPos;
	
	this.world = theWorld;
	this.canvas = canvas;
	this.context = context;
	this.b2Vec2 = Box2D.Common.Math.b2Vec2;
	this.b2AABB = Box2D.Collision.b2AAB;
	this.b2BodyDef = Box2D.Dynamics.b2BodyDef;
	this.b2Body = Box2D.Dynamics.b2Body;
	this.b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
	this.b2Fixture = Box2D.Dynamics.b2Fixture;
	this.b2World = Box2D.Dynamics.b2World;
	this.b2MassData = Box2D.Collision.Shapes.b2MassData;
	this.b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
	this.b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
	this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
	this.b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef;
   
    this.fixDef = new this.b2FixtureDef;
	this.fixDef.density = density;
    this.fixDef.friction = friction;
    this.fixDef.restitution = restitution;
    this.bodyDef = new this.b2BodyDef;
   	
   if(object_type=="dynamic")
   {
   	this.bodyDef.type = this.b2Body.b2_dynamicBody;
    this.fixDef.shape = new this.b2PolygonShape;
    this.fixDef.shape.SetAsBox(height,width);
    this.bodyDef.position.Set(this.x, this.y);
    this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
   }
   
   if(object_type=="static")
   {
   	this.bodyDef.type = this.b2Body.b2_staticBody;
    this.fixDef.shape = new this.b2PolygonShape;
   	this.fixDef.shape.SetAsBox(height,width);
    this.bodyDef.position.Set(this.x, this.y);
    this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
   	
   }
}


