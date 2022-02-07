/**
 *  BLOCK: Slider
 *  ---
 *
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Component, Fragment, useState } = wp.element;
const {
    InspectorControls,
    RichText,
    MediaUpload,
} = wp.blockEditor;
const {
    PanelBody,
    TextControl,
    SelectControl,
    RangeControl,
    Button,
    Tooltip,
    ToggleControl,
} = wp.components;

import { plus, remove} from "../custom-icons";
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
        const { setAttributes, attributes } = this.props;
        const { slides_array, slider_save } = attributes;

        if (slides_array.length > 0) {
            this.OnInitSlides();
        }
    }

    componentDidUpdate(prevProps) {
        const {
        slides_array,
        slide_mode,
        slide_pager,
        slide_controls,
        slide_autoplay,
        slide_infinite,
        slide_adaptiveHeight,
        slide_speed,
        } = this.props.attributes;
        const { slides_array: prev_slide_array } = prevProps.attributes;

        if (slides_array.length !== prev_slide_array.length) {
            if (prev_slide_array.length === 0) {
                setTimeout(() => this.OnInitSlides(), 10);
            } else {
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
        ){this.onUpdateSliderState();}
    }

    OnInitSlides() {
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
        const sliderObjMount = jQuery(".bx-slider-wrap").bxSlider({
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
    }

    onUpdateSliderState() {
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

    render() {
        const { attributes, setAttributes, clientId, className } = this.props;
        const {
            slides_array,
            slide_mode,
            slide_pager,
            slide_controls,
            slide_autoplay,
            slide_infinite,
            slide_adaptiveHeight,
            slide_speed,
            sliderTitleFontFamily,
            sliderTitleFontsize,
            sliderTitleFontWeight,
            sliderDescFontFamily,
            sliderDescFontsize,
            sliderDescFontWeight,
        } = attributes;

        setAttributes({ blockId: clientId });

        const classes = classnames(className, `slider-wrap`);

        const slides = slides_array.map((data, index) => {
            return (
                <div className="slide-inner">
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
                    <div className="slide-img">
                        {!data.slide_bgImgID && (
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
                    <PanelBody title={__("Slider Settings", "wp-learning")} initialOpen={false} >
                        <SelectControl
                            label={__("Mode", "storyful")}
                            value={slide_mode}
                            options={[
                                { label: __("Horizontal"), value: "horizontal" },
                                { label: __("Vertical"), value: "vertical" },
                                { label: __("Fade"), value: "fade" },
                            ]}
                            onChange={(slide_mode) => setAttributes({ slide_mode })}
                        />
                        <ToggleControl
                            label={__("Pager", "storyful")}
                            checked={slide_pager}
                            onChange={(slide_pager) => setAttributes({ slide_pager })}
                        />
                        <ToggleControl
                            label={__("Controls", "storyful")}
                            checked={slide_controls}
                            onChange={(slide_controls) => setAttributes({ slide_controls })}
                        />
                        <ToggleControl
                            label={__("Auto Play", "storyful")}
                            checked={slide_autoplay}
                            onChange={(slide_autoplay) => setAttributes({ slide_autoplay })}
                        />
                        <ToggleControl
                            label={__("Infinite Loop", "storyful")}
                            checked={slide_infinite}
                            onChange={(slide_infinite) => setAttributes({ slide_infinite })}
                        />
                        <ToggleControl
                            label={__("Adaptive Height", "storyful")}
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
                    <PanelBody title={__("Typography Settings", "wp-learning")} initialOpen={false} >
                        <div className="row-panel">
                            <label className="row-panel-label">
                                {__("Title Settings:", "wp-learning")}
                            </label>
                            <SelectControl
                                label={__("Font Family", "wp-learning")}
                                value={sliderTitleFontFamily}
                                options={[
                                    { label: "Roboto", value: "Roboto" },
                                    { label: "Nautigal", value: "Nautigal" },
                                ]}
                                onChange={(newval) =>
                                    setAttributes({ sliderTitleFontFamily: newval })
                                }
                            />
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Font Size", "wp-learning")}
                                        value={sliderTitleFontsize}
                                        onChange={(sliderTitleFontsize) =>
                                            setAttributes({ sliderTitleFontsize })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <SelectControl
                                        label={__("Font Weight", "wp-learning")}
                                        value={sliderTitleFontWeight}
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
                                        onChange={(sliderTitleFontWeight) =>
                                        setAttributes({ sliderTitleFontWeight })
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
                                value={sliderDescFontFamily}
                                options={[
                                    { label: "Roboto", value: "Roboto" },
                                    { label: "Nautigal", value: "Nautigal" },
                                ]}
                                onChange={(newval) =>
                                setAttributes({ sliderDescFontFamily: newval })
                                }
                            />
                            <div className="row">
                                <div className="col-50">
                                    <TextControl
                                        type="number"
                                        label={__("Font Size", "wp-learning")}
                                        value={sliderDescFontsize}
                                        onChange={(sliderDescFontsize) =>
                                            setAttributes({ sliderDescFontsize })
                                        }
                                    />
                                </div>
                                <div className="col-50">
                                    <SelectControl
                                        label={__("Font Weight", "wp-learning")}
                                        value={sliderDescFontWeight}
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
                                        onChange={(sliderDescFontWeight) =>
                                            setAttributes({ sliderDescFontWeight })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </PanelBody>
                </InspectorControls>

                <div className={classes}>
                    <div className="bx-slider-main">
                        {slides_array.length > 0 && (
                            <div className={`bx-slider-wrap`}>{slides}</div>
                        )}
                    </div>
                    <div className="add-slide-btn">
                        {slides_array.length == 0 && <p>Add slide to work slider</p>}
                            <Tooltip text={__("Add Slide", "wp-learning")}>
                                <i
                                    onClick={() => {
                                    this.addNewSlide();
                                    }}
                                >
                                    {plus}
                                </i>
                            </Tooltip>
                    </div>
                    <style>
                        {`
                            .slider-wrap .bx-slider-wrap .slide-inner .slide-content h2 {
                                font-size: ${sliderTitleFontsize}px;
                                font-weight: ${sliderTitleFontWeight};
                                font-family: ${sliderTitleFontFamily};
                            }
                            .slider-wrap .bx-slider-wrap .slide-inner .slide-content h2 {
                                font-size: ${sliderDescFontsize}px;
                                font-weight: ${sliderDescFontWeight};
                                font-family: ${sliderDescFontFamily};
                            }
                        `}
                    </style>
                </div>
            </Fragment>
        );
    }
}

registerBlockType("wp-learning/slider-block", {
    title: __("Slider"),
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
            default: "",
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
        sliderTitleFontsize: {
            type: "string",
            default: 20,
        },
        sliderDescFontsize: {
            type: "string",
            default: 16,
        },
        sliderTitleFontWeight: {
            type: "string",
            default: 400,
        },
        sliderDescFontWeight: {
            type: "string",
            default: 400,
        },
        sliderTitleFontFamily: {
            type: "string",
            default: "Roboto",
        },
        sliderDescFontFamily: {
            type: "string",
            default: "Roboto",
        },
    },

    edit,
    save: (props) => {
        const { attributes, clientId, className } = props;
        const {
            slide_mode,
            slide_pager,
            slide_controls,
            slide_autoplay,
            slide_infinite,
            slide_adaptiveHeight,
            slide_speed,
            slides_array
        } = attributes;

        const classes = classnames(className, `row`);

        return (
            <div className={`slider ${classes}`}>
                {slides_array.length > 0 && (
                    <div className="bx-slider-main">
                        <input type="hidden" className="slide_mode" data-value={slide_mode} />
                        <input type="hidden" className="slide_pager" data-value={slide_pager} />
                        <input type="hidden" className="slide_controls" data-value={slide_controls} />
                        <input type="hidden" className="slide_autoplay" data-value={slide_autoplay} />
                        <input type="hidden" className="slide_infinite" data-value={slide_infinite} />
                        <input type="hidden" className="slide_adaptiveHeight" data-value={slide_adaptiveHeight} />
                        <input type="hidden" className="slide_speed" data-value={slide_speed} />
                        <div className="bx-slider-wrap">
                            {slides_array.map((data, index) => {
                                return (
                                    <div className="slide-inner">
                                        <div className="slide-content">
                                            <RichText.Content tagName="h2" value={data.slide_title} />
                                            <RichText.Content tagName="p" value={data.slide_para} />
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
            </div>
        );
    },
});
