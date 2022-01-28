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
const { PanelBody, TextControl, SelectControl, ToolbarGroup, Button } =
  wp.components;

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
      aboutVerticleAlign,
      mediaId,
      mediaUrl,
      about_title,
      about_para,
      opposite_column_order,
      padding,
      aboutTitleColor,
      aboutDescColor,
      aboutTitleFontsize,
      aboutDescFontsize,
      aboutTitleFontWeight,
      aboutDescFontWeight,
      aboutContentAlign,
    } = attributes;

    setAttributes({ blockId: clientId });

    const classes = classnames(className, `row`, opposite_column_order);

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Content Alignment (Verticle)", "wp-learning")}
            initialOpen={false}
          >
            <div class="verticle-align">
              <i
                className={` ${
                  "flex-start" === aboutVerticleAlign ? "active" : ""
                }`}
                onClick={() =>
                  setAttributes({ aboutVerticleAlign: "flex-start" })
                }
              >
                {Top}
              </i>
              <i
                className={` ${
                  "center" === aboutVerticleAlign ? "active" : ""
                }`}
                onClick={() => setAttributes({ aboutVerticleAlign: "center" })}
              >
                {Center}
              </i>
              <i
                className={` ${
                  "flex-end" === aboutVerticleAlign ? "active" : ""
                }`}
                onClick={() =>
                  setAttributes({ aboutVerticleAlign: "flex-end" })
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

          <PanelBody
            title={__("Text Color Settings", "wp-learning")}
            initialOpen={false}
          >
            <div className="row-panel">
              <label className="row-panel-label">
                {__("Title Text color", "wp-learning")}
              </label>
              <ColorPalette
                value={aboutTitleColor}
                onChange={(aboutTitleColor) => {
                  setAttributes({
                    aboutTitleColor: aboutTitleColor
                      ? aboutTitleColor
                      : "#000000",
                  });
                }}
              />
              <label className="row-panel-label">
                {__("Description Text color", "wp-learning")}
              </label>
              <ColorPalette
                value={aboutDescColor}
                onChange={(aboutDescColor) => {
                  setAttributes({
                    aboutDescColor: aboutDescColor ? aboutDescColor : "#000000",
                  });
                }}
              />
            </div>
          </PanelBody>

          <PanelBody
            title={__("Typography Settings", "wp-learning")}
            initialOpen={false}
          >
            <div className="row-panel">
              <label className="row-panel-label">
                {__("Title settings", "wp-learning")}
              </label>
              <div className="row">
                <div className="col-50">
                  <TextControl
                    type="number"
                    label={__("Font Size", "wp-learning")}
                    value={aboutTitleFontsize}
                    onChange={(aboutTitleFontsize) =>
                      setAttributes({ aboutTitleFontsize })
                    }
                  />
                </div>
                <div className="col-50">
                  <SelectControl
                    label={__("Font Weight", "wp-learning")}
                    value={aboutTitleFontWeight}
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
                    onChange={(aboutTitleFontWeight) =>
                      setAttributes({ aboutTitleFontWeight })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row-panel">
              <label className="row-panel-label">
                {__("Description settings", "wp-learning")}
              </label>
              <div className="row">
                <div className="col-50">
                  <TextControl
                    type="number"
                    label={__("Font Size", "wp-learning")}
                    value={aboutDescFontsize}
                    onChange={(aboutDescFontsize) =>
                      setAttributes({ aboutDescFontsize })
                    }
                  />
                </div>
                <div className="col-50">
                  <SelectControl
                    label={__("Font Weight", "wp-learning")}
                    value={aboutDescFontWeight}
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
                    onChange={(aboutDescFontWeight) =>
                      setAttributes({ aboutDescFontWeight })
                    }
                  />
                </div>
              </div>
            </div>
          </PanelBody>
        </InspectorControls>

        <BlockControls>
          <AlignmentControl
            value={aboutContentAlign}
            onChange={(newalign) =>
              setAttributes({ aboutContentAlign: newalign })
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
                  align-items: ${aboutVerticleAlign};
                }
                #block-${blockId} .content{
                  padding:${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
                  text-align: ${aboutContentAlign};
                }
                #block-${blockId} .content h2{
                  color: ${aboutTitleColor};
                  font-size: ${aboutTitleFontsize}px;
                  font-weight: ${aboutTitleFontWeight};
                }
                #block-${blockId} .content p{
                  color: ${aboutDescColor};
                  font-size: ${aboutDescFontsize}px;
                  font-weight: ${aboutDescFontWeight};
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
  // Enable or disable support for low-level features
  supports: {
    align: ["full"],
  },
  // Set up data model for custom block
  attributes: {
    aboutVerticleAlign: {
      type: "string",
      default: "center",
    },
    blockId: {
      type: "string",
      default: "",
    },
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaUrl: {
      type: "string",
      default: "",
    },
    opposite_column_order: {
      type: "string",
      default: "",
    },
    padding: {
      type: "array",
      default: [0, 0, 0, 0],
    },
    about_title: {
      type: "string",
      default: "",
    },
    about_para: {
      type: "string",
      default: "",
    },
    aboutTitleColor: {
      type: "string",
      default: "",
    },
    aboutDescColor: {
      type: "string",
      default: "",
    },
    aboutTitleFontsize: {
      type: "string",
      default: 20,
    },
    aboutDescFontsize: {
      type: "string",
      default: 16,
    },
    aboutTitleFontWeight: {
      type: "string",
      default: 400,
    },
    aboutDescFontWeight: {
      type: "string",
      default: 400,
    },
    aboutContentAlign: {
      type: "string",
      default: "",
    },
  },
  // The UI for the WordPress editor
  edit,
  // The output on the live site
  save: (props) => {
    const { attributes, clientId, className } = props;
    const {
      blockId,
      aboutVerticleAlign,
      mediaUrl,
      about_title,
      about_para,
      opposite_column_order,
      padding,
      aboutTitleColor,
      aboutDescColor,
      aboutTitleFontsize,
      aboutDescFontsize,
      aboutTitleFontWeight,
      aboutDescFontWeight,
      aboutContentAlign,
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
                  align-items: ${aboutVerticleAlign};
                }
                .wp-block-wp-learning-about-block .content {
                  padding:${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px;
                  text-align: ${aboutContentAlign};
                }
                .wp-block-wp-learning-about-block .content h2{
                  color: ${aboutTitleColor};
                  font-size: ${aboutTitleFontsize}px;
                  font-weight: ${aboutTitleFontWeight};
                }
                .wp-block-wp-learning-about-block .content p{
                  color: ${aboutDescColor};
                  font-size: ${aboutDescFontsize}px;
                  font-weight: ${aboutDescFontWeight};
                }
                 
            `}
        </style>
      </div>
    );
  },
});
