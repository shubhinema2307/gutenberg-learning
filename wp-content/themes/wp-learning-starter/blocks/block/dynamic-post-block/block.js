/**
 *  BLOCK: dynamic post
 *  ---
 *
 */
 const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { 
    Component, 
    Fragment } = wp.element;
const { 
    ServerSideRender,
    PanelBody,
    RangeControl,
    SelectControl,
    ToggleControl} = wp.components;
const {
    InspectorControls,
} = wp.blockEditor;



class edit extends Component {

    // componentDidUpdate(prevProps) {
    //     const { setAttributes, attributes } = this.props;
    //     const {
    //         onReloadView,
    //         gridViewColumn,
            
    //     } = attributes;
    //     console.log('update');

    //     if(onReloadView == false){
    //         setAttributes({
    //             gridViewColumn: 0,
    //         });
    //     }else{
    //         setAttributes({
    //             gridViewColumn: gridViewColumn,
    //         });
    //     }
    // }

	render(){
        const { attributes, setAttributes, clientId } = this.props;
        const { 
            noOfPosts,
            postsOrder,
            postsCategory,
            showThumbnail,
            showExcerpt,
            postsType,
            onReloadView,
            gridViewColumn,
            showPagination } = attributes;
        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__("Post Settings", "wp-learning")} initialOpen={false}>
                        <div className="row-panel">
                            <RangeControl
                                label={__("Number of posts", "wp-learning")}
                                value={noOfPosts}
                                onChange={(noOfPosts) => setAttributes({ noOfPosts })}
                                min={1}
                                max={10}
                            />
                        </div>
                        <div className="row-panel">
                            <SelectControl
                                label={__("Posts Order", "wp-learning")}
                                value={postsOrder}
                                options={[
                                    { label: __("DESC"), value: "DESC" },
                                    { label: __("ASC"), value: "ASC" },
                                ]}
                                onChange={(postsOrder) => setAttributes({ postsOrder })}
                            />
                        </div>
                        <div className="row-panel">
                            <SelectControl
                                label={__("Posts Category", "wp-learning")}
                                value={postsCategory}
                                options={[
                                    { label: __("All"), value: "" },
                                    { label: __("category1"), value: "category1" },
                                    { label: __("category2"), value: "category2" },
                                ]}
                                onChange={(postsCategory) => setAttributes({ postsCategory })}
                            />
                        </div>
                        <div className="row-panel">
                            <SelectControl
                                label={__("Posts Type", "wp-learning")}
                                value={postsType}
                                options={[
                                    { label: __("All"), value: "" },
                                    { label: __("Blog"), value: "blogs" },
                                    { label: __("Post"), value: "post" },
                                ]}
                                onChange={(postsType) => setAttributes({ postsType })}
                            />
                        </div>
                        <div className="row-panel">
                            <ToggleControl
                                label={__("Show Thumbnail", "wp-learning")}
                                checked={showThumbnail}
                                onChange={(showThumbnail) => setAttributes({ showThumbnail })}
                            />
                        </div>
                        <div className="row-panel">
                            <ToggleControl
                                label={__("Show Excerpt", "wp-learning")}
                                checked={showExcerpt}
                                onChange={(showExcerpt) => setAttributes({ showExcerpt })}
                            />
                        </div>
                        <div className="row-panel">
                            <ToggleControl
                                label={__("Grid View on Page Reload View?", "wp-learning")}
                                checked={onReloadView}
                                onChange={(onReloadView) => setAttributes({ onReloadView })}
                            />
                        </div>
                        {onReloadView &&
                            <div className="row-panel">
                            <RangeControl
                                label={__("Number of posts in one row", "wp-learning")}
                                value={gridViewColumn}
                                onChange={(gridViewColumn) => setAttributes({ gridViewColumn })}
                                min={1}
                                max={6}
                            />
                        </div>
                        }
                        <div className="row-panel">
                            <ToggleControl
                            label={__("Show Pagination?", "wp-learning")}
                            checked={showPagination}
                            onChange={(showPagination) => setAttributes({ showPagination })}
                            />
                        </div>
                    </PanelBody>
                </InspectorControls>
                <ServerSideRender
                    block="wp-learning/dynamic-post-block"
                    attributes={{ 
                        postsType: postsType,
                        noOfPosts: noOfPosts,
                        postsOrder: postsOrder,
                        postsCategory: postsCategory,
                        showThumbnail: showThumbnail,
                        showExcerpt: showExcerpt,
                        onReloadView: onReloadView,
                        gridViewColumn: gridViewColumn,
                        showPagination: showPagination
                    }}
                />
           </Fragment>
        );
    }
}


registerBlockType("wp-learning/dynamic-post-block", {
	title: __('dynamic-post'), 
	category: 'my-custom-block',
    icon: "format-aside",
    attributes: {
        postsType: {
            type: 'string',
            default: ''
        },
        noOfPosts: {
            type: 'number',
            default: 4
        },
        postsOrder: {
            type: 'string',
            default: 'DESC'
        },
        postsCategory: {
            type: 'string',
            default: ''
        },
        showThumbnail: {
            type: 'boolean',
            default: true
        },
        showExcerpt: {
            type: 'boolean',
            default: true
        },
        onReloadView: {
            type: 'boolean',
            default: true
        },
        gridViewColumn: {
			type: "number",
            default: 3
		},
        showPagination: {
            type: 'boolean',
            default: true
        }
    },
	edit,
	save: props => {
        return null
    }
});