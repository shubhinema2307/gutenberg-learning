/**
 *  BLOCK: button
 *  ---
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
  ColorPalette,
  BlockControls,
  AlignmentControl,
  RichText,
} = wp.blockEditor;
const { PanelBody, TextControl, SelectControl, ToolbarGroup } = wp.components;

registerBlockType("wp-learning/button-block", {
  title: __("button"),
  icon: "format-aside",
  category: "my-custom-block",
  keywords: [__("button"), __("btn")],
  // Enable or disable support for low-level features
  supports: {
    align: ["full"],
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
      source: "children", // children of a, to bind the link text
    },
    buttonlink_url: {
      selector: "a", // tag a
      source: "attribute", // attribute of the tag
      attribute: "href", // attribute href, to bind the href of the link
    },
  },
  // The UI for the WordPress editor
  edit: (props) => {
    const { attributes, setAttributes, clientId } = props;
    const {
      blockId,
      buttonAlign,
      buttonText,
      buttonFontsize,
      buttonFontFamily,
      buttonFontWeight,
      buttonTextColor,
      buttonBgColor,
      buttonHovertxtColor,
      buttonHoverBgColor,
      buttonBorderWidth,
      buttonBorderStyle,
      buttonBorderColor,
      buttonBorderRadius,
      buttonPaddingTop,
      buttonPaddingRight,
      buttonPaddingBottom,
      buttonPaddingLeft,
      buttonMarginTop,
      buttonMarginRight,
      buttonMarginBottom,
      buttonMarginLeft,
      buttonlink_text,
      buttonlink_url,
    } = attributes;

    setAttributes({ blockId: clientId });

    const onChangeTextColor = (newTextColor) => {
      setAttributes({ buttonTextColor: newTextColor });
    };

    const onChangeBgColor = (newBgColor) => {
      setAttributes({ buttonBgColor: newBgColor });
    };

    const onChangeHvrtxtColor = (newhvrTextColor) => {
      setAttributes({ buttonHovertxtColor: newhvrTextColor });
    };

    const onChangeHvrBgColor = (newhvrBgColor) => {
      setAttributes({ buttonHoverBgColor: newhvrBgColor });
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Button Typography", "wp-learning")}
            initialOpen={false}
          >
            <TextControl
              label={__("Button FontSize", "wp-learning")}
              value={buttonFontsize}
              onChange={(buttonFontsize) => {
                setAttributes({ buttonFontsize: parseInt(buttonFontsize) });
              }}
            />
            <SelectControl
              label={__("Button Font Family", "wp-learning")}
              value={buttonFontFamily}
              options={[
                { label: "Roboto", value: "Roboto" },
                { label: "Nautigal", value: "Nautigal" },
              ]}
              onChange={(newval) => setAttributes({ buttonFontFamily: newval })}
            />
            <SelectControl
              label={__("Button Font Weight", "wp-learning")}
              value={buttonFontWeight}
              options={[
                { label: 300, value: 300 },
                { label: 500, value: 500 },
                { label: 700, value: 700 },
                { label: 900, value: 900 },
              ]}
              onChange={(buttonFontWeight) => {
                setAttributes({ buttonFontWeight: parseInt(buttonFontWeight) });
              }}
            />
          </PanelBody>
          <PanelBody
            title={__("button color setting", "wp-learning")}
            initialOpen={false}
          >
            <PanelColorSettings
              // title={ __( 'Button text color', 'wp-learning' ) }
              // initialOpen={ false }
              colorSettings={[
                {
                  value: buttonTextColor,
                  onChange: onChangeTextColor,
                  label: __("Text color", "wp-learning"),
                },
                {
                  value: buttonBgColor,
                  onChange: onChangeBgColor,
                  label: __("Background color", "wp-learning"),
                },
                {
                  value: buttonHovertxtColor,
                  onChange: onChangeHvrtxtColor,
                  label: __("Text Hover color", "wp-learning"),
                },
                {
                  value: buttonHoverBgColor,
                  onChange: onChangeHvrBgColor,
                  label: __("Background Hover color", "wp-learning"),
                },
              ]}
            />
          </PanelBody>
          <PanelBody
            title={__("Button Border", "wp-learning")}
            initialOpen={false}
          >
            <TextControl
              label={__("Button Border width (in px)", "wp-learning")}
              value={buttonBorderWidth}
              onChange={(buttonBorderWidth) => {
                setAttributes({
                  buttonBorderWidth: parseInt(buttonBorderWidth),
                });
              }}
            />
            <SelectControl
              label={__("Button Border style", "wp-learning")}
              value={buttonBorderStyle}
              options={[
                { label: "solid", value: "solid" },
                { label: "double", value: "double" },
                { label: "dotted", value: "dotted" },
                { label: "dashed", value: "dashed" },
              ]}
              onChange={(newval) =>
                setAttributes({ buttonBorderStyle: newval })
              }
            />
            <ColorPalette
              value={buttonBorderColor}
              onChange={(buttonBorderColor) => {
                setAttributes({
                  buttonBorderColor: buttonBorderColor
                    ? buttonBorderColor
                    : "transparent",
                });
              }}
            />
            <TextControl
              label={__("Button Border Radius (in px)", "wp-learning")}
              value={buttonBorderRadius}
              onChange={(buttonBorderRadius) => {
                setAttributes({
                  buttonBorderRadius: parseInt(buttonBorderRadius),
                });
              }}
            />
          </PanelBody>
          <PanelBody
            title={__("Button padding (in px)", "wp-learning")}
            initialOpen={false}
          >
            <div class="row">
              <div class="col-25">
                <TextControl
                  label={__("Top:", "wp-learning")}
                  value={buttonPaddingTop}
                  onChange={(buttonPaddingTop) => {
                    setAttributes({
                      buttonPaddingTop: parseInt(buttonPaddingTop),
                    });
                  }}
                />
              </div>
              <div class="col-25">
                <TextControl
                  label={__("Right:", "wp-learning")}
                  value={buttonPaddingRight}
                  onChange={(buttonPaddingRight) => {
                    setAttributes({
                      buttonPaddingRight: parseInt(buttonPaddingRight),
                    });
                  }}
                />
              </div>
              <div class="col-25">
                <TextControl
                  label={__("Bottom:", "wp-learning")}
                  value={buttonPaddingBottom}
                  onChange={(buttonPaddingBottom) => {
                    setAttributes({
                      buttonPaddingBottom: parseInt(buttonPaddingBottom),
                    });
                  }}
                />
              </div>
              <div class="col-25">
                <TextControl
                  label={__("Left:", "wp-learning")}
                  value={buttonPaddingLeft}
                  onChange={(buttonPaddingLeft) => {
                    setAttributes({
                      buttonPaddingLeft: parseInt(buttonPaddingLeft),
                    });
                  }}
                />
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Button margin (in px)", "wp-learning")}
            initialOpen={false}
          >
            <div class="row">
              <div class="col-25">
                <TextControl
                  label={__("Top:", "wp-learning")}
                  value={buttonMarginTop}
                  onChange={(buttonMarginTop) => {
                    setAttributes({
                      buttonMarginTop: parseInt(buttonMarginTop),
                    });
                  }}
                />
              </div>
              <div class="col-25">
                <TextControl
                  label={__("Right:", "wp-learning")}
                  value={buttonMarginRight}
                  onChange={(buttonMarginRight) => {
                    setAttributes({
                      buttonMarginRight: parseInt(buttonMarginRight),
                    });
                  }}
                />
              </div>
              <div class="col-25">
                <TextControl
                  label={__("Bottom:", "wp-learning")}
                  value={buttonMarginBottom}
                  onChange={(buttonMarginBottom) => {
                    setAttributes({
                      buttonMarginBottom: parseInt(buttonMarginBottom),
                    });
                  }}
                />
              </div>
              <div class="col-25">
                <TextControl
                  label={__("Left:", "wp-learning")}
                  value={buttonMarginLeft}
                  onChange={(buttonMarginLeft) => {
                    setAttributes({
                      buttonMarginLeft: parseInt(buttonMarginLeft),
                    });
                  }}
                />
              </div>
            </div>
          </PanelBody>
          <PanelBody
            title={__("Button link settings", "wp-learning")}
            initialOpen={false}
          >
            <TextControl
              label={__("Button link URL", "wp-learning")}
              value={buttonlink_url}
              onChange={(buttonlink_url) => {
                setAttributes({ buttonlink_url });
              }}
            />
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <ToolbarGroup>
            <AlignmentControl
              value={buttonAlign}
              onChange={(buttonAlign) => {
                setAttributes({ buttonAlign });
              }}
            />
          </ToolbarGroup>
        </BlockControls>
        <div class="wplearning-btn">
          {/* <a href={buttonlink_url}>{buttonText}</a> */}

          <RichText
            tagName="a"
            href={buttonlink_url}
            onChange={(value) => setAttributes({ buttonText: value })}
            allowedFormats={["core/bold", "core/italic"]}
            value={buttonText}
            placeholder={__("Button Text...")}
          />

          <style>
            {`
               #block-${blockId} {
                 width: 100%;
                text-align: ${buttonAlign};
                font-size:${buttonFontsize}px;
                font-family:${buttonFontFamily};
                font-weight:${buttonFontWeight};
              }
               #block-${blockId} a { 
                color:${buttonTextColor};
                background-color:${buttonBgColor};
                border:${buttonBorderWidth}px ${buttonBorderStyle} ${buttonBorderColor};
                border-radius: ${buttonBorderRadius}px;
                padding: ${buttonPaddingTop}px ${buttonPaddingRight}px ${buttonPaddingBottom}px ${buttonPaddingLeft}px;
                margin: ${buttonMarginTop}px ${buttonMarginRight}px ${buttonMarginBottom}px ${buttonMarginLeft}px;
               }
               
               #block-${blockId} a:hover { 
                color:${buttonHovertxtColor};
                background-color:${buttonHoverBgColor};
               }
              
             `}
          </style>
        </div>
      </Fragment>
    );
  },
  // The output on the live site
  save: (props) => {
    const { attributes, setAttributes } = props;
    const {
      blockId,
      buttonAlign,
      buttonText,
      buttonFontsize,
      buttonFontFamily,
      buttonFontWeight,
      buttonTextColor,
      buttonBgColor,
      buttonHovertxtColor,
      buttonHoverBgColor,
      buttonBorderWidth,
      buttonBorderStyle,
      buttonBorderColor,
      buttonBorderRadius,
      buttonPaddingTop,
      buttonPaddingRight,
      buttonPaddingBottom,
      buttonPaddingLeft,
      buttonMarginTop,
      buttonMarginRight,
      buttonMarginBottom,
      buttonMarginLeft,
      buttonlink_url,
    } = attributes;

    return (
      <Fragment>
        <div id={`wp-learning-${blockId}`} className="wp-learning-btn-front">
          <a href={buttonlink_url} className={`wp_learning_btn`}>
            {buttonText}
          </a>

          <style>
            {`
             #wp-learning-${blockId} .wp_learning_btn{ 
               font-size:${buttonFontsize}px;
               text-align: ${buttonAlign}
               font-family:${buttonFontFamily};
               font-weight:${buttonFontWeight};
               color:${buttonTextColor};
               background-color:${buttonBgColor};
               border:${buttonBorderWidth}px ${buttonBorderStyle} ${buttonBorderColor};
               border-radius: ${buttonBorderRadius}px;
               padding: ${buttonPaddingTop}px ${buttonPaddingRight}px ${buttonPaddingBottom}px ${buttonPaddingLeft}px;
               margin: ${buttonMarginTop}px ${buttonMarginRight}px ${buttonMarginBottom}px ${buttonMarginLeft}px;
              }
             #wp-learning-${blockId} .wp_learning_btn:hover { 
               color:${buttonHovertxtColor};
               background-color:${buttonHoverBgColor};
              }
  
           `}
          </style>
        </div>
      </Fragment>
    );
  },
});
