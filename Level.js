/**
 * @author Jamie
 */

function Level(canvas, context, theWorld)
{
	this.world = theWorld;
	//this.canvas = canvas;
	//this.context = context;
	
    this.ground = new PhysicsObject(canvas,context,this.world,"static",20,2,10,(SCREEN_HEIGHT/WORLD_SCALE)+1.8,DENSITY,FRICTION,REST);
    // TOP
    this.roof = new PhysicsObject(canvas,context,this.world,"static",20,2,10,-1.8,DENSITY,FRICTION,REST);
    // LEFT
    this.leftBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,-1.8,3,DENSITY,FRICTION,REST);
    // RIGHT
    this.rightBorder = new PhysicsObject(canvas,context,this.world,"static",2,14,(SCREEN_WIDTH/WORLD_SCALE)+1.8,3,DENSITY,FRICTION,REST);
    // A PHYSICS BOX
    
    this.platform = new Array();
    // Create platforms
    for(i = 0; i < 6; i++)
    {
    
    	if(i%2==1)
    		this.platform[i] = new PhysicsObject(canvas,context,this.world,"static",13,0.1,15,(i*2.2),DENSITY,FRICTION,REST);
    	else
    		this.platform[i] = new PhysicsObject(canvas,context,this.world,"static",17.2,0.1,7,(i*2.2),DENSITY,FRICTION,REST);
    	
    }
    
    
    
     this.box2 = new PhysicsObject(canvas,context,this.world,"dynamic",0.2,0.1,4,5,0.2,FRICTION,REST);
    //this.box3 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,6,5,DENSITY,FRICTION,REST);
    //this.box4 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,8,5,DENSITY,FRICTION,REST);
    //this.box5 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,10,5,DENSITY,FRICTION,REST);
    //this.box6 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,12,5,DENSITY,FRICTION,REST);
    //this.box7 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,14,5,DENSITY,FRICTION,REST);
    //this.box8 = new PhysicsObject(canvas,context,this.world,"dynamic",1,1,16,5,DENSITY,FRICTION,REST);
	
}
