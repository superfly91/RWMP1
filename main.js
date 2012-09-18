/*
	Author: Ronan Farrell, ronanfarrell.me
*/

var canvas = document.getElementById('surface');
var context = canvas.getContext('2d');

var ASSET_MANAGER = new AssetManager();

var game = new Game(canvas, context, ASSET_MANAGER);

window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              window.oRequestAnimationFrame      ||
              window.msRequestAnimationFrame     ||
              function(/* function */ callback){
                window.setTimeout(callback, 1000 / 60);
              };
})();

/*
	Function to run the game
	TODO: Optimize so that draw and update are separate
*/
function run()
{
	console.log("Starting game");
	(function loop(){
      requestAnimFrame(loop);
      game.run();
    })();
}

/*
	Downloads all sprites in the queue,
	then initialises the game and runs it.
*/
ASSET_MANAGER.downloadAll(function()
{
	game.init();
	run();
});