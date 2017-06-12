
const assert = require( "assert" );
const parseon = require( "./parseon.js" );

assert.ok( parseon( global ) );
assert.deepEqual( parseon( { } ), { }, "should be equal" );

console.log( "ok" );
