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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlb24uc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJmYWx6eSIsInJlcXVpcmUiLCJqbmZ5Iiwia3J1bWIiLCJwYXJzZnkiLCJwYXJzZW9uIiwib2JqZWN0IiwiRXJyb3IiLCJlcnJvciIsInN0YWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQSxJQUFNRSxRQUFRRixRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1HLFNBQVNILFFBQVMsUUFBVCxDQUFmOztBQUVBLElBQU1JLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSU4sTUFBT00sTUFBUCxDQUFKLEVBQXFCO0FBQ3BCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0YsTUFBSSxRQUFPRCxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQXJCLEVBQStCO0FBQzlCLFVBQU9GLE9BQVFGLEtBQU1DLE1BQU9HLE1BQVAsQ0FBTixDQUFSLENBQVA7QUFDQTs7QUFFRCxTQUFPRixPQUFRRSxNQUFSLENBQVA7O0FBRUEsRUFQRCxDQU9DLE9BQU9FLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUQsS0FBSixtQ0FBNENDLE1BQU1DLEtBQWxELENBQU47QUFDQTtBQUNELENBMUJEOztBQTRCQUMsT0FBT0MsT0FBUCxHQUFpQk4sT0FBakIiLCJmaWxlIjoicGFyc2Vvbi5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInBhcnNlb25cIixcclxuXHRcdFx0XCJwYXRoXCI6IFwicGFyc2Vvbi9wYXJzZW9uLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInBhcnNlb24uanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJwYXJzZW9uXCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tOnZvbGtvdmFzeXN0ZW1zL3BhcnNlb24uZ2l0XCIsXHJcblx0XHRcdFwidGVzdFwiOiBcInBhcnNlb24tdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRSZS1wYXJzZSBKU09OIGJhY2sgYW5kIGZvcnRoLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0XHRcImpuZnlcIjogXCJqbmZ5XCIsXHJcblx0XHRcdFwia3J1bWJcIjogXCJrcnVtYlwiLFxyXG5cdFx0XHRcInBhcnNmeVwiOiBcInBhcnNmeVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBqbmZ5ID0gcmVxdWlyZSggXCJqbmZ5XCIgKTtcclxuY29uc3Qga3J1bWIgPSByZXF1aXJlKCBcImtydW1iXCIgKTtcclxuY29uc3QgcGFyc2Z5ID0gcmVxdWlyZSggXCJwYXJzZnlcIiApO1xyXG5cclxuY29uc3QgcGFyc2VvbiA9IGZ1bmN0aW9uIHBhcnNlb24oIG9iamVjdCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwib2JqZWN0OnJlcXVpcmVkXCI6IFtcclxuXHRcdFx0XHRcdFwic3RyaW5nXCIsXHJcblx0XHRcdFx0XHRcIm9iamVjdFwiXHJcblx0XHRcdFx0XVxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCBmYWx6eSggb2JqZWN0ICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIG9iamVjdFwiICk7XHJcblx0fVxyXG5cclxuXHR0cnl7XHJcblx0XHRpZiggdHlwZW9mIG9iamVjdCA9PSBcIm9iamVjdFwiICl7XHJcblx0XHRcdHJldHVybiBwYXJzZnkoIGpuZnkoIGtydW1iKCBvYmplY3QgKSApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBhcnNmeSggb2JqZWN0ICk7XHJcblxyXG5cdH1jYXRjaCggZXJyb3IgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggYGNhbm5vdCByZS1wYXJzZSBqc29uIG9iamVjdCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcclxuXHR9XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlb247XHJcbiJdfQ==
//# sourceMappingURL=parseon.support.js.map
