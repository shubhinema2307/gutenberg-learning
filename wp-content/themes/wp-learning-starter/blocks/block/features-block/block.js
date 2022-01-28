/**
 *  BLOCK: Feature
 *  ---
 *
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment, useState } = wp.element;
const {
  InspectorControls,
  ColorPalette,
  BlockControls,
  AlignmentControl,
  RichText,
  InnerBlocks,
  MediaUpload,
  MediaUploadCheck,
} = wp.blockEditor;
const {
  PanelBody,
  TextControl,
  SelectControl,
  ToolbarGroup,
  RangeControl,
  Button,
  Tooltip,
} = wp.components;

import { plus, left, right, remove, Remove, Edit } from "../custom-icons";
import $ from 'jquery';

class edit extends Component {

  constructor(props) {
    super(props);
    this.addNewFeature = this.addNewFeature.bind(this);
  }

  componentDidMount() {
    const { setAttributes, attributes } = this.props;
    const { featureContentArray } = attributes;
    if (featureContentArray == 0) {
      this.OnInitFeatures();
    }

    // $('.feature-inner-block').on("click", function(){
      
		jQuery(document).on("focus", ".feature-btn>a", function(e){
      e.preventDefault();
        jQuery(this).parents().children('.btn-Url-wrap').children('.btn-Url').css('display', 'block');
      });

      jQuery(document).on("click", ".close-Url-popup", function(e){
        e.preventDefault();
          jQuery(this).parents().children('.btn-Url-wrap').children('.btn-Url').css('display', 'none');
        });

  }


  OnInitFeatures() {
    const { setAttributes, attributes } = this.props;
    const { featureContentArray } = attributes;

    setAttributes({
      featureContentArray: [
        ...featureContentArray,
        {
          index: 0,
          feature_title: "",
          feature_para: "",
          feature_mediaId: "",
          feature_mediaUrl: "",
          feature_btnUrl: "",
          feature_btnText: ""
        },
      ],
    });
  }

  addNewFeature() {
    //this.setState({count: this.state.count + 1});
    const { setAttributes, attributes } = this.props;
    const { featureContentArray } = attributes;
    let objAddNewFeature = {
      index: featureContentArray.length,
      feature_title: "",
      feature_para: "",
      feature_mediaId: "",
      feature_mediaUrl: "",
      feature_btnUrl: "",
      feature_btnText: ""
    };
    setAttributes({
      featureContentArray: [...featureContentArray, objAddNewFeature],
    });
  }

  movefeature(oldIndex, newIndex) {
    const { attributes, setAttributes } = this.props;
    const { featureContentArray } = attributes;

    let arrayCopy = [...featureContentArray];

    arrayCopy[oldIndex] = featureContentArray[newIndex];
    arrayCopy[newIndex] = featureContentArray[oldIndex];

    setAttributes({
      featureContentArray: arrayCopy,
    });
  }

  render() {
    const { attributes, setAttributes, clientId } = this.props;
    const {
      featureContentArray,
      blockId,
      columns,
      contentAlign,
      featureTitleColor,
      featureDescColor,
      featureTitleFontsize,
      featureDescFontsize,
      featureTitleFontWeight,
      featureDescFontWeight,
      featureTitleFontFamily,
      featureDescFontFamily
    } = attributes;

    setAttributes({ blockId: clientId });

    const blockStyle = {
      "text-align": contentAlign,
    };

    
    // var element = document.getElementsByClassName('btn-Url');
    // for (var i=0;i<element.length;i+=1){
    //   element[i].style.display = 'none';
    // }
    // document.getElementsByClassName('feature-btn>a').addEventListener('click', function() {
    //   element.style.display = 'block';
    // })

    const featureItrableContent = featureContentArray.map((data, index) => {
      return (
        <div className={`feature-inner-block`} style={blockStyle}>
            <div className="move-item">
                {0 < index && (
                    <Tooltip text={__("Move to Left", "wp-learning")}>
                        <i onClick={() => this.movefeature(index, index - 1)}>{left}</i>
                    </Tooltip>
                )}
                {index + 1 < featureContentArray.length && (
                    <Tooltip text={__("Move to Right", "wp-learning")}>
                        <i onClick={() => this.movefeature(index, index + 1)}>
                        {right}
                        </i>
                    </Tooltip>
                )}

            <Tooltip text={__("remove", "wp-learning")}>
              <i
                onClick={() => {
                  if (confirm("Delete Confirm!") == true) {
                    let arrayCopy = [...featureContentArray];
                    arrayCopy.splice(index, 1);
                    setAttributes({ featureContentArray: arrayCopy });
                  }
                }}
              >
                {remove}
              </i>
            </Tooltip>
          </div>

          <div className="feature-img">
            {!data.feature_mediaId && (
              <MediaUpload
                onSelect={(media) => {
                  let arrayCopy = [...featureContentArray];
                  arrayCopy[index].feature_mediaId = media.id;
                  arrayCopy[index].feature_mediaUrl = media.url;
                  setAttributes({
                    featureContentArray: arrayCopy,
                  });
                }}
                value={data.feature_mediaId}
                allowedTypes={["image"]}
                render={({ open }) => (
                  <i
                    className="editor-post-featured-image__toggle"
                    onClick={open}
                  >
                    {__("Upload Image", "wp-learning")}
                  </i>
                )}
              />
            )}
            {data.feature_mediaId !== 0 && (
              <div className="">
                <img src={data.feature_mediaUrl} />
                <div className="feature-img-edit-section">
                  <div className="image-edit">
                    <MediaUpload
                      onSelect={(media) => {
                        let arrayCopy = [...featureContentArray];
                        arrayCopy[index].feature_mediaId = media.id;
                        arrayCopy[index].feature_mediaUrl = media.url;
                        setAttributes({
                          featureContentArray: arrayCopy,
                        });
                      }}
                      value={data.feature_mediaId}
                      allowedTypes={["image"]}
                      render={({ open }) => (
                        <i onClick={open}>
                          {__(Edit, "wp-learning")}
                        </i>
                      )}
                    />
                  </div>
                  <div className="image-remove">
                    <MediaUploadCheck>
                      <i
                        onClick={() => {
                          let arrayCopy = [...featureContentArray];
                          arrayCopy[index].feature_mediaId = 0;
                          arrayCopy[index].feature_mediaUrl = "";
                          setAttributes({
                            featureContentArray: arrayCopy,
                          });
                        }}
                      >
                        {__(Remove, "wp-learning")}
                      </i>
                    </MediaUploadCheck>
                  </div>
                </div>
              </div>
            )}
          </div>
          <RichText
            tagName="h1"
            onChange={(value) => {
              let arrayCopy = [...featureContentArray];
              arrayCopy[index].feature_title = value;
              setAttributes({ featureContentArray: arrayCopy });
            }}
            allowedFormats={["core/bold", "core/italic"]}
            value={data.feature_title}
            placeholder={__("Heading...")}
            className="feature-heading"
          />

          <RichText
            tagName="p"
            onChange={(value) => {
              let arrayCopy = [...featureContentArray];
              arrayCopy[index].feature_para = value;
              setAttributes({ featureContentArray: arrayCopy });
            }}
            allowedFormats={["core/bold", "core/italic"]}
            value={data.feature_para}
            placeholder={__("Paragraph...")}
            className="feature-desc"
          />

          <div className="feature-btn">
            <div className="btn-Url-wrap">
              <div className="btn-Url">
                  <div className="close-Url-popup"><i>{Remove}</i></div>
                  <TextControl
                    label={__( "Button Url", "wp-learning" )}
                    value={data.feature_btnUrl}
                    onChange={(value) => {
                      let arrayCopy = [...featureContentArray];
                      arrayCopy[index].feature_btnUrl = value;
                      setAttributes({ featureContentArray: arrayCopy });
                    }}
                  />
              </div>
            </div>
            <RichText
            tagName="a"
            href={data.feature_btnUrl}
            onChange={(value) => {
              let arrayCopy = [...featureContentArray];
              arrayCopy[index].feature_btnText = value;
              setAttributes({ featureContentArray: arrayCopy });
            }}
            allowedFormats={["core/bold", "core/italic"]}
            value={data.feature_btnText}
            placeholder={__("Button Text")}
            className="feature-btn-txt"
          />
          </div>
        </div>
      );
    });

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Outer Feature block columns", "wp-learning")}
            initialOpen={false}
          >
            <RangeControl
              label={__("columns", "wp-learning")}
              value={columns}
              onChange={(columns) => setAttributes({ columns })}
              min={1}
              max={6}
            />
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
                value={featureTitleColor}
                onChange={(featureTitleColor) => {
                  setAttributes({
                    featureTitleColor: featureTitleColor
                      ? featureTitleColor
                      : "#000000",
                  });
                }}
              />
            </div>
            <div className="row-panel">
              <label className="row-panel-label">
                {__("Description Text color", "wp-learning")}
              </label>
              <ColorPalette
                value={featureDescColor}
                onChange={(featureDescColor) => {
                  setAttributes({
                    featureDescColor: featureDescColor
                      ? featureDescColor
                      : "#000000",
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
                        value={featureTitleFontFamily}
                        options={[
                            { label: "Roboto", value: "Roboto" },
                            { label: "Nautigal", value: "Nautigal" },
                        ]}
                        onChange={(newval) => setAttributes({ featureTitleFontFamily: newval })}
                    />
                    <div className="row">
                        <div className="col-50">
                            <TextControl
                              type="number"
                              label={__( "Font Size", "wp-learning" )}
                              value={featureTitleFontsize}
                              onChange={featureTitleFontsize=>setAttributes({featureTitleFontsize})}
                            />
                        </div>
                        <div className="col-50">
                            <SelectControl
                              label={__( "Font Weight", "wp-learning" )}
                              value={featureTitleFontWeight}
                              options={[
                                { label: 400, value:400 },
                                { label: 500, value:500 },
                                { label: 600, value:600 },
                                { label: 700, value:700 },
                                { label: 800, value:800 },
                                { label: 900, value:900 },
                                { label: "Bold", value:"bold" },
                                { label: "Bolder", value:"bolder" },
                                { label: "inherit", value:"inherit" },
                              ]}
                              onChange={featureTitleFontWeight=>setAttributes({featureTitleFontWeight})}
                            />
                        </div>
                    </div>
                </div>
         
                <div className="row-panel">
                    <label className="row-panel-label">
                      {__("Description Settings:", "wp-learning")}
                    </label>
                    <SelectControl
                        label={__("Font Family", "wp-learning")}
                        value={featureDescFontFamily}
                        options={[
                            { label: "Roboto", value: "Roboto" },
                            { label: "Nautigal", value: "Nautigal" },
                        ]}
                        onChange={(newval) => setAttributes({ featureDescFontFamily: newval })}
                    />
                    <div className="row">
                      <div className="col-50">
                          <TextControl
                            type="number"
                            label={__( "Font Size", "wp-learning" )}
                            value={featureDescFontsize}
                            onChange={featureDescFontsize=>setAttributes({featureDescFontsize})}
                          />
                      </div>
                      <div className="col-50">
                          <SelectControl
                            label={__( "Font Weight", "wp-learning" )}
                            value={featureDescFontWeight}
                            options={[
                              { label: 400, value:400 },
                              { label: 500, value:500 },
                              { label: 600, value:600 },
                              { label: 700, value:700 },
                              { label: 800, value:800 },
                              { label: 900, value:900 },
                              { label: "Bold", value:"bold" },
                              { label: "Bolder", value:"bolder" },
                              { label: "inherit", value:"inherit" },
                          ]}
                            onChange={featureDescFontWeight=>setAttributes({featureDescFontWeight})}
                          />
                      </div>
                    </div>
                </div>
          </PanelBody>

          {/* <PanelBody title={__("Button Settings", "wp-learning")} initialOpen={false} >
              <div className="row-panel">
                  <TextControl
                    label={__("Button Text", "wp-learning")}
                    value={featureBtnText}
                    onChange={featureBtnText=>setAttributes({featureBtnText})}
                  />
              </div>
          </PanelBody> */}
        </InspectorControls>

        <BlockControls>
          <ToolbarGroup>
            <AlignmentControl
              value={contentAlign}
              onChange={(contentAlign) => {
                setAttributes({ contentAlign });
              }}
            />
          </ToolbarGroup>
        </BlockControls>
        <div className={`features-outer-block has-${columns}-columns`}>
          {featureItrableContent}
          <p className="add-feature-btn">
            
            <Tooltip text={__("add new feature", "wp-learning")}>
              <i
                onClick={() => {
                  this.addNewFeature();
                }}
              >
                {plus}
              </i>
            </Tooltip>
          </p>
        </div>

        <style>
          {`
                #block-${blockId} > .has-${columns}-columns{
                    display:flex;
                    flex-wrap: wrap;
                }
                #block-${blockId} > .has-${columns}-columns > div{
                    width: calc(100%/${columns});
                }
                #block-${blockId} .feature-inner-block h1{
                color: ${featureTitleColor};
                font-size: ${featureTitleFontsize}px;
                font-weight: ${featureTitleFontWeight};
                }
                #block-${blockId} .feature-inner-block p{
                color: ${featureDescColor};
                font-size: ${featureDescFontsize}px;
                font-weight: ${featureDescFontWeight};
                }
               
            `}
        </style>
      </Fragment>
    );
  }
}

registerBlockType("wp-learning/features-block", {
  title: __("feature inner"),
  icon: "format-aside",
  category: "my-custom-block",
  keywords: [__("feature"), __("features")],
  supports: {
    align: ["full"],
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
    },
    featureBtnText: {
      type: "string",
      default: ""
    }
  },

  edit,

  save({ attributes }) {
    const {
      blockId,
      featureContentArray,
      columns,
      contentAlign,
      featureTitleColor,
      featureDescColor,
      featureTitleFontsize,
      featureDescFontsize,
      featureTitleFontWeight,
      featureDescFontWeight,
    } = attributes;

    const blockStyle = {
      "text-align": contentAlign,
    };

    return (
      <div>
        {featureContentArray.length > 0 && (
          <div className={`features-outer-block has-${columns}-columns`}>
            {featureContentArray.map((data, index) => {
              return (
                <div
                  id={`wp-learning-${blockId}`}
                  className="feature-content-block"
                  style={blockStyle}
                >
                  <div className="feature-img">
                    <img src={data.feature_mediaUrl} />
                  </div>
                  <RichText.Content
                    tagName="h1"
                    value={data.feature_title}
                    className="feature-heading"
                  />
                  <RichText.Content
                    tagName="p"
                    value={data.feature_para}
                    placeholder={__("Write your text...")}
                    className="feature-para"
                  />
                  {/* <InnerBlocks.Content  template={[
                                [ 'wp-learning/button-block']
                            ]} /> */}
                </div>
              );
            })}
          </div>
        )}

        <style>
          {`
                .features-outer-block h1{
                    color: ${featureTitleColor};
                    font-size: ${featureTitleFontsize}px;
                    font-weight: ${featureTitleFontWeight};
                }
                .features-outer-block p{
                color: ${featureDescColor};
                font-size: ${featureDescFontsize}px;
                font-weight: ${featureDescFontWeight};
                }
             `}
        </style>
      </div>
    ); //save return
  }, //save
}); //registerblocktype
