/**
 *  BLOCK: banner
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
    MediaUpload, 
    MediaUploadCheck,
    RichText,
    InnerBlocks 
  } = wp.blockEditor;
  const { 
      PanelBody,
      TextControl,
      SelectControl,
      ToolbarGroup,
      Button,
      ResponsiveWrapper,
      PanelRow,
      ToggleControl,
      RangeControl
  } = wp.components;

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
      const { attributes, setAttributes, clientId } = this.props;
    const {
      blockId, 
      mediaId,
      mediaUrl,
      padding,
      banner_bg_size,
      banner_bg_repeat,
      contentAlign,
      BannerTitleColor,
      BannerDescColor,
      bannerTitleFontsize,
      bannerDescFontsize,
      bannerTitleFontWeight,
      bannerDescFontWeight,
      titleFontFamily,
      descFontFamily,
      bannerImgOverlay,
      imgOverlayDegree,
      imgOverlayTop_r,
      imgOverlayTop_g,
      imgOverlayTop_b,
      imgOverlayTop_a,
      imgOverlayBot_r,
      imgOverlayBot_g,
      imgOverlayBot_b,
      imgOverlayBot_a,
      BannerBgColor
    } = attributes;

      setAttributes({ blockId: clientId });
 

  //linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("");

  const blockStyle = {    
     background: bannerImgOverlay !== false ? `linear-gradient(`+ imgOverlayDegree + `deg, rgba(`+ imgOverlayBot_r + `,` + imgOverlayBot_g + `,` + imgOverlayBot_b + `,` + imgOverlayBot_a + `), rgba(`+ imgOverlayTop_r + `,` + imgOverlayTop_g + `,` + imgOverlayTop_b + `,` + imgOverlayTop_a + `)), url("`+ mediaUrl +`")` : `url("` + mediaUrl + `")`,
    
     'background-size': banner_bg_size,
     'background-repeat': banner_bg_repeat,
     'padding': padding[0] + `px ` + padding[1] + `px ` + padding[2] + `px ` + padding[3] + `px`,
     'text-align': contentAlign
   }

   if(mediaUrl == ''){
     blockStyle.background = BannerBgColor
     delete blockStyle["background-size"];
     delete blockStyle["background-repeat"];
   }
   
    return (
        <Fragment>
              <InspectorControls>
               
                <PanelBody title={__("Background Color", "wp-learning")}  initialOpen={ false }>
                  <div className="row-panel image-overlay-setting">
                        <label className="row-panel-label">
                        { __( 'Background Color rgba:', 'wp-learning' ) }
                        </label>
                        <ColorPalette
                            value={BannerBgColor}
                            onChange={(BannerBgColor) => {
                              setAttributes({
                                BannerBgColor: BannerBgColor
                                  ? BannerBgColor
                                  : "#000000",
                              });
                            }}
                          />
                    </div>
                </PanelBody>
          
                <PanelBody title={__("Background Image", "wp-learning")}  initialOpen={ false }>
                  <div className="editor-post-featured-image">
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={(media) => {
                          setAttributes({
                            mediaId: media.id,
                            mediaUrl: media.url
                          })
                        }}
                        value={mediaId}
                        allowedTypes={ ['image'] }
                        render={({open}) => (
                          <Button 
                          className={mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
                            onClick={open}
                          >
                            {mediaId == 0 && __('Choose an image', 'wp-learning')}

                            {mediaId != 0 && 
                                      <p>
                                        <img src={mediaUrl} />
                                      </p>
                                    }
                          </Button>
                        )}
                      />
                    </MediaUploadCheck>

                    <div className="row row-panel">
                      <div className="col-50">
                        {mediaId != 0 && 
                          <MediaUploadCheck>
                            <MediaUpload
                              title={__('Replace image', 'wp-learning')}
                              value={mediaId}
                              onSelect={(media) => {
                                setAttributes({
                                  mediaId: media.id,
                                  mediaUrl: media.url
                                })
                              }}
                              allowedTypes={['image']}
                              render={({open}) => (
                                <Button onClick={open} isSecondary isLarge>{__('Replace image', 'wp-learning')}</Button>
                              )}
                            />
                          </MediaUploadCheck>
                        }
                        </div>
                        <div className="col-50">
                          {mediaId != 0 && 
                            <MediaUploadCheck>
                              <Button 
                                onClick={() => {
                                  setAttributes({
                                    mediaId: 0,
                                    mediaUrl: ''
                                  })
                                }} isLink isDestructive>
                                  {__('Remove image', 'wp-learning')}</Button>
                            </MediaUploadCheck>
                          }
                        </div>
                    </div>
                  </div>
                  

                {mediaId !== 0 &&
                  <div className="row-panel">
                    <ToggleControl
                      label="Image Overlay?"
                      help={bannerImgOverlay ? "Yes" : "No"}
                      checked={bannerImgOverlay}
                      onChange={() => setAttributes({ bannerImgOverlay: !bannerImgOverlay })}
                    />

                    {bannerImgOverlay !== false &&
                    <div>

                      <div className="row">
                        <label>
                            { __( 'Overlay Degree', 'wp-learning' ) }
                        </label>
                         <TextControl
                          value={imgOverlayDegree}
                          onChange={(imgOverlayDegree) => {
                            setAttributes({
                              imgOverlayDegree: parseInt(imgOverlayDegree),
                            });
                          }}
                        />
                      </div>
                      <div className="row-panel image-overlay-setting">
                        <label className="row-panel-label">
                        { __( 'rgba Top:', 'wp-learning' ) }
                        </label>
                          <div className="row">
                            <div class="col-25">
                              <TextControl
                                value={imgOverlayTop_r}
                                onChange={(newval) => {
                                  setAttributes({
                                    imgOverlayTop_r: parseInt(newval),
                                  });
                                }}
                              />
                            </div>
                            <div class="col-25">
                              <TextControl
                                value={imgOverlayTop_g}
                                onChange={(imgOverlayTop_g) => {
                                  setAttributes({
                                    imgOverlayTop_g: parseInt(imgOverlayTop_g),
                                  });
                                }}
                              />
                            </div>
                            <div class="col-25">
                              <TextControl
                                value={imgOverlayTop_b}
                                onChange={(imgOverlayTop_b) => {
                                  setAttributes({
                                    imgOverlayTop_b: parseInt(imgOverlayTop_b),
                                  });
                                }}
                              />
                            </div>
                            <div class="col-25">
                              <RangeControl
                                  value={ imgOverlayTop_a }
                                  onChange={imgOverlayTop_a=>setAttributes({imgOverlayTop_a})}
                                  min={ 0.0 }
                                  max={ 1.0 }
                                  step={ 0.1 }   
                                />
                            </div>
                            </div>
                      </div>

                      <div className="row-panel image-overlay-setting">
                        <label className="row-panel-label">
                        { __( 'rgba Bottom:', 'wp-learning' ) }
                        </label>
                          <div className="row">
                            <div class="col-25">
                              <TextControl
                                value={imgOverlayBot_r}
                                onChange={(imgOverlayBot_r) => {
                                  setAttributes({
                                    imgOverlayBot_r: parseInt(imgOverlayBot_r),
                                  });
                                }}
                              />
                            </div>
                            <div class="col-25">
                              <TextControl
                                value={imgOverlayBot_g}
                                onChange={(imgOverlayBot_g) => {
                                  setAttributes({
                                    imgOverlayBot_g: parseInt(imgOverlayBot_g),
                                  });
                                }}
                              />
                            </div>
                            <div class="col-25">
                              <TextControl
                                value={imgOverlayBot_b}
                                onChange={(imgOverlayBot_b) => {
                                  setAttributes({
                                    imgOverlayBot_b: parseInt(imgOverlayBot_b),
                                  });
                                }}
                              />
                            </div>
                            <div class="col-25">
                              <RangeControl
                                  value={ imgOverlayBot_a }
                                  onChange={imgOverlayBot_a=>setAttributes({imgOverlayBot_a})}
                                  min={ 0.0 }
                                  max={ 1.0 }
                                  step={ 0.1 }   
                                />
                            </div>
                          </div>
                      </div>
                    </div>
                    }
                  </div>
                  }

                  <div className="row-panel">
                    <SelectControl
                        label={__("Background Size", "wp-learning")}
                        value={banner_bg_size}
                        options={[
                          { label: "auto", value: "auto" },
                          { label: "cover", value: "cover" },
                          { label: "contain", value: "contain" },
                        ]}
                        onChange={(newval) => setAttributes({ banner_bg_size: newval })}
                      />
                  </div>

                  <div className="row-panel">
                    <SelectControl
                        label={__("Background Repeat", "wp-learning")}
                        value={banner_bg_repeat}
                        options={[
                          { label: "repeat", value: "repeat" },
                          { label: "repeat-x", value: "repeat-x" },
                          { label: "repeat-y", value: "repeat-y" },
                          { label: "no-repeat", value: "no-repeat" },
                        ]}
                        onChange={(newval) => setAttributes({ banner_bg_repeat: newval })}
                      />
                  </div>
                </PanelBody>
          

                <PanelBody title={__("Spacing", "wp-learning")}  initialOpen={ false }>
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

                <PanelBody title={__("Color Settings", "wp-learning")}  initialOpen={ false }>
                  <div className="row-panel">
                    <label className="row-panel-label">
                        { __( 'Title Text color', 'wp-learning' ) }
                    </label>
                    <ColorPalette
                      value={BannerTitleColor}
                      onChange={(BannerTitleColor) => {
                        setAttributes({
                          BannerTitleColor: BannerTitleColor
                            ? BannerTitleColor
                            : "#000000",
                        });
                      }}
                    />
                  </div>

                  <div className="row-panel">
                    <label className="row-panel-label">
                        { __( 'Description Text color', 'wp-learning' ) }
                    </label>
                    <ColorPalette
                      value={BannerDescColor}
                      onChange={(BannerDescColor) => {
                        setAttributes({
                          BannerDescColor: BannerDescColor
                            ? BannerDescColor
                            : "#000000",
                        });
                      }}
                    />
                  </div>
                </PanelBody>

                <PanelBody title={__("Typography Settings", "wp-learning")}  initialOpen={ false }>
                  <div className="row-panel">
                    <label className="row-panel-label">
                        { __( 'Title Settings', 'wp-learning' ) }
                    </label>
                    <SelectControl
                        label={__("Font Family", "wp-learning")}
                        value={titleFontFamily}
                        options={[
                            { label: "Roboto", value: "Roboto" },
                            { label: "Nautigal", value: "Nautigal" },
                        ]}
                        onChange={(newval) => setAttributes({ titleFontFamily: newval })}
                    />
                    <div className="row">
                      <div className="col-50">
                        <TextControl
                          type="number"
                          label={__( "Font Size", "wp-learning" )}
                          value={bannerTitleFontsize}
                          onChange={bannerTitleFontsize=>setAttributes({bannerTitleFontsize})}
                        />
                      </div>
                      <div className="col-50">
                        <SelectControl
                          label={__( "Font Weight", "wp-learning" )}
                          value={bannerTitleFontWeight}
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
                          onChange={bannerTitleFontWeight=>setAttributes({bannerTitleFontWeight})}
                        />
                      </div>
                    </div>
                    
                  </div>

                  <div className="row-panel">
                    <label className="row-panel-label">
                        { __( 'Deescription Settings', 'wp-learning' ) }
                    </label>
                    <SelectControl
                        label={__("Font Family", "wp-learning")}
                        value={descFontFamily}
                        options={[
                            { label: "Roboto", value: "Roboto" },
                            { label: "Nautigal", value: "Nautigal" },
                        ]}
                        onChange={(newval) => setAttributes({ descFontFamily: newval })}
                    />
                    <div className="row">
                      <div className="col-50">
                      <TextControl
                          type="number"
                          label={__( "Font Size", "wp-learning" )}
                          value={bannerDescFontsize}
                          onChange={bannerDescFontsize=>setAttributes({bannerDescFontsize})}
                        />
                      </div>
                      <div className="col-50">
                        <SelectControl
                          label={__( "Font Weight", "wp-learning" )}
                          value={bannerDescFontWeight}
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
                          onChange={bannerDescFontWeight=>setAttributes({bannerDescFontWeight})}
                        />
                      </div>
                    </div>
                  </div>
                </PanelBody>
                   
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

            <div className={`banner-content-block`} style={blockStyle}>
            <RichText
                tagName="h1"
                onChange={(value) => setAttributes({ banner_heading: value })}
                allowedFormats={["core/bold", "core/italic"]}
                value={attributes.banner_heading}
                placeholder={__("Write your heading...")}
                className="banner-heading"
              />

              <RichText
                tagName="p"
                onChange={(value) => setAttributes({ banner_para: value })}
                allowedFormats={["core/bold", "core/italic"]}
                value={attributes.banner_para}
                placeholder={__("Write your text...")}
                className="banner-desc"
              />
              <InnerBlocks template={[
                    [ 'wp-learning/button-block']
                ]} />
            </div>

            <style>
              {`
                  #block-${blockId} .banner-content-block h1{
                    color: ${BannerTitleColor};
                    font-size: ${bannerTitleFontsize}px;
                    font-weight: ${bannerTitleFontWeight};
                    font-family: ${titleFontFamily};
                  }
                  #block-${blockId} .banner-content-block p{
                    color: ${BannerDescColor};
                    font-size: ${bannerDescFontsize}px;
                    font-weight: ${bannerDescFontWeight};
                    font-family: ${descFontFamily};
                  }
                  
              `}
            </style>
        </Fragment>
    );
    }

  }
registerBlockType("wp-learning/banner-block", {
    title: __("banner"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("banner"), __("hero")],
    supports: {
      align: [ 'full' ],
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
      default: [0, 0, 0, 0],
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

  edit,
   save: (props) => {
    const { attributes, clientId } = props;
    const {  
      blockId,
      mediaUrl,
      padding,
      banner_bg_size,
      banner_bg_repeat,
      contentAlign,
      BannerTitleColor,
      BannerDescColor,
      bannerTitleFontsize,
      bannerDescFontsize,
      bannerTitleFontWeight,
      bannerDescFontWeight,
      titleFontFamily,
      descFontFamily,
      bannerImgOverlay,
      imgOverlayDegree,
      imgOverlayTop_r,
      imgOverlayTop_g,
      imgOverlayTop_b,
      imgOverlayTop_a,
      imgOverlayBot_r,
      imgOverlayBot_g,
      imgOverlayBot_b,
      imgOverlayBot_a,
      BannerBgColor } = attributes;

      const blockStyle = {
        background: bannerImgOverlay !== false ? `linear-gradient(`+ imgOverlayDegree + `deg, rgba(`+ imgOverlayTop_r + `,` + imgOverlayTop_g + `,` + imgOverlayTop_b + `,` + imgOverlayTop_a + `), rgba(`+ imgOverlayBot_r + `,` + imgOverlayBot_g + `,` + imgOverlayBot_b + `,` + imgOverlayBot_a + `)), url("`+ mediaUrl +`")` : `url("` + mediaUrl + `")`,

        'background-size': banner_bg_size,
        'background-repeat': banner_bg_repeat,
        'padding': padding[0] + `px ` + padding[1] + `px ` + padding[2] + `px ` + padding[3] + `px`,
        'text-align': contentAlign
      }
   
      if(mediaUrl == ''){
        blockStyle.background = BannerBgColor
        delete blockStyle["background-size"];
        delete blockStyle["background-repeat"];
      }
      

    return (
      <Fragment>
        <div id={`wp-learning-${blockId}`}  className="banner-content-block" style={blockStyle}>
            <RichText.Content
                tagName="h1"
                value={attributes.banner_heading}
                placeholder={__("Write your heading...")}
                className="banner-heading"
              />
              <RichText.Content
                tagName="p"
                value={attributes.banner_para}
                placeholder={__("Write your text...")}
                className="banner-para"
              />
              <InnerBlocks.Content  template={[
                    [ 'wp-learning/button-block']
                ]} />
            </div>

            <style>
              {`
                
                  #wp-learning-${blockId} h1{
                    color: ${BannerTitleColor};
                    font-size: ${bannerTitleFontsize}px;
                    font-weight: ${bannerTitleFontWeight};
                  }
                  #wp-learning-${blockId} p{
                    color: ${BannerDescColor};
                    font-size: ${bannerDescFontsize}px;
                    font-weight: ${bannerDescFontWeight};
                  }
                  
              `}
            </style>

      </Fragment>
    )
  },
});