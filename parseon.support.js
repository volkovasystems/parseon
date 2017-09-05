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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlb24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJqbmZ5Iiwia3J1bWIiLCJwYXJzZnkiLCJwYXJzZW9uIiwib2JqZWN0IiwiRXJyb3IiLCJlcnJvciIsInN0YWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmOztBQUVBLElBQU1JLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSU4sTUFBT00sTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0YsTUFBSSxRQUFPRCxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzlCLFVBQU9GLE9BQVFGLEtBQU1DLE1BQU9HLE1BQVAsQ0FBTixDQUFSLENBQVA7QUFDQTs7QUFFRCxTQUFPRixPQUFRRSxNQUFSLENBQVA7O0FBRUEsRUFQRCxDQU9DLE9BQU9FLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUQsS0FBSixtQ0FBNENDLE1BQU1DLEtBQWxELENBQU47QUFDQTtBQUNELENBMUJEOztBQTRCQUMsT0FBT0MsT0FBUCxHQUFpQk4sT0FBakIiLCJmaWxlIjoicGFyc2Vvbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAbW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1tb2R1bGUtbGljZW5zZVxuXG5cdEBtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJwYXJzZW9uXCIsXG5cdFx0XHRcInBhdGhcIjogXCJwYXJzZW9uL3BhcnNlb24uanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInBhcnNlb24uanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwicGFyc2VvblwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb206dm9sa292YXN5c3RlbXMvcGFyc2Vvbi5naXRcIixcblx0XHRcdFwidGVzdFwiOiBcInBhcnNlb24tdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRSZS1wYXJzZSBKU09OIGJhY2sgYW5kIGZvcnRoLlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcImpuZnlcIjogXCJqbmZ5XCIsXG5cdFx0XHRcImtydW1iXCI6IFwia3J1bWJcIixcblx0XHRcdFwicGFyc2Z5XCI6IFwicGFyc2Z5XCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IGpuZnkgPSByZXF1aXJlKCBcImpuZnlcIiApO1xuY29uc3Qga3J1bWIgPSByZXF1aXJlKCBcImtydW1iXCIgKTtcbmNvbnN0IHBhcnNmeSA9IHJlcXVpcmUoIFwicGFyc2Z5XCIgKTtcblxuY29uc3QgcGFyc2VvbiA9IGZ1bmN0aW9uIHBhcnNlb24oIG9iamVjdCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm9iamVjdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm9iamVjdFwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCBmYWx6eSggb2JqZWN0ICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBvYmplY3RcIiApO1xuXHR9XG5cblx0dHJ5e1xuXHRcdGlmKCB0eXBlb2Ygb2JqZWN0ID09IFwib2JqZWN0XCIgKXtcblx0XHRcdHJldHVybiBwYXJzZnkoIGpuZnkoIGtydW1iKCBvYmplY3QgKSApICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBhcnNmeSggb2JqZWN0ICk7XG5cblx0fWNhdGNoKCBlcnJvciApe1xuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCByZS1wYXJzZSBqc29uIG9iamVjdCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZW9uO1xuIl19
//# sourceMappingURL=parseon.support.js.map
