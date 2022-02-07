/**
 *  BLOCK: Slider
 *  ---
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment } = wp.element;
const {
    InspectorControls,
    ColorPalette,
    BlockControls,
    RichText,
    MediaUpload,
} = wp.blockEditor;
const {
    PanelBody,
    TextControl,
    SelectControl,
    ToolbarGroup,
    RangeControl,
    Button,
    Tooltip,
    ToggleControl,
} = wp.components;

import { plus, remove, Edit, save } from "../custom-icons";
import classnames from "classnames";

class edit extends Component {
    constructor(props) {
        super(props);
        this.initSlider = this.OnInitSlides.bind(this);
        this.addNewSlide = this.addNewSlide.bind(this);
        this.state = {
            obj_SliderState: {},
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        const { setAttributes, attributes } = this.props;
        const { slides_array, slider_save } = attributes;

        if (slides_array.length > 0) {
            this.OnInitSlides();
        } 
        setAttributes({ slider_save: false})
        
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate');
        const { setAttributes, attributes } = this.props;
        const {
            slides_array,
            slide_mode,
            slide_pager,
            slide_controls,
            slide_autoplay,
            slide_infinite,
            slide_adaptiveHeight,
            slide_speed,
            slider_save,
        } = attributes;

        const { slides_array: prev_slide_array } = prevProps.attributes;

        console.log("component-update slider_save: " + slider_save);

        if (slides_array.length !== prev_slide_array.length) {
            console.log('change array length');
            if (prev_slide_array.length == 0 && slider_save) {
                console.log('if array length 0');
                // setAttributes({
                //     slider_save: false,
                // });
                setTimeout(() => this.OnInitSlides(), 10);
                
            } else if (slider_save) {
                setTimeout(() => this.state.obj_SliderState.reloadSlider(), 10);
                setTimeout(() => this.state.obj_SliderState.goToSlide(slides_array.length - 1), 10);
            }
        }

        if (
            slide_mode !== prevProps.attributes.slide_mode ||
            slide_pager !== prevProps.attributes.slide_pager ||
            slide_controls !== prevProps.attributes.slide_controls ||
            slide_autoplay !== prevProps.attributes.slide_autoplay ||
            slide_infinite !== prevProps.attributes.slide_infinite ||
            slide_adaptiveHeight !== prevProps.attributes.slide_adaptiveHeight ||
            slide_speed !== prevProps.attributes.slide_speed
            ) { this.onUpdateSliderState();}
    }

    OnInitSlides() {
        console.log('OnInitSlides');
        const { setAttributes, attributes } = this.props;
        const {
            slide_mode,
            slide_pager,
            slide_controls,
            slide_autoplay,
            slide_infinite,
            slide_adaptiveHeight,
            slide_speed,
        } = attributes;
        const sliderObjMount = jQuery(".bx-slider-wrap-second").bxSlider({
            mode: slide_mode,
            pager: slide_pager,
            controls: slide_controls,
            auto: slide_autoplay,
            infiniteLoop: slide_infinite,
            adaptiveHeight: slide_adaptiveHeight,
            speed: slide_speed,
            touchEnabled: false,
        });
        this.setState({ obj_SliderState: sliderObjMount });
        console.log(this.state.obj_SliderState);
    }

    onUpdateSliderState() {
        console.log('onUpdateSliderState');
        const {
            slide_mode,
            slide_pager,
            slide_controls,
            slide_autoplay,
            slide_infinite,
            slide_adaptiveHeight,
            slide_speed,
        } = this.props.attributes;
        this.state.obj_SliderState.reloadSlider({
            mode: slide_mode,
            pager: slide_pager,
            controls: slide_controls,
            auto: slide_autoplay,
            infiniteLoop: slide_infinite,
            adaptiveHeight: slide_adaptiveHeight,
            speed: slide_speed,
        });
    }

    addNewSlide() {
        console.log('addNewSlide');
        const { setAttributes, attributes } = this.props;
        const { slides_array } = attributes;
        let objAddNewSlide = {
            index: slides_array.length,
            slide_title: "",
            slide_desc: "",
            slide_bgImgID: "",
            slide_bgImgURL: "",
            slide_bgImgAlt: "",
        };
        setAttributes({
            slides_array: [...slides_array, objAddNewSlide],
        });
    }

    editSlider() {
        console.log('editSlider');
        const { setAttributes, attributes } = this.props;
        const { slider_save } = attributes;
        this.state.obj_SliderState.destroySlider();
        setAttributes({
            slider_save: false,
        });
    }

    saveSlider() {
        console.log('saveSlider');
        const { setAttributes, attributes } = this.props;
        const { slider_save } = attributes;
        setAttributes({
            slider_save: true,
        });
        console.log(this.state.obj_SliderState);
        if(Object.keys(this.state.obj_SliderState).length === 0){
            this.OnInitSlides();
        }else{
            this.state.obj_SliderState.reloadSlider();
        }
       
    }

    updateTitlePadding(pos, newPadding) {
        const { attributes, setAttributes } = this.props;
        const { titlePadding } = attributes;
        const position = {
            top: 0,
            right: 1,
            bottom: 2,
            left: 3,
        };
        const updatedPadding = titlePadding.map((val, index) => {
            if (index === position[pos]) {
            return newPadding;
            } else {
            return val;
            }
        });
        setAttributes({ titlePadding: updatedPadding });
    }

    updateTitleMargin(pos, newMargin) {
        const { attributes, setAttributes } = this.props;
        const { titleMargin } = attributes;
        const position = {
            top: 0,
            right: 1,
            bottom: 2,
            left: 3,
        };
        const updatedMargin = titleMargin.map((val, index) => {
            if (index === position[pos]) {
            return newMargin;
            } else {
            return val;
            }
        });
        setAttributes({ titleMargin: updatedMargin });
    }

    updateDescPadding(pos, newPadding) {
        const { attributes, setAttributes } = this.props;
        const { descPadding } = attributes;
        const position = {
            top: 0,
            right: 1,
            bottom: 2,
            left: 3,
        };
        const updatedPadding = descPadding.map((val, index) => {
            if (index === position[pos]) {
            return newPadding;
            } else {
            return val;
            }
        });
        setAttributes({ descPadding: updatedPadding });
    }

    updateDescMargin(pos, newMargin) {
        const { attributes, setAttributes } = this.props;
        const { descMargin } = attributes;
        const position = {
            top: 0,
            right: 1,
            bottom: 2,
            left: 3,
        };
        const updatedMargin = descMargin.map((val, index) => {
            if (index === position[pos]) {
            return newMargin;
            } else {
            return val;
            }
        });
        setAttributes({ descMargin: updatedMargin });
    }

    render() {
        const { attributes, setAttributes, clientId, className } = this.props;
        const {
            blockId,
            slider_save,
            slides_array,
            slide_mode,
            slide_pager,
            slide_controls,
            slide_autoplay,
            slide_infinite,
            slide_adaptiveHeight,
            slide_speed,
            titleFontFamily,
            titleFontsize,
            titleFontWeight,
            descFontFamily,
            descFontsize,
            descFontWeight,
            titleColor,
            descColor,
            titlePadding,
            descPadding,
            titleMargin,
            descMargin,
        } = attributes;

        setAttributes({ blockId: clientId });

        const classes = classnames(className, `slider-wrap`);

        const slides = slides_array.map((data, index) => {
            console.log('render');
            return (
                <div className="slide-inner">
                    {!slider_save && (
                        <Tooltip text={__("Remove Slide", "wp-learning")}>
                            <div className="remove-slide">
                                <i
                                    onClick={() => {
                                        if (confirm("Delete Confirm!") == true) {
                                            let arrayCopy = [...slides_array];
                                            arrayCopy.splice(index, 1);
                                            setAttributes({ slides_array: arrayCopy });
                                        }
                                    }}
                                >
                                    {remove}
                                </i>
                            </div>
                        </Tooltip>
                    )}
                    {slider_save && (
                        <div className="slide-content">
                            <h2>{data.slide_title} </h2>
                            <p>{data.slide_desc} </p>
                        </div>
                    )}
                    {!slider_save && (
                        <div className="slide-content">
                            <RichText
                                tagName="h2"
                                onChange={(value) => {
                                    let arrayCopy = [...slides_array];
                                    arrayCopy[index].slide_title = value;
                                    setAttributes({ slides_array: arrayCopy });
                                }}
                                allowedFormats={["core/bold", "core/italic"]}
                                value={data.slide_title}
                                placeholder={__("Write your Title...")}
                                className="slide-title"
                            />
                            <RichText
                                tagName="p"
                                onChange={(value) => {
                                    let arrayCopy = [...slides_array];
                                    arrayCopy[index].slide_desc = value;
                                    setAttributes({ slides_array: arrayCopy });
                                }}
                                allowedFormats={["core/bold", "core/italic"]}
                                value={data.slide_para}
                                placeholder={__("Write your desc...")}
                                className="slide-desc"
                            />
                        </div>
                    )}
                    <div className="slide-img">
                        {!data.slide_bgImgID && !slider_save && (
                            <MediaUpload
                                onSelect={(media) => {
                                    let arrayCopy = [...slides_array];
                                    arrayCopy[index].slide_bgImgID = media.id;
                                    arrayCopy[index].slide_bgImgURL = media.url;
                                    arrayCopy[index].slide_bgImgAlt = media.alt;
                                    setAttributes({
                                        slides_array: arrayCopy,
                                    });
                                }}
                                value={data.slide_bgImgID}
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
                        {data.slide_bgImgID && (
                            <img src={data.slide_bgImgURL} alt={data.slide_bgImgAlt} />
                        )}
                    </div>
                </div>
            );
        });

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__("Slider Settings", "wp-learning")} initialOpen={false}>
                        <SelectControl
                            label={__("Mode", "wp-learning")}
                            value={slide_mode}
                            options={[
                                { label: __("Horizontal"), value: "horizontal" },
                                { label: __("Vertical"), value: "vertical" },
                                { label: __("Fade"), value: "fade" },
                            ]}
                            onChange={(slide_mode) => setAttributes({ slide_mode })}
                        />
                        <ToggleControl
                            label={__("Pager", "wp-learning")}
                            checked={slide_pager}
                            onChange={(slide_pager) => setAttributes({ slide_pager })}
                        />
                        <ToggleControl
                            label={__("Controls", "wp-learning")}
                            checked={slide_controls}
                            onChange={(slide_controls) => setAttributes({ slide_controls })}
                        />
                        <ToggleControl
                            label={__("Auto Play", "wp-learning")}
                            checked={slide_autoplay}
                            onChange={(slide_autoplay) => setAttributes({ slide_autoplay })}
                        />
                        <ToggleControl
                            label={__("Infinite Loop", "wp-learning")}
                            checked={slide_infinite}
                            onChange={(slide_infinite) => setAttributes({ slide_infinite })}
                        />
                        <ToggleControl
                            label={__("Adaptive Height", "wp-learning")}
                            checked={slide_adaptiveHeight}
                            onChange={(slide_adaptiveHeight) =>
                                setAttributes({ slide_adaptiveHeight })
                            }
                        />
                        <RangeControl
                            label={__("Speed")}
                            value={slide_speed}
                            min={100}
                            max={5000}
                            step={10}
                            onChange={(slide_speed) => setAttributes({ slide_speed })}
                        />
                    </PanelBody>
                    <PanelBody title={__("Typography Settings", "wp-learning")} initialOpen={false}>
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Title Settings:", "wp-learning")}
                            </label>
                            <SelectControl
                                label={__("Font Family", "wp-learning")}
                                value={titleFontFamily}
                                options={[
                                    { label: "Roboto", value: "Roboto" },
                                    { label: "Nautigal", value: "Nautigal" },
                                    { label: "RobotoSlab", value: "RobotoSlab" },
                                ]}
                                onChange={(titleFontFamily) =>
                                    setAttributes({ titleFontFamily })
                                }
                            />
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Font Size", "wp-learning")}
                                        value={titleFontsize}
                                        onChange={(titleFontsize) =>
                                            setAttributes({ titleFontsize })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <SelectControl
                                        label={__("Font Weight", "wp-learning")}
                                        value={titleFontWeight}
                                        options={[
                                            { label: 400, value: 400 },
                                            { label: 500, value: 500 },
                                            { label: 600, value: 600 },
                                            { label: 700, value: 700 },
                                            { label: 800, value: 800 },
                                            { label: 900, value: 900 },
                                            { label: "Bold", value: "bold" },
                                            { label: "Bolder", value: "bolder" },
                                            { label: "inherit", value: "inherit" },
                                        ]}
                                        onChange={(titleFontWeight) =>
                                            setAttributes({ titleFontWeight })
                                        }
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
                                value={descFontFamily}
                                options={[
                                    { label: "Roboto", value: "Roboto" },
                                    { label: "Nautigal", value: "Nautigal" },
                                    { label: "RobotoSlab", value: "RobotoSlab" },
                                ]}
                                onChange={(descFontFamily) =>
                                    setAttributes({ descFontFamily })
                                }
                            />
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Font Size", "wp-learning")}
                                        value={descFontsize}
                                        onChange={(descFontsize) =>
                                            setAttributes({ descFontsize })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <SelectControl
                                        label={__("Font Weight", "wp-learning")}
                                        value={descFontWeight}
                                        options={[
                                            { label: 400, value: 400 },
                                            { label: 500, value: 500 },
                                            { label: 600, value: 600 },
                                            { label: 700, value: 700 },
                                            { label: 800, value: 800 },
                                            { label: 900, value: 900 },
                                            { label: "Bold", value: "bold" },
                                            { label: "Bolder", value: "bolder" },
                                            { label: "inherit", value: "inherit" },
                                        ]}
                                        onChange={(descFontWeight) =>
                                            setAttributes({ descFontWeight })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                    <PanelBody title={__("Text Color Settings", "wp-learning")} initialOpen={false}>
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Title Text color", "wp-learning")}
                            </label>
                            <ColorPalette
                                value={titleColor}
                                onChange={(titleColor) => {
                                setAttributes({
                                    titleColor: titleColor
                                    ? titleColor
                                    : "#000000",
                                });
                                }}
                            />
                            <label className="row-panel-label">
                                {__("Description Text color", "wp-learning")}
                            </label>
                            <ColorPalette
                                value={descColor}
                                onChange={(descColor) => {
                                setAttributes({
                                    descColor: descColor ? descColor : "#000000",
                                });
                                }}
                            />
                        </div>
                    </PanelBody>
                    <PanelBody title={__("Spacing Title", "wp-learning")}  initialOpen={ false }>
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Title Padding:", "wp-learning")}
                            </label>
                            <div className="row">
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Top"
                                        min={0}
                                        step={1}
                                        value={titlePadding[0] ? titlePadding[0] : 0}
                                        onChange={(paddingTop) => {
                                            this.updateTitlePadding("top", parseInt(paddingTop));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Right"
                                        min={0}
                                        step={1}
                                        value={titlePadding[1] ? titlePadding[1] : 0}
                                        onChange={(paddingRight) => {
                                            this.updateTitlePadding("right", parseInt(paddingRight));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Bottom"
                                        min={0}
                                        step={1}
                                        value={titlePadding[2] ? titlePadding[2] : 0}
                                        onChange={(paddingBottom) => {
                                            this.updateTitlePadding("bottom", parseInt(paddingBottom));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Left"
                                        min={0}
                                        step={1}
                                        value={titlePadding[3] ? titlePadding[3] : 0}
                                        onChange={(paddingLeft) => {
                                            this.updateTitlePadding("left", parseInt(paddingLeft));
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Title Margin:", "wp-learning")}
                            </label>
                            <div className="row">
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Top"
                                        min={0}
                                        step={1}
                                        value={titleMargin[0] ? titleMargin[0] : 0}
                                        onChange={(marginTop) => {
                                            this.updateTitleMargin("top", parseInt(marginTop));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Right"
                                        min={0}
                                        step={1}
                                        value={titleMargin[1] ? titleMargin[1] : 0}
                                        onChange={(marginRight) => {
                                            this.updateTitleMargin("right", parseInt(marginRight));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Bottom"
                                        min={0}
                                        step={1}
                                        value={titleMargin[2] ? titleMargin[2] : 0}
                                        onChange={(marginBottom) => {
                                            this.updateTitleMargin("bottom", parseInt(marginBottom));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Left"
                                        min={0}
                                        step={1}
                                        value={titleMargin[3] ? titleMargin[3] : 0}
                                        onChange={(marginLeft) => {
                                            this.updateTitleMargin("left", parseInt(marginLeft));
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                    <PanelBody title={__("Spacing Description", "wp-learning")}  initialOpen={ false }>
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Description Padding:", "wp-learning")}
                            </label>
                            <div className="row">
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Top"
                                        min={0}
                                        step={1}
                                        value={descPadding[0] ? descPadding[0] : 0}
                                        onChange={(paddingTop) => {
                                            this.updateDescPadding("top", parseInt(paddingTop));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Right"
                                        min={0}
                                        step={1}
                                        value={descPadding[1] ? descPadding[1] : 0}
                                        onChange={(paddingRight) => {
                                            this.updateDescPadding("right", parseInt(paddingRight));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Bottom"
                                        min={0}
                                        step={1}
                                        value={descPadding[2] ? descPadding[2] : 0}
                                        onChange={(paddingBottom) => {
                                            this.updateDescPadding("bottom", parseInt(paddingBottom));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Left"
                                        min={0}
                                        step={1}
                                        value={descPadding[3] ? descPadding[3] : 0}
                                        onChange={(paddingLeft) => {
                                            this.updateDescPadding("left", parseInt(paddingLeft));
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Description Margin:", "wp-learning")}
                            </label>
                            <div className="row">
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Top"
                                        min={0}
                                        step={1}
                                        value={descMargin[0] ? descMargin[0] : 0}
                                        onChange={(marginTop) => {
                                            this.updateDescMargin("top", parseInt(marginTop));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Right"
                                        min={0}
                                        step={1}
                                        value={descMargin[1] ? descMargin[1] : 0}
                                        onChange={(marginRight) => {
                                            this.updateDescMargin("right", parseInt(marginRight));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Bottom"
                                        min={0}
                                        step={1}
                                        value={descMargin[2] ? descMargin[2] : 0}
                                        onChange={(marginBottom) => {
                                            this.updateDescMargin("bottom", parseInt(marginBottom));
                                        }}
                                    />
                                </div>
                                <div className="col-25">
                                    <TextControl
                                        type="number"
                                        label="Left"
                                        min={0}
                                        step={1}
                                        value={descMargin[3] ? descMargin[3] : 0}
                                        onChange={(marginLeft) => {
                                            this.updateDescMargin("left", parseInt(marginLeft));
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    {slider_save && (
                        <ToolbarGroup>
                            <Button
                                label="edit Column"
                                icon={Edit}
                                className="my-custom-button"
                                onClick={() => {
                                    this.editSlider();
                                }}
                            />
                        </ToolbarGroup>
                    )}
                    {!slider_save && (
                        <ToolbarGroup>
                            <Button
                                label="save Column"
                                icon={save}
                                className="my-custom-button"
                                onClick={() => {
                                    this.saveSlider();
                                }}
                            />
                        </ToolbarGroup>
                    )}
                </BlockControls>
                <div className={classes}>
                    <div className="bx-slider-main-second">
                        {slides_array.length > 0 && (
                            <div className={`bx-slider-wrap-second`}>{slides}</div>
                        )}
                    </div>
                    <div className="add-slide-btn">
                        {slides_array.length == 0 && <p>Add slide to work slider</p>}
                        {(!slider_save || slides_array.length == 0) && (
                            <Tooltip text={__("Add Slide", "wp-learning")}>
                                <i
                                onClick={() => {
                                    this.addNewSlide();
                                }}
                                >
                                    {plus}
                                </i>
                            </Tooltip>
                        )}
                    </div>

                    <style>
                        {`
                            .slider-wrap .bx-slider-wrap-second .slide-inner .slide-content h2 {
                                font-size: ${titleFontsize}px;
                                font-weight: ${titleFontWeight};
                                font-family: ${titleFontFamily};
                                color: ${titleColor};
                                padding:${titlePadding[0]}px ${titlePadding[1]}px ${titlePadding[2]}px ${titlePadding[3]}px;
                                margin:${titleMargin[0]}px ${titleMargin[1]}px ${titleMargin[2]}px ${titleMargin[3]}px;
                            }
                            .slider-wrap .bx-slider-wrap-second .slide-inner .slide-content p {
                                font-size: ${descFontsize}px;
                                font-weight: ${descFontWeight};
                                font-family: ${descFontFamily};
                                color: ${descColor};
                                padding:${descPadding[0]}px ${descPadding[1]}px ${descPadding[2]}px ${descPadding[3]}px;
                                margin:${descMargin[0]}px ${descMargin[1]}px ${descMargin[2]}px ${descMargin[3]}px;
                            }
                        `}
                    </style>
                </div>
            </Fragment>
        );
    }
}

registerBlockType("wp-learning/slider-block-second", {
    title: __("Slider second"),
    icon: "format-aside",
    category: "my-custom-block",
    keywords: [__("slider"), __("banner")],
    supports: {
        align: ["full"],
    },
    attributes: {
        blockId: {
            type: "string",
            default: "",
        },
        slides_array: {
            type: "array",
            default: [],
        },
        slider_save: {
            type: "boolean",
            default: true,
        },
        slide_mode: {
            type: "string",
            default: "horizontal",
        },
        slide_pager: {
            type: "boolean",
            default: true,
        },
        slide_controls: {
            type: "boolean",
            default: true,
        },
        slide_autoplay: {
            type: "boolean",
            default: true,
        },
        slide_infinite: {
            type: "boolean",
            default: true,
        },
        slide_adaptiveHeight: {
            type: "boolean",
            default: true,
        },
        slide_speed: {
            type: "number",
            default: 500,
        },
        titleFontsize: {
            type: "string",
            default: 20,
        },
        descFontsize: {
            type: "string",
            default: 16,
        },
        titleFontWeight: {
            type: "string",
            default: 400,
        },
        descFontWeight: {
            type: "string",
            default: 400,
        },
        titleFontFamily: {
            type: "string",
            default: "Roboto",
        },
        descFontFamily: {
            type: "string",
            default: "Roboto",
        },
        titleColor: {
            type: "string",
            default: "",
        },
        descColor: {
            type: "string",
            default: "",
        },
        titlePadding: {
            type: "array",
            default: [0, 0, 0, 0],
        },
        descPadding: {
            type: "array",
            default: [0, 0, 0, 0],
        },
        titleMargin: {
            type: "array",
            default: [0, 0, 0, 0],
        },
        descMargin: {
            type: "array",
            default: [0, 0, 0, 0],
        },
    },

    edit,
    save: (props) => {
        const { attributes, clientId, className } = props;
        const {
            mediaId,
            mediaUrl,
            slide_mode,
            slide_pager,
            slide_controls,
            slide_autoplay,
            slide_infinite,
            slide_adaptiveHeight,
            slide_speed,
            slides_array,
            titleFontFamily,
            titleFontsize,
            titleFontWeight,
            descFontFamily,
            descFontsize,
            descFontWeight,
            titleColor,
            descColor,
            titlePadding,
            descPadding,
            titleMargin,
            descMargin,
        } = attributes;

        const classes = classnames(className);

        return (
            <div className={`slider ${classes}`}>
                {slides_array.length > 0 && (
                    <div className="bx-slider-main-second">
                        <input type="hidden" className="slide_mode" data-value={slide_mode} />
                        <input type="hidden" className="slide_pager" data-value={slide_pager} />
                        <input type="hidden" className="slide_controls" data-value={slide_controls} />
                        <input type="hidden" className="slide_autoplay" data-value={slide_autoplay} />
                        <input type="hidden" className="slide_infinite" data-value={slide_infinite} />
                        <input type="hidden" className="slide_adaptiveHeight" data-value={slide_adaptiveHeight} />
                        <input type="hidden" className="slide_speed" data-value={slide_speed} />
                        <div className="bx-slider-wrap-second">
                            {slides_array.map((data, index) => {
                                return (
                                    <div className="slide-inner">
                                        <div className="slide-content">
                                            <RichText.Content tagName="h2" value={data.slide_title} />
                                            <RichText.Content tagName="p" value={data.slide_desc} />
                                        </div>
                                        <div className="slide-img">
                                            {data.slide_bgImgID && <img src={data.slide_bgImgURL} />}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
                <style>
                    {`
                        .bx-slider-main-second .bx-slider-wrap-second .slide-inner .slide-content h2 {
                            font-size: ${titleFontsize}px;
                            font-weight: ${titleFontWeight};
                            font-family: ${titleFontFamily};
                            color: ${titleColor};
                            padding:${titlePadding[0]}px ${titlePadding[1]}px ${titlePadding[2]}px ${titlePadding[3]}px;
                            margin:${titleMargin[0]}px ${titleMargin[1]}px ${titleMargin[2]}px ${titleMargin[3]}px;
                        }
                        .bx-slider-main-second .bx-slider-wrap-second .slide-inner .slide-content p {
                            font-size: ${descFontsize}px;
                            font-weight: ${descFontWeight};
                            font-family: ${descFontFamily};
                            color: ${descColor};
                            padding:${descPadding[0]}px ${descPadding[1]}px ${descPadding[2]}px ${descPadding[3]}px;
                            margin:${descMargin[0]}px ${descMargin[1]}px ${descMargin[2]}px ${descMargin[3]}px;
                        }
                    `}
                </style>
            </div>
        );
    },
});
