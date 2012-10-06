/**
 * @author Jamie
 */

function Level(canvas, context, theWorld)
{
	this.world = theWorld;
	this.width = SCREEN_WIDTH/WORLD_SCALE;
	this.height = SCREEN_HEIGHT/WORLD_SCALE;
	this.PLATFORM_THICKNESS = 0.25;
	
	// // PhysicsObject(canvas,context,theWorld, object_type, height, width, xPos , yPos, density, friction ,restitution, object_name,shape)
    this.ground = new PhysicsObject(canvas,context,this.world,"static",this.width,this.PLATFORM_THICKNESS,0,this.height,DENSITY,FRICTION,REST,"ground");
    // TOP
    this.roof = new PhysicsObject(canvas,context,this.world,"static",this.width,this.PLATFORM_THICKNESS,0,0,DENSITY,FRICTION,REST,"roof");
    // LEFT
    this.leftBorder = new PhysicsObject(canvas,context,this.world,"static",this.PLATFORM_THICKNESS,this.height,0,0,DENSITY,FRICTION,REST,"wall");
    // RIGHT 
    this.rightBorder = new PhysicsObject(canvas,context,this.world,"static",this.PLATFORM_THICKNESS,this.height,this.width,0,DENSITY,FRICTION,REST,"wall");
    // A PHYSICS BOX
    
    this.platform = new Array();
    
    // Create the platforms
    for(i = 0; i < 6; i++)
    {
    
    	if(i%2==1)
    		this.platform[i] = new PhysicsObject(canvas,context,this.world,"static",13,0.1,15,(i*2.2),DENSITY,1.0,REST,"platform");
    	else
    		this.platform[i] = new PhysicsObject(canvas,context,this.world,"static",17.2,0.1,7,(i*2.2),DENSITY,1.0,REST,"platform");
    	
    }
    
    // Create spikes
    

     this.spikes1 = new PhysicsObject(canvas,context,this.world,"kinematic",2,0.1,5,5.2,DENSITY,FRICTION,REST,"spikes");

	
}
