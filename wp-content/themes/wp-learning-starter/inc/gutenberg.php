<?php

/**
 * custom gutenberg function
 */


//  function myfirst_gutenberg_default_colors() 
//  {
//     add_theme_support(
//         'editor-color-palette', 
//         array(
//             array (
//                 'name' => 'hola-white',
//                 'slug' => 'slug',
//                 'color' => '#ffffff'
//             )
//         )
//     );
//  }

//  add_action('init', 'myfirst_gutenberg_default_colors');

 
function wp_learning_starter_theme_support(){

    add_theme_support('align-wide');


    add_theme_support( 'editor-color-palette', array(
        array(
            'name' => __('maroon', 'wp-learning'),
            'slug' => 'maroon',
            'color' => '#4d2a2a'
        ),
        array(
            'name' => __('sea green', 'wp-learning'),
            'slug' => 'sea green',
            'color' => '#00e5ff'
        )
    ));

    add_theme_support( 'responsive-embeds' );
}


//add_action( 'after_setup_theme', 'wp_learning_starter_theme_support');


?>