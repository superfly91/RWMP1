function Player()
{
  	this.speed = 5;
  

 	this.b2Body = Box2D.Dynamics.b2Body;
    this.bodyDef.type = this.b2Body.b2_dynamicBody;
    this.fixDef.shape = new this.b2PolygonShape;
    this.fixDef.shape.SetAsBox(0.1, 0.3);
    this.bodyDef.position.Set(5, 5);
    this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    
    this.fixDef = new this.b2FixtureDef;
	this.fixDef.density = 0.5;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 0.2;
  
}