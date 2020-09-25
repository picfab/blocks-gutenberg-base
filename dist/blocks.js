/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block/block.js":
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ \"./src/block/editor.scss\");\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/block/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * BLOCK: capitainewp\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n//  Import CSS.\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('creacloud/block-creacloud', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('creacloud - block de base'),\n  // Block title.\n  icon: 'shield',\n  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common',\n  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('creacloud - block de base')],\n\n  /**\n   * The edit function describes the structure of your block in the context of the editor.\n   * This represents what the editor will render when the block is used.\n   *\n   * The \"edit\" property must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Component.\n   */\n  edit: function edit(props) {\n    // Creates a <p class='wp-block-cgb-block-capitainewp'></p>.\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: props.className\n    }, /*#__PURE__*/React.createElement(\"p\", null, \"\\u2014 Hello from the backend.\"), /*#__PURE__*/React.createElement(\"p\", null, \"CGB BLOCK: \", /*#__PURE__*/React.createElement(\"code\", null, \"capitainewp\"), \" is a new Gutenberg block\"), /*#__PURE__*/React.createElement(\"p\", null, \"It was created via\", ' ', /*#__PURE__*/React.createElement(\"code\", null, /*#__PURE__*/React.createElement(\"a\", {\n      href: \"https://github.com/ahmadawais/create-guten-block\"\n    }, \"create-guten-block\")), \".\"));\n  },\n\n  /**\n   * The save function defines the way in which the different attributes should be combined\n   * into the final markup, which is then serialized by Gutenberg into post_content.\n   *\n   * The \"save\" property must be specified and must be a valid function.\n   *\n   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n   *\n   * @param {Object} props Props.\n   * @returns {Mixed} JSX Frontend HTML.\n   */\n  save: function save(props) {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: props.className\n    }, /*#__PURE__*/React.createElement(\"p\", null, \"\\u2014 Hello from the frontend.\"), /*#__PURE__*/React.createElement(\"p\", null, \"CGB BLOCK: \", /*#__PURE__*/React.createElement(\"code\", null, \"capitainewp\"), \" is a new Gutenberg block.\"), /*#__PURE__*/React.createElement(\"p\", null, \"It was created via\", ' ', /*#__PURE__*/React.createElement(\"code\", null, /*#__PURE__*/React.createElement(\"a\", {\n      href: \"https://github.com/ahmadawais/create-guten-block\"\n    }, \"create-guten-block\")), \".\"));\n  }\n});\n\n//# sourceURL=webpack:///./src/block/block.js?");

/***/ }),

/***/ "./src/block/editor.scss":
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blocks.editor.css\";\n\n//# sourceURL=webpack:///./src/block/editor.scss?");

/***/ }),

/***/ "./src/block/style.scss":
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"blocks.style.css\";\n\n//# sourceURL=webpack:///./src/block/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _block_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/block.js */ \"./src/block/block.js\");\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });