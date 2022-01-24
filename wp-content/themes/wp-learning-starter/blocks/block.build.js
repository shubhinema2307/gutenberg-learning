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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return plus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return remove; });
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_container_block_block__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_container_block_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__block_container_block_block__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_button_block_block__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_button_block_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__block_button_block_block__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_banner_block_block__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_banner_block_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__block_banner_block_block__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_about_block_block__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_services_block_block__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__block_features_block_block__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__block_storyful_content_block__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__block_storyful_content_block___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__block_storyful_content_block__);








/***/ }),
/* 2 */
/***/ (function(module, exports) {

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
    // Enable or disable support for low-level features
    supports: {
        align: ['full']
    },
    // Set up data model for custom block
    attributes: {
        columns: {
            type: 'number',
            default: 1
        }
    },
    // The UI for the WordPress editor
    edit: function edit(props) {
        var attributes = props.attributes,
            setAttributes = props.setAttributes,
            clientId = props.clientId,
            className = props.className;
        var blockId = attributes.blockId,
            columns = attributes.columns;


        setAttributes({ blockId: clientId });

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
                { className: className + ' has-' + columns + '-columns' },
                wp.element.createElement(InnerBlocks, null)
            )
        );
    },

    // The output on the live site
    save: function save(props) {
        var attributes = props.attributes,
            clientId = props.clientId;
        var blockId = attributes.blockId,
            columns = attributes.columns;


        return wp.element.createElement(
            'div',
            { className: 'has-' + columns + '-columns' },
            wp.element.createElement(InnerBlocks.Content, null)
        );
    }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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


registerBlockType("wp-learning/button-block", {
  title: __("button"),
  icon: "format-aside",
  category: "my-custom-block",
  keywords: [__("button"), __("btn")],
  // Enable or disable support for low-level features
  supports: {
    align: ["full"]
  },
  // Set up data model for custom block
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
      default: "Button"
    },
    buttonFontsize: {
      type: "number",
      default: 14
    },
    buttonFontFamily: {
      type: "string",
      default: "Roboto"
    },
    buttonFontWeight: {
      type: "number",
      default: 500
    },
    buttonTextColor: {
      type: "string",
      default: "#000000"
    },
    buttonBgColor: {
      type: "string",
      default: "#ffffff"
    },
    buttonHovertxtColor: {
      type: "string",
      default: "#000000"
    },
    buttonHoverBgColor: {
      type: "string",
      default: "#ffffff"
    },
    buttonBorderWidth: {
      type: "number",
      default: 2
    },
    buttonBorderStyle: {
      type: "string",
      default: "solid"
    },
    buttonBorderColor: {
      type: "string",
      default: "transparent"
    },
    buttonBorderRadius: {
      type: "number",
      default: 0
    },
    buttonPaddingTop: {
      type: "number",
      default: 0
    },
    buttonPaddingRight: {
      type: "number",
      default: 0
    },
    buttonPaddingBottom: {
      type: "number",
      default: 0
    },
    buttonPaddingLeft: {
      type: "number",
      default: 0
    },
    buttonMarginTop: {
      type: "number",
      default: 0
    },
    buttonMarginRight: {
      type: "number",
      default: 0
    },
    buttonMarginBottom: {
      type: "number",
      default: 0
    },
    buttonMarginLeft: {
      type: "number",
      default: 0
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
  // The UI for the WordPress editor
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId;
    var blockId = attributes.blockId,
        buttonAlign = attributes.buttonAlign,
        buttonText = attributes.buttonText,
        buttonFontsize = attributes.buttonFontsize,
        buttonFontFamily = attributes.buttonFontFamily,
        buttonFontWeight = attributes.buttonFontWeight,
        buttonTextColor = attributes.buttonTextColor,
        buttonBgColor = attributes.buttonBgColor,
        buttonHovertxtColor = attributes.buttonHovertxtColor,
        buttonHoverBgColor = attributes.buttonHoverBgColor,
        buttonBorderWidth = attributes.buttonBorderWidth,
        buttonBorderStyle = attributes.buttonBorderStyle,
        buttonBorderColor = attributes.buttonBorderColor,
        buttonBorderRadius = attributes.buttonBorderRadius,
        buttonPaddingTop = attributes.buttonPaddingTop,
        buttonPaddingRight = attributes.buttonPaddingRight,
        buttonPaddingBottom = attributes.buttonPaddingBottom,
        buttonPaddingLeft = attributes.buttonPaddingLeft,
        buttonMarginTop = attributes.buttonMarginTop,
        buttonMarginRight = attributes.buttonMarginRight,
        buttonMarginBottom = attributes.buttonMarginBottom,
        buttonMarginLeft = attributes.buttonMarginLeft,
        buttonlink_text = attributes.buttonlink_text,
        buttonlink_url = attributes.buttonlink_url;


    setAttributes({ blockId: clientId });

    var onChangeTextColor = function onChangeTextColor(newTextColor) {
      setAttributes({ buttonTextColor: newTextColor });
    };

    var onChangeBgColor = function onChangeBgColor(newBgColor) {
      setAttributes({ buttonBgColor: newBgColor });
    };

    var onChangeHvrtxtColor = function onChangeHvrtxtColor(newhvrTextColor) {
      setAttributes({ buttonHovertxtColor: newhvrTextColor });
    };

    var onChangeHvrBgColor = function onChangeHvrBgColor(newhvrBgColor) {
      setAttributes({ buttonHoverBgColor: newhvrBgColor });
    };

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorControls,
        null,
        wp.element.createElement(
          PanelBody,
          {
            title: __("Button Typography", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(TextControl, {
            label: __("Button FontSize", "wp-learning"),
            value: buttonFontsize,
            onChange: function onChange(buttonFontsize) {
              setAttributes({ buttonFontsize: parseInt(buttonFontsize) });
            }
          }),
          wp.element.createElement(SelectControl, {
            label: __("Button Font Family", "wp-learning"),
            value: buttonFontFamily,
            options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }],
            onChange: function onChange(newval) {
              return setAttributes({ buttonFontFamily: newval });
            }
          }),
          wp.element.createElement(SelectControl, {
            label: __("Button Font Weight", "wp-learning"),
            value: buttonFontWeight,
            options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }],
            onChange: function onChange(buttonFontWeight) {
              setAttributes({ buttonFontWeight: parseInt(buttonFontWeight) });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("button color setting", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(PanelColorSettings
          // title={ __( 'Button text color', 'wp-learning' ) }
          // initialOpen={ false }
          , { colorSettings: [{
              value: buttonTextColor,
              onChange: onChangeTextColor,
              label: __("Text color", "wp-learning")
            }, {
              value: buttonBgColor,
              onChange: onChangeBgColor,
              label: __("Background color", "wp-learning")
            }, {
              value: buttonHovertxtColor,
              onChange: onChangeHvrtxtColor,
              label: __("Text Hover color", "wp-learning")
            }, {
              value: buttonHoverBgColor,
              onChange: onChangeHvrBgColor,
              label: __("Background Hover color", "wp-learning")
            }]
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Button Border", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(TextControl, {
            label: __("Button Border width (in px)", "wp-learning"),
            value: buttonBorderWidth,
            onChange: function onChange(buttonBorderWidth) {
              setAttributes({
                buttonBorderWidth: parseInt(buttonBorderWidth)
              });
            }
          }),
          wp.element.createElement(SelectControl, {
            label: __("Button Border style", "wp-learning"),
            value: buttonBorderStyle,
            options: [{ label: "solid", value: "solid" }, { label: "double", value: "double" }, { label: "dotted", value: "dotted" }, { label: "dashed", value: "dashed" }],
            onChange: function onChange(newval) {
              return setAttributes({ buttonBorderStyle: newval });
            }
          }),
          wp.element.createElement(ColorPalette, {
            value: buttonBorderColor,
            onChange: function onChange(buttonBorderColor) {
              setAttributes({
                buttonBorderColor: buttonBorderColor ? buttonBorderColor : "transparent"
              });
            }
          }),
          wp.element.createElement(TextControl, {
            label: __("Button Border Radius (in px)", "wp-learning"),
            value: buttonBorderRadius,
            onChange: function onChange(buttonBorderRadius) {
              setAttributes({
                buttonBorderRadius: parseInt(buttonBorderRadius)
              });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Button padding (in px)", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(
            "div",
            { "class": "row" },
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Top:", "wp-learning"),
                value: buttonPaddingTop,
                onChange: function onChange(buttonPaddingTop) {
                  setAttributes({
                    buttonPaddingTop: parseInt(buttonPaddingTop)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Right:", "wp-learning"),
                value: buttonPaddingRight,
                onChange: function onChange(buttonPaddingRight) {
                  setAttributes({
                    buttonPaddingRight: parseInt(buttonPaddingRight)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Bottom:", "wp-learning"),
                value: buttonPaddingBottom,
                onChange: function onChange(buttonPaddingBottom) {
                  setAttributes({
                    buttonPaddingBottom: parseInt(buttonPaddingBottom)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Left:", "wp-learning"),
                value: buttonPaddingLeft,
                onChange: function onChange(buttonPaddingLeft) {
                  setAttributes({
                    buttonPaddingLeft: parseInt(buttonPaddingLeft)
                  });
                }
              })
            )
          )
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Button margin (in px)", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(
            "div",
            { "class": "row" },
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Top:", "wp-learning"),
                value: buttonMarginTop,
                onChange: function onChange(buttonMarginTop) {
                  setAttributes({
                    buttonMarginTop: parseInt(buttonMarginTop)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Right:", "wp-learning"),
                value: buttonMarginRight,
                onChange: function onChange(buttonMarginRight) {
                  setAttributes({
                    buttonMarginRight: parseInt(buttonMarginRight)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Bottom:", "wp-learning"),
                value: buttonMarginBottom,
                onChange: function onChange(buttonMarginBottom) {
                  setAttributes({
                    buttonMarginBottom: parseInt(buttonMarginBottom)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { "class": "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Left:", "wp-learning"),
                value: buttonMarginLeft,
                onChange: function onChange(buttonMarginLeft) {
                  setAttributes({
                    buttonMarginLeft: parseInt(buttonMarginLeft)
                  });
                }
              })
            )
          )
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Button link settings", "wp-learning"),
            initialOpen: false
          },
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
        { "class": "wplearning-btn" },
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
          "\n               #block-" + blockId + " {\n                 width: 100%;\n                text-align: " + buttonAlign + ";\n                font-size:" + buttonFontsize + "px;\n                font-family:" + buttonFontFamily + ";\n                font-weight:" + buttonFontWeight + ";\n              }\n               #block-" + blockId + " a { \n                color:" + buttonTextColor + ";\n                background-color:" + buttonBgColor + ";\n                border:" + buttonBorderWidth + "px " + buttonBorderStyle + " " + buttonBorderColor + ";\n                border-radius: " + buttonBorderRadius + "px;\n                padding: " + buttonPaddingTop + "px " + buttonPaddingRight + "px " + buttonPaddingBottom + "px " + buttonPaddingLeft + "px;\n                margin: " + buttonMarginTop + "px " + buttonMarginRight + "px " + buttonMarginBottom + "px " + buttonMarginLeft + "px;\n               }\n               \n               #block-" + blockId + " a:hover { \n                color:" + buttonHovertxtColor + ";\n                background-color:" + buttonHoverBgColor + ";\n               }\n              \n             "
        )
      )
    );
  },
  // The output on the live site
  save: function save(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var blockId = attributes.blockId,
        buttonAlign = attributes.buttonAlign,
        buttonText = attributes.buttonText,
        buttonFontsize = attributes.buttonFontsize,
        buttonFontFamily = attributes.buttonFontFamily,
        buttonFontWeight = attributes.buttonFontWeight,
        buttonTextColor = attributes.buttonTextColor,
        buttonBgColor = attributes.buttonBgColor,
        buttonHovertxtColor = attributes.buttonHovertxtColor,
        buttonHoverBgColor = attributes.buttonHoverBgColor,
        buttonBorderWidth = attributes.buttonBorderWidth,
        buttonBorderStyle = attributes.buttonBorderStyle,
        buttonBorderColor = attributes.buttonBorderColor,
        buttonBorderRadius = attributes.buttonBorderRadius,
        buttonPaddingTop = attributes.buttonPaddingTop,
        buttonPaddingRight = attributes.buttonPaddingRight,
        buttonPaddingBottom = attributes.buttonPaddingBottom,
        buttonPaddingLeft = attributes.buttonPaddingLeft,
        buttonMarginTop = attributes.buttonMarginTop,
        buttonMarginRight = attributes.buttonMarginRight,
        buttonMarginBottom = attributes.buttonMarginBottom,
        buttonMarginLeft = attributes.buttonMarginLeft,
        buttonlink_url = attributes.buttonlink_url;


    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        "div",
        { id: "wp-learning-" + blockId, className: "wp-learning-btn-front" },
        wp.element.createElement(
          "a",
          { href: buttonlink_url, className: "wp_learning_btn" },
          buttonText
        ),
        wp.element.createElement(
          "style",
          null,
          "\n             #wp-learning-" + blockId + " .wp_learning_btn{ \n               font-size:" + buttonFontsize + "px;\n               text-align: " + buttonAlign + "\n               font-family:" + buttonFontFamily + ";\n               font-weight:" + buttonFontWeight + ";\n               color:" + buttonTextColor + ";\n               background-color:" + buttonBgColor + ";\n               border:" + buttonBorderWidth + "px " + buttonBorderStyle + " " + buttonBorderColor + ";\n               border-radius: " + buttonBorderRadius + "px;\n               padding: " + buttonPaddingTop + "px " + buttonPaddingRight + "px " + buttonPaddingBottom + "px " + buttonPaddingLeft + "px;\n               margin: " + buttonMarginTop + "px " + buttonMarginRight + "px " + buttonMarginBottom + "px " + buttonMarginLeft + "px;\n              }\n             #wp-learning-" + blockId + " .wp_learning_btn:hover { \n               color:" + buttonHovertxtColor + ";\n               background-color:" + buttonHoverBgColor + ";\n              }\n  \n           "
        )
      )
    );
  }
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

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
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
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
    ResponsiveWrapper = _wp$components.ResponsiveWrapper,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl;


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
    bannerPaddingTop: {
      type: "number",
      default: 0
    },
    bannerPaddingRight: {
      type: "number",
      default: 0
    },
    bannerPaddingBottom: {
      type: "number",
      default: 0
    },
    bannerPaddingLeft: {
      type: "number",
      default: 0
    },
    banner_bg_size: {
      type: "string",
      default: "cover"
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
      type: "number",
      default: 20
    },
    bannerDescFontsize: {
      type: "number",
      default: 16
    },
    bannerTitleFontWeight: {
      type: "number",
      default: 300
    },
    bannerDescFontWeight: {
      type: "number",
      default: 400
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

  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId;
    var blockId = attributes.blockId,
        mediaId = attributes.mediaId,
        mediaUrl = attributes.mediaUrl,
        bannerPaddingTop = attributes.bannerPaddingTop,
        bannerPaddingRight = attributes.bannerPaddingRight,
        bannerPaddingBottom = attributes.bannerPaddingBottom,
        bannerPaddingLeft = attributes.bannerPaddingLeft,
        banner_bg_size = attributes.banner_bg_size,
        banner_bg_repeat = attributes.banner_bg_repeat,
        contentAlign = attributes.contentAlign,
        BannerTitleColor = attributes.BannerTitleColor,
        BannerDescColor = attributes.BannerDescColor,
        bannerTitleFontsize = attributes.bannerTitleFontsize,
        bannerDescFontsize = attributes.bannerDescFontsize,
        bannerTitleFontWeight = attributes.bannerTitleFontWeight,
        bannerDescFontWeight = attributes.bannerDescFontWeight,
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

    var removeMedia = function removeMedia() {
      props.setAttributes({
        mediaId: 0,
        mediaUrl: ''
      });
    };

    var onSelectMedia = function onSelectMedia(media) {
      props.setAttributes({
        mediaId: media.id,
        mediaUrl: media.url
      });
    };

    //linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("");

    var blockStyle = {
      background: bannerImgOverlay !== false ? "linear-gradient(" + imgOverlayDegree + "deg, rgba(" + imgOverlayBot_r + "," + imgOverlayBot_g + "," + imgOverlayBot_b + "," + imgOverlayBot_a + "), rgba(" + imgOverlayTop_r + "," + imgOverlayTop_g + "," + imgOverlayTop_b + "," + imgOverlayTop_a + ")), url(\"" + mediaUrl + "\")" : "url(\"" + mediaUrl + "\")",

      'background-size': banner_bg_size,
      'background-repeat': banner_bg_repeat,
      padding: bannerPaddingTop + 'px ' + bannerPaddingRight + 'px ' + bannerPaddingBottom + 'px ' + bannerPaddingLeft + 'px',
      'text-align': contentAlign
    };

    if (mediaUrl == '') {
      blockStyle.background = BannerBgColor;
      delete blockStyle["background-size"];
      delete blockStyle["background-repeat"];
    }

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorControls,
        null,
        wp.element.createElement(
          PanelBody,
          { title: __("Banner Background Color", "wp-learning"), initialOpen: false },
          wp.element.createElement(
            "div",
            { className: "row-panel image-overlay-setting" },
            wp.element.createElement(
              "label",
              { className: "row-panel-label" },
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
          { title: __("Banner Background Image", "wp-learning"), initialOpen: false },
          wp.element.createElement(
            "div",
            { className: "editor-post-featured-image" },
            wp.element.createElement(
              MediaUploadCheck,
              null,
              wp.element.createElement(MediaUpload, {
                onSelect: onSelectMedia,
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
                      "p",
                      null,
                      wp.element.createElement("img", { src: mediaUrl })
                    )
                  );
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "row row-panel" },
              wp.element.createElement(
                "div",
                { className: "col-50" },
                mediaId != 0 && wp.element.createElement(
                  MediaUploadCheck,
                  null,
                  wp.element.createElement(MediaUpload, {
                    title: __('Replace image', 'wp-learning'),
                    value: mediaId,
                    onSelect: onSelectMedia,
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
                "div",
                { className: "col-50" },
                mediaId != 0 && wp.element.createElement(
                  MediaUploadCheck,
                  null,
                  wp.element.createElement(
                    Button,
                    { onClick: removeMedia, isLink: true, isDestructive: true },
                    __('Remove image', 'wp-learning')
                  )
                )
              )
            )
          ),
          mediaId !== 0 && wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(ToggleControl, {
              label: "Image Overlay?",
              help: bannerImgOverlay ? "Yes" : "No",
              checked: bannerImgOverlay,
              onChange: function onChange() {
                return setAttributes({ bannerImgOverlay: !bannerImgOverlay });
              }
            }),
            bannerImgOverlay !== false && wp.element.createElement(
              "div",
              null,
              wp.element.createElement(
                "div",
                { className: "row" },
                wp.element.createElement(
                  "label",
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
                "div",
                { className: "row-panel image-overlay-setting" },
                wp.element.createElement(
                  "label",
                  { className: "row-panel-label" },
                  __('rgba Top:', 'wp-learning')
                ),
                wp.element.createElement(
                  "div",
                  { className: "row" },
                  wp.element.createElement(
                    "div",
                    { "class": "col-25" },
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
                    "div",
                    { "class": "col-25" },
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
                    "div",
                    { "class": "col-25" },
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
                    "div",
                    { "class": "col-25" },
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
                "div",
                { className: "row-panel image-overlay-setting" },
                wp.element.createElement(
                  "label",
                  { className: "row-panel-label" },
                  __('rgba Bottom:', 'wp-learning')
                ),
                wp.element.createElement(
                  "div",
                  { className: "row" },
                  wp.element.createElement(
                    "div",
                    { "class": "col-25" },
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
                    "div",
                    { "class": "col-25" },
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
                    "div",
                    { "class": "col-25" },
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
                    "div",
                    { "class": "col-25" },
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
            "div",
            { className: "row-panel" },
            wp.element.createElement(SelectControl, {
              label: __("Banner background size", "wp-learning"),
              value: banner_bg_size,
              options: [{ label: "auto", value: "auto" }, { label: "cover", value: "cover" }, { label: "contain", value: "contain" }],
              onChange: function onChange(newval) {
                return setAttributes({ banner_bg_size: newval });
              }
            })
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(SelectControl, {
              label: __("Banner background repeat", "wp-learning"),
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
          { title: __("Banner padding", "wp-learning"), initialOpen: false },
          wp.element.createElement(
            "div",
            { className: "row" },
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("T:", "wp-learning"),
                value: bannerPaddingTop,
                onChange: function onChange(bannerPaddingTop) {
                  setAttributes({
                    bannerPaddingTop: parseInt(bannerPaddingTop)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("R", "wp-learning"),
                value: bannerPaddingRight,
                onChange: function onChange(bannerPaddingRight) {
                  setAttributes({
                    bannerPaddingRight: parseInt(bannerPaddingRight)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("B", "wp-learning"),
                value: bannerPaddingBottom,
                onChange: function onChange(bannerPaddingBottom) {
                  setAttributes({
                    bannerPaddingBottom: parseInt(bannerPaddingBottom)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("L", "wp-learning"),
                value: bannerPaddingLeft,
                onChange: function onChange(bannerPaddingLeft) {
                  setAttributes({
                    bannerPaddingLeft: parseInt(bannerPaddingLeft)
                  });
                }
              })
            )
          )
        ),
        wp.element.createElement(
          PanelBody,
          { title: __("Banner content setting", "wp-learning"), initialOpen: false },
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(
              "label",
              { className: "row-panel-label" },
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
            "div",
            { className: "row-panel" },
            wp.element.createElement(
              "label",
              { className: "row-panel-label" },
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
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(TextControl, {
              label: __("Banner title font size", "wp-learning"),
              value: bannerTitleFontsize,
              onChange: function onChange(bannerTitleFontsize) {
                setAttributes({
                  bannerTitleFontsize: parseInt(bannerTitleFontsize)
                });
              }
            })
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(TextControl, {
              label: __("Banner description font size", "wp-learning"),
              value: bannerDescFontsize,
              onChange: function onChange(bannerDescFontsize) {
                setAttributes({
                  bannerDescFontsize: parseInt(bannerDescFontsize)
                });
              }
            })
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(SelectControl, {
              label: __("Banner Title Font Weight", "wp-learning"),
              value: bannerTitleFontWeight,
              options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }],
              onChange: function onChange(bannerTitleFontWeight) {
                setAttributes({ bannerTitleFontWeight: parseInt(bannerTitleFontWeight) });
              }
            })
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(SelectControl, {
              label: __("Banner Description Font Weight", "wp-learning"),
              value: bannerDescFontWeight,
              options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }],
              onChange: function onChange(bannerDescFontWeight) {
                setAttributes({ bannerDescFontWeight: parseInt(bannerDescFontWeight) });
              }
            })
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
        { className: "banner-content-block", style: blockStyle },
        wp.element.createElement(RichText, {
          tagName: "h1",
          onChange: function onChange(value) {
            return setAttributes({ banner_heading: value });
          },
          allowedFormats: ["core/bold", "core/italic"],
          value: attributes.banner_heading,
          placeholder: __("Write your heading..."),
          className: "banner-heading"
        }),
        wp.element.createElement(RichText, {
          tagName: "p",
          onChange: function onChange(value) {
            return setAttributes({ banner_para: value });
          },
          allowedFormats: ["core/bold", "core/italic"],
          value: attributes.banner_para,
          placeholder: __("Write your text..."),
          className: "banner-desc"
        }),
        wp.element.createElement(InnerBlocks, { template: [['wp-learning/button-block']] })
      ),
      wp.element.createElement(
        "style",
        null,
        "\n                  #block-" + blockId + " .banner-content-block h1{\n                    color: " + BannerTitleColor + ";\n                    font-size: " + bannerTitleFontsize + "px;\n                    font-weight: " + bannerTitleFontWeight + ";\n                  }\n                  #block-" + blockId + " .banner-content-block p{\n                    color: " + BannerDescColor + ";\n                    font-size: " + bannerDescFontsize + "px;\n                    font-weight: " + bannerDescFontWeight + ";\n                  }\n                  \n              "
      )
    );
  },
  save: function save(props) {
    var attributes = props.attributes,
        clientId = props.clientId;
    var blockId = attributes.blockId,
        mediaUrl = attributes.mediaUrl,
        bannerPaddingTop = attributes.bannerPaddingTop,
        bannerPaddingRight = attributes.bannerPaddingRight,
        bannerPaddingBottom = attributes.bannerPaddingBottom,
        bannerPaddingLeft = attributes.bannerPaddingLeft,
        banner_bg_size = attributes.banner_bg_size,
        banner_bg_repeat = attributes.banner_bg_repeat,
        contentAlign = attributes.contentAlign,
        BannerTitleColor = attributes.BannerTitleColor,
        BannerDescColor = attributes.BannerDescColor,
        bannerTitleFontsize = attributes.bannerTitleFontsize,
        bannerDescFontsize = attributes.bannerDescFontsize,
        bannerTitleFontWeight = attributes.bannerTitleFontWeight,
        bannerDescFontWeight = attributes.bannerDescFontWeight,
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
      background: bannerImgOverlay !== false ? "linear-gradient(" + imgOverlayDegree + "deg, rgba(" + imgOverlayTop_r + "," + imgOverlayTop_g + "," + imgOverlayTop_b + "," + imgOverlayTop_a + "), rgba(" + imgOverlayBot_r + "," + imgOverlayBot_g + "," + imgOverlayBot_b + "," + imgOverlayBot_a + ")), url(\"" + mediaUrl + "\")" : "url(\"" + mediaUrl + "\")",

      'background-size': banner_bg_size,
      'background-repeat': banner_bg_repeat,
      padding: bannerPaddingTop + 'px ' + bannerPaddingRight + 'px ' + bannerPaddingBottom + 'px ' + bannerPaddingLeft + 'px',
      'text-align': contentAlign
    };

    if (mediaUrl == '') {
      blockStyle.background = BannerBgColor;
      delete blockStyle["background-size"];
      delete blockStyle["background-repeat"];
    }

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        "div",
        { id: "wp-learning-" + blockId, className: "banner-content-block", style: blockStyle },
        wp.element.createElement(RichText.Content, {
          tagName: "h1",
          value: attributes.banner_heading,
          placeholder: __("Write your heading..."),
          className: "banner-heading"
        }),
        wp.element.createElement(RichText.Content, {
          tagName: "p",
          value: attributes.banner_para,
          placeholder: __("Write your text..."),
          className: "banner-para"
        }),
        wp.element.createElement(InnerBlocks.Content, { template: [['wp-learning/button-block']] })
      ),
      wp.element.createElement(
        "style",
        null,
        "\n                  #wp-learning-" + blockId + " .banner-content-block h1{\n                    color: " + BannerTitleColor + ";\n                    font-size: " + bannerTitleFontsize + "px;\n                    font-weight: " + bannerTitleFontWeight + ";\n                  }\n                  #wp-learning-" + blockId + " .banner-content-block p{\n                    color: " + BannerDescColor + ";\n                    font-size: " + bannerDescFontsize + "px;\n                    font-weight: " + bannerDescFontWeight + ";\n                  }\n                  \n              "
      )
    );
  }
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_icons__ = __webpack_require__(0);
/**
 *  BLOCK: About
 *  ---
 *
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var Fragment = wp.element.Fragment;
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
    ToolbarDropdownMenu = _wp$components.ToolbarDropdownMenu,
    Button = _wp$components.Button;




registerBlockType("wp-learning/about-block", {
  title: __("About"),
  icon: "format-aside",
  category: "my-custom-block",
  keywords: [__("about"), __("details")],
  // Enable or disable support for low-level features
  supports: {
    align: ["full"]
  },
  // Set up data model for custom block
  attributes: {
    aboutVerticleAlign: {
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
    aboutContentPaddTop: {
      type: "number",
      default: 0
    },
    aboutContentPaddRight: {
      type: "number",
      default: 0
    },
    aboutContentPaddBottom: {
      type: "number",
      default: 0
    },
    aboutContentPaddLeft: {
      type: "number",
      default: 0
    },
    about_title: {
      type: "string",
      default: ""
    },
    about_para: {
      type: "string",
      default: ""
    },
    aboutTitleColor: {
      type: "string",
      default: ""
    },
    aboutDescColor: {
      type: "string",
      default: ""
    },
    aboutTitleFontsize: {
      type: "number",
      default: 20
    },
    aboutDescFontsize: {
      type: "number",
      default: 16
    },
    aboutTitleFontWeight: {
      type: "number",
      default: 400
    },
    aboutDescFontWeight: {
      type: "number",
      default: 400
    },
    aboutContentAlign: {
      type: "string",
      default: ""
    }
  },
  // The UI for the WordPress editor
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId,
        className = props.className;
    var blockId = attributes.blockId,
        aboutVerticleAlign = attributes.aboutVerticleAlign,
        mediaId = attributes.mediaId,
        mediaUrl = attributes.mediaUrl,
        about_title = attributes.about_title,
        about_para = attributes.about_para,
        opposite_column_order = attributes.opposite_column_order,
        aboutContentPaddTop = attributes.aboutContentPaddTop,
        aboutContentPaddRight = attributes.aboutContentPaddRight,
        aboutContentPaddBottom = attributes.aboutContentPaddBottom,
        aboutContentPaddLeft = attributes.aboutContentPaddLeft,
        aboutTitleColor = attributes.aboutTitleColor,
        aboutDescColor = attributes.aboutDescColor,
        aboutTitleFontsize = attributes.aboutTitleFontsize,
        aboutDescFontsize = attributes.aboutDescFontsize,
        aboutTitleFontWeight = attributes.aboutTitleFontWeight,
        aboutDescFontWeight = attributes.aboutDescFontWeight,
        aboutContentAlign = attributes.aboutContentAlign;


    setAttributes({ blockId: clientId });

    var blockStyle = {};
    var blockContentStyle = {};

    (function (aboutVerticleAlign) {
      if (aboutVerticleAlign !== '') {
        return blockStyle = {
          "align-items": aboutVerticleAlign
        };
      }
    })(aboutVerticleAlign);

    (function (pt, pb, pr, pl, align) {
      if (pt !== 0 || pb !== 0 || pr !== 0 || pl !== 0) {
        blockContentStyle["padding"] = aboutContentPaddTop + "px " + aboutContentPaddRight + "px " + aboutContentPaddBottom + "px " + aboutContentPaddLeft + "px";
      }
      if (align !== '') {
        blockContentStyle["text-align"] = align;
      }
    })(aboutContentPaddTop, aboutContentPaddRight, aboutContentPaddBottom, aboutContentPaddLeft, aboutContentAlign);

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        InspectorControls,
        null,
        wp.element.createElement(
          PanelBody,
          {
            title: __("Content Alignment (Verticle)", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(SelectControl, {
            value: aboutVerticleAlign,
            options: [{
              label: "flex-start", value: "flex-start"
            }, { label: "center", value: "center" }, { label: "flex-end", value: "flex-end" }],
            onChange: function onChange(newval) {
              return setAttributes({ aboutVerticleAlign: newval });
            }
          })
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Spacings", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(
            "div",
            { className: "row" },
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Top:", "wp-learning"),
                value: aboutContentPaddTop,
                onChange: function onChange(aboutContentPaddTop) {
                  setAttributes({
                    aboutContentPaddTop: parseInt(aboutContentPaddTop)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Right", "wp-learning"),
                value: aboutContentPaddRight,
                onChange: function onChange(aboutContentPaddRight) {
                  setAttributes({
                    aboutContentPaddRight: parseInt(aboutContentPaddRight)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Bottom", "wp-learning"),
                value: aboutContentPaddBottom,
                onChange: function onChange(aboutContentPaddBottom) {
                  setAttributes({
                    aboutContentPaddBottom: parseInt(aboutContentPaddBottom)
                  });
                }
              })
            ),
            wp.element.createElement(
              "div",
              { className: "col-25" },
              wp.element.createElement(TextControl, {
                label: __("Left", "wp-learning"),
                value: aboutContentPaddLeft,
                onChange: function onChange(aboutContentPaddLeft) {
                  setAttributes({
                    aboutContentPaddLeft: parseInt(aboutContentPaddLeft)
                  });
                }
              })
            )
          )
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Text Color Settings", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(
              "label",
              { className: "row-panel-label" },
              __("Title Text color", "wp-learning")
            ),
            wp.element.createElement(ColorPalette, {
              value: aboutTitleColor,
              onChange: function onChange(aboutTitleColor) {
                setAttributes({
                  aboutTitleColor: aboutTitleColor ? aboutTitleColor : "#000000"
                });
              }
            }),
            wp.element.createElement(
              "label",
              { className: "row-panel-label" },
              __("Description Text color", "wp-learning")
            ),
            wp.element.createElement(ColorPalette, {
              value: aboutDescColor,
              onChange: function onChange(aboutDescColor) {
                setAttributes({
                  aboutDescColor: aboutDescColor ? aboutDescColor : "#000000"
                });
              }
            })
          )
        ),
        wp.element.createElement(
          PanelBody,
          {
            title: __("Typography Settings", "wp-learning"),
            initialOpen: false
          },
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(TextControl, {
              label: __("Title Font size", "wp-learning"),
              value: aboutTitleFontsize,
              onChange: function onChange(aboutTitleFontsize) {
                setAttributes({
                  aboutTitleFontsize: parseInt(aboutTitleFontsize)
                });
              }
            })
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(TextControl, {
              label: __("Description Font size", "wp-learning"),
              value: aboutDescFontsize,
              onChange: function onChange(aboutDescFontsize) {
                setAttributes({
                  aboutDescFontsize: parseInt(aboutDescFontsize)
                });
              }
            })
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(SelectControl, {
              label: __("Title Font Weight", "wp-learning"),
              value: aboutTitleFontWeight,
              options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }],
              onChange: function onChange(aboutTitleFontWeight) {
                setAttributes({
                  aboutTitleFontWeight: parseInt(aboutTitleFontWeight)
                });
              }
            })
          ),
          wp.element.createElement(
            "div",
            { className: "row-panel" },
            wp.element.createElement(SelectControl, {
              label: __("Description Font Weight", "wp-learning"),
              value: aboutDescFontWeight,
              options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }]
              //onChange={(newval) => setAttributes({ aboutDescFontWeight: newval })}
              , onChange: function onChange(aboutDescFontWeight) {
                setAttributes({
                  aboutDescFontWeight: parseInt(aboutDescFontWeight)
                });
              }
            })
          )
        )
      ),
      wp.element.createElement(
        BlockControls,
        null,
        wp.element.createElement(AlignmentControl, {
          value: aboutContentAlign,
          onChange: function onChange(newalign) {
            return setAttributes({ aboutContentAlign: newalign });
          }
        }),
        wp.element.createElement(
          ToolbarGroup,
          null,
          wp.element.createElement(Button, {
            label: "flip Column",
            icon: __WEBPACK_IMPORTED_MODULE_0__custom_icons__["b" /* Flip */],
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
        {
          style: blockStyle,
          className: className + " row " + opposite_column_order
        },
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
                      __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["a" /* Edit */], "wp-learning")
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
                    { onClick: function onClick() {
                        setAttributes({
                          mediaId: 0,
                          mediaUrl: ""
                        });
                      } },
                    __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["c" /* Remove */], "wp-learning")
                  )
                )
              )
            )
          )
        ),
        wp.element.createElement(
          "div",
          { className: "col-50 content", style: blockContentStyle },
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
        )
      ),
      wp.element.createElement(
        "style",
        null,
        "\n\n                #block-" + blockId + " .content h2{\n                  color: " + aboutTitleColor + ";\n                  font-size: " + aboutTitleFontsize + "px;\n                  font-weight: " + aboutTitleFontWeight + ";\n                }\n                #block-" + blockId + " .content p{\n                  color: " + aboutDescColor + ";\n                  font-size: " + aboutDescFontsize + "px;\n                  font-weight: " + aboutDescFontWeight + ";\n                }\n                 \n               "
      )
    );
  },
  // The output on the live site
  save: function save(props) {
    var attributes = props.attributes,
        clientId = props.clientId,
        className = props.className;
    var blockId = attributes.blockId,
        aboutVerticleAlign = attributes.aboutVerticleAlign,
        mediaUrl = attributes.mediaUrl,
        about_title = attributes.about_title,
        about_para = attributes.about_para,
        opposite_column_order = attributes.opposite_column_order,
        aboutContentPaddTop = attributes.aboutContentPaddTop,
        aboutContentPaddRight = attributes.aboutContentPaddRight,
        aboutContentPaddBottom = attributes.aboutContentPaddBottom,
        aboutContentPaddLeft = attributes.aboutContentPaddLeft,
        aboutTitleColor = attributes.aboutTitleColor,
        aboutDescColor = attributes.aboutDescColor,
        aboutTitleFontsize = attributes.aboutTitleFontsize,
        aboutDescFontsize = attributes.aboutDescFontsize,
        aboutTitleFontWeight = attributes.aboutTitleFontWeight,
        aboutDescFontWeight = attributes.aboutDescFontWeight,
        aboutContentAlign = attributes.aboutContentAlign;


    var blockStyle = {
      "align-item": aboutVerticleAlign
    };

    var blockContentStyle = {
      padding: aboutContentPaddTop + "px " + aboutContentPaddRight + "px " + aboutContentPaddBottom + "px " + aboutContentPaddLeft + "px",
      "text-align": aboutContentAlign
    };
    var blockContentTitleStyle = {
      color: aboutTitleColor,
      "font-size": aboutTitleFontsize + "px",
      "font-weight": aboutTitleFontWeight
    };
    var blockContentDescStyle = {
      color: aboutDescColor,
      "font-size": aboutDescFontsize + "px",
      "font-weight": aboutDescFontWeight
    };

    return wp.element.createElement(
      Fragment,
      null,
      wp.element.createElement(
        "div",
        {
          className: "wp-block-wp-learning-about-block row " + opposite_column_order,
          style: blockStyle
        },
        wp.element.createElement(
          "div",
          { className: "col-50 media" },
          wp.element.createElement("img", { src: mediaUrl })
        ),
        wp.element.createElement(
          "div",
          { className: "col-50 content", style: blockContentStyle },
          wp.element.createElement(RichText.Content, {
            tagName: "h2",
            allowedFormats: ["core/bold", "core/italic"],
            value: about_title,
            placeholder: __("Write your Title..."),
            className: "about-heading",
            style: blockContentTitleStyle
          }),
          wp.element.createElement(RichText.Content, {
            tagName: "p",
            allowedFormats: ["core/bold", "core/italic"],
            value: about_para,
            placeholder: __("Write your text..."),
            className: "about-desc",
            style: blockContentDescStyle
          })
        )
      ),
      wp.element.createElement(
        "style",
        null,
        "\n\n                .wp-block-wp-learning-about-block .content h2{\n                  color: " + aboutTitleColor + ";\n                  font-size: " + aboutTitleFontsize + "px;\n                  font-weight: " + aboutTitleFontWeight + ";\n                }\n                .wp-block-wp-learning-about-block .content p{\n                  color: " + aboutDescColor + ";\n                  font-size: " + aboutDescFontsize + "px;\n                  font-weight: " + aboutDescFontWeight + ";\n                }\n                 \n               "
      )
    );
  }
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(7);
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
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck,
    ColorPalette = _wp$blockEditor.ColorPalette,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentControl = _wp$blockEditor.AlignmentControl,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl;


registerBlockType('wp-learning/service-block', {
    title: __('service'),
    icon: 'format-aside',
    category: 'my-custom-block',
    keywords: [__('service')],
    parent: ['wp-learning/services-block', 'wp-learning/container-block'],
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
    // The UI for the WordPress editor
    edit: function edit(props) {
        var attributes = props.attributes,
            setAttributes = props.setAttributes,
            clientId = props.clientId,
            className = props.className;
        var blockId = attributes.blockId,
            mediaId = attributes.mediaId,
            mediaUrl = attributes.mediaUrl,
            service_mediaId = attributes.service_mediaId,
            service_mediaUrl = attributes.service_mediaUrl,
            service_mediaAlt = attributes.service_mediaAlt,
            service_title = attributes.service_title,
            service_para = attributes.service_para;


        setAttributes({ blockId: clientId });

        // const onUpdateImage = ( img ) => {
        //     props.setAttributes({
        //         service_mediaUrl: img.url,
        //         service_mediaId: img.id,
        //         service_mediaAlt: img.alt,
        //     });
        //  };

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
    // The output on the live site
    save: function save(props) {
        var attributes = props.attributes,
            clientId = props.clientId;
        var blockId = attributes.blockId,
            mediaId = attributes.mediaId,
            mediaUrl = attributes.mediaUrl,
            service_mediaId = attributes.service_mediaId,
            service_mediaUrl = attributes.service_mediaUrl,
            service_mediaAlt = attributes.service_mediaAlt,
            service_title = attributes.service_title,
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

    // The UI for the WordPress editor
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
    // The output on the live site
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
/* 7 */
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__custom_icons__ = __webpack_require__(0);
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
    Fragment = _wp$element.Fragment,
    useState = _wp$element.useState;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    BlockControls = _wp$blockEditor.BlockControls,
    AlignmentControl = _wp$blockEditor.AlignmentControl,
    RichText = _wp$blockEditor.RichText,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    MediaUpload = _wp$blockEditor.MediaUpload,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    ToolbarGroup = _wp$components.ToolbarGroup,
    RangeControl = _wp$components.RangeControl,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip;




var edit = function (_Component) {
  _inherits(edit, _Component);

  function edit(props) {
    _classCallCheck(this, edit);

    var _this = _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).call(this, props));

    _this.addNewFeature = _this.addNewFeature.bind(_this);
    _this.state = {
      count: 1
    };
    console.log("call");
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
          feature_mediaUrl: ""
        }])
      });
    }
  }, {
    key: "addNewFeature",
    value: function addNewFeature() {
      //this.setState({count: this.state.count + 1});
      var _props3 = this.props,
          setAttributes = _props3.setAttributes,
          attributes = _props3.attributes;
      var featureContentArray = attributes.featureContentArray;

      var objAddNewFeature = {
        index: featureContentArray.length,
        feature_title: "",
        feature_para: "",
        feature_mediaId: "",
        feature_mediaUrl: ""
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
          clientId = _props5.clientId;
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


      console.log("render");

      setAttributes({ blockId: clientId });

      var blockStyle = {
        "text-align": contentAlign
      };

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
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["d" /* left */]
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
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["g" /* right */]
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
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["f" /* remove */]
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
                        __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["a" /* Edit */], "wp-learning")
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
                      __(__WEBPACK_IMPORTED_MODULE_0__custom_icons__["c" /* Remove */], "wp-learning")
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
          })
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
            {
              title: __("Outer Feature block columns", "wp-learning"),
              initialOpen: false
            },
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
            {
              title: __("Text Color Settings", "wp-learning"),
              initialOpen: false
            },
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
                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }],
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
                    label: __("Font size", "wp-learning"),
                    value: featureTitleFontsize,
                    onChange: function onChange(featureTitleFontsize) {
                      setAttributes({
                        featureTitleFontsize: parseInt(featureTitleFontsize)
                      });
                    }
                  })
                ),
                wp.element.createElement(
                  "div",
                  { className: "col-50" },
                  wp.element.createElement(SelectControl, {
                    label: __("Font Weight", "wp-learning"),
                    value: featureTitleFontWeight,
                    options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }],
                    onChange: function onChange(featureTitleFontWeight) {
                      setAttributes({
                        featureTitleFontWeight: parseInt(featureTitleFontWeight)
                      });
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
                options: [{ label: "Roboto", value: "Roboto" }, { label: "Nautigal", value: "Nautigal" }],
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
                    label: __("Font Size", "wp-learning"),
                    value: featureDescFontsize,
                    onChange: function onChange(featureDescFontsize) {
                      setAttributes({
                        featureDescFontsize: parseInt(featureDescFontsize)
                      });
                    }
                  })
                ),
                wp.element.createElement(
                  "div",
                  { className: "col-50" },
                  wp.element.createElement(SelectControl, {
                    label: __("Font Weight", "wp-learning"),
                    value: featureDescFontWeight,
                    options: [{ label: 300, value: 300 }, { label: 500, value: 500 }, { label: 700, value: 700 }, { label: 900, value: 900 }],
                    onChange: function onChange(featureDescFontWeight) {
                      setAttributes({
                        featureDescFontWeight: parseInt(featureDescFontWeight)
                      });
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
          { className: "features-outer-block has-" + columns + "-columns" },
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
                __WEBPACK_IMPORTED_MODULE_0__custom_icons__["e" /* plus */]
              )
            )
          )
        ),
        wp.element.createElement(
          "style",
          null,
          "\n                #block-" + blockId + " > .has-" + columns + "-columns{\n                    display:flex;\n                    flex-wrap: wrap;\n                }\n                #block-" + blockId + " > .has-" + columns + "-columns > div{\n                    width: calc(100%/" + columns + ");\n                }\n                #block-" + blockId + " .feature-inner-block h1{\n                color: " + featureTitleColor + ";\n                font-size: " + featureTitleFontsize + "px;\n                font-weight: " + featureTitleFontWeight + ";\n                }\n                #block-" + blockId + " .feature-inner-block p{\n                color: " + featureDescColor + ";\n                font-size: " + featureDescFontsize + "px;\n                font-weight: " + featureDescFontWeight + ";\n                }\n               \n            "
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
      type: "number",
      default: 20
    },
    featureDescFontsize: {
      type: "number",
      default: 16
    },
    featureTitleFontWeight: {
      type: "number",
      default: 400
    },
    featureDescFontWeight: {
      type: "number",
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

  save: function save(_ref3) {
    var attributes = _ref3.attributes;
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

    return wp.element.createElement(
      "div",
      null,
      featureContentArray.length > 0 && wp.element.createElement(
        "div",
        { className: "features-outer-block has-" + columns + "-columns" },
        featureContentArray.map(function (data, index) {
          return wp.element.createElement(
            "div",
            {
              id: "wp-learning-" + blockId,
              className: "feature-content-block",
              style: blockStyle
            },
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
            })
          );
        })
      ),
      wp.element.createElement(
        "style",
        null,
        "\n                .features-outer-block h1{\n                    color: " + featureTitleColor + ";\n                    font-size: " + featureTitleFontsize + "px;\n                    font-weight: " + featureTitleFontWeight + ";\n                }\n                .features-outer-block p{\n                color: " + featureDescColor + ";\n                font-size: " + featureDescFontsize + "px;\n                font-weight: " + featureDescFontWeight + ";\n                }\n             "
      )
    ); //save return
  }
} //save
); //registerblocktype

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    TextControl = _wp$components.TextControl,
    TextareaControl = _wp$components.TextareaControl,
    SelectControl = _wp$components.SelectControl,
    Tooltip = _wp$components.Tooltip,
    RangeControl = _wp$components.RangeControl,
    ToggleControl = _wp$components.ToggleControl;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InnerBlocks = _wp$blockEditor.InnerBlocks,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    MediaUploadCheck = _wp$blockEditor.MediaUploadCheck;
//import { Icon } from "../icons";

var edit = function (_Component) {
	_inherits(edit, _Component);

	function edit(props) {
		_classCallCheck(this, edit);

		var _this = _possibleConstructorReturn(this, (edit.__proto__ || Object.getPrototypeOf(edit)).call(this, props));

		_this.addNewItem = _this.addNewItem.bind(_this);
		return _this;
	}

	_createClass(edit, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var attributes = this.props.attributes;
			var contentItem = attributes.contentItem;

			if (0 === contentItem.length) {
				this.initList();
			}

			jQuery(document).on("focus", ".content-list-main .content-list-item .content-item-link", function (e) {
				e.preventDefault();
				jQuery(this).parents(".content-link-popup-wrap").addClass("content-link-popup-active").parents(".content-list-item").siblings().find(".content-link-popup-wrap").removeClass("content-link-popup-active");
			});

			jQuery(document).on("click", ".content-link-popup .close-popup", function (e) {
				jQuery(this).parents(".content-link-popup-wrap").removeClass("content-link-popup-active");
			});
		}
	}, {
		key: "initList",
		value: function initList() {
			var _props = this.props,
			    setAttributes = _props.setAttributes,
			    attributes = _props.attributes;
			var contentItem = attributes.contentItem;

			setAttributes({
				contentItem: [].concat(_toConsumableArray(contentItem), [{
					index: 0,
					contentTitle: '',
					contentDesc: '',
					contentLinkText: '',
					contentLinkURL: '',
					contentLinkTarget: ''
				}, {
					index: 1,
					contentTitle: '',
					contentDesc: '',
					contentLinkText: '',
					contentLinkURL: '',
					contentLinkTarget: ''
				}, {
					index: 2,
					contentTitle: '',
					contentDesc: '',
					contentLinkText: '',
					contentLinkURL: '',
					contentLinkTarget: ''
				}])
			});
		}
	}, {
		key: "addNewItem",
		value: function addNewItem() {
			var _props2 = this.props,
			    setAttributes = _props2.setAttributes,
			    attributes = _props2.attributes;
			var contentItem = attributes.contentItem;

			var attr = {
				index: contentItem.length,
				contentTitle: '',
				contentDesc: '',
				contentLinkText: '',
				contentLinkURL: '',
				contentLinkTarget: ''
			};
			setAttributes({
				contentItem: [].concat(_toConsumableArray(contentItem), [attr])
			});
		}
	}, {
		key: "moveItem",
		value: function moveItem(oldIndex, newIndex) {
			var _props3 = this.props,
			    attributes = _props3.attributes,
			    setAttributes = _props3.setAttributes;
			var contentItem = attributes.contentItem;


			var arrayCopy = [].concat(_toConsumableArray(contentItem));

			arrayCopy[oldIndex] = contentItem[newIndex];
			arrayCopy[newIndex] = contentItem[oldIndex];

			setAttributes({
				contentItem: arrayCopy
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props4 = this.props,
			    attributes = _props4.attributes,
			    setAttributes = _props4.setAttributes,
			    clientId = _props4.clientId;
			var blockID = attributes.blockID,
			    backgroundColor = attributes.backgroundColor,
			    backgroundImage = attributes.backgroundImage,
			    backgroundPosition = attributes.backgroundPosition,
			    title = attributes.title,
			    titleColor = attributes.titleColor,
			    description = attributes.description,
			    descriptionColor = attributes.descriptionColor,
			    contentItem = attributes.contentItem,
			    columnCount = attributes.columnCount,
			    contentBoxBGColor = attributes.contentBoxBGColor,
			    contentTitleColor = attributes.contentTitleColor,
			    contentDescColor = attributes.contentDescColor,
			    contentLinkColor = attributes.contentLinkColor,
			    AddContentLinkIcon = attributes.AddContentLinkIcon,
			    contentLinkIcon = attributes.contentLinkIcon,
			    shadowXOffset = attributes.shadowXOffset,
			    shadowYOffset = attributes.shadowYOffset,
			    shadowBlur = attributes.shadowBlur,
			    shadowSpread = attributes.shadowSpread,
			    shadowColor = attributes.shadowColor,
			    shadowInset = attributes.shadowInset,
			    idScrollFrom = attributes.idScrollFrom,
			    customCSS = attributes.customCSS;

			setAttributes({ blockID: 'content-list-' + clientId });
			var blockCSS = wp.element.createElement(
				"style",
				null,
				"\n\t\t\t\t\t#" + blockID + "{\n\t\t\t\t\t\tbackground-color:" + backgroundColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-inner{\n\t\t\t\t\t\tbox-shadow:" + (shadowInset ? 'inset' : '') + " " + shadowXOffset + "px " + shadowYOffset + "px " + shadowBlur + "px " + shadowSpread + "px " + shadowColor + ";\n\t\t\t\t\t\tbackground-color:" + contentBoxBGColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-list-placeholder{\n\t\t\t\t\t\tbackground-image:url(" + backgroundImage + ");\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-list-title{\n\t\t\t\t\t\tcolor:" + titleColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-list-desc{\n\t\t\t\t\t\tcolor:" + descriptionColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-title{\n\t\t\t\t\t\tcolor:" + contentTitleColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-desc{\n\t\t\t\t\t\tcolor:" + contentDescColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-link{\n\t\t\t\t\t\tcolor:" + contentLinkColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t" + customCSS + "\n\t\t\t\t"
			);

			var contentListItem = contentItem.map(function (data, index) {
				return wp.element.createElement(
					"div",
					{ className: "content-list-item" },
					wp.element.createElement(
						"div",
						{ className: "content-item-inner" },
						wp.element.createElement(
							"div",
							{ className: "item-action-wrap" },
							wp.element.createElement(
								"div",
								{ className: "move-item" },
								0 < index && wp.element.createElement(
									Tooltip,
									{ text: __("Move to Left", "storyful") },
									wp.element.createElement("i", {
										className: "fa fa-arrow-left move-left",
										"aria-hidden": "true",
										onClick: function onClick() {
											return _this2.moveItem(index, index - 1);
										}
									})
								),
								index + 1 < contentItem.length && wp.element.createElement(
									Tooltip,
									{ text: __("Move to Right", "storyful") },
									wp.element.createElement("i", {
										className: "fa fa-arrow-right move-right",
										"aria-hidden": "true",
										onClick: function onClick() {
											return _this2.moveItem(index, index + 1);
										}
									})
								)
							),
							wp.element.createElement(
								Tooltip,
								{ text: __("Remove Item", "storyful") },
								wp.element.createElement("i", { className: "fa fa-times remove-item",
									onClick: function onClick() {
										var updatedArray = contentItem.filter(function (item) {
											return item.index != data.index;
										}).map(function (updatedItems) {
											if (updatedItems.index > data.index) {
												updatedItems.index -= 1;
											}
											console.log(updatedItems.index);
											return updatedItems;
										});
										setAttributes({ contentItem: updatedArray });
									}
								})
							)
						),
						wp.element.createElement(RichText, {
							tagName: "h4",
							placeholder: "Content Title",
							keepPlaceholderOnFocus: "true",
							className: "content-item-title",
							value: data.contentTitle,
							onChange: function onChange(value) {
								var arrayCopy = [].concat(_toConsumableArray(contentItem));
								arrayCopy[index].contentTitle = value;
								setAttributes({ contentItem: arrayCopy });
							}
						}),
						wp.element.createElement(RichText, {
							tagName: "p",
							placeholder: "Content Description",
							keepPlaceholderOnFocus: "true",
							className: "content-item-desc",
							value: data.contentDesc,
							onChange: function onChange(value) {
								var arrayCopy = [].concat(_toConsumableArray(contentItem));
								arrayCopy[index].contentDesc = value;
								setAttributes({ contentItem: arrayCopy });
							}
						}),
						wp.element.createElement(
							"div",
							{ className: "content-link-popup-wrap" },
							wp.element.createElement(
								"div",
								{ className: "content-link-popup" },
								wp.element.createElement("i", { "class": "fa fa-times close-popup" }),
								wp.element.createElement(TextControl, {
									type: "url",
									label: __("Link URL", "storyful"),
									placeholder: "https://google.com",
									value: data.contentLinkURL,
									onChange: function onChange(value) {
										var arrayCopy = [].concat(_toConsumableArray(contentItem));
										arrayCopy[index].contentLinkURL = value;
										setAttributes({ contentItem: arrayCopy });
									}
								}),
								wp.element.createElement(ToggleControl, {
									label: __("Open in New Tab", "storyful"),
									checked: data.contentLinkTarget,
									onChange: function onChange(value) {
										var arrayCopy = [].concat(_toConsumableArray(contentItem));
										arrayCopy[index].contentLinkTarget = value;
										setAttributes({ contentItem: arrayCopy });
									}
								})
							),
							wp.element.createElement(RichText, {
								tagName: "a",
								href: data.contentLinkURL,
								target: data.contentLinkTarget ? '_blank' : '_self',
								className: "content-item-link " + (AddContentLinkIcon ? contentLinkIcon : ''),
								value: data.contentLinkText,
								rel: "noopener noreferrer",
								placeholder: "Content Link",
								keepPlaceholderOnFocus: "true",
								onChange: function onChange(value) {
									var arrayCopy = [].concat(_toConsumableArray(contentItem));
									arrayCopy[index].contentLinkText = value;
									setAttributes({ contentItem: arrayCopy });
								}
							})
						)
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
						{ title: __("Background Settings", "storyful") },
						wp.element.createElement(
							"div",
							{ className: "setting-row" },
							wp.element.createElement(
								"label",
								null,
								"Background Color"
							),
							wp.element.createElement(ColorPalette, {
								value: backgroundColor,
								onChange: function onChange(backgroundColor) {
									setAttributes({ backgroundColor: backgroundColor ? backgroundColor : "#fff" });
								}
							})
						),
						wp.element.createElement(
							"div",
							{ className: "setting-row" },
							wp.element.createElement(
								"label",
								null,
								"Background Image"
							),
							!backgroundImage ? wp.element.createElement(MediaUpload, {
								onSelect: function onSelect(backgroundImage) {
									setAttributes({ backgroundImage: backgroundImage.url });
								},
								type: "image",
								value: backgroundImage,
								render: function render(_ref) {
									var open = _ref.open;
									return wp.element.createElement(
										Button,
										{
											onClick: open,
											className: "button button-large"
										},
										"Upload Image"
									);
								}
							}) : wp.element.createElement(
								Fragment,
								null,
								wp.element.createElement(
									"div",
									{ className: "image-preview" },
									wp.element.createElement("img", { src: backgroundImage })
								),
								wp.element.createElement(
									Button,
									{
										onClick: function onClick() {
											setAttributes({ backgroundImage: "" });
										},
										className: "button button-large"
									},
									"Remove Image"
								)
							)
						),
						backgroundImage && wp.element.createElement(
							"div",
							{ className: "setting-row" },
							wp.element.createElement(SelectControl, {
								label: "Background Position",
								value: backgroundPosition,
								options: [{ label: __('left'), value: 'left' }, { label: __('Right'), value: 'right' }],
								onChange: function onChange(backgroundPosition) {
									return setAttributes({ backgroundPosition: backgroundPosition });
								}
							})
						)
					),
					wp.element.createElement(
						PanelBody,
						{ title: __("Column Settings", "storyful"), initialOpen: false },
						wp.element.createElement(RangeControl, {
							label: __("Columns", "storyful"),
							value: columnCount,
							min: 1,
							max: 4,
							step: 1,
							onChange: function onChange(columnCount) {
								return setAttributes({ columnCount: columnCount });
							}
						})
					),
					wp.element.createElement(PanelColorSettings, {
						title: __("Color Settings", "storyful"),
						colorSettings: [{
							value: titleColor,
							onChange: function onChange(titleColor) {
								setAttributes({ titleColor: titleColor ? titleColor : '#1A2B49' });
							},
							label: __("Title Color", "storyful")
						}, {
							value: descriptionColor,
							onChange: function onChange(descriptionColor) {
								setAttributes({ descriptionColor: descriptionColor ? descriptionColor : '#1A2B49' });
							},
							label: __("Description Color", "storyful")
						}, {
							value: contentTitleColor,
							onChange: function onChange(contentTitleColor) {
								setAttributes({ contentTitleColor: contentTitleColor ? contentTitleColor : '#FF4C15' });
							},
							label: __("Feature Title Color", "storyful")
						}, {
							value: contentDescColor,
							onChange: function onChange(contentDescColor) {
								setAttributes({ contentDescColor: contentDescColor ? contentDescColor : '#1A2B49' });
							},
							label: __("Feature Description Color", "storyful")
						}, {
							value: contentLinkColor,
							onChange: function onChange(contentLinkColor) {
								setAttributes({ contentLinkColor: contentLinkColor ? contentLinkColor : '#FF4C15' });
							},
							label: __("Feature Link Color", "storyful")
						}],
						initialOpen: false
					}),
					wp.element.createElement(
						PanelBody,
						{ title: __("Box Settings", "storyful"), initialOpen: false },
						wp.element.createElement(
							"div",
							{ className: "setting-row" },
							wp.element.createElement(
								"label",
								null,
								"Box Background Color"
							),
							wp.element.createElement(ColorPalette, {
								value: contentBoxBGColor,
								onChange: function onChange(contentBoxBGColor) {
									setAttributes({ contentBoxBGColor: contentBoxBGColor ? contentBoxBGColor : "#fff" });
								}
							})
						),
						wp.element.createElement(ToggleControl, {
							label: __("Add Icon", "storyful"),
							checked: AddContentLinkIcon,
							onChange: function onChange(AddContentLinkIcon) {
								setAttributes({ AddContentLinkIcon: AddContentLinkIcon });
							}
						}),
						AddContentLinkIcon && wp.element.createElement(TextControl, {
							label: __("Font Awesome Icon Class", "storyful"),
							value: contentLinkIcon,
							placeholder: "fa fa-long-arrow-right",
							onChange: function onChange(contentLinkIcon) {
								return setAttributes({ contentLinkIcon: contentLinkIcon });
							}
						}),
						wp.element.createElement(
							PanelBody,
							{ title: __("Box Shadow", "storyful"), initialOpen: false },
							wp.element.createElement(RangeControl, {
								label: __("X Offset"),
								value: shadowXOffset,
								min: 0,
								max: 50,
								step: 1,
								onChange: function onChange(shadowXOffset) {
									return setAttributes({ shadowXOffset: shadowXOffset });
								}
							}),
							wp.element.createElement(RangeControl, {
								label: __("Y Offset"),
								value: shadowYOffset,
								min: 0,
								max: 50,
								step: 1,
								onChange: function onChange(shadowYOffset) {
									return setAttributes({ shadowYOffset: shadowYOffset });
								}
							}),
							wp.element.createElement(RangeControl, {
								label: __("Blur"),
								value: shadowBlur,
								min: 0,
								max: 50,
								step: 1,
								onChange: function onChange(shadowBlur) {
									return setAttributes({ shadowBlur: shadowBlur });
								}
							}),
							wp.element.createElement(RangeControl, {
								label: __("Spread"),
								value: shadowSpread,
								min: 0,
								max: 50,
								step: 1,
								onChange: function onChange(shadowSpread) {
									return setAttributes({ shadowSpread: shadowSpread });
								}
							}),
							wp.element.createElement(
								"div",
								{ className: "setting-row" },
								wp.element.createElement(
									"label",
									null,
									"Color"
								),
								wp.element.createElement(ColorPalette, {
									value: shadowColor,
									onChange: function onChange(shadowColor) {
										return setAttributes({ shadowColor: shadowColor ? shadowColor : '#fff' });
									}
								})
							),
							wp.element.createElement(ToggleControl, {
								label: __("Inset"),
								checked: shadowInset,
								onChange: function onChange(shadowInset) {
									return setAttributes({ shadowInset: shadowInset });
								}
							})
						)
					),
					wp.element.createElement(
						PanelBody,
						{ title: __("Scroll From ID", "storyful"), initialOpen: false },
						wp.element.createElement(TextControl, {
							label: __("Scroll From ID On button Click", "storyful"),
							value: idScrollFrom,
							onChange: function onChange(idScrollFrom) {
								return setAttributes({ idScrollFrom: idScrollFrom });
							}
						})
					),
					wp.element.createElement(
						PanelBody,
						{ title: __("Custom CSS", "storyful"), initialOpen: false },
						wp.element.createElement(TextareaControl, {
							type: "string",
							label: "Add custom styles",
							value: customCSS,
							onChange: function onChange(customCSS) {
								return setAttributes({ customCSS: customCSS });
							}
						})
					)
				),
				wp.element.createElement(
					"div",
					{ className: "content-list", id: blockID, "scroll-from": idScrollFrom ? idScrollFrom : false },
					blockCSS,
					backgroundImage && wp.element.createElement("span", { className: "content-list-placeholder position-" + backgroundPosition }),
					wp.element.createElement(
						"div",
						{ className: "container-lg" },
						wp.element.createElement(
							"div",
							{ className: "content-list-inner" },
							wp.element.createElement(
								"div",
								{ className: "content-list-header" },
								wp.element.createElement(RichText, {
									tagName: "h2",
									placeholder: "Enter Title",
									keepPlaceholderOnFocus: "true",
									value: title,
									className: "content-list-title",
									onChange: function onChange(title) {
										return setAttributes({ title: title });
									}
								}),
								wp.element.createElement(RichText, {
									tagName: "p",
									placeholder: "Enter Description",
									keepPlaceholderOnFocus: "true",
									value: description,
									className: "content-list-desc",
									onChange: function onChange(description) {
										return setAttributes({ description: description });
									}
								})
							),
							wp.element.createElement(
								"div",
								{ className: "content-list-body" },
								wp.element.createElement(
									"div",
									{ className: "content-list-main has-" + columnCount + "-columns" },
									contentListItem,
									wp.element.createElement(
										"div",
										{ className: "add-item-wrap" },
										wp.element.createElement(
											Tooltip,
											{ text: __("Add New Item", "storyful") },
											wp.element.createElement("i", {
												className: "fa fa-plus add-new-item",
												"aria-hidden": "true",
												onClick: function onClick() {
													_this2.addNewItem();
												}
											})
										)
									)
								),
								wp.element.createElement(InnerBlocks
								// allowedBlocks={ [ "storyful/button" ] }
								// template={ [
								// 	[ "storyful/button", {} ]
								// ] }
								// templateLock="all"
								, null)
							)
						)
					)
				)
			);
		}
	}]);

	return edit;
}(Component);

registerBlockType('storyful/content-list', {
	title: __('Storyful - Content List', 'storyful'),
	description: __('Content List Block is include custom content list and settings', 'storyful'),
	icon: 'format-aside',
	category: 'my-custom-block',
	keywords: [__('content'), __('list'), __('storyful')],
	attributes: {
		blockID: {
			type: 'string',
			default: ''
		},
		backgroundColor: {
			type: 'string',
			default: '#fff'
		},
		backgroundImage: {
			type: 'string',
			default: ''
		},
		backgroundPosition: {
			type: 'string',
			default: 'left'
		},
		title: {
			type: 'string',
			default: ''
		},
		titleColor: {
			type: 'string',
			default: '#1A2B49'
		},
		description: {
			type: 'string',
			default: ''
		},
		descriptionColor: {
			type: 'string',
			default: '#1A2B49'
		},
		contentItem: {
			type: 'array',
			default: []
		},
		columnCount: {
			type: 'number',
			default: 3
		},
		contentBoxBGColor: {
			type: 'string',
			default: '#fff'
		},
		contentTitleColor: {
			type: 'string',
			default: '#FF4C15'
		},
		contentDescColor: {
			type: 'string',
			default: '#1A2B49'
		},
		contentLinkColor: {
			type: 'string',
			default: '#FF4C15'
		},
		AddContentLinkIcon: {
			type: 'boolean',
			default: false
		},
		contentLinkIcon: {
			type: 'string',
			default: 'fa fa-long-arrow-right'
		},
		shadowXOffset: {
			type: 'number',
			default: 0
		},
		shadowYOffset: {
			type: 'number',
			default: 10
		},
		shadowBlur: {
			type: 'number',
			default: 25
		},
		shadowSpread: {
			type: 'number',
			default: 0
		},
		shadowColor: {
			type: 'string',
			default: '#e6eaf1'
		},
		shadowInset: {
			type: 'boolean',
			default: false
		},
		idScrollFrom: {
			type: 'string',
			default: ''
		},
		customCSS: {
			type: 'string',
			default: ''
		}
	},
	edit: edit,
	save: function save(_ref2) {
		var attributes = _ref2.attributes;
		var blockID = attributes.blockID,
		    backgroundColor = attributes.backgroundColor,
		    backgroundImage = attributes.backgroundImage,
		    backgroundPosition = attributes.backgroundPosition,
		    title = attributes.title,
		    titleColor = attributes.titleColor,
		    description = attributes.description,
		    descriptionColor = attributes.descriptionColor,
		    contentItem = attributes.contentItem,
		    columnCount = attributes.columnCount,
		    contentBoxBGColor = attributes.contentBoxBGColor,
		    contentTitleColor = attributes.contentTitleColor,
		    contentDescColor = attributes.contentDescColor,
		    contentLinkColor = attributes.contentLinkColor,
		    AddContentLinkIcon = attributes.AddContentLinkIcon,
		    contentLinkIcon = attributes.contentLinkIcon,
		    shadowXOffset = attributes.shadowXOffset,
		    shadowYOffset = attributes.shadowYOffset,
		    shadowBlur = attributes.shadowBlur,
		    shadowSpread = attributes.shadowSpread,
		    shadowColor = attributes.shadowColor,
		    shadowInset = attributes.shadowInset,
		    idScrollFrom = attributes.idScrollFrom,
		    customCSS = attributes.customCSS;

		var blockCSS = wp.element.createElement(
			"style",
			null,
			"\n\t\t\t\t\t#" + blockID + "{\n\t\t\t\t\t\tbackground-color:" + backgroundColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-inner{\n\t\t\t\t\t\tbox-shadow:" + (shadowInset ? 'inset' : '') + " " + shadowXOffset + "px " + shadowYOffset + "px " + shadowBlur + "px " + shadowSpread + "px " + shadowColor + ";\n\t\t\t\t\t\tbackground-color:" + contentBoxBGColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-list-placeholder{\n\t\t\t\t\t\tbackground-image:url(" + backgroundImage + ");\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-list-title{\n\t\t\t\t\t\tcolor:" + titleColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-list-desc{\n\t\t\t\t\t\tcolor:" + descriptionColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-title{\n\t\t\t\t\t\tcolor:" + contentTitleColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-desc{\n\t\t\t\t\t\tcolor:" + contentDescColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t#" + blockID + " .content-item-link{\n\t\t\t\t\t\tcolor:" + contentLinkColor + ";\n\t\t\t\t\t}\n\t\t\t\t\t" + customCSS + "\n\t\t\t\t"
		);
		return wp.element.createElement(
			"div",
			{ className: "content-list", id: blockID, "scroll-from": idScrollFrom ? idScrollFrom : false },
			blockCSS,
			backgroundImage && wp.element.createElement("span", { className: "content-list-placeholder position-" + backgroundPosition }),
			wp.element.createElement(
				"div",
				{ className: "container-lg" },
				wp.element.createElement(
					"div",
					{ className: "content-list-inner" },
					wp.element.createElement(
						"div",
						{ className: "content-list-header" },
						title && wp.element.createElement(RichText.Content, {
							tagName: "h2",
							value: title,
							className: "content-list-title"
						}),
						description && wp.element.createElement(RichText.Content, {
							tagName: "p",
							value: description,
							className: "content-list-desc"
						})
					),
					wp.element.createElement(
						"div",
						{ className: "content-list-body" },
						0 < contentItem.length && wp.element.createElement(
							"div",
							{ className: "content-list-main has-" + columnCount + "-columns" },
							contentItem.map(function (data, index) {
								return wp.element.createElement(
									"div",
									{ className: "content-list-item" },
									wp.element.createElement(
										"div",
										{ className: "content-item-inner" },
										data.contentTitle && wp.element.createElement(RichText.Content, {
											tagName: "h4",
											className: "content-item-title",
											value: data.contentTitle
										}),
										data.contentDesc && wp.element.createElement(RichText.Content, {
											tagName: "p",
											className: "content-item-desc",
											value: data.contentDesc
										}),
										data.contentLinkText && wp.element.createElement(
											"div",
											{ className: "content-link-wrap" },
											wp.element.createElement(RichText.Content, {
												tagName: "a",
												href: data.contentLinkURL,
												target: data.contentLinkTarget ? '_blank' : '_self',
												className: "content-item-link " + (AddContentLinkIcon ? contentLinkIcon : ''),
												rel: "noopener noreferrer",
												value: data.contentLinkText
											})
										)
									)
								);
							})
						),
						wp.element.createElement(InnerBlocks.Content, null)
					)
				)
			)
		);
	}
});

/***/ })
/******/ ]);