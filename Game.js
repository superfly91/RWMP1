
function Game(canvas, context, ASSET_MANAGER)
{
    var screenHeight = canvas.height;
	var screenWidth = canvas.width;
	this.canvas = canvas;
	this.context = context;
	this.assetManager = ASSET_MANAGER;
	this.loadAssets();

	this.marioSprite = null;
	
	// GLOBAL PROPERTIES
	this.glo_density = 1.0;
	this.glo_friction = 0.5;
	this.glo_rest = 0.2;
	
	this.b2World = Box2D.Dynamics.b2World;
	this.b2Vec2 = Box2D.Common.Math.b2Vec2;
	this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
         
    // SETUP WORLD	
	this.world = new this.b2World(new this.b2Vec2(0, 10),  false );  // eg. world(gravity,allow sleep)
    
    // BOTTOM (GROUND)
    this.ground = new PhysicsObject(canvas,context,this.world,"static",20,2,10,(400/30)+1.8,this.glo_density,this.glo_friction,this.glo_rest);
    // TOP
    this.roof = new PhysicsObject(canvas,context,this.world,"static",20,2,10,-1.8,this.glo_density,this.glo_friction,this.glo_rest);
    // LEFT
    this.leftBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,-1.8,3,this.glo_density,this.glo_friction,this.glo_rest);
    // RIGHT
    this.rightBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,(800/30)+1.8,3,this.glo_density,this.glo_friction,this.glo_rest);
    // A PHYSICS BOX
    this.box1 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,18,5,this.glo_density,this.glo_friction,this.glo_rest);
    
     // PLAYER
     // *** ADD CONTROLS TO THIS OBJECT ***
    this.player = new PhysicsObject(canvas,context,this.world,"dynamic",0.1,0.2,5,5,this.glo_density,this.glo_friction,this.glo_rest);
    	
	this.debugDraw = new this.b2DebugDraw();
	this.debugDraw.SetSprite(document.getElementById("surface").getContext("2d"));
	this.debugDraw.SetDrawScale(30.0);
	this.debugDraw.SetFillAlpha(1);
	
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
  			this.world.Step(1 / 60, 10, 10);
            this.world.DrawDebugData();
            this.world.ClearForces();
};

/*
	All drawing code goes here
*/
Game.prototype.draw = function()
{
	//this.context.drawImage(this.marioSprite, 0, 0);
	
	
	//this.world.DrawDebugData();
	
};

Game.prototype.run = function()
{
	this.update();
	this.draw();
};