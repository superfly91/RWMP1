
function Game(canvas, context, ASSET_MANAGER)
{
    var screenHeight = canvas.height;
	var screenWidth = canvas.width;
	this.canvas = canvas;
	this.context = context;
	this.assetManager = ASSET_MANAGER;
	this.loadAssets();

	this.marioSprite = null;
	
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
	this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 0.2;
         
    this.bodyDef = new this.b2BodyDef;
         
    // create ground
		
	this.world = new this.b2World( new this.b2Vec2(0, 10),  true );  // eg. world(gravity,sleep)
	
    this.bodyDef.type = this.b2Body.b2_staticBody;
    this.fixDef.shape = new this.b2PolygonShape;
    this.fixDef.shape.SetAsBox(20, 2);
    this.bodyDef.position.Set(10, 400 / 5);
    this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.bodyDef.position.Set(10, -1.8);
    this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.fixDef.shape.SetAsBox(2, 14);
    this.bodyDef.position.Set(-1.8, 13);
    this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.bodyDef.position.Set(21.8, 13);
    this.world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
	
	this.debugDraw = new this.b2DebugDraw();
	this.debugDraw.SetSprite(document.getElementById("surface").getContext("2d"));
	this.debugDraw.SetDrawScale(30.0);
	this.debugDraw.SetFillAlpha(1.0);
	this.debugDraw.SetLineThickness(1.0);
	this.debugDraw.SetFlags(this.b2DebugDraw.e_shapeBit | this.b2DebugDraw.e_jointBit);
	this.world.SetDebugDraw(this.debugDraw);
}

/*
	Function to load the game assets.

	To load an asset use:
		ASSET_MANAGER.queueDownload('img/foo.png');
*/
Game.prototype.loadAssets = function()
{
	console.log("Loading assets");

	this.assetManager.queueDownload('img/mario.png');
};

/*
	Put all initialization code here.
	Runs after all of the assets have been loaded
*/
Game.prototype.init = function()
{
	console.log("Initializing the game");
	
	this.marioSprite = this.assetManager.getAsset('img/mario.png');
};

/*
	All of the game logic goes here.
	Don't put any drawing code here.
*/
Game.prototype.update = function()
{
 
};

/*
	All drawing code goes here
*/
Game.prototype.draw = function()
{
	//this.context.drawImage(this.marioSprite, 0, 0);
	
	
	this.world.DrawDebugData();
	
};

Game.prototype.run = function()
{
	this.update();
	this.draw();
};