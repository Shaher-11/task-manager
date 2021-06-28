/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nhtml {\n  min-width: 22rem;\n  min-height: 44rem;\n  display: block;\n  font-family: 'Raleway', sans-serif;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  min-width: 22rem;\n  display: block;\n}\n\n/* events classes */\n\n.tabcontent {\n  display: none;\n}\n\n.shown {\n  display: block !important;\n}\n\n.add_proj_icon {\n  width: 0.8rem !important;\n  margin-left: 0.5rem;\n  cursor: pointer;\n}\n\n.hide {\n  display: none !important;\n}\n\n/* grid */\n\n#container {\n  display: flex;\n  flex-direction: row;\n}\n\n#project_nav {\n  width: 30%;\n  min-height: 100vh;\n  background-color: #64da3c;\n  padding: 3rem 1rem;\n}\n\n#tasks_container {\n  width: 70%;\n  min-height: 100vh;\n  padding: 3rem 6%;\n}\n\n.logo_project {\n  font-size: 2rem;\n  font-family: 'Abril Fatface', cursive;\n  color: #e63946;\n  margin-bottom: 2rem;\n}\n\n#add_project {\n  width: 100%;\n  padding: 1rem 0.5rem;\n  border: none;\n  background-color: transparent;\n  border-bottom: 0.5px solid #085585;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: #1d3557;\n}\n\n#add_project:hover {\n  background-color: #0274b63a;\n  color: #e63946;\n}\n\n#tabs {\n  margin-top: 1rem;\n}\n\n.project_container {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.5rem 0;\n  border-bottom: 0.5px solid #0e666ba8;\n}\n\n.span_project {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tablinks {\n  padding: 0.5rem 0.5rem;\n  background-color: transparent;\n  border: none;\n  color: #14213d;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.tablinks:hover {\n  background-color: #1a7391e0;\n  color: #0077b6;\n}\n\n.project_header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 0.5px solid #285672;\n  padding-bottom: 1rem;\n  margin-bottom: 0.5rem;\n}\n\n.header_title {\n  color: #0077b6;\n  font-size: 1.4rem;\n  font-weight: 700;\n  font-family: 'Abril Fatface', cursive;\n}\n\n.header_add_task {\n  border: none;\n  background-color: transparent;\n  padding: 0.5rem;\n  position: relative;\n  z-index: 20;\n  cursor: pointer;\n  width: 7rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #14213d;\n  overflow: hidden;\n}\n\n.header_add_task img,\n.header_add_task span {\n  position: absolute;\n  z-index: -1;\n}\n\n.header_add_task span {\n  right: 0.5rem;\n}\n\n.tasks_wrapper {\n  margin-top: 1rem;\n}\n\n.task_card {\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.div_show_mode_top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.div_show_mode_left {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.div_show_mode_left h3 {\n  font-weight: 800;\n  color: #14213d;\n}\n\n.priority_box {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.6rem;\n  border-radius: 50%;\n}\n\n.priority_box_low {\n  background-color: #a8dadc;\n}\n\n.priority_box_medium {\n  background-color: #ffb703;\n}\n\n.priority_box_hight {\n  background-color: #e63946;\n}\n\n.div_show_mode_right span {\n  font-size: 0.8rem;\n  color: #457b9d;\n}\n\n.div_show_mode_buttom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 1rem;\n}\n\n.display_task_description {\n  color: rgb(226, 76, 76);\n  font-size: 0.8rem;\n}\n\n.task_status {\n  font-size: 0.7rem;\n  padding: 0.3rem;\n  border-radius: 5px;\n}\n\n.task_status_To-do {\n  color: #e63946;\n  background-color: #e6394760;\n  border: #e63946 0.5px solid;\n}\n\n.task_status_In-progress {\n  color: #f3722c;\n  background-color: #f3722c5b;\n  border: #f3722c 0.5px solid;\n}\n\n.task_status_Done {\n  color: #00a896;\n  background-color: #00a8975d;\n  border: #00a896 0.5px solid;\n}\n\n/* forms */\n\ninput {\n  padding: 0.1rem 0.3rem;\n\n  /* border-radius: 5px; */\n  border: 0.5px solid #0076b688;\n}\n\ninput::placeholder {\n  font-size: 0.7rem;\n  color: rgb(112, 109, 109);\n}\n\nlabel {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #14213d;\n  margin-right: 0.5rem;\n}\n\n#project_title {\n  width: 100%;\n}\n\n#add_project_form {\n  margin-top: 0.3rem;\n  background-color: white;\n  border-radius: 1px;\n  padding: 1rem;\n}\n\n.add_project_form_buttons {\n  margin-top: 0.5rem;\n  display: flex;\n}\n\n.add_project_form_buttons button {\n  flex-grow: 1;\n}\n\n.submit_btn {\n  color: #1d3557;\n  background-color: #219dbc5e;\n  border-radius: 2px;\n  padding: 0.2rem;\n  cursor: pointer;\n}\n\n.cancel_btn {\n  color: #e63946;\n  background-color: #e6394759;\n  border-radius: 2px;\n  padding: 0.2rem;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nhtml {\n  min-width: 22rem;\n  min-height: 44rem;\n  display: block;\n  font-family: 'Raleway', sans-serif;\n}\n\nbody {\n  width: 100%;\n  min-height: 100vh;\n  min-width: 22rem;\n  display: block;\n}\n\n/* events classes */\n\n.tabcontent {\n  display: none;\n}\n\n.shown {\n  display: block !important;\n}\n\n.add_proj_icon {\n  width: 0.8rem !important;\n  margin-left: 0.5rem;\n  cursor: pointer;\n}\n\n.hide {\n  display: none !important;\n}\n\n/* grid */\n\n#container {\n  display: flex;\n  flex-direction: row;\n}\n\n#project_nav {\n  width: 30%;\n  min-height: 100vh;\n  background-color: #64da3c;\n  padding: 3rem 1rem;\n}\n\n#tasks_container {\n  width: 70%;\n  min-height: 100vh;\n  padding: 3rem 6%;\n}\n\n.logo_project {\n  font-size: 2rem;\n  font-family: 'Abril Fatface', cursive;\n  color: #e63946;\n  margin-bottom: 2rem;\n}\n\n#add_project {\n  width: 100%;\n  padding: 1rem 0.5rem;\n  border: none;\n  background-color: transparent;\n  border-bottom: 0.5px solid #085585;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  font-weight: 700;\n  font-size: 1.2rem;\n  color: #1d3557;\n}\n\n#add_project:hover {\n  background-color: #0274b63a;\n  color: #e63946;\n}\n\n#tabs {\n  margin-top: 1rem;\n}\n\n.project_container {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.5rem 0;\n  border-bottom: 0.5px solid #0e666ba8;\n}\n\n.span_project {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tablinks {\n  padding: 0.5rem 0.5rem;\n  background-color: transparent;\n  border: none;\n  color: #14213d;\n  font-size: 1rem;\n  cursor: pointer;\n}\n\n.tablinks:hover {\n  background-color: #1a7391e0;\n  color: #0077b6;\n}\n\n.project_header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 0.5px solid #285672;\n  padding-bottom: 1rem;\n  margin-bottom: 0.5rem;\n}\n\n.header_title {\n  color: #0077b6;\n  font-size: 1.4rem;\n  font-weight: 700;\n  font-family: 'Abril Fatface', cursive;\n}\n\n.header_add_task {\n  border: none;\n  background-color: transparent;\n  padding: 0.5rem;\n  position: relative;\n  z-index: 20;\n  cursor: pointer;\n  width: 7rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: #14213d;\n  overflow: hidden;\n}\n\n.header_add_task img,\n.header_add_task span {\n  position: absolute;\n  z-index: -1;\n}\n\n.header_add_task span {\n  right: 0.5rem;\n}\n\n.tasks_wrapper {\n  margin-top: 1rem;\n}\n\n.task_card {\n  margin-bottom: 0.5rem;\n  padding-bottom: 0.5rem;\n  padding-top: 0.5rem;\n}\n\n.div_show_mode_top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.div_show_mode_left {\n  display: flex;\n  justify-content: start;\n  align-items: center;\n}\n\n.div_show_mode_left h3 {\n  font-weight: 800;\n  color: #14213d;\n}\n\n.priority_box {\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.6rem;\n  border-radius: 50%;\n}\n\n.priority_box_low {\n  background-color: #a8dadc;\n}\n\n.priority_box_medium {\n  background-color: #ffb703;\n}\n\n.priority_box_hight {\n  background-color: #e63946;\n}\n\n.div_show_mode_right span {\n  font-size: 0.8rem;\n  color: #457b9d;\n}\n\n.div_show_mode_buttom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.3rem 1rem;\n}\n\n.display_task_description {\n  color: rgb(226, 76, 76);\n  font-size: 0.8rem;\n}\n\n.task_status {\n  font-size: 0.7rem;\n  padding: 0.3rem;\n  border-radius: 5px;\n}\n\n.task_status_To-do {\n  color: #e63946;\n  background-color: #e6394760;\n  border: #e63946 0.5px solid;\n}\n\n.task_status_In-progress {\n  color: #f3722c;\n  background-color: #f3722c5b;\n  border: #f3722c 0.5px solid;\n}\n\n.task_status_Done {\n  color: #00a896;\n  background-color: #00a8975d;\n  border: #00a896 0.5px solid;\n}\n\n/* forms */\n\ninput {\n  padding: 0.1rem 0.3rem;\n\n  /* border-radius: 5px; */\n  border: 0.5px solid #0076b688;\n}\n\ninput::placeholder {\n  font-size: 0.7rem;\n  color: rgb(112, 109, 109);\n}\n\nlabel {\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #14213d;\n  margin-right: 0.5rem;\n}\n\n#project_title {\n  width: 100%;\n}\n\n#add_project_form {\n  margin-top: 0.3rem;\n  background-color: white;\n  border-radius: 1px;\n  padding: 1rem;\n}\n\n.add_project_form_buttons {\n  margin-top: 0.5rem;\n  display: flex;\n}\n\n.add_project_form_buttons button {\n  flex-grow: 1;\n}\n\n.submit_btn {\n  color: #1d3557;\n  background-color: #219dbc5e;\n  border-radius: 2px;\n  padding: 0.2rem;\n  cursor: pointer;\n}\n\n.cancel_btn {\n  color: #e63946;\n  background-color: #e6394759;\n  border-radius: 2px;\n  padding: 0.2rem;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/add.png":
/*!*********************!*\
  !*** ./src/add.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "28104b5d36111651b66a.png";

/***/ }),

/***/ "./src/cancel.png":
/*!************************!*\
  !*** ./src/cancel.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d4955812aa5e79611ae.png";

/***/ }),

/***/ "./src/check.png":
/*!***********************!*\
  !*** ./src/check.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "376ef3c8c83b0ea11c6d.png";

/***/ }),

/***/ "./src/close.png":
/*!***********************!*\
  !*** ./src/close.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2fce6214b7c60c745aa6.png";

/***/ }),

/***/ "./src/listners.js":
/*!*************************!*\
  !*** ./src/listners.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "cancelAddProject": () => (/* binding */ cancelAddProject),
/* harmony export */   "displayProject": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ "./src/variables.js");
/* harmony import */ var _add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.png */ "./src/add.png");
/* harmony import */ var _check_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check.png */ "./src/check.png");
/* harmony import */ var _close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close.png */ "./src/close.png");
/* harmony import */ var _pencil_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pencil.png */ "./src/pencil.png");
/* harmony import */ var _cancel_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel.png */ "./src/cancel.png");







let projectsCounter = _variables__WEBPACK_IMPORTED_MODULE_0__.countProjects;

const Project = __webpack_require__(/*! ./project */ "./src/project.js").default;
const Task = __webpack_require__(/*! ./task */ "./src/task.js").default;

const openTab = (e) => {
  const id = e.target.dataset.projectId;
  const projectDiv = document.querySelector(`#proj_${id}`);
  const shown = document.querySelector('.shown');
  if (shown !== null) {
    shown.classList.toggle('shown');
  }
  projectDiv.classList.toggle('shown');
};

const cancelAddProject = () => {
  const input = document.querySelector('#project_title');
  input.value = '';
  const form = document.querySelector('#add_project_form');
  form.classList.toggle('hide');
};

const deleteProject = (e) => {
  const id = e.target.dataset.projectId;
  const wrapper = document.querySelector(`#project_container_${id}`);
  const tabs = document.querySelector('#tabs');
  tabs.removeChild(wrapper);
  // remove from project list
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.deleteFromProjectList)(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList, id);
  localStorage.setItem('projectsList', JSON.stringify(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList));
  const tasksWrapper = document.querySelector('#tasks_container');
  // Display default tab when the actual shown project is removed
  const actProjectShow = document.querySelector(`#proj_${id}`);
  tasksWrapper.removeChild(actProjectShow);
  const shownProj = document.querySelector('.shown');
  if (shownProj === null && _variables__WEBPACK_IMPORTED_MODULE_0__.projectsList.length > 0) {
    const defaultShownTab = document.querySelector(`#proj_${_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList[0].id}`);
    defaultShownTab.classList.add('shown');
  }
};

const editProject = (e) => {
  const id = e.target.dataset.projectId;
  const spanShow = document.querySelector(`#project_show_mode_${id}`);
  spanShow.classList.toggle('hide');
  const spanEdit = document.querySelector(`#project_edit_mode_${id}`);
  spanEdit.classList.toggle('hide');
};

const cancelProject = (e) => {
  const id = e.target.dataset.projectId;
  const spanShow = document.querySelector(`#project_show_mode_${id}`);
  spanShow.classList.toggle('hide');
  const spanEdit = document.querySelector(`#project_edit_mode_${id}`);
  spanEdit.classList.toggle('hide');
  const input = document.querySelector(`#edit_project_title_${id}`);
  const btnTxt = document.querySelector(`#show_project_title_${id}`);
  input.value = btnTxt.textContent;
};

const submitEditProject = (e) => {
  const id = e.target.dataset.projectId;
  const input = document.querySelector(`#edit_project_title_${id}`);
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.editProjectTitle)(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList, id, input.value);
  const btnTxt = document.querySelector(`#show_project_title_${id}`);
  btnTxt.textContent = input.value;
  const spanShow = document.querySelector(`#project_show_mode_${id}`);
  spanShow.classList.toggle('hide');
  const spanEdit = document.querySelector(`#project_edit_mode_${id}`);
  spanEdit.classList.toggle('hide');
  const defaultShownTab = document.querySelector(`#header_title_${id}`);
  defaultShownTab.textContent = input.value;
};

const cancelAddTask = (e) => {
  const id = e.target.dataset.projectId;
  const titleInput = document.querySelector(`#task_title_${id}`);
  titleInput.value = null;
  const descriptionInput = document.querySelector(`#task_description_${id}`);
  descriptionInput.value = null;
  const priorityInput = document.querySelector(`#task_priority_${id}`);
  priorityInput.value = 'low';
  const form = document.querySelector(`#add_task_form_${id}`);
  form.classList.toggle('hide');
};

const deleteTask = (e) => {
  const taskId = e.target.dataset.TaskId;
  const projId = e.target.dataset.TaskProjId;

  const TaskCard = document.querySelector(`#task_card_${projId}_${taskId}`);
  const tasksWrapper = document.querySelector(`#tasks_wrapper_${projId}`);
  tasksWrapper.removeChild(TaskCard);

  const projectIndx = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.findProject)(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList, projId);
  const project = _variables__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectIndx];
  project.removeTask(taskId);

  localStorage.setItem('projectsList', JSON.stringify(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList));
};

const cancelEditTask = (e) => {
  const taskId = e.target.dataset.TaskId;
  const projId = e.target.dataset.TaskProjId;

  const projectIndx = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.findProject)(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList, projId);
  const project = _variables__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectIndx];
  const taskIndex = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.findProject)(project.tasks, taskId);
  const task = project.tasks[taskIndex];

  const titleInput = document.querySelector(`#edit_task_title_${projId}_${taskId}`);
  titleInput.value = task.title;
  const descriptionInput = document.querySelector(`#edit_task_description_${projId}_${taskId}`);
  descriptionInput.value = task.description;
  const priorityInput = document.querySelector(`#edit_task_priority_${projId}_${taskId}`);
  priorityInput.value = task.priority;
  const statusInput = document.querySelector(`#edit_task_status_${projId}_${taskId}`);
  statusInput.value = task.status;

  const divShowMode = document.querySelector(`#task_show_mode_${projId}_${taskId}`);
  divShowMode.classList.toggle('hide');
  const divEditMode = document.querySelector(`#task_edit_mode_${projId}_${taskId}`);
  divEditMode.classList.toggle('hide');
};

const submitEditTask = (e) => {
  const taskId = e.target.dataset.TaskId;
  const projId = e.target.dataset.TaskProjId;

  const projectIndx = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.findProject)(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList, projId);
  const project = _variables__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectIndx];
  const taskIndex = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.findProject)(project.tasks, taskId);
  const task = project.tasks[taskIndex];
  const priorityLast = task.priority;
  const statusLast = task.status;

  const titleInput = document.querySelector(`#edit_task_title_${projId}_${taskId}`);
  task.title = titleInput.value;
  const descriptionInput = document.querySelector(`#edit_task_description_${projId}_${taskId}`);
  task.description = descriptionInput.value;
  const priorityInput = document.querySelector(`#edit_task_priority_${projId}_${taskId}`);
  task.priority = priorityInput.value;

  const dateInput = document.querySelector(`#edit_task_date_${projId}_${taskId}`);
  if (dateInput.value !== '') {
    task.dueDate = dateInput.value;
  }

  const statusInput = document.querySelector(`#edit_task_status_${projId}_${taskId}`);
  task.status = statusInput.value;

  const titleDisplay = document.querySelector(`#display_task_title_${projId}_${taskId}`);
  titleDisplay.textContent = task.title;

  const descriptionDisplay = document.querySelector(`#display_task_description_${projId}_${taskId}`);
  descriptionDisplay.textContent = task.description;

  const priorityDisplay = document.querySelector(`#display_task_priority_${projId}_${taskId}`);
  priorityDisplay.classList.remove(`priority_box_${priorityLast}`);
  priorityDisplay.classList.add(`priority_box_${task.priority}`);

  const statusDisplay = document.querySelector(`#display_task_status_${projId}_${taskId}`);
  statusDisplay.textContent = task.status;
  statusDisplay.classList.remove(`task_status_${statusLast}`);
  statusDisplay.classList.add(`task_status_${task.status}`);

  const divShowMode = document.querySelector(`#task_show_mode_${projId}_${taskId}`);
  divShowMode.classList.toggle('hide');
  const divEditMode = document.querySelector(`#task_edit_mode_${projId}_${taskId}`);
  divEditMode.classList.toggle('hide');
  localStorage.setItem('projectsList', JSON.stringify(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList));
};

const displayTask = (task) => {
  const taskCard = document.createElement('div');
  taskCard.setAttribute('class', 'task_card');
  taskCard.setAttribute('id', `task_card_${task.projId}_${task.id}`);

  // displaying the task mode
  const divShowMode = document.createElement('div');
  divShowMode.setAttribute('id', `task_show_mode_${task.projId}_${task.id}`);
  divShowMode.classList.add('show_div_task');

  const divShowModeLeft = document.createElement('div');
  divShowModeLeft.setAttribute('class', 'div_show_mode_left');
  const priorityBox = document.createElement('div');
  priorityBox.setAttribute('id', `display_task_priority_${task.projId}_${task.id}`);
  priorityBox.classList.add(`priority_box_${task.priority}`, 'priority_box');
  const taskTitle = document.createElement('h3');
  taskTitle.setAttribute('id', `display_task_title_${task.projId}_${task.id}`);
  taskTitle.textContent = task.title;
  divShowModeLeft.append(priorityBox, taskTitle);

  const divShowModeRight = document.createElement('div');
  divShowModeRight.setAttribute('class', 'div_show_mode_right');

  const spanDueDate = document.createElement('span');
  spanDueDate.setAttribute('id', `display_task_date_${task.projId}_${task.id}`);

  const editTaskImage = new Image();
  editTaskImage.setAttribute('src', _pencil_png__WEBPACK_IMPORTED_MODULE_4__);
  editTaskImage.setAttribute('class', 'add_proj_icon');
  editTaskImage.dataset.TaskId = task.id;
  editTaskImage.dataset.TaskProjId = task.projId;
  editTaskImage.addEventListener('click', (e) => cancelEditTask(e));

  const deleteTaskImage = new Image();
  deleteTaskImage.setAttribute('src', _cancel_png__WEBPACK_IMPORTED_MODULE_5__);
  deleteTaskImage.setAttribute('class', 'add_proj_icon');
  deleteTaskImage.dataset.TaskId = task.id;
  deleteTaskImage.dataset.TaskProjId = task.projId;
  deleteTaskImage.addEventListener('click', (e) => deleteTask(e));

  divShowModeRight.append(spanDueDate, editTaskImage, deleteTaskImage);

  const divShowModeTop = document.createElement('div');
  divShowModeTop.setAttribute('class', 'div_show_mode_top');
  divShowModeTop.append(divShowModeLeft, divShowModeRight);
  // description in the buttom

  const divShowModeButtom = document.createElement('div');
  divShowModeButtom.setAttribute('class', 'div_show_mode_buttom');

  const spanDescription = document.createElement('span');
  spanDescription.classList.add('display_task_description');
  spanDescription.setAttribute('id', `display_task_description_${task.projId}_${task.id}`);
  spanDescription.textContent = task.description;

  const spanStatus = document.createElement('span');
  spanStatus.setAttribute('id', `display_task_status_${task.projId}_${task.id}`);
  spanStatus.classList.add('task_status', `task_status_${task.status}`);
  spanStatus.textContent = task.status;

  divShowModeButtom.append(spanDescription, spanStatus);

  // editing the task mode

  const divEditMode = document.createElement('div');
  divEditMode.setAttribute('id', `task_edit_mode_${task.projId}_${task.id}`);
  divEditMode.classList.add('edit_div_task', 'hide');
  // Edit Form
  const editTaskFormWrapper = document.createElement('div');
  editTaskFormWrapper.classList.add('edit_task_form_wrapper');

  const editTaskTitleDiv = document.createElement('div');
  editTaskTitleDiv.classList.add('edit_task_input_container');
  const editTaskTiteLabel = document.createElement('label');
  editTaskTiteLabel.setAttribute('for', `edit_task_title_${task.projId}_${task.id}`);
  editTaskTiteLabel.textContent = 'Task title:';
  const editTaskTitleInput = document.createElement('input');
  editTaskTitleInput.setAttribute('type', 'text');
  editTaskTitleInput.setAttribute('id', `edit_task_title_${task.projId}_${task.id}`);
  editTaskTitleInput.setAttribute('value', task.title);

  editTaskTitleDiv.append(editTaskTiteLabel, editTaskTitleInput);

  const editTaskDescriptionDiv = document.createElement('div');
  editTaskDescriptionDiv.classList.add('edit_task_input_container');
  const editTaskDescriptionLabel = document.createElement('label');
  editTaskDescriptionLabel.setAttribute('for', `edit_task_description_${task.projId}_${task.id}`);
  editTaskDescriptionLabel.textContent = 'Task Description:';
  const editTaskDescriptionInput = document.createElement('input');
  editTaskDescriptionInput.setAttribute('type', 'text');
  editTaskDescriptionInput.setAttribute('id', `edit_task_description_${task.projId}_${task.id}`);
  editTaskDescriptionInput.setAttribute('value', task.description);

  editTaskDescriptionDiv.append(editTaskDescriptionLabel, editTaskDescriptionInput);

  const editPrioritySpan = document.createElement('span');
  editPrioritySpan.setAttribute('class', 'edit_task_select_span');
  const editPriorityLabel = document.createElement('label');
  editPriorityLabel.textContent = 'Priority:';
  editPriorityLabel.setAttribute('for', `edit_task_priority_${task.projId}_${task.id}`);
  const editPrioritySelect = document.createElement('select');
  editPrioritySelect.setAttribute('id', `edit_task_priority_${task.projId}_${task.id}`);
  const editPriorityOption1 = document.createElement('option');
  editPriorityOption1.setAttribute('value', 'hight');
  editPriorityOption1.textContent = 'Hight';
  const editPriorityOption2 = document.createElement('option');
  editPriorityOption2.setAttribute('value', 'medium');
  editPriorityOption2.textContent = 'Medium';
  const editPriorityOption3 = document.createElement('option');
  editPriorityOption3.setAttribute('value', 'low');
  editPriorityOption3.textContent = 'Low';

  editPrioritySelect.append(editPriorityOption1, editPriorityOption2, editPriorityOption3);
  editPrioritySelect.value = task.priority;
  editPrioritySpan.append(editPriorityLabel, editPrioritySelect);

  const editStatusSpan = document.createElement('span');
  editStatusSpan.setAttribute('class', 'edit_task_select_span');
  const editStatusLabel = document.createElement('label');
  editStatusLabel.textContent = 'Status:';
  editStatusLabel.setAttribute('for', `edit_task_status_${task.projId}_${task.id}`);
  const editStatusSelect = document.createElement('select');
  editStatusSelect.setAttribute('id', `edit_task_status_${task.projId}_${task.id}`);
  const editStatusOption1 = document.createElement('option');
  editStatusOption1.setAttribute('value', 'To-do');
  editStatusOption1.textContent = 'To-do';
  const editStatusOption2 = document.createElement('option');
  editStatusOption2.setAttribute('value', 'In-progress');
  editStatusOption2.textContent = 'In progress';
  const editStatusOption3 = document.createElement('option');
  editStatusOption3.setAttribute('value', 'Done');
  editStatusOption3.textContent = 'Done';

  editStatusSelect.append(editStatusOption1, editStatusOption2, editStatusOption3);
  editStatusSelect.value = task.status;
  editStatusSpan.append(editStatusLabel, editStatusSelect);

  const editDateSpan = document.createElement('span');
  editDateSpan.setAttribute('class', 'edit_task_select_span');
  const editDateLabel = document.createElement('label');
  editDateLabel.textContent = 'Schedule:';
  editDateLabel.setAttribute('for', `edit_task_date_${task.projId}_${task.id}`);
  const editDateInput = document.createElement('input');
  editDateInput.setAttribute('type', 'date');
  editDateInput.setAttribute('id', `edit_task_date_${task.projId}_${task.id}`);
  editDateInput.value = task.dueDate;
  editDateSpan.append(editDateLabel, editDateInput);

  const editTaskFormButtons = document.createElement('div');
  editTaskFormButtons.setAttribute('class', 'edit_task_form_buttons');
  const editTaskFormSubmit = document.createElement('button');
  editTaskFormSubmit.classList.add('submit_btn');
  editTaskFormSubmit.dataset.TaskId = task.id;
  editTaskFormSubmit.dataset.TaskProjId = task.projId;
  editTaskFormSubmit.addEventListener('click', (e) => submitEditTask(e));
  editTaskFormSubmit.textContent = 'Submit';

  const editTaskFormCancel = document.createElement('button');
  editTaskFormCancel.classList.add('cancel_btn');
  editTaskFormCancel.textContent = 'Cancel';
  editTaskFormCancel.dataset.TaskId = task.id;
  editTaskFormCancel.dataset.TaskProjId = task.projId;

  editTaskFormCancel.addEventListener('click', (e) => cancelEditTask(e));

  editTaskFormButtons.append(editTaskFormSubmit, editTaskFormCancel);

  editTaskFormWrapper.append(editTaskTitleDiv, editTaskDescriptionDiv, editPrioritySpan,
    editStatusSpan, editDateSpan, editTaskFormButtons);

  //= ===========================================
  divEditMode.append(editTaskFormWrapper);

  divShowMode.append(divShowModeTop, divShowModeButtom);
  taskCard.append(divShowMode, divEditMode);

  return taskCard;
};

const addTask = (e) => {
  const id = e.target.dataset.projectId;
  const projectIndx = (0,_variables__WEBPACK_IMPORTED_MODULE_0__.findProject)(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList, id);
  const project = _variables__WEBPACK_IMPORTED_MODULE_0__.projectsList[projectIndx];

  const titleInput = document.querySelector(`#task_title_${id}`);
  const title = titleInput.value;
  const descriptionInput = document.querySelector(`#task_description_${id}`);
  const description = descriptionInput.value;
  const priorityInput = document.querySelector(`#task_priority_${id}`);
  const priority = priorityInput.value;

  const dateInput = document.querySelector(`#task_date_${id}`);
  const date = dateInput.value;

  const task = new Task(title, description, date, priority, id, project.taskCounter);
  (0,_variables__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList, id, task);
  const taskWrapper = document.querySelector(`#tasks_wrapper_${id}`);
  taskWrapper.append(displayTask(task));

  const form = document.querySelector(`#add_task_form_${id}`);
  form.classList.toggle('hide');
  localStorage.setItem('projectsList', JSON.stringify(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList));
};

const taskNav = (myproject) => {
  // wrapper
  const divNavWrap = document.createElement('div');
  divNavWrap.setAttribute('class', 'tabcontent');
  divNavWrap.setAttribute('id', `proj_${myproject.id}`);

  const header = document.createElement('div');
  header.setAttribute('class', 'project_header');
  const headerTitle = document.createElement('h2');
  headerTitle.setAttribute('class', 'header_title');
  headerTitle.setAttribute('id', `header_title_${myproject.id}`);
  headerTitle.textContent = myproject.title;

  // add task header

  const headerAddTask = document.createElement('button');
  headerAddTask.dataset.projectId = myproject.id;
  headerAddTask.addEventListener('click', (e) => cancelAddTask(e));

  headerAddTask.setAttribute('class', 'header_add_task');
  const addTaskImage = new Image();
  addTaskImage.setAttribute('src', _add_png__WEBPACK_IMPORTED_MODULE_1__);
  addTaskImage.setAttribute('class', 'add_proj_icon');
  const addTaskSpan = document.createElement('span');
  addTaskSpan.setAttribute('class', 'add_task_span');
  addTaskSpan.textContent = 'Add a Task';
  headerAddTask.append(addTaskImage, addTaskSpan);

  header.append(headerTitle, headerAddTask);

  // add task form

  const addTaskFormWrapper = document.createElement('div');
  addTaskFormWrapper.setAttribute('class', 'add_task_form_wrapper');
  addTaskFormWrapper.classList.add('hide');
  addTaskFormWrapper.setAttribute('id', `add_task_form_${myproject.id}`);

  const addTaskTitleDiv = document.createElement('div');
  addTaskTitleDiv.classList.add('add_task_input_container');
  const addTaskTiteLabel = document.createElement('label');
  addTaskTiteLabel.setAttribute('for', `task_title_${myproject.id}`);
  addTaskTiteLabel.textContent = 'Task title:';

  const addTaskTitleInput = document.createElement('input');
  addTaskTitleInput.setAttribute('type', 'text');
  addTaskTitleInput.setAttribute('id', `task_title_${myproject.id}`);
  addTaskTitleInput.setAttribute('placeholder', 'Type your task title here!');

  addTaskTitleDiv.append(addTaskTiteLabel, addTaskTitleInput);

  const addTaskDescriptionDiv = document.createElement('div');
  addTaskDescriptionDiv.classList.add('add_task_input_container');
  const addTaskDescriptionLabel = document.createElement('label');
  addTaskDescriptionLabel.setAttribute('for', `task_description_${myproject.id}`);
  addTaskDescriptionLabel.textContent = 'Task description:';

  const addTaskDescriptionInput = document.createElement('input');
  addTaskDescriptionInput.setAttribute('type', 'text');
  addTaskDescriptionInput.setAttribute('id', `task_description_${myproject.id}`);
  addTaskDescriptionInput.setAttribute('placeholder', 'Type a description for your task here!');

  addTaskDescriptionDiv.append(addTaskDescriptionLabel, addTaskDescriptionInput);

  const addPrioritySpan = document.createElement('span');
  addPrioritySpan.setAttribute('class', 'add_task_select_span');
  const addPriorityLabel = document.createElement('label');
  addPriorityLabel.textContent = 'Priority:';
  addPriorityLabel.setAttribute('for', `task_priority_${myproject.id}`);
  const addPrioritySelect = document.createElement('select');
  addPrioritySelect.setAttribute('id', `task_priority_${myproject.id}`);
  const addPriorityOption1 = document.createElement('option');
  addPriorityOption1.setAttribute('value', 'hight');
  addPriorityOption1.textContent = 'Hight';
  const addPriorityOption2 = document.createElement('option');
  addPriorityOption2.setAttribute('value', 'medium');
  addPriorityOption2.textContent = 'Medium';
  const addPriorityOption3 = document.createElement('option');
  addPriorityOption3.setAttribute('value', 'low');
  addPriorityOption3.textContent = 'Low';

  addPrioritySelect.append(addPriorityOption1, addPriorityOption2, addPriorityOption3);
  addPrioritySpan.append(addPriorityLabel, addPrioritySelect);

  const addDateSpan = document.createElement('span');
  addPrioritySpan.setAttribute('class', 'add_task_date_span');
  const addDateLabel = document.createElement('label');
  addDateLabel.textContent = 'Schedule:';
  addDateLabel.setAttribute('for', `task_date_${myproject.id}`);
  const addDateInput = document.createElement('input');
  addDateInput.setAttribute('type', 'date');
  addDateInput.setAttribute('id', `task_date_${myproject.id}`);
  addDateSpan.append(addDateLabel, addDateInput);

  const addTaskFormButtons = document.createElement('div');
  addTaskFormButtons.setAttribute('class', 'add_task_form_buttons');
  const addTaskFormCreate = document.createElement('button');
  addTaskFormCreate.classList.add('submit_btn');
  addTaskFormCreate.dataset.projectId = myproject.id;
  addTaskFormCreate.addEventListener('click', (e) => addTask(e));
  addTaskFormCreate.textContent = 'Create Task';

  const addTaskFormCancel = document.createElement('button');
  addTaskFormCancel.classList.add('cancel_btn');
  addTaskFormCancel.textContent = 'Cancel';
  addTaskFormCancel.dataset.projectId = myproject.id;
  addTaskFormCancel.addEventListener('click', (e) => cancelAddTask(e));

  addTaskFormButtons.append(addTaskFormCreate, addTaskFormCancel);

  addTaskFormWrapper.append(addTaskTitleDiv, addTaskDescriptionDiv,
    addPrioritySpan, addDateSpan, addTaskFormButtons);

  // tasks wrapper

  const tasksWrapper = document.createElement('div');
  tasksWrapper.setAttribute('id', `tasks_wrapper_${myproject.id}`);
  tasksWrapper.setAttribute('class', 'tasks_wrapper');

  myproject.tasks.forEach((element) => {
    tasksWrapper.append(displayTask(element));
    return tasksWrapper;
  });

  divNavWrap.append(header, addTaskFormWrapper, tasksWrapper);
  return divNavWrap;
};

const displayProject = (project) => {
  const wraper = document.createElement('div');
  wraper.setAttribute('id', `project_container_${project.id}`);
  wraper.classList.add('project_container');

  const spanShowMode = document.createElement('span');
  spanShowMode.setAttribute('id', `project_show_mode_${project.id}`);
  spanShowMode.classList.add('span_project');

  const spanEditMode = document.createElement('span');
  spanEditMode.setAttribute('id', `project_edit_mode_${project.id}`);
  spanEditMode.classList.add('span_project', 'hide');

  const btn = document.createElement('button');
  btn.setAttribute('id', `show_project_title_${project.id}`);
  btn.dataset.projectId = project.id;
  btn.addEventListener('click', (e) => openTab(e));
  btn.setAttribute('class', 'tablinks');
  btn.textContent = project.title;

  const editProjectImage = new Image();
  editProjectImage.setAttribute('src', _pencil_png__WEBPACK_IMPORTED_MODULE_4__);
  editProjectImage.setAttribute('class', 'add_proj_icon');
  editProjectImage.dataset.projectId = project.id;
  editProjectImage.addEventListener('click', (e) => editProject(e));

  const deleteProjectImage = new Image();
  deleteProjectImage.setAttribute('src', _cancel_png__WEBPACK_IMPORTED_MODULE_5__);
  deleteProjectImage.setAttribute('class', 'add_proj_icon');
  deleteProjectImage.dataset.projectId = project.id;
  deleteProjectImage.addEventListener('click', (e) => deleteProject(e));

  const projectShowRightBtns = document.createElement('span');
  projectShowRightBtns.classList.add('project_right_buttons');
  projectShowRightBtns.append(editProjectImage, deleteProjectImage);
  spanShowMode.append(btn, projectShowRightBtns);

  const editProjTitleInput = document.createElement('input');
  editProjTitleInput.setAttribute('type', 'text');
  editProjTitleInput.setAttribute('id', `edit_project_title_${project.id}`);
  editProjTitleInput.setAttribute('value', project.title);

  const submitProjectImage = new Image();
  submitProjectImage.setAttribute('src', _check_png__WEBPACK_IMPORTED_MODULE_2__);
  submitProjectImage.setAttribute('class', 'add_proj_icon');
  submitProjectImage.dataset.projectId = project.id;
  submitProjectImage.addEventListener('click', (e) => submitEditProject(e));

  const cancelProjectImage = new Image();
  cancelProjectImage.setAttribute('src', _close_png__WEBPACK_IMPORTED_MODULE_3__);
  cancelProjectImage.setAttribute('class', 'add_proj_icon');
  cancelProjectImage.dataset.projectId = project.id;
  cancelProjectImage.addEventListener('click', (e) => cancelProject(e));

  const projectEditRightBtns = document.createElement('span');
  projectEditRightBtns.classList.add('project_right_buttons');
  projectEditRightBtns.append(submitProjectImage, cancelProjectImage);

  spanEditMode.append(editProjTitleInput, projectEditRightBtns);

  wraper.append(spanShowMode, spanEditMode);

  _variables__WEBPACK_IMPORTED_MODULE_0__.tasksContainer.append(taskNav(project));

  return wraper;
};

const addProject = () => {
  const input = document.querySelector('#project_title');
  const title = input.value;
  projectsCounter += 1;
  const project = new Project(title, projectsCounter);
  _variables__WEBPACK_IMPORTED_MODULE_0__.projectsList.push(project);
  localStorage.setItem('countProjects', projectsCounter);
  localStorage.setItem('projectsList', JSON.stringify(_variables__WEBPACK_IMPORTED_MODULE_0__.projectsList));
  const tabs = document.querySelector('#tabs');
  tabs.append(displayProject(project));
  const actProjectShow = document.querySelector(`#proj_${project.id}`);
  const shown = document.querySelector('.shown');
  if (shown !== null) {
    shown.classList.toggle('shown');
  }
  actProjectShow.classList.add('shown');
  const form = document.querySelector('#add_project_form');
  form.classList.toggle('hide');
};




/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _listners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listners */ "./src/listners.js");
/* harmony import */ var _add_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.png */ "./src/add.png");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (((projList) => {
  const divNavWrap = document.createElement('div');
  divNavWrap.setAttribute('id', 'project_nav');

  const brand = document.createElement('div');
  brand.setAttribute('class', 'logo_project');
  brand.textContent = 'My To-do List';

  const addProj = document.createElement('button');
  addProj.setAttribute('id', 'add_project');
  const addProjectImage = new Image();
  addProjectImage.setAttribute('src', _add_png__WEBPACK_IMPORTED_MODULE_1__);
  addProjectImage.setAttribute('class', 'add_proj_icon');
  const addProjText = document.createElement('span');
  addProjText.textContent = 'Projects';
  addProj.append(addProjText, addProjectImage);
  addProj.addEventListener('click', () => (0,_listners__WEBPACK_IMPORTED_MODULE_0__.cancelAddProject)());

  const addProjForm = document.createElement('div');
  addProjForm.setAttribute('id', 'add_project_form');
  addProjForm.classList.add('hide');
  const addProjTitleInput = document.createElement('input');
  addProjTitleInput.setAttribute('type', 'text');
  addProjTitleInput.setAttribute('id', 'project_title');
  addProjTitleInput.setAttribute('placeholder', 'Type your project title here!');
  const addProjectFormButtons = document.createElement('div');
  addProjectFormButtons.setAttribute('class', 'add_project_form_buttons');

  const addProjectFormCreate = document.createElement('button');
  addProjectFormCreate.classList.add('submit_btn');
  addProjectFormCreate.addEventListener('click', () => (0,_listners__WEBPACK_IMPORTED_MODULE_0__.addProject)());
  addProjectFormCreate.textContent = 'Create Project';

  const addProjectFormCancel = document.createElement('button');
  addProjectFormCancel.classList.add('cancel_btn');
  addProjectFormCancel.textContent = 'Cancel';

  addProjectFormCancel.addEventListener('click', () => (0,_listners__WEBPACK_IMPORTED_MODULE_0__.cancelAddProject)());

  addProjectFormButtons.append(addProjectFormCreate, addProjectFormCancel);
  addProjForm.append(addProjTitleInput, addProjectFormButtons);

  const tabsDiv = document.createElement('div');
  tabsDiv.setAttribute('id', 'tabs');

  projList.forEach((element) => {
    tabsDiv.append((0,_listners__WEBPACK_IMPORTED_MODULE_0__.displayProject)(element));
    return tabsDiv;
  });
  divNavWrap.append(brand, addProj, addProjForm, tabsDiv);
  return divNavWrap;
})());

/***/ }),

/***/ "./src/pencil.png":
/*!************************!*\
  !*** ./src/pencil.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48a509a89a20feb467d3.png";

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

class Project {
  constructor(title, id) {
    this._title = title;
    this._tasks = [];
    this._id = id;
    this._taskCounter = 0;
  }

  get title() {
    return this._title;
  }

  get id() {
    return this._id;
  }

  get taskCounter() {
    return this._taskCounter;
  }

  set title(title) {
    this._title = title;
  }

  get tasks() {
    return this._tasks;
  }

  addTask(task) {
    // sort tasks later
    this._tasks.push(task);
    this._taskCounter += 1;
    // task.id = this._taskCounter;
  }

  removeTask(id) {
    // find index of task by id
    this._tasks.splice(id, 1);// id ===> transformer en index
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
class Task {
  constructor(title, description, dueDate = '2020-12-24', priority, projId, id) {
    this._title = title;
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority; // hight medium low
    this._status = 'To-do';// "todo"  ====> "progress" ===> "done"
    this._projId = projId;
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  get projId() {
    return this._projId;
  }

  get id() {
    return this._id;
  }

  set description(description) {
    this._description = description;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(dueDate) {
    this._dueDate = dueDate;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority) {
    this._priority = priority;
  }

  get status() {
    return this._status;
  }

  set id(val) {
    this._id = val;
  }

  set status(status) {
    this._status = status;
  }

  formatedDueDate() {
    const date = new Date(this._dueDate);
    return date;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "countProjects": () => (/* binding */ countProjects),
/* harmony export */   "deleteFromProjectList": () => (/* binding */ deleteFromProjectList),
/* harmony export */   "editProjectTitle": () => (/* binding */ editProjectTitle),
/* harmony export */   "tasksContainer": () => (/* binding */ tasksContainer),
/* harmony export */   "addTaskToProject": () => (/* binding */ addTaskToProject),
/* harmony export */   "findProject": () => (/* binding */ findProject)
/* harmony export */ });
/* eslint no-underscore-dangle: ["error", { "allow": ["_title", "_tasks", "_id" , "_taskCounter" ,
 "_description", "_dueDate" , "_status" , "_priority" , "_projId"] }] */
const Project = Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./project */ "./src/project.js"));
const Task = Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./task */ "./src/task.js"));

const tasksContainer = document.createElement('div');
tasksContainer.setAttribute('id', 'tasks_container');

const defaultProject = new Project('My Project', 1);
const defaultTask1 = new Task('My first task', 'This is my first task', '2020-12-24', 'low', 1, 0);
const defaultTask2 = new Task('My second task', 'This is my second task', '2021-12-26', 'low', 1, 1);
defaultProject.addTask(defaultTask1);
defaultProject.addTask(defaultTask2);

const projectsListStored = localStorage.getItem('projectsList') ? JSON.parse(localStorage.getItem('projectsList')) : [defaultProject];
const countProjectsStored = localStorage.getItem('countProjects') ? JSON.parse(localStorage.getItem('countProjects')) : 1;

const findProject = (array, id) => {
  let min = 0;
  let max = array.length - 1;
  let i = Math.floor((min + max) / 2);
  let found = false;
  while (min <= max && !found) {
    found = array[i].id === id;
    if (!found) {
      if (array[i].id > id) {
        max = i - 1;
      } else {
        min = i + 1;
      }
      i = Math.floor((min + max) / 2);
    }
  }
  return i;
};

const deleteFromProjectList = (projectsList, id) => {
  const target = findProject(projectsList, id);
  projectsList.splice(target, 1);
};

const editProjectTitle = (projectsList, id, value) => {
  const target = findProject(projectsList, id);
  projectsList[target].title = value;
  localStorage.setItem('projectsList', JSON.stringify(projectsList));
};

const addTaskToProject = (array, id, task) => {
  const target = findProject(array, id);
  const project = array[target];
  project.addTask(task);
};

const parseJsonToTask = (objJson) => {
  const title = objJson._title;
  const description = objJson._description;
  const dueDate = objJson._dueDate;
  const priority = objJson._priority; // hight medium low
  const status = objJson._status;// "todo"  ====> "progress" ===> "done"
  const projId = objJson._projId;
  const id = objJson._id;

  const task = new Task(title, description, dueDate, priority, projId, id);
  task.status = status;

  return task;
};

const readProjectFromStorage = (objJson) => {
  const title = objJson._title;
  const id = objJson._id;
  const tasks = objJson._tasks;

  const project = new Project(title, id);

  for (let i = 0; i < tasks.length; i += 1) {
    const parsedTask = parseJsonToTask(tasks[i]);
    parsedTask.id = i;
    project.addTask(parsedTask);
  }

  return project;
};

const projectsList = projectsListStored.map((elem) => readProjectFromStorage(elem));
const countProjects = parseInt(countProjectsStored, 10);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/variables.js");
/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navBar */ "./src/navBar.js");




const globalContainer = document.querySelector('#container');
globalContainer.append((0,_navBar__WEBPACK_IMPORTED_MODULE_2__.default)(_variables__WEBPACK_IMPORTED_MODULE_1__.projectsList), _variables__WEBPACK_IMPORTED_MODULE_1__.tasksContainer);
if (_variables__WEBPACK_IMPORTED_MODULE_1__.projectsList.length > 0) {
  const defaultShownTab = document.querySelector(`#proj_${_variables__WEBPACK_IMPORTED_MODULE_1__.projectsList[0].id}`);
  defaultShownTab.classList.add('shown');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvbGlzdG5lcnMuanMiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL25hdkJhci5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvLi9zcmMvdmFyaWFibGVzLmpzIiwid2VicGFjazovL3Rhc2stbWFuYWdlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90YXNrLW1hbmFnZXIvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGFzay1tYW5hZ2VyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSxrREFBa0QscUJBQXFCLHNCQUFzQixtQkFBbUIsdUNBQXVDLEdBQUcsVUFBVSxnQkFBZ0Isc0JBQXNCLHFCQUFxQixtQkFBbUIsR0FBRyx5Q0FBeUMsa0JBQWtCLEdBQUcsWUFBWSw4QkFBOEIsR0FBRyxvQkFBb0IsNkJBQTZCLHdCQUF3QixvQkFBb0IsR0FBRyxXQUFXLDZCQUE2QixHQUFHLDhCQUE4QixrQkFBa0Isd0JBQXdCLEdBQUcsa0JBQWtCLGVBQWUsc0JBQXNCLDhCQUE4Qix1QkFBdUIsR0FBRyxzQkFBc0IsZUFBZSxzQkFBc0IscUJBQXFCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQ0FBMEMsbUJBQW1CLHdCQUF3QixHQUFHLGtCQUFrQixnQkFBZ0IseUJBQXlCLGlCQUFpQixrQ0FBa0MsdUNBQXVDLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3QixvQkFBb0IscUJBQXFCLHNCQUFzQixtQkFBbUIsR0FBRyx3QkFBd0IsZ0NBQWdDLG1CQUFtQixHQUFHLFdBQVcscUJBQXFCLEdBQUcsd0JBQXdCLHFCQUFxQix3QkFBd0Isc0JBQXNCLHlDQUF5QyxHQUFHLG1CQUFtQixnQkFBZ0Isa0JBQWtCLHdCQUF3QixtQ0FBbUMsd0JBQXdCLEdBQUcsZUFBZSwyQkFBMkIsa0NBQWtDLGlCQUFpQixtQkFBbUIsb0JBQW9CLG9CQUFvQixHQUFHLHFCQUFxQixnQ0FBZ0MsbUJBQW1CLEdBQUcscUJBQXFCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHdCQUF3Qix1Q0FBdUMseUJBQXlCLDBCQUEwQixHQUFHLG1CQUFtQixt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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7O0FDZnFCO0FBQ3NDO0FBQzdCOztBQUU5QjtBQUNBLHVCQUF1QixnREFBTSxDQUFDLG9EQUFZLEdBQUcsc0RBQWM7QUFDM0QsSUFBSSwyREFBbUI7QUFDdkIsMERBQTBELDBEQUFrQixDQUFDO0FBQzdFO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaHRtbCB7XFxuICBtaW4td2lkdGg6IDIycmVtO1xcbiAgbWluLWhlaWdodDogNDRyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtZmFtaWx5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIG1pbi13aWR0aDogMjJyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogZXZlbnRzIGNsYXNzZXMgKi9cXG5cXG4udGFiY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hvd24ge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG59XFxuXFxuLmFkZF9wcm9qX2ljb24ge1xcbiAgd2lkdGg6IDAuOHJlbSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBncmlkICovXFxuXFxuI2NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXFxuI3Byb2plY3RfbmF2IHtcXG4gIHdpZHRoOiAzMCU7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGRhM2M7XFxuICBwYWRkaW5nOiAzcmVtIDFyZW07XFxufVxcblxcbiN0YXNrc19jb250YWluZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogM3JlbSA2JTtcXG59XFxuXFxuLmxvZ29fcHJvamVjdCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LWZhbWlseTogJ0FicmlsIEZhdGZhY2UnLCBjdXJzaXZlO1xcbiAgY29sb3I6ICNlNjM5NDY7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4jYWRkX3Byb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtIDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzA4NTU4NTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGNvbG9yOiAjMWQzNTU3O1xcbn1cXG5cXG4jYWRkX3Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNzRiNjNhO1xcbiAgY29sb3I6ICNlNjM5NDY7XFxufVxcblxcbiN0YWJzIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0X2NvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzBlNjY2YmE4O1xcbn1cXG5cXG4uc3Bhbl9wcm9qZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFibGlua3Mge1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6ICMxNDIxM2Q7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YWJsaW5rczpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWE3MzkxZTA7XFxuICBjb2xvcjogIzAwNzdiNjtcXG59XFxuXFxuLnByb2plY3RfaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkICMyODU2NzI7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLmhlYWRlcl90aXRsZSB7XFxuICBjb2xvcjogIzAwNzdiNjtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsIGN1cnNpdmU7XFxufVxcblxcbi5oZWFkZXJfYWRkX3Rhc2sge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAyMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA3cmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzE0MjEzZDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oZWFkZXJfYWRkX3Rhc2sgaW1nLFxcbi5oZWFkZXJfYWRkX3Rhc2sgc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmhlYWRlcl9hZGRfdGFzayBzcGFuIHtcXG4gIHJpZ2h0OiAwLjVyZW07XFxufVxcblxcbi50YXNrc193cmFwcGVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi50YXNrX2NhcmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxufVxcblxcbi5kaXZfc2hvd19tb2RlX3RvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRpdl9zaG93X21vZGVfbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXZfc2hvd19tb2RlX2xlZnQgaDMge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiAjMTQyMTNkO1xcbn1cXG5cXG4ucHJpb3JpdHlfYm94IHtcXG4gIHdpZHRoOiAxcmVtO1xcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5wcmlvcml0eV9ib3hfbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOGRhZGM7XFxufVxcblxcbi5wcmlvcml0eV9ib3hfbWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI3MDM7XFxufVxcblxcbi5wcmlvcml0eV9ib3hfaGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2Mzk0NjtcXG59XFxuXFxuLmRpdl9zaG93X21vZGVfcmlnaHQgc3BhbiB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGNvbG9yOiAjNDU3YjlkO1xcbn1cXG5cXG4uZGl2X3Nob3dfbW9kZV9idXR0b20ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXG59XFxuXFxuLmRpc3BsYXlfdGFza19kZXNjcmlwdGlvbiB7XFxuICBjb2xvcjogcmdiKDIyNiwgNzYsIDc2KTtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGFza19zdGF0dXMge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50YXNrX3N0YXR1c19Uby1kbyB7XFxuICBjb2xvcjogI2U2Mzk0NjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjM5NDc2MDtcXG4gIGJvcmRlcjogI2U2Mzk0NiAwLjVweCBzb2xpZDtcXG59XFxuXFxuLnRhc2tfc3RhdHVzX0luLXByb2dyZXNzIHtcXG4gIGNvbG9yOiAjZjM3MjJjO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzNzIyYzViO1xcbiAgYm9yZGVyOiAjZjM3MjJjIDAuNXB4IHNvbGlkO1xcbn1cXG5cXG4udGFza19zdGF0dXNfRG9uZSB7XFxuICBjb2xvcjogIzAwYTg5NjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGE4OTc1ZDtcXG4gIGJvcmRlcjogIzAwYTg5NiAwLjVweCBzb2xpZDtcXG59XFxuXFxuLyogZm9ybXMgKi9cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiAwLjFyZW0gMC4zcmVtO1xcblxcbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjMDA3NmI2ODg7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGNvbG9yOiByZ2IoMTEyLCAxMDksIDEwOSk7XFxufVxcblxcbmxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjMTQyMTNkO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcblxcbiNwcm9qZWN0X3RpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkX3Byb2plY3RfZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5hZGRfcHJvamVjdF9mb3JtX2J1dHRvbnMge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFkZF9wcm9qZWN0X2Zvcm1fYnV0dG9ucyBidXR0b24ge1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc3VibWl0X2J0biB7XFxuICBjb2xvcjogIzFkMzU1NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTlkYmM1ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbmNlbF9idG4ge1xcbiAgY29sb3I6ICNlNjM5NDY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzOTQ3NTk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAwLjJyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFX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QjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5odG1sIHtcXG4gIG1pbi13aWR0aDogMjJyZW07XFxuICBtaW4taGVpZ2h0OiA0NHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgbWluLXdpZHRoOiAyMnJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKiBldmVudHMgY2xhc3NlcyAqL1xcblxcbi50YWJjb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93biB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbn1cXG5cXG4uYWRkX3Byb2pfaWNvbiB7XFxuICB3aWR0aDogMC44cmVtICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIGdyaWQgKi9cXG5cXG4jY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5cXG4jcHJvamVjdF9uYXYge1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0ZGEzYztcXG4gIHBhZGRpbmc6IDNyZW0gMXJlbTtcXG59XFxuXFxuI3Rhc2tzX2NvbnRhaW5lciB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAzcmVtIDYlO1xcbn1cXG5cXG4ubG9nb19wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnQWJyaWwgRmF0ZmFjZScsIGN1cnNpdmU7XFxuICBjb2xvcjogI2U2Mzk0NjtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcblxcbiNhZGRfcHJvamVjdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMDg1NTg1O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgY29sb3I6ICMxZDM1NTc7XFxufVxcblxcbiNhZGRfcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3NGI2M2E7XFxuICBjb2xvcjogI2U2Mzk0NjtcXG59XFxuXFxuI3RhYnMge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3RfY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCAjMGU2NjZiYTg7XFxufVxcblxcbi5zcGFuX3Byb2plY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YWJsaW5rcyB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzE0MjEzZDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhYmxpbmtzOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTczOTFlMDtcXG4gIGNvbG9yOiAjMDA3N2I2O1xcbn1cXG5cXG4ucHJvamVjdF9oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgIzI4NTY3MjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4uaGVhZGVyX3RpdGxlIHtcXG4gIGNvbG9yOiAjMDA3N2I2O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1mYW1pbHk6ICdBYnJpbCBGYXRmYWNlJywgY3Vyc2l2ZTtcXG59XFxuXFxuLmhlYWRlcl9hZGRfdGFzayB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDdyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMTQyMTNkO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmhlYWRlcl9hZGRfdGFzayBpbWcsXFxuLmhlYWRlcl9hZGRfdGFzayBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uaGVhZGVyX2FkZF90YXNrIHNwYW4ge1xcbiAgcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuLnRhc2tzX3dyYXBwZXIge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLnRhc2tfY2FyZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmRpdl9zaG93X21vZGVfdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGl2X3Nob3dfbW9kZV9sZWZ0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRpdl9zaG93X21vZGVfbGVmdCBoMyB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6ICMxNDIxM2Q7XFxufVxcblxcbi5wcmlvcml0eV9ib3gge1xcbiAgd2lkdGg6IDFyZW07XFxuICBoZWlnaHQ6IDFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLnByaW9yaXR5X2JveF9sb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E4ZGFkYztcXG59XFxuXFxuLnByaW9yaXR5X2JveF9tZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjcwMztcXG59XFxuXFxuLnByaW9yaXR5X2JveF9oaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTYzOTQ2O1xcbn1cXG5cXG4uZGl2X3Nob3dfbW9kZV9yaWdodCBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgY29sb3I6ICM0NTdiOWQ7XFxufVxcblxcbi5kaXZfc2hvd19tb2RlX2J1dHRvbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcbn1cXG5cXG4uZGlzcGxheV90YXNrX2Rlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiByZ2IoMjI2LCA3NiwgNzYpO1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrX3N0YXR1cyB7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRhc2tfc3RhdHVzX1RvLWRvIHtcXG4gIGNvbG9yOiAjZTYzOTQ2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2Mzk0NzYwO1xcbiAgYm9yZGVyOiAjZTYzOTQ2IDAuNXB4IHNvbGlkO1xcbn1cXG5cXG4udGFza19zdGF0dXNfSW4tcHJvZ3Jlc3Mge1xcbiAgY29sb3I6ICNmMzcyMmM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjM3MjJjNWI7XFxuICBib3JkZXI6ICNmMzcyMmMgMC41cHggc29saWQ7XFxufVxcblxcbi50YXNrX3N0YXR1c19Eb25lIHtcXG4gIGNvbG9yOiAjMDBhODk2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYTg5NzVkO1xcbiAgYm9yZGVyOiAjMDBhODk2IDAuNXB4IHNvbGlkO1xcbn1cXG5cXG4vKiBmb3JtcyAqL1xcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDAuMXJlbSAwLjNyZW07XFxuXFxuICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICBib3JkZXI6IDAuNXB4IHNvbGlkICMwMDc2YjY4ODtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgY29sb3I6IHJnYigxMTIsIDEwOSwgMTA5KTtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMxNDIxM2Q7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuXFxuI3Byb2plY3RfdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNhZGRfcHJvamVjdF9mb3JtIHtcXG4gIG1hcmdpbi10b3A6IDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmFkZF9wcm9qZWN0X2Zvcm1fYnV0dG9ucyB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWRkX3Byb2plY3RfZm9ybV9idXR0b25zIGJ1dHRvbiB7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5zdWJtaXRfYnRuIHtcXG4gIGNvbG9yOiAjMWQzNTU3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOWRiYzVlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2FuY2VsX2J0biB7XFxuICBjb2xvcjogI2U2Mzk0NjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjM5NDc1OTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7XG4gIHByb2plY3RzTGlzdCwgY291bnRQcm9qZWN0cywgZGVsZXRlRnJvbVByb2plY3RMaXN0LFxuICBlZGl0UHJvamVjdFRpdGxlLCBhZGRUYXNrVG9Qcm9qZWN0LCBmaW5kUHJvamVjdCxcbiAgdGFza3NDb250YWluZXIsXG59IGZyb20gJy4vdmFyaWFibGVzJztcbmltcG9ydCBhZGRUYXNrSWNvbiBmcm9tICcuL2FkZC5wbmcnO1xuaW1wb3J0IHN1Ym1pdFByb2plY3RJY29uIGZyb20gJy4vY2hlY2sucG5nJztcbmltcG9ydCBjYW5jZWxQcm9qZWN0SWNvbiBmcm9tICcuL2Nsb3NlLnBuZyc7XG5pbXBvcnQgZWRpdFByb2plY3RJY29uIGZyb20gJy4vcGVuY2lsLnBuZyc7XG5pbXBvcnQgZGVsZXRlUHJvamVjdEljb24gZnJvbSAnLi9jYW5jZWwucG5nJztcblxubGV0IHByb2plY3RzQ291bnRlciA9IGNvdW50UHJvamVjdHM7XG5cbmNvbnN0IFByb2plY3QgPSByZXF1aXJlKCcuL3Byb2plY3QnKS5kZWZhdWx0O1xuY29uc3QgVGFzayA9IHJlcXVpcmUoJy4vdGFzaycpLmRlZmF1bHQ7XG5cbmNvbnN0IG9wZW5UYWIgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2pfJHtpZH1gKTtcbiAgY29uc3Qgc2hvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd24nKTtcbiAgaWYgKHNob3duICE9PSBudWxsKSB7XG4gICAgc2hvd24uY2xhc3NMaXN0LnRvZ2dsZSgnc2hvd24nKTtcbiAgfVxuICBwcm9qZWN0RGl2LmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG59O1xuXG5jb25zdCBjYW5jZWxBZGRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0X3RpdGxlJyk7XG4gIGlucHV0LnZhbHVlID0gJyc7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkX3Byb2plY3RfZm9ybScpO1xuICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3RfY29udGFpbmVyXyR7aWR9YCk7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFicycpO1xuICB0YWJzLnJlbW92ZUNoaWxkKHdyYXBwZXIpO1xuICAvLyByZW1vdmUgZnJvbSBwcm9qZWN0IGxpc3RcbiAgZGVsZXRlRnJvbVByb2plY3RMaXN0KHByb2plY3RzTGlzdCwgaWQpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG4gIGNvbnN0IHRhc2tzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrc19jb250YWluZXInKTtcbiAgLy8gRGlzcGxheSBkZWZhdWx0IHRhYiB3aGVuIHRoZSBhY3R1YWwgc2hvd24gcHJvamVjdCBpcyByZW1vdmVkXG4gIGNvbnN0IGFjdFByb2plY3RTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2pfJHtpZH1gKTtcbiAgdGFza3NXcmFwcGVyLnJlbW92ZUNoaWxkKGFjdFByb2plY3RTaG93KTtcbiAgY29uc3Qgc2hvd25Qcm9qID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3duJyk7XG4gIGlmIChzaG93blByb2ogPT09IG51bGwgJiYgcHJvamVjdHNMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBkZWZhdWx0U2hvd25UYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJval8ke3Byb2plY3RzTGlzdFswXS5pZH1gKTtcbiAgICBkZWZhdWx0U2hvd25UYWIuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgfVxufTtcblxuY29uc3QgZWRpdFByb2plY3QgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCBzcGFuU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0X3Nob3dfbW9kZV8ke2lkfWApO1xuICBzcGFuU2hvdy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIGNvbnN0IHNwYW5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3RfZWRpdF9tb2RlXyR7aWR9YCk7XG4gIHNwYW5FZGl0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGNhbmNlbFByb2plY3QgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCBzcGFuU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0X3Nob3dfbW9kZV8ke2lkfWApO1xuICBzcGFuU2hvdy5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIGNvbnN0IHNwYW5FZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3RfZWRpdF9tb2RlXyR7aWR9YCk7XG4gIHNwYW5FZGl0LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdF9wcm9qZWN0X3RpdGxlXyR7aWR9YCk7XG4gIGNvbnN0IGJ0blR4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNzaG93X3Byb2plY3RfdGl0bGVfJHtpZH1gKTtcbiAgaW5wdXQudmFsdWUgPSBidG5UeHQudGV4dENvbnRlbnQ7XG59O1xuXG5jb25zdCBzdWJtaXRFZGl0UHJvamVjdCA9IChlKSA9PiB7XG4gIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0SWQ7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRfcHJvamVjdF90aXRsZV8ke2lkfWApO1xuICBlZGl0UHJvamVjdFRpdGxlKHByb2plY3RzTGlzdCwgaWQsIGlucHV0LnZhbHVlKTtcbiAgY29uc3QgYnRuVHh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Nob3dfcHJvamVjdF90aXRsZV8ke2lkfWApO1xuICBidG5UeHQudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgY29uc3Qgc3BhblNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJvamVjdF9zaG93X21vZGVfJHtpZH1gKTtcbiAgc3BhblNob3cuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICBjb25zdCBzcGFuRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0X2VkaXRfbW9kZV8ke2lkfWApO1xuICBzcGFuRWRpdC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIGNvbnN0IGRlZmF1bHRTaG93blRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNoZWFkZXJfdGl0bGVfJHtpZH1gKTtcbiAgZGVmYXVsdFNob3duVGFiLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG59O1xuXG5jb25zdCBjYW5jZWxBZGRUYXNrID0gKGUpID0+IHtcbiAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrX3RpdGxlXyR7aWR9YCk7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSBudWxsO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfZGVzY3JpcHRpb25fJHtpZH1gKTtcbiAgZGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IG51bGw7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza19wcmlvcml0eV8ke2lkfWApO1xuICBwcmlvcml0eUlucHV0LnZhbHVlID0gJ2xvdyc7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYWRkX3Rhc2tfZm9ybV8ke2lkfWApO1xuICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoZSkgPT4ge1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LlRhc2tJZDtcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuZGF0YXNldC5UYXNrUHJvaklkO1xuXG4gIGNvbnN0IFRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfY2FyZF8ke3Byb2pJZH1fJHt0YXNrSWR9YCk7XG4gIGNvbnN0IHRhc2tzV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrc193cmFwcGVyXyR7cHJvaklkfWApO1xuICB0YXNrc1dyYXBwZXIucmVtb3ZlQ2hpbGQoVGFza0NhcmQpO1xuXG4gIGNvbnN0IHByb2plY3RJbmR4ID0gZmluZFByb2plY3QocHJvamVjdHNMaXN0LCBwcm9qSWQpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNMaXN0W3Byb2plY3RJbmR4XTtcbiAgcHJvamVjdC5yZW1vdmVUYXNrKHRhc2tJZCk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzTGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xufTtcblxuY29uc3QgY2FuY2VsRWRpdFRhc2sgPSAoZSkgPT4ge1xuICBjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5kYXRhc2V0LlRhc2tJZDtcbiAgY29uc3QgcHJvaklkID0gZS50YXJnZXQuZGF0YXNldC5UYXNrUHJvaklkO1xuXG4gIGNvbnN0IHByb2plY3RJbmR4ID0gZmluZFByb2plY3QocHJvamVjdHNMaXN0LCBwcm9qSWQpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNMaXN0W3Byb2plY3RJbmR4XTtcbiAgY29uc3QgdGFza0luZGV4ID0gZmluZFByb2plY3QocHJvamVjdC50YXNrcywgdGFza0lkKTtcbiAgY29uc3QgdGFzayA9IHByb2plY3QudGFza3NbdGFza0luZGV4XTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRfdGFza190aXRsZV8ke3Byb2pJZH1fJHt0YXNrSWR9YCk7XG4gIHRpdGxlSW5wdXQudmFsdWUgPSB0YXNrLnRpdGxlO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRfdGFza19kZXNjcmlwdGlvbl8ke3Byb2pJZH1fJHt0YXNrSWR9YCk7XG4gIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRfdGFza19wcmlvcml0eV8ke3Byb2pJZH1fJHt0YXNrSWR9YCk7XG4gIHByaW9yaXR5SW5wdXQudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICBjb25zdCBzdGF0dXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0X3Rhc2tfc3RhdHVzXyR7cHJvaklkfV8ke3Rhc2tJZH1gKTtcbiAgc3RhdHVzSW5wdXQudmFsdWUgPSB0YXNrLnN0YXR1cztcblxuICBjb25zdCBkaXZTaG93TW9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrX3Nob3dfbW9kZV8ke3Byb2pJZH1fJHt0YXNrSWR9YCk7XG4gIGRpdlNob3dNb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgY29uc3QgZGl2RWRpdE1vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza19lZGl0X21vZGVfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICBkaXZFZGl0TW9kZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59O1xuXG5jb25zdCBzdWJtaXRFZGl0VGFzayA9IChlKSA9PiB7XG4gIGNvbnN0IHRhc2tJZCA9IGUudGFyZ2V0LmRhdGFzZXQuVGFza0lkO1xuICBjb25zdCBwcm9qSWQgPSBlLnRhcmdldC5kYXRhc2V0LlRhc2tQcm9qSWQ7XG5cbiAgY29uc3QgcHJvamVjdEluZHggPSBmaW5kUHJvamVjdChwcm9qZWN0c0xpc3QsIHByb2pJZCk7XG4gIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c0xpc3RbcHJvamVjdEluZHhdO1xuICBjb25zdCB0YXNrSW5kZXggPSBmaW5kUHJvamVjdChwcm9qZWN0LnRhc2tzLCB0YXNrSWQpO1xuICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrc1t0YXNrSW5kZXhdO1xuICBjb25zdCBwcmlvcml0eUxhc3QgPSB0YXNrLnByaW9yaXR5O1xuICBjb25zdCBzdGF0dXNMYXN0ID0gdGFzay5zdGF0dXM7XG5cbiAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0X3Rhc2tfdGl0bGVfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICB0YXNrLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0X3Rhc2tfZGVzY3JpcHRpb25fJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlZGl0X3Rhc2tfcHJpb3JpdHlfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHlJbnB1dC52YWx1ZTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZWRpdF90YXNrX2RhdGVfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICBpZiAoZGF0ZUlucHV0LnZhbHVlICE9PSAnJykge1xuICAgIHRhc2suZHVlRGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgfVxuXG4gIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2VkaXRfdGFza19zdGF0dXNfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICB0YXNrLnN0YXR1cyA9IHN0YXR1c0lucHV0LnZhbHVlO1xuXG4gIGNvbnN0IHRpdGxlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkaXNwbGF5X3Rhc2tfdGl0bGVfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICB0aXRsZURpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuXG4gIGNvbnN0IGRlc2NyaXB0aW9uRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkaXNwbGF5X3Rhc2tfZGVzY3JpcHRpb25fJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICBkZXNjcmlwdGlvbkRpc3BsYXkudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IHByaW9yaXR5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNkaXNwbGF5X3Rhc2tfcHJpb3JpdHlfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICBwcmlvcml0eURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShgcHJpb3JpdHlfYm94XyR7cHJpb3JpdHlMYXN0fWApO1xuICBwcmlvcml0eURpc3BsYXkuY2xhc3NMaXN0LmFkZChgcHJpb3JpdHlfYm94XyR7dGFzay5wcmlvcml0eX1gKTtcblxuICBjb25zdCBzdGF0dXNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Rpc3BsYXlfdGFza19zdGF0dXNfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICBzdGF0dXNEaXNwbGF5LnRleHRDb250ZW50ID0gdGFzay5zdGF0dXM7XG4gIHN0YXR1c0Rpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShgdGFza19zdGF0dXNfJHtzdGF0dXNMYXN0fWApO1xuICBzdGF0dXNEaXNwbGF5LmNsYXNzTGlzdC5hZGQoYHRhc2tfc3RhdHVzXyR7dGFzay5zdGF0dXN9YCk7XG5cbiAgY29uc3QgZGl2U2hvd01vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza19zaG93X21vZGVfJHtwcm9qSWR9XyR7dGFza0lkfWApO1xuICBkaXZTaG93TW9kZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG4gIGNvbnN0IGRpdkVkaXRNb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfZWRpdF9tb2RlXyR7cHJvaklkfV8ke3Rhc2tJZH1gKTtcbiAgZGl2RWRpdE1vZGUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG59O1xuXG5jb25zdCBkaXNwbGF5VGFzayA9ICh0YXNrKSA9PiB7XG4gIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFza19jYXJkJyk7XG4gIHRhc2tDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFza19jYXJkXyR7dGFzay5wcm9qSWR9XyR7dGFzay5pZH1gKTtcblxuICAvLyBkaXNwbGF5aW5nIHRoZSB0YXNrIG1vZGVcbiAgY29uc3QgZGl2U2hvd01vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2U2hvd01vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrX3Nob3dfbW9kZV8ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIGRpdlNob3dNb2RlLmNsYXNzTGlzdC5hZGQoJ3Nob3dfZGl2X3Rhc2snKTtcblxuICBjb25zdCBkaXZTaG93TW9kZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2U2hvd01vZGVMZWZ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2X3Nob3dfbW9kZV9sZWZ0Jyk7XG4gIGNvbnN0IHByaW9yaXR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHByaW9yaXR5Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgZGlzcGxheV90YXNrX3ByaW9yaXR5XyR7dGFzay5wcm9qSWR9XyR7dGFzay5pZH1gKTtcbiAgcHJpb3JpdHlCb3guY2xhc3NMaXN0LmFkZChgcHJpb3JpdHlfYm94XyR7dGFzay5wcmlvcml0eX1gLCAncHJpb3JpdHlfYm94Jyk7XG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRhc2tUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpc3BsYXlfdGFza190aXRsZV8ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gIGRpdlNob3dNb2RlTGVmdC5hcHBlbmQocHJpb3JpdHlCb3gsIHRhc2tUaXRsZSk7XG5cbiAgY29uc3QgZGl2U2hvd01vZGVSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZTaG93TW9kZVJpZ2h0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGl2X3Nob3dfbW9kZV9yaWdodCcpO1xuXG4gIGNvbnN0IHNwYW5EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpc3BsYXlfdGFza19kYXRlXyR7dGFzay5wcm9qSWR9XyR7dGFzay5pZH1gKTtcblxuICBjb25zdCBlZGl0VGFza0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGVkaXRUYXNrSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0UHJvamVjdEljb24pO1xuICBlZGl0VGFza0ltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Byb2pfaWNvbicpO1xuICBlZGl0VGFza0ltYWdlLmRhdGFzZXQuVGFza0lkID0gdGFzay5pZDtcbiAgZWRpdFRhc2tJbWFnZS5kYXRhc2V0LlRhc2tQcm9qSWQgPSB0YXNrLnByb2pJZDtcbiAgZWRpdFRhc2tJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjYW5jZWxFZGl0VGFzayhlKSk7XG5cbiAgY29uc3QgZGVsZXRlVGFza0ltYWdlID0gbmV3IEltYWdlKCk7XG4gIGRlbGV0ZVRhc2tJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRlbGV0ZVByb2plY3RJY29uKTtcbiAgZGVsZXRlVGFza0ltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Byb2pfaWNvbicpO1xuICBkZWxldGVUYXNrSW1hZ2UuZGF0YXNldC5UYXNrSWQgPSB0YXNrLmlkO1xuICBkZWxldGVUYXNrSW1hZ2UuZGF0YXNldC5UYXNrUHJvaklkID0gdGFzay5wcm9qSWQ7XG4gIGRlbGV0ZVRhc2tJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBkZWxldGVUYXNrKGUpKTtcblxuICBkaXZTaG93TW9kZVJpZ2h0LmFwcGVuZChzcGFuRHVlRGF0ZSwgZWRpdFRhc2tJbWFnZSwgZGVsZXRlVGFza0ltYWdlKTtcblxuICBjb25zdCBkaXZTaG93TW9kZVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXZTaG93TW9kZVRvcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rpdl9zaG93X21vZGVfdG9wJyk7XG4gIGRpdlNob3dNb2RlVG9wLmFwcGVuZChkaXZTaG93TW9kZUxlZnQsIGRpdlNob3dNb2RlUmlnaHQpO1xuICAvLyBkZXNjcmlwdGlvbiBpbiB0aGUgYnV0dG9tXG5cbiAgY29uc3QgZGl2U2hvd01vZGVCdXR0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2U2hvd01vZGVCdXR0b20uc2V0QXR0cmlidXRlKCdjbGFzcycsICdkaXZfc2hvd19tb2RlX2J1dHRvbScpO1xuXG4gIGNvbnN0IHNwYW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgc3BhbkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXlfdGFza19kZXNjcmlwdGlvbicpO1xuICBzcGFuRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsIGBkaXNwbGF5X3Rhc2tfZGVzY3JpcHRpb25fJHt0YXNrLnByb2pJZH1fJHt0YXNrLmlkfWApO1xuICBzcGFuRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gIGNvbnN0IHNwYW5TdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5TdGF0dXMuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXNwbGF5X3Rhc2tfc3RhdHVzXyR7dGFzay5wcm9qSWR9XyR7dGFzay5pZH1gKTtcbiAgc3BhblN0YXR1cy5jbGFzc0xpc3QuYWRkKCd0YXNrX3N0YXR1cycsIGB0YXNrX3N0YXR1c18ke3Rhc2suc3RhdHVzfWApO1xuICBzcGFuU3RhdHVzLnRleHRDb250ZW50ID0gdGFzay5zdGF0dXM7XG5cbiAgZGl2U2hvd01vZGVCdXR0b20uYXBwZW5kKHNwYW5EZXNjcmlwdGlvbiwgc3BhblN0YXR1cyk7XG5cbiAgLy8gZWRpdGluZyB0aGUgdGFzayBtb2RlXG5cbiAgY29uc3QgZGl2RWRpdE1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2RWRpdE1vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrX2VkaXRfbW9kZV8ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIGRpdkVkaXRNb2RlLmNsYXNzTGlzdC5hZGQoJ2VkaXRfZGl2X3Rhc2snLCAnaGlkZScpO1xuICAvLyBFZGl0IEZvcm1cbiAgY29uc3QgZWRpdFRhc2tGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0VGFza0Zvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2VkaXRfdGFza19mb3JtX3dyYXBwZXInKTtcblxuICBjb25zdCBlZGl0VGFza1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVkaXRUYXNrVGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnZWRpdF90YXNrX2lucHV0X2NvbnRhaW5lcicpO1xuICBjb25zdCBlZGl0VGFza1RpdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGVkaXRUYXNrVGl0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYGVkaXRfdGFza190aXRsZV8ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIGVkaXRUYXNrVGl0ZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgdGl0bGU6JztcbiAgY29uc3QgZWRpdFRhc2tUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWRpdFRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGVkaXRUYXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVkaXRfdGFza190aXRsZV8ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIGVkaXRUYXNrVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgdGFzay50aXRsZSk7XG5cbiAgZWRpdFRhc2tUaXRsZURpdi5hcHBlbmQoZWRpdFRhc2tUaXRlTGFiZWwsIGVkaXRUYXNrVGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlZGl0VGFza0Rlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2VkaXRfdGFza19pbnB1dF9jb250YWluZXInKTtcbiAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZWRpdFRhc2tEZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYGVkaXRfdGFza19kZXNjcmlwdGlvbl8ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIGVkaXRUYXNrRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrIERlc2NyaXB0aW9uOic7XG4gIGNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGVkaXRUYXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICBlZGl0VGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGBlZGl0X3Rhc2tfZGVzY3JpcHRpb25fJHt0YXNrLnByb2pJZH1fJHt0YXNrLmlkfWApO1xuICBlZGl0VGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRhc2suZGVzY3JpcHRpb24pO1xuXG4gIGVkaXRUYXNrRGVzY3JpcHRpb25EaXYuYXBwZW5kKGVkaXRUYXNrRGVzY3JpcHRpb25MYWJlbCwgZWRpdFRhc2tEZXNjcmlwdGlvbklucHV0KTtcblxuICBjb25zdCBlZGl0UHJpb3JpdHlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlZGl0UHJpb3JpdHlTcGFuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdF90YXNrX3NlbGVjdF9zcGFuJyk7XG4gIGNvbnN0IGVkaXRQcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZWRpdFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgZWRpdFByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgZWRpdF90YXNrX3ByaW9yaXR5XyR7dGFzay5wcm9qSWR9XyR7dGFzay5pZH1gKTtcbiAgY29uc3QgZWRpdFByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGVkaXRQcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYGVkaXRfdGFza19wcmlvcml0eV8ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIGNvbnN0IGVkaXRQcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgZWRpdFByaW9yaXR5T3B0aW9uMS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2hpZ2h0Jyk7XG4gIGVkaXRQcmlvcml0eU9wdGlvbjEudGV4dENvbnRlbnQgPSAnSGlnaHQnO1xuICBjb25zdCBlZGl0UHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGVkaXRQcmlvcml0eU9wdGlvbjIuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdtZWRpdW0nKTtcbiAgZWRpdFByaW9yaXR5T3B0aW9uMi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBjb25zdCBlZGl0UHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGVkaXRQcmlvcml0eU9wdGlvbjMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdsb3cnKTtcbiAgZWRpdFByaW9yaXR5T3B0aW9uMy50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gIGVkaXRQcmlvcml0eVNlbGVjdC5hcHBlbmQoZWRpdFByaW9yaXR5T3B0aW9uMSwgZWRpdFByaW9yaXR5T3B0aW9uMiwgZWRpdFByaW9yaXR5T3B0aW9uMyk7XG4gIGVkaXRQcmlvcml0eVNlbGVjdC52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gIGVkaXRQcmlvcml0eVNwYW4uYXBwZW5kKGVkaXRQcmlvcml0eUxhYmVsLCBlZGl0UHJpb3JpdHlTZWxlY3QpO1xuXG4gIGNvbnN0IGVkaXRTdGF0dXNTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBlZGl0U3RhdHVzU3Bhbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRfdGFza19zZWxlY3Rfc3BhbicpO1xuICBjb25zdCBlZGl0U3RhdHVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBlZGl0U3RhdHVzTGFiZWwudGV4dENvbnRlbnQgPSAnU3RhdHVzOic7XG4gIGVkaXRTdGF0dXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBlZGl0X3Rhc2tfc3RhdHVzXyR7dGFzay5wcm9qSWR9XyR7dGFzay5pZH1gKTtcbiAgY29uc3QgZWRpdFN0YXR1c1NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBlZGl0U3RhdHVzU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdF90YXNrX3N0YXR1c18ke3Rhc2sucHJvaklkfV8ke3Rhc2suaWR9YCk7XG4gIGNvbnN0IGVkaXRTdGF0dXNPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGVkaXRTdGF0dXNPcHRpb24xLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnVG8tZG8nKTtcbiAgZWRpdFN0YXR1c09wdGlvbjEudGV4dENvbnRlbnQgPSAnVG8tZG8nO1xuICBjb25zdCBlZGl0U3RhdHVzT3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBlZGl0U3RhdHVzT3B0aW9uMi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0luLXByb2dyZXNzJyk7XG4gIGVkaXRTdGF0dXNPcHRpb24yLnRleHRDb250ZW50ID0gJ0luIHByb2dyZXNzJztcbiAgY29uc3QgZWRpdFN0YXR1c09wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgZWRpdFN0YXR1c09wdGlvbjMuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdEb25lJyk7XG4gIGVkaXRTdGF0dXNPcHRpb24zLnRleHRDb250ZW50ID0gJ0RvbmUnO1xuXG4gIGVkaXRTdGF0dXNTZWxlY3QuYXBwZW5kKGVkaXRTdGF0dXNPcHRpb24xLCBlZGl0U3RhdHVzT3B0aW9uMiwgZWRpdFN0YXR1c09wdGlvbjMpO1xuICBlZGl0U3RhdHVzU2VsZWN0LnZhbHVlID0gdGFzay5zdGF0dXM7XG4gIGVkaXRTdGF0dXNTcGFuLmFwcGVuZChlZGl0U3RhdHVzTGFiZWwsIGVkaXRTdGF0dXNTZWxlY3QpO1xuXG4gIGNvbnN0IGVkaXREYXRlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZWRpdERhdGVTcGFuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdF90YXNrX3NlbGVjdF9zcGFuJyk7XG4gIGNvbnN0IGVkaXREYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBlZGl0RGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ1NjaGVkdWxlOic7XG4gIGVkaXREYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgZWRpdF90YXNrX2RhdGVfJHt0YXNrLnByb2pJZH1fJHt0YXNrLmlkfWApO1xuICBjb25zdCBlZGl0RGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZWRpdERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBlZGl0RGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdF90YXNrX2RhdGVfJHt0YXNrLnByb2pJZH1fJHt0YXNrLmlkfWApO1xuICBlZGl0RGF0ZUlucHV0LnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICBlZGl0RGF0ZVNwYW4uYXBwZW5kKGVkaXREYXRlTGFiZWwsIGVkaXREYXRlSW5wdXQpO1xuXG4gIGNvbnN0IGVkaXRUYXNrRm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWRpdFRhc2tGb3JtQnV0dG9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXRfdGFza19mb3JtX2J1dHRvbnMnKTtcbiAgY29uc3QgZWRpdFRhc2tGb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRUYXNrRm9ybVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdzdWJtaXRfYnRuJyk7XG4gIGVkaXRUYXNrRm9ybVN1Ym1pdC5kYXRhc2V0LlRhc2tJZCA9IHRhc2suaWQ7XG4gIGVkaXRUYXNrRm9ybVN1Ym1pdC5kYXRhc2V0LlRhc2tQcm9qSWQgPSB0YXNrLnByb2pJZDtcbiAgZWRpdFRhc2tGb3JtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHN1Ym1pdEVkaXRUYXNrKGUpKTtcbiAgZWRpdFRhc2tGb3JtU3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgY29uc3QgZWRpdFRhc2tGb3JtQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGVkaXRUYXNrRm9ybUNhbmNlbC5jbGFzc0xpc3QuYWRkKCdjYW5jZWxfYnRuJyk7XG4gIGVkaXRUYXNrRm9ybUNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBlZGl0VGFza0Zvcm1DYW5jZWwuZGF0YXNldC5UYXNrSWQgPSB0YXNrLmlkO1xuICBlZGl0VGFza0Zvcm1DYW5jZWwuZGF0YXNldC5UYXNrUHJvaklkID0gdGFzay5wcm9qSWQ7XG5cbiAgZWRpdFRhc2tGb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNhbmNlbEVkaXRUYXNrKGUpKTtcblxuICBlZGl0VGFza0Zvcm1CdXR0b25zLmFwcGVuZChlZGl0VGFza0Zvcm1TdWJtaXQsIGVkaXRUYXNrRm9ybUNhbmNlbCk7XG5cbiAgZWRpdFRhc2tGb3JtV3JhcHBlci5hcHBlbmQoZWRpdFRhc2tUaXRsZURpdiwgZWRpdFRhc2tEZXNjcmlwdGlvbkRpdiwgZWRpdFByaW9yaXR5U3BhbixcbiAgICBlZGl0U3RhdHVzU3BhbiwgZWRpdERhdGVTcGFuLCBlZGl0VGFza0Zvcm1CdXR0b25zKTtcblxuICAvLz0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBkaXZFZGl0TW9kZS5hcHBlbmQoZWRpdFRhc2tGb3JtV3JhcHBlcik7XG5cbiAgZGl2U2hvd01vZGUuYXBwZW5kKGRpdlNob3dNb2RlVG9wLCBkaXZTaG93TW9kZUJ1dHRvbSk7XG4gIHRhc2tDYXJkLmFwcGVuZChkaXZTaG93TW9kZSwgZGl2RWRpdE1vZGUpO1xuXG4gIHJldHVybiB0YXNrQ2FyZDtcbn07XG5cbmNvbnN0IGFkZFRhc2sgPSAoZSkgPT4ge1xuICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xuICBjb25zdCBwcm9qZWN0SW5keCA9IGZpbmRQcm9qZWN0KHByb2plY3RzTGlzdCwgaWQpO1xuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNMaXN0W3Byb2plY3RJbmR4XTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfdGl0bGVfJHtpZH1gKTtcbiAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfZGVzY3JpcHRpb25fJHtpZH1gKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbklucHV0LnZhbHVlO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Rhc2tfcHJpb3JpdHlfJHtpZH1gKTtcbiAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUlucHV0LnZhbHVlO1xuXG4gIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrX2RhdGVfJHtpZH1gKTtcbiAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcblxuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgaWQsIHByb2plY3QudGFza0NvdW50ZXIpO1xuICBhZGRUYXNrVG9Qcm9qZWN0KHByb2plY3RzTGlzdCwgaWQsIHRhc2spO1xuICBjb25zdCB0YXNrV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrc193cmFwcGVyXyR7aWR9YCk7XG4gIHRhc2tXcmFwcGVyLmFwcGVuZChkaXNwbGF5VGFzayh0YXNrKSk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNhZGRfdGFza19mb3JtXyR7aWR9YCk7XG4gIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG59O1xuXG5jb25zdCB0YXNrTmF2ID0gKG15cHJvamVjdCkgPT4ge1xuICAvLyB3cmFwcGVyXG4gIGNvbnN0IGRpdk5hdldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2TmF2V3JhcC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYmNvbnRlbnQnKTtcbiAgZGl2TmF2V3JhcC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2pfJHtteXByb2plY3QuaWR9YCk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RfaGVhZGVyJyk7XG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGVyVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdoZWFkZXJfdGl0bGUnKTtcbiAgaGVhZGVyVGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsIGBoZWFkZXJfdGl0bGVfJHtteXByb2plY3QuaWR9YCk7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gbXlwcm9qZWN0LnRpdGxlO1xuXG4gIC8vIGFkZCB0YXNrIGhlYWRlclxuXG4gIGNvbnN0IGhlYWRlckFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgaGVhZGVyQWRkVGFzay5kYXRhc2V0LnByb2plY3RJZCA9IG15cHJvamVjdC5pZDtcbiAgaGVhZGVyQWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBjYW5jZWxBZGRUYXNrKGUpKTtcblxuICBoZWFkZXJBZGRUYXNrLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhZGVyX2FkZF90YXNrJyk7XG4gIGNvbnN0IGFkZFRhc2tJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBhZGRUYXNrSW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBhZGRUYXNrSWNvbik7XG4gIGFkZFRhc2tJbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZF9wcm9qX2ljb24nKTtcbiAgY29uc3QgYWRkVGFza1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGFkZFRhc2tTcGFuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Rhc2tfc3BhbicpO1xuICBhZGRUYXNrU3Bhbi50ZXh0Q29udGVudCA9ICdBZGQgYSBUYXNrJztcbiAgaGVhZGVyQWRkVGFzay5hcHBlbmQoYWRkVGFza0ltYWdlLCBhZGRUYXNrU3Bhbik7XG5cbiAgaGVhZGVyLmFwcGVuZChoZWFkZXJUaXRsZSwgaGVhZGVyQWRkVGFzayk7XG5cbiAgLy8gYWRkIHRhc2sgZm9ybVxuXG4gIGNvbnN0IGFkZFRhc2tGb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUYXNrRm9ybVdyYXBwZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRfdGFza19mb3JtX3dyYXBwZXInKTtcbiAgYWRkVGFza0Zvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgYWRkVGFza0Zvcm1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnaWQnLCBgYWRkX3Rhc2tfZm9ybV8ke215cHJvamVjdC5pZH1gKTtcblxuICBjb25zdCBhZGRUYXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkVGFza1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2FkZF90YXNrX2lucHV0X2NvbnRhaW5lcicpO1xuICBjb25zdCBhZGRUYXNrVGl0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgYWRkVGFza1RpdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrX3RpdGxlXyR7bXlwcm9qZWN0LmlkfWApO1xuICBhZGRUYXNrVGl0ZUxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2sgdGl0bGU6JztcblxuICBjb25zdCBhZGRUYXNrVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGFkZFRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGFkZFRhc2tUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFza190aXRsZV8ke215cHJvamVjdC5pZH1gKTtcbiAgYWRkVGFza1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdUeXBlIHlvdXIgdGFzayB0aXRsZSBoZXJlIScpO1xuXG4gIGFkZFRhc2tUaXRsZURpdi5hcHBlbmQoYWRkVGFza1RpdGVMYWJlbCwgYWRkVGFza1RpdGxlSW5wdXQpO1xuXG4gIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhZGRUYXNrRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnYWRkX3Rhc2tfaW5wdXRfY29udGFpbmVyJyk7XG4gIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBgdGFza19kZXNjcmlwdGlvbl8ke215cHJvamVjdC5pZH1gKTtcbiAgYWRkVGFza0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayBkZXNjcmlwdGlvbjonO1xuXG4gIGNvbnN0IGFkZFRhc2tEZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGB0YXNrX2Rlc2NyaXB0aW9uXyR7bXlwcm9qZWN0LmlkfWApO1xuICBhZGRUYXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1R5cGUgYSBkZXNjcmlwdGlvbiBmb3IgeW91ciB0YXNrIGhlcmUhJyk7XG5cbiAgYWRkVGFza0Rlc2NyaXB0aW9uRGl2LmFwcGVuZChhZGRUYXNrRGVzY3JpcHRpb25MYWJlbCwgYWRkVGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuXG4gIGNvbnN0IGFkZFByaW9yaXR5U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYWRkUHJpb3JpdHlTcGFuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Rhc2tfc2VsZWN0X3NwYW4nKTtcbiAgY29uc3QgYWRkUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGFkZFByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHk6JztcbiAgYWRkUHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGB0YXNrX3ByaW9yaXR5XyR7bXlwcm9qZWN0LmlkfWApO1xuICBjb25zdCBhZGRQcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBhZGRQcmlvcml0eVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2tfcHJpb3JpdHlfJHtteXByb2plY3QuaWR9YCk7XG4gIGNvbnN0IGFkZFByaW9yaXR5T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBhZGRQcmlvcml0eU9wdGlvbjEuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdoaWdodCcpO1xuICBhZGRQcmlvcml0eU9wdGlvbjEudGV4dENvbnRlbnQgPSAnSGlnaHQnO1xuICBjb25zdCBhZGRQcmlvcml0eU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgYWRkUHJpb3JpdHlPcHRpb24yLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbWVkaXVtJyk7XG4gIGFkZFByaW9yaXR5T3B0aW9uMi50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICBjb25zdCBhZGRQcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgYWRkUHJpb3JpdHlPcHRpb24zLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnbG93Jyk7XG4gIGFkZFByaW9yaXR5T3B0aW9uMy50ZXh0Q29udGVudCA9ICdMb3cnO1xuXG4gIGFkZFByaW9yaXR5U2VsZWN0LmFwcGVuZChhZGRQcmlvcml0eU9wdGlvbjEsIGFkZFByaW9yaXR5T3B0aW9uMiwgYWRkUHJpb3JpdHlPcHRpb24zKTtcbiAgYWRkUHJpb3JpdHlTcGFuLmFwcGVuZChhZGRQcmlvcml0eUxhYmVsLCBhZGRQcmlvcml0eVNlbGVjdCk7XG5cbiAgY29uc3QgYWRkRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGFkZFByaW9yaXR5U3Bhbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZF90YXNrX2RhdGVfc3BhbicpO1xuICBjb25zdCBhZGREYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBhZGREYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnU2NoZWR1bGU6JztcbiAgYWRkRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgYHRhc2tfZGF0ZV8ke215cHJvamVjdC5pZH1gKTtcbiAgY29uc3QgYWRkRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYWRkRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gIGFkZERhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2tfZGF0ZV8ke215cHJvamVjdC5pZH1gKTtcbiAgYWRkRGF0ZVNwYW4uYXBwZW5kKGFkZERhdGVMYWJlbCwgYWRkRGF0ZUlucHV0KTtcblxuICBjb25zdCBhZGRUYXNrRm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkVGFza0Zvcm1CdXR0b25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Rhc2tfZm9ybV9idXR0b25zJyk7XG4gIGNvbnN0IGFkZFRhc2tGb3JtQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRhc2tGb3JtQ3JlYXRlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdF9idG4nKTtcbiAgYWRkVGFza0Zvcm1DcmVhdGUuZGF0YXNldC5wcm9qZWN0SWQgPSBteXByb2plY3QuaWQ7XG4gIGFkZFRhc2tGb3JtQ3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGFkZFRhc2soZSkpO1xuICBhZGRUYXNrRm9ybUNyZWF0ZS50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XG5cbiAgY29uc3QgYWRkVGFza0Zvcm1DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkVGFza0Zvcm1DYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsX2J0bicpO1xuICBhZGRUYXNrRm9ybUNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBhZGRUYXNrRm9ybUNhbmNlbC5kYXRhc2V0LnByb2plY3RJZCA9IG15cHJvamVjdC5pZDtcbiAgYWRkVGFza0Zvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2FuY2VsQWRkVGFzayhlKSk7XG5cbiAgYWRkVGFza0Zvcm1CdXR0b25zLmFwcGVuZChhZGRUYXNrRm9ybUNyZWF0ZSwgYWRkVGFza0Zvcm1DYW5jZWwpO1xuXG4gIGFkZFRhc2tGb3JtV3JhcHBlci5hcHBlbmQoYWRkVGFza1RpdGxlRGl2LCBhZGRUYXNrRGVzY3JpcHRpb25EaXYsXG4gICAgYWRkUHJpb3JpdHlTcGFuLCBhZGREYXRlU3BhbiwgYWRkVGFza0Zvcm1CdXR0b25zKTtcblxuICAvLyB0YXNrcyB3cmFwcGVyXG5cbiAgY29uc3QgdGFza3NXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhc2tzV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYHRhc2tzX3dyYXBwZXJfJHtteXByb2plY3QuaWR9YCk7XG4gIHRhc2tzV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Rhc2tzX3dyYXBwZXInKTtcblxuICBteXByb2plY3QudGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHRhc2tzV3JhcHBlci5hcHBlbmQoZGlzcGxheVRhc2soZWxlbWVudCkpO1xuICAgIHJldHVybiB0YXNrc1dyYXBwZXI7XG4gIH0pO1xuXG4gIGRpdk5hdldyYXAuYXBwZW5kKGhlYWRlciwgYWRkVGFza0Zvcm1XcmFwcGVyLCB0YXNrc1dyYXBwZXIpO1xuICByZXR1cm4gZGl2TmF2V3JhcDtcbn07XG5cbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgY29uc3Qgd3JhcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXBlci5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3RfY29udGFpbmVyXyR7cHJvamVjdC5pZH1gKTtcbiAgd3JhcGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfY29udGFpbmVyJyk7XG5cbiAgY29uc3Qgc3BhblNob3dNb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBzcGFuU2hvd01vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0X3Nob3dfbW9kZV8ke3Byb2plY3QuaWR9YCk7XG4gIHNwYW5TaG93TW9kZS5jbGFzc0xpc3QuYWRkKCdzcGFuX3Byb2plY3QnKTtcblxuICBjb25zdCBzcGFuRWRpdE1vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW5FZGl0TW9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYHByb2plY3RfZWRpdF9tb2RlXyR7cHJvamVjdC5pZH1gKTtcbiAgc3BhbkVkaXRNb2RlLmNsYXNzTGlzdC5hZGQoJ3NwYW5fcHJvamVjdCcsICdoaWRlJyk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgYHNob3dfcHJvamVjdF90aXRsZV8ke3Byb2plY3QuaWR9YCk7XG4gIGJ0bi5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBvcGVuVGFiKGUpKTtcbiAgYnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFibGlua3MnKTtcbiAgYnRuLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGVkaXRQcm9qZWN0SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBlZGl0UHJvamVjdEljb24pO1xuICBlZGl0UHJvamVjdEltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Byb2pfaWNvbicpO1xuICBlZGl0UHJvamVjdEltYWdlLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgZWRpdFByb2plY3RJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBlZGl0UHJvamVjdChlKSk7XG5cbiAgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGRlbGV0ZVByb2plY3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRlbGV0ZVByb2plY3RJY29uKTtcbiAgZGVsZXRlUHJvamVjdEltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Byb2pfaWNvbicpO1xuICBkZWxldGVQcm9qZWN0SW1hZ2UuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBkZWxldGVQcm9qZWN0SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gZGVsZXRlUHJvamVjdChlKSk7XG5cbiAgY29uc3QgcHJvamVjdFNob3dSaWdodEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByb2plY3RTaG93UmlnaHRCdG5zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfcmlnaHRfYnV0dG9ucycpO1xuICBwcm9qZWN0U2hvd1JpZ2h0QnRucy5hcHBlbmQoZWRpdFByb2plY3RJbWFnZSwgZGVsZXRlUHJvamVjdEltYWdlKTtcbiAgc3BhblNob3dNb2RlLmFwcGVuZChidG4sIHByb2plY3RTaG93UmlnaHRCdG5zKTtcblxuICBjb25zdCBlZGl0UHJvalRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBlZGl0UHJvalRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZWRpdFByb2pUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdF9wcm9qZWN0X3RpdGxlXyR7cHJvamVjdC5pZH1gKTtcbiAgZWRpdFByb2pUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcm9qZWN0LnRpdGxlKTtcblxuICBjb25zdCBzdWJtaXRQcm9qZWN0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgc3VibWl0UHJvamVjdEltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgc3VibWl0UHJvamVjdEljb24pO1xuICBzdWJtaXRQcm9qZWN0SW1hZ2Uuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGRfcHJval9pY29uJyk7XG4gIHN1Ym1pdFByb2plY3RJbWFnZS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XG4gIHN1Ym1pdFByb2plY3RJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBzdWJtaXRFZGl0UHJvamVjdChlKSk7XG5cbiAgY29uc3QgY2FuY2VsUHJvamVjdEltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNhbmNlbFByb2plY3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNhbmNlbFByb2plY3RJY29uKTtcbiAgY2FuY2VsUHJvamVjdEltYWdlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkX3Byb2pfaWNvbicpO1xuICBjYW5jZWxQcm9qZWN0SW1hZ2UuZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICBjYW5jZWxQcm9qZWN0SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2FuY2VsUHJvamVjdChlKSk7XG5cbiAgY29uc3QgcHJvamVjdEVkaXRSaWdodEJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByb2plY3RFZGl0UmlnaHRCdG5zLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RfcmlnaHRfYnV0dG9ucycpO1xuICBwcm9qZWN0RWRpdFJpZ2h0QnRucy5hcHBlbmQoc3VibWl0UHJvamVjdEltYWdlLCBjYW5jZWxQcm9qZWN0SW1hZ2UpO1xuXG4gIHNwYW5FZGl0TW9kZS5hcHBlbmQoZWRpdFByb2pUaXRsZUlucHV0LCBwcm9qZWN0RWRpdFJpZ2h0QnRucyk7XG5cbiAgd3JhcGVyLmFwcGVuZChzcGFuU2hvd01vZGUsIHNwYW5FZGl0TW9kZSk7XG5cbiAgdGFza3NDb250YWluZXIuYXBwZW5kKHRhc2tOYXYocHJvamVjdCkpO1xuXG4gIHJldHVybiB3cmFwZXI7XG59O1xuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0X3RpdGxlJyk7XG4gIGNvbnN0IHRpdGxlID0gaW5wdXQudmFsdWU7XG4gIHByb2plY3RzQ291bnRlciArPSAxO1xuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUsIHByb2plY3RzQ291bnRlcik7XG4gIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY291bnRQcm9qZWN0cycsIHByb2plY3RzQ291bnRlcik7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0c0xpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0xpc3QpKTtcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJzJyk7XG4gIHRhYnMuYXBwZW5kKGRpc3BsYXlQcm9qZWN0KHByb2plY3QpKTtcbiAgY29uc3QgYWN0UHJvamVjdFNob3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjcHJval8ke3Byb2plY3QuaWR9YCk7XG4gIGNvbnN0IHNob3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNob3duJyk7XG4gIGlmIChzaG93biAhPT0gbnVsbCkge1xuICAgIHNob3duLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3duJyk7XG4gIH1cbiAgYWN0UHJvamVjdFNob3cuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRfcHJvamVjdF9mb3JtJyk7XG4gIGZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xufTtcblxuZXhwb3J0IHsgYWRkUHJvamVjdCwgY2FuY2VsQWRkUHJvamVjdCwgZGlzcGxheVByb2plY3QgfTtcbiIsImltcG9ydCB7IGFkZFByb2plY3QsIGNhbmNlbEFkZFByb2plY3QsIGRpc3BsYXlQcm9qZWN0IH0gZnJvbSAnLi9saXN0bmVycyc7XG5pbXBvcnQgYWRkUHJvakljb24gZnJvbSAnLi9hZGQucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgKChwcm9qTGlzdCkgPT4ge1xuICBjb25zdCBkaXZOYXZXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdk5hdldyYXAuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0X25hdicpO1xuXG4gIGNvbnN0IGJyYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJyYW5kLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbG9nb19wcm9qZWN0Jyk7XG4gIGJyYW5kLnRleHRDb250ZW50ID0gJ015IFRvLWRvIExpc3QnO1xuXG4gIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkUHJvai5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZF9wcm9qZWN0Jyk7XG4gIGNvbnN0IGFkZFByb2plY3RJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICBhZGRQcm9qZWN0SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBhZGRQcm9qSWNvbik7XG4gIGFkZFByb2plY3RJbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZF9wcm9qX2ljb24nKTtcbiAgY29uc3QgYWRkUHJvalRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGFkZFByb2pUZXh0LnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgYWRkUHJvai5hcHBlbmQoYWRkUHJvalRleHQsIGFkZFByb2plY3RJbWFnZSk7XG4gIGFkZFByb2ouYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjYW5jZWxBZGRQcm9qZWN0KCkpO1xuXG4gIGNvbnN0IGFkZFByb2pGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFByb2pGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkX3Byb2plY3RfZm9ybScpO1xuICBhZGRQcm9qRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGNvbnN0IGFkZFByb2pUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgYWRkUHJvalRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgYWRkUHJvalRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0X3RpdGxlJyk7XG4gIGFkZFByb2pUaXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVHlwZSB5b3VyIHByb2plY3QgdGl0bGUgaGVyZSEnKTtcbiAgY29uc3QgYWRkUHJvamVjdEZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFkZFByb2plY3RGb3JtQnV0dG9ucy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZF9wcm9qZWN0X2Zvcm1fYnV0dG9ucycpO1xuXG4gIGNvbnN0IGFkZFByb2plY3RGb3JtQ3JlYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFByb2plY3RGb3JtQ3JlYXRlLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdF9idG4nKTtcbiAgYWRkUHJvamVjdEZvcm1DcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhZGRQcm9qZWN0KCkpO1xuICBhZGRQcm9qZWN0Rm9ybUNyZWF0ZS50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG5cbiAgY29uc3QgYWRkUHJvamVjdEZvcm1DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYWRkUHJvamVjdEZvcm1DYW5jZWwuY2xhc3NMaXN0LmFkZCgnY2FuY2VsX2J0bicpO1xuICBhZGRQcm9qZWN0Rm9ybUNhbmNlbC50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG4gIGFkZFByb2plY3RGb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2FuY2VsQWRkUHJvamVjdCgpKTtcblxuICBhZGRQcm9qZWN0Rm9ybUJ1dHRvbnMuYXBwZW5kKGFkZFByb2plY3RGb3JtQ3JlYXRlLCBhZGRQcm9qZWN0Rm9ybUNhbmNlbCk7XG4gIGFkZFByb2pGb3JtLmFwcGVuZChhZGRQcm9qVGl0bGVJbnB1dCwgYWRkUHJvamVjdEZvcm1CdXR0b25zKTtcblxuICBjb25zdCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRhYnNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICd0YWJzJyk7XG5cbiAgcHJvakxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIHRhYnNEaXYuYXBwZW5kKGRpc3BsYXlQcm9qZWN0KGVsZW1lbnQpKTtcbiAgICByZXR1cm4gdGFic0RpdjtcbiAgfSk7XG4gIGRpdk5hdldyYXAuYXBwZW5kKGJyYW5kLCBhZGRQcm9qLCBhZGRQcm9qRm9ybSwgdGFic0Rpdik7XG4gIHJldHVybiBkaXZOYXZXcmFwO1xufSkoKTsiLCIvKiBlc2xpbnQgbm8tdW5kZXJzY29yZS1kYW5nbGU6IFtcImVycm9yXCIsIHsgXCJhbGxvd0FmdGVyVGhpc1wiOiB0cnVlIH1dICovXG5cbmNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgaWQpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuX3Rhc2tzID0gW107XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl90YXNrQ291bnRlciA9IDA7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIGdldCB0YXNrQ291bnRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fdGFza0NvdW50ZXI7XG4gIH1cblxuICBzZXQgdGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICB9XG5cbiAgZ2V0IHRhc2tzKCkge1xuICAgIHJldHVybiB0aGlzLl90YXNrcztcbiAgfVxuXG4gIGFkZFRhc2sodGFzaykge1xuICAgIC8vIHNvcnQgdGFza3MgbGF0ZXJcbiAgICB0aGlzLl90YXNrcy5wdXNoKHRhc2spO1xuICAgIHRoaXMuX3Rhc2tDb3VudGVyICs9IDE7XG4gICAgLy8gdGFzay5pZCA9IHRoaXMuX3Rhc2tDb3VudGVyO1xuICB9XG5cbiAgcmVtb3ZlVGFzayhpZCkge1xuICAgIC8vIGZpbmQgaW5kZXggb2YgdGFzayBieSBpZFxuICAgIHRoaXMuX3Rhc2tzLnNwbGljZShpZCwgMSk7Ly8gaWQgPT09PiB0cmFuc2Zvcm1lciBlbiBpbmRleFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7IiwiLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dBZnRlclRoaXNcIjogdHJ1ZSB9XSAqL1xuY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSA9ICcyMDIwLTEyLTI0JywgcHJpb3JpdHksIHByb2pJZCwgaWQpIHtcbiAgICB0aGlzLl90aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5fZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5fcHJpb3JpdHkgPSBwcmlvcml0eTsgLy8gaGlnaHQgbWVkaXVtIGxvd1xuICAgIHRoaXMuX3N0YXR1cyA9ICdUby1kbyc7Ly8gXCJ0b2RvXCIgID09PT0+IFwicHJvZ3Jlc3NcIiA9PT0+IFwiZG9uZVwiXG4gICAgdGhpcy5fcHJvaklkID0gcHJvaklkO1xuICAgIHRoaXMuX2lkID0gaWQ7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgc2V0IHRpdGxlKHRpdGxlKSB7XG4gICAgdGhpcy5fdGl0bGUgPSB0aXRsZTtcbiAgfVxuXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gIH1cblxuICBnZXQgcHJvaklkKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9qSWQ7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgc2V0IGRlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIGdldCBkdWVEYXRlKCkge1xuICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICB9XG5cbiAgc2V0IGR1ZURhdGUoZHVlRGF0ZSkge1xuICAgIHRoaXMuX2R1ZURhdGUgPSBkdWVEYXRlO1xuICB9XG5cbiAgZ2V0IHByaW9yaXR5KCkge1xuICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgfVxuXG4gIHNldCBwcmlvcml0eShwcmlvcml0eSkge1xuICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIH1cblxuICBnZXQgc3RhdHVzKCkge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBzZXQgaWQodmFsKSB7XG4gICAgdGhpcy5faWQgPSB2YWw7XG4gIH1cblxuICBzZXQgc3RhdHVzKHN0YXR1cykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgfVxuXG4gIGZvcm1hdGVkRHVlRGF0ZSgpIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5fZHVlRGF0ZSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiLyogZXNsaW50IG5vLXVuZGVyc2NvcmUtZGFuZ2xlOiBbXCJlcnJvclwiLCB7IFwiYWxsb3dcIjogW1wiX3RpdGxlXCIsIFwiX3Rhc2tzXCIsIFwiX2lkXCIgLCBcIl90YXNrQ291bnRlclwiICxcbiBcIl9kZXNjcmlwdGlvblwiLCBcIl9kdWVEYXRlXCIgLCBcIl9zdGF0dXNcIiAsIFwiX3ByaW9yaXR5XCIgLCBcIl9wcm9qSWRcIl0gfV0gKi9cbmNvbnN0IFByb2plY3QgPSBpbXBvcnQoJy4vcHJvamVjdCcpO1xuY29uc3QgVGFzayA9IGltcG9ydCgnLi90YXNrJyk7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tzX2NvbnRhaW5lcicpO1xuXG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdNeSBQcm9qZWN0JywgMSk7XG5jb25zdCBkZWZhdWx0VGFzazEgPSBuZXcgVGFzaygnTXkgZmlyc3QgdGFzaycsICdUaGlzIGlzIG15IGZpcnN0IHRhc2snLCAnMjAyMC0xMi0yNCcsICdsb3cnLCAxLCAwKTtcbmNvbnN0IGRlZmF1bHRUYXNrMiA9IG5ldyBUYXNrKCdNeSBzZWNvbmQgdGFzaycsICdUaGlzIGlzIG15IHNlY29uZCB0YXNrJywgJzIwMjEtMTItMjYnLCAnbG93JywgMSwgMSk7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKGRlZmF1bHRUYXNrMSk7XG5kZWZhdWx0UHJvamVjdC5hZGRUYXNrKGRlZmF1bHRUYXNrMik7XG5cbmNvbnN0IHByb2plY3RzTGlzdFN0b3JlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0c0xpc3QnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzTGlzdCcpKSA6IFtkZWZhdWx0UHJvamVjdF07XG5jb25zdCBjb3VudFByb2plY3RzU3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdW50UHJvamVjdHMnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvdW50UHJvamVjdHMnKSkgOiAxO1xuXG5jb25zdCBmaW5kUHJvamVjdCA9IChhcnJheSwgaWQpID0+IHtcbiAgbGV0IG1pbiA9IDA7XG4gIGxldCBtYXggPSBhcnJheS5sZW5ndGggLSAxO1xuICBsZXQgaSA9IE1hdGguZmxvb3IoKG1pbiArIG1heCkgLyAyKTtcbiAgbGV0IGZvdW5kID0gZmFsc2U7XG4gIHdoaWxlIChtaW4gPD0gbWF4ICYmICFmb3VuZCkge1xuICAgIGZvdW5kID0gYXJyYXlbaV0uaWQgPT09IGlkO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGlmIChhcnJheVtpXS5pZCA+IGlkKSB7XG4gICAgICAgIG1heCA9IGkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluID0gaSArIDE7XG4gICAgICB9XG4gICAgICBpID0gTWF0aC5mbG9vcigobWluICsgbWF4KSAvIDIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaTtcbn07XG5cbmNvbnN0IGRlbGV0ZUZyb21Qcm9qZWN0TGlzdCA9IChwcm9qZWN0c0xpc3QsIGlkKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRQcm9qZWN0KHByb2plY3RzTGlzdCwgaWQpO1xuICBwcm9qZWN0c0xpc3Quc3BsaWNlKHRhcmdldCwgMSk7XG59O1xuXG5jb25zdCBlZGl0UHJvamVjdFRpdGxlID0gKHByb2plY3RzTGlzdCwgaWQsIHZhbHVlKSA9PiB7XG4gIGNvbnN0IHRhcmdldCA9IGZpbmRQcm9qZWN0KHByb2plY3RzTGlzdCwgaWQpO1xuICBwcm9qZWN0c0xpc3RbdGFyZ2V0XS50aXRsZSA9IHZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHNMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNMaXN0KSk7XG59O1xuXG5jb25zdCBhZGRUYXNrVG9Qcm9qZWN0ID0gKGFycmF5LCBpZCwgdGFzaykgPT4ge1xuICBjb25zdCB0YXJnZXQgPSBmaW5kUHJvamVjdChhcnJheSwgaWQpO1xuICBjb25zdCBwcm9qZWN0ID0gYXJyYXlbdGFyZ2V0XTtcbiAgcHJvamVjdC5hZGRUYXNrKHRhc2spO1xufTtcblxuY29uc3QgcGFyc2VKc29uVG9UYXNrID0gKG9iakpzb24pID0+IHtcbiAgY29uc3QgdGl0bGUgPSBvYmpKc29uLl90aXRsZTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBvYmpKc29uLl9kZXNjcmlwdGlvbjtcbiAgY29uc3QgZHVlRGF0ZSA9IG9iakpzb24uX2R1ZURhdGU7XG4gIGNvbnN0IHByaW9yaXR5ID0gb2JqSnNvbi5fcHJpb3JpdHk7IC8vIGhpZ2h0IG1lZGl1bSBsb3dcbiAgY29uc3Qgc3RhdHVzID0gb2JqSnNvbi5fc3RhdHVzOy8vIFwidG9kb1wiICA9PT09PiBcInByb2dyZXNzXCIgPT09PiBcImRvbmVcIlxuICBjb25zdCBwcm9qSWQgPSBvYmpKc29uLl9wcm9qSWQ7XG4gIGNvbnN0IGlkID0gb2JqSnNvbi5faWQ7XG5cbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2pJZCwgaWQpO1xuICB0YXNrLnN0YXR1cyA9IHN0YXR1cztcblxuICByZXR1cm4gdGFzaztcbn07XG5cbmNvbnN0IHJlYWRQcm9qZWN0RnJvbVN0b3JhZ2UgPSAob2JqSnNvbikgPT4ge1xuICBjb25zdCB0aXRsZSA9IG9iakpzb24uX3RpdGxlO1xuICBjb25zdCBpZCA9IG9iakpzb24uX2lkO1xuICBjb25zdCB0YXNrcyA9IG9iakpzb24uX3Rhc2tzO1xuXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSwgaWQpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBwYXJzZWRUYXNrID0gcGFyc2VKc29uVG9UYXNrKHRhc2tzW2ldKTtcbiAgICBwYXJzZWRUYXNrLmlkID0gaTtcbiAgICBwcm9qZWN0LmFkZFRhc2socGFyc2VkVGFzayk7XG4gIH1cblxuICByZXR1cm4gcHJvamVjdDtcbn07XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IHByb2plY3RzTGlzdFN0b3JlZC5tYXAoKGVsZW0pID0+IHJlYWRQcm9qZWN0RnJvbVN0b3JhZ2UoZWxlbSkpO1xuY29uc3QgY291bnRQcm9qZWN0cyA9IHBhcnNlSW50KGNvdW50UHJvamVjdHNTdG9yZWQsIDEwKTtcblxuZXhwb3J0IHtcbiAgcHJvamVjdHNMaXN0LCBjb3VudFByb2plY3RzLCBkZWxldGVGcm9tUHJvamVjdExpc3QsXG4gIGVkaXRQcm9qZWN0VGl0bGUsIHRhc2tzQ29udGFpbmVyLCBhZGRUYXNrVG9Qcm9qZWN0LCBmaW5kUHJvamVjdCxcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHByb2plY3RzTGlzdCwgdGFza3NDb250YWluZXIgfSBmcm9tICcuL3ZhcmlhYmxlcyc7XG5pbXBvcnQgbmF2QmFyIGZyb20gJy4vbmF2QmFyJztcblxuY29uc3QgZ2xvYmFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuZ2xvYmFsQ29udGFpbmVyLmFwcGVuZChuYXZCYXIocHJvamVjdHNMaXN0KSwgdGFza3NDb250YWluZXIpO1xuaWYgKHByb2plY3RzTGlzdC5sZW5ndGggPiAwKSB7XG4gIGNvbnN0IGRlZmF1bHRTaG93blRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qXyR7cHJvamVjdHNMaXN0WzBdLmlkfWApO1xuICBkZWZhdWx0U2hvd25UYWIuY2xhc3NMaXN0LmFkZCgnc2hvd24nKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=