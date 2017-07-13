"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "parseon",
              			"path": "parseon/parseon.js",
              			"file": "parseon.js",
              			"module": "parseon",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com:volkovasystems/parseon.git",
              			"test": "parseon-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Re-parse JSON back and forth.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"jnfy": "jnfy",
              			"krumb": "krumb",
              			"parsfy": "parsfy"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var falzy = require("falzy");
var jnfy = require("jnfy");
var krumb = require("krumb");
var parsfy = require("parsfy");

var parseon = function parseon(object) {
	/*;
                                        	@meta-configuration:
                                        		{
                                        			"object:required": [
                                        				"string",
                                        				"object"
                                        			]
                                        		}
                                        	@end-meta-configuration
                                        */

	if (falzy(object)) {
		throw new Error("invalid object");
	}

	try {
		if ((typeof object === "undefined" ? "undefined" : (0, _typeof3.default)(object)) == "object") {
			return parsfy(jnfy(krumb(object)));
		}

		return parsfy(object);

	} catch (error) {
		throw new Error("cannot re-parse json object, " + error.stack);
	}
};

module.exports = parseon;

//# sourceMappingURL=parseon.support.js.map