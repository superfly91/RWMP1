
function Game(canvas, context, ASSET_MANAGER)
{
    SCREEN_HEIGHT = canvas.height;
	SCREEN_WIDTH = canvas.width;
	this.canvas = canvas;
	this.context = context;
	this.assetManager = ASSET_MANAGER;
	this.loadAssets();

	this.b2World = Box2D.Dynamics.b2World;
	this.b2Vec2 = Box2D.Common.Math.b2Vec2;
	this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

    // SETUP WORLD
	this.world = new this.b2World(new this.b2Vec2(GRAVITY_X, GRAVITY_Y),  false );
	
	this.debugDraw = new this.b2DebugDraw();
	this.debugDraw.SetSprite(document.getElementById("surface").getContext("2d"));
	this.debugDraw.SetDrawScale(30.0);
	this.debugDraw.SetFillAlpha(1);

	this.debugDraw.SetLineThickness(1.0);
	this.debugDraw.SetFlags(this.b2DebugDraw.e_shapeBit | this.b2DebugDraw.e_jointBit);
	this.world.SetDebugDraw(this.debugDraw);

    // BOTTOM (GROUND)
    this.ground = new PhysicsObject(canvas,context,this.world,"static",20,2,10,(SCREEN_HEIGHT/WORLD_SCALE)+1.8,DENSITY,FRICTION,REST);
    // TOP
    this.roof = new PhysicsObject(canvas,context,this.world,"static",20,2,10,-1.8,DENSITY,FRICTION,REST);
    // LEFT
    this.leftBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,-1.8,3,DENSITY,FRICTION,REST);
    // RIGHT
    this.rightBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,(SCREEN_WIDTH/WORLD_SCALE)+1.8,3,DENSITY,FRICTION,REST);
    // A PHYSICS BOX
    this.box1 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,2,5,DENSITY,FRICTION,REST);
    
    //this.box2 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,4,5,DENSITY,FRICTION,REST);
    //this.box3 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,6,5,DENSITY,FRICTION,REST);
    //this.box4 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,8,5,DENSITY,FRICTION,REST);
    //this.box5 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,10,5,DENSITY,FRICTION,REST);
    //this.box6 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,12,5,DENSITY,FRICTION,REST);
    //this.box7 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,14,5,DENSITY,FRICTION,REST);
    //this.box8 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,16,5,DENSITY,FRICTION,REST);
    
     // PLAYER
     // *** ADD CONTROLS TO THIS OBJECT ***
   
	 this.player = new Player(this.canvas, this.context, this.world);


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
    this.world.ClearForces();
    //
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