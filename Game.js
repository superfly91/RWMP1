function Game(canvas, context, ASSET_MANAGER)
{
	this.canvas = canvas;
	this.context = context;
	this.assetManager = ASSET_MANAGER;
	this.loadAssets();

	this.marioSprite = null;
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
	this.context.drawImage(this.marioSprite, 0, 0);
};

Game.prototype.run = function()
{
	this.update();
	this.draw();
};