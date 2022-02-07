const $ = jQuery;
$(document).ready(function(){

    // Slider Block
    $('.bx-slider-main').each(function() {
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
    });

    // Slider Block
    $('.bx-slider-main-second').each(function() {
        let slideMode = $(this).find('.slide_mode').attr('data-value');
        let slidePager = $(this).find('.slide_pager').attr('data-value');
        let slideControls = $(this).find('.slide_controls').attr('data-value');
        let slideAutoplay = $(this).find('.slide_autoplay').attr('data-value');
        let slideInfinite = $(this).find('.slide_infinite').attr('data-value');
        let slideAdaptiveHeight = $(this).find('.slide_adaptiveHeight').attr('data-value');
        let slideSpeed = $(this).find('.slide_speed').attr('data-value');
        $(this).find('.bx-slider-wrap-second').bxSlider({
            mode: slideMode,
            pager: 'true' == slidePager,
            controls: 'true' == slideControls,
            auto: 'true' == slideAutoplay,
            infiniteLoop: 'true' == slideInfinite,
            adaptiveHeight: 'true' == slideAdaptiveHeight,
            speed: slideSpeed
        });
    });



    $(document).on("click", ".list-view", function (e) {
        e.preventDefault();
        //alert('hello');
        $(this).parents(".post-view").siblings(".post-wraper").removeClass('row-grid-view ');
        $(this).parents(".post-view").siblings(".post-wraper").addClass('row-list-view');
    });
    $(document).on("click", ".grid-view", function (e) {
        e.preventDefault();
        //alert('hello');
        $(this).parents(".post-view").siblings(".post-wraper").removeClass('row-list-view');
        $(this).parents(".post-view").siblings(".post-wraper").addClass('row-grid-view');
    });
    
});
