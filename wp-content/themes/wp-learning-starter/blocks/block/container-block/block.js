/**
 *  BLOCK: container
 *  ---
 * 
 */
 const { __ } = wp.i18n;
 const { registerBlockType } = wp.blocks;
 const { Fragment } = wp.element;
 const {
    InnerBlocks,
    InspectorControls } = wp.blockEditor;
 const { 
    PanelBody,
    RangeControl} = wp.components;



 registerBlockType('wp-learning/container-block', {
   title: __( 'Container' ),
   icon: 'format-aside',
   category: 'my-custom-block',
   keywords: [
     __( 'container' ),
     __( 'section' ),
   ],
   // Enable or disable support for low-level features
   supports: {
    align: [ 'full' ],
   },
   // Set up data model for custom block
   attributes: {
    columns: {
        type: 'number',
        default: 1
    }
  },
   // The UI for the WordPress editor
   edit: (props) => {
    const { attributes, setAttributes, clientId, className } = props;
    const {
        blockId, 
        columns
    } = attributes;

    setAttributes({ blockId: clientId });

     return (
      <Fragment>
        <InspectorControls>
            <PanelBody>
                <RangeControl
                    label={__('columns', 'wp-learning')}
                    value={ columns }
                    onChange={columns=>setAttributes({columns})}
                    min={ 1 }
                    max={ 6 }
                />
            </PanelBody>
        </InspectorControls>
        <div className={ `${className} has-${columns}-columns` }>
            <InnerBlocks />
        </div>
      </Fragment>
     )
   },

   // The output on the live site
   save: (props) => {
    const { attributes, clientId } = props;
    const {  
        blockId, 
        columns
    } = attributes;

     return (
        <div className={ `has-${columns}-columns`}>
            <InnerBlocks.Content />
        </div>
     );
   }
 })