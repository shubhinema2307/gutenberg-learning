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
const { 
    PanelBody, 
    TextControl, 
    SelectControl, 
    ToolbarGroup,
} = wp.components;

import classnames from "classnames";

class edit extends Component {

    updatePadding(pos, newPadding) {
        const { attributes, setAttributes } = this.props;
        const { padding } = attributes;
        const position = {
            top: 0,
            right: 1,
            bottom: 2,
            left: 3,
        };
        const updatedPadding = padding.map((val, index) => {
            if (index === position[pos]) {
                return newPadding;
            } else {
                return val;
            }
        });
        setAttributes({ padding: updatedPadding });
    }

    updateMargin(pos, newMargin) {
        const { attributes, setAttributes } = this.props;
        const { margin } = attributes;
        const position = {
            top: 0,
            right: 1,
            bottom: 2,
            left: 3,
        };
        const updatedMargin = margin.map((val, index) => {
            if (index === position[pos]) {
                return newMargin;
            } else {
                return val;
            }
        });
        setAttributes({ margin: updatedMargin });
    }

    render() {
        const { attributes, setAttributes, clientId, className } = this.props;
        const {
            blockId,
            buttonAlign,
            buttonText,
            fontSize,
            fontFamily,
            fontWeight,
            textColor,
            bgColor,
            hoverTxtColor,
            hoverBgColor,
            borderWidth,
            borderStyle,
            borderColor,
            borderRadius,
            padding,
            margin,
            buttonlink_url,
        } = attributes;

        setAttributes({ blockId: clientId });

        const onChangeTextColor = (newTextColor) => {
            setAttributes({ textColor: newTextColor });
        };

        const onChangeBgColor = (newBgColor) => {
            setAttributes({ bgColor: newBgColor });
        };

        const onChangeHvrtxtColor = (newhvrTextColor) => {
            setAttributes({ hoverTxtColor: newhvrTextColor });
        };

        const onChangeHvrBgColor = (newhvrBgColor) => {
            setAttributes({ hoverBgColor: newhvrBgColor });
        };

        const classes = classnames(className, `wplearning-btn`);

        return (
            <div className={classes}>
                <InspectorControls>
                    <PanelBody title={__("Typography", "wp-learning")} initialOpen={false}>
                        <div className="row-panel">
                            <SelectControl
                                label={__("Font Family", "wp-learning")}
                                value={fontFamily}
                                options={[
                                    { label: "Roboto", value: "Roboto" },
                                    { label: "Nautigal", value: "Nautigal" },
                                    { label: "RobotoSlab", value: "RobotoSlab" }
                                ]}
                                onChange={(newval) => setAttributes({ fontFamily: newval })}
                            />
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Font Size", "wp-learning")}
                                        value={fontSize}
                                        onChange={(fontSize) =>
                                            setAttributes({ fontSize })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <SelectControl
                                        label={__("Font Weight", "wp-learning")}
                                        value={fontWeight}
                                        options={[
                                            { label: 300, value: 300 },
                                            { label: 500, value: 500 },
                                            { label: 700, value: 700 },
                                            { label: 900, value: 900 },
                                        ]}
                                        onChange={(fontWeight) => {
                                        setAttributes({ fontWeight: parseInt(fontWeight) });
                                        }}
                                    />
                                </div>
                            </div>
                        </div> 
                    </PanelBody>

                    <PanelColorSettings title={__("Color Settings", "wp-learning")} initialOpen={false}
                        colorSettings={[
                            {
                                value: textColor,
                                onChange: onChangeTextColor,
                                label: __("Text color", "wp-learning"),
                            },
                            {
                                value: bgColor,
                                onChange: onChangeBgColor,
                                label: __("Background color", "wp-learning"),
                            },
                            {
                                value: hoverTxtColor,
                                onChange: onChangeHvrtxtColor,
                                label: __("Text Hover color", "wp-learning"),
                            },
                            {
                                value: hoverBgColor,
                                onChange: onChangeHvrBgColor,
                                label: __("Background Hover color", "wp-learning"),
                            },
                        ]}
                    />

                    <PanelBody title={__("Border Settings", "wp-learning")} initialOpen={false} >
                        <div className="row-panel">
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Border width (px)", "wp-learning")}
                                        value={borderWidth}
                                        onChange={(borderWidth) =>
                                            setAttributes({ borderWidth })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Border Radius (px)", "wp-learning")}
                                        value={borderRadius}
                                        onChange={(borderRadius) => {
                                            setAttributes({
                                            borderRadius: borderRadius,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <SelectControl
                            label={__("Border style", "wp-learning")}
                            value={borderStyle}
                            options={[
                                { label: "solid", value: "solid" },
                                { label: "double", value: "double" },
                                { label: "dotted", value: "dotted" },
                                { label: "dashed", value: "dashed" },
                            ]}
                            onChange={(newval) =>
                                setAttributes({ borderStyle: newval })
                            }
                        />
                        <div className="row-panel">
                            <label className="row-panel-label">
                                { __( 'Border Color', 'wp-learning' ) }
                            </label>
                            <ColorPalette
                                value={borderColor}
                                onChange={(borderColor) => {
                                    setAttributes({
                                        borderColor: borderColor
                                        ? borderColor
                                        : "transparent",
                                    });
                                }}
                            />
                        </div>
                    </PanelBody>

                    <PanelBody title={__("Spacing", "wp-learning")} initialOpen={false} >
                        <div className="row-panel">
                            <label className="row-panel-label">
                                { __( 'Padding (px)', 'wp-learning' ) }
                            </label>
                            <div className="row">
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Top"
                                        min={0}
                                        step={1}
                                        value={padding[0] ? padding[0] : 0}
                                        onChange={(paddingTop) => {
                                            this.updatePadding("top", parseInt(paddingTop));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Right"
                                        min={0}
                                        step={1}
                                        value={padding[1] ? padding[1] : 0}
                                        onChange={(paddingRight) => {
                                            this.updatePadding("right", parseInt(paddingRight));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Bottom"
                                        min={0}
                                        step={1}
                                        value={padding[2] ? padding[2] : 0}
                                        onChange={(paddingBottom) => {
                                            this.updatePadding("bottom", parseInt(paddingBottom));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Left"
                                        min={0}
                                        step={1}
                                        value={padding[3] ? padding[3] : 0}
                                        onChange={(paddingLeft) => {
                                            this.updatePadding("left", parseInt(paddingLeft));
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row-panel">
                            <label className="row-panel-label">
                                { __( 'Margin (px)', 'wp-learning' ) }
                            </label>
                            <div className="row">
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Top"
                                        min={0}
                                        step={1}
                                        value={margin[0] ? margin[0] : 0}
                                        onChange={(marginTop) => {
                                            this.updateMargin("top", parseInt(marginTop));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Right"
                                        min={0}
                                        step={1}
                                        value={margin[1] ? margin[1] : 0}
                                        onChange={(marginRight) => {
                                            this.updateMargin("right", parseInt(marginRight));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Bottom"
                                        min={0}
                                        step={1}
                                        value={margin[2] ? margin[2] : 0}
                                        onChange={(marginBottom) => {
                                            this.updateMargin("bottom", parseInt(marginBottom));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Left"
                                        min={0}
                                        step={1}
                                        value={margin[3] ? margin[3] : 0}
                                        onChange={(marginLeft) => {
                                            this.updateMargin("left", parseInt(marginLeft));
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
            
                    <PanelBody title={__("Link settings", "wp-learning")} initialOpen={false} >
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
                
                    <div>
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
                                    font-size:${fontSize}px;
                                    font-family:${fontFamily};
                                    font-weight:${fontWeight};
                                }
                                #block-${blockId} a { 
                                    color:${textColor};
                                    background-color:${bgColor};
                                    border:${borderWidth}px ${borderStyle} ${borderColor};
                                    border-radius: ${borderRadius}px;
                                    padding:${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
                                    margin:${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px;
                                }
                                
                                #block-${blockId} a:hover { 
                                    color:${hoverTxtColor};
                                    background-color:${hoverBgColor};
                                }
                            `}
                        </style>
                    </div>
                
            </div>
        );
    }
}

registerBlockType("wp-learning/button-block", {
    title: __("button"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("button"), __("btn")],
    supports: {
        align: ["full"],
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
            source: "children", // children of a, to bind the link text
        },
        buttonlink_url: {
            selector: "a", // tag a
            source: "attribute", // attribute of the tag
            attribute: "href", // attribute href, to bind the href of the link
        },
    },
    edit,
    save: (props) => {
        const { attributes, className } = props;
        const {
            blockId,
            buttonAlign,
            buttonText,
            fontSize,
            fontFamily,
            fontWeight,
            textColor,
            bgColor,
            hoverTxtColor,
            hoverBgColor,
            borderWidth,
            borderStyle,
            borderColor,
            borderRadius,
            padding,
            margin,
            buttonlink_url,
        } = attributes;

        const classes = classnames(className, `wplearning-btn`);

        return (
                <div id={`wp-learning-${blockId}`} className={classes}>
                    <a href={buttonlink_url} className={`wp_learning_btn`}>
                        {buttonText}
                    </a>

                    <style>
                        {`
                            #wp-learning-${blockId} .wp_learning_btn{ 
                                font-size:${fontSize}px;
                                text-align: ${buttonAlign};
                                font-family:${fontFamily};
                                font-weight:${fontWeight};
                                color:${textColor};
                                background-color:${bgColor};
                                border:${borderWidth}px ${borderStyle} ${borderColor};
                                border-radius: ${borderRadius}px;
                                padding:${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
                                margin:${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px;
                            }
                            #wp-learning-${blockId} .wp_learning_btn:hover { 
                                color:${hoverTxtColor};
                                background-color:${hoverBgColor};
                            }
                        `}
                    </style>
                </div>
        );
    },
});
