<?php
/**
 * Psychology Therapist Theme Customizer
 *
 * @package Psychology Therapist
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
 
function psychology_therapist_custom_controls() {
	load_template( trailingslashit( get_template_directory() ) . '/inc/custom-controls.php' );
}
add_action( 'customize_register', 'psychology_therapist_custom_controls' );

function psychology_therapist_customize_register( $wp_customize ) {

	load_template( trailingslashit( get_template_directory() ) . '/inc/icon-picker.php' );

	$wp_customize->get_setting( 'blogname' )->transport = 'postMessage'; 
	$wp_customize->get_setting( 'blogdescription' )->transport = 'postMessage';

	//Selective Refresh
	$wp_customize->selective_refresh->add_partial( 'blogname', array( 
		'selector' => '.logo .site-title a', 
	 	'render_callback' => 'psychology_therapist_Customize_partial_blogname',
	)); 

	$wp_customize->selective_refresh->add_partial( 'blogdescription', array( 
		'selector' => 'p.site-description', 
		'render_callback' => 'psychology_therapist_Customize_partial_blogdescription',
	));

	// add home page setting pannel
	$wp_customize->add_panel( 'psychology_therapist_panel_id', array(
		'capability' => 'edit_theme_options',
		'theme_supports' => '',
		'title' => esc_html__( 'Homepage Settings', 'psychology-therapist' ),
		'priority' => 10,
	));

	//Topbar
	$wp_customize->add_section( 'psychology_therapist_topbar_section' , array(
    	'title' => __( 'Topbar Section', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_panel_id'
	) );

 	// Header Background color
	$wp_customize->add_setting('psychology_therapist_header_background_color', array(
		'default'           => '',
		'sanitize_callback' => 'sanitize_hex_color',
	));
	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'psychology_therapist_header_background_color', array(
		'label'    => __('Header Background Color', 'psychology-therapist'),
		'section'  => 'header_image',
	)));

	$wp_customize->add_setting('psychology_therapist_header_img_position',array(
	  'default' => 'center top',
	  'transport' => 'refresh',
	  'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_header_img_position',array(
		'type' => 'select',
		'label' => __('Header Image Position','psychology-therapist'),
		'section' => 'header_image',
		'choices' 	=> array(
			'left top' 		=> esc_html__( 'Top Left', 'psychology-therapist' ),
			'center top'   => esc_html__( 'Top', 'psychology-therapist' ),
			'right top'   => esc_html__( 'Top Right', 'psychology-therapist' ),
			'left center'   => esc_html__( 'Left', 'psychology-therapist' ),
			'center center'   => esc_html__( 'Center', 'psychology-therapist' ),
			'right center'   => esc_html__( 'Right', 'psychology-therapist' ),
			'left bottom'   => esc_html__( 'Bottom Left', 'psychology-therapist' ),
			'center bottom'   => esc_html__( 'Bottom', 'psychology-therapist' ),
			'right bottom'   => esc_html__( 'Bottom Right', 'psychology-therapist' ),
		),
	));

	$wp_customize->add_setting( 'psychology_therapist_topbar_hide_show',array(
      'default' => false,
      'transport' => 'refresh',
      'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ));  
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_topbar_hide_show',array(
      'label' => esc_html__( 'Show / Hide Topbar','psychology-therapist' ),
      'section' => 'psychology_therapist_topbar_section'
    )));

    $wp_customize->add_setting('psychology_therapist_email_address',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_email'
	));	
	$wp_customize->add_control('psychology_therapist_email_address',array(
		'label'	=> __('Add Email Address','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'support@example.com', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_topbar_section',
		'type'=> 'text'
	));

    $wp_customize->add_setting('psychology_therapist_phone_number',array(
		'default'=> '',
		'sanitize_callback'	=> 'psychology_therapist_sanitize_phone_number'
	));	
	$wp_customize->add_control('psychology_therapist_phone_number',array(
		'label'	=> __('Add Phone number','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '+00 123 456 7890', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_topbar_section',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_location_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_location_text',array(
		'label'	=> esc_html__('Location Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'Park Ave,Portland,USA', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_topbar_section',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_topbar_btn_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_topbar_btn_text',array(
		'label'	=> esc_html__('Add Button Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'Get A Quote', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_topbar_section',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_topbar_btn_link',array(
		'default'=> '',
		'sanitize_callback'	=> 'esc_url_raw'
	));
	$wp_customize->add_control('psychology_therapist_topbar_btn_link',array(
		'label'	=> esc_html__('Add Button Link','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'www.example-info.com', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_topbar_section',
		'type'=> 'url'
	));

	$wp_customize->add_setting('psychology_therapist_appointment_btn_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_appointment_btn_text',array(
		'label'	=> esc_html__('Add Button Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'GET APPOINTMENT', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_topbar_section',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_appointment_btn_link',array(
		'default'=> '',
		'sanitize_callback'	=> 'esc_url_raw'
	));
	$wp_customize->add_control('psychology_therapist_appointment_btn_link',array(
		'label'	=> esc_html__('Add Button Link','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'www.example-info.com', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_topbar_section',
		'type'=> 'url'
	));

	//Slider
	$wp_customize->add_section( 'psychology_therapist_slidersettings' , array(
  	'title'      => __( 'Slider Settings', 'psychology-therapist' ),
  	'description' => __('Free theme has 3 slides options, For unlimited slides and more options </br> <a class="go-pro-btn" target="blank" href="https://www.vwthemes.com/themes/therapist-wordpress-theme/">GO PRO</a>','psychology-therapist'),
		'panel' => 'psychology_therapist_panel_id'
	) );

	$wp_customize->add_setting( 'psychology_therapist_slider_hide_show',array(
      'default' => 0,
      'transport' => 'refresh',
      'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ));  
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_slider_hide_show',array(
      'label' => esc_html__( 'Show / Hide Slider','psychology-therapist' ),
      'section' => 'psychology_therapist_slidersettings'
    )));

 	//Selective Refresh
    $wp_customize->selective_refresh->add_partial('psychology_therapist_slider_hide_show',array(
		'selector'        => '.slider-btn a',
		'render_callback' => 'psychology_therapist_customize_partial_psychology_therapist_slider_hide_show',
	));

  $wp_customize->add_setting('psychology_therapist_slider_type',array(
    'default' => 'Default slider',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	) );
	$wp_customize->add_control('psychology_therapist_slider_type', array(
    'type' => 'select',
    'label' => __('Slider Type','psychology-therapist'),
    'section' => 'psychology_therapist_slidersettings',
    'choices' => array(
        'Default slider' => __('Default slider','psychology-therapist'),
        'Advance slider' => __('Advance slider','psychology-therapist'),
        ),
	));

	$wp_customize->add_setting('psychology_therapist_advance_slider_shortcode',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_advance_slider_shortcode',array(
		'label'	=> __('Add Slider Shortcode','psychology-therapist'),
		'section'=> 'psychology_therapist_slidersettings',
		'type'=> 'text',
		'active_callback' => 'psychology_therapist_advance_slider'
	));

	for ( $count = 1; $count <= 3; $count++ ) {
		$wp_customize->add_setting( 'psychology_therapist_slider_page' . $count, array(
			'default'           => '',
			'sanitize_callback' => 'psychology_therapist_sanitize_dropdown_pages'
		) );
		$wp_customize->add_control( 'psychology_therapist_slider_page' . $count, array(
			'label'    => __( 'Select Slider Page', 'psychology-therapist' ),
			'description' => __('Slider image size (1400 x 550)','psychology-therapist'),
			'section'  => 'psychology_therapist_slidersettings',
			'type'     => 'dropdown-pages',
			'active_callback' => 'psychology_therapist_default_slider'
		) );
	}

	//content layout
	$wp_customize->add_setting('psychology_therapist_slider_content_option',array(
        'default' => 'Left',
        'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control(new psychology_therapist_Image_Radio_Control($wp_customize, 'psychology_therapist_slider_content_option', array(
        'type' => 'select',
        'label' => esc_html__('Slider Content Layouts','psychology-therapist'),
        'section' => 'psychology_therapist_slidersettings',
        'choices' => array(
            'Left' => esc_url(get_template_directory_uri()).'/assets/images/slider-content1.png',
            'Center' => esc_url(get_template_directory_uri()).'/assets/images/slider-content2.png',
            'Right' => esc_url(get_template_directory_uri()).'/assets/images/slider-content3.png',
    ),'active_callback' => 'psychology_therapist_default_slider'
    )));

    //Slider content padding
    $wp_customize->add_setting('psychology_therapist_slider_content_padding_top_bottom',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_slider_content_padding_top_bottom',array(
		'label'	=> __('Slider Content Padding Top Bottom','psychology-therapist'),
		'description'	=> __('Enter a value in %. Example:20%','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '50%', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_slidersettings',
		'type'=> 'text',
		'active_callback' => 'psychology_therapist_default_slider'
	));

	$wp_customize->add_setting('psychology_therapist_slider_content_padding_left_right',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_slider_content_padding_left_right',array(
		'label'	=> __('Slider Content Padding Left Right','psychology-therapist'),
		'description'	=> __('Enter a value in %. Example:20%','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '50%', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_slidersettings',
		'type'=> 'text',
		'active_callback' => 'psychology_therapist_default_slider'
	));

    //Slider excerpt
	$wp_customize->add_setting( 'psychology_therapist_slider_excerpt_number', array(
		'default'              => 25,
		'type'                 => 'theme_mod',
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range',
		'sanitize_js_callback' => 'absint',
	) );
	$wp_customize->add_control( 'psychology_therapist_slider_excerpt_number', array(
		'label'       => esc_html__( 'Slider Excerpt length','psychology-therapist' ),
		'section'     => 'psychology_therapist_slidersettings',
		'type'        => 'range',
		'settings'    => 'psychology_therapist_slider_excerpt_number',
		'input_attrs' => array(
			'step'             => 5,
			'min'              => 0,
			'max'              => 50,
		),'active_callback' => 'psychology_therapist_default_slider'
	) );

	$wp_customize->add_setting( 'psychology_therapist_slider_speed', array(
		'default'  => 4000,
		'sanitize_callback'	=> 'sanitize_text_field'
	) );
	$wp_customize->add_control( 'psychology_therapist_slider_speed', array(
		'label' => esc_html__('Slider Transition Speed','psychology-therapist'),
		'section' => 'psychology_therapist_slidersettings',
		'type'  => 'text',
		'active_callback' => 'psychology_therapist_default_slider'
	) );
	//Opacity
	$wp_customize->add_setting('psychology_therapist_slider_opacity_color',array(
      'default'              => 0.5,
      'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));

	$wp_customize->add_control( 'psychology_therapist_slider_opacity_color', array(
		'label'       => esc_html__( 'Slider Image Opacity','psychology-therapist' ),
		'section'     => 'psychology_therapist_slidersettings',
		'type'        => 'select',
		'settings'    => 'psychology_therapist_slider_opacity_color',
		'choices' => array(
	      '0' =>  esc_attr('0','psychology-therapist'),
	      '0.1' =>  esc_attr('0.1','psychology-therapist'),
	      '0.2' =>  esc_attr('0.2','psychology-therapist'),
	      '0.3' =>  esc_attr('0.3','psychology-therapist'),
	      '0.4' =>  esc_attr('0.4','psychology-therapist'),
	      '0.5' =>  esc_attr('0.5','psychology-therapist'),
	      '0.6' =>  esc_attr('0.6','psychology-therapist'),
	      '0.7' =>  esc_attr('0.7','psychology-therapist'),
	      '0.8' =>  esc_attr('0.8','psychology-therapist'),
	      '0.9' =>  esc_attr('0.9','psychology-therapist')
	),'active_callback' => 'psychology_therapist_default_slider'
	));

	$wp_customize->add_setting( 'psychology_therapist_slider_image_overlay',array(
    	'default' => '#000',
    	'transport' => 'refresh',
    	'sanitize_callback' => 'psychology_therapist_switch_sanitization'
   ));
   $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_slider_image_overlay',array(
      	'label' => esc_html__( 'Show / Hide Image Overlay','psychology-therapist' ),
      	'section' => 'psychology_therapist_slidersettings',
      	'active_callback' => 'psychology_therapist_default_slider'
   )));

   $wp_customize->add_setting('psychology_therapist_slider_image_overlay_color', array(
		'default'           => 1,
		'sanitize_callback' => 'sanitize_hex_color',
	));
	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'psychology_therapist_slider_image_overlay_color', array(
		'label'    => __('Slider Image Overlay Color', 'psychology-therapist'),
		'section'  => 'psychology_therapist_slidersettings',
		'active_callback' => 'psychology_therapist_default_slider'
	)));

	//Slider height
	$wp_customize->add_setting('psychology_therapist_slider_height',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_slider_height',array(
		'label'	=> __('Slider Height','psychology-therapist'),
		'description'	=> __('Specify the slider height (px).','psychology-therapist'),
		'input_attrs' => array(
    'placeholder' => __( '500px', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_slidersettings',
		'type'=> 'text',
		'active_callback' => 'psychology_therapist_default_slider'
	));

	$wp_customize->add_setting( 'psychology_therapist_slider_arrow_hide_show',array(
	    'default' => 1,
	    'transport' => 'refresh',
	    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	));
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_slider_arrow_hide_show',array(
		'label' => esc_html__( 'Show / Hide Slider Arrows','psychology-therapist' ),
		'section' => 'psychology_therapist_slidersettings',
		'active_callback' => 'psychology_therapist_default_slider'
	))); 

	$wp_customize->add_setting('psychology_therapist_slider_prev_icon',array(
		'default'	=> 'fas fa-angle-double-left',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_slider_prev_icon',array(
		'label'	=> __('Add Slider Prev Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_slidersettings',
		'setting'	=> 'psychology_therapist_slider_prev_icon',
		'type'		=> 'icon',
		'active_callback' => 'psychology_therapist_default_slider'
	)));

	$wp_customize->add_setting('psychology_therapist_slider_next_icon',array(
		'default'	=> 'fas fa-angle-double-right',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_slider_next_icon',array(
		'label'	=> __('Add Slider Next Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_slidersettings',
		'setting'	=> 'psychology_therapist_slider_next_icon',
		'type'		=> 'icon',
		'active_callback' => 'psychology_therapist_default_slider'
	)));

	//About Us Section
	$wp_customize->add_section('psychology_therapist_about_us_section',array(
		'title'	=> __('About Us Section','psychology-therapist'),
		'description' => __('For more options of about us section </br> <a class="go-pro-btn" target="blank" href="https://www.vwthemes.com/themes/therapist-wordpress-theme/">GO PRO</a>','psychology-therapist'),
		'panel' => 'psychology_therapist_panel_id',
	));

	$args = array('numberposts' => -1);
	$post_list = get_posts($args);
	$posts[]='Select';	
	foreach($post_list as $post){
		$posts[$post->post_title] = $post->post_title;
	}
	
	$wp_customize->add_setting('psychology_therapist_about_setting',array(
		'sanitize_callback' => 'sanitize_text_field',
	));

	$wp_customize->add_control('psychology_therapist_about_setting',array(
		'type'    => 'select',
		'choices' => $posts,
		'label' => __('Select post','psychology-therapist'),
		'section' => 'psychology_therapist_about_us_section',
	));

	$wp_customize->add_setting('psychology_therapist_section_small_title',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));	
	$wp_customize->add_control('psychology_therapist_section_small_title',array(
		'label'	=> esc_html__('Section Small Title','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'Company Slogan Goes Here', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_about_us_section',
		'type'=> 'text'
	));

	for ( $i=1; $i <= 4 ; $i++ ) {
	    
	     $wp_customize->add_setting('psychology_therapist_about_list_icon' .$i,array(
			'default'	=> 'fas fa-check',
			'sanitize_callback'	=> 'sanitize_text_field'
		));	
		$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
	        $wp_customize,'psychology_therapist_about_list_icon' .$i, array(
			'label'	=> __('Add About List Icon','psychology-therapist'),
			'transport' => 'refresh',
			'section'	=> 'psychology_therapist_about_us_section',
			'type'		=> 'icon'
		)));

	    $wp_customize->add_setting( 'psychology_therapist_about_page_list' . $i, array(
	      'default'           => '',
	      'sanitize_callback' => 'sanitize_text_field'
	    ));
	    $wp_customize->add_control( 'psychology_therapist_about_page_list' . $i, array(
	      'label'    => __( 'Add About List Text', 'psychology-therapist' ),
	      'section'  => 'psychology_therapist_about_us_section',
	      'type'     => 'text'
	    ));
	}

	//our services Section
	$wp_customize->add_section('psychology_therapist_our_services_section', array(
		'title'       => __('Our Services Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_our_services_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_our_services_text',array(
		'description' => __('<p>1. More options for our services section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for our services section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_our_services_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_our_services_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_our_services_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_our_services_section',
		'type'=> 'hidden'
	));

	//progress Section
	$wp_customize->add_section('psychology_therapist_progress_section', array(
		'title'       => __('Progress Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_progress_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_progress_text',array(
		'description' => __('<p>1. More options for progress section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for progress section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_progress_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_progress_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_progress_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_progress_section',
		'type'=> 'hidden'
	));

	//collection Section
	$wp_customize->add_section('psychology_therapist_collection_section', array(
		'title'       => __('Collection Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_collection_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_collection_text',array(
		'description' => __('<p>1. More options for collection section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for collection section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_collection_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_collection_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_collection_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_collection_section',
		'type'=> 'hidden'
	));

	//why choose us Section
	$wp_customize->add_section('psychology_therapist_why_choose_us_section', array(
		'title'       => __('Why Choose Us Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_why_choose_us_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_why_choose_us_text',array(
		'description' => __('<p>1. More options for why choose us section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for why choose us section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_why_choose_us_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_why_choose_us_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_why_choose_us_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_why_choose_us_section',
		'type'=> 'hidden'
	));

	//our clients Section
	$wp_customize->add_section('psychology_therapist_our_clients_section', array(
		'title'       => __('Our Clients Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_our_clients_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_our_clients_text',array(
		'description' => __('<p>1. More options for our clients section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for our clients section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_our_clients_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_our_clients_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_our_clients_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_our_clients_section',
		'type'=> 'hidden'
	));

	//our network Section
	$wp_customize->add_section('psychology_therapist_our_network_section', array(
		'title'       => __('Our Network Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_our_network_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_our_network_text',array(
		'description' => __('<p>1. More options for our network section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for our network section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_our_network_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_our_network_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_our_network_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_our_network_section',
		'type'=> 'hidden'
	));

	//home contact Section
	$wp_customize->add_section('psychology_therapist_home_contact_section', array(
		'title'       => __('Home Contact Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_home_contact_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_home_contact_text',array(
		'description' => __('<p>1. More options for home contact section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for home contact section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_home_contact_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_home_contact_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_home_contact_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_home_contact_section',
		'type'=> 'hidden'
	));

	//recents articles Section
	$wp_customize->add_section('psychology_therapist_recents_articles_section', array(
		'title'       => __('Recents Articles Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_recents_articles_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_recents_articles_text',array(
		'description' => __('<p>1. More options for recents articles section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for recents articles section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_recents_articles_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_recents_articles_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_recents_articles_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_recents_articles_section',
		'type'=> 'hidden'
	));

	//newsletter Section
	$wp_customize->add_section('psychology_therapist_newsletter_section', array(
		'title'       => __('Newsletter Section', 'psychology-therapist'),
		'description' => __('<p class="premium-opt">Premium Theme Features</p>','psychology-therapist'),
		'priority'    => null,
		'panel'       => 'psychology_therapist_panel_id',
	));

	$wp_customize->add_setting('psychology_therapist_newsletter_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_newsletter_text',array(
		'description' => __('<p>1. More options for newsletter section.</p>
			<p>2. Unlimited images options.</p>
			<p>3. Color options for newsletter section.</p>','psychology-therapist'),
		'section'=> 'psychology_therapist_newsletter_section',
		'type'=> 'hidden'
	));

	$wp_customize->add_setting('psychology_therapist_newsletter_btn',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_newsletter_btn',array(
		'description' => "<a class='go-pro' target='_blank' href='". admin_url('themes.php?page=psychology_therapist_guide') ." '>More Info</a>",
		'section'=> 'psychology_therapist_newsletter_section',
		'type'=> 'hidden'
	));

	//Footer Text
	$wp_customize->add_section('psychology_therapist_footer',array(
		'title'	=> esc_html__('Footer Settings','psychology-therapist'),
		'description' => __('For more options of footer section </br> <a class="go-pro-btn" target="blank" href="https://www.vwthemes.com/themes/therapist-wordpress-theme/">GO PRO</a>','psychology-therapist'),
		'panel' => 'psychology_therapist_panel_id',
	));	

  $wp_customize->add_setting( 'psychology_therapist_footer_hide_show',array(
      'default' => 1,
      'transport' => 'refresh',
      'sanitize_callback' => 'psychology_therapist_switch_sanitization'
  ));
  $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_footer_hide_show',array(
    'label' => esc_html__( 'Show / Hide Footer','psychology-therapist' ),
    'section' => 'psychology_therapist_footer'
  )));

  $wp_customize->add_setting('psychology_therapist_footer_background_color', array(
    'default'           => '#121212',
    'sanitize_callback' => 'sanitize_hex_color',
  ));
  $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'psychology_therapist_footer_background_color', array(
    'label'    => __('Footer Background Color', 'psychology-therapist'),
    'section'  => 'psychology_therapist_footer',
  )));

  $wp_customize->add_setting('psychology_therapist_footer_background_image',array(
    'default' => '',
    'sanitize_callback' => 'esc_url_raw',
  ));
  $wp_customize->add_control( new WP_Customize_Image_Control($wp_customize,'psychology_therapist_footer_background_image',array(
        'label' => __('Footer Background Image','psychology-therapist'),
        'section' => 'psychology_therapist_footer'
  )));

	$wp_customize->add_setting('psychology_therapist_footer_img_position',array(
	  'default' => 'center center',
	  'transport' => 'refresh',
	  'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_footer_img_position',array(
		'type' => 'select',
		'label' => __('Footer Image Position','psychology-therapist'),
		'section' => 'psychology_therapist_footer',
		'choices' 	=> array(
			'left top' 		=> esc_html__( 'Top Left', 'psychology-therapist' ),
			'center top'   => esc_html__( 'Top', 'psychology-therapist' ),
			'right top'   => esc_html__( 'Top Right', 'psychology-therapist' ),
			'left center'   => esc_html__( 'Left', 'psychology-therapist' ),
			'center center'   => esc_html__( 'Center', 'psychology-therapist' ),
			'right center'   => esc_html__( 'Right', 'psychology-therapist' ),
			'left bottom'   => esc_html__( 'Bottom Left', 'psychology-therapist' ),
			'center bottom'   => esc_html__( 'Bottom', 'psychology-therapist' ),
			'right bottom'   => esc_html__( 'Bottom Right', 'psychology-therapist' ),
		),
	));

  // Footer
  $wp_customize->add_setting('psychology_therapist_img_footer',array(
    'default'=> 'scroll',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
  ));
  $wp_customize->add_control('psychology_therapist_img_footer',array(
    'type' => 'select',
    'label' => __('Footer Background Attatchment','psychology-therapist'),
    'choices' => array(
      'fixed' => __('fixed','psychology-therapist'),
      'scroll' => __('scroll','psychology-therapist'),
    ),
    'section'=> 'psychology_therapist_footer',
  ));

  // footer padding
  $wp_customize->add_setting('psychology_therapist_footer_padding',array(
    'default'=> '',
    'sanitize_callback' => 'sanitize_text_field'
  ));
  $wp_customize->add_control('psychology_therapist_footer_padding',array(
    'label' => __('Footer Top Bottom Padding','psychology-therapist'),
    'description' => __('Enter a value in pixels. Example:20px','psychology-therapist'),
    'input_attrs' => array(
      'placeholder' => __( '10px', 'psychology-therapist' ),
    ),
    'section'=> 'psychology_therapist_footer',
    'type'=> 'text'
  ));

  $wp_customize->add_setting('psychology_therapist_footer_widgets_heading',array(
    'default' => 'Left',
    'transport' => 'refresh',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
  ));
  $wp_customize->add_control('psychology_therapist_footer_widgets_heading',array(
    'type' => 'select',
    'label' => __('Footer Widget Heading','psychology-therapist'),
    'section' => 'psychology_therapist_footer',
    'choices' => array(
      'Left' => __('Left','psychology-therapist'),
      'Center' => __('Center','psychology-therapist'),
      'Right' => __('Right','psychology-therapist')
    ),
  ) );

  $wp_customize->add_setting('psychology_therapist_footer_widgets_content',array(
    'default' => 'Left',
    'transport' => 'refresh',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
  ));
  $wp_customize->add_control('psychology_therapist_footer_widgets_content',array(
    'type' => 'select',
    'label' => __('Footer Widget Content','psychology-therapist'),
    'section' => 'psychology_therapist_footer',
    'choices' => array(
      'Left' => __('Left','psychology-therapist'),
      'Center' => __('Center','psychology-therapist'),
      'Right' => __('Right','psychology-therapist')
    ),
  ) );

  // footer social icon
  $wp_customize->add_setting( 'psychology_therapist_footer_icon',array(
  'default' => false,
  'transport' => 'refresh',
  'sanitize_callback' => 'psychology_therapist_switch_sanitization'
  ) );
  $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_footer_icon',array(
  'label' => esc_html__( 'Footer Social Icon','psychology-therapist' ),
  'section' => 'psychology_therapist_footer'
  )));

	//Selective Refresh
	$wp_customize->selective_refresh->add_partial('psychology_therapist_footer_text', array( 
		'selector' => '.copyright p', 
		'render_callback' => 'psychology_therapist_Customize_partial_psychology_therapist_footer_text', 
	));

  $wp_customize->add_setting( 'psychology_therapist_copyright_hide_show',array(
    'default' => 1,
    'transport' => 'refresh',
    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
  ));
  $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_copyright_hide_show',array(
    'label' => esc_html__( 'Show / Hide Copyright','psychology-therapist' ),
    'section' => 'psychology_therapist_footer'
  )));
	
	$wp_customize->add_setting('psychology_therapist_footer_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));	
	$wp_customize->add_control('psychology_therapist_footer_text',array(
		'label'	=> esc_html__('Copyright Text','psychology-therapist'),
		'input_attrs' => array(
    'placeholder' => esc_html__( 'Copyright 2023, .....', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_footer',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_copyright_alingment',array(
    'default' => 'center',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control(new Psychology_Therapist_Image_Radio_Control($wp_customize, 'psychology_therapist_copyright_alingment', array(
    'type' => 'select',
    'label' => esc_html__('Copyright Alignment','psychology-therapist'),
    'section' => 'psychology_therapist_footer',
    'settings' => 'psychology_therapist_copyright_alingment',
    'choices' => array(
        'left' => esc_url(get_template_directory_uri()).'/assets/images/copyright1.png',
        'center' => esc_url(get_template_directory_uri()).'/assets/images/copyright2.png',
        'right' => esc_url(get_template_directory_uri()).'/assets/images/copyright3.png'
  ))));

  $wp_customize->add_setting( 'psychology_therapist_hide_show_scroll',array(
  	'default' => 1,
    	'transport' => 'refresh',
    	'sanitize_callback' => 'psychology_therapist_switch_sanitization'
  ));  
  $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_hide_show_scroll',array(
    	'label' => esc_html__( 'Show / Hide Scroll to Top','psychology-therapist' ),
    	'section' => 'psychology_therapist_footer'
  )));

	$wp_customize->add_setting('psychology_therapist_footer_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));	
	$wp_customize->add_control('psychology_therapist_footer_text',array(
		'label'	=> esc_html__('Copyright Text','psychology-therapist'),
		'input_attrs' => array(
    'placeholder' => esc_html__( 'Copyright 2021, .....', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_footer',
		'type'=> 'text'
	));

  $wp_customize->add_setting('psychology_therapist_copyright_background_color', array(
    'default'           => '#f05c5a',
    'sanitize_callback' => 'sanitize_hex_color',
  ));
  $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'psychology_therapist_copyright_background_color', array(
    'label'    => __('Copyright Background Color', 'psychology-therapist'),
    'section'  => 'psychology_therapist_footer',
  )));

 $wp_customize->add_setting('psychology_therapist_copyright_text_color', array(
    'default'           => '#fff',
    'sanitize_callback' => 'sanitize_hex_color',
  ));
  $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'psychology_therapist_copyright_text_color', array(
    'label'    => __('Copyright Text Color', 'psychology-therapist'),
    'section'  => 'psychology_therapist_footer',
  )));

  $wp_customize->add_setting('psychology_therapist_copyright_font_size',array(
    'default'=> '',
    'sanitize_callback' => 'sanitize_text_field'
  ));
  $wp_customize->add_control('psychology_therapist_copyright_font_size',array(
    'label' => __('Copyright Font Size','psychology-therapist'),
    'description' => __('Enter a value in pixels. Example:20px','psychology-therapist'),
    'input_attrs' => array(
            'placeholder' => __( '10px', 'psychology-therapist' ),
        ),
    'section'=> 'psychology_therapist_footer',
    'type'=> 'text'
  ));

	$wp_customize->add_setting('psychology_therapist_copyright_alingment',array(
    'default' => 'center',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control(new psychology_therapist_Image_Radio_Control($wp_customize, 'psychology_therapist_copyright_alingment', array(
    'type' => 'select',
    'label' => esc_html__('Copyright Alignment','psychology-therapist'),
    'section' => 'psychology_therapist_footer',
    'settings' => 'psychology_therapist_copyright_alingment',
    'choices' => array(
        'left' => esc_url(get_template_directory_uri()).'/assets/images/copyright1.png',
        'center' => esc_url(get_template_directory_uri()).'/assets/images/copyright2.png',
        'right' => esc_url(get_template_directory_uri()).'/assets/images/copyright3.png'
    ))));

    $wp_customize->add_setting( 'psychology_therapist_hide_show_scroll',array(
    	'default' => 1,
      	'transport' => 'refresh',
      	'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ));  
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_hide_show_scroll',array(
      	'label' => esc_html__( 'Show / Hide Scroll to Top','psychology-therapist' ),
      	'section' => 'psychology_therapist_footer'
    )));

    //Selective Refresh
	$wp_customize->selective_refresh->add_partial('psychology_therapist_scroll_to_top_icon', array(
		'selector' => '.scrollup i',
		'render_callback' => 'psychology_therapist_Customize_partial_psychology_therapist_scroll_to_top_icon',
	));

  $wp_customize->add_setting('psychology_therapist_scroll_top_alignment',array(
      'default' => 'Right',
      'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control(new Psychology_Therapist_Image_Radio_Control($wp_customize, 'psychology_therapist_scroll_top_alignment', array(
    'type' => 'select',
    'label' => esc_html__('Scroll To Top','psychology-therapist'),
    'section' => 'psychology_therapist_footer',
    'settings' => 'psychology_therapist_scroll_top_alignment',
    'choices' => array(
        'Left' => esc_url(get_template_directory_uri()).'/assets/images/layout1.png',
        'Center' => esc_url(get_template_directory_uri()).'/assets/images/layout2.png',
        'Right' => esc_url(get_template_directory_uri()).'/assets/images/layout3.png'
    ))));

   	//Blog Post
	$wp_customize->add_panel( 'psychology_therapist_blog_post_parent_panel', array(
		'title' => esc_html__( 'Blog Post Settings', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_panel_id',
		'priority' => 20,
	));

	// Add example section and controls to the middle (second) panel
	$wp_customize->add_section( 'psychology_therapist_post_settings', array(
		'title' => esc_html__( 'Post Settings', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_blog_post_parent_panel',
	));

	//Selective Refresh
	$wp_customize->selective_refresh->add_partial('psychology_therapist_toggle_postdate', array( 
		'selector' => '.post-main-box h2 a', 
		'render_callback' => 'psychology_therapist_Customize_partial_psychology_therapist_toggle_postdate', 
	));

	//Blog layout
	  $wp_customize->add_setting('psychology_therapist_blog_layout_option',array(
	      'default' => 'Default',
	      'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	  ));
	  $wp_customize->add_control(new Psychology_Therapist_Image_Radio_Control($wp_customize, 'psychology_therapist_blog_layout_option', array(
	      'type' => 'select',
	      'label' => __('Blog Post Layouts','psychology-therapist'),
	      'section' => 'psychology_therapist_post_settings',
	      'choices' => array(
	          'Default' => esc_url(get_template_directory_uri()).'/assets/images/blog-layout1.png',
	          'Center' => esc_url(get_template_directory_uri()).'/assets/images/blog-layout2.png',
	          'Left' => esc_url(get_template_directory_uri()).'/assets/images/blog-layout3.png',
	  ))));

	$wp_customize->add_setting('psychology_therapist_theme_options',array(
        'default' => 'Right Sidebar',
        'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_theme_options',array(
        'type' => 'select',
        'label' => esc_html__('Post Sidebar Layout','psychology-therapist'),
        'description' => esc_html__('Here you can change the sidebar layout for posts. ','psychology-therapist'),
        'section' => 'psychology_therapist_post_settings',
        'choices' => array(
            'Left Sidebar' => esc_html__('Left Sidebar','psychology-therapist'),
            'Right Sidebar' => esc_html__('Right Sidebar','psychology-therapist'),
            'One Column' => esc_html__('One Column','psychology-therapist'),
            'Three Columns' => __('Three Columns','psychology-therapist'),
            'Four Columns' => __('Four Columns','psychology-therapist'),
            'Grid Layout' => esc_html__('Grid Layout','psychology-therapist')
        ),
	) );

		$wp_customize->add_setting('psychology_therapist_toggle_postdate_icon',array(
			'default'	=> 'fas fa-calendar-alt',
			'sanitize_callback'	=> 'sanitize_text_field'
		));
		$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
	        $wp_customize,'psychology_therapist_toggle_postdate_icon',array(
			'label'	=> __('Add Post Date Icon','psychology-therapist'),
			'transport' => 'refresh',
			'section'	=> 'psychology_therapist_post_settings',
			'setting'	=> 'psychology_therapist_toggle_postdate_icon',
			'type'		=> 'icon'
		)));

		$wp_customize->add_setting( 'psychology_therapist_blog_postdate',array(
        'default' => 1,
        'transport' => 'refresh',
        'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_blog_postdate',array(
        'label' => esc_html__( 'Post Date','psychology-therapist' ),
        'section' => 'psychology_therapist_post_settings'
    )));

		$wp_customize->add_setting('psychology_therapist_toggle_author_icon',array(
			'default'	=> 'fas fa-user',
			'sanitize_callback'	=> 'sanitize_text_field'
		));
		$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
	        $wp_customize,'psychology_therapist_toggle_author_icon',array(
			'label'	=> __('Add Author Icon','psychology-therapist'),
			'transport' => 'refresh',
			'section'	=> 'psychology_therapist_post_settings',
			'setting'	=> 'psychology_therapist_toggle_author_icon',
			'type'		=> 'icon'
		)));

    $wp_customize->add_setting( 'psychology_therapist_blog_author',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_blog_author',array(
		'label' => esc_html__( 'Author','psychology-therapist' ),
		'section' => 'psychology_therapist_post_settings'
    )));

    $wp_customize->add_setting('psychology_therapist_toggle_comments_icon',array(
		'default'	=> 'fa fa-comments',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_toggle_comments_icon',array(
		'label'	=> __('Add Comments Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_post_settings',
		'setting'	=> 'psychology_therapist_toggle_comments_icon',
		'type'		=> 'icon'
	)));

    $wp_customize->add_setting( 'psychology_therapist_blog_comments',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_blog_comments',array(
		'label' => esc_html__( 'Comments','psychology-therapist' ),
		'section' => 'psychology_therapist_post_settings'
    )));

    $wp_customize->add_setting('psychology_therapist_toggle_time_icon',array(
		'default'	=> 'fas fa-clock', 
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_toggle_time_icon',array(
		'label'	=> __('Add Time Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_post_settings',
		'setting'	=> 'psychology_therapist_toggle_time_icon',
		'type'		=> 'icon'
	)));

    $wp_customize->add_setting( 'psychology_therapist_blog_time',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_blog_time',array(
		'label' => esc_html__( 'Time','psychology-therapist' ),
		'section' => 'psychology_therapist_post_settings'
    )));

    $wp_customize->add_setting( 'psychology_therapist_featured_image_hide_show',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	));
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_featured_image_hide_show', array(
		'label' => esc_html__( 'Featured Image','psychology-therapist' ),
		'section' => 'psychology_therapist_post_settings'
    )));

    $wp_customize->add_setting( 'psychology_therapist_featured_image_border_radius', array(
		'default'              => '0',
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range'
	) );
	$wp_customize->add_control( 'psychology_therapist_featured_image_border_radius', array(
		'label'       => esc_html__( 'Featured Image Border Radius','psychology-therapist' ),
		'section'     => 'psychology_therapist_post_settings',
		'type'        => 'range',
		'input_attrs' => array(
			'step'             => 1,
			'min'              => 1,
			'max'              => 50,
		),
	) );

	$wp_customize->add_setting( 'psychology_therapist_featured_image_box_shadow', array(
		'default'              => '0',
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range'
	) );
	$wp_customize->add_control( 'psychology_therapist_featured_image_box_shadow', array(
		'label'       => esc_html__( 'Featured Image Box Shadow','psychology-therapist' ),
		'section'     => 'psychology_therapist_post_settings',
		'type'        => 'range',
		'input_attrs' => array(
			'step'             => 1,
			'min'              => 1,
			'max'              => 50,
		),
	) );

	//Featured Image
	$wp_customize->add_setting('psychology_therapist_blog_post_featured_image_dimension',array(
       'default' => 'default',
       'sanitize_callback'	=> 'psychology_therapist_sanitize_choices'
	));
  	$wp_customize->add_control('psychology_therapist_blog_post_featured_image_dimension',array(
		'type' => 'select',
		'label'	=> __('Blog Post Featured Image Dimension','psychology-therapist'),
		'section'	=> 'psychology_therapist_post_settings',
		'choices' => array(
		'default' => __('Default','psychology-therapist'),
		'custom' => __('Custom Image Size','psychology-therapist'),
      ),
  	));

	$wp_customize->add_setting('psychology_therapist_blog_post_featured_image_custom_width',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
		));
	$wp_customize->add_control('psychology_therapist_blog_post_featured_image_custom_width',array(
		'label'	=> __('Featured Image Custom Width','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
    	'placeholder' => __( '10px', 'psychology-therapist' ),),
		'section'=> 'psychology_therapist_post_settings',
		'type'=> 'text',
		'active_callback' => 'psychology_therapist_blog_post_featured_image_dimension'
		));

	$wp_customize->add_setting('psychology_therapist_blog_post_featured_image_custom_height',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_blog_post_featured_image_custom_height',array(
		'label'	=> __('Featured Image Custom Height','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
    	'placeholder' => __( '10px', 'psychology-therapist' ),),
		'section'=> 'psychology_therapist_post_settings',
		'type'=> 'text',
		'active_callback' => 'psychology_therapist_blog_post_featured_image_dimension'
	));

    $wp_customize->add_setting( 'psychology_therapist_toggle_tags',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	));
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_toggle_tags', array(
		'label' => esc_html__( 'Tags','psychology-therapist' ),
		'section' => 'psychology_therapist_post_settings'
    )));

    $wp_customize->add_setting( 'psychology_therapist_excerpt_number', array(
		'default'              => 30,
		'type'                 => 'theme_mod',
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range',
		'sanitize_js_callback' => 'absint',
	) );
	$wp_customize->add_control( 'psychology_therapist_excerpt_number', array(
		'label'       => esc_html__( 'Excerpt length','psychology-therapist' ),
		'section'     => 'psychology_therapist_post_settings',
		'type'        => 'range',
		'settings'    => 'psychology_therapist_excerpt_number',
		'input_attrs' => array(
			'step'             => 5,
			'min'              => 0,
			'max'              => 50,
		),
	) );

	$wp_customize->add_setting('psychology_therapist_meta_field_separator',array(
		'default'=> '|',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_meta_field_separator',array(
		'label'	=> __('Add Meta Separator','psychology-therapist'),
		'description' => __('Add the seperator for meta box. Example: "|", "/", etc.','psychology-therapist'),
		'section'=> 'psychology_therapist_post_settings',
		'type'=> 'text'
	));

    $wp_customize->add_setting('psychology_therapist_excerpt_settings',array(
        'default' => 'Excerpt',
        'transport' => 'refresh',
        'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_excerpt_settings',array(
        'type' => 'select',
        'label' => esc_html__('Post Content','psychology-therapist'),
        'section' => 'psychology_therapist_post_settings',
        'choices' => array(
        	'Content' => esc_html__('Content','psychology-therapist'),
            'Excerpt' => esc_html__('Excerpt','psychology-therapist'),
            'No Content' => esc_html__('No Content','psychology-therapist')
        ),
	) );

	$wp_customize->add_setting( 'psychology_therapist_blog_pagination_hide_show',array(
      'default' => 1,
      'transport' => 'refresh',
      'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ));
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_blog_pagination_hide_show',array(
      'label' => esc_html__( 'Show / Hide Blog Pagination','psychology-therapist' ),
      'section' => 'psychology_therapist_post_settings'
    )));

	$wp_customize->add_setting( 'psychology_therapist_blog_pagination_type', array(
        'default'			=> 'blog-page-numbers',
        'sanitize_callback'	=> 'psychology_therapist_sanitize_choices'
    ));
    $wp_customize->add_control( 'psychology_therapist_blog_pagination_type', array(
        'section' => 'psychology_therapist_post_settings',
        'type' => 'select',
        'label' => __( 'Blog Pagination', 'psychology-therapist' ),
        'choices'		=> array(
            'blog-page-numbers'  => __( 'Numeric', 'psychology-therapist' ),
            'next-prev' => __( 'Older Posts/Newer Posts', 'psychology-therapist' ),
    )));

  $wp_customize->add_setting('psychology_therapist_blog_page_posts_settings',array(
    'default' => 'Into Blocks',
    'transport' => 'refresh',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_blog_page_posts_settings',array(
    'type' => 'select',
    'label' => __('Display Blog Posts','psychology-therapist'),
    'section' => 'psychology_therapist_post_settings',
    'choices' => array(
    	'Into Blocks' => __('Into Blocks','psychology-therapist'),
      'Without Blocks' => __('Without Blocks','psychology-therapist')
      ),
	) ); 

    // Button Settings
	$wp_customize->add_section( 'psychology_therapist_button_settings', array(
		'title' => esc_html__( 'Button Settings', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_blog_post_parent_panel',
	));

	//Selective Refresh
	$wp_customize->selective_refresh->add_partial('psychology_therapist_button_text', array( 
		'selector' => '.post-main-box .more-btn a', 
		'render_callback' => 'psychology_therapist_Customize_partial_psychology_therapist_button_text', 
	));

    $wp_customize->add_setting('psychology_therapist_button_text',array(
		'default'=> esc_html__('KNOW MORE','psychology-therapist'),
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_button_text',array(
		'label'	=> esc_html__('Add Button Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'KNOW MORE', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_button_settings',
		'type'=> 'text'
	));

	// font size button
	$wp_customize->add_setting('psychology_therapist_button_font_size',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_button_font_size',array(
		'label'	=> __('Button Font Size','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
      	'placeholder' => __( '10px', 'psychology-therapist' ),
    ),
    	'type'        => 'text',
		'input_attrs' => array(
			'step'             => 1,
			'min'              => 1,
			'max'              => 50,
		),
		'section'=> 'psychology_therapist_button_settings',
	));


	$wp_customize->add_setting( 'psychology_therapist_button_border_radius', array(
		'default'              => 5,
		'type'                 => 'theme_mod',
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range',
		'sanitize_js_callback' => 'absint',
	) );
	$wp_customize->add_control( 'psychology_therapist_button_border_radius', array(
		'label'       => esc_html__( 'Button Border Radius','psychology-therapist' ),
		'section'     => 'psychology_therapist_button_settings',
		'type'        => 'range',
		'input_attrs' => array(
			'step'             => 1,
			'min'              => 1,
			'max'              => 50,
		),
	) );

	// button padding
	$wp_customize->add_setting('psychology_therapist_button_top_bottom_padding',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_button_top_bottom_padding',array(
		'label'	=> __('Button Top Bottom Padding','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
      'placeholder' => __( '10px', 'psychology-therapist' ),
    ),
		'section'=> 'psychology_therapist_button_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_button_left_right_padding',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_button_left_right_padding',array(
		'label'	=> __('Button Left Right Padding','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
      'placeholder' => __( '10px', 'psychology-therapist' ),
    ),
		'section'=> 'psychology_therapist_button_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_button_letter_spacing',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_button_letter_spacing',array(
		'label'	=> __('Button Letter Spacing','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
      	'placeholder' => __( '10px', 'psychology-therapist' ),
    ),
    	'type'        => 'text',
		'input_attrs' => array(
			'step'             => 1,
			'min'              => 1,
			'max'              => 50,
		),
		'section'=> 'psychology_therapist_button_settings',
	));

	// text trasform
	$wp_customize->add_setting('psychology_therapist_button_text_transform',array(
		'default'=> 'Uppercase',
		'sanitize_callback'	=> 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_button_text_transform',array(
		'type' => 'radio',
		'label'	=> __('Button Text Transform','psychology-therapist'),
		'choices' => array(
      'Uppercase' => __('Uppercase','psychology-therapist'),
      'Capitalize' => __('Capitalize','psychology-therapist'),
      'Lowercase' => __('Lowercase','psychology-therapist'),
    ),
		'section'=> 'psychology_therapist_button_settings',
	));

	// Related Post Settings
	$wp_customize->add_section( 'psychology_therapist_related_posts_settings', array(
		'title' => esc_html__( 'Related Posts Settings', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_blog_post_parent_panel',
	));

	//Selective Refresh
	$wp_customize->selective_refresh->add_partial('psychology_therapist_related_post_title', array( 
		'selector' => '.related-post h3', 
		'render_callback' => 'psychology_therapist_Customize_partial_psychology_therapist_related_post_title', 
	));

    $wp_customize->add_setting( 'psychology_therapist_related_post',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_related_post',array(
		'label' => esc_html__( 'Show / Hide Related Post','psychology-therapist' ),
		'section' => 'psychology_therapist_related_posts_settings'
    )));

    $wp_customize->add_setting('psychology_therapist_related_post_title',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_related_post_title',array(
		'label'	=> esc_html__('Add Related Post Title','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'Related Post', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_related_posts_settings',
		'type'=> 'text'
	));

   	$wp_customize->add_setting('psychology_therapist_related_posts_count',array(
		'default'=> 3,
		'sanitize_callback'	=> 'psychology_therapist_sanitize_number_absint'
	));
	$wp_customize->add_control('psychology_therapist_related_posts_count',array(
		'label'	=> esc_html__('Add Related Post Count','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( '3', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_related_posts_settings',
		'type'=> 'number'
	));

	$wp_customize->add_setting( 'psychology_therapist_related_posts_excerpt_number', array(
		'default'              => 20,
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range'
	) );
	$wp_customize->add_control( 'psychology_therapist_related_posts_excerpt_number', array(
		'label'       => esc_html__( 'Related Posts Excerpt length','psychology-therapist' ),
		'section'     => 'psychology_therapist_related_posts_settings',
		'type'        => 'range',
		'settings'    => 'psychology_therapist_related_posts_excerpt_number',
		'input_attrs' => array(
			'step'             => 5,
			'min'              => 0,
			'max'              => 50,
		),
	) );

	// Single Posts Settings
	$wp_customize->add_section( 'psychology_therapist_single_blog_settings', array(
		'title' => __( 'Single Post Settings', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_blog_post_parent_panel',
	));

  	$wp_customize->add_setting('psychology_therapist_single_postdate_icon',array(
		'default'	=> 'fas fa-calendar-alt',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_single_postdate_icon',array(
		'label'	=> __('Add Post Date Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_single_blog_settings',
		'setting'	=> 'psychology_therapist_single_postdate_icon',
		'type'		=> 'icon'
	)));

    $wp_customize->add_setting( 'psychology_therapist_toggle_postdate',array(
	    'default' => 1,
	    'transport' => 'refresh',
	    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	) );
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_toggle_postdate',array(
	    'label' => esc_html__( 'Show / Hide Date','psychology-therapist' ),
	   'section' => 'psychology_therapist_single_blog_settings'
	)));

	$wp_customize->add_setting('psychology_therapist_single_author_icon',array(
		'default'	=> 'fas fa-user',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_single_author_icon',array(
		'label'	=> __('Add Author Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_single_blog_settings',
		'setting'	=> 'psychology_therapist_single_author_icon',
		'type'		=> 'icon'
	)));

    $wp_customize->add_setting( 'psychology_therapist_toggle_author',array(
	    'default' => 1,
	    'transport' => 'refresh',
	    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	) );
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_toggle_author',array(
	    'label' => esc_html__( 'Show / Hide Author','psychology-therapist' ),
	    'section' => 'psychology_therapist_single_blog_settings'
	)));

   	$wp_customize->add_setting('psychology_therapist_single_comments_icon',array(
		'default'	=> 'fa fa-comments',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_single_comments_icon',array(
		'label'	=> __('Add Comments Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_single_blog_settings',
		'setting'	=> 'psychology_therapist_single_comments_icon',
		'type'		=> 'icon'
	)));

	$wp_customize->add_setting( 'psychology_therapist_toggle_comments',array(
	    'default' => 1,
	    'transport' => 'refresh',
	    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	) );
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_toggle_comments',array(
	    'label' => esc_html__( 'Show / Hide Comments','psychology-therapist' ),
	    'section' => 'psychology_therapist_single_blog_settings'
	)));

  	$wp_customize->add_setting('psychology_therapist_single_time_icon',array(
		'default'	=> 'fas fa-clock',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_single_time_icon',array(
		'label'	=> __('Add Time Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_single_blog_settings',
		'setting'	=> 'psychology_therapist_single_time_icon',
		'type'		=> 'icon'
	)));

	$wp_customize->add_setting( 'psychology_therapist_toggle_time',array(
	    'default' => 1,
	    'transport' => 'refresh',
	    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	) );
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_toggle_time',array(
	    'label' => esc_html__( 'Show / Hide Time','psychology-therapist' ),
	    'section' => 'psychology_therapist_single_blog_settings'
	)));

	$wp_customize->add_setting( 'psychology_therapist_toggle_tags',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	));
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_toggle_tags', array(
		'label' => esc_html__( 'Show / Hide Tags','psychology-therapist' ),
		'section' => 'psychology_therapist_single_blog_settings'
    )));

	$wp_customize->add_setting( 'psychology_therapist_single_post_breadcrumb',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
 	 $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_single_post_breadcrumb',array(
		'label' => esc_html__( 'Show / Hide Breadcrumb','psychology-therapist' ),
		'section' => 'psychology_therapist_single_blog_settings'
    )));

	// Single Posts Category
 	 $wp_customize->add_setting( 'psychology_therapist_single_post_category',array(
		'default' => true,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
  	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_single_post_category',array(
		'label' => esc_html__( 'Show / Hide Category','psychology-therapist' ),
		'section' => 'psychology_therapist_single_blog_settings'
    )));

	$wp_customize->add_setting('psychology_therapist_single_post_meta_field_separator',array(
		'default'=> '|',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_single_post_meta_field_separator',array(
		'label'	=> __('Add Meta Separator','psychology-therapist'),
		'description' => __('Add the seperator for meta box. Example: "|", "/", etc.','psychology-therapist'),
		'section'=> 'psychology_therapist_single_blog_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting( 'psychology_therapist_single_blog_post_navigation_show_hide',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	));
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_single_blog_post_navigation_show_hide', array(
		  'label' => esc_html__( 'Show / Hide Post Navigation','psychology-therapist' ),
		  'section' => 'psychology_therapist_single_blog_settings'
	)));
	
	//navigation text
	$wp_customize->add_setting('psychology_therapist_single_blog_prev_navigation_text',array(
		'default'=> 'PREVIOUS',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_single_blog_prev_navigation_text',array(
		'label'	=> __('Post Navigation Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'PREVIOUS', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_single_blog_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_single_blog_next_navigation_text',array(
		'default'=> 'NEXT',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_single_blog_next_navigation_text',array(
		'label'	=> __('Post Navigation Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'NEXT', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_single_blog_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_single_blog_comment_title',array(
		'default'=> 'Leave a Reply',
		'sanitize_callback'	=> 'sanitize_text_field'
	));

	$wp_customize->add_control('psychology_therapist_single_blog_comment_title',array(
		'label'	=> __('Add Comment Title','psychology-therapist'),
		'input_attrs' => array(
        'placeholder' => __( 'Leave a Reply', 'psychology-therapist' ),
    	),
		'section'=> 'psychology_therapist_single_blog_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_single_blog_comment_button_text',array(
		'default'=> 'Post Comment',
		'sanitize_callback'	=> 'sanitize_text_field'
	));

	$wp_customize->add_control('psychology_therapist_single_blog_comment_button_text',array(
		'label'	=> __('Add Comment Button Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'Post Comment', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_single_blog_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_single_blog_comment_width',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_single_blog_comment_width',array(
		'label'	=> __('Comment Form Width','psychology-therapist'),
		'description'	=> __('Enter a value in %. Example:50%','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '100%', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_single_blog_settings',
		'type'=> 'text'
	));

	 // Grid layout setting
	$wp_customize->add_section( 'psychology_therapist_grid_layout_settings', array(
		'title' => __( 'Grid Layout Settings', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_blog_post_parent_panel',
	));

	$wp_customize->add_setting('psychology_therapist_grid_postdate_icon',array(
		'default'	=> 'fas fa-calendar-alt',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_grid_postdate_icon',array(
		'label'	=> __('Add Post Date Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_grid_layout_settings',
		'setting'	=> 'psychology_therapist_grid_postdate_icon',
		'type'		=> 'icon'
	)));

	$wp_customize->add_setting( 'psychology_therapist_grid_postdate',array(
      'default' => 1,
      'transport' => 'refresh',
      'sanitize_callback' => 'psychology_therapist_switch_sanitization'
  ) );
  $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_grid_postdate',array(
      'label' => esc_html__( 'Show / Hide Post Date','psychology-therapist' ),
      'section' => 'psychology_therapist_grid_layout_settings'
  )));

	$wp_customize->add_setting('psychology_therapist_grid_author_icon',array(
		'default'	=> 'fas fa-user',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_grid_author_icon',array(
		'label'	=> __('Add Author Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_grid_layout_settings',
		'setting'	=> 'psychology_therapist_grid_author_icon',
		'type'		=> 'icon'
	)));

    $wp_customize->add_setting( 'psychology_therapist_grid_author',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_grid_author',array(
		'label' => esc_html__( 'Show / Hide Author','psychology-therapist' ),
		'section' => 'psychology_therapist_grid_layout_settings'
    )));

    $wp_customize->add_setting('psychology_therapist_grid_comments_icon',array(
		'default'	=> 'fa fa-comments',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control(new Psychology_Therapist_Fontawesome_Icon_Chooser(
        $wp_customize,'psychology_therapist_grid_comments_icon',array(
		'label'	=> __('Add Comments Icon','psychology-therapist'),
		'transport' => 'refresh',
		'section'	=> 'psychology_therapist_grid_layout_settings',
		'setting'	=> 'psychology_therapist_grid_comments_icon',
		'type'		=> 'icon'
	)));

    $wp_customize->add_setting( 'psychology_therapist_grid_comments',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_grid_comments',array(
		'label' => esc_html__( 'Show / Hide Comments','psychology-therapist' ),
		'section' => 'psychology_therapist_grid_layout_settings'
    )));

 	$wp_customize->add_setting('psychology_therapist_grid_post_meta_field_separator',array(
		'default'=> '|',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_grid_post_meta_field_separator',array(
		'label'	=> __('Add Meta Separator','psychology-therapist'),
		'description' => __('Add the seperator for meta box. Example: "|", "/", etc.','psychology-therapist'),
		'section'=> 'psychology_therapist_grid_layout_settings',
		'type'=> 'text'
	));

  $wp_customize->add_setting('psychology_therapist_grid_button_text',array(
		'default'=> esc_html__('KNOW MORE','psychology-therapist'),
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_grid_button_text',array(
		'label'	=> esc_html__('Add Button Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => esc_html__( 'KNOW MORE', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_grid_layout_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_grid_excerpt_suffix',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_grid_excerpt_suffix',array(
		'label'	=> __('Add Excerpt Suffix','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '[...]', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_grid_layout_settings',
		'type'=> 'text'
	));

  $wp_customize->add_setting('psychology_therapist_display_grid_posts_settings',array(
    'default' => 'Into Blocks',
    'transport' => 'refresh',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_display_grid_posts_settings',array(
    'type' => 'select',
    'label' => __('Display Grid Posts','psychology-therapist'),
    'section' => 'psychology_therapist_grid_layout_settings',
    'choices' => array(
    	'Into Blocks' => __('Into Blocks','psychology-therapist'),
        'Without Blocks' => __('Without Blocks','psychology-therapist')
    ),
	) );

    $wp_customize->add_setting('psychology_therapist_grid_excerpt_settings',array(
        'default' => 'Excerpt',
        'transport' => 'refresh',
        'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_grid_excerpt_settings',array(
        'type' => 'select',
        'label' => esc_html__('Grid Post Content','psychology-therapist'),
        'section' => 'psychology_therapist_grid_layout_settings',
        'choices' => array(
        	'Content' => esc_html__('Content','psychology-therapist'),
            'Excerpt' => esc_html__('Excerpt','psychology-therapist'),
            'No Content' => esc_html__('No Content','psychology-therapist')
        ),
	) );

    $wp_customize->add_setting( 'psychology_therapist_grid_featured_image_border_radius', array(
		'default'              => '0',
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range'
	) );
	$wp_customize->add_control( 'psychology_therapist_grid_featured_image_border_radius', array(
		'label'       => esc_html__( 'Grid Featured Image Border Radius','psychology-therapist' ),
		'section'     => 'psychology_therapist_grid_layout_settings',
		'type'        => 'range',
		'input_attrs' => array(
			'step'             => 1,
			'min'              => 1,
			'max'              => 50,
		),
	) );

	$wp_customize->add_setting( 'psychology_therapist_grid_featured_image_box_shadow', array(
		'default'              => '0',
		'transport' 		   => 'refresh',
		'sanitize_callback'    => 'psychology_therapist_sanitize_number_range'
	) );
	$wp_customize->add_control( 'psychology_therapist_grid_featured_image_box_shadow', array(
		'label'       => esc_html__( 'Grid Featured Image Box Shadow','psychology-therapist' ),
		'section'     => 'psychology_therapist_grid_layout_settings',
		'type'        => 'range',
		'input_attrs' => array(
			'step'             => 1,
			'min'              => 1,
			'max'              => 50,
		),
	) );

	//Other
	$wp_customize->add_panel( 'psychology_therapist_other_parent_panel', array(
		'title' => esc_html__( 'Other Settings', 'psychology-therapist' ),
		'panel' => 'psychology_therapist_panel_id',
		'priority' => 20,
	));

	// Layout
	$wp_customize->add_section( 'psychology_therapist_left_right', array(
    	'title' => esc_html__('General Settings', 'psychology-therapist'),
		'panel' => 'psychology_therapist_other_parent_panel'
	) );

	$wp_customize->add_setting('psychology_therapist_width_option',array(
    'default' => 'Full Width',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control(new Psychology_Therapist_Image_Radio_Control($wp_customize, 'psychology_therapist_width_option', array(
      'type' => 'select',
      'label' => esc_html__('Width Layouts','psychology-therapist'),
      'description' => esc_html__('Here you can change the width layout of Website.','psychology-therapist'),
      'section' => 'psychology_therapist_left_right',
      'choices' => array(
          'Full Width' => esc_url(get_template_directory_uri()).'/assets/images/full-width.png',
          'Wide Width' => esc_url(get_template_directory_uri()).'/assets/images/wide-width.png',
          'Boxed' => esc_url(get_template_directory_uri()).'/assets/images/boxed-width.png',
    ))));

	$wp_customize->add_setting('psychology_therapist_page_layout',array(
    'default' => 'One_Column',
    'sanitize_callback' => 'psychology_therapist_sanitize_choices'
	));
	$wp_customize->add_control('psychology_therapist_page_layout',array(
    'type' => 'select',
    'label' => esc_html__('Page Sidebar Layout','psychology-therapist'),
    'description' => esc_html__('Here you can change the sidebar layout for pages. ','psychology-therapist'),
    'section' => 'psychology_therapist_left_right',
    'choices' => array(
        'Left_Sidebar' => esc_html__('Left Sidebar','psychology-therapist'),
        'Right_Sidebar' => esc_html__('Right Sidebar','psychology-therapist'),
        'One_Column' => esc_html__('One Column','psychology-therapist')
    ),
	) );

	 //Wow Animation
	$wp_customize->add_setting( 'psychology_therapist_animation',array(
    'default' => 1,
    'transport' => 'refresh',
    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	));
  $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_animation',array(
    'label' => esc_html__( 'Show / Hide Animation ','psychology-therapist' ),
    'description' => __('Here you can disable overall site animation effect','psychology-therapist'),
    'section' => 'psychology_therapist_left_right'
  )));

	$wp_customize->add_setting( 'psychology_therapist_single_page_breadcrumb',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_single_page_breadcrumb',array(
		'label' => esc_html__( 'Show / Hide Page Breadcrumb','psychology-therapist' ),
		'section' => 'psychology_therapist_left_right'
	)));

  // Pre-Loader
	$wp_customize->add_setting( 'psychology_therapist_loader_enable',array(
    'default' => 0,
    'transport' => 'refresh',
    'sanitize_callback' => 'psychology_therapist_switch_sanitization'
	) );
	$wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_loader_enable',array(
	  'label' => esc_html__( 'Show / Hide Pre-Loader','psychology-therapist' ),
	  'section' => 'psychology_therapist_left_right'
	)));

	$wp_customize->add_setting('psychology_therapist_preloader_bg_color', array(
		'default'           => '#f05c5a',
		'sanitize_callback' => 'sanitize_hex_color',
	));
	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'psychology_therapist_preloader_bg_color', array(
		'label'    => __('Pre-Loader Background Color', 'psychology-therapist'),
		'section'  => 'psychology_therapist_left_right',
	)));

	$wp_customize->add_setting('psychology_therapist_preloader_border_color', array(
		'default'           => '#ffffff',
		'sanitize_callback' => 'sanitize_hex_color',
	));
	$wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'psychology_therapist_preloader_border_color', array(
		'label'    => __('Pre-Loader Border Color', 'psychology-therapist'),
		'section'  => 'psychology_therapist_left_right',
	)));

	$wp_customize->add_setting('psychology_therapist_preloader_bg_img',array(
		'default'	=> '',
		'sanitize_callback'	=> 'esc_url_raw',
	));
	$wp_customize->add_control( new WP_Customize_Image_Control($wp_customize,'psychology_therapist_preloader_bg_img',array(
        'label' => __('Preloader Background Image','psychology-therapist'),
        'section' => 'psychology_therapist_left_right'
	)));

  //404 Page Setting
	$wp_customize->add_section('psychology_therapist_404_page',array(
		'title'	=> __('404 Page Settings','psychology-therapist'),
		'panel' => 'psychology_therapist_other_parent_panel',
	));

	$wp_customize->add_setting('psychology_therapist_404_page_title',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));

	$wp_customize->add_control('psychology_therapist_404_page_title',array(
		'label'	=> __('Add Title','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '404 Not Found', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_404_page',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_404_page_content',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));

	$wp_customize->add_control('psychology_therapist_404_page_content',array(
		'label'	=> __('Add Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'Looks like you have taken a wrong turn, Dont worry, it happens to the best of us.', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_404_page',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_404_page_button_text',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_404_page_button_text',array(
		'label'	=> __('Add Button Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'GO BACK', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_404_page',
		'type'=> 'text'
	));

	//No Result Page Setting
	$wp_customize->add_section('psychology_therapist_no_results_page',array(
		'title'	=> __('No Results Page Settings','psychology-therapist'),
		'panel' => 'psychology_therapist_other_parent_panel',
	));

	$wp_customize->add_setting('psychology_therapist_no_results_page_title',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));

	$wp_customize->add_control('psychology_therapist_no_results_page_title',array(
		'label'	=> __('Add Title','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'Nothing Found', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_no_results_page',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_no_results_page_content',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));

	$wp_customize->add_control('psychology_therapist_no_results_page_content',array(
		'label'	=> __('Add Text','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_no_results_page',
		'type'=> 'text'
	));

	//Social Icon Setting
	$wp_customize->add_section('psychology_therapist_social_icon_settings',array(
		'title'	=> __('Social Icons Settings','psychology-therapist'),
		'panel' => 'psychology_therapist_other_parent_panel',
	));

	$wp_customize->add_setting('psychology_therapist_social_icon_font_size',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_social_icon_font_size',array(
		'label'	=> __('Icon Font Size','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '10px', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_social_icon_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_social_icon_padding',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_social_icon_padding',array(
		'label'	=> __('Icon Padding','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '10px', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_social_icon_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_social_icon_width',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_social_icon_width',array(
		'label'	=> __('Icon Width','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '10px', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_social_icon_settings',
		'type'=> 'text'
	));

	$wp_customize->add_setting('psychology_therapist_social_icon_height',array(
		'default'=> '',
		'sanitize_callback'	=> 'sanitize_text_field'
	));
	$wp_customize->add_control('psychology_therapist_social_icon_height',array(
		'label'	=> __('Icon Height','psychology-therapist'),
		'description'	=> __('Enter a value in pixels. Example:20px','psychology-therapist'),
		'input_attrs' => array(
            'placeholder' => __( '10px', 'psychology-therapist' ),
        ),
		'section'=> 'psychology_therapist_social_icon_settings',
		'type'=> 'text'
	));

	//Responsive Media Settings
	$wp_customize->add_section('psychology_therapist_responsive_media',array(
		'title'	=> esc_html__('Responsive Media','psychology-therapist'),
		'panel' => 'psychology_therapist_other_parent_panel',
	));

    $wp_customize->add_setting( 'psychology_therapist_resp_slider_hide_show',array(
      	'default' => 0,
     	'transport' => 'refresh',
      	'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ));  
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_resp_slider_hide_show',array(
      	'label' => esc_html__( 'Show / Hide Slider','psychology-therapist' ),
      	'section' => 'psychology_therapist_responsive_media'
    )));

    $wp_customize->add_setting( 'psychology_therapist_sidebar_hide_show',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ));  
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_sidebar_hide_show',array(
      	'label' => esc_html__( 'Show / Hide Sidebar','psychology-therapist' ),
      	'section' => 'psychology_therapist_responsive_media'
    )));

    $wp_customize->add_setting( 'psychology_therapist_resp_scroll_top_hide_show',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ));  
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_resp_scroll_top_hide_show',array(
      	'label' => esc_html__( 'Show / Hide Scroll To Top','psychology-therapist' ),
      	'section' => 'psychology_therapist_responsive_media'
    )));

   	//Woocommerce settings
	$wp_customize->add_section('psychology_therapist_woocommerce_section', array(
		'title'    => __('WooCommerce Layout', 'psychology-therapist'),
		'priority' => null,
		'panel'    => 'woocommerce',
	));

	// Selective Refresh
	$wp_customize->selective_refresh->add_partial( 'psychology_therapist_woocommerce_shop_page_sidebar', array( 'selector' => '.post-type-archive-product #sidebar', 
		'render_callback' => 'psychology_therapist_customize_partial_psychology_therapist_woocommerce_shop_page_sidebar', ) );

    // Woocommerce Shop Page Sidebar
	$wp_customize->add_setting( 'psychology_therapist_woocommerce_shop_page_sidebar',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_woocommerce_shop_page_sidebar',array(
		'label' => esc_html__( 'Show / Hide Shop Page Sidebar','psychology-therapist' ),
		'section' => 'psychology_therapist_woocommerce_section'
    )));

    // Selective Refresh
	$wp_customize->selective_refresh->add_partial( 'psychology_therapist_woocommerce_single_product_page_sidebar', array( 'selector' => '.single-product #sidebar', 
		'render_callback' => 'psychology_therapist_customize_partial_psychology_therapist_woocommerce_single_product_page_sidebar', ) );

    //Woocommerce Single Product page Sidebar
	$wp_customize->add_setting( 'psychology_therapist_woocommerce_single_product_page_sidebar',array(
		'default' => 1,
		'transport' => 'refresh',
		'sanitize_callback' => 'psychology_therapist_switch_sanitization'
    ) );
    $wp_customize->add_control( new Psychology_Therapist_Toggle_Switch_Custom_Control( $wp_customize, 'psychology_therapist_woocommerce_single_product_page_sidebar',array(
		'label' => esc_html__( 'Show / Hide Product Sidebar','psychology-therapist' ),
		'section' => 'psychology_therapist_woocommerce_section'
    )));

}

add_action( 'customize_register', 'psychology_therapist_customize_register' );

/**
 * Singleton class for handling the theme's customizer integration.
 *
 * @since  1.0.0
 * @access public
 */
final class Psychology_Therapist_Customize {

	/**
	 * Returns the instance.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return object
	 */
	public static function get_instance() {

		static $instance = null;

		if ( is_null( $instance ) ) {
			$instance = new self;
			$instance->setup_actions();
		}

		return $instance;
	}

	/**
	 * Constructor method.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function __construct() {}

	/**
	 * Sets up initial actions.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function setup_actions() {

		// Register panels, sections, settings, controls, and partials.
		add_action( 'customize_register', array( $this, 'sections' ) );

		// Register scripts and styles for the controls.
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_control_scripts' ), 0 );
	}

	/**
	 * Sets up the customizer sections.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object  $manager
	 * @return void
	*/
	public function sections( $manager ) {

		// Load custom sections.
		load_template( trailingslashit( get_template_directory() ) . '/inc/section-pro.php' );

		// Register custom section types.
		$manager->register_section_type( 'Psychology_Therapist_Customize_Section_Pro' );

		// Register sections.
		$manager->add_section( new Psychology_Therapist_Customize_Section_Pro( $manager,'psychology_therapist_go_pro', array(
			'priority'   => 1,
			'title'    => esc_html__( 'PSYCHOLOGY PRO', 'psychology-therapist' ),
			'pro_text' => esc_html__( 'UPGRADE PRO', 'psychology-therapist' ),
			'pro_url'  => esc_url('https://www.vwthemes.com/themes/therapist-wordpress-theme/'),
		) )	);

		// Register sections.
		$manager->add_section(new Psychology_Therapist_Customize_Section_Pro($manager,'psychology_therapist_get_started_link',array(
			'priority'   => 1,
			'title'    => esc_html__( 'DOCUMENTATION', 'psychology-therapist' ),
			'pro_text' => esc_html__( 'DOCS', 'psychology-therapist' ),
			'pro_url'  => esc_url('https://preview.vwthemesdemo.com/docs/free-psychology-therapist/'),
		)));
	}

	/**
	 * Loads theme customizer CSS.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue_control_scripts() {

		wp_enqueue_script( 'psychology-therapist-customize-controls', trailingslashit( get_template_directory_uri() ) . '/assets/js/customize-controls.js', array( 'customize-controls' ) );

		wp_enqueue_style( 'psychology-therapist-customize-controls', trailingslashit( get_template_directory_uri() ) . '/assets/css/customize-controls.css' );
	}
}

// Doing this customizer thang!
Psychology_Therapist_Customize::get_instance();