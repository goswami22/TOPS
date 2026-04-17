<?php
/**
 * @package Psychology Therapist
 * Setup the WordPress core custom header feature.
 *
 * @uses psychology_therapist_header_style()
*/
function psychology_therapist_custom_header_setup() {
	add_theme_support( 'custom-header', apply_filters( 'psychology_therapist_custom_header_args', array(
		'header-text' 			 =>	false,
		'width'                  => 1200,
		'height'                 => 70,
		'flex-width'    		 => true,
		'flex-height'    		 => true,
		'wp-head-callback'       => 'psychology_therapist_header_style',
	) ) );
}
add_action( 'after_setup_theme', 'psychology_therapist_custom_header_setup' );

if ( ! function_exists( 'psychology_therapist_header_style' ) ) :
/**
 * Styles the header image and text displayed on the blog
 *
 * @see psychology_therapist_custom_header_setup().
 */
add_action( 'wp_enqueue_scripts', 'psychology_therapist_header_style' );

function psychology_therapist_header_style() {
	if ( get_header_image() ) :
	$custom_css = "
        .header-menu{
			background-image:url('".esc_url(get_header_image())."');
			background-position: center top;
		    background-size: cover;
		}";
	   	wp_add_inline_style( 'psychology-therapist-basic-style', $custom_css );
	endif;
}
endif;