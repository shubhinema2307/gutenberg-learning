/**
 *  BLOCK: About
 *  ---
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const {
    InspectorControls,
    MediaUpload,
    MediaUploadCheck,
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
    Button } = wp.components;

import { Flip, Edit, Remove, Top, Bottom, Center } from "../custom-icons";

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

    render() {
        const { attributes, setAttributes, clientId, className } = this.props;
        const {
            blockId,
            contentVerticleAlign,
            mediaId,
            mediaUrl,
            about_title,
            about_para,
            opposite_column_order,
            padding,
            titleColor,
            descColor,
            titleFontSize,
            descFontSize,
            titleFontWeight,
            descFontWeight,
            titleFontFamily,
            descFontFamily,
            contentHorizontalAlign,
        } = attributes;

        setAttributes({ blockId: clientId });

        const classes = classnames(className, `row`, opposite_column_order);

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__("Content Alignment (Verticle)", "wp-learning")} initialOpen={false} >
                        <div class="verticle-align">
                            <i
                                className={` ${ "flex-start" === contentVerticleAlign ? "active" : "" }`}
                                onClick={() =>
                                    setAttributes({ contentVerticleAlign: "flex-start" })
                                }
                            >
                                {Top}
                            </i>
                            <i
                                className={` ${ "center" === contentVerticleAlign ? "active" : "" }`}
                                onClick={() => setAttributes({ contentVerticleAlign: "center" })}
                            >
                                {Center}
                            </i>
                            <i
                                className={` ${ "flex-end" === contentVerticleAlign ? "active" : "" }`}
                                onClick={() =>
                                    setAttributes({ contentVerticleAlign: "flex-end" })
                                }
                            >
                                {Bottom}
                            </i>
                        </div>
                    </PanelBody>
                    <PanelBody title={__("Spacings", "wp-learning")} initialOpen={false}>
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
                    </PanelBody>

                    <PanelBody title={__("Text Color Settings", "wp-learning")} initialOpen={false} >
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Title Text color", "wp-learning")}
                            </label>
                            <ColorPalette
                                value={titleColor}
                                onChange={(titleColor) => {
                                    setAttributes({
                                        titleColor: titleColor
                                        ? titleColor
                                        : "#000000",
                                    });
                                }}
                            />
                            <label className="row-panel-label">
                                {__("Description Text color", "wp-learning")}
                            </label>
                            <ColorPalette
                                value={descColor}
                                onChange={(descColor) => {
                                    setAttributes({
                                        descColor: descColor ? descColor : "#000000",
                                    });
                                }}
                            />
                        </div>
                    </PanelBody>

                    <PanelBody title={__("Typography Settings", "wp-learning")} initialOpen={false} >
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Title Settings:", "wp-learning")}
                            </label>
                            <SelectControl
                                label={__("Font Family", "wp-learning")}
                                value={titleFontFamily}
                                options={[
                                    { label: "Roboto", value: "Roboto" },
                                    { label: "Nautigal", value: "Nautigal" },
                                    { label: "RobotoSlab", value: "RobotoSlab" }
                                ]}
                                onChange={(titleFontFamily) =>
                                    setAttributes({ titleFontFamily })
                                }
                            />
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Font Size", "wp-learning")}
                                        value={titleFontSize}
                                        onChange={(titleFontSize) =>
                                            setAttributes({ titleFontSize })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <SelectControl
                                        label={__("Font Weight", "wp-learning")}
                                        value={titleFontWeight}
                                        options={[
                                            { label: 400, value: 400 },
                                            { label: 500, value: 500 },
                                            { label: 600, value: 600 },
                                            { label: 700, value: 700 },
                                            { label: 800, value: 800 },
                                            { label: 900, value: 900 },
                                            { label: "Bold", value: "bold" },
                                            { label: "Bolder", value: "bolder" },
                                            { label: "inherit", value: "inherit" },
                                        ]}
                                        onChange={(titleFontWeight) =>
                                            setAttributes({ titleFontWeight })
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Description settings", "wp-learning")}
                            </label>
                            <SelectControl
                                label={__("Font Family", "wp-learning")}
                                value={descFontFamily}
                                options={[
                                    { label: "Roboto", value: "Roboto" },
                                    { label: "Nautigal", value: "Nautigal" },
                                    { label: "RobotoSlab", value: "RobotoSlab" }
                                ]}
                                onChange={(descFontFamily) =>
                                    setAttributes({ descFontFamily })
                                }
                            />
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Font Size", "wp-learning")}
                                        value={descFontSize}
                                        onChange={(descFontSize) =>
                                            setAttributes({ descFontSize })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <SelectControl
                                        label={__("Font Weight", "wp-learning")}
                                        value={descFontWeight}
                                        options={[
                                            { label: 400, value: 400 },
                                            { label: 500, value: 500 },
                                            { label: 600, value: 600 },
                                            { label: 700, value: 700 },
                                            { label: 800, value: 800 },
                                            { label: 900, value: 900 },
                                            { label: "Bold", value: "bold" },
                                            { label: "Bolder", value: "bolder" },
                                            { label: "inherit", value: "inherit" },
                                        ]}
                                        onChange={(descFontWeight) =>
                                            setAttributes({ descFontWeight })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>

                <BlockControls>
                    <AlignmentControl
                        value={contentHorizontalAlign}
                        onChange={(newalign) =>
                            setAttributes({ contentHorizontalAlign: newalign })
                        }
                    />
                    <ToolbarGroup>
                        <Button
                            label="flip Column"
                            icon={Flip}
                            className="my-custom-button"
                            onClick={() =>
                                setAttributes({
                                opposite_column_order:
                                    opposite_column_order !== "" ? "" : "opposite_column_order",
                                })
                            }
                        />
                    </ToolbarGroup>
                </BlockControls>

                <div className={classes}>
                    <div className="col-50 media ">
                        {mediaId == 0 && (
                            <MediaUpload
                                onSelect={(media) => {
                                    setAttributes({
                                        mediaId: media.id,
                                        mediaUrl: media.url,
                                    });
                                }}
                                value={mediaId}
                                allowedTypes={["image"]}
                                render={({ open }) => (
                                    <Button
                                        className="editor-post-featured-image__toggle"
                                        onClick={open}
                                    >
                                        {__("Upload Image", "wp-learning")}
                                    </Button>
                                )}
                            />
                        )}
                        {mediaId !== 0 && (
                            <div className="about-img">
                                <img src={mediaUrl} />
                                <div className="about-img-edit-section">
                                    <div className="image-edit">
                                        <MediaUpload
                                            onSelect={(media) => {
                                                setAttributes({
                                                    mediaId: media.id,
                                                    mediaUrl: media.url,
                                                });
                                            }}
                                            value={mediaId}
                                            allowedTypes={["image"]}
                                            render={({ open }) => (
                                                <Button onClick={open}>
                                                    {__(Edit, "wp-learning")}
                                                </Button>
                                            )}
                                        />
                                    </div>
                                    <div className="image-remove">
                                        <MediaUploadCheck>
                                            <Button
                                                onClick={() => {
                                                    setAttributes({
                                                        mediaId: 0,
                                                        mediaUrl: "",
                                                    });
                                                }}
                                            >
                                                {__(Remove, "wp-learning")}
                                            </Button>
                                        </MediaUploadCheck>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-50 content">
                        <RichText
                            tagName="h2"
                            onChange={(value) => setAttributes({ about_title: value })}
                            allowedFormats={["core/bold", "core/italic"]}
                            value={about_title}
                            placeholder={__("Write your Title...")}
                            className="about-heading"
                        />
                        <RichText
                            tagName="p"
                            onChange={(value) => setAttributes({ about_para: value })}
                            allowedFormats={["core/bold", "core/italic"]}
                            value={about_para}
                            placeholder={__("Write your text...")}
                            className="about-desc"
                        />
                    </div>
                    <style>
                        {`
                            #block-${blockId} .wp-block-wp-learning-about-block{
                                align-items: ${contentVerticleAlign};
                            }
                            #block-${blockId} .content{
                                padding:${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
                                text-align: ${contentHorizontalAlign};
                            }
                            #block-${blockId} .content h2{
                                color: ${titleColor};
                                font-size: ${titleFontSize}px;
                                font-weight: ${titleFontWeight};
                                font-family: ${titleFontFamily};
                            }
                            #block-${blockId} .content p{
                                color: ${descColor};
                                font-size: ${descFontSize}px;
                                font-weight: ${descFontWeight};
                                font-family: ${descFontFamily};
                            }
                            
                        `}
                    </style>
                </div>
            </Fragment>
        );
    }
}

registerBlockType("wp-learning/about-block", {
    title: __("About"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("about"), __("details")],
    supports: {
        align: ["full"],
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
            default: 0,
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
            default: "Roboto",
        },
        descFontFamily: {
            type: "string",
            default: "Roboto",
        },
        contentHorizontalAlign: {
            type: "string",
            default: ""
        }
    },
    edit,
    save: (props) => {
        const { attributes, className } = props;
        const {
            contentVerticleAlign,
            mediaUrl,
            about_title,
            about_para,
            opposite_column_order,
            padding,
            titleColor,
            descColor,
            titleFontSize,
            descFontSize,
            titleFontWeight,
            descFontWeight,
            titleFontFamily,
            descFontFamily,
            contentHorizontalAlign,
        } = attributes;

        const classes = classnames(className, `row`, opposite_column_order);

        return (
            <div className={classes}>
                <div className="col-50 media">
                    <img src={mediaUrl} />
                </div>
                <div className="col-50 content">
                    <RichText.Content
                        tagName="h2"
                        allowedFormats={["core/bold", "core/italic"]}
                        value={about_title}
                        placeholder={__("Write your Title...")}
                        className="about-heading"
                    />
                    <RichText.Content
                        tagName="p"
                        allowedFormats={["core/bold", "core/italic"]}
                        value={about_para}
                        placeholder={__("Write your text...")}
                        className="about-desc"
                    />
                </div>
                <style>
                    {`
                        .wp-block-wp-learning-about-block {
                            align-items: ${contentVerticleAlign};
                        }
                        .wp-block-wp-learning-about-block .content {
                            padding:${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
                            text-align: ${contentHorizontalAlign};
                        }
                        .wp-block-wp-learning-about-block .content h2{
                            color: ${titleColor};
                            font-size: ${titleFontSize}px;
                            font-weight: ${titleFontWeight};
                            font-family: ${titleFontFamily};
                        }
                        .wp-block-wp-learning-about-block .content p{
                            color: ${descColor};
                            font-size: ${descFontSize}px;
                            font-weight: ${descFontWeight};
                            font-family: ${descFontFamily};
                        }
                        
                    `}
                </style>
            </div>
        );
    },
});
