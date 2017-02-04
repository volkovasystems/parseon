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
*/

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
			return JSON.parse((0, _stringify2.default)(krumb(object)));
		}

		if (type.STRING) {
			return JSON.parse(object);
		}
	} catch (error) {
		throw new Error("error re-parsing json object, " + error);
	}
};

module.exports = parseon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlb24uanMiXSwibmFtZXMiOlsia3J1bWIiLCJyZXF1aXJlIiwicHJvdHlwZSIsInBhcnNlb24iLCJvYmplY3QiLCJ0eXBlIiwiT0JKRUNUIiwiU1RSSU5HIiwiRXJyb3IiLCJKU09OIiwicGFyc2UiLCJlcnJvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1FLFVBQVUsU0FBU0EsT0FBVCxDQUFrQkMsTUFBbEIsRUFBMEI7QUFDekM7Ozs7Ozs7Ozs7O0FBV0EsS0FBSUMsT0FBT0gsUUFBU0UsTUFBVCxDQUFYO0FBQ0EsS0FBSSxDQUFDQyxLQUFLQyxNQUFOLElBQWdCLENBQUNELEtBQUtFLE1BQTFCLEVBQWtDO0FBQ2pDLFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFHO0FBQ0YsTUFBSUgsS0FBS0MsTUFBVCxFQUFpQjtBQUNoQixVQUFPRyxLQUFLQyxLQUFMLENBQVkseUJBQWdCVixNQUFPSSxNQUFQLENBQWhCLENBQVosQ0FBUDtBQUNBOztBQUVELE1BQUlDLEtBQUtFLE1BQVQsRUFBaUI7QUFDaEIsVUFBT0UsS0FBS0MsS0FBTCxDQUFZTixNQUFaLENBQVA7QUFDQTtBQUVELEVBVEQsQ0FTQyxPQUFPTyxLQUFQLEVBQWM7QUFDZCxRQUFNLElBQUlILEtBQUosb0NBQTZDRyxLQUE3QyxDQUFOO0FBQ0E7QUFDRCxDQTdCRDs7QUErQkFDLE9BQU9DLE9BQVAsR0FBaUJWLE9BQWpCIiwiZmlsZSI6InBhcnNlb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEBtb2R1bGUtbGljZW5zZTpcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcblx0XHRAbWl0LWxpY2Vuc2VcblxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3Jcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cblxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHRcdFNPRlRXQVJFLlxuXHRAZW5kLW1vZHVsZS1saWNlbnNlXG5cblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInBhcnNlb25cIixcblx0XHRcdFwicGF0aFwiOiBcInBhcnNlb24vcGFyc2Vvbi5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwicGFyc2Vvbi5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJwYXJzZW9uXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbTp2b2xrb3Zhc3lzdGVtcy9wYXJzZW9uLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwicGFyc2Vvbi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFJlLXBhcnNlIEpTT04gYmFjayBhbmQgZm9ydGguXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cbiovXG5cbmNvbnN0IGtydW1iID0gcmVxdWlyZSggXCJrcnVtYlwiICk7XG5jb25zdCBwcm90eXBlID0gcmVxdWlyZSggXCJwcm90eXBlXCIgKTtcblxuY29uc3QgcGFyc2VvbiA9IGZ1bmN0aW9uIHBhcnNlb24oIG9iamVjdCApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcIm9iamVjdDpyZXF1aXJlZFwiOiBbXG5cdFx0XHRcdFx0XCJzdHJpbmdcIixcblx0XHRcdFx0XHRcIm9iamVjdFwiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGxldCB0eXBlID0gcHJvdHlwZSggb2JqZWN0ICk7XG5cdGlmKCAhdHlwZS5PQkpFQ1QgJiYgIXR5cGUuU1RSSU5HICl7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgb2JqZWN0XCIgKTtcblx0fVxuXG5cdHRyeXtcblx0XHRpZiggdHlwZS5PQkpFQ1QgKXtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSgga3J1bWIoIG9iamVjdCApICkgKTtcblx0XHR9XG5cblx0XHRpZiggdHlwZS5TVFJJTkcgKXtcblx0XHRcdHJldHVybiBKU09OLnBhcnNlKCBvYmplY3QgKTtcblx0XHR9XG5cblx0fWNhdGNoKCBlcnJvciApe1xuXHRcdHRocm93IG5ldyBFcnJvciggYGVycm9yIHJlLXBhcnNpbmcganNvbiBvYmplY3QsICR7IGVycm9yIH1gICk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VvbjtcbiJdfQ==
