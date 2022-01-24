const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const { PanelBody, Button, TextControl, TextareaControl, SelectControl, Tooltip, RangeControl, ToggleControl } = wp.components;
const { RichText, InspectorControls, ColorPalette, MediaUpload, InnerBlocks, PanelColorSettings, MediaUploadCheck } = wp.blockEditor;
//import { Icon } from "../icons";

class edit extends Component {

	constructor(props){
		super(props)
		this.addNewItem = this.addNewItem.bind(this);
    }

	componentDidMount(){
		const { attributes } = this.props;
		const { contentItem } = attributes;
		if(0 === contentItem.length){
			this.initList();
		}

		jQuery(document).on("focus", ".content-list-main .content-list-item .content-item-link", function(e){
			e.preventDefault();
			jQuery(this).parents(".content-link-popup-wrap").addClass("content-link-popup-active").parents(".content-list-item").siblings().find(".content-link-popup-wrap").removeClass("content-link-popup-active");
		});

		jQuery(document).on("click", ".content-link-popup .close-popup", function(e){
			jQuery(this).parents(".content-link-popup-wrap").removeClass("content-link-popup-active");
		});
	}

	initList() {
		const { setAttributes, attributes } = this.props;
		const { contentItem } = attributes;
		setAttributes({
			contentItem: [
				...contentItem,
				{
					index: 0,
					contentTitle: '',
                    contentDesc: '',
					contentLinkText: '',
					contentLinkURL: '',
					contentLinkTarget: '',
				},
				{
					index: 1,
					contentTitle: '',
                    contentDesc: '',
					contentLinkText: '',
					contentLinkURL: '',
					contentLinkTarget: '',
				},
				{
					index: 2,
					contentTitle: '',
                    contentDesc: '',
					contentLinkText: '',
					contentLinkURL: '',
					contentLinkTarget: '',
				}
			]
		});
	}

	addNewItem() {
		const { setAttributes, attributes } = this.props;
		const { contentItem } = attributes;
		let attr = {
			index: contentItem.length,
			contentTitle: '',
			contentDesc: '',
			contentLinkText: '',
			contentLinkURL: '',
			contentLinkTarget: '',
		}
		setAttributes({ 
			contentItem: [...contentItem, attr]
		});
	}

	moveItem(oldIndex, newIndex){
		const { attributes, setAttributes } = this.props;
		const { contentItem } = attributes;

		let arrayCopy = [...contentItem]

		arrayCopy[oldIndex] = contentItem[newIndex]
		arrayCopy[newIndex] = contentItem[oldIndex]

		setAttributes({
			contentItem: arrayCopy
		})

	}

	render(){
		const { attributes, setAttributes, clientId } = this.props;
		const { 
			blockID, 
			backgroundColor, 
			backgroundImage, 
			backgroundPosition, 
			title, 
			titleColor, 
			description, 
			descriptionColor, 
			contentItem,
			columnCount,
			contentBoxBGColor,
			contentTitleColor,
			contentDescColor,
			contentLinkColor,
			AddContentLinkIcon,
			contentLinkIcon,
			shadowXOffset,
			shadowYOffset,
			shadowBlur,
			shadowSpread,
			shadowColor,
			shadowInset,
			idScrollFrom, 
			customCSS 
		} = attributes;
		setAttributes({blockID:'content-list-'+clientId});
		const blockCSS = (
			<style>
				{`
					#${blockID}{
						background-color:${backgroundColor};
					}
					#${blockID} .content-item-inner{
						box-shadow:${shadowInset ? 'inset' : ''} ${shadowXOffset}px ${shadowYOffset}px ${shadowBlur}px ${shadowSpread}px ${shadowColor};
						background-color:${contentBoxBGColor};
					}
					#${blockID} .content-list-placeholder{
						background-image:url(${backgroundImage});
					}
					#${blockID} .content-list-title{
						color:${titleColor};
					}
					#${blockID} .content-list-desc{
						color:${descriptionColor};
					}
					#${blockID} .content-item-title{
						color:${contentTitleColor};
					}
					#${blockID} .content-item-desc{
						color:${contentDescColor};
					}
					#${blockID} .content-item-link{
						color:${contentLinkColor};
					}
					${customCSS}
				`}
			</style>
		)

		const contentListItem = contentItem.map((data, index) => {
			return(
				<div className="content-list-item">
					<div className="content-item-inner">
						<div className="item-action-wrap">
							<div className="move-item">
								{0 < index && (
									<Tooltip text={__( "Move to Left", "storyful" )}>
										<i 
											className="fa fa-arrow-left move-left" 
											aria-hidden="true"
											onClick={()=>this.moveItem(index, index - 1)}
										></i>
									</Tooltip>
								)}
								{index + 1 < contentItem.length && (
									<Tooltip text={__( "Move to Right", "storyful" )}>
										<i 
											className="fa fa-arrow-right move-right" 
											aria-hidden="true"
											onClick={()=>this.moveItem(index, index + 1)}
										></i>
									</Tooltip>
								)}
							</div>
							<Tooltip text={__( "Remove Item", "storyful" )}>
								<i className='fa fa-times remove-item'
									onClick={() => {
										const updatedArray = contentItem.filter(item => item.index != data.index).map(updatedItems => {
											if ( updatedItems.index > data.index ) {
												updatedItems.index -= 1
											}
											console.log(updatedItems.index);
											return updatedItems
										})
										setAttributes({contentItem: updatedArray})
									}}
								></i>
							</Tooltip>
						</div>
						<RichText
							tagName="h4"
							placeholder="Content Title"
							keepPlaceholderOnFocus='true'
							className="content-item-title"
							value={data.contentTitle}
							onChange={value => {
								let arrayCopy = [...contentItem];
								arrayCopy[index].contentTitle = value;
								setAttributes({contentItem: arrayCopy});
							}}
						/>
						<RichText
							tagName="p"
							placeholder="Content Description"
							keepPlaceholderOnFocus='true'
							className="content-item-desc"
							value={data.contentDesc}
							onChange={value => {
								let arrayCopy = [...contentItem];
								arrayCopy[index].contentDesc = value;
								setAttributes({contentItem: arrayCopy});
							}}
						/>
						<div className="content-link-popup-wrap">
							<div className="content-link-popup">
								<i class="fa fa-times close-popup"></i>
								<TextControl
									type="url"
									label={__( "Link URL", "storyful" )}
									placeholder="https://google.com"
									value={data.contentLinkURL}
									onChange={value => {
										let arrayCopy = [...contentItem];
										arrayCopy[index].contentLinkURL = value;
										setAttributes({contentItem: arrayCopy});
									}}
								/>
								<ToggleControl
									label={__( "Open in New Tab", "storyful" )}
									checked={data.contentLinkTarget}
									onChange={value => {
										let arrayCopy = [...contentItem];
										arrayCopy[index].contentLinkTarget = value;
										setAttributes({contentItem: arrayCopy});
									}}
								/>
							</div>
							<RichText
								tagName="a"
								href={data.contentLinkURL}
								target={data.contentLinkTarget ? '_blank' : '_self'}
								className={`content-item-link ${AddContentLinkIcon ? contentLinkIcon : ''}`}
								value={data.contentLinkText}
								rel="noopener noreferrer"
								placeholder="Content Link"
								keepPlaceholderOnFocus='true'
								onChange={value => {
									let arrayCopy = [...contentItem];
									arrayCopy[index].contentLinkText = value;
									setAttributes({contentItem: arrayCopy});
								}}
							/>
						</div>
					</div>
				</div>
			)
		})

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__( "Background Settings", "storyful" )}>
						<div className="setting-row">
							<label>Background Color</label>
							<ColorPalette
								value={backgroundColor}
								onChange={backgroundColor=>{
									setAttributes({backgroundColor:backgroundColor ? backgroundColor : "#fff"})
								}}
							/>
						</div>
						<div className="setting-row">
							<label>Background Image</label>
							{!backgroundImage ? (
								<MediaUpload
									onSelect={backgroundImage => {
										setAttributes({ backgroundImage: backgroundImage.url });
									}}
									type="image"
									value={backgroundImage}
									render={({ open })=>(
										<Button
											onClick={ open }
											className="button button-large"
										>
											Upload Image
										</Button>
									)}
								/>
							) : (
								<Fragment>
									<div className="image-preview">
										<img src={backgroundImage} />
									</div>
									<Button
										onClick={() => {
											setAttributes({ backgroundImage: "" })
										}}
										className="button button-large"
									>
										Remove Image
									</Button>
								</Fragment>
							)}
						</div>
						{backgroundImage && (
							<div className="setting-row">
								<SelectControl
									label="Background Position"
									value={backgroundPosition}
									options={[
										{label: __('left'), value: 'left'},
										{label: __('Right'), value: 'right'}
									]}
									onChange={backgroundPosition=>setAttributes({backgroundPosition})}
								/>
							</div>
						)}
					</PanelBody>
					<PanelBody title={__( "Column Settings", "storyful" )} initialOpen={false}>
						<RangeControl
							label={__( "Columns", "storyful" )}
							value={columnCount}
							min={1}
							max={4}
							step={1}
							onChange={columnCount=>setAttributes({columnCount})}
						/>
					</PanelBody>
					<PanelColorSettings
						title={__( "Color Settings", "storyful" )}
						colorSettings={[
                            {
                                value: titleColor,
                                onChange:titleColor=>{setAttributes({titleColor: titleColor ? titleColor: '#1A2B49' })},
                                label: __( "Title Color", "storyful" )
                            },
                            {
                                value: descriptionColor,
                                onChange:descriptionColor=>{setAttributes({descriptionColor: descriptionColor ? descriptionColor : '#1A2B49'})},
                                label: __( "Description Color", "storyful" )
                            },
							{
                                value: contentTitleColor,
                                onChange:contentTitleColor=>{setAttributes({contentTitleColor: contentTitleColor ? contentTitleColor : '#FF4C15'})},
                                label: __( "Feature Title Color", "storyful" )
                            },
							{
                                value: contentDescColor,
                                onChange:contentDescColor=>{setAttributes({contentDescColor: contentDescColor ? contentDescColor : '#1A2B49'})},
                                label: __( "Feature Description Color", "storyful" )
                            },
							{
                                value: contentLinkColor,
                                onChange:contentLinkColor=>{setAttributes({contentLinkColor: contentLinkColor ? contentLinkColor : '#FF4C15'})},
                                label: __( "Feature Link Color", "storyful" )
                            }
                        ]}
                        initialOpen={false}
					/>
					<PanelBody title={__( "Box Settings", "storyful" )} initialOpen={false}>
						<div className="setting-row">
							<label>Box Background Color</label>
							<ColorPalette
								value={contentBoxBGColor}
								onChange={contentBoxBGColor=>{
									setAttributes({contentBoxBGColor:contentBoxBGColor ? contentBoxBGColor : "#fff"})
								}}
							/>
						</div>
						<ToggleControl
							label={__( "Add Icon", "storyful" )}
							checked={AddContentLinkIcon}
							onChange={AddContentLinkIcon=>{
								setAttributes({AddContentLinkIcon});
							}}
						/>
						{AddContentLinkIcon && (
							<TextControl
								label={__( "Font Awesome Icon Class", "storyful" )}
								value={contentLinkIcon}
								placeholder="fa fa-long-arrow-right"
								onChange={contentLinkIcon=>setAttributes({contentLinkIcon})}
							/>
						)}
						<PanelBody title={__( "Box Shadow", "storyful" )} initialOpen={false}>
							<RangeControl
								label={__( "X Offset" )}
								value={shadowXOffset}
								min={0}
								max={50}
								step={1}
								onChange={shadowXOffset=>setAttributes({shadowXOffset})}
							/>
							<RangeControl
								label={__( "Y Offset" )}
								value={shadowYOffset}
								min={0}
								max={50}
								step={1}
								onChange={shadowYOffset=>setAttributes({shadowYOffset})}
							/>
							<RangeControl
								label={__( "Blur" )}
								value={shadowBlur}
								min={0}
								max={50}
								step={1}
								onChange={shadowBlur=>setAttributes({shadowBlur})}
							/>
							<RangeControl
								label={__( "Spread" )}
								value={shadowSpread}
								min={0}
								max={50}
								step={1}
								onChange={shadowSpread=>setAttributes({shadowSpread})}
							/>
							<div className="setting-row">
								<label>Color</label>
								<ColorPalette
									value={shadowColor}
									onChange={shadowColor => setAttributes({shadowColor: shadowColor ? shadowColor : '#fff'})}
								/>
							</div>
							<ToggleControl
								label={__( "Inset" )}
								checked={shadowInset}
								onChange={shadowInset=>setAttributes({shadowInset})}
							/>
						</PanelBody>
					</PanelBody>
					<PanelBody title={__( "Scroll From ID", "storyful" )} initialOpen={false}>
						<TextControl
							label={__( "Scroll From ID On button Click", "storyful" )}
							value={idScrollFrom}
							onChange={idScrollFrom=>setAttributes({idScrollFrom})}
						/>
					</PanelBody>
					<PanelBody title={__( "Custom CSS", "storyful" )} initialOpen={false}>
						<TextareaControl
							type="string"
							label="Add custom styles"
							value={customCSS}
							onChange={customCSS=>setAttributes({customCSS})}
						/>
					</PanelBody>
				</InspectorControls>
				<div className="content-list" id={blockID} scroll-from={idScrollFrom ? idScrollFrom : false}>
					{blockCSS}
					{backgroundImage && (
						<span className={`content-list-placeholder position-${backgroundPosition}`}></span>
					)}
					<div className="container-lg">
						<div className="content-list-inner">
							<div className="content-list-header">
								<RichText
									tagName="h2"
									placeholder="Enter Title"
									keepPlaceholderOnFocus='true'
									value={title}
									className="content-list-title"
									onChange={title=>setAttributes({title})}
								/>
								<RichText
									tagName="p"
									placeholder="Enter Description"
									keepPlaceholderOnFocus='true'
									value={description}
									className="content-list-desc"
									onChange={description=>setAttributes({description})}
								/>
							</div>
							<div className="content-list-body">
								<div className={`content-list-main has-${columnCount}-columns`}>
									{contentListItem}
									<div className="add-item-wrap">
										<Tooltip text={__( "Add New Item", "storyful" )}>
											<i 
												className="fa fa-plus add-new-item" 
												aria-hidden="true"
												onClick={() => {
													this.addNewItem();
												}}
											></i>
										</Tooltip>
									</div>
								</div>
								<InnerBlocks
									// allowedBlocks={ [ "storyful/button" ] }
									// template={ [
									// 	[ "storyful/button", {} ]
									// ] }
									// templateLock="all"
								/>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		)
	}
}

registerBlockType( 'storyful/content-list', {
	title: __( 'Storyful - Content List', 'storyful' ),
	description: __( 'Content List Block is include custom content list and settings', 'storyful' ),
	icon: 'format-aside',
	category: 'my-custom-block',
	keywords: [__('content'), __('list'), __('storyful')],
	attributes: {
		blockID: {
			type: 'string',
			default: ''
		},
		backgroundColor: {
			type: 'string',
			default: '#fff'
		},
		backgroundImage: {
			type: 'string',
			default: ''
		},
		backgroundPosition: {
			type: 'string',
			default: 'left'
		},
		title: {
			type: 'string',
			default: ''
		},
		titleColor: {
			type: 'string',
			default: '#1A2B49'
		},
		description: {
			type: 'string',
			default: ''
		},
		descriptionColor: {
			type: 'string',
			default: '#1A2B49'
		},
		contentItem: {
			type: 'array',
			default: []
		},
		columnCount: {
			type: 'number',
			default: 3
		},
		contentBoxBGColor: {
			type: 'string',
			default: '#fff'
		},
		contentTitleColor: {
			type: 'string',
			default: '#FF4C15'
		},
		contentDescColor: {
			type: 'string',
			default: '#1A2B49'
		},
		contentLinkColor: {
			type: 'string',
			default: '#FF4C15'
		},
		AddContentLinkIcon: {
			type: 'boolean',
			default: false
		},
		contentLinkIcon: {
			type: 'string',
			default: 'fa fa-long-arrow-right'
		},
		shadowXOffset: {
			type: 'number',
			default: 0
		},
		shadowYOffset: {
			type: 'number',
			default: 10
		},
		shadowBlur: {
			type: 'number',
			default: 25
		},
		shadowSpread: {
			type: 'number',
			default: 0
		},
		shadowColor: {
			type: 'string',
			default: '#e6eaf1'
		},
		shadowInset: {
			type: 'boolean',
			default: false
		},
		idScrollFrom: {
			type: 'string',
			default: ''
		},
		customCSS: {
			type: 'string',
			default: ''
		}
	},
	edit,
	save({ attributes }) {
		const { 
			blockID, 
			backgroundColor, 
			backgroundImage, 
			backgroundPosition, 
			title, 
			titleColor, 
			description, 
			descriptionColor, 
			contentItem,
			columnCount,
			contentBoxBGColor,
			contentTitleColor,
			contentDescColor,
			contentLinkColor,
			AddContentLinkIcon,
			contentLinkIcon,
			shadowXOffset,
			shadowYOffset,
			shadowBlur,
			shadowSpread,
			shadowColor,
			shadowInset,
			idScrollFrom, 
			customCSS 
		} = attributes;
		const blockCSS = (
			<style>
				{`
					#${blockID}{
						background-color:${backgroundColor};
					}
					#${blockID} .content-item-inner{
						box-shadow:${shadowInset ? 'inset' : ''} ${shadowXOffset}px ${shadowYOffset}px ${shadowBlur}px ${shadowSpread}px ${shadowColor};
						background-color:${contentBoxBGColor};
					}
					#${blockID} .content-list-placeholder{
						background-image:url(${backgroundImage});
					}
					#${blockID} .content-list-title{
						color:${titleColor};
					}
					#${blockID} .content-list-desc{
						color:${descriptionColor};
					}
					#${blockID} .content-item-title{
						color:${contentTitleColor};
					}
					#${blockID} .content-item-desc{
						color:${contentDescColor};
					}
					#${blockID} .content-item-link{
						color:${contentLinkColor};
					}
					${customCSS}
				`}
			</style>
		)
		return (
			<div className="content-list" id={blockID} scroll-from={idScrollFrom ? idScrollFrom : false}>
				{blockCSS}
				{backgroundImage && (
					<span className={`content-list-placeholder position-${backgroundPosition}`}></span>
				)}
				<div className="container-lg">
					<div className="content-list-inner">
						<div className="content-list-header">
							{title && 
								<RichText.Content
									tagName="h2"
									value={title}
									className="content-list-title"
								/>	
							}
							{description && 
								<RichText.Content
									tagName="p"
									value={description}
									className="content-list-desc"
								/>
							}
						</div>
						<div className="content-list-body">
							{0 < contentItem.length && (
								<div className={`content-list-main has-${columnCount}-columns`}>
									{contentItem.map((data, index) => {
										return(
											<div className="content-list-item">
												<div className="content-item-inner">
													{data.contentTitle && (
														<RichText.Content
															tagName="h4"
															className="content-item-title"
															value={data.contentTitle}
														/>
													)}
													{data.contentDesc && (
														<RichText.Content
															tagName="p"
															className="content-item-desc"
															value={data.contentDesc}
														/>
													)}
													{data.contentLinkText && (
														<div className="content-link-wrap">
															<RichText.Content
																tagName="a"
																href={data.contentLinkURL}
																target={data.contentLinkTarget ? '_blank' : '_self'}
																className={`content-item-link ${AddContentLinkIcon ? contentLinkIcon : ''}`}
																rel="noopener noreferrer"
																value={data.contentLinkText}
															/>
														</div>
													)}
												</div>
											</div>
										)
									})}
								</div>
							)}
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		);
	}
} );