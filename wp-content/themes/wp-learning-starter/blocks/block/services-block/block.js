/**
 *  BLOCK: services
 *  ---
 *  
 */
 const { __ } = wp.i18n;
 const { registerBlockType } = wp.blocks;
 const { Fragment } = wp.element;
 import classnames from 'classnames';
 const {
    InspectorControls,
    MediaUpload, 
    MediaUploadCheck,
    ColorPalette,
    BlockControls,
    AlignmentControl,
    RichText,
    InnerBlocks } = wp.blockEditor;
 const { 
    PanelBody,
    TextControl,
    SelectControl,
    RangeControl} = wp.components;


 registerBlockType('wp-learning/service-block', {
   title: __( 'service' ),
   icon: 'format-aside',
   category: 'my-custom-block',
   keywords: [
     __( 'service' ),
   ],
   parent: ['wp-learning/services-block', 'wp-learning/container-block'],
   // Enable or disable support for low-level features
   supports: {
    align: [ 'full' ],
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
   edit: (props) => {
    const { attributes, setAttributes, clientId, className } = props;
    const {
        blockId, 
        mediaId,
        mediaUrl,
        service_mediaId,
        service_mediaUrl,
        service_mediaAlt,
        service_title,
        service_para
    } = attributes;

    setAttributes({ blockId: clientId });
    
    // const onUpdateImage = ( img ) => {
    //     props.setAttributes({
    //         service_mediaUrl: img.url,
    //         service_mediaId: img.id,
    //         service_mediaAlt: img.alt,
    //     });
    //  };

    return (
        <Fragment>
            <div className={classnames}>
                <RichText
                    tagName="h4"
                    onChange={(value) => setAttributes({ service_title: value })}
                    allowedFormats={["core/bold", "core/italic"]}
                    value={service_title}
                    placeholder={__("Write your Title...")}
                    className="service-title"
                />
                <RichText
                    tagName="p"
                    onChange={(value) => setAttributes({ service_para: value })}
                    allowedFormats={["core/bold", "core/italic"]}
                    value={service_para}
                    placeholder={__("Write your text...")}
                    className="service-para"
                />
            </div>
        </Fragment>
    );
},
// The output on the live site
save: (props) => {
 const { attributes, clientId } = props;
 const {
    blockId, 
    mediaId,
    mediaUrl,
    service_mediaId,
    service_mediaUrl,
    service_mediaAlt,
    service_title,
    service_para
} = attributes;

  return (
        <Fragment>
            <div>
                <RichText.Content
                    tagName="h4"
                    value={service_title}
                    className=""
                />
                <RichText.Content
                    tagName="p"
                    value={service_para}
                    className=""
                />
            </div>
        </Fragment>
  );
}
});




registerBlockType('wp-learning/services-block', {
    title: __( 'services' ),
    icon: 'format-aside',
    category: 'my-custom-block',
    keywords: [
      __( 'services', 'service-parent'),
    ],
    // Enable or disable support for low-level features
    supports: {
     align: [ 'full' ],
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
   edit: (props) => {
   const { attributes, setAttributes, clientId, className } = props;
   const { columns } = attributes;

   const ALLOWED_BLOCKS = [ 'wp-learning/service-block', 'wp-learning/container-block' ];

   return (
       <Fragment>
           <InspectorControls>
               <PanelBody>
                   <RangeControl
                       label={__('columns', 'wp-learning')}
                       value={ columns }
                        onChange={columns=>setAttributes({columns})}
                        min={ 1 }
                        max={ 4 }
                   />
               </PanelBody>
           </InspectorControls>
            <div className={`${classnames} has-${columns}-columns`}>
                <InnerBlocks
                        allowedBlocks={ ALLOWED_BLOCKS }
                        
                />
            </div>
       </Fragment>
   );
},
// The output on the live site
save: (props) => {
 const { attributes, clientId} = props;
 const { columns } = attributes;
 return (
        <div className={`has-${columns}-columns`}>
            <InnerBlocks.Content/>
        </div>
    );
}
});