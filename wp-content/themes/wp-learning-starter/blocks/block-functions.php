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




function wplearning_register_blocks() {
    register_block_type( 'wp-learning/dynamic-post-block', array(
        'attributes'		=> [
            'postsType' => [
                'type' => 'string',
                'default' => ''
            ],
            'noOfPosts' => [
                'type' => 'number',
                'default' => 4
            ],
            'postsOrder' => [
                'type' => 'string',
                'default' => 'DESC'
            ],
            'postsCategory' => [
                'type' => 'string',
                'default' => ''
            ],
            'showThumbnail' => [
                'type' => 'boolean',
                'default' => true
            ],
            'showExcerpt' => [
                'type' => 'boolean',
                'default' => true
            ],
            'showPagination' => [
                'type' => 'boolean',
                'default' => true
            ],
            'onReloadView' => [
                'type' => 'boolean',
                'default' => true
            ],
            'gridViewColumn' => [
                'type' => 'number',
                'default' => 3
            ],

        ],
        'render_callback' => 'wp_learning_dynamic_post_block'
    ));
}

add_action( 'init', 'wplearning_register_blocks' );

function wp_learning_dynamic_post_block($attr, $content) {

   $post_type = isset($attr['postsType']) && !empty($attr['postsType']) ? $attr['postsType'] : 'any'; 
    $no_post = isset($attr['noOfPosts']) && !empty($attr['noOfPosts']) ? $attr['noOfPosts'] : 4;
    $post_order = isset($attr['postsOrder']) && !empty($attr['postsOrder']) ? $attr['postsOrder'] : 'DESC';
    $post_category = isset($attr['postsCategory']) && !empty($attr['postsCategory']) ? $attr['postsCategory'] : '';
    $show_thumbnail = isset($attr['showThumbnail']) ? $attr['showThumbnail'] : true;
    $show_excerpt = isset($attr['showExcerpt']) ? $attr['showExcerpt'] : true;
    $paged = ( get_query_var( 'paged' ) ) ? absint( get_query_var( 'paged' ) ) : 1;
    $on_reload_view = isset($attr['onReloadView']) && ($attr['onReloadView'] !== false) ? 'row-grid-view' : 'row-list-view';
   $gridViewColumn = isset($attr['gridViewColumn']) && !empty($attr['gridViewColumn']) ? $attr['gridViewColumn'] : '';
    $show_pagination = isset($attr['showPagination']) ? $attr['showPagination'] : true;

    //var_dump($attr);
    //die();
    $args = array(
        'post_type' => $post_type,
        'post_status' => 'publish',
        'posts_per_page' => $no_post,
        'order' => $post_order,
        'category_name' => $post_category,
        'paged' => $paged,
    );

    $query = new WP_Query( $args );
    ob_start(); // Turn on output buffering
    /* BEGIN HTML OUTPUT */
	?>

        <div class="latest-post">
            <div class="post-view">
                <div class="list-view view-btn">List View</div>
                <div class="grid-view view-btn">Grid View</div>
            </div>
            <?php if ( $query->have_posts() ) : ?>  
                <div class="post-wraper <?php echo $on_reload_view ?> has-<?php if($on_reload_view === 'row-grid-view'){ echo $gridViewColumn;} ?>-columns">
                    <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                        <div class="post-item">
                            <?php 
                                if($show_thumbnail === true){
                                    the_post_thumbnail();
                                }
                            ?>
                            <h2><?php the_title(); ?></h2>
                            <?php 
                                if($show_excerpt){
                                    the_excerpt();
                                }
                            ?>
                        </div>
                    <?php endwhile; ?>
                    <!-- end loop -->
                </div>
                    
                <?php wp_reset_postdata(); ?>
                <?php else : ?>
                    <p><?php _e( 'Sorry, no posts matched your criteria.' ); ?></p>
            <?php endif; ?>

            <?php if( $query->have_posts() ) : ?>
                <?php if( $show_pagination ) : ?>
                    <div class="pagination">
                        <?php 
                            $big = 999999999; // need an unlikely integer
                            echo paginate_links( array(
                                'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
                                'format' => '?paged=%#%',
                                'current' => max( 1, get_query_var('paged') ),
                                'total' => $query->max_num_pages
                            ) );
                        ?>
                    </div>
                <?php endif; ?>
            <?php endif; ?>  
        </div>
    <?php
    /* END HTML OUTPUT */
    //$output = ob_get_contents(); // collect output
    $html = ob_get_clean(); // Turn off ouput buffer
    //   return $output; // Print output

    return $html;
   
}

