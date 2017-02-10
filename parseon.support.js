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
			"json": "circular-json",
			"krumb": "krumb",
			"protype": "protype"
		}
	@end-include
*/

var json = require("circular-json");
var krumb = require("krumb");
var protype = require("protype");

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

	var type = protype(object);
	if (!type.OBJECT && !type.STRING) {
		throw new Error("invalid object");
	}

	try {
		if (type.OBJECT) {
			return json.parse(json.stringify(krumb(object)));
		}

		if (type.STRING) {
			return json.parse(object);
		}
	} catch (error) {
		throw new Error("error re-parsing json object, " + error.stack);
	}
};

module.exports = parseon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlb24uanMiXSwibmFtZXMiOlsianNvbiIsInJlcXVpcmUiLCJrcnVtYiIsInByb3R5cGUiLCJwYXJzZW9uIiwib2JqZWN0IiwidHlwZSIsIk9CSkVDVCIsIlNUUklORyIsIkVycm9yIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJlcnJvciIsInN0YWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSxJQUFNQSxPQUFPQyxRQUFTLGVBQVQsQ0FBYjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUUsVUFBVUYsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1HLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSUMsT0FBT0gsUUFBU0UsTUFBVCxDQUFYO0FBQ0EsS0FBSSxDQUFDQyxLQUFLQyxNQUFOLElBQWdCLENBQUNELEtBQUtFLE1BQTFCLEVBQWtDO0FBQ2pDLFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0YsTUFBSUgsS0FBS0MsTUFBVCxFQUFpQjtBQUNoQixVQUFPUCxLQUFLVSxLQUFMLENBQVlWLEtBQUtXLFNBQUwsQ0FBZ0JULE1BQU9HLE1BQVAsQ0FBaEIsQ0FBWixDQUFQO0FBQ0E7O0FBRUQsTUFBSUMsS0FBS0UsTUFBVCxFQUFpQjtBQUNoQixVQUFPUixLQUFLVSxLQUFMLENBQVlMLE1BQVosQ0FBUDtBQUNBO0FBRUQsRUFURCxDQVNDLE9BQU9PLEtBQVAsRUFBYztBQUNkLFFBQU0sSUFBSUgsS0FBSixvQ0FBNkNHLE1BQU1DLEtBQW5ELENBQU47QUFDQTtBQUNELENBN0JEOztBQStCQUMsT0FBT0MsT0FBUCxHQUFpQlgsT0FBakIiLCJmaWxlIjoicGFyc2Vvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwicGFyc2VvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwicGFyc2Vvbi9wYXJzZW9uLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJwYXJzZW9uLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInBhcnNlb25cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tOnZvbGtvdmFzeXN0ZW1zL3BhcnNlb24uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJwYXJzZW9uLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcblx0XHR9XG5cdEBlbmQtbW9kdWxlLWNvbmZpZ3VyYXRpb25cblxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XG5cdFx0UmUtcGFyc2UgSlNPTiBiYWNrIGFuZCBmb3J0aC5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwianNvblwiOiBcImNpcmN1bGFyLWpzb25cIixcblx0XHRcdFwia3J1bWJcIjogXCJrcnVtYlwiLFxuXHRcdFx0XCJwcm90eXBlXCI6IFwicHJvdHlwZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGpzb24gPSByZXF1aXJlKCBcImNpcmN1bGFyLWpzb25cIiApO1xuY29uc3Qga3J1bWIgPSByZXF1aXJlKCBcImtydW1iXCIgKTtcbmNvbnN0IHByb3R5cGUgPSByZXF1aXJlKCBcInByb3R5cGVcIiApO1xuXG5jb25zdCBwYXJzZW9uID0gZnVuY3Rpb24gcGFyc2Vvbiggb2JqZWN0ICl7XG5cdC8qO1xuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHR7XG5cdFx0XHRcdFwib2JqZWN0OnJlcXVpcmVkXCI6IFtcblx0XHRcdFx0XHRcInN0cmluZ1wiLFxuXHRcdFx0XHRcdFwib2JqZWN0XCJcblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0bGV0IHR5cGUgPSBwcm90eXBlKCBvYmplY3QgKTtcblx0aWYoICF0eXBlLk9CSkVDVCAmJiAhdHlwZS5TVFJJTkcgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBvYmplY3RcIiApO1xuXHR9XG5cblx0dHJ5e1xuXHRcdGlmKCB0eXBlLk9CSkVDVCApe1xuXHRcdFx0cmV0dXJuIGpzb24ucGFyc2UoIGpzb24uc3RyaW5naWZ5KCBrcnVtYiggb2JqZWN0ICkgKSApO1xuXHRcdH1cblxuXHRcdGlmKCB0eXBlLlNUUklORyApe1xuXHRcdFx0cmV0dXJuIGpzb24ucGFyc2UoIG9iamVjdCApO1xuXHRcdH1cblxuXHR9Y2F0Y2goIGVycm9yICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBgZXJyb3IgcmUtcGFyc2luZyBqc29uIG9iamVjdCwgJHsgZXJyb3Iuc3RhY2sgfWAgKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZW9uO1xuIl19
