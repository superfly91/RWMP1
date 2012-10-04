
function Game(canvas, context, ASSET_MANAGER)
{
    SCREEN_HEIGHT = canvas.height;
	SCREEN_WIDTH = canvas.width;
	
	this.canvas = canvas;
	this.context = context;
	this.assetManager = ASSET_MANAGER;
	this.loadAssets();

	// CREATE A BOX 2D WORLD
	this.b2World = Box2D.Dynamics.b2World;
	this.b2Vec2 = Box2D.Common.Math.b2Vec2;
	this.b2DebugDraw = Box2D.Dynamics.b2DebugDraw;

    // SETUP WORLD
	this.world = new this.b2World(new this.b2Vec2(GRAVITY_X, GRAVITY_Y),  false );
	// SET UP BOX2D DRAW
	this.debugDraw = new this.b2DebugDraw();
	this.debugDraw.SetSprite(document.getElementById("surface").getContext("2d"));
	this.debugDraw.SetDrawScale(30.0);
	this.debugDraw.SetFillAlpha(1);
	this.debugDraw.SetLineThickness(1.0);
	this.debugDraw.SetFlags(this.b2DebugDraw.e_shapeBit | this.b2DebugDraw.e_jointBit);
	this.world.SetDebugDraw(this.debugDraw);

    // CREATE LEVEL
     this.level1 = new Level(this.canvas, this.context, this.world);

     // PLAYER
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
	if(this.player.moveLeft == true)		
		this.player.DoMoveLeft();
	
	if(this.player.jump == true)
		this.player.DoJump();
	
	if(this.player.moveRight == true)
		this.player.DoMoveRight();	
		
	this.world.Step(1 / 60, 10, 10);
    this.world.ClearForces();
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