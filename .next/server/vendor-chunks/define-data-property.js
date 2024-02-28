"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/define-data-property";
exports.ids = ["vendor-chunks/define-data-property"];
exports.modules = {

/***/ "(rsc)/./node_modules/define-data-property/index.js":
/*!****************************************************!*\
  !*** ./node_modules/define-data-property/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar hasPropertyDescriptors = __webpack_require__(/*! has-property-descriptors */ \"(rsc)/./node_modules/has-property-descriptors/index.js\")();\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(rsc)/./node_modules/get-intrinsic/index.js\");\nvar $defineProperty = hasPropertyDescriptors && GetIntrinsic(\"%Object.defineProperty%\", true);\nif ($defineProperty) {\n    try {\n        $defineProperty({}, \"a\", {\n            value: 1\n        });\n    } catch (e) {\n        // IE 8 has a broken defineProperty\n        $defineProperty = false;\n    }\n}\nvar $SyntaxError = GetIntrinsic(\"%SyntaxError%\");\nvar $TypeError = GetIntrinsic(\"%TypeError%\");\nvar gopd = __webpack_require__(/*! gopd */ \"(rsc)/./node_modules/gopd/index.js\");\n/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */ module.exports = function defineDataProperty(obj, property, value) {\n    if (!obj || typeof obj !== \"object\" && typeof obj !== \"function\") {\n        throw new $TypeError(\"`obj` must be an object or a function`\");\n    }\n    if (typeof property !== \"string\" && typeof property !== \"symbol\") {\n        throw new $TypeError(\"`property` must be a string or a symbol`\");\n    }\n    if (arguments.length > 3 && typeof arguments[3] !== \"boolean\" && arguments[3] !== null) {\n        throw new $TypeError(\"`nonEnumerable`, if provided, must be a boolean or null\");\n    }\n    if (arguments.length > 4 && typeof arguments[4] !== \"boolean\" && arguments[4] !== null) {\n        throw new $TypeError(\"`nonWritable`, if provided, must be a boolean or null\");\n    }\n    if (arguments.length > 5 && typeof arguments[5] !== \"boolean\" && arguments[5] !== null) {\n        throw new $TypeError(\"`nonConfigurable`, if provided, must be a boolean or null\");\n    }\n    if (arguments.length > 6 && typeof arguments[6] !== \"boolean\") {\n        throw new $TypeError(\"`loose`, if provided, must be a boolean\");\n    }\n    var nonEnumerable = arguments.length > 3 ? arguments[3] : null;\n    var nonWritable = arguments.length > 4 ? arguments[4] : null;\n    var nonConfigurable = arguments.length > 5 ? arguments[5] : null;\n    var loose = arguments.length > 6 ? arguments[6] : false;\n    /* @type {false | TypedPropertyDescriptor<unknown>} */ var desc = !!gopd && gopd(obj, property);\n    if ($defineProperty) {\n        $defineProperty(obj, property, {\n            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,\n            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,\n            value: value,\n            writable: nonWritable === null && desc ? desc.writable : !nonWritable\n        });\n    } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {\n        // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable\n        obj[property] = value; // eslint-disable-line no-param-reassign\n    } else {\n        throw new $SyntaxError(\"This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVmaW5lLWRhdGEtcHJvcGVydHkvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxJQUFJQSx5QkFBeUJDLG1CQUFPQSxDQUFDO0FBRXJDLElBQUlDLGVBQWVELG1CQUFPQSxDQUFDO0FBRTNCLElBQUlFLGtCQUFrQkgsMEJBQTBCRSxhQUFhLDJCQUEyQjtBQUN4RixJQUFJQyxpQkFBaUI7SUFDcEIsSUFBSTtRQUNIQSxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUs7WUFBRUMsT0FBTztRQUFFO0lBQ3JDLEVBQUUsT0FBT0MsR0FBRztRQUNYLG1DQUFtQztRQUNuQ0Ysa0JBQWtCO0lBQ25CO0FBQ0Q7QUFFQSxJQUFJRyxlQUFlSixhQUFhO0FBQ2hDLElBQUlLLGFBQWFMLGFBQWE7QUFFOUIsSUFBSU0sT0FBT1AsbUJBQU9BLENBQUM7QUFFbkIsZ05BQWdOLEdBQ2hOUSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsbUJBQ3pCQyxHQUFHLEVBQ0hDLFFBQVEsRUFDUlQsS0FBSztJQUVMLElBQUksQ0FBQ1EsT0FBUSxPQUFPQSxRQUFRLFlBQVksT0FBT0EsUUFBUSxZQUFhO1FBQ25FLE1BQU0sSUFBSUwsV0FBVztJQUN0QjtJQUNBLElBQUksT0FBT00sYUFBYSxZQUFZLE9BQU9BLGFBQWEsVUFBVTtRQUNqRSxNQUFNLElBQUlOLFdBQVc7SUFDdEI7SUFDQSxJQUFJTyxVQUFVQyxNQUFNLEdBQUcsS0FBSyxPQUFPRCxTQUFTLENBQUMsRUFBRSxLQUFLLGFBQWFBLFNBQVMsQ0FBQyxFQUFFLEtBQUssTUFBTTtRQUN2RixNQUFNLElBQUlQLFdBQVc7SUFDdEI7SUFDQSxJQUFJTyxVQUFVQyxNQUFNLEdBQUcsS0FBSyxPQUFPRCxTQUFTLENBQUMsRUFBRSxLQUFLLGFBQWFBLFNBQVMsQ0FBQyxFQUFFLEtBQUssTUFBTTtRQUN2RixNQUFNLElBQUlQLFdBQVc7SUFDdEI7SUFDQSxJQUFJTyxVQUFVQyxNQUFNLEdBQUcsS0FBSyxPQUFPRCxTQUFTLENBQUMsRUFBRSxLQUFLLGFBQWFBLFNBQVMsQ0FBQyxFQUFFLEtBQUssTUFBTTtRQUN2RixNQUFNLElBQUlQLFdBQVc7SUFDdEI7SUFDQSxJQUFJTyxVQUFVQyxNQUFNLEdBQUcsS0FBSyxPQUFPRCxTQUFTLENBQUMsRUFBRSxLQUFLLFdBQVc7UUFDOUQsTUFBTSxJQUFJUCxXQUFXO0lBQ3RCO0lBRUEsSUFBSVMsZ0JBQWdCRixVQUFVQyxNQUFNLEdBQUcsSUFBSUQsU0FBUyxDQUFDLEVBQUUsR0FBRztJQUMxRCxJQUFJRyxjQUFjSCxVQUFVQyxNQUFNLEdBQUcsSUFBSUQsU0FBUyxDQUFDLEVBQUUsR0FBRztJQUN4RCxJQUFJSSxrQkFBa0JKLFVBQVVDLE1BQU0sR0FBRyxJQUFJRCxTQUFTLENBQUMsRUFBRSxHQUFHO0lBQzVELElBQUlLLFFBQVFMLFVBQVVDLE1BQU0sR0FBRyxJQUFJRCxTQUFTLENBQUMsRUFBRSxHQUFHO0lBRWxELG9EQUFvRCxHQUNwRCxJQUFJTSxPQUFPLENBQUMsQ0FBQ1osUUFBUUEsS0FBS0ksS0FBS0M7SUFFL0IsSUFBSVYsaUJBQWlCO1FBQ3BCQSxnQkFBZ0JTLEtBQUtDLFVBQVU7WUFDOUJRLGNBQWNILG9CQUFvQixRQUFRRSxPQUFPQSxLQUFLQyxZQUFZLEdBQUcsQ0FBQ0g7WUFDdEVJLFlBQVlOLGtCQUFrQixRQUFRSSxPQUFPQSxLQUFLRSxVQUFVLEdBQUcsQ0FBQ047WUFDaEVaLE9BQU9BO1lBQ1BtQixVQUFVTixnQkFBZ0IsUUFBUUcsT0FBT0EsS0FBS0csUUFBUSxHQUFHLENBQUNOO1FBQzNEO0lBQ0QsT0FBTyxJQUFJRSxTQUFVLENBQUNILGlCQUFpQixDQUFDQyxlQUFlLENBQUNDLGlCQUFrQjtRQUN6RSxvSEFBb0g7UUFDcEhOLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHVCxPQUFPLHdDQUF3QztJQUNoRSxPQUFPO1FBQ04sTUFBTSxJQUFJRSxhQUFhO0lBQ3hCO0FBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldmVudGx5Ly4vbm9kZV9tb2R1bGVzL2RlZmluZS1kYXRhLXByb3BlcnR5L2luZGV4LmpzPzE0OTciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9ycyA9IHJlcXVpcmUoJ2hhcy1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpKCk7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3JzICYmIEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gZmFsc2U7XG5cdH1cbn1cblxudmFyICRTeW50YXhFcnJvciA9IEdldEludHJpbnNpYygnJVN5bnRheEVycm9yJScpO1xudmFyICRUeXBlRXJyb3IgPSBHZXRJbnRyaW5zaWMoJyVUeXBlRXJyb3IlJyk7XG5cbnZhciBnb3BkID0gcmVxdWlyZSgnZ29wZCcpO1xuXG4vKiogQHR5cGUgeyhvYmo6IFJlY29yZDxQcm9wZXJ0eUtleSwgdW5rbm93bj4sIHByb3BlcnR5OiBQcm9wZXJ0eUtleSwgdmFsdWU6IHVua25vd24sIG5vbkVudW1lcmFibGU/OiBib29sZWFuIHwgbnVsbCwgbm9uV3JpdGFibGU/OiBib29sZWFuIHwgbnVsbCwgbm9uQ29uZmlndXJhYmxlPzogYm9vbGVhbiB8IG51bGwsIGxvb3NlPzogYm9vbGVhbikgPT4gdm9pZH0gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lRGF0YVByb3BlcnR5KFxuXHRvYmosXG5cdHByb3BlcnR5LFxuXHR2YWx1ZVxuKSB7XG5cdGlmICghb2JqIHx8ICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgb2JqYCBtdXN0IGJlIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uYCcpO1xuXHR9XG5cdGlmICh0eXBlb2YgcHJvcGVydHkgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wZXJ0eSAhPT0gJ3N5bWJvbCcpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYHByb3BlcnR5YCBtdXN0IGJlIGEgc3RyaW5nIG9yIGEgc3ltYm9sYCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdICE9PSAnYm9vbGVhbicgJiYgYXJndW1lbnRzWzNdICE9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Bub25FbnVtZXJhYmxlYCwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYSBib29sZWFuIG9yIG51bGwnKTtcblx0fVxuXHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDQgJiYgdHlwZW9mIGFyZ3VtZW50c1s0XSAhPT0gJ2Jvb2xlYW4nICYmIGFyZ3VtZW50c1s0XSAhPT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdgbm9uV3JpdGFibGVgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4gb3IgbnVsbCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNSAmJiB0eXBlb2YgYXJndW1lbnRzWzVdICE9PSAnYm9vbGVhbicgJiYgYXJndW1lbnRzWzVdICE9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3ICRUeXBlRXJyb3IoJ2Bub25Db25maWd1cmFibGVgLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIGJvb2xlYW4gb3IgbnVsbCcpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gNiAmJiB0eXBlb2YgYXJndW1lbnRzWzZdICE9PSAnYm9vbGVhbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignYGxvb3NlYCwgaWYgcHJvdmlkZWQsIG11c3QgYmUgYSBib29sZWFuJyk7XG5cdH1cblxuXHR2YXIgbm9uRW51bWVyYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzID8gYXJndW1lbnRzWzNdIDogbnVsbDtcblx0dmFyIG5vbldyaXRhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDQgPyBhcmd1bWVudHNbNF0gOiBudWxsO1xuXHR2YXIgbm9uQ29uZmlndXJhYmxlID0gYXJndW1lbnRzLmxlbmd0aCA+IDUgPyBhcmd1bWVudHNbNV0gOiBudWxsO1xuXHR2YXIgbG9vc2UgPSBhcmd1bWVudHMubGVuZ3RoID4gNiA/IGFyZ3VtZW50c1s2XSA6IGZhbHNlO1xuXG5cdC8qIEB0eXBlIHtmYWxzZSB8IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPHVua25vd24+fSAqL1xuXHR2YXIgZGVzYyA9ICEhZ29wZCAmJiBnb3BkKG9iaiwgcHJvcGVydHkpO1xuXG5cdGlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0XHQkZGVmaW5lUHJvcGVydHkob2JqLCBwcm9wZXJ0eSwge1xuXHRcdFx0Y29uZmlndXJhYmxlOiBub25Db25maWd1cmFibGUgPT09IG51bGwgJiYgZGVzYyA/IGRlc2MuY29uZmlndXJhYmxlIDogIW5vbkNvbmZpZ3VyYWJsZSxcblx0XHRcdGVudW1lcmFibGU6IG5vbkVudW1lcmFibGUgPT09IG51bGwgJiYgZGVzYyA/IGRlc2MuZW51bWVyYWJsZSA6ICFub25FbnVtZXJhYmxlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0d3JpdGFibGU6IG5vbldyaXRhYmxlID09PSBudWxsICYmIGRlc2MgPyBkZXNjLndyaXRhYmxlIDogIW5vbldyaXRhYmxlXG5cdFx0fSk7XG5cdH0gZWxzZSBpZiAobG9vc2UgfHwgKCFub25FbnVtZXJhYmxlICYmICFub25Xcml0YWJsZSAmJiAhbm9uQ29uZmlndXJhYmxlKSkge1xuXHRcdC8vIG11c3QgZmFsbCBiYWNrIHRvIFtbU2V0XV0sIGFuZCB3YXMgbm90IGV4cGxpY2l0bHkgYXNrZWQgdG8gbWFrZSBub24tZW51bWVyYWJsZSwgbm9uLXdyaXRhYmxlLCBvciBub24tY29uZmlndXJhYmxlXG5cdFx0b2JqW3Byb3BlcnR5XSA9IHZhbHVlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcignVGhpcyBlbnZpcm9ubWVudCBkb2VzIG5vdCBzdXBwb3J0IGRlZmluaW5nIGEgcHJvcGVydHkgYXMgbm9uLWNvbmZpZ3VyYWJsZSwgbm9uLXdyaXRhYmxlLCBvciBub24tZW51bWVyYWJsZS4nKTtcblx0fVxufTtcbiJdLCJuYW1lcyI6WyJoYXNQcm9wZXJ0eURlc2NyaXB0b3JzIiwicmVxdWlyZSIsIkdldEludHJpbnNpYyIsIiRkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZSIsIiRTeW50YXhFcnJvciIsIiRUeXBlRXJyb3IiLCJnb3BkIiwibW9kdWxlIiwiZXhwb3J0cyIsImRlZmluZURhdGFQcm9wZXJ0eSIsIm9iaiIsInByb3BlcnR5IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwibm9uRW51bWVyYWJsZSIsIm5vbldyaXRhYmxlIiwibm9uQ29uZmlndXJhYmxlIiwibG9vc2UiLCJkZXNjIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/define-data-property/index.js\n");

/***/ })

};
;