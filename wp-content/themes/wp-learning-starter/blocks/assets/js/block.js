// Slider Block
jQuery('.bx-slider-main').each(function() {
    let slideMode = $(this).find('.slide_mode').attr('data-value');
    let slidePager = $(this).find('.slide_pager').attr('data-value');
    let slideControls = $(this).find('.slide_controls').attr('data-value');
    let slideAutoplay = $(this).find('.slide_autoplay').attr('data-value');
    let slideInfinite = $(this).find('.slide_infinite').attr('data-value');
    let slideAdaptiveHeight = $(this).find('.slide_adaptiveHeight').attr('data-value');
    let slideSpeed = $(this).find('.slide_speed').attr('data-value');
    $(this).find('.bx-slider-wrap').bxSlider({
        mode: slideMode,
        pager: 'true' == slidePager,
        controls: 'true' == slideControls,
        auto: 'true' == slideAutoplay,
        infiniteLoop: 'true' == slideInfinite,
        adaptiveHeight: 'true' == slideAdaptiveHeight,
        speed: slideSpeed
    });
    // $(this).find('.stf-slider-actions .stf-item-preview').on('click', function(){
    //    let slideID = $(this).attr('data-id');
    //    slider.goToSlide(parseInt(slideID));
    // });
});