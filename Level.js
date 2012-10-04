/**
 * @author Jamie
 */

function Level(canvas, context, theWorld)
{
	this.world = theWorld;
	
    this.ground = new PhysicsObject(canvas,context,this.world,"static",20,2,10,(SCREEN_HEIGHT/WORLD_SCALE)+1.8,DENSITY,FRICTION,REST);
    // TOP
    this.roof = new PhysicsObject(canvas,context,this.world,"static",20,2,10,-1.8,DENSITY,FRICTION,REST);
    // LEFT
    this.leftBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,-1.8,3,DENSITY,FRICTION,REST);
    // RIGHT
    this.rightBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,(SCREEN_WIDTH/WORLD_SCALE)+1.8,3,DENSITY,FRICTION,REST);
    // A PHYSICS BOX
    
    this.platform = new Array();
    
    // Create the platforms
    for(i = 0; i < 6; i++)
    {
    
    	if(i%2==1)
    		this.platform[i] = new PhysicsObject(canvas,context,this.world,"static",13,0.1,15,(i*2.2),DENSITY,1.0,REST);
    	else
    		this.platform[i] = new PhysicsObject(canvas,context,this.world,"static",17.2,0.1,7,(i*2.2),DENSITY,1.0,REST);
    	
    }
 
    
     this.box2 = new PhysicsObject(canvas,context,this.world,"dynamic",0.2,0.1,4,5,0.2,FRICTION,REST);

	
}
