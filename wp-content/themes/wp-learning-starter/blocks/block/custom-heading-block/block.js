/**
 *  BLOCK: Heading
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
    InnerBlocks 
  } = wp.blockEditor;
  const { 
      PanelBody,
      TextControl,
      SelectControl,
      ToolbarGroup
  } = wp.components;


registerBlockType("wp-learning/heading-block", {
    title: __("custom heading"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("heading"), __("title")],
    supports: {
      align: [ 'full' ],
    },
    attributes: {
    blockId: {
        type: "string",
        default: ""
    },
    banner_heading: {
      type: 'string',
      default: ''
    },
    banner_para: {
      type: 'string',
      default: ''
    },
    contentAlign: {
      type: 'string',
      default: 'left'
    },
    BannerTitleColor: {
      type: 'string',
      default: ''
    },
    BannerDescColor: {
      type: 'string',
      default: ''
    },
    bannerTitleFontsize: {
      type: 'number',
      default: 20
    },
    bannerDescFontsize: {
      type: 'number',
      default: 16
    },
    bannerTitleFontWeight: {
      type: 'number',
      default: 400
    },
    bannerDescFontWeight: {
      type: 'number',
      default: 400
    },
    },

  edit: (props) => {
    const { attributes, setAttributes, clientId } = props;
    const {
      blockId, 
      contentAlign,
      BannerTitleColor,
      BannerDescColor,
      bannerTitleFontsize,
      bannerDescFontsize,
      bannerTitleFontWeight,
      bannerDescFontWeight,
    } = attributes;

  
    setAttributes({ blockId: clientId });

  const blockStyle = {    
    'text-align': contentAlign
   }

   const blockHeadingStyle = {
     color: BannerTitleColor, 
     'font-weight': bannerTitleFontWeight,
     'font-size': bannerTitleFontsize + 'px',
   }
   
   const blockparaStyle = {
     color: BannerDescColor, 
     'font-weight': bannerDescFontWeight,
     'font-size': bannerDescFontsize + 'px',
   }

    return (
        <Fragment>
              <InspectorControls>
                <PanelBody title={__("Heading setting", "wp-learning")}  initialOpen={ false }>
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
                    <TextControl
                      label={__("Title font size", "wp-learning")}
                      value={bannerTitleFontsize}
                      onChange={(bannerTitleFontsize) => {
                        setAttributes({
                          bannerTitleFontsize: parseInt(bannerTitleFontsize),
                        });
                      }}
                    />
                  </div>

                  <div className="row-panel">
                    <SelectControl
                      label={__("Banner title Font Weight", "wp-learning")}
                      value={bannerTitleFontWeight}
                      options={[
                        { label: 300, value: 300 },
                        { label: 500, value: 500 },
                        { label: 700, value: 700 },
                        { label: 900, value: 900 },
                      ]}
                      onChange={(newval) => setAttributes({ bannerTitleFontWeight: newval })}
                    />
                  </div>
                  </PanelBody>
                    
                  <PanelBody title={__("Paragraph setting", "wp-learning")}  initialOpen={ false }>
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
                      label={__("Banner Description Font Weight", "wp-learning")}
                      value={bannerDescFontWeight}
                      options={[
                        { label: 300, value: 300 },
                        { label: 500, value: 500 },
                        { label: 700, value: 700 },
                        { label: 900, value: 900 },
                      ]}
                      onChange={(newval) => setAttributes({ bannerDescFontWeight: newval })}
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
               style={blockHeadingStyle}
              />

              <RichText
                tagName="p"
                onChange={(value) => setAttributes({ banner_para: value })}
                allowedFormats={["core/bold", "core/italic"]}
                value={attributes.banner_para}
                placeholder={__("Write your text...")}
                className="banner-desc"
                style={blockparaStyle}
              />
              <InnerBlocks template={[
                    [ 'wp-learning/button-block']
                ]} />
            </div>
        </Fragment>
    );

  },
   save: (props) => {
    const { attributes } = props;
    const {  
      blockId,
      contentAlign,
      BannerTitleColor,
      BannerDescColor,
      bannerTitleFontsize,
      bannerDescFontsize,
      bannerTitleFontWeight,
      bannerDescFontWeight,
      } = attributes;

      const blockStyle = {
        'text-align': contentAlign
      }

      const blockHeadingStyle = {
        color: BannerTitleColor, 
        'font-weight': bannerTitleFontWeight,
        'font-size': bannerTitleFontsize + 'px',
      }

      const blockparaStyle = {
        color: BannerDescColor, 
        'font-weight': bannerDescFontWeight,
        'font-size': bannerDescFontsize + 'px',
      }
      

    return (
      <Fragment>
        <div id={`wp-learning-${blockId}`}  className="banner-content-block" style={blockStyle}>
            <RichText.Content
                tagName="h1"
                value={attributes.banner_heading}
                placeholder={__("Write your heading...")}
                className="banner-heading"
                style={blockHeadingStyle}
              />
              <RichText.Content
                tagName="p"
                value={attributes.banner_para}
                placeholder={__("Write your text...")}
                className="banner-para"
                style={blockparaStyle}
              />
              <InnerBlocks.Content  template={[
                    [ 'wp-learning/button-block']
                ]} />
            </div>

      </Fragment>
    )
  },
});