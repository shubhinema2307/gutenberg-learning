<?php
/**
 * my blocks category for custom blocks
 */
function my_custom_block_category( $categories ) {
	return array_merge(
		array(
			array(
				'slug'  => 'my-custom-block',
				'title' => __( 'my-custom-block', 'my-custom-block' ),
			),
		),
		$categories
	);
}
add_filter( 'block_categories', 'my_custom_block_category', 10, 2 );



/**
 * Added scripts for register blocks
 */
function wp_learning_block_admin_scripts() {
    /* block js */
    wp_register_script('wplearning-block-script', get_template_directory_uri() . '/blocks/block.build.js',
    	array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n'), time()
	);

	/* editor style & script */
    wp_register_style('wplearning-block-style', get_template_directory_uri() . '/blocks/assets/css/block.css', array(), time());
    wp_enqueue_script('wplearning-admin-script', get_template_directory_uri() . '/blocks/assets/js/block.js', array('jquery'), time(), true);

	wp_enqueue_script( 'wp-learning-jquery', get_template_directory_uri() . '/assets/js/jquery-3.6.0.min.js', array(), _S_VERSION, true );
	//wp_enqueue_style( 'wp-learning-bootstrap-style', get_stylesheet_directory_uri() . '/assets/css/bootstrap.min.css', array('wp-edit-blocks'), time());
	wp_enqueue_style( 'wp-learning-bxslider-style', get_stylesheet_directory_uri() . '/assets/css/jquery.bxslider.css', array('wp-edit-blocks'), time());
	wp_enqueue_script( 'wp-learning-bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'wp-learning-popper', get_template_directory_uri() . '/assets/js/popper.min.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'wp-learning-bxslider', get_template_directory_uri() . '/assets/js/jquery.bxslider.min.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'wp-learning-slick', get_template_directory_uri() . '/assets/js/slick.min.js', array(), _S_VERSION, true );

    /* register block type */
    register_block_type(
    	'wplearning/wplearning-blocks',
		array(
			'editor_script' => 'wplearning-block-script',
			'editor_style'  => 'wplearning-block-style',
		)
	);
}

add_action( 'enqueue_block_editor_assets', 'wp_learning_block_admin_scripts' );





  /**
 * Added Front side scripts for blocks
 */
function wp_learning_block_frontend_style() {
	wp_enqueue_style( 'wp-learning-block-front-style', get_template_directory_uri() . '/blocks/assets/css/frontend.css', array(), time() );
	wp_enqueue_style( 'wp-learning-bxslider-front-style', get_template_directory_uri() . '/assets/css/jquery.bxslider.css', array(), time() );
	wp_enqueue_script( 'wp-learning-jquery', get_template_directory_uri() . '/assets/js/jquery-3.6.0.min.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'wp-learning-bxslider', get_template_directory_uri() . '/assets/js/jquery.bxslider.min.js', array(), _S_VERSION, true );
	wp_enqueue_script( 'wp-learning-customjs', get_template_directory_uri() . '/blocks/assets/js/block.js', array(), _S_VERSION, true );
}

add_action( 'wp_enqueue_scripts', 'wp_learning_block_frontend_style' );
