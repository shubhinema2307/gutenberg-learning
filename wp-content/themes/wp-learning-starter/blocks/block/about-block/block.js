/**
 *  BLOCK: About
 *  ---
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
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
  ToolbarDropdownMenu,
  Button,
} = wp.components;

import { Flip, Edit, Remove } from "../custom-icons";

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
    },
  },
  // The UI for the WordPress editor
  edit: (props) => {
    const { attributes, setAttributes, clientId, className } = props;
    const {
      blockId,
      aboutVerticleAlign,
      mediaId,
      mediaUrl,
      about_title,
      about_para,
      opposite_column_order,
      aboutContentPaddTop,
      aboutContentPaddRight,
      aboutContentPaddBottom,
      aboutContentPaddLeft,
      aboutTitleColor,
      aboutDescColor,
      aboutTitleFontsize,
      aboutDescFontsize,
      aboutTitleFontWeight,
      aboutDescFontWeight,
      aboutContentAlign,
    } = attributes;

    setAttributes({ blockId: clientId });

    let blockStyle = {};
    let blockContentStyle = {};
    
    ((aboutVerticleAlign) => {
      if(aboutVerticleAlign !== ''){
        return (
          blockStyle = {
            "align-items": aboutVerticleAlign,
          }
        )
      }
    })(aboutVerticleAlign);
   

    

    ((pt, pb, pr, pl, align) => {
      if((pt !== 0) || (pb !== 0) || (pr !==0) || (pl !== 0)){
        blockContentStyle["padding"] = (
              aboutContentPaddTop +
              "px " +
              aboutContentPaddRight +
              "px " +
              aboutContentPaddBottom +
              "px " +
              aboutContentPaddLeft +
              "px");
      }
      if(align !== ''){
        blockContentStyle["text-align"] = align;
      }
    })(aboutContentPaddTop, aboutContentPaddRight, aboutContentPaddBottom, aboutContentPaddLeft, aboutContentAlign);


    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Content Alignment (Verticle)", "wp-learning")}
            initialOpen={false}
          >
            <SelectControl
              value={aboutVerticleAlign}
              options={[
                { 
                  label: "flex-start", value: "flex-start" 
                },
                { label: "center", value: "center" },
                { label: "flex-end", value: "flex-end" },
              ]}
              onChange={(newval) =>
                setAttributes({ aboutVerticleAlign: newval })
              }
            />
          </PanelBody>
          <PanelBody
            title={__("Spacings", "wp-learning")}
            initialOpen={false}
          >
            <div className="row">
              <div className="col-25">
                <TextControl
                  label={__("Top:", "wp-learning")}
                  value={aboutContentPaddTop}
                  onChange={(aboutContentPaddTop) => {
                    setAttributes({
                      aboutContentPaddTop: parseInt(aboutContentPaddTop),
                    });
                  }}
                />
              </div>
              <div className="col-25">
                <TextControl
                  label={__("Right", "wp-learning")}
                  value={aboutContentPaddRight}
                  onChange={(aboutContentPaddRight) => {
                    setAttributes({
                      aboutContentPaddRight: parseInt(aboutContentPaddRight),
                    });
                  }}
                />
              </div>
              <div className="col-25">
                <TextControl
                  label={__("Bottom", "wp-learning")}
                  value={aboutContentPaddBottom}
                  onChange={(aboutContentPaddBottom) => {
                    setAttributes({
                      aboutContentPaddBottom: parseInt(aboutContentPaddBottom),
                    });
                  }}
                />
              </div>
              <div className="col-25">
                <TextControl
                  label={__("Left", "wp-learning")}
                  value={aboutContentPaddLeft}
                  onChange={(aboutContentPaddLeft) => {
                    setAttributes({
                      aboutContentPaddLeft: parseInt(aboutContentPaddLeft),
                    });
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
              <TextControl
                label={__("Title Font size", "wp-learning")}
                value={aboutTitleFontsize}
                onChange={(aboutTitleFontsize) => {
                  setAttributes({
                    aboutTitleFontsize: parseInt(aboutTitleFontsize),
                  });
                }}
              />
            </div>

            <div className="row-panel">
              <TextControl
                label={__("Description Font size", "wp-learning")}
                value={aboutDescFontsize}
                onChange={(aboutDescFontsize) => {
                  setAttributes({
                    aboutDescFontsize: parseInt(aboutDescFontsize),
                  });
                }}
              />
            </div>

            <div className="row-panel">
              <SelectControl
                label={__("Title Font Weight", "wp-learning")}
                value={aboutTitleFontWeight}
                options={[
                  { label: 300, value: 300 },
                  { label: 500, value: 500 },
                  { label: 700, value: 700 },
                  { label: 900, value: 900 },
                ]}
                onChange={(aboutTitleFontWeight) => {
                  setAttributes({
                    aboutTitleFontWeight: parseInt(aboutTitleFontWeight),
                  });
                }}
              />
            </div>

            <div className="row-panel">
              <SelectControl
                label={__("Description Font Weight", "wp-learning")}
                value={aboutDescFontWeight}
                options={[
                  { label: 300, value: 300 },
                  { label: 500, value: 500 },
                  { label: 700, value: 700 },
                  { label: 900, value: 900 },
                ]}
                //onChange={(newval) => setAttributes({ aboutDescFontWeight: newval })}
                onChange={(aboutDescFontWeight) => {
                  setAttributes({
                    aboutDescFontWeight: parseInt(aboutDescFontWeight),
                  });
                }}
              />
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

        <div
          style={blockStyle}
          className={`${className} row ${opposite_column_order}`}
        >
          <div className="col-50 media ">
            {mediaId == 0 && (
              <MediaUpload
                onSelect={(media) => {
                  setAttributes({
                    mediaId: media.id,
                    mediaUrl: media.url,
                  })
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
                        })
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
                      <Button onClick={() => {
                        setAttributes({
                          mediaId: 0,
                          mediaUrl: "",
                        });
                      }}>
                        {__(Remove, "wp-learning")}
                      </Button>
                    </MediaUploadCheck>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-50 content" style={blockContentStyle}>
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
        </div>
        <style>
          {`

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
      </Fragment>
    );
  },
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
      aboutContentPaddTop,
      aboutContentPaddRight,
      aboutContentPaddBottom,
      aboutContentPaddLeft,
      aboutTitleColor,
      aboutDescColor,
      aboutTitleFontsize,
      aboutDescFontsize,
      aboutTitleFontWeight,
      aboutDescFontWeight,
      aboutContentAlign,
    } = attributes;

    const blockStyle = {
      "align-item": aboutVerticleAlign,
    };

    const blockContentStyle = {
      padding:
        aboutContentPaddTop +
        "px " +
        aboutContentPaddRight +
        "px " +
        aboutContentPaddBottom +
        "px " +
        aboutContentPaddLeft +
        "px",
      "text-align": aboutContentAlign,
    };
    const blockContentTitleStyle = {
      color: aboutTitleColor,
      "font-size": aboutTitleFontsize + "px",
      "font-weight": aboutTitleFontWeight,
    };
    const blockContentDescStyle = {
      color: aboutDescColor,
      "font-size": aboutDescFontsize + "px",
      "font-weight": aboutDescFontWeight,
    };

    return (
      <Fragment>
        <div
          className={`wp-block-wp-learning-about-block row ${opposite_column_order}`}
          style={blockStyle}
        >
          <div className="col-50 media">
            <img src={mediaUrl} />
          </div>
          <div className="col-50 content" style={blockContentStyle}>
            <RichText.Content
              tagName="h2"
              allowedFormats={["core/bold", "core/italic"]}
              value={about_title}
              placeholder={__("Write your Title...")}
              className="about-heading"
              style={blockContentTitleStyle}
            />
            <RichText.Content
              tagName="p"
              allowedFormats={["core/bold", "core/italic"]}
              value={about_para}
              placeholder={__("Write your text...")}
              className="about-desc"
              style={blockContentDescStyle}
            />
          </div>
        </div>

        <style>
          {`

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
      </Fragment>
    );
  },
});
