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

  edit: (props) => {
    const { attributes, setAttributes, clientId } = props;
    const {
      blockId, 
      mediaId,
      mediaUrl,
      bannerPaddingTop,
      bannerPaddingRight,
      bannerPaddingBottom,
      bannerPaddingLeft,
      banner_bg_size,
      banner_bg_repeat,
      contentAlign,
      BannerTitleColor,
      BannerDescColor,
      bannerTitleFontsize,
      bannerDescFontsize,
      bannerTitleFontWeight,
      bannerDescFontWeight,
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

    const removeMedia = () => {
		props.setAttributes({
			mediaId: 0,
			mediaUrl: ''
		});
	}
 
 	const onSelectMedia = (media) => {
		props.setAttributes({
			mediaId: media.id,
			mediaUrl: media.url
		});
	}
 

  //linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("");

  const blockStyle = {    
     background: bannerImgOverlay !== false ? `linear-gradient(`+ imgOverlayDegree + `deg, rgba(`+ imgOverlayBot_r + `,` + imgOverlayBot_g + `,` + imgOverlayBot_b + `,` + imgOverlayBot_a + `), rgba(`+ imgOverlayTop_r + `,` + imgOverlayTop_g + `,` + imgOverlayTop_b + `,` + imgOverlayTop_a + `)), url("`+ mediaUrl +`")` : `url("` + mediaUrl + `")`,
    
     'background-size': banner_bg_size,
     'background-repeat': banner_bg_repeat,
     padding: bannerPaddingTop + 'px ' + bannerPaddingRight + 'px ' + bannerPaddingBottom + 'px ' + bannerPaddingLeft + 'px',
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
               
                <PanelBody title={__("Banner Background Color", "wp-learning")}  initialOpen={ false }>
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
          
                <PanelBody title={__("Banner Background Image", "wp-learning")}  initialOpen={ false }>
                  <div className="editor-post-featured-image">
                    <MediaUploadCheck>
                      <MediaUpload
                        onSelect={onSelectMedia}
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
                              onSelect={onSelectMedia}
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
                              <Button onClick={removeMedia} isLink isDestructive>{__('Remove image', 'wp-learning')}</Button>
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
                        label={__("Banner background size", "wp-learning")}
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
                        label={__("Banner background repeat", "wp-learning")}
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
          

                <PanelBody title={__("Banner padding", "wp-learning")}  initialOpen={ false }>
                  <div className="row">
                      <div className="col-25">
                        <TextControl
                          label={__("T:", "wp-learning")}
                          value={bannerPaddingTop}
                          onChange={(bannerPaddingTop) => {
                            setAttributes({
                              bannerPaddingTop: parseInt(bannerPaddingTop),
                            });
                          }}
                        />
                      </div>
                      <div className="col-25">
                        <TextControl
                          label={__("R", "wp-learning")}
                          value={bannerPaddingRight}
                          onChange={(bannerPaddingRight) => {
                            setAttributes({
                              bannerPaddingRight: parseInt(bannerPaddingRight),
                            });
                          }}
                        />
                      </div>
                      <div className="col-25">
                        <TextControl
                          label={__("B", "wp-learning")}
                          value={bannerPaddingBottom}
                          onChange={(bannerPaddingBottom) => {
                            setAttributes({
                              bannerPaddingBottom: parseInt(bannerPaddingBottom),
                            });
                          }}
                        />
                      </div>
                      <div className="col-25">
                        <TextControl
                          label={__("L", "wp-learning")}
                          value={bannerPaddingLeft}
                          onChange={(bannerPaddingLeft) => {
                            setAttributes({
                              bannerPaddingLeft: parseInt(bannerPaddingLeft),
                            });
                          }}
                        />
                      </div>
                    </div>
                </PanelBody>

                <PanelBody title={__("Banner content setting", "wp-learning")}  initialOpen={ false }>
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

                  <div className="row-panel">
                    <TextControl
                      label={__("Banner title font size", "wp-learning")}
                      value={bannerTitleFontsize}
                      onChange={(bannerTitleFontsize) => {
                        setAttributes({
                          bannerTitleFontsize: parseInt(bannerTitleFontsize),
                        });
                      }}
                    />
                  </div>

                  <div className="row-panel">
                    <TextControl
                      label={__("Banner description font size", "wp-learning")}
                      value={bannerDescFontsize}
                      onChange={(bannerDescFontsize) => {
                        setAttributes({
                          bannerDescFontsize: parseInt(bannerDescFontsize),
                        });
                      }}
                    />
                  </div>

                  <div className="row-panel">
                  <SelectControl
                    label={__("Banner Title Font Weight", "wp-learning")}
                    value={bannerTitleFontWeight}
                    options={[
                      { label: 300, value: 300 },
                      { label: 500, value: 500 },
                      { label: 700, value: 700 },
                      { label: 900, value: 900 },
                    ]}
                    onChange={(bannerTitleFontWeight) => {
                      setAttributes({ bannerTitleFontWeight: parseInt(bannerTitleFontWeight) });
                    }}
                  />
                  </div>

                  <div className="row-panel">

                  <SelectControl
                    label={__("Banner Description Font Weight", "wp-learning")}
                    value={bannerDescFontWeight}
                    options={[
                      { label: 300, value: 300 },
                      { label: 500, value: 500 },
                      { label: 700, value: 700 },
                      { label: 900, value: 900 },
                    ]}
                    onChange={(bannerDescFontWeight) => {
                      setAttributes({ bannerDescFontWeight: parseInt(bannerDescFontWeight) });
                    }}
                  />
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
                  }
                  #block-${blockId} .banner-content-block p{
                    color: ${BannerDescColor};
                    font-size: ${bannerDescFontsize}px;
                    font-weight: ${bannerDescFontWeight};
                  }
                  
              `}
            </style>
        </Fragment>
    );

  },
   save: (props) => {
    const { attributes, clientId } = props;
    const {  
      blockId,
      mediaUrl,
      bannerPaddingTop,
      bannerPaddingRight,
      bannerPaddingBottom,
      bannerPaddingLeft,
      banner_bg_size,
      banner_bg_repeat,
      contentAlign,
      BannerTitleColor,
      BannerDescColor,
      bannerTitleFontsize,
      bannerDescFontsize,
      bannerTitleFontWeight,
      bannerDescFontWeight,
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
        padding: bannerPaddingTop + 'px ' + bannerPaddingRight + 'px ' + bannerPaddingBottom + 'px ' + bannerPaddingLeft + 'px',
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
                  #wp-learning-${blockId} .banner-content-block h1{
                    color: ${BannerTitleColor};
                    font-size: ${bannerTitleFontsize}px;
                    font-weight: ${bannerTitleFontWeight};
                  }
                  #wp-learning-${blockId} .banner-content-block p{
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