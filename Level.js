/**
 * @author Jamie
 */

function Level(canvas, context, theWorld)
{
	this.world = theWorld;
	this.width = SCREEN_WIDTH/WORLD_SCALE;
	this.height = SCREEN_HEIGHT/WORLD_SCALE;
	this.PLATFORM_SIZE = 0.1;

	// // PhysicsObject(canvas,context,theWorld, object_type, height, width, xPos , yPos, density, friction ,restitution, object_name,shape)
	this.roof = new PhysicsObject(canvas,context,this.world,"static",this.width,this.PLATFORM_SIZE,0,0.1,DENSITY,FRICTION,REST,"roof");
    // LEFT
    this.ground = new PhysicsObject(canvas,context,this.world,"static",this.width,this.PLATFORM_SIZE,0,this.height-0.1,DENSITY,FRICTION,REST,"ground");
    // TOP
    this.leftBorder = new PhysicsObject(canvas,context,this.world,"static",this.PLATFORM_SIZE,this.height,0.1,0,DENSITY,FRICTION,REST,"wall");
    // RIGHT
    this.rightBorder = new PhysicsObject(canvas,context,this.world,"static",this.PLATFORM_SIZE,this.height,this.width-0.1,0,DENSITY,FRICTION,REST,"wall");
    // A PHYSICS BOX

    this.platforms = [];

    // Create the platforms
    for(i = 0; i < 6; i++)
    {
        if(i%2==1)
            this.platforms[i] = new PhysicsObject(canvas,context,this.world,"static",13,this.PLATFORM_SIZE,15,(i*2.2),DENSITY,1.0,REST,"platform");
        else
            this.platforms[i] = new PhysicsObject(canvas,context,this.world,"static",17.2,this.PLATFORM_SIZE,7,(i*2.2),DENSITY,1.0,REST,"platform");
    }

    // Create spikes - Jamie
    this.spikes1 = new PhysicsObject(
    	canvas,context,this.world,"kinematic",
    	2,this.PLATFORM_SIZE,
    	15,14,DENSITY,FRICTION,REST,"spikes");


    this.killBalls = new KillBalls(5, 4, canvas, context, this.world);
}

Level.prototype.update = function()
{
	this.killBalls.update();
};
