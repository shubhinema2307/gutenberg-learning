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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return save; });
var Flip = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "repeat-alt", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "class": "svg-inline--fa fa-repeat-alt fa-w-16" },
    wp.element.createElement("path", { fill: "currentColor", d: "M481.162 164.326c19.478 25.678 30.997 57.709 30.836 92.388C511.61 340.638 442.361 408 358.436 408H176v64c-.001 10.683-12.949 16.021-20.485 8.485l-88-87.995c-4.686-4.686-4.687-12.284 0-16.971l88-88.005c7.58-7.58 20.485-2.14 20.485 8.485v64h182.668C415.933 360 464.06 313.154 464 255.889c-.023-22.372-7.149-43.111-19.237-60.082-3.431-4.817-2.962-11.387 1.223-15.564 8.269-8.255 13.592-13.545 17.137-17.104 5.131-5.152 13.645-4.605 18.039 1.187zM48 256.111C47.94 198.846 96.067 152 153.332 152H336v64c0 10.625 12.905 16.066 20.485 8.485l88-88.005c4.687-4.686 4.686-12.285 0-16.971l-88-87.995C348.949 23.979 336.001 29.317 336 40v64H153.564C69.639 104 .389 171.362.002 255.286c-.16 34.679 11.358 66.71 30.836 92.388 4.394 5.792 12.908 6.339 18.039 1.188 3.545-3.559 8.867-8.849 17.137-17.105 4.185-4.178 4.653-10.748 1.223-15.564-12.088-16.971-19.213-37.71-19.237-60.082z", "class": "" })
);

var Edit = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "edit", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 576 512", "class": "svg-inline--fa fa-edit fa-w-18" },
    wp.element.createElement("path", { fill: "currentColor", d: "M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z", "class": "" })
);

var Remove = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "times-circle", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "class": "svg-inline--fa fa-times-circle fa-w-16" },
    wp.element.createElement("path", { fill: "currentColor", d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z", "class": "" })
);

var plus = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "plus-circle", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "class": "svg-inline--fa fa-plus-circle fa-w-16" },
    wp.element.createElement("path", { fill: "currentColor", d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z", "class": "" })
);

var right = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "arrow-alt-circle-right", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "class": "svg-inline--fa fa-arrow-alt-circle-right fa-w-16" },
    wp.element.createElement("path", { fill: "currentColor", d: "M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z", "class": "" })
);

var left = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "arrow-alt-circle-left", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "class": "svg-inline--fa fa-arrow-alt-circle-left fa-w-16" },
    wp.element.createElement("path", { fill: "currentColor", d: "M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm116-292H256v-70.9c0-10.7-13-16.1-20.5-8.5L121.2 247.5c-4.7 4.7-4.7 12.2 0 16.9l114.3 114.9c7.6 7.6 20.5 2.2 20.5-8.5V300h116c6.6 0 12-5.4 12-12v-64c0-6.6-5.4-12-12-12z", "class": "" })
);

var remove = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "minus-circle", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "class": "svg-inline--fa fa-minus-circle fa-w-16" },
    wp.element.createElement("path", { fill: "currentColor", d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z", "class": "" })
);

var Top = wp.element.createElement(
    "svg",
    { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true", focusable: "false" },
    wp.element.createElement("path", { d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z" })
);

var Center = wp.element.createElement(
    "svg",
    { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true", focusable: "false" },
    wp.element.createElement("path", { d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z" })
);

var Bottom = wp.element.createElement(
    "svg",
    { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true", focusable: "false" },
    wp.element.createElement("path", { d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z" })
);

var save = wp.element.createElement(
    "svg",
    { "aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "check-square", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", "class": "svg-inline--fa fa-check-square fa-w-14" },
    wp.element.createElement("path", { fill: "currentColor", d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z", "class": "" })
);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_container_block_block__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_button_block_block__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_banner_block_block__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_about_block_block__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_services_block_block__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__block_features_block_block__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__block_slider_block_block__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__block_slider_block_v2_block__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__block_dynamic_post_block_block__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__block_dynamic_post_block_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__block_dynamic_post_block_block__);










/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/**
 *  BLOCK: container
 *  ---
 * 
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;




registerBlockType('wp-learning/container-block', {
    title: __('Container'),
    icon: 'format-aside',
    category: 'my-custom-block',
    keywords: [__('container'), __('section')],
    supports: {
        align: ['full']
    },
    attributes: {
        columns: {
            type: 'number',
            default: 1
        }
    },
    edit: function edit(props) {
        var attributes = props.attributes,
            setAttributes = props.setAttributes,
            clientId = props.clientId,
            className = props.className;
        var columns = attributes.columns;


        setAttributes({ blockId: clientId });

        var classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'has-' + columns + '-columns');

        return wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    PanelBody,
                    null,
                    wp.element.createElement(RangeControl, {
                        label: __('columns', 'wp-learning'),
                        value: columns,
                        onChange: function onChange(columns) {
                            return setAttributes({ columns: columns });
                        },
                        min: 1,
                        max: 6
                    })
                )
            ),
            wp.element.createElement(
                'div',
                { className: classes },
                wp.element.createElement(InnerBlocks, null)
            )
        );
    },

    save: function save(props) {
        var attributes = props.attributes,
            className = props.className;
        var columns = attributes.columns;


        var classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'has-' + columns + '-columns');

        return wp.element.createElement(
            'div',
            { className: classes },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  BLOCK: button
 *  ---
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    ColorPalette = _wp$blockEditor.ColorPalette,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentControl = _wp$blockEditor.AlignmentControl,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup;




var edit = function (_Component) {
    _inherits(edit, _Component);

    function edit() {
        _classCallCheck(this, edit);

        return _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).apply(this, arguments));
    }

    _createClass(edit, [{
        key: "updatePadding",
        value: function updatePadding(pos, newPadding) {
            var _props = this.props,
                attributes = _props.attributes,
                setAttributes = _props.setAttributes;
            var padding = attributes.padding;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedPadding = padding.map(function (val, index) {
                if (index === position[pos]) {
                    return newPadding;
                } else {
                    return val;
                }
            });
            setAttributes({ padding: updatedPadding });
        }
    }, {
        key: "updateMargin",
        value: function updateMargin(pos, newMargin) {
            var _props2 = this.props,
                attributes = _props2.attributes,
                setAttributes = _props2.setAttributes;
            var margin = attributes.margin;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedMargin = margin.map(function (val, index) {
                if (index === position[pos]) {
                    return newMargin;
                } else {
                    return val;
                }
            });
            setAttributes({ margin: updatedMargin });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                attributes = _props3.attributes,
                setAttributes = _props3.setAttributes,
                clientId = _props3.clientId,
                className = _props3.className;
            var blockId = attributes.blockId,
                buttonAlign = attributes.buttonAlign,
                buttonText = attributes.buttonText,
                fontSize = attributes.fontSize,
                fontFamily = attributes.fontFamily,
                fontWeight = attributes.fontWeight,
                textColor = attributes.textColor,
                bgColor = attributes.bgColor,
                hoverTxtColor = attributes.hoverTxtColor,
                hoverBgColor = attributes.hoverBgColor,
                borderWidth = attributes.borderWidth,
                borderStyle = attributes.borderStyle,
                borderColor = attributes.borderColor,
                borderRadius = attributes.borderRadius,
                padding = attributes.padding,
                margin = attributes.margin,
                buttonlink_url = attributes.buttonlink_url;


            setAttributes({ blockId: clientId });

            var onChangeTextColor = function onChangeTextColor(newTextColor) {
                setAttributes({ textColor: newTextColor });
            };

            var onChangeBgColor = function onChangeBgColor(newBgColor) {
                setAttributes({ bgColor: newBgColor });
            };

            var onChangeHvrtxtColor = function onChangeHvrtxtColor(newhvrTextColor) {
                setAttributes({ hoverTxtColor: newhvrTextColor });
            };

            var onChangeHvrBgColor = function onChangeHvrBgColor(newhvrBgColor) {
                setAttributes({ hoverBgColor: newhvrBgColor });
            };

            var classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, "wplearning-btn");

            return wp.element.createElement(
                "div",
                { className: classes },
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Typography", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: fontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                                onChange: function onChange(newval) {
                                    return setAttributes({ fontFamily: newval });
                                }
                            }),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Font Size", "wp-learning"),
                                        value: fontSize,
                                        onChange: function onChange(fontSize) {
                                            return setAttributes({ fontSize: fontSize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: fontWeight,
                                        options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }],
                                        onChange: function onChange(fontWeight) {
                                            setAttributes({ fontWeight: parseInt(fontWeight) });
                                        }
                                    })
                                )
                            )
                        )
                    ),
                    wp.element.createElement(PanelColorSettings, { title: __("Color Settings", "wp-learning"), initialOpen: false,
                        colorSettings: [{
                            value: textColor,
                            onChange: onChangeTextColor,
                            label: __("Text color", "wp-learning")
                        }, {
                            value: bgColor,
                            onChange: onChangeBgColor,
                            label: __("Background color", "wp-learning")
                        }, {
                            value: hoverTxtColor,
                            onChange: onChangeHvrtxtColor,
                            label: __("Text Hover color", "wp-learning")
                        }, {
                            value: hoverBgColor,
                            onChange: onChangeHvrBgColor,
                            label: __("Background Hover color", "wp-learning")
                        }]
                    }),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Border Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Border width (px)", "wp-learning"),
                                        value: borderWidth,
                                        onChange: function onChange(borderWidth) {
                                            return setAttributes({ borderWidth: borderWidth });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Border Radius (px)", "wp-learning"),
                                        value: borderRadius,
                                        onChange: function onChange(borderRadius) {
                                            setAttributes({
                                                borderRadius: borderRadius
                                            });
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(SelectControl, {
                            label: __("Border style", "wp-learning"),
                            value: borderStyle,
                            options: [{ label: "solid", value: "solid" }, { label: "double", value: "double" }, { label: "dotted", value: "dotted" }, { label: "dashed", value: "dashed" }],
                            onChange: function onChange(newval) {
                                return setAttributes({ borderStyle: newval });
                            }
                        }),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __('Border Color', 'wp-learning')
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: borderColor,
                                onChange: function onChange(borderColor) {
                                    setAttributes({
                                        borderColor: borderColor ? borderColor : "transparent"
                                    });
                                }
                            })
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Spacing", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __('Padding (px)', 'wp-learning')
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Top",
                                        min: 0,
                                        step: 1,
                                        value: padding[0] ? padding[0] : 0,
                                        onChange: function onChange(paddingTop) {
                                            _this2.updatePadding("top", parseInt(paddingTop));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Right",
                                        min: 0,
                                        step: 1,
                                        value: padding[1] ? padding[1] : 0,
                                        onChange: function onChange(paddingRight) {
                                            _this2.updatePadding("right", parseInt(paddingRight));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Bottom",
                                        min: 0,
                                        step: 1,
                                        value: padding[2] ? padding[2] : 0,
                                        onChange: function onChange(paddingBottom) {
                                            _this2.updatePadding("bottom", parseInt(paddingBottom));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Left",
                                        min: 0,
                                        step: 1,
                                        value: padding[3] ? padding[3] : 0,
                                        onChange: function onChange(paddingLeft) {
                                            _this2.updatePadding("left", parseInt(paddingLeft));
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __('Margin (px)', 'wp-learning')
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Top",
                                        min: 0,
                                        step: 1,
                                        value: margin[0] ? margin[0] : 0,
                                        onChange: function onChange(marginTop) {
                                            _this2.updateMargin("top", parseInt(marginTop));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Right",
                                        min: 0,
                                        step: 1,
                                        value: margin[1] ? margin[1] : 0,
                                        onChange: function onChange(marginRight) {
                                            _this2.updateMargin("right", parseInt(marginRight));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Bottom",
                                        min: 0,
                                        step: 1,
                                        value: margin[2] ? margin[2] : 0,
                                        onChange: function onChange(marginBottom) {
                                            _this2.updateMargin("bottom", parseInt(marginBottom));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Left",
                                        min: 0,
                                        step: 1,
                                        value: margin[3] ? margin[3] : 0,
                                        onChange: function onChange(marginLeft) {
                                            _this2.updateMargin("left", parseInt(marginLeft));
                                        }
                                    })
                                )
                            )
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Link settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(TextControl, {
                            label: __("Button link URL", "wp-learning"),
                            value: buttonlink_url,
                            onChange: function onChange(buttonlink_url) {
                                setAttributes({ buttonlink_url: buttonlink_url });
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    BlockControls,
                    null,
                    wp.element.createElement(
                        ToolbarGroup,
                        null,
                        wp.element.createElement(AlignmentControl, {
                            value: buttonAlign,
                            onChange: function onChange(buttonAlign) {
                                setAttributes({ buttonAlign: buttonAlign });
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    "div",
                    null,
                    wp.element.createElement(RichText, {
                        tagName: "a",
                        href: buttonlink_url,
                        onChange: function onChange(value) {
                            return setAttributes({ buttonText: value });
                        },
                        allowedFormats: ["core/bold", "core/italic"],
                        value: buttonText,
                        placeholder: __("Button Text...")
                    }),
                    wp.element.createElement(
                        "style",
                        null,
                        "\n                                #block-" + blockId + " {\n                                    width: 100%;\n                                    text-align: " + buttonAlign + ";\n                                    font-size:" + fontSize + "px;\n                                    font-family:" + fontFamily + ";\n                                    font-weight:" + fontWeight + ";\n                                }\n                                #block-" + blockId + " a { \n                                    color:" + textColor + ";\n                                    background-color:" + bgColor + ";\n                                    border:" + borderWidth + "px " + borderStyle + " " + borderColor + ";\n                                    border-radius: " + borderRadius + "px;\n                                    padding:" + padding[0] + "px " + padding[1] + "px " + padding[2] + "px " + padding[3] + "px;\n                                    margin:" + margin[0] + "px " + margin[1] + "px " + margin[2] + "px " + margin[3] + "px;\n                                }\n                                \n                                #block-" + blockId + " a:hover { \n                                    color:" + hoverTxtColor + ";\n                                    background-color:" + hoverBgColor + ";\n                                }\n                            "
                    )
                )
            );
        }
    }]);

    return edit;
}(Component);

registerBlockType("wp-learning/button-block", {
    title: __("button"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("button"), __("btn")],
    supports: {
        align: ["full"]
    },
    attributes: {
        blockId: {
            type: "string",
            default: ""
        },
        buttonAlign: {
            type: "string",
            default: "none"
        },
        buttonText: {
            type: "string",
            default: "button"
        },
        fontSize: {
            type: "string",
            default: 14
        },
        fontFamily: {
            type: "string",
            default: "Roboto"
        },
        fontWeight: {
            type: "number",
            default: 500
        },
        textColor: {
            type: "string",
            default: "#000000"
        },
        bgColor: {
            type: "string",
            default: "#ffffff"
        },
        hoverTxtColor: {
            type: "string",
            default: "#000000"
        },
        hoverBgColor: {
            type: "string",
            default: "#ffffff"
        },
        borderWidth: {
            type: "string",
            default: 0
        },
        borderStyle: {
            type: "string",
            default: "solid"
        },
        borderColor: {
            type: "string",
            default: "transparent"
        },
        borderRadius: {
            type: "string",
            default: 0
        },
        padding: {
            type: "array",
            default: [0, 0, 0, 0]
        },
        margin: {
            type: "array",
            default: [0, 0, 0, 0]
        },
        buttonlink_text: {
            selector: "a", // tag a
            source: "children" // children of a, to bind the link text
        },
        buttonlink_url: {
            selector: "a", // tag a
            source: "attribute", // attribute of the tag
            attribute: "href" // attribute href, to bind the href of the link
        }
    },
    edit: edit,
    save: function save(props) {
        var attributes = props.attributes,
            className = props.className;
        var blockId = attributes.blockId,
            buttonAlign = attributes.buttonAlign,
            buttonText = attributes.buttonText,
            fontSize = attributes.fontSize,
            fontFamily = attributes.fontFamily,
            fontWeight = attributes.fontWeight,
            textColor = attributes.textColor,
            bgColor = attributes.bgColor,
            hoverTxtColor = attributes.hoverTxtColor,
            hoverBgColor = attributes.hoverBgColor,
            borderWidth = attributes.borderWidth,
            borderStyle = attributes.borderStyle,
            borderColor = attributes.borderColor,
            borderRadius = attributes.borderRadius,
            padding = attributes.padding,
            margin = attributes.margin,
            buttonlink_url = attributes.buttonlink_url;


        var classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, "wplearning-btn");

        return wp.element.createElement(
            "div",
            { id: "wp-learning-" + blockId, className: classes },
            wp.element.createElement(
                "a",
                { href: buttonlink_url, className: "wp_learning_btn" },
                buttonText
            ),
            wp.element.createElement(
                "style",
                null,
                "\n                            #wp-learning-" + blockId + " .wp_learning_btn{ \n                                font-size:" + fontSize + "px;\n                                text-align: " + buttonAlign + ";\n                                font-family:" + fontFamily + ";\n                                font-weight:" + fontWeight + ";\n                                color:" + textColor + ";\n                                background-color:" + bgColor + ";\n                                border:" + borderWidth + "px " + borderStyle + " " + borderColor + ";\n                                border-radius: " + borderRadius + "px;\n                                padding:" + padding[0] + "px " + padding[1] + "px " + padding[2] + "px " + padding[3] + "px;\n                                margin:" + margin[0] + "px " + margin[1] + "px " + margin[2] + "px " + margin[3] + "px;\n                            }\n                            #wp-learning-" + blockId + " .wp_learning_btn:hover { \n                                color:" + hoverTxtColor + ";\n                                background-color:" + hoverBgColor + ";\n                            }\n                        "
            )
        );
    }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  BLOCK: banner
 *  ---
 *  
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentControl = _wp$blockEditor.AlignmentControl,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Button = _wp$components.Button,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl;




var edit = function (_Component) {
    _inherits(edit, _Component);

    function edit() {
        _classCallCheck(this, edit);

        return _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).apply(this, arguments));
    }

    _createClass(edit, [{
        key: 'updatePadding',
        value: function updatePadding(pos, newPadding) {
            var _props = this.props,
                attributes = _props.attributes,
                setAttributes = _props.setAttributes;
            var padding = attributes.padding;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedPadding = padding.map(function (val, index) {
                if (index === position[pos]) {
                    return newPadding;
                } else {
                    return val;
                }
            });
            setAttributes({ padding: updatedPadding });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                attributes = _props2.attributes,
                setAttributes = _props2.setAttributes,
                clientId = _props2.clientId,
                className = _props2.className;
            var blockId = attributes.blockId,
                mediaId = attributes.mediaId,
                mediaUrl = attributes.mediaUrl,
                padding = attributes.padding,
                banner_bg_size = attributes.banner_bg_size,
                banner_bg_repeat = attributes.banner_bg_repeat,
                contentAlign = attributes.contentAlign,
                BannerTitleColor = attributes.BannerTitleColor,
                BannerDescColor = attributes.BannerDescColor,
                bannerTitleFontsize = attributes.bannerTitleFontsize,
                bannerDescFontsize = attributes.bannerDescFontsize,
                bannerTitleFontWeight = attributes.bannerTitleFontWeight,
                bannerDescFontWeight = attributes.bannerDescFontWeight,
                titleFontFamily = attributes.titleFontFamily,
                descFontFamily = attributes.descFontFamily,
                bannerImgOverlay = attributes.bannerImgOverlay,
                imgOverlayDegree = attributes.imgOverlayDegree,
                imgOverlayTop_r = attributes.imgOverlayTop_r,
                imgOverlayTop_g = attributes.imgOverlayTop_g,
                imgOverlayTop_b = attributes.imgOverlayTop_b,
                imgOverlayTop_a = attributes.imgOverlayTop_a,
                imgOverlayBot_r = attributes.imgOverlayBot_r,
                imgOverlayBot_g = attributes.imgOverlayBot_g,
                imgOverlayBot_b = attributes.imgOverlayBot_b,
                imgOverlayBot_a = attributes.imgOverlayBot_a,
                BannerBgColor = attributes.BannerBgColor;


            setAttributes({ blockId: clientId });

            var classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'banner-content-block');

            var blockStyle = {
                background: bannerImgOverlay !== false ? 'linear-gradient(' + imgOverlayDegree + 'deg, rgba(' + imgOverlayBot_r + ',' + imgOverlayBot_g + ',' + imgOverlayBot_b + ',' + imgOverlayBot_a + '), rgba(' + imgOverlayTop_r + ',' + imgOverlayTop_g + ',' + imgOverlayTop_b + ',' + imgOverlayTop_a + ')), url("' + mediaUrl + '")' : 'url("' + mediaUrl + '")',
                'background-size': banner_bg_size,
                'background-repeat': banner_bg_repeat,
                'padding': padding[0] + 'px ' + padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px',
                'text-align': contentAlign
            };

            if (mediaUrl == '') {
                blockStyle.background = BannerBgColor;
                delete blockStyle["background-size"];
                delete blockStyle["background-repeat"];
            }

            // const blockStyle = {};
            // bannerImgOverlay && mediaUrl && (blockStyle.background = `linear-gradient(`+ imgOverlayDegree + `deg, rgba(`+ imgOverlayBot_r + `,` + imgOverlayBot_g + `,` + imgOverlayBot_b + `,` + imgOverlayBot_a + `), rgba(`+ imgOverlayTop_r + `,` + imgOverlayTop_g + `,` + imgOverlayTop_b + `,` + imgOverlayTop_a + `)), url("`+ mediaUrl +`")`);
            // !bannerImgOverlay && mediaUrl && (blockStyle.backgroundImage = `url("` + mediaUrl + `")`);
            // !mediaUrl && BannerBgColor && (blockStyle.backgroundColor = BannerBgColor);
            // mediaUrl && banner_bg_size && (blockStyle.backgroundSize = banner_bg_size);
            // mediaUrl && banner_bg_repeat && (blockStyle.backgroundRepeat = banner_bg_repeat);
            // padding && (blockStyle.padding = padding[0] + `px ` + padding[1] + `px ` + padding[2] + `px ` + padding[3] + `px`)
            // contentAlign && (blockStyle.textAlign = contentAlign);

            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Background Color", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            'div',
                            { className: 'row-panel image-overlay-setting' },
                            wp.element.createElement(
                                'label',
                                { className: 'row-panel-label' },
                                __('Background Color rgba:', 'wp-learning')
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: BannerBgColor,
                                onChange: function onChange(BannerBgColor) {
                                    setAttributes({
                                        BannerBgColor: BannerBgColor ? BannerBgColor : "#000000"
                                    });
                                }
                            })
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Background Image", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            'div',
                            { className: 'editor-post-featured-image' },
                            wp.element.createElement(
                                MediaUploadCheck,
                                null,
                                wp.element.createElement(MediaUpload, {
                                    onSelect: function onSelect(media) {
                                        setAttributes({
                                            mediaId: media.id,
                                            mediaUrl: media.url
                                        });
                                    },
                                    value: mediaId,
                                    allowedTypes: ['image'],
                                    render: function render(_ref) {
                                        var open = _ref.open;
                                        return wp.element.createElement(
                                            Button,
                                            {
                                                className: mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview',
                                                onClick: open
                                            },
                                            mediaId == 0 && __('Choose an image', 'wp-learning'),
                                            mediaId != 0 && wp.element.createElement(
                                                'p',
                                                null,
                                                wp.element.createElement('img', { src: mediaUrl })
                                            )
                                        );
                                    }
                                })
                            ),
                            wp.element.createElement(
                                'div',
                                { className: 'row row-panel' },
                                wp.element.createElement(
                                    'div',
                                    { className: 'col-50' },
                                    mediaId != 0 && wp.element.createElement(
                                        MediaUploadCheck,
                                        null,
                                        wp.element.createElement(MediaUpload, {
                                            title: __('Replace image', 'wp-learning'),
                                            value: mediaId,
                                            onSelect: function onSelect(media) {
                                                setAttributes({
                                                    mediaId: media.id,
                                                    mediaUrl: media.url
                                                });
                                            },
                                            allowedTypes: ['image'],
                                            render: function render(_ref2) {
                                                var open = _ref2.open;
                                                return wp.element.createElement(
                                                    Button,
                                                    { onClick: open, isSecondary: true, isLarge: true },
                                                    __('Replace image', 'wp-learning')
                                                );
                                            }
                                        })
                                    )
                                ),
                                wp.element.createElement(
                                    'div',
                                    { className: 'col-50' },
                                    mediaId != 0 && wp.element.createElement(
                                        MediaUploadCheck,
                                        null,
                                        wp.element.createElement(
                                            Button,
                                            {
                                                onClick: function onClick() {
                                                    setAttributes({
                                                        mediaId: 0,
                                                        mediaUrl: ''
                                                    });
                                                }, isLink: true, isDestructive: true },
                                            __('Remove image', 'wp-learning')
                                        )
                                    )
                                )
                            )
                        ),
                        mediaId !== 0 && wp.element.createElement(
                            'div',
                            { className: 'row-panel' },
                            wp.element.createElement(ToggleControl, {
                                label: 'Image Overlay?',
                                help: bannerImgOverlay ? "Yes" : "No",
                                checked: bannerImgOverlay,
                                onChange: function onChange() {
                                    return setAttributes({ bannerImgOverlay: !bannerImgOverlay });
                                }
                            }),
                            bannerImgOverlay !== false && wp.element.createElement(
                                'div',
                                null,
                                wp.element.createElement(
                                    'div',
                                    { className: 'row' },
                                    wp.element.createElement(
                                        'label',
                                        null,
                                        __('Overlay Degree', 'wp-learning')
                                    ),
                                    wp.element.createElement(TextControl, {
                                        value: imgOverlayDegree,
                                        onChange: function onChange(imgOverlayDegree) {
                                            setAttributes({
                                                imgOverlayDegree: parseInt(imgOverlayDegree)
                                            });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    'div',
                                    { className: 'row-panel image-overlay-setting' },
                                    wp.element.createElement(
                                        'label',
                                        { className: 'row-panel-label' },
                                        __('rgba Top:', 'wp-learning')
                                    ),
                                    wp.element.createElement(
                                        'div',
                                        { className: 'row' },
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(TextControl, {
                                                value: imgOverlayTop_r,
                                                onChange: function onChange(newval) {
                                                    setAttributes({
                                                        imgOverlayTop_r: parseInt(newval)
                                                    });
                                                }
                                            })
                                        ),
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(TextControl, {
                                                value: imgOverlayTop_g,
                                                onChange: function onChange(imgOverlayTop_g) {
                                                    setAttributes({
                                                        imgOverlayTop_g: parseInt(imgOverlayTop_g)
                                                    });
                                                }
                                            })
                                        ),
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(TextControl, {
                                                value: imgOverlayTop_b,
                                                onChange: function onChange(imgOverlayTop_b) {
                                                    setAttributes({
                                                        imgOverlayTop_b: parseInt(imgOverlayTop_b)
                                                    });
                                                }
                                            })
                                        ),
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(RangeControl, {
                                                value: imgOverlayTop_a,
                                                onChange: function onChange(imgOverlayTop_a) {
                                                    return setAttributes({ imgOverlayTop_a: imgOverlayTop_a });
                                                },
                                                min: 0.0,
                                                max: 1.0,
                                                step: 0.1
                                            })
                                        )
                                    )
                                ),
                                wp.element.createElement(
                                    'div',
                                    { className: 'row-panel image-overlay-setting' },
                                    wp.element.createElement(
                                        'label',
                                        { className: 'row-panel-label' },
                                        __('rgba Bottom:', 'wp-learning')
                                    ),
                                    wp.element.createElement(
                                        'div',
                                        { className: 'row' },
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(TextControl, {
                                                value: imgOverlayBot_r,
                                                onChange: function onChange(imgOverlayBot_r) {
                                                    setAttributes({
                                                        imgOverlayBot_r: parseInt(imgOverlayBot_r)
                                                    });
                                                }
                                            })
                                        ),
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(TextControl, {
                                                value: imgOverlayBot_g,
                                                onChange: function onChange(imgOverlayBot_g) {
                                                    setAttributes({
                                                        imgOverlayBot_g: parseInt(imgOverlayBot_g)
                                                    });
                                                }
                                            })
                                        ),
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(TextControl, {
                                                value: imgOverlayBot_b,
                                                onChange: function onChange(imgOverlayBot_b) {
                                                    setAttributes({
                                                        imgOverlayBot_b: parseInt(imgOverlayBot_b)
                                                    });
                                                }
                                            })
                                        ),
                                        wp.element.createElement(
                                            'div',
                                            { 'class': 'col-25' },
                                            wp.element.createElement(RangeControl, {
                                                value: imgOverlayBot_a,
                                                onChange: function onChange(imgOverlayBot_a) {
                                                    return setAttributes({ imgOverlayBot_a: imgOverlayBot_a });
                                                },
                                                min: 0.0,
                                                max: 1.0,
                                                step: 0.1
                                            })
                                        )
                                    )
                                )
                            )
                        ),
                        wp.element.createElement(
                            'div',
                            { className: 'row-panel' },
                            wp.element.createElement(SelectControl, {
                                label: __("Background Size", "wp-learning"),
                                value: banner_bg_size,
                                options: [{ label: "auto", value: "auto" }, { label: "cover", value: "cover" }, { label: "contain", value: "contain" }],
                                onChange: function onChange(newval) {
                                    return setAttributes({ banner_bg_size: newval });
                                }
                            })
                        ),
                        wp.element.createElement(
                            'div',
                            { className: 'row-panel' },
                            wp.element.createElement(SelectControl, {
                                label: __("Background Repeat", "wp-learning"),
                                value: banner_bg_repeat,
                                options: [{ label: "repeat", value: "repeat" }, { label: "repeat-x", value: "repeat-x" }, { label: "repeat-y", value: "repeat-y" }, { label: "no-repeat", value: "no-repeat" }],
                                onChange: function onChange(newval) {
                                    return setAttributes({ banner_bg_repeat: newval });
                                }
                            })
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Spacing", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            'div',
                            { className: 'row' },
                            wp.element.createElement(
                                'div',
                                { className: 'col-25' },
                                wp.element.createElement(TextControl, {
                                    type: 'number',
                                    label: 'Top',
                                    min: 0,
                                    step: 1,
                                    value: padding[0] ? padding[0] : 0,
                                    onChange: function onChange(paddingTop) {
                                        _this2.updatePadding("top", parseInt(paddingTop));
                                    }
                                })
                            ),
                            wp.element.createElement(
                                'div',
                                { className: 'col-25' },
                                wp.element.createElement(TextControl, {
                                    type: 'number',
                                    label: 'Right',
                                    min: 0,
                                    step: 1,
                                    value: padding[1] ? padding[1] : 0,
                                    onChange: function onChange(paddingRight) {
                                        _this2.updatePadding("right", parseInt(paddingRight));
                                    }
                                })
                            ),
                            wp.element.createElement(
                                'div',
                                { className: 'col-25' },
                                wp.element.createElement(TextControl, {
                                    type: 'number',
                                    label: 'Bottom',
                                    min: 0,
                                    step: 1,
                                    value: padding[2] ? padding[2] : 0,
                                    onChange: function onChange(paddingBottom) {
                                        _this2.updatePadding("bottom", parseInt(paddingBottom));
                                    }
                                })
                            ),
                            wp.element.createElement(
                                'div',
                                { className: 'col-25' },
                                wp.element.createElement(TextControl, {
                                    type: 'number',
                                    label: 'Left',
                                    min: 0,
                                    step: 1,
                                    value: padding[3] ? padding[3] : 0,
                                    onChange: function onChange(paddingLeft) {
                                        _this2.updatePadding("left", parseInt(paddingLeft));
                                    }
                                })
                            )
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Color Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            'div',
                            { className: 'row-panel' },
                            wp.element.createElement(
                                'label',
                                { className: 'row-panel-label' },
                                __('Title Text color', 'wp-learning')
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: BannerTitleColor,
                                onChange: function onChange(BannerTitleColor) {
                                    setAttributes({
                                        BannerTitleColor: BannerTitleColor ? BannerTitleColor : "#000000"
                                    });
                                }
                            })
                        ),
                        wp.element.createElement(
                            'div',
                            { className: 'row-panel' },
                            wp.element.createElement(
                                'label',
                                { className: 'row-panel-label' },
                                __('Description Text color', 'wp-learning')
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: BannerDescColor,
                                onChange: function onChange(BannerDescColor) {
                                    setAttributes({
                                        BannerDescColor: BannerDescColor ? BannerDescColor : "#000000"
                                    });
                                }
                            })
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Typography Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            'div',
                            { className: 'row-panel' },
                            wp.element.createElement(
                                'label',
                                { className: 'row-panel-label' },
                                __('Title Settings', 'wp-learning')
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: titleFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                                onChange: function onChange(titleFontFamily) {
                                    return setAttributes({ titleFontFamily: titleFontFamily });
                                }
                            }),
                            wp.element.createElement(
                                'div',
                                { className: 'row' },
                                wp.element.createElement(
                                    'div',
                                    { className: 'col-50' },
                                    wp.element.createElement(TextControl, {
                                        type: 'number',
                                        label: __("Font Size", "wp-learning"),
                                        value: bannerTitleFontsize,
                                        onChange: function onChange(bannerTitleFontsize) {
                                            return setAttributes({ bannerTitleFontsize: bannerTitleFontsize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    'div',
                                    { className: 'col-50' },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: bannerTitleFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(bannerTitleFontWeight) {
                                            return setAttributes({ bannerTitleFontWeight: bannerTitleFontWeight });
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(
                            'div',
                            { className: 'row-panel' },
                            wp.element.createElement(
                                'label',
                                { className: 'row-panel-label' },
                                __('Deescription Settings', 'wp-learning')
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: descFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                                onChange: function onChange(descFontFamily) {
                                    return setAttributes({ descFontFamily: descFontFamily });
                                }
                            }),
                            wp.element.createElement(
                                'div',
                                { className: 'row' },
                                wp.element.createElement(
                                    'div',
                                    { className: 'col-50' },
                                    wp.element.createElement(TextControl, {
                                        type: 'number',
                                        label: __("Font Size", "wp-learning"),
                                        value: bannerDescFontsize,
                                        onChange: function onChange(bannerDescFontsize) {
                                            return setAttributes({ bannerDescFontsize: bannerDescFontsize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    'div',
                                    { className: 'col-50' },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: bannerDescFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(bannerDescFontWeight) {
                                            return setAttributes({ bannerDescFontWeight: bannerDescFontWeight });
                                        }
                                    })
                                )
                            )
                        )
                    )
                ),
                wp.element.createElement(
                    BlockControls,
                    null,
                    wp.element.createElement(
                        ToolbarGroup,
                        null,
                        wp.element.createElement(AlignmentControl, {
                            value: contentAlign,
                            onChange: function onChange(contentAlign) {
                                setAttributes({ contentAlign: contentAlign });
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    'div',
                    { className: classes, style: blockStyle },
                    wp.element.createElement(
                        'div',
                        { className: 'content-block' },
                        wp.element.createElement(RichText, {
                            tagName: 'h1',
                            onChange: function onChange(value) {
                                return setAttributes({ banner_heading: value });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: attributes.banner_heading,
                            placeholder: __("Write your heading..."),
                            className: 'banner-heading'
                        }),
                        wp.element.createElement(RichText, {
                            tagName: 'p',
                            onChange: function onChange(value) {
                                return setAttributes({ banner_para: value });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: attributes.banner_para,
                            placeholder: __("Write your text..."),
                            className: 'banner-desc'
                        }),
                        wp.element.createElement(InnerBlocks, {
                            template: [['wp-learning/button-block']]
                        })
                    ),
                    wp.element.createElement(
                        'style',
                        null,
                        '\n                            #block-' + blockId + ' .banner-content-block h1{\n                                color: ' + BannerTitleColor + ';\n                                font-size: ' + bannerTitleFontsize + 'px;\n                                font-weight: ' + bannerTitleFontWeight + ';\n                                font-family: ' + titleFontFamily + ';\n                            }\n                            #block-' + blockId + ' .banner-content-block p{\n                                color: ' + BannerDescColor + ';\n                                font-size: ' + bannerDescFontsize + 'px;\n                                font-weight: ' + bannerDescFontWeight + ';\n                                font-family: ' + descFontFamily + ';\n                            }\n                            \n                        '
                    )
                )
            );
        }
    }]);

    return edit;
}(Component);

registerBlockType("wp-learning/banner-block", {
    title: __("banner"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("banner"), __("hero")],
    supports: {
        align: ['full']
    },
    attributes: {
        blockId: {
            type: "string",
            default: ""
        },
        mediaId: {
            type: "number",
            default: 0
        },
        mediaUrl: {
            type: "string",
            default: ''
        },
        banner_heading: {
            type: "string",
            default: ''
        },
        banner_para: {
            type: "string",
            default: ''
        },
        padding: {
            type: "array",
            default: [0, 0, 0, 0]
        },
        banner_bg_size: {
            type: "string",
            default: "auto"
        },
        banner_bg_repeat: {
            type: "string",
            default: "no-repeat"
        },
        contentAlign: {
            type: "string",
            default: "left"
        },
        BannerTitleColor: {
            type: "string",
            default: ''
        },
        BannerDescColor: {
            type: "string",
            default: ''
        },
        bannerTitleFontsize: {
            type: "string",
            default: 20
        },
        bannerDescFontsize: {
            type: "string",
            default: 16
        },
        bannerTitleFontWeight: {
            type: "string",
            default: 300
        },
        bannerDescFontWeight: {
            type: "string",
            default: 400
        },
        titleFontFamily: {
            type: "string",
            default: "Roboto"
        },
        descFontFamily: {
            type: "string",
            default: "Roboto"
        },
        bannerImgOverlay: {
            type: "boolean",
            default: false
        },
        imgOverlayDegree: {
            type: "number",
            default: 0
        },
        imgOverlayTop_r: {
            type: "number",
            default: 255
        },
        imgOverlayTop_g: {
            type: "number",
            default: 255
        },
        imgOverlayTop_b: {
            type: "number",
            default: 255
        },
        imgOverlayTop_a: {
            type: "number",
            default: 0.5
        },
        imgOverlayBot_r: {
            type: "number",
            default: 255
        },
        imgOverlayBot_g: {
            type: "number",
            default: 255
        },
        imgOverlayBot_b: {
            type: "number",
            default: 255
        },
        imgOverlayBot_a: {
            type: "number",
            default: 0.5
        },
        BannerBgColor: {
            type: "string",
            default: ''
        }
    },

    edit: edit,
    save: function save(props) {
        var attributes = props.attributes,
            className = props.className;
        var blockId = attributes.blockId,
            mediaUrl = attributes.mediaUrl,
            padding = attributes.padding,
            banner_bg_size = attributes.banner_bg_size,
            banner_bg_repeat = attributes.banner_bg_repeat,
            contentAlign = attributes.contentAlign,
            BannerTitleColor = attributes.BannerTitleColor,
            BannerDescColor = attributes.BannerDescColor,
            bannerTitleFontsize = attributes.bannerTitleFontsize,
            bannerDescFontsize = attributes.bannerDescFontsize,
            bannerTitleFontWeight = attributes.bannerTitleFontWeight,
            bannerDescFontWeight = attributes.bannerDescFontWeight,
            titleFontFamily = attributes.titleFontFamily,
            descFontFamily = attributes.descFontFamily,
            bannerImgOverlay = attributes.bannerImgOverlay,
            imgOverlayDegree = attributes.imgOverlayDegree,
            imgOverlayTop_r = attributes.imgOverlayTop_r,
            imgOverlayTop_g = attributes.imgOverlayTop_g,
            imgOverlayTop_b = attributes.imgOverlayTop_b,
            imgOverlayTop_a = attributes.imgOverlayTop_a,
            imgOverlayBot_r = attributes.imgOverlayBot_r,
            imgOverlayBot_g = attributes.imgOverlayBot_g,
            imgOverlayBot_b = attributes.imgOverlayBot_b,
            imgOverlayBot_a = attributes.imgOverlayBot_a,
            BannerBgColor = attributes.BannerBgColor;


        var blockStyle = {
            background: bannerImgOverlay !== false ? 'linear-gradient(' + imgOverlayDegree + 'deg, rgba(' + imgOverlayTop_r + ',' + imgOverlayTop_g + ',' + imgOverlayTop_b + ',' + imgOverlayTop_a + '), rgba(' + imgOverlayBot_r + ',' + imgOverlayBot_g + ',' + imgOverlayBot_b + ',' + imgOverlayBot_a + ')), url("' + mediaUrl + '")' : 'url("' + mediaUrl + '")',
            'background-size': banner_bg_size,
            'background-repeat': banner_bg_repeat,
            'padding': padding[0] + 'px ' + padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px',
            'text-align': contentAlign
        };

        if (mediaUrl == '') {
            blockStyle.background = BannerBgColor;
            delete blockStyle["background-size"];
            delete blockStyle["background-repeat"];
        }

        var classes = __WEBPACK_IMPORTED_MODULE_0_classnames___default()(className, 'banner-content-block');

        return wp.element.createElement(
            'div',
            { id: 'wp-learning-' + blockId, className: classes, style: blockStyle },
            wp.element.createElement(RichText.Content, {
                tagName: 'h1',
                value: attributes.banner_heading,
                placeholder: __("Write your heading..."),
                className: 'banner-heading'
            }),
            wp.element.createElement(RichText.Content, {
                tagName: 'p',
                value: attributes.banner_para,
                placeholder: __("Write your text..."),
                className: 'banner-para'
            }),
            wp.element.createElement(InnerBlocks.Content, {
                template: [['wp-learning/button-block']]
            }),
            wp.element.createElement(
                'style',
                null,
                '\n                        \n                        #wp-learning-' + blockId + ' h1{\n                            color: ' + BannerTitleColor + ';\n                            font-size: ' + bannerTitleFontsize + 'px;\n                            font-weight: ' + bannerTitleFontWeight + ';\n                            font-family: ' + titleFontFamily + ';\n                        }\n                        #wp-learning-' + blockId + ' p{\n                            color: ' + BannerDescColor + ';\n                            font-size: ' + bannerDescFontsize + 'px;\n                            font-weight: ' + bannerDescFontWeight + ';\n                            font-family: ' + descFontFamily + ';\n                        }\n                        \n                    '
            )
        );
    }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_icons__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  BLOCK: About
 *  ---
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    ColorPalette = _wp$blockEditor.ColorPalette,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentControl = _wp$blockEditor.AlignmentControl,
    RichText = _wp$blockEditor.RichText;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    Button = _wp$components.Button;






var edit = function (_Component) {
    _inherits(edit, _Component);

    function edit() {
        _classCallCheck(this, edit);

        return _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).apply(this, arguments));
    }

    _createClass(edit, [{
        key: "updatePadding",
        value: function updatePadding(pos, newPadding) {
            var _props = this.props,
                attributes = _props.attributes,
                setAttributes = _props.setAttributes;
            var padding = attributes.padding;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedPadding = padding.map(function (val, index) {
                if (index === position[pos]) {
                    return newPadding;
                } else {
                    return val;
                }
            });
            setAttributes({ padding: updatedPadding });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props2 = this.props,
                attributes = _props2.attributes,
                setAttributes = _props2.setAttributes,
                clientId = _props2.clientId,
                className = _props2.className;
            var blockId = attributes.blockId,
                contentVerticleAlign = attributes.contentVerticleAlign,
                mediaId = attributes.mediaId,
                mediaUrl = attributes.mediaUrl,
                about_title = attributes.about_title,
                about_para = attributes.about_para,
                opposite_column_order = attributes.opposite_column_order,
                padding = attributes.padding,
                titleColor = attributes.titleColor,
                descColor = attributes.descColor,
                titleFontSize = attributes.titleFontSize,
                descFontSize = attributes.descFontSize,
                titleFontWeight = attributes.titleFontWeight,
                descFontWeight = attributes.descFontWeight,
                titleFontFamily = attributes.titleFontFamily,
                descFontFamily = attributes.descFontFamily,
                contentHorizontalAlign = attributes.contentHorizontalAlign;


            setAttributes({ blockId: clientId });

            var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "row", opposite_column_order);

            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Content Alignment (Verticle)", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { "class": "verticle-align" },
                            wp.element.createElement(
                                "i",
                                {
                                    className: " " + ("flex-start" === contentVerticleAlign ? "active" : ""),
                                    onClick: function onClick() {
                                        return setAttributes({ contentVerticleAlign: "flex-start" });
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["f" /* Top */]
                            ),
                            wp.element.createElement(
                                "i",
                                {
                                    className: " " + ("center" === contentVerticleAlign ? "active" : ""),
                                    onClick: function onClick() {
                                        return setAttributes({ contentVerticleAlign: "center" });
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["b" /* Center */]
                            ),
                            wp.element.createElement(
                                "i",
                                {
                                    className: " " + ("flex-end" === contentVerticleAlign ? "active" : ""),
                                    onClick: function onClick() {
                                        return setAttributes({ contentVerticleAlign: "flex-end" });
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["a" /* Bottom */]
                            )
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Spacings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row" },
                            wp.element.createElement(
                                "div",
                                { className: "col-25" },
                                wp.element.createElement(TextControl, {
                                    type: "number",
                                    label: "Top",
                                    min: 0,
                                    step: 1,
                                    value: padding[0] ? padding[0] : 0,
                                    onChange: function onChange(paddingTop) {
                                        _this2.updatePadding("top", parseInt(paddingTop));
                                    }
                                })
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "col-25" },
                                wp.element.createElement(TextControl, {
                                    type: "number",
                                    label: "Right",
                                    min: 0,
                                    step: 1,
                                    value: padding[1] ? padding[1] : 0,
                                    onChange: function onChange(paddingRight) {
                                        _this2.updatePadding("right", parseInt(paddingRight));
                                    }
                                })
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "col-25" },
                                wp.element.createElement(TextControl, {
                                    type: "number",
                                    label: "Bottom",
                                    min: 0,
                                    step: 1,
                                    value: padding[2] ? padding[2] : 0,
                                    onChange: function onChange(paddingBottom) {
                                        _this2.updatePadding("bottom", parseInt(paddingBottom));
                                    }
                                })
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "col-25" },
                                wp.element.createElement(TextControl, {
                                    type: "number",
                                    label: "Left",
                                    min: 0,
                                    step: 1,
                                    value: padding[3] ? padding[3] : 0,
                                    onChange: function onChange(paddingLeft) {
                                        _this2.updatePadding("left", parseInt(paddingLeft));
                                    }
                                })
                            )
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Text Color Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Title Text color", "wp-learning")
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: titleColor,
                                onChange: function onChange(titleColor) {
                                    setAttributes({
                                        titleColor: titleColor ? titleColor : "#000000"
                                    });
                                }
                            }),
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Description Text color", "wp-learning")
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: descColor,
                                onChange: function onChange(descColor) {
                                    setAttributes({
                                        descColor: descColor ? descColor : "#000000"
                                    });
                                }
                            })
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Typography Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Title Settings:", "wp-learning")
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: titleFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                                onChange: function onChange(titleFontFamily) {
                                    return setAttributes({ titleFontFamily: titleFontFamily });
                                }
                            }),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Font Size", "wp-learning"),
                                        value: titleFontSize,
                                        onChange: function onChange(titleFontSize) {
                                            return setAttributes({ titleFontSize: titleFontSize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: titleFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(titleFontWeight) {
                                            return setAttributes({ titleFontWeight: titleFontWeight });
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Description settings", "wp-learning")
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: descFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                                onChange: function onChange(descFontFamily) {
                                    return setAttributes({ descFontFamily: descFontFamily });
                                }
                            }),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Font Size", "wp-learning"),
                                        value: descFontSize,
                                        onChange: function onChange(descFontSize) {
                                            return setAttributes({ descFontSize: descFontSize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: descFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(descFontWeight) {
                                            return setAttributes({ descFontWeight: descFontWeight });
                                        }
                                    })
                                )
                            )
                        )
                    )
                ),
                wp.element.createElement(
                    BlockControls,
                    null,
                    wp.element.createElement(AlignmentControl, {
                        value: contentHorizontalAlign,
                        onChange: function onChange(newalign) {
                            return setAttributes({ contentHorizontalAlign: newalign });
                        }
                    }),
                    wp.element.createElement(
                        ToolbarGroup,
                        null,
                        wp.element.createElement(Button, {
                            label: "flip Column",
                            icon: __WEBPACK_IMPORTED_MODULE_0__custom_icons__["d" /* Flip */],
                            className: "my-custom-button",
                            onClick: function onClick() {
                                return setAttributes({
                                    opposite_column_order: opposite_column_order !== "" ? "" : "opposite_column_order"
                                });
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    "div",
                    { className: classes },
                    wp.element.createElement(
                        "div",
                        { className: "col-50 media " },
                        mediaId == 0 && wp.element.createElement(MediaUpload, {
                            onSelect: function onSelect(media) {
                                setAttributes({
                                    mediaId: media.id,
                                    mediaUrl: media.url
                                });
                            },
                            value: mediaId,
                            allowedTypes: ["image"],
                            render: function render(_ref) {
                                var open = _ref.open;
                                return wp.element.createElement(
                                    Button,
                                    {
                                        className: "editor-post-featured-image__toggle",
                                        onClick: open
                                    },
                                    __("Upload Image", "wp-learning")
                                );
                            }
                        }),
                        mediaId !== 0 && wp.element.createElement(
                            "div",
                            { className: "about-img" },
                            wp.element.createElement("img", { src: mediaUrl }),
                            wp.element.createElement(
                                "div",
                                { className: "about-img-edit-section" },
                                wp.element.createElement(
                                    "div",
                                    { className: "image-edit" },
                                    wp.element.createElement(MediaUpload, {
                                        onSelect: function onSelect(media) {
                                            setAttributes({
                                                mediaId: media.id,
                                                mediaUrl: media.url
                                            });
                                        },
                                        value: mediaId,
                                        allowedTypes: ["image"],
                                        render: function render(_ref2) {
                                            var open = _ref2.open;
                                            return wp.element.createElement(
                                                Button,
                                                { onClick: open },
                                                __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["c" /* Edit */], "wp-learning")
                                            );
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "image-remove" },
                                    wp.element.createElement(
                                        MediaUploadCheck,
                                        null,
                                        wp.element.createElement(
                                            Button,
                                            {
                                                onClick: function onClick() {
                                                    setAttributes({
                                                        mediaId: 0,
                                                        mediaUrl: ""
                                                    });
                                                }
                                            },
                                            __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["e" /* Remove */], "wp-learning")
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "col-50 content" },
                        wp.element.createElement(RichText, {
                            tagName: "h2",
                            onChange: function onChange(value) {
                                return setAttributes({ about_title: value });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: about_title,
                            placeholder: __("Write your Title..."),
                            className: "about-heading"
                        }),
                        wp.element.createElement(RichText, {
                            tagName: "p",
                            onChange: function onChange(value) {
                                return setAttributes({ about_para: value });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: about_para,
                            placeholder: __("Write your text..."),
                            className: "about-desc"
                        })
                    ),
                    wp.element.createElement(
                        "style",
                        null,
                        "\n                            #block-" + blockId + " .wp-block-wp-learning-about-block{\n                                align-items: " + contentVerticleAlign + ";\n                            }\n                            #block-" + blockId + " .content{\n                                padding:" + padding[0] + "px " + padding[1] + "px " + padding[2] + "px " + padding[3] + "px;\n                                text-align: " + contentHorizontalAlign + ";\n                            }\n                            #block-" + blockId + " .content h2{\n                                color: " + titleColor + ";\n                                font-size: " + titleFontSize + "px;\n                                font-weight: " + titleFontWeight + ";\n                                font-family: " + titleFontFamily + ";\n                            }\n                            #block-" + blockId + " .content p{\n                                color: " + descColor + ";\n                                font-size: " + descFontSize + "px;\n                                font-weight: " + descFontWeight + ";\n                                font-family: " + descFontFamily + ";\n                            }\n                            \n                        "
                    )
                )
            );
        }
    }]);

    return edit;
}(Component);

registerBlockType("wp-learning/about-block", {
    title: __("About"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("about"), __("details")],
    supports: {
        align: ["full"]
    },
    attributes: {
        contentVerticleAlign: {
            type: "string",
            default: "center"
        },
        blockId: {
            type: "string",
            default: ""
        },
        mediaId: {
            type: "number",
            default: 0
        },
        mediaUrl: {
            type: "string",
            default: ""
        },
        opposite_column_order: {
            type: "string",
            default: ""
        },
        padding: {
            type: "array",
            default: [0, 0, 0, 0]
        },
        about_title: {
            type: "string",
            default: ""
        },
        about_para: {
            type: "string",
            default: ""
        },
        titleColor: {
            type: "string",
            default: ""
        },
        descColor: {
            type: "string",
            default: ""
        },
        titleFontSize: {
            type: "string",
            default: 20
        },
        descFontSize: {
            type: "string",
            default: 16
        },
        titleFontWeight: {
            type: "string",
            default: 400
        },
        descFontWeight: {
            type: "string",
            default: 400
        },
        titleFontFamily: {
            type: "string",
            default: "Roboto"
        },
        descFontFamily: {
            type: "string",
            default: "Roboto"
        },
        contentHorizontalAlign: {
            type: "string",
            default: ""
        }
    },
    edit: edit,
    save: function save(props) {
        var attributes = props.attributes,
            className = props.className;
        var contentVerticleAlign = attributes.contentVerticleAlign,
            mediaUrl = attributes.mediaUrl,
            about_title = attributes.about_title,
            about_para = attributes.about_para,
            opposite_column_order = attributes.opposite_column_order,
            padding = attributes.padding,
            titleColor = attributes.titleColor,
            descColor = attributes.descColor,
            titleFontSize = attributes.titleFontSize,
            descFontSize = attributes.descFontSize,
            titleFontWeight = attributes.titleFontWeight,
            descFontWeight = attributes.descFontWeight,
            titleFontFamily = attributes.titleFontFamily,
            descFontFamily = attributes.descFontFamily,
            contentHorizontalAlign = attributes.contentHorizontalAlign;


        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "row", opposite_column_order);

        return wp.element.createElement(
            "div",
            { className: classes },
            wp.element.createElement(
                "div",
                { className: "col-50 media" },
                wp.element.createElement("img", { src: mediaUrl })
            ),
            wp.element.createElement(
                "div",
                { className: "col-50 content" },
                wp.element.createElement(RichText.Content, {
                    tagName: "h2",
                    allowedFormats: ["core/bold", "core/italic"],
                    value: about_title,
                    placeholder: __("Write your Title..."),
                    className: "about-heading"
                }),
                wp.element.createElement(RichText.Content, {
                    tagName: "p",
                    allowedFormats: ["core/bold", "core/italic"],
                    value: about_para,
                    placeholder: __("Write your text..."),
                    className: "about-desc"
                })
            ),
            wp.element.createElement(
                "style",
                null,
                "\n                        .wp-block-wp-learning-about-block {\n                            align-items: " + contentVerticleAlign + ";\n                        }\n                        .wp-block-wp-learning-about-block .content {\n                            padding:" + padding[0] + "px " + padding[1] + "px " + padding[2] + "px " + padding[3] + "px;\n                            text-align: " + contentHorizontalAlign + ";\n                        }\n                        .wp-block-wp-learning-about-block .content h2{\n                            color: " + titleColor + ";\n                            font-size: " + titleFontSize + "px;\n                            font-weight: " + titleFontWeight + ";\n                            font-family: " + titleFontFamily + ";\n                        }\n                        .wp-block-wp-learning-about-block .content p{\n                            color: " + descColor + ";\n                            font-size: " + descFontSize + "px;\n                            font-weight: " + descFontWeight + ";\n                            font-family: " + descFontFamily + ";\n                        }\n                        \n                    "
            )
        );
    }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/**
 *  BLOCK: services
 *  ---
 *  
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;


var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl;


registerBlockType('wp-learning/service-block', {
    title: __('service'),
    icon: 'format-aside',
    category: 'my-custom-block',
    keywords: [__('service')],
    parent: ['wp-learning/services-block', 'wp-learning/container-block'],
    supports: {
        align: ['full']
    },
    attributes: {
        blockId: {
            type: "string",
            default: ""
        },
        service_mediaId: {
            type: 'number',
            default: 0
        },
        service_mediaUrl: {
            type: 'string',
            default: 'http://placehold.it/500'
        },
        service_mediaAlt: {
            type: 'string',
            default: 'image'
        },
        service_title: {
            type: 'string',
            default: ''
        },
        service_para: {
            type: 'string',
            default: ''
        }
    },
    edit: function edit(props) {
        var attributes = props.attributes,
            setAttributes = props.setAttributes,
            clientId = props.clientId,
            className = props.className;
        var service_title = attributes.service_title,
            service_para = attributes.service_para;


        setAttributes({ blockId: clientId });

        return wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0_classnames___default.a },
                wp.element.createElement(RichText, {
                    tagName: 'h4',
                    onChange: function onChange(value) {
                        return setAttributes({ service_title: value });
                    },
                    allowedFormats: ["core/bold", "core/italic"],
                    value: service_title,
                    placeholder: __("Write your Title..."),
                    className: 'service-title'
                }),
                wp.element.createElement(RichText, {
                    tagName: 'p',
                    onChange: function onChange(value) {
                        return setAttributes({ service_para: value });
                    },
                    allowedFormats: ["core/bold", "core/italic"],
                    value: service_para,
                    placeholder: __("Write your text..."),
                    className: 'service-para'
                })
            )
        );
    },
    save: function save(props) {
        var attributes = props.attributes,
            clientId = props.clientId;
        var service_title = attributes.service_title,
            service_para = attributes.service_para;


        return wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(
                'div',
                null,
                wp.element.createElement(RichText.Content, {
                    tagName: 'h4',
                    value: service_title,
                    className: ''
                }),
                wp.element.createElement(RichText.Content, {
                    tagName: 'p',
                    value: service_para,
                    className: ''
                })
            )
        );
    }
});

registerBlockType('wp-learning/services-block', {
    title: __('services'),
    icon: 'format-aside',
    category: 'my-custom-block',
    keywords: [__('services', 'service-parent')],
    // Enable or disable support for low-level features
    supports: {
        align: ['full']
    },
    // Set up data model for custom block
    attributes: {
        blockId: {
            type: "string",
            default: ""
        },
        columns: {
            type: 'number',
            default: 2
        }
    },

    edit: function edit(props) {
        var attributes = props.attributes,
            setAttributes = props.setAttributes,
            clientId = props.clientId,
            className = props.className;
        var columns = attributes.columns;


        var ALLOWED_BLOCKS = ['wp-learning/service-block', 'wp-learning/container-block'];

        return wp.element.createElement(
            Fragment,
            null,
            wp.element.createElement(
                InspectorControls,
                null,
                wp.element.createElement(
                    PanelBody,
                    null,
                    wp.element.createElement(RangeControl, {
                        label: __('columns', 'wp-learning'),
                        value: columns,
                        onChange: function onChange(columns) {
                            return setAttributes({ columns: columns });
                        },
                        min: 1,
                        max: 4
                    })
                )
            ),
            wp.element.createElement(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_0_classnames___default.a + ' has-' + columns + '-columns' },
                wp.element.createElement(InnerBlocks, {
                    allowedBlocks: ALLOWED_BLOCKS
                })
            )
        );
    },
    save: function save(props) {
        var attributes = props.attributes,
            clientId = props.clientId;
        var columns = attributes.columns;

        return wp.element.createElement(
            'div',
            { className: 'has-' + columns + '-columns' },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_icons__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  BLOCK: Feature
 *  ---
 *
 */

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentControl = _wp$blockEditor.AlignmentControl,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    RangeControl = _wp$components.RangeControl,
    Tooltip = _wp$components.Tooltip,
    ToggleControl = _wp$components.ToggleControl;





var edit = function (_Component) {
  _inherits(edit, _Component);

  function edit(props) {
    _classCallCheck(this, edit);

    var _this = _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).call(this, props));

    _this.addNewFeature = _this.addNewFeature.bind(_this);
    return _this;
  }

  _createClass(edit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          setAttributes = _props.setAttributes,
          attributes = _props.attributes;
      var featureContentArray = attributes.featureContentArray;

      if (featureContentArray == 0) {
        this.OnInitFeatures();
      }

      jQuery(document).on("focus", ".feature-btn>a", function (e) {
        e.preventDefault();
        jQuery(this).parents().children(".btn-Url-wrap").children(".btn-Url").css("display", "block");
      });

      jQuery(document).on("click", ".close-Url-popup", function (e) {
        e.preventDefault();
        jQuery(this).parents().children(".btn-Url-wrap").children(".btn-Url").css("display", "none");
      });
    }
  }, {
    key: "OnInitFeatures",
    value: function OnInitFeatures() {
      var _props2 = this.props,
          setAttributes = _props2.setAttributes,
          attributes = _props2.attributes;
      var featureContentArray = attributes.featureContentArray;


      setAttributes({
        featureContentArray: [].concat(_toConsumableArray(featureContentArray), [{
          index: 0,
          feature_title: "",
          feature_para: "",
          feature_mediaId: "",
          feature_mediaUrl: "",
          feature_btnUrl: "",
          feature_btnText: "",
          feature_btnTarget: ""
        }])
      });
    }
  }, {
    key: "addNewFeature",
    value: function addNewFeature() {
      var _props3 = this.props,
          setAttributes = _props3.setAttributes,
          attributes = _props3.attributes;
      var featureContentArray = attributes.featureContentArray;

      var objAddNewFeature = {
        index: featureContentArray.length,
        feature_title: "",
        feature_para: "",
        feature_mediaId: "",
        feature_mediaUrl: "",
        feature_btnUrl: "",
        feature_btnText: "",
        feature_btnTarget: ""
      };
      setAttributes({
        featureContentArray: [].concat(_toConsumableArray(featureContentArray), [objAddNewFeature])
      });
    }
  }, {
    key: "movefeature",
    value: function movefeature(oldIndex, newIndex) {
      var _props4 = this.props,
          attributes = _props4.attributes,
          setAttributes = _props4.setAttributes;
      var featureContentArray = attributes.featureContentArray;

      var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
      arrayCopy[oldIndex] = featureContentArray[newIndex];
      arrayCopy[newIndex] = featureContentArray[oldIndex];
      setAttributes({
        featureContentArray: arrayCopy
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props5 = this.props,
          attributes = _props5.attributes,
          setAttributes = _props5.setAttributes,
          clientId = _props5.clientId,
          className = _props5.className;
      var featureContentArray = attributes.featureContentArray,
          blockId = attributes.blockId,
          columns = attributes.columns,
          contentAlign = attributes.contentAlign,
          featureTitleColor = attributes.featureTitleColor,
          featureDescColor = attributes.featureDescColor,
          featureTitleFontsize = attributes.featureTitleFontsize,
          featureDescFontsize = attributes.featureDescFontsize,
          featureTitleFontWeight = attributes.featureTitleFontWeight,
          featureDescFontWeight = attributes.featureDescFontWeight,
          featureTitleFontFamily = attributes.featureTitleFontFamily,
          featureDescFontFamily = attributes.featureDescFontFamily;


      setAttributes({ blockId: clientId });

      var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "features-outer-block has-" + columns + "-columns");

      var blockStyle = { "text-align": contentAlign };

      var featureItrableContent = featureContentArray.map(function (data, index) {
        return wp.element.createElement(
          "div",
          { className: "feature-inner-block", style: blockStyle },
          wp.element.createElement(
            "div",
            { className: "move-item" },
            0 < index && wp.element.createElement(
              Tooltip,
              { text: __("Move to Left", "wp-learning") },
              wp.element.createElement(
                "i",
                { onClick: function onClick() {
                    return _this2.movefeature(index, index - 1);
                  } },
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["g" /* left */]
              )
            ),
            index + 1 < featureContentArray.length && wp.element.createElement(
              Tooltip,
              { text: __("Move to Right", "wp-learning") },
              wp.element.createElement(
                "i",
                { onClick: function onClick() {
                    return _this2.movefeature(index, index + 1);
                  } },
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["j" /* right */]
              )
            ),
            wp.element.createElement(
              Tooltip,
              { text: __("remove", "wp-learning") },
              wp.element.createElement(
                "i",
                {
                  onClick: function onClick() {
                    if (confirm("Delete Confirm!") == true) {
                      var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
                      arrayCopy.splice(index, 1);
                      setAttributes({ featureContentArray: arrayCopy });
                    }
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["i" /* remove */]
              )
            )
          ),
          wp.element.createElement(
            "div",
            { className: "feature-img" },
            !data.feature_mediaId && wp.element.createElement(MediaUpload, {
              onSelect: function onSelect(media) {
                var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
                arrayCopy[index].feature_mediaId = media.id;
                arrayCopy[index].feature_mediaUrl = media.url;
                setAttributes({
                  featureContentArray: arrayCopy
                });
              },
              value: data.feature_mediaId,
              allowedTypes: ["image"],
              render: function render(_ref) {
                var open = _ref.open;
                return wp.element.createElement(
                  "i",
                  {
                    className: "editor-post-featured-image__toggle",
                    onClick: open
                  },
                  __("Upload Image", "wp-learning")
                );
              }
            }),
            data.feature_mediaId !== 0 && wp.element.createElement(
              "div",
              { className: "" },
              wp.element.createElement("img", { src: data.feature_mediaUrl }),
              wp.element.createElement(
                "div",
                { className: "feature-img-edit-section" },
                wp.element.createElement(
                  "div",
                  { className: "image-edit" },
                  wp.element.createElement(MediaUpload, {
                    onSelect: function onSelect(media) {
                      var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
                      arrayCopy[index].feature_mediaId = media.id;
                      arrayCopy[index].feature_mediaUrl = media.url;
                      setAttributes({
                        featureContentArray: arrayCopy
                      });
                    },
                    value: data.feature_mediaId,
                    allowedTypes: ["image"],
                    render: function render(_ref2) {
                      var open = _ref2.open;
                      return wp.element.createElement(
                        "i",
                        { onClick: open },
                        __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["c" /* Edit */], "wp-learning")
                      );
                    }
                  })
                ),
                wp.element.createElement(
                  "div",
                  { className: "image-remove" },
                  wp.element.createElement(
                    MediaUploadCheck,
                    null,
                    wp.element.createElement(
                      "i",
                      {
                        onClick: function onClick() {
                          var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
                          arrayCopy[index].feature_mediaId = 0;
                          arrayCopy[index].feature_mediaUrl = "";
                          setAttributes({
                            featureContentArray: arrayCopy
                          });
                        }
                      },
                      __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["e" /* Remove */], "wp-learning")
                    )
                  )
                )
              )
            )
          ),
          wp.element.createElement(RichText, {
            tagName: "h1",
            onChange: function onChange(value) {
              var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
              arrayCopy[index].feature_title = value;
              setAttributes({ featureContentArray: arrayCopy });
            },
            allowedFormats: ["core/bold", "core/italic"],
            value: data.feature_title,
            placeholder: __("Heading..."),
            className: "feature-heading"
          }),
          wp.element.createElement(RichText, {
            tagName: "p",
            onChange: function onChange(value) {
              var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
              arrayCopy[index].feature_para = value;
              setAttributes({ featureContentArray: arrayCopy });
            },
            allowedFormats: ["core/bold", "core/italic"],
            value: data.feature_para,
            placeholder: __("Paragraph..."),
            className: "feature-desc"
          }),
          wp.element.createElement(
            "div",
            { className: "feature-btn" },
            wp.element.createElement(
              "div",
              { className: "btn-Url-wrap" },
              wp.element.createElement(
                "div",
                { className: "btn-Url" },
                wp.element.createElement(
                  "div",
                  { className: "close-Url-popup" },
                  wp.element.createElement(
                    "i",
                    null,
                    __WEBPACK_IMPORTED_MODULE_0__custom_icons__["e" /* Remove */]
                  )
                ),
                wp.element.createElement(TextControl, {
                  label: __("Button Url", "wp-learning"),
                  value: data.feature_btnUrl,
                  onChange: function onChange(value) {
                    var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
                    arrayCopy[index].feature_btnUrl = value;
                    setAttributes({ featureContentArray: arrayCopy });
                  }
                }),
                wp.element.createElement(ToggleControl, {
                  label: __("Open in new tab", "storyful"),
                  checked: data.feature_btnTarget,
                  onChange: function onChange(value) {
                    var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
                    arrayCopy[index].feature_btnTarget = value;
                    setAttributes({ featureContentArray: arrayCopy });
                  }
                })
              )
            ),
            wp.element.createElement(RichText, {
              tagName: "a",
              href: data.feature_btnUrl,
              target: data.feature_btnTarget ? "_blank" : "_self",
              onChange: function onChange(value) {
                var arrayCopy = [].concat(_toConsumableArray(featureContentArray));
                arrayCopy[index].feature_btnText = value;
                setAttributes({ featureContentArray: arrayCopy });
              },
              allowedFormats: ["core/bold", "core/italic"],
              value: data.feature_btnText,
              rel: "noopener noreferrer",
              placeholder: __("Button Text"),
              className: "feature-btn-txt"
            })
          )
        );
      });

      return wp.element.createElement(
        Fragment,
        null,
        wp.element.createElement(
          InspectorControls,
          null,
          wp.element.createElement(
            PanelBody,
            { title: __("Outer Feature block columns", "wp-learning"), initialOpen: false },
            wp.element.createElement(RangeControl, {
              label: __("columns", "wp-learning"),
              value: columns,
              onChange: function onChange(columns) {
                return setAttributes({ columns: columns });
              },
              min: 1,
              max: 6
            })
          ),
          wp.element.createElement(
            PanelBody,
            { title: __("Text Color Settings", "wp-learning"), initialOpen: false },
            wp.element.createElement(
              "div",
              { className: "row-panel" },
              wp.element.createElement(
                "label",
                { className: "row-panel-label" },
                __("Title Text color", "wp-learning")
              ),
              wp.element.createElement(ColorPalette, {
                value: featureTitleColor,
                onChange: function onChange(featureTitleColor) {
                  setAttributes({
                    featureTitleColor: featureTitleColor ? featureTitleColor : "#000000"
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "row-panel" },
              wp.element.createElement(
                "label",
                { className: "row-panel-label" },
                __("Description Text color", "wp-learning")
              ),
              wp.element.createElement(ColorPalette, {
                value: featureDescColor,
                onChange: function onChange(featureDescColor) {
                  setAttributes({
                    featureDescColor: featureDescColor ? featureDescColor : "#000000"
                  });
                }
              })
            )
          ),
          wp.element.createElement(
            PanelBody,
            { title: __("Typography Settings", "wp-learning"), initialOpen: false },
            wp.element.createElement(
              "div",
              { className: "row-panel" },
              wp.element.createElement(
                "label",
                { className: "row-panel-label" },
                __("Title Settings:", "wp-learning")
              ),
              wp.element.createElement(SelectControl, {
                label: __("Font Family", "wp-learning"),
                value: featureTitleFontFamily,
                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                onChange: function onChange(newval) {
                  return setAttributes({ featureTitleFontFamily: newval });
                }
              }),
              wp.element.createElement(
                "div",
                { className: "row" },
                wp.element.createElement(
                  "div",
                  { className: "col-50" },
                  wp.element.createElement(TextControl, {
                    type: "number",
                    label: __("Font Size", "wp-learning"),
                    value: featureTitleFontsize,
                    onChange: function onChange(featureTitleFontsize) {
                      return setAttributes({ featureTitleFontsize: featureTitleFontsize });
                    }
                  })
                ),
                wp.element.createElement(
                  "div",
                  { className: "col-50" },
                  wp.element.createElement(SelectControl, {
                    label: __("Font Weight", "wp-learning"),
                    value: featureTitleFontWeight,
                    options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                    onChange: function onChange(featureTitleFontWeight) {
                      return setAttributes({ featureTitleFontWeight: featureTitleFontWeight });
                    }
                  })
                )
              )
            ),
            wp.element.createElement(
              "div",
              { className: "row-panel" },
              wp.element.createElement(
                "label",
                { className: "row-panel-label" },
                __("Description Settings:", "wp-learning")
              ),
              wp.element.createElement(SelectControl, {
                label: __("Font Family", "wp-learning"),
                value: featureDescFontFamily,
                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                onChange: function onChange(newval) {
                  return setAttributes({ featureDescFontFamily: newval });
                }
              }),
              wp.element.createElement(
                "div",
                { className: "row" },
                wp.element.createElement(
                  "div",
                  { className: "col-50" },
                  wp.element.createElement(TextControl, {
                    type: "number",
                    label: __("Font Size", "wp-learning"),
                    value: featureDescFontsize,
                    onChange: function onChange(featureDescFontsize) {
                      return setAttributes({ featureDescFontsize: featureDescFontsize });
                    }
                  })
                ),
                wp.element.createElement(
                  "div",
                  { className: "col-50" },
                  wp.element.createElement(SelectControl, {
                    label: __("Font Weight", "wp-learning"),
                    value: featureDescFontWeight,
                    options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                    onChange: function onChange(featureDescFontWeight) {
                      return setAttributes({ featureDescFontWeight: featureDescFontWeight });
                    }
                  })
                )
              )
            )
          )
        ),
        wp.element.createElement(
          BlockControls,
          null,
          wp.element.createElement(
            ToolbarGroup,
            null,
            wp.element.createElement(AlignmentControl, {
              value: contentAlign,
              onChange: function onChange(contentAlign) {
                setAttributes({ contentAlign: contentAlign });
              }
            })
          )
        ),
        wp.element.createElement(
          "div",
          { className: classes },
          featureItrableContent,
          wp.element.createElement(
            "p",
            { className: "add-feature-btn" },
            wp.element.createElement(
              Tooltip,
              { text: __("add new feature", "wp-learning") },
              wp.element.createElement(
                "i",
                {
                  onClick: function onClick() {
                    _this2.addNewFeature();
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["h" /* plus */]
              )
            )
          )
        ),
        wp.element.createElement(
          "style",
          null,
          "\n\t\t\t\t\t\t\n\t\t\t\t\t\t#block-" + blockId + " .feature-inner-block h1{\n\t\t\t\t\t\tcolor: " + featureTitleColor + ";\n\t\t\t\t\t\tfont-size: " + featureTitleFontsize + "px;\n\t\t\t\t\t\tfont-weight: " + featureTitleFontWeight + ";\n\t\t\t\t\t\t}\n\t\t\t\t\t\t#block-" + blockId + " .feature-inner-block p{\n\t\t\t\t\t\tcolor: " + featureDescColor + ";\n\t\t\t\t\t\tfont-size: " + featureDescFontsize + "px;\n\t\t\t\t\t\tfont-weight: " + featureDescFontWeight + ";\n\t\t\t\t\t\t}\n                    \n                  "
        )
      );
    }
  }]);

  return edit;
}(Component);

registerBlockType("wp-learning/features-block", {
  title: __("feature inner"),
  icon: "format-aside",
  category: "my-custom-block",
  keywords: [__("feature"), __("features")],
  supports: {
    align: ["full"]
  },
  attributes: {
    featureContentArray: {
      type: "array",
      default: []
    },
    blockId: {
      type: "string",
      default: ""
    },
    columns: {
      type: "number",
      default: 1
    },
    contentAlign: {
      type: "string",
      default: "left"
    },
    featureTitleColor: {
      type: "string",
      default: ""
    },
    featureDescColor: {
      type: "string",
      default: ""
    },
    featureTitleFontsize: {
      type: "string",
      default: 20
    },
    featureDescFontsize: {
      type: "string",
      default: 16
    },
    featureTitleFontWeight: {
      type: "string",
      default: 400
    },
    featureDescFontWeight: {
      type: "string",
      default: 400
    },
    featureTitleFontFamily: {
      type: "string",
      default: "Roboto"
    },
    featureDescFontFamily: {
      type: "string",
      default: "Roboto"
    }
  },

  edit: edit,

  save: function save(props) {
    var attributes = props.attributes,
        className = props.className;
    var blockId = attributes.blockId,
        featureContentArray = attributes.featureContentArray,
        columns = attributes.columns,
        contentAlign = attributes.contentAlign,
        featureTitleColor = attributes.featureTitleColor,
        featureDescColor = attributes.featureDescColor,
        featureTitleFontsize = attributes.featureTitleFontsize,
        featureDescFontsize = attributes.featureDescFontsize,
        featureTitleFontWeight = attributes.featureTitleFontWeight,
        featureDescFontWeight = attributes.featureDescFontWeight;


    var blockStyle = {
      "text-align": contentAlign
    };

    var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "features-outer-block has-" + columns + "-columns");

    return wp.element.createElement(
      "div",
      null,
      featureContentArray.length > 0 && wp.element.createElement(
        "div",
        { className: classes },
        featureContentArray.map(function (data, index) {
          return wp.element.createElement(
            "div",
            { id: "wp-learning-" + blockId, className: "feature-content-block", style: blockStyle },
            wp.element.createElement(
              "div",
              { className: "feature-img" },
              wp.element.createElement("img", { src: data.feature_mediaUrl })
            ),
            wp.element.createElement(RichText.Content, {
              tagName: "h1",
              value: data.feature_title,
              className: "feature-heading"
            }),
            wp.element.createElement(RichText.Content, {
              tagName: "p",
              value: data.feature_para,
              placeholder: __("Write your text..."),
              className: "feature-para"
            }),
            wp.element.createElement(RichText.Content, {
              tagName: "a",
              href: data.feature_btnUrl,
              target: data.feature_btnTarget ? "_blank" : "_self",
              value: data.feature_btnText,
              rel: "noopener noreferrer",
              placeholder: __("Button Text"),
              className: "feature-btn-txt"
            })
          );
        })
      ),
      wp.element.createElement(
        "style",
        null,
        "\n\t\t\t\t\t\t.features-outer-block h1{\n\t\t\t\t\t\t\tcolor: " + featureTitleColor + ";\n\t\t\t\t\t\t\tfont-size: " + featureTitleFontsize + "px;\n\t\t\t\t\t\t\tfont-weight: " + featureTitleFontWeight + ";\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.features-outer-block p{\n\t\t\t\t\t\tcolor: " + featureDescColor + ";\n\t\t\t\t\t\tfont-size: " + featureDescFontsize + "px;\n\t\t\t\t\t\tfont-weight: " + featureDescFontWeight + ";\n\t\t\t\t\t\t}\n\t\t\t\t\t"
      )
    ); //save return
  } //save
}); //registerblocktype

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_icons__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  BLOCK: Slider
 *  ---
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip,
    ToggleControl = _wp$components.ToggleControl;





var edit = function (_Component) {
    _inherits(edit, _Component);

    function edit(props) {
        _classCallCheck(this, edit);

        var _this = _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).call(this, props));

        _this.initSlider = _this.OnInitSlides.bind(_this);
        _this.addNewSlide = _this.addNewSlide.bind(_this);
        _this.state = {
            obj_SliderState: {}
        };
        return _this;
    }

    _createClass(edit, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _props = this.props,
                setAttributes = _props.setAttributes,
                attributes = _props.attributes;
            var slides_array = attributes.slides_array,
                slider_save = attributes.slider_save;


            if (slides_array.length > 0) {
                this.OnInitSlides();
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            var _props$attributes = this.props.attributes,
                slides_array = _props$attributes.slides_array,
                slide_mode = _props$attributes.slide_mode,
                slide_pager = _props$attributes.slide_pager,
                slide_controls = _props$attributes.slide_controls,
                slide_autoplay = _props$attributes.slide_autoplay,
                slide_infinite = _props$attributes.slide_infinite,
                slide_adaptiveHeight = _props$attributes.slide_adaptiveHeight,
                slide_speed = _props$attributes.slide_speed;
            var prev_slide_array = prevProps.attributes.slides_array;


            if (slides_array.length !== prev_slide_array.length) {
                if (prev_slide_array.length === 0) {
                    setTimeout(function () {
                        return _this2.OnInitSlides();
                    }, 10);
                } else {
                    setTimeout(function () {
                        return _this2.state.obj_SliderState.reloadSlider();
                    }, 10);
                    setTimeout(function () {
                        return _this2.state.obj_SliderState.goToSlide(slides_array.length - 1);
                    }, 10);
                }
            }
            if (slide_mode !== prevProps.attributes.slide_mode || slide_pager !== prevProps.attributes.slide_pager || slide_controls !== prevProps.attributes.slide_controls || slide_autoplay !== prevProps.attributes.slide_autoplay || slide_infinite !== prevProps.attributes.slide_infinite || slide_adaptiveHeight !== prevProps.attributes.slide_adaptiveHeight || slide_speed !== prevProps.attributes.slide_speed) {
                this.onUpdateSliderState();
            }
        }
    }, {
        key: "OnInitSlides",
        value: function OnInitSlides() {
            var _props2 = this.props,
                setAttributes = _props2.setAttributes,
                attributes = _props2.attributes;
            var slide_mode = attributes.slide_mode,
                slide_pager = attributes.slide_pager,
                slide_controls = attributes.slide_controls,
                slide_autoplay = attributes.slide_autoplay,
                slide_infinite = attributes.slide_infinite,
                slide_adaptiveHeight = attributes.slide_adaptiveHeight,
                slide_speed = attributes.slide_speed;

            var sliderObjMount = jQuery(".bx-slider-wrap").bxSlider({
                mode: slide_mode,
                pager: slide_pager,
                controls: slide_controls,
                auto: slide_autoplay,
                infiniteLoop: slide_infinite,
                adaptiveHeight: slide_adaptiveHeight,
                speed: slide_speed,
                touchEnabled: false
            });
            this.setState({ obj_SliderState: sliderObjMount });
        }
    }, {
        key: "onUpdateSliderState",
        value: function onUpdateSliderState() {
            var _props$attributes2 = this.props.attributes,
                slide_mode = _props$attributes2.slide_mode,
                slide_pager = _props$attributes2.slide_pager,
                slide_controls = _props$attributes2.slide_controls,
                slide_autoplay = _props$attributes2.slide_autoplay,
                slide_infinite = _props$attributes2.slide_infinite,
                slide_adaptiveHeight = _props$attributes2.slide_adaptiveHeight,
                slide_speed = _props$attributes2.slide_speed;

            this.state.obj_SliderState.reloadSlider({
                mode: slide_mode,
                pager: slide_pager,
                controls: slide_controls,
                auto: slide_autoplay,
                infiniteLoop: slide_infinite,
                adaptiveHeight: slide_adaptiveHeight,
                speed: slide_speed
            });
        }
    }, {
        key: "addNewSlide",
        value: function addNewSlide() {
            var _props3 = this.props,
                setAttributes = _props3.setAttributes,
                attributes = _props3.attributes;
            var slides_array = attributes.slides_array;

            var objAddNewSlide = {
                index: slides_array.length,
                slide_title: "",
                slide_desc: "",
                slide_bgImgID: "",
                slide_bgImgURL: "",
                slide_bgImgAlt: ""
            };
            setAttributes({
                slides_array: [].concat(_toConsumableArray(slides_array), [objAddNewSlide])
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props4 = this.props,
                attributes = _props4.attributes,
                setAttributes = _props4.setAttributes,
                clientId = _props4.clientId,
                className = _props4.className;
            var slides_array = attributes.slides_array,
                slide_mode = attributes.slide_mode,
                slide_pager = attributes.slide_pager,
                slide_controls = attributes.slide_controls,
                slide_autoplay = attributes.slide_autoplay,
                slide_infinite = attributes.slide_infinite,
                slide_adaptiveHeight = attributes.slide_adaptiveHeight,
                slide_speed = attributes.slide_speed,
                sliderTitleFontFamily = attributes.sliderTitleFontFamily,
                sliderTitleFontsize = attributes.sliderTitleFontsize,
                sliderTitleFontWeight = attributes.sliderTitleFontWeight,
                sliderDescFontFamily = attributes.sliderDescFontFamily,
                sliderDescFontsize = attributes.sliderDescFontsize,
                sliderDescFontWeight = attributes.sliderDescFontWeight;


            setAttributes({ blockId: clientId });

            var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "slider-wrap");

            var slides = slides_array.map(function (data, index) {
                return wp.element.createElement(
                    "div",
                    { className: "slide-inner" },
                    wp.element.createElement(
                        Tooltip,
                        { text: __("Remove Slide", "wp-learning") },
                        wp.element.createElement(
                            "div",
                            { className: "remove-slide" },
                            wp.element.createElement(
                                "i",
                                {
                                    onClick: function onClick() {
                                        if (confirm("Delete Confirm!") == true) {
                                            var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                            arrayCopy.splice(index, 1);
                                            setAttributes({ slides_array: arrayCopy });
                                        }
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["i" /* remove */]
                            )
                        )
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "slide-content" },
                        wp.element.createElement(RichText, {
                            tagName: "h2",
                            onChange: function onChange(value) {
                                var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                arrayCopy[index].slide_title = value;
                                setAttributes({ slides_array: arrayCopy });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: data.slide_title,
                            placeholder: __("Write your Title..."),
                            className: "slide-title"
                        }),
                        wp.element.createElement(RichText, {
                            tagName: "p",
                            onChange: function onChange(value) {
                                var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                arrayCopy[index].slide_desc = value;
                                setAttributes({ slides_array: arrayCopy });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: data.slide_para,
                            placeholder: __("Write your desc..."),
                            className: "slide-desc"
                        })
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "slide-img" },
                        !data.slide_bgImgID && wp.element.createElement(MediaUpload, {
                            onSelect: function onSelect(media) {
                                var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                arrayCopy[index].slide_bgImgID = media.id;
                                arrayCopy[index].slide_bgImgURL = media.url;
                                arrayCopy[index].slide_bgImgAlt = media.alt;
                                setAttributes({
                                    slides_array: arrayCopy
                                });
                            },
                            value: data.slide_bgImgID,
                            allowedTypes: ["image"],
                            render: function render(_ref) {
                                var open = _ref.open;
                                return wp.element.createElement(
                                    Button,
                                    {
                                        className: "editor-post-featured-image__toggle",
                                        onClick: open
                                    },
                                    __("Upload Image", "wp-learning")
                                );
                            }
                        }),
                        data.slide_bgImgID && wp.element.createElement("img", { src: data.slide_bgImgURL, alt: data.slide_bgImgAlt })
                    )
                );
            });

            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Slider Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(SelectControl, {
                            label: __("Mode", "storyful"),
                            value: slide_mode,
                            options: [{ label: __("Horizontal"), value: "horizontal" }, { label: __("Vertical"), value: "vertical" }, { label: __("Fade"), value: "fade" }],
                            onChange: function onChange(slide_mode) {
                                return setAttributes({ slide_mode: slide_mode });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Pager", "storyful"),
                            checked: slide_pager,
                            onChange: function onChange(slide_pager) {
                                return setAttributes({ slide_pager: slide_pager });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Controls", "storyful"),
                            checked: slide_controls,
                            onChange: function onChange(slide_controls) {
                                return setAttributes({ slide_controls: slide_controls });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Auto Play", "storyful"),
                            checked: slide_autoplay,
                            onChange: function onChange(slide_autoplay) {
                                return setAttributes({ slide_autoplay: slide_autoplay });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Infinite Loop", "storyful"),
                            checked: slide_infinite,
                            onChange: function onChange(slide_infinite) {
                                return setAttributes({ slide_infinite: slide_infinite });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Adaptive Height", "storyful"),
                            checked: slide_adaptiveHeight,
                            onChange: function onChange(slide_adaptiveHeight) {
                                return setAttributes({ slide_adaptiveHeight: slide_adaptiveHeight });
                            }
                        }),
                        wp.element.createElement(RangeControl, {
                            label: __("Speed"),
                            value: slide_speed,
                            min: 100,
                            max: 5000,
                            step: 10,
                            onChange: function onChange(slide_speed) {
                                return setAttributes({ slide_speed: slide_speed });
                            }
                        })
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Typography Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Title Settings:", "wp-learning")
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: sliderTitleFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }],
                                onChange: function onChange(newval) {
                                    return setAttributes({ sliderTitleFontFamily: newval });
                                }
                            }),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Font Size", "wp-learning"),
                                        value: sliderTitleFontsize,
                                        onChange: function onChange(sliderTitleFontsize) {
                                            return setAttributes({ sliderTitleFontsize: sliderTitleFontsize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: sliderTitleFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(sliderTitleFontWeight) {
                                            return setAttributes({ sliderTitleFontWeight: sliderTitleFontWeight });
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Description Settings:", "wp-learning")
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: sliderDescFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }],
                                onChange: function onChange(newval) {
                                    return setAttributes({ sliderDescFontFamily: newval });
                                }
                            }),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Font Size", "wp-learning"),
                                        value: sliderDescFontsize,
                                        onChange: function onChange(sliderDescFontsize) {
                                            return setAttributes({ sliderDescFontsize: sliderDescFontsize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: sliderDescFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(sliderDescFontWeight) {
                                            return setAttributes({ sliderDescFontWeight: sliderDescFontWeight });
                                        }
                                    })
                                )
                            )
                        )
                    )
                ),
                wp.element.createElement(
                    "div",
                    { className: classes },
                    wp.element.createElement(
                        "div",
                        { className: "bx-slider-main" },
                        slides_array.length > 0 && wp.element.createElement(
                            "div",
                            { className: "bx-slider-wrap" },
                            slides
                        )
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "add-slide-btn" },
                        slides_array.length == 0 && wp.element.createElement(
                            "p",
                            null,
                            "Add slide to work slider"
                        ),
                        wp.element.createElement(
                            Tooltip,
                            { text: __("Add Slide", "wp-learning") },
                            wp.element.createElement(
                                "i",
                                {
                                    onClick: function onClick() {
                                        _this3.addNewSlide();
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["h" /* plus */]
                            )
                        )
                    ),
                    wp.element.createElement(
                        "style",
                        null,
                        "\n                            .slider-wrap .bx-slider-wrap .slide-inner .slide-content h2 {\n                                font-size: " + sliderTitleFontsize + "px;\n                                font-weight: " + sliderTitleFontWeight + ";\n                                font-family: " + sliderTitleFontFamily + ";\n                            }\n                            .slider-wrap .bx-slider-wrap .slide-inner .slide-content h2 {\n                                font-size: " + sliderDescFontsize + "px;\n                                font-weight: " + sliderDescFontWeight + ";\n                                font-family: " + sliderDescFontFamily + ";\n                            }\n                        "
                    )
                )
            );
        }
    }]);

    return edit;
}(Component);

registerBlockType("wp-learning/slider-block", {
    title: __("Slider"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("slider"), __("banner")],
    supports: {
        align: ["full"]
    },
    attributes: {
        blockId: {
            type: "string",
            default: ""
        },
        slides_array: {
            type: "array",
            default: []
        },
        slider_save: {
            type: "boolean",
            default: ""
        },
        slide_mode: {
            type: "string",
            default: "horizontal"
        },
        slide_pager: {
            type: "boolean",
            default: true
        },
        slide_controls: {
            type: "boolean",
            default: true
        },
        slide_autoplay: {
            type: "boolean",
            default: true
        },
        slide_infinite: {
            type: "boolean",
            default: true
        },
        slide_adaptiveHeight: {
            type: "boolean",
            default: true
        },
        slide_speed: {
            type: "number",
            default: 500
        },
        sliderTitleFontsize: {
            type: "string",
            default: 20
        },
        sliderDescFontsize: {
            type: "string",
            default: 16
        },
        sliderTitleFontWeight: {
            type: "string",
            default: 400
        },
        sliderDescFontWeight: {
            type: "string",
            default: 400
        },
        sliderTitleFontFamily: {
            type: "string",
            default: "Roboto"
        },
        sliderDescFontFamily: {
            type: "string",
            default: "Roboto"
        }
    },

    edit: edit,
    save: function save(props) {
        var attributes = props.attributes,
            clientId = props.clientId,
            className = props.className;
        var slide_mode = attributes.slide_mode,
            slide_pager = attributes.slide_pager,
            slide_controls = attributes.slide_controls,
            slide_autoplay = attributes.slide_autoplay,
            slide_infinite = attributes.slide_infinite,
            slide_adaptiveHeight = attributes.slide_adaptiveHeight,
            slide_speed = attributes.slide_speed,
            slides_array = attributes.slides_array;


        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "row");

        return wp.element.createElement(
            "div",
            { className: "slider " + classes },
            slides_array.length > 0 && wp.element.createElement(
                "div",
                { className: "bx-slider-main" },
                wp.element.createElement("input", { type: "hidden", className: "slide_mode", "data-value": slide_mode }),
                wp.element.createElement("input", { type: "hidden", className: "slide_pager", "data-value": slide_pager }),
                wp.element.createElement("input", { type: "hidden", className: "slide_controls", "data-value": slide_controls }),
                wp.element.createElement("input", { type: "hidden", className: "slide_autoplay", "data-value": slide_autoplay }),
                wp.element.createElement("input", { type: "hidden", className: "slide_infinite", "data-value": slide_infinite }),
                wp.element.createElement("input", { type: "hidden", className: "slide_adaptiveHeight", "data-value": slide_adaptiveHeight }),
                wp.element.createElement("input", { type: "hidden", className: "slide_speed", "data-value": slide_speed }),
                wp.element.createElement(
                    "div",
                    { className: "bx-slider-wrap" },
                    slides_array.map(function (data, index) {
                        return wp.element.createElement(
                            "div",
                            { className: "slide-inner" },
                            wp.element.createElement(
                                "div",
                                { className: "slide-content" },
                                wp.element.createElement(RichText.Content, { tagName: "h2", value: data.slide_title }),
                                wp.element.createElement(RichText.Content, { tagName: "p", value: data.slide_para })
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "slide-img" },
                                data.slide_bgImgID && wp.element.createElement("img", { src: data.slide_bgImgURL })
                            )
                        );
                    })
                )
            )
        );
    }
});

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_icons__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  BLOCK: Slider
 *  ---
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    BlockControls = _wp$blockEditor.BlockControls,
    RichText = _wp$blockEditor.RichText,
    MediaUpload = _wp$blockEditor.MediaUpload;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    RangeControl = _wp$components.RangeControl,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip,
    ToggleControl = _wp$components.ToggleControl;





var edit = function (_Component) {
    _inherits(edit, _Component);

    function edit(props) {
        _classCallCheck(this, edit);

        var _this = _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).call(this, props));

        _this.initSlider = _this.OnInitSlides.bind(_this);
        _this.addNewSlide = _this.addNewSlide.bind(_this);
        _this.state = {
            obj_SliderState: {}
        };
        return _this;
    }

    _createClass(edit, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log('componentDidMount');
            var _props = this.props,
                setAttributes = _props.setAttributes,
                attributes = _props.attributes;
            var slides_array = attributes.slides_array,
                slider_save = attributes.slider_save;


            if (slides_array.length > 0) {
                this.OnInitSlides();
            }
            setAttributes({ slider_save: false });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            console.log('componentDidUpdate');
            var _props2 = this.props,
                setAttributes = _props2.setAttributes,
                attributes = _props2.attributes;
            var slides_array = attributes.slides_array,
                slide_mode = attributes.slide_mode,
                slide_pager = attributes.slide_pager,
                slide_controls = attributes.slide_controls,
                slide_autoplay = attributes.slide_autoplay,
                slide_infinite = attributes.slide_infinite,
                slide_adaptiveHeight = attributes.slide_adaptiveHeight,
                slide_speed = attributes.slide_speed,
                slider_save = attributes.slider_save;
            var prev_slide_array = prevProps.attributes.slides_array;


            console.log("component-update slider_save: " + slider_save);

            if (slides_array.length !== prev_slide_array.length) {
                console.log('change array length');
                if (prev_slide_array.length == 0 && slider_save) {
                    console.log('if array length 0');
                    // setAttributes({
                    //     slider_save: false,
                    // });
                    setTimeout(function () {
                        return _this2.OnInitSlides();
                    }, 10);
                } else if (slider_save) {
                    setTimeout(function () {
                        return _this2.state.obj_SliderState.reloadSlider();
                    }, 10);
                    setTimeout(function () {
                        return _this2.state.obj_SliderState.goToSlide(slides_array.length - 1);
                    }, 10);
                }
            }

            if (slide_mode !== prevProps.attributes.slide_mode || slide_pager !== prevProps.attributes.slide_pager || slide_controls !== prevProps.attributes.slide_controls || slide_autoplay !== prevProps.attributes.slide_autoplay || slide_infinite !== prevProps.attributes.slide_infinite || slide_adaptiveHeight !== prevProps.attributes.slide_adaptiveHeight || slide_speed !== prevProps.attributes.slide_speed) {
                this.onUpdateSliderState();
            }
        }
    }, {
        key: "OnInitSlides",
        value: function OnInitSlides() {
            console.log('OnInitSlides');
            var _props3 = this.props,
                setAttributes = _props3.setAttributes,
                attributes = _props3.attributes;
            var slide_mode = attributes.slide_mode,
                slide_pager = attributes.slide_pager,
                slide_controls = attributes.slide_controls,
                slide_autoplay = attributes.slide_autoplay,
                slide_infinite = attributes.slide_infinite,
                slide_adaptiveHeight = attributes.slide_adaptiveHeight,
                slide_speed = attributes.slide_speed;

            var sliderObjMount = jQuery(".bx-slider-wrap-second").bxSlider({
                mode: slide_mode,
                pager: slide_pager,
                controls: slide_controls,
                auto: slide_autoplay,
                infiniteLoop: slide_infinite,
                adaptiveHeight: slide_adaptiveHeight,
                speed: slide_speed,
                touchEnabled: false
            });
            this.setState({ obj_SliderState: sliderObjMount });
            console.log(this.state.obj_SliderState);
        }
    }, {
        key: "onUpdateSliderState",
        value: function onUpdateSliderState() {
            console.log('onUpdateSliderState');
            var _props$attributes = this.props.attributes,
                slide_mode = _props$attributes.slide_mode,
                slide_pager = _props$attributes.slide_pager,
                slide_controls = _props$attributes.slide_controls,
                slide_autoplay = _props$attributes.slide_autoplay,
                slide_infinite = _props$attributes.slide_infinite,
                slide_adaptiveHeight = _props$attributes.slide_adaptiveHeight,
                slide_speed = _props$attributes.slide_speed;

            this.state.obj_SliderState.reloadSlider({
                mode: slide_mode,
                pager: slide_pager,
                controls: slide_controls,
                auto: slide_autoplay,
                infiniteLoop: slide_infinite,
                adaptiveHeight: slide_adaptiveHeight,
                speed: slide_speed
            });
        }
    }, {
        key: "addNewSlide",
        value: function addNewSlide() {
            console.log('addNewSlide');
            var _props4 = this.props,
                setAttributes = _props4.setAttributes,
                attributes = _props4.attributes;
            var slides_array = attributes.slides_array;

            var objAddNewSlide = {
                index: slides_array.length,
                slide_title: "",
                slide_desc: "",
                slide_bgImgID: "",
                slide_bgImgURL: "",
                slide_bgImgAlt: ""
            };
            setAttributes({
                slides_array: [].concat(_toConsumableArray(slides_array), [objAddNewSlide])
            });
        }
    }, {
        key: "editSlider",
        value: function editSlider() {
            console.log('editSlider');
            var _props5 = this.props,
                setAttributes = _props5.setAttributes,
                attributes = _props5.attributes;
            var slider_save = attributes.slider_save;

            this.state.obj_SliderState.destroySlider();
            setAttributes({
                slider_save: false
            });
        }
    }, {
        key: "saveSlider",
        value: function saveSlider() {
            console.log('saveSlider');
            var _props6 = this.props,
                setAttributes = _props6.setAttributes,
                attributes = _props6.attributes;
            var slider_save = attributes.slider_save;

            setAttributes({
                slider_save: true
            });
            console.log(this.state.obj_SliderState);
            if (Object.keys(this.state.obj_SliderState).length === 0) {
                this.OnInitSlides();
            } else {
                this.state.obj_SliderState.reloadSlider();
            }
        }
    }, {
        key: "updateTitlePadding",
        value: function updateTitlePadding(pos, newPadding) {
            var _props7 = this.props,
                attributes = _props7.attributes,
                setAttributes = _props7.setAttributes;
            var titlePadding = attributes.titlePadding;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedPadding = titlePadding.map(function (val, index) {
                if (index === position[pos]) {
                    return newPadding;
                } else {
                    return val;
                }
            });
            setAttributes({ titlePadding: updatedPadding });
        }
    }, {
        key: "updateTitleMargin",
        value: function updateTitleMargin(pos, newMargin) {
            var _props8 = this.props,
                attributes = _props8.attributes,
                setAttributes = _props8.setAttributes;
            var titleMargin = attributes.titleMargin;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedMargin = titleMargin.map(function (val, index) {
                if (index === position[pos]) {
                    return newMargin;
                } else {
                    return val;
                }
            });
            setAttributes({ titleMargin: updatedMargin });
        }
    }, {
        key: "updateDescPadding",
        value: function updateDescPadding(pos, newPadding) {
            var _props9 = this.props,
                attributes = _props9.attributes,
                setAttributes = _props9.setAttributes;
            var descPadding = attributes.descPadding;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedPadding = descPadding.map(function (val, index) {
                if (index === position[pos]) {
                    return newPadding;
                } else {
                    return val;
                }
            });
            setAttributes({ descPadding: updatedPadding });
        }
    }, {
        key: "updateDescMargin",
        value: function updateDescMargin(pos, newMargin) {
            var _props10 = this.props,
                attributes = _props10.attributes,
                setAttributes = _props10.setAttributes;
            var descMargin = attributes.descMargin;

            var position = {
                top: 0,
                right: 1,
                bottom: 2,
                left: 3
            };
            var updatedMargin = descMargin.map(function (val, index) {
                if (index === position[pos]) {
                    return newMargin;
                } else {
                    return val;
                }
            });
            setAttributes({ descMargin: updatedMargin });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props11 = this.props,
                attributes = _props11.attributes,
                setAttributes = _props11.setAttributes,
                clientId = _props11.clientId,
                className = _props11.className;
            var blockId = attributes.blockId,
                slider_save = attributes.slider_save,
                slides_array = attributes.slides_array,
                slide_mode = attributes.slide_mode,
                slide_pager = attributes.slide_pager,
                slide_controls = attributes.slide_controls,
                slide_autoplay = attributes.slide_autoplay,
                slide_infinite = attributes.slide_infinite,
                slide_adaptiveHeight = attributes.slide_adaptiveHeight,
                slide_speed = attributes.slide_speed,
                titleFontFamily = attributes.titleFontFamily,
                titleFontsize = attributes.titleFontsize,
                titleFontWeight = attributes.titleFontWeight,
                descFontFamily = attributes.descFontFamily,
                descFontsize = attributes.descFontsize,
                descFontWeight = attributes.descFontWeight,
                titleColor = attributes.titleColor,
                descColor = attributes.descColor,
                titlePadding = attributes.titlePadding,
                descPadding = attributes.descPadding,
                titleMargin = attributes.titleMargin,
                descMargin = attributes.descMargin;


            setAttributes({ blockId: clientId });

            var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, "slider-wrap");

            var slides = slides_array.map(function (data, index) {
                console.log('render');
                return wp.element.createElement(
                    "div",
                    { className: "slide-inner" },
                    !slider_save && wp.element.createElement(
                        Tooltip,
                        { text: __("Remove Slide", "wp-learning") },
                        wp.element.createElement(
                            "div",
                            { className: "remove-slide" },
                            wp.element.createElement(
                                "i",
                                {
                                    onClick: function onClick() {
                                        if (confirm("Delete Confirm!") == true) {
                                            var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                            arrayCopy.splice(index, 1);
                                            setAttributes({ slides_array: arrayCopy });
                                        }
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["i" /* remove */]
                            )
                        )
                    ),
                    slider_save && wp.element.createElement(
                        "div",
                        { className: "slide-content" },
                        wp.element.createElement(
                            "h2",
                            null,
                            data.slide_title,
                            " "
                        ),
                        wp.element.createElement(
                            "p",
                            null,
                            data.slide_desc,
                            " "
                        )
                    ),
                    !slider_save && wp.element.createElement(
                        "div",
                        { className: "slide-content" },
                        wp.element.createElement(RichText, {
                            tagName: "h2",
                            onChange: function onChange(value) {
                                var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                arrayCopy[index].slide_title = value;
                                setAttributes({ slides_array: arrayCopy });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: data.slide_title,
                            placeholder: __("Write your Title..."),
                            className: "slide-title"
                        }),
                        wp.element.createElement(RichText, {
                            tagName: "p",
                            onChange: function onChange(value) {
                                var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                arrayCopy[index].slide_desc = value;
                                setAttributes({ slides_array: arrayCopy });
                            },
                            allowedFormats: ["core/bold", "core/italic"],
                            value: data.slide_para,
                            placeholder: __("Write your desc..."),
                            className: "slide-desc"
                        })
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "slide-img" },
                        !data.slide_bgImgID && !slider_save && wp.element.createElement(MediaUpload, {
                            onSelect: function onSelect(media) {
                                var arrayCopy = [].concat(_toConsumableArray(slides_array));
                                arrayCopy[index].slide_bgImgID = media.id;
                                arrayCopy[index].slide_bgImgURL = media.url;
                                arrayCopy[index].slide_bgImgAlt = media.alt;
                                setAttributes({
                                    slides_array: arrayCopy
                                });
                            },
                            value: data.slide_bgImgID,
                            allowedTypes: ["image"],
                            render: function render(_ref) {
                                var open = _ref.open;
                                return wp.element.createElement(
                                    Button,
                                    {
                                        className: "editor-post-featured-image__toggle",
                                        onClick: open
                                    },
                                    __("Upload Image", "wp-learning")
                                );
                            }
                        }),
                        data.slide_bgImgID && wp.element.createElement("img", { src: data.slide_bgImgURL, alt: data.slide_bgImgAlt })
                    )
                );
            });

            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Slider Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(SelectControl, {
                            label: __("Mode", "wp-learning"),
                            value: slide_mode,
                            options: [{ label: __("Horizontal"), value: "horizontal" }, { label: __("Vertical"), value: "vertical" }, { label: __("Fade"), value: "fade" }],
                            onChange: function onChange(slide_mode) {
                                return setAttributes({ slide_mode: slide_mode });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Pager", "wp-learning"),
                            checked: slide_pager,
                            onChange: function onChange(slide_pager) {
                                return setAttributes({ slide_pager: slide_pager });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Controls", "wp-learning"),
                            checked: slide_controls,
                            onChange: function onChange(slide_controls) {
                                return setAttributes({ slide_controls: slide_controls });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Auto Play", "wp-learning"),
                            checked: slide_autoplay,
                            onChange: function onChange(slide_autoplay) {
                                return setAttributes({ slide_autoplay: slide_autoplay });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Infinite Loop", "wp-learning"),
                            checked: slide_infinite,
                            onChange: function onChange(slide_infinite) {
                                return setAttributes({ slide_infinite: slide_infinite });
                            }
                        }),
                        wp.element.createElement(ToggleControl, {
                            label: __("Adaptive Height", "wp-learning"),
                            checked: slide_adaptiveHeight,
                            onChange: function onChange(slide_adaptiveHeight) {
                                return setAttributes({ slide_adaptiveHeight: slide_adaptiveHeight });
                            }
                        }),
                        wp.element.createElement(RangeControl, {
                            label: __("Speed"),
                            value: slide_speed,
                            min: 100,
                            max: 5000,
                            step: 10,
                            onChange: function onChange(slide_speed) {
                                return setAttributes({ slide_speed: slide_speed });
                            }
                        })
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Typography Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Title Settings:", "wp-learning")
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: titleFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                                onChange: function onChange(titleFontFamily) {
                                    return setAttributes({ titleFontFamily: titleFontFamily });
                                }
                            }),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Font Size", "wp-learning"),
                                        value: titleFontsize,
                                        onChange: function onChange(titleFontsize) {
                                            return setAttributes({ titleFontsize: titleFontsize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: titleFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(titleFontWeight) {
                                            return setAttributes({ titleFontWeight: titleFontWeight });
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Description Settings:", "wp-learning")
                            ),
                            wp.element.createElement(SelectControl, {
                                label: __("Font Family", "wp-learning"),
                                value: descFontFamily,
                                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }, { label: "RobotoSlab", value: "RobotoSlab" }],
                                onChange: function onChange(descFontFamily) {
                                    return setAttributes({ descFontFamily: descFontFamily });
                                }
                            }),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: __("Font Size", "wp-learning"),
                                        value: descFontsize,
                                        onChange: function onChange(descFontsize) {
                                            return setAttributes({ descFontsize: descFontsize });
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-50" },
                                    wp.element.createElement(SelectControl, {
                                        label: __("Font Weight", "wp-learning"),
                                        value: descFontWeight,
                                        options: [{ label: 400, value: 400 }, { label: 500, value: 500 }, { label: 600, value: 600 }, { label: 700, value: 700 }, { label: 800, value: 800 }, { label: 900, value: 900 }, { label: "Bold", value: "bold" }, { label: "Bolder", value: "bolder" }, { label: "inherit", value: "inherit" }],
                                        onChange: function onChange(descFontWeight) {
                                            return setAttributes({ descFontWeight: descFontWeight });
                                        }
                                    })
                                )
                            )
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Text Color Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Title Text color", "wp-learning")
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: titleColor,
                                onChange: function onChange(titleColor) {
                                    setAttributes({
                                        titleColor: titleColor ? titleColor : "#000000"
                                    });
                                }
                            }),
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Description Text color", "wp-learning")
                            ),
                            wp.element.createElement(ColorPalette, {
                                value: descColor,
                                onChange: function onChange(descColor) {
                                    setAttributes({
                                        descColor: descColor ? descColor : "#000000"
                                    });
                                }
                            })
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Spacing Title", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Title Padding:", "wp-learning")
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Top",
                                        min: 0,
                                        step: 1,
                                        value: titlePadding[0] ? titlePadding[0] : 0,
                                        onChange: function onChange(paddingTop) {
                                            _this3.updateTitlePadding("top", parseInt(paddingTop));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Right",
                                        min: 0,
                                        step: 1,
                                        value: titlePadding[1] ? titlePadding[1] : 0,
                                        onChange: function onChange(paddingRight) {
                                            _this3.updateTitlePadding("right", parseInt(paddingRight));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Bottom",
                                        min: 0,
                                        step: 1,
                                        value: titlePadding[2] ? titlePadding[2] : 0,
                                        onChange: function onChange(paddingBottom) {
                                            _this3.updateTitlePadding("bottom", parseInt(paddingBottom));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Left",
                                        min: 0,
                                        step: 1,
                                        value: titlePadding[3] ? titlePadding[3] : 0,
                                        onChange: function onChange(paddingLeft) {
                                            _this3.updateTitlePadding("left", parseInt(paddingLeft));
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Title Margin:", "wp-learning")
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Top",
                                        min: 0,
                                        step: 1,
                                        value: titleMargin[0] ? titleMargin[0] : 0,
                                        onChange: function onChange(marginTop) {
                                            _this3.updateTitleMargin("top", parseInt(marginTop));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Right",
                                        min: 0,
                                        step: 1,
                                        value: titleMargin[1] ? titleMargin[1] : 0,
                                        onChange: function onChange(marginRight) {
                                            _this3.updateTitleMargin("right", parseInt(marginRight));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Bottom",
                                        min: 0,
                                        step: 1,
                                        value: titleMargin[2] ? titleMargin[2] : 0,
                                        onChange: function onChange(marginBottom) {
                                            _this3.updateTitleMargin("bottom", parseInt(marginBottom));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Left",
                                        min: 0,
                                        step: 1,
                                        value: titleMargin[3] ? titleMargin[3] : 0,
                                        onChange: function onChange(marginLeft) {
                                            _this3.updateTitleMargin("left", parseInt(marginLeft));
                                        }
                                    })
                                )
                            )
                        )
                    ),
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Spacing Description", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Description Padding:", "wp-learning")
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Top",
                                        min: 0,
                                        step: 1,
                                        value: descPadding[0] ? descPadding[0] : 0,
                                        onChange: function onChange(paddingTop) {
                                            _this3.updateDescPadding("top", parseInt(paddingTop));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Right",
                                        min: 0,
                                        step: 1,
                                        value: descPadding[1] ? descPadding[1] : 0,
                                        onChange: function onChange(paddingRight) {
                                            _this3.updateDescPadding("right", parseInt(paddingRight));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Bottom",
                                        min: 0,
                                        step: 1,
                                        value: descPadding[2] ? descPadding[2] : 0,
                                        onChange: function onChange(paddingBottom) {
                                            _this3.updateDescPadding("bottom", parseInt(paddingBottom));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Left",
                                        min: 0,
                                        step: 1,
                                        value: descPadding[3] ? descPadding[3] : 0,
                                        onChange: function onChange(paddingLeft) {
                                            _this3.updateDescPadding("left", parseInt(paddingLeft));
                                        }
                                    })
                                )
                            )
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(
                                "label",
                                { className: "row-panel-label" },
                                __("Description Margin:", "wp-learning")
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "row" },
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Top",
                                        min: 0,
                                        step: 1,
                                        value: descMargin[0] ? descMargin[0] : 0,
                                        onChange: function onChange(marginTop) {
                                            _this3.updateDescMargin("top", parseInt(marginTop));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Right",
                                        min: 0,
                                        step: 1,
                                        value: descMargin[1] ? descMargin[1] : 0,
                                        onChange: function onChange(marginRight) {
                                            _this3.updateDescMargin("right", parseInt(marginRight));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Bottom",
                                        min: 0,
                                        step: 1,
                                        value: descMargin[2] ? descMargin[2] : 0,
                                        onChange: function onChange(marginBottom) {
                                            _this3.updateDescMargin("bottom", parseInt(marginBottom));
                                        }
                                    })
                                ),
                                wp.element.createElement(
                                    "div",
                                    { className: "col-25" },
                                    wp.element.createElement(TextControl, {
                                        type: "number",
                                        label: "Left",
                                        min: 0,
                                        step: 1,
                                        value: descMargin[3] ? descMargin[3] : 0,
                                        onChange: function onChange(marginLeft) {
                                            _this3.updateDescMargin("left", parseInt(marginLeft));
                                        }
                                    })
                                )
                            )
                        )
                    )
                ),
                wp.element.createElement(
                    BlockControls,
                    null,
                    slider_save && wp.element.createElement(
                        ToolbarGroup,
                        null,
                        wp.element.createElement(Button, {
                            label: "edit Column",
                            icon: __WEBPACK_IMPORTED_MODULE_0__custom_icons__["c" /* Edit */],
                            className: "my-custom-button",
                            onClick: function onClick() {
                                _this3.editSlider();
                            }
                        })
                    ),
                    !slider_save && wp.element.createElement(
                        ToolbarGroup,
                        null,
                        wp.element.createElement(Button, {
                            label: "save Column",
                            icon: __WEBPACK_IMPORTED_MODULE_0__custom_icons__["k" /* save */],
                            className: "my-custom-button",
                            onClick: function onClick() {
                                _this3.saveSlider();
                            }
                        })
                    )
                ),
                wp.element.createElement(
                    "div",
                    { className: classes },
                    wp.element.createElement(
                        "div",
                        { className: "bx-slider-main-second" },
                        slides_array.length > 0 && wp.element.createElement(
                            "div",
                            { className: "bx-slider-wrap-second" },
                            slides
                        )
                    ),
                    wp.element.createElement(
                        "div",
                        { className: "add-slide-btn" },
                        slides_array.length == 0 && wp.element.createElement(
                            "p",
                            null,
                            "Add slide to work slider"
                        ),
                        (!slider_save || slides_array.length == 0) && wp.element.createElement(
                            Tooltip,
                            { text: __("Add Slide", "wp-learning") },
                            wp.element.createElement(
                                "i",
                                {
                                    onClick: function onClick() {
                                        _this3.addNewSlide();
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["h" /* plus */]
                            )
                        )
                    ),
                    wp.element.createElement(
                        "style",
                        null,
                        "\n                            .slider-wrap .bx-slider-wrap-second .slide-inner .slide-content h2 {\n                                font-size: " + titleFontsize + "px;\n                                font-weight: " + titleFontWeight + ";\n                                font-family: " + titleFontFamily + ";\n                                color: " + titleColor + ";\n                                padding:" + titlePadding[0] + "px " + titlePadding[1] + "px " + titlePadding[2] + "px " + titlePadding[3] + "px;\n                                margin:" + titleMargin[0] + "px " + titleMargin[1] + "px " + titleMargin[2] + "px " + titleMargin[3] + "px;\n                            }\n                            .slider-wrap .bx-slider-wrap-second .slide-inner .slide-content p {\n                                font-size: " + descFontsize + "px;\n                                font-weight: " + descFontWeight + ";\n                                font-family: " + descFontFamily + ";\n                                color: " + descColor + ";\n                                padding:" + descPadding[0] + "px " + descPadding[1] + "px " + descPadding[2] + "px " + descPadding[3] + "px;\n                                margin:" + descMargin[0] + "px " + descMargin[1] + "px " + descMargin[2] + "px " + descMargin[3] + "px;\n                            }\n                        "
                    )
                )
            );
        }
    }]);

    return edit;
}(Component);

registerBlockType("wp-learning/slider-block-second", {
    title: __("Slider second"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("slider"), __("banner")],
    supports: {
        align: ["full"]
    },
    attributes: {
        blockId: {
            type: "string",
            default: ""
        },
        slides_array: {
            type: "array",
            default: []
        },
        slider_save: {
            type: "boolean",
            default: true
        },
        slide_mode: {
            type: "string",
            default: "horizontal"
        },
        slide_pager: {
            type: "boolean",
            default: true
        },
        slide_controls: {
            type: "boolean",
            default: true
        },
        slide_autoplay: {
            type: "boolean",
            default: true
        },
        slide_infinite: {
            type: "boolean",
            default: true
        },
        slide_adaptiveHeight: {
            type: "boolean",
            default: true
        },
        slide_speed: {
            type: "number",
            default: 500
        },
        titleFontsize: {
            type: "string",
            default: 20
        },
        descFontsize: {
            type: "string",
            default: 16
        },
        titleFontWeight: {
            type: "string",
            default: 400
        },
        descFontWeight: {
            type: "string",
            default: 400
        },
        titleFontFamily: {
            type: "string",
            default: "Roboto"
        },
        descFontFamily: {
            type: "string",
            default: "Roboto"
        },
        titleColor: {
            type: "string",
            default: ""
        },
        descColor: {
            type: "string",
            default: ""
        },
        titlePadding: {
            type: "array",
            default: [0, 0, 0, 0]
        },
        descPadding: {
            type: "array",
            default: [0, 0, 0, 0]
        },
        titleMargin: {
            type: "array",
            default: [0, 0, 0, 0]
        },
        descMargin: {
            type: "array",
            default: [0, 0, 0, 0]
        }
    },

    edit: edit,
    save: function save(props) {
        var attributes = props.attributes,
            clientId = props.clientId,
            className = props.className;
        var mediaId = attributes.mediaId,
            mediaUrl = attributes.mediaUrl,
            slide_mode = attributes.slide_mode,
            slide_pager = attributes.slide_pager,
            slide_controls = attributes.slide_controls,
            slide_autoplay = attributes.slide_autoplay,
            slide_infinite = attributes.slide_infinite,
            slide_adaptiveHeight = attributes.slide_adaptiveHeight,
            slide_speed = attributes.slide_speed,
            slides_array = attributes.slides_array,
            titleFontFamily = attributes.titleFontFamily,
            titleFontsize = attributes.titleFontsize,
            titleFontWeight = attributes.titleFontWeight,
            descFontFamily = attributes.descFontFamily,
            descFontsize = attributes.descFontsize,
            descFontWeight = attributes.descFontWeight,
            titleColor = attributes.titleColor,
            descColor = attributes.descColor,
            titlePadding = attributes.titlePadding,
            descPadding = attributes.descPadding,
            titleMargin = attributes.titleMargin,
            descMargin = attributes.descMargin;


        var classes = __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className);

        return wp.element.createElement(
            "div",
            { className: "slider " + classes },
            slides_array.length > 0 && wp.element.createElement(
                "div",
                { className: "bx-slider-main-second" },
                wp.element.createElement("input", { type: "hidden", className: "slide_mode", "data-value": slide_mode }),
                wp.element.createElement("input", { type: "hidden", className: "slide_pager", "data-value": slide_pager }),
                wp.element.createElement("input", { type: "hidden", className: "slide_controls", "data-value": slide_controls }),
                wp.element.createElement("input", { type: "hidden", className: "slide_autoplay", "data-value": slide_autoplay }),
                wp.element.createElement("input", { type: "hidden", className: "slide_infinite", "data-value": slide_infinite }),
                wp.element.createElement("input", { type: "hidden", className: "slide_adaptiveHeight", "data-value": slide_adaptiveHeight }),
                wp.element.createElement("input", { type: "hidden", className: "slide_speed", "data-value": slide_speed }),
                wp.element.createElement(
                    "div",
                    { className: "bx-slider-wrap-second" },
                    slides_array.map(function (data, index) {
                        return wp.element.createElement(
                            "div",
                            { className: "slide-inner" },
                            wp.element.createElement(
                                "div",
                                { className: "slide-content" },
                                wp.element.createElement(RichText.Content, { tagName: "h2", value: data.slide_title }),
                                wp.element.createElement(RichText.Content, { tagName: "p", value: data.slide_desc })
                            ),
                            wp.element.createElement(
                                "div",
                                { className: "slide-img" },
                                data.slide_bgImgID && wp.element.createElement("img", { src: data.slide_bgImgURL })
                            )
                        );
                    })
                )
            ),
            wp.element.createElement(
                "style",
                null,
                "\n                        .bx-slider-main-second .bx-slider-wrap-second .slide-inner .slide-content h2 {\n                            font-size: " + titleFontsize + "px;\n                            font-weight: " + titleFontWeight + ";\n                            font-family: " + titleFontFamily + ";\n                            color: " + titleColor + ";\n                            padding:" + titlePadding[0] + "px " + titlePadding[1] + "px " + titlePadding[2] + "px " + titlePadding[3] + "px;\n                            margin:" + titleMargin[0] + "px " + titleMargin[1] + "px " + titleMargin[2] + "px " + titleMargin[3] + "px;\n                        }\n                        .bx-slider-main-second .bx-slider-wrap-second .slide-inner .slide-content p {\n                            font-size: " + descFontsize + "px;\n                            font-weight: " + descFontWeight + ";\n                            font-family: " + descFontFamily + ";\n                            color: " + descColor + ";\n                            padding:" + descPadding[0] + "px " + descPadding[1] + "px " + descPadding[2] + "px " + descPadding[3] + "px;\n                            margin:" + descMargin[0] + "px " + descMargin[1] + "px " + descMargin[2] + "px " + descMargin[3] + "px;\n                        }\n                    "
            )
        );
    }
});

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  BLOCK: dynamic post
 *  ---
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    ServerSideRender = _wp$components.ServerSideRender,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var InspectorControls = wp.blockEditor.InspectorControls;

var edit = function (_Component) {
    _inherits(edit, _Component);

    function edit() {
        _classCallCheck(this, edit);

        return _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).apply(this, arguments));
    }

    _createClass(edit, [{
        key: "render",


        // componentDidUpdate(prevProps) {
        //     const { setAttributes, attributes } = this.props;
        //     const {
        //         onReloadView,
        //         gridViewColumn,

        //     } = attributes;
        //     console.log('update');

        //     if(onReloadView == false){
        //         setAttributes({
        //             gridViewColumn: 0,
        //         });
        //     }else{
        //         setAttributes({
        //             gridViewColumn: gridViewColumn,
        //         });
        //     }
        // }

        value: function render() {
            var _props = this.props,
                attributes = _props.attributes,
                setAttributes = _props.setAttributes,
                clientId = _props.clientId;
            var noOfPosts = attributes.noOfPosts,
                postsOrder = attributes.postsOrder,
                postsCategory = attributes.postsCategory,
                showThumbnail = attributes.showThumbnail,
                showExcerpt = attributes.showExcerpt,
                postsType = attributes.postsType,
                onReloadView = attributes.onReloadView,
                gridViewColumn = attributes.gridViewColumn,
                showPagination = attributes.showPagination;

            return wp.element.createElement(
                Fragment,
                null,
                wp.element.createElement(
                    InspectorControls,
                    null,
                    wp.element.createElement(
                        PanelBody,
                        { title: __("Post Settings", "wp-learning"), initialOpen: false },
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(RangeControl, {
                                label: __("Number of posts", "wp-learning"),
                                value: noOfPosts,
                                onChange: function onChange(noOfPosts) {
                                    return setAttributes({ noOfPosts: noOfPosts });
                                },
                                min: 1,
                                max: 10
                            })
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(SelectControl, {
                                label: __("Posts Order", "wp-learning"),
                                value: postsOrder,
                                options: [{ label: __("DESC"), value: "DESC" }, { label: __("ASC"), value: "ASC" }],
                                onChange: function onChange(postsOrder) {
                                    return setAttributes({ postsOrder: postsOrder });
                                }
                            })
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(SelectControl, {
                                label: __("Posts Category", "wp-learning"),
                                value: postsCategory,
                                options: [{ label: __("All"), value: "" }, { label: __("category1"), value: "category1" }, { label: __("category2"), value: "category2" }],
                                onChange: function onChange(postsCategory) {
                                    return setAttributes({ postsCategory: postsCategory });
                                }
                            })
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(SelectControl, {
                                label: __("Posts Type", "wp-learning"),
                                value: postsType,
                                options: [{ label: __("All"), value: "" }, { label: __("Blog"), value: "blogs" }, { label: __("Post"), value: "post" }],
                                onChange: function onChange(postsType) {
                                    return setAttributes({ postsType: postsType });
                                }
                            })
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(ToggleControl, {
                                label: __("Show Thumbnail", "wp-learning"),
                                checked: showThumbnail,
                                onChange: function onChange(showThumbnail) {
                                    return setAttributes({ showThumbnail: showThumbnail });
                                }
                            })
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(ToggleControl, {
                                label: __("Show Excerpt", "wp-learning"),
                                checked: showExcerpt,
                                onChange: function onChange(showExcerpt) {
                                    return setAttributes({ showExcerpt: showExcerpt });
                                }
                            })
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(ToggleControl, {
                                label: __("Grid View on Page Reload View?", "wp-learning"),
                                checked: onReloadView,
                                onChange: function onChange(onReloadView) {
                                    return setAttributes({ onReloadView: onReloadView });
                                }
                            })
                        ),
                        onReloadView && wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(RangeControl, {
                                label: __("Number of posts in one row", "wp-learning"),
                                value: gridViewColumn,
                                onChange: function onChange(gridViewColumn) {
                                    return setAttributes({ gridViewColumn: gridViewColumn });
                                },
                                min: 1,
                                max: 6
                            })
                        ),
                        wp.element.createElement(
                            "div",
                            { className: "row-panel" },
                            wp.element.createElement(ToggleControl, {
                                label: __("Show Pagination?", "wp-learning"),
                                checked: showPagination,
                                onChange: function onChange(showPagination) {
                                    return setAttributes({ showPagination: showPagination });
                                }
                            })
                        )
                    )
                ),
                wp.element.createElement(ServerSideRender, {
                    block: "wp-learning/dynamic-post-block",
                    attributes: {
                        postsType: postsType,
                        noOfPosts: noOfPosts,
                        postsOrder: postsOrder,
                        postsCategory: postsCategory,
                        showThumbnail: showThumbnail,
                        showExcerpt: showExcerpt,
                        onReloadView: onReloadView,
                        gridViewColumn: gridViewColumn,
                        showPagination: showPagination
                    }
                })
            );
        }
    }]);

    return edit;
}(Component);

registerBlockType("wp-learning/dynamic-post-block", {
    title: __('dynamic-post'),
    category: 'my-custom-block',
    icon: "format-aside",
    attributes: {
        postsType: {
            type: 'string',
            default: ''
        },
        noOfPosts: {
            type: 'number',
            default: 4
        },
        postsOrder: {
            type: 'string',
            default: 'DESC'
        },
        postsCategory: {
            type: 'string',
            default: ''
        },
        showThumbnail: {
            type: 'boolean',
            default: true
        },
        showExcerpt: {
            type: 'boolean',
            default: true
        },
        onReloadView: {
            type: 'boolean',
            default: true
        },
        gridViewColumn: {
            type: "number",
            default: 3
        },
        showPagination: {
            type: 'boolean',
            default: true
        }
    },
    edit: edit,
    save: function save(props) {
        return null;
    }
});

/***/ })
/******/ ]);