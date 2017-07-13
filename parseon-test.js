
const assert = require( "assert" );
const parseon = require( "./parseon.js" );

assert.equal( typeof parseon( global ), "object", "should be typeof object" );

assert.deepEqual( parseon( { } ), { }, "should be equal" );

console.log( "ok" );
