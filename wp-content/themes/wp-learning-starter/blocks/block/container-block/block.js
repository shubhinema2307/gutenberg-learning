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

import classnames from "classnames";

 registerBlockType('wp-learning/container-block', {
    title: __( 'Container' ),
    icon: 'format-aside',
    category: 'my-custom-block',
    keywords: [
        __( 'container' ),
        __( 'section' ),
    ],
    supports: {
        align: [ 'full' ],
    },
    attributes: {
        columns: {
            type: 'number',
            default: 1
        }
    },
    edit: (props) => {
        const { attributes, setAttributes, clientId, className } = props;
        const {
            columns
        } = attributes;

        setAttributes({ blockId: clientId });

        const classes = classnames(className, `has-${columns}-columns`);

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
                <div className={ classes }>
                    <InnerBlocks />
                </div>
            </Fragment>
        );
    },

    save: (props) => {
        const { attributes, className } = props;
        const {
            columns
        } = attributes;

        const classes = classnames(className, `has-${columns}-columns`);

        return (
            <div className={classes}>
                <InnerBlocks.Content />
            </div>
        );
    }
 });