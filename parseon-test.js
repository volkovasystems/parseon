
const assert = require( "assert" );
const parseon = require( "./parseon.js" );

assert.equal( typeof parseon( global ), "object", "should be equal to 'object'" );

assert.deepEqual( parseon( { "name": "bogus" } ), { "name": "bogus" }, "should be equal to { 'name': 'bogus' }" );

console.log( "ok" );
