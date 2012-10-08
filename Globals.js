var DENSITY = 1.0;
var FRICTION = 0.8;
var REST = 0.1;
var GRAVITY_X = 0;
var GRAVITY_Y = 5;
var SCREEN_HEIGHT = 0;
var SCREEN_WIDTH = 0;
var WORLD_SCALE = 30;
var SCREEN_HEIGHT = 0;
var SCREEN_WIDTH = 0;
var PLYR_DENSITY = 0.7;
var	PLYR_REST = 0.2;
var PLYR_FRICTION = 1.0;
var PLYR_LIVES = 5;



// Box2D
var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2MouseJointDef =  Box2D.Dynamics.Joints.b2MouseJointDef;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2Body = Box2D.Dynamics.b2Body; // This must come before bodyDef
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2AABB = Box2D.Collision.b2AAB;
var b2World = Box2D.Dynamics.b2World;
var b2MassData = Box2D.Collision.Shapes.b2MassData;

// Contact Listener
var contactListener = Box2D.Dynamics.b2ContactListener;

// Box2D draw
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;


