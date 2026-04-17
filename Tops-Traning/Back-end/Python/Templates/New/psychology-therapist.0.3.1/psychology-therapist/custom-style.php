<?php

	$psychology_therapist_custom_css= "";

	/*-------------------- First Highlight Color -------------------*/

	$psychology_therapist_first_color = get_theme_mod('psychology_therapist_first_color');

	if($psychology_therapist_first_color != false){
		$psychology_therapist_custom_css .='.principle-box:hover .principle-box-inner-img, .more-btn a, #comments input[type="submit"],#comments a.comment-reply-link,input[type="submit"],.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button,.woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt,.pro-button a, .woocommerce a.added_to_cart.wc-forward, #footer input[type="submit"], #footer-2, #footer .wp-block-search .wp-block-search__button, #sidebar .wp-block-search .wp-block-search__button, .scrollup i:hover, #sidebar .custom-social-icons a,#footer .custom-social-icons a, #sidebar h3,  #sidebar .widget_block h3, #sidebar h2, .pagination span, .pagination a, .woocommerce span.onsale, nav.woocommerce-MyAccount-navigation ul li, .scrollup i, .middle-header, .pagination a:hover, .pagination .current, #sidebar .tagcloud a:hover, .page-template-custom-home-page .middle-header, #main-product button.tablinks.active, .main-product-section .pro-button, .main-product-section:hover .the_timer, nav.woocommerce-MyAccount-navigation ul li:hover, #preloader, .event-btn-1 a, .event-btn-2 a:hover,#slider .slider-btn2 a, #about-section .about-btn a, #sidebar label.wp-block-search__label, .bradcrumbs a, .post-categories li a, .bradcrumbs a, .post-categories li a, .bradcrumbs span, .wp-block-tag-cloud a, .wp-block-button__link{';
			$psychology_therapist_custom_css .='background: '.esc_attr($psychology_therapist_first_color).';';
		$psychology_therapist_custom_css .='}';
	}

	if($psychology_therapist_first_color != false){
		$psychology_therapist_custom_css .='a, .main-header span.donate a:hover, .main-header span.volunteer a:hover, .main-header span.donate i:hover, .main-header span.volunteer i:hover, .box-content h3, .box-content h3 a, .woocommerce-message::before,.woocommerce-info::before,.post-main-box:hover h2 a, .post-main-box:hover .post-info span a, .single-post .post-info:hover a, .middle-bar h6, .main-navigation ul li.current_page_item, .main-navigation li a:hover,.countdowntimer .count,p.site-title a:hover, .logo h1 a:hover {';
			$psychology_therapist_custom_css .='color: '.esc_attr($psychology_therapist_first_color).';';
		$psychology_therapist_custom_css .='}';
	}

	if($psychology_therapist_first_color != false){
		$psychology_therapist_custom_css .='.woocommerce-message,.woocommerce-info{';
			$psychology_therapist_custom_css .='border-top-color: '.esc_attr($psychology_therapist_first_color).';';
		$psychology_therapist_custom_css .='}';
	}

	if($psychology_therapist_first_color != false){
		$psychology_therapist_custom_css .='.small-img, .small-img img, .admin-bar .home-page-header{';
			$psychology_therapist_custom_css .='border-bottom-color: '.esc_attr($psychology_therapist_first_color).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_custom_css .='}';

	/*-------------------- second Highlight Color -------------------*/

	$psychology_therapist_second_color = get_theme_mod('psychology_therapist_second_color');

	if($psychology_therapist_second_color != false){
		$psychology_therapist_custom_css .='.more-btn a:hover, input[type="submit"]:hover, #comments a.comment-reply-link:hover, .pagination a:hover, #footer .tagcloud a:hover, .pro-button a:hover, #slider .slider-btn1 a, #slider .slider-btn2 a, #about-us-section .learn-btn a, #about-section .about-btn a, #slider .slider-btn1 a, #about-section .about-btn a:hover, .bradcrumbs a:hover, .post-categories li a:hover, .bradcrumbs a:hover, .post-categories li a:hover{';
			$psychology_therapist_custom_css .='background: '.esc_attr($psychology_therapist_second_color).'!important;';
		$psychology_therapist_custom_css .='}';
	}

	if($psychology_therapist_second_color != false){
		$psychology_therapist_custom_css .='.main-navigation ul li.current_page_item a, .main-navigation li a:hover{';
			$psychology_therapist_custom_css .='color: '.esc_attr($psychology_therapist_second_color).';';
		$psychology_therapist_custom_css .='}';
	}

	if($psychology_therapist_second_color != false){
		$psychology_therapist_custom_css .='.main-navigation ul li.current_page_item a{';
			$psychology_therapist_custom_css .='border-top-color: '.esc_attr($psychology_therapist_second_color).';';
		$psychology_therapist_custom_css .='}';
	}

	if($psychology_therapist_second_color != false){
		$psychology_therapist_custom_css .='.small-img, .small-img img, .admin-bar .home-page-header{';
			$psychology_therapist_custom_css .='border-bottom-color: '.esc_attr($psychology_therapist_second_color).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_custom_css .='}';

	/*---------------------------Width Layout -------------------*/

	$psychology_therapist_theme_lay = get_theme_mod( 'psychology_therapist_width_option','Full Width');
    if($psychology_therapist_theme_lay == 'Boxed'){
		$psychology_therapist_custom_css .='body{';
			$psychology_therapist_custom_css .='max-width: 1140px; width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.scrollup i{';
			$psychology_therapist_custom_css .='right: 100px;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.row.outer-logo{';
			$psychology_therapist_custom_css .='margin-left: 0px;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_theme_lay == 'Wide Width'){
		$psychology_therapist_custom_css .='body{';
			$psychology_therapist_custom_css .='width: 100%;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.scrollup i{';
			$psychology_therapist_custom_css .='right: 30px;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.row.outer-logo{';
			$psychology_therapist_custom_css .='margin-left: 0px;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_theme_lay == 'Full Width'){
		$psychology_therapist_custom_css .='body{';
			$psychology_therapist_custom_css .='max-width: 100%;';
		$psychology_therapist_custom_css .='}';
	}


	// css
	$psychology_therapist_show_header = get_theme_mod( 'psychology_therapist_topbar_hide_show', false);
	if($psychology_therapist_show_header == false){
		$psychology_therapist_custom_css .='.topinner, #topbar .email-box, #topbar .call-box, .topbtn{';
			$psychology_therapist_custom_css .='border:none;';
		$psychology_therapist_custom_css .='}';
	}

	/*---------------------------Slider Height ------------*/

	$psychology_therapist_slider_height = get_theme_mod('psychology_therapist_slider_height');
	if($psychology_therapist_slider_height != false){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='height: '.esc_attr($psychology_therapist_slider_height).';';
		$psychology_therapist_custom_css .='}';
	}

	/*----------------- Slider Content Layout -------------------*/

	$psychology_therapist_theme_lay = get_theme_mod( 'psychology_therapist_slider_content_option','Left');
    if($psychology_therapist_theme_lay == 'Left'){
		$psychology_therapist_custom_css .='#slider .carousel-caption{';
			$psychology_therapist_custom_css .='text-align:left; left: 15%;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_theme_lay == 'Center'){
		$psychology_therapist_custom_css .='#slider .carousel-caption{';
			$psychology_therapist_custom_css .='text-align:center; right: 25%; left: 25%;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_theme_lay == 'Right'){
		$psychology_therapist_custom_css .='#slider .carousel-caption{';
			$psychology_therapist_custom_css .='text-align:center; right: 10%; left: 50%;';
		$psychology_therapist_custom_css .='}';
	}

	/*------------- Slider Content Padding Settings ------------------*/

	$psychology_therapist_slider_content_padding_top_bottom = get_theme_mod('psychology_therapist_slider_content_padding_top_bottom');
	$psychology_therapist_slider_content_padding_left_right = get_theme_mod('psychology_therapist_slider_content_padding_left_right');
	if($psychology_therapist_slider_content_padding_top_bottom != false || $psychology_therapist_slider_content_padding_left_right != false){
		$psychology_therapist_custom_css .='#slider .carousel-caption{';
			$psychology_therapist_custom_css .='top: '.esc_attr($psychology_therapist_slider_content_padding_top_bottom).'; bottom: '.esc_attr($psychology_therapist_slider_content_padding_top_bottom).';left: '.esc_attr($psychology_therapist_slider_content_padding_left_right).';right: '.esc_attr($psychology_therapist_slider_content_padding_left_right).';';
		$psychology_therapist_custom_css .='}';
	}

	/*--------------------------- Slider Opacity -------------------*/

	$psychology_therapist_theme_lay = get_theme_mod( 'psychology_therapist_slider_opacity_color','0.8');
	if($psychology_therapist_theme_lay == '0'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.1'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.1';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.2'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.2';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.3'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.3';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.4'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.4';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.5'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.5';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.6'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.6';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.7'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.7';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.8'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.8';
		$psychology_therapist_custom_css .='}';
		}else if($psychology_therapist_theme_lay == '0.9'){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:0.9';
		$psychology_therapist_custom_css .='}';
		}

	/*---------------------- Slider Image Overlay ------------------------*/

	$psychology_therapist_slider_image_overlay = get_theme_mod('psychology_therapist_slider_image_overlay', true);
	if($psychology_therapist_slider_image_overlay == false){
		$psychology_therapist_custom_css .='#slider img{';
			$psychology_therapist_custom_css .='opacity:1;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_slider_image_overlay_color = get_theme_mod('psychology_therapist_slider_image_overlay_color', true);
	if($psychology_therapist_slider_image_overlay_color != false){
		$psychology_therapist_custom_css .='#slider{';
			$psychology_therapist_custom_css .='background-color: '.esc_attr($psychology_therapist_slider_image_overlay_color).';';
		$psychology_therapist_custom_css .='}';
	}
	
	/*----------------Responsive Media -----------------------*/

	$psychology_therapist_resp_slider = get_theme_mod( 'psychology_therapist_resp_slider_hide_show',false);
	if($psychology_therapist_resp_slider == true && get_theme_mod( 'psychology_therapist_slider_hide_show', false) == false){
    	$psychology_therapist_custom_css .='#slider{';
			$psychology_therapist_custom_css .='display:none;';
		$psychology_therapist_custom_css .='} ';
	}
    if($psychology_therapist_resp_slider == true){
    	$psychology_therapist_custom_css .='@media screen and (max-width:575px) {';
		$psychology_therapist_custom_css .='#slider{';
			$psychology_therapist_custom_css .='display:block;';
		$psychology_therapist_custom_css .='} }';
	}else if($psychology_therapist_resp_slider == false){
		$psychology_therapist_custom_css .='@media screen and (max-width:575px) {';
		$psychology_therapist_custom_css .='#slider{';
			$psychology_therapist_custom_css .='display:none;';
		$psychology_therapist_custom_css .='} }';
		$psychology_therapist_custom_css .='@media screen and (max-width:575px){';
		$psychology_therapist_custom_css .='.page-template-custom-home-page.admin-bar .homepageheader{';
			$psychology_therapist_custom_css .='margin-top: 45px;';
		$psychology_therapist_custom_css .='} }';
	}

	$psychology_therapist_resp_sidebar = get_theme_mod( 'psychology_therapist_sidebar_hide_show',true);
    if($psychology_therapist_resp_sidebar == true){
    	$psychology_therapist_custom_css .='@media screen and (max-width:575px) {';
		$psychology_therapist_custom_css .='#sidebar{';
			$psychology_therapist_custom_css .='display:block;';
		$psychology_therapist_custom_css .='} }';
	}else if($psychology_therapist_resp_sidebar == false){
		$psychology_therapist_custom_css .='@media screen and (max-width:575px) {';
		$psychology_therapist_custom_css .='#sidebar{';
			$psychology_therapist_custom_css .='display:none;';
		$psychology_therapist_custom_css .='} }';
	}

	$psychology_therapist_resp_scroll_top = get_theme_mod( 'psychology_therapist_resp_scroll_top_hide_show',true);
	if($psychology_therapist_resp_scroll_top == true && get_theme_mod( 'psychology_therapist_hide_show_scroll',true) == false){
    	$psychology_therapist_custom_css .='.scrollup i{';
			$psychology_therapist_custom_css .='visibility:hidden !important;';
		$psychology_therapist_custom_css .='} ';
	}
    if($psychology_therapist_resp_scroll_top == true){
    	$psychology_therapist_custom_css .='@media screen and (max-width:575px) {';
		$psychology_therapist_custom_css .='.scrollup i{';
			$psychology_therapist_custom_css .='visibility:visible !important;';
		$psychology_therapist_custom_css .='} }';
	}else if($psychology_therapist_resp_scroll_top == false){
		$psychology_therapist_custom_css .='@media screen and (max-width:575px){';
		$psychology_therapist_custom_css .='.scrollup i{';
			$psychology_therapist_custom_css .='visibility:hidden !important;';
		$psychology_therapist_custom_css .='} }';
	}

	/*------------------ Logo  -------------------*/

	$psychology_therapist_site_title_font_size = get_theme_mod('psychology_therapist_site_title_font_size');
	if($psychology_therapist_site_title_font_size != false){
		$psychology_therapist_custom_css .='.logo h1, .logo p.site-title{';
			$psychology_therapist_custom_css .='font-size: '.esc_attr($psychology_therapist_site_title_font_size).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_site_tagline_font_size = get_theme_mod('psychology_therapist_site_tagline_font_size');
	if($psychology_therapist_site_tagline_font_size != false){
		$psychology_therapist_custom_css .='.logo p.site-description{';
			$psychology_therapist_custom_css .='font-size: '.esc_attr($psychology_therapist_site_tagline_font_size).';';
		$psychology_therapist_custom_css .='}';
	}

	/*------------- Preloader Background Color  -------------------*/

	$psychology_therapist_preloader_bg_color = get_theme_mod('psychology_therapist_preloader_bg_color');
	if($psychology_therapist_preloader_bg_color != false){
		$psychology_therapist_custom_css .='#preloader{';
			$psychology_therapist_custom_css .='background-color: '.esc_attr($psychology_therapist_preloader_bg_color).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_preloader_border_color = get_theme_mod('psychology_therapist_preloader_border_color');
	if($psychology_therapist_preloader_border_color != false){
		$psychology_therapist_custom_css .='.loader-line{';
			$psychology_therapist_custom_css .='border-color: '.esc_attr($psychology_therapist_preloader_border_color).'!important;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_preloader_bg_img = get_theme_mod('psychology_therapist_preloader_bg_img');
	if($psychology_therapist_preloader_bg_img != false){
		$psychology_therapist_custom_css .='#preloader{';
			$psychology_therapist_custom_css .='background: url('.esc_attr($psychology_therapist_preloader_bg_img).');-webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;';
		$psychology_therapist_custom_css .='}';
	}
	
	/*----------------Social Icons Settings ------------------*/

	$psychology_therapist_social_icon_font_size = get_theme_mod('psychology_therapist_social_icon_font_size');
	if($psychology_therapist_social_icon_font_size != false){
		$psychology_therapist_custom_css .='#sidebar .custom-social-icons i, #footer-2 .custom-social-icons i{';
			$psychology_therapist_custom_css .='font-size: '.esc_attr($psychology_therapist_social_icon_font_size).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_social_icon_padding = get_theme_mod('psychology_therapist_social_icon_padding');
	if($psychology_therapist_social_icon_padding != false){
		$psychology_therapist_custom_css .='#sidebar .custom-social-icons i, #footer-2 .custom-social-icons i{';
			$psychology_therapist_custom_css .='padding: '.esc_attr($psychology_therapist_social_icon_padding).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_social_icon_width = get_theme_mod('psychology_therapist_social_icon_width');
	if($psychology_therapist_social_icon_width != false){
		$psychology_therapist_custom_css .='#sidebar .custom-social-icons i, #footer-2 .custom-social-icons i{';
			$psychology_therapist_custom_css .='width: '.esc_attr($psychology_therapist_social_icon_width).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_social_icon_height = get_theme_mod('psychology_therapist_social_icon_height');
	if($psychology_therapist_social_icon_height != false){
		$psychology_therapist_custom_css .='#sidebar .custom-social-icons i, #footer-2 .custom-social-icons i{';
			$psychology_therapist_custom_css .='height: '.esc_attr($psychology_therapist_social_icon_height).';';
		$psychology_therapist_custom_css .='}';
	}

/*-------------- Copyright Alignment ----------------*/

	$psychology_therapist_copyright_alingment = get_theme_mod('psychology_therapist_copyright_alingment');
	if($psychology_therapist_copyright_alingment != false){
		$psychology_therapist_custom_css .='.copyright p{';
			$psychology_therapist_custom_css .='text-align: '.esc_attr($psychology_therapist_copyright_alingment).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_copyright_background_color = get_theme_mod('psychology_therapist_copyright_background_color');
	if($psychology_therapist_copyright_background_color != false){
		$psychology_therapist_custom_css .='#footer-2{';
			$psychology_therapist_custom_css .='background-color: '.esc_attr($psychology_therapist_copyright_background_color).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_copyright_background_color = get_theme_mod('psychology_therapist_copyright_background_color');
	if($psychology_therapist_copyright_background_color != false){
		$psychology_therapist_custom_css .='#footer-2{';
			$psychology_therapist_custom_css .='background-color: '.esc_attr($psychology_therapist_copyright_background_color).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_copyright_text_color = get_theme_mod('psychology_therapist_copyright_text_color');
	if($psychology_therapist_copyright_text_color != false){
		$psychology_therapist_custom_css .='.copyright p, .copyright a{';
			$psychology_therapist_custom_css .='color: '.esc_attr($psychology_therapist_copyright_text_color).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_footer_widgets_heading = get_theme_mod( 'psychology_therapist_footer_widgets_heading','Left');
    if($psychology_therapist_footer_widgets_heading == 'Left'){
		$psychology_therapist_custom_css .='#footer h3, #footer .wp-block-search .wp-block-search__label{';
		$psychology_therapist_custom_css .='text-align: left;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_footer_widgets_heading == 'Center'){
		$psychology_therapist_custom_css .='#footer h3, #footer .wp-block-search .wp-block-search__label{';
			$psychology_therapist_custom_css .='text-align: center;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_footer_widgets_heading == 'Right'){
		$psychology_therapist_custom_css .='#footer h3, #footer .wp-block-search .wp-block-search__label{';
			$psychology_therapist_custom_css .='text-align: right;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_footer_widgets_content = get_theme_mod( 'psychology_therapist_footer_widgets_content','Left');
    if($psychology_therapist_footer_widgets_content == 'Left'){
		$psychology_therapist_custom_css .='#footer .widget{';
		$psychology_therapist_custom_css .='text-align: left;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_footer_widgets_content == 'Center'){
		$psychology_therapist_custom_css .='#footer .widget{';
			$psychology_therapist_custom_css .='text-align: center;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_footer_widgets_content == 'Right'){
		$psychology_therapist_custom_css .='#footer .widget{';
			$psychology_therapist_custom_css .='text-align: right;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_copyright_font_size = get_theme_mod('psychology_therapist_copyright_font_size');
	if($psychology_therapist_copyright_font_size != false){
		$psychology_therapist_custom_css .='#footer-2 a, #footer-2 p{';
			$psychology_therapist_custom_css .='font-size: '.esc_attr($psychology_therapist_copyright_font_size).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_copyright_alingment = get_theme_mod('psychology_therapist_copyright_alingment');
	if($psychology_therapist_copyright_alingment != false){
		$psychology_therapist_custom_css .='#footer-2 p{';
			$psychology_therapist_custom_css .='text-align: '.esc_attr($psychology_therapist_copyright_alingment).';';
		$psychology_therapist_custom_css .='}';
	}
	$psychology_therapist_copyright_padding_top_bottom = get_theme_mod('psychology_therapist_copyright_padding_top_bottom');
	if($psychology_therapist_copyright_padding_top_bottom != false){
		$psychology_therapist_custom_css .='#footer-2{';
			$psychology_therapist_custom_css .='padding-top: '.esc_attr($psychology_therapist_copyright_padding_top_bottom).'; padding-bottom: '.esc_attr($psychology_therapist_copyright_padding_top_bottom).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_footer_padding = get_theme_mod('psychology_therapist_footer_padding');
	if($psychology_therapist_footer_padding != false){
		$psychology_therapist_custom_css .='#footer{';
			$psychology_therapist_custom_css .='padding: '.esc_attr($psychology_therapist_footer_padding).' 0;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_footer_icon = get_theme_mod('psychology_therapist_footer_icon');
	if($psychology_therapist_footer_icon == false){
		$psychology_therapist_custom_css .='#footer-2 p{';
			$psychology_therapist_custom_css .='width:100%; text-align:center; float:none;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_footer_background_image = get_theme_mod('psychology_therapist_footer_background_image');
	if($psychology_therapist_footer_background_image != false){
		$psychology_therapist_custom_css .='#footer{';
			$psychology_therapist_custom_css .='background: url('.esc_attr($psychology_therapist_footer_background_image).');';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_theme_lay = get_theme_mod( 'psychology_therapist_img_footer','scroll');
	if($psychology_therapist_theme_lay == 'fixed'){
		$psychology_therapist_custom_css .='#footer{';
			$psychology_therapist_custom_css .='background-attachment: fixed !important; background-position: center !important;';
		$psychology_therapist_custom_css .='}';
	}elseif ($psychology_therapist_theme_lay == 'scroll'){
		$psychology_therapist_custom_css .='#footer{';
			$psychology_therapist_custom_css .='background-attachment: scroll !important; background-position: center !important;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_footer_img_position = get_theme_mod('psychology_therapist_footer_img_position','center center');
	if($psychology_therapist_footer_img_position != false){
		$psychology_therapist_custom_css .='#footer{';
			$psychology_therapist_custom_css .='background-position: '.esc_attr($psychology_therapist_footer_img_position).'!important;';
		$psychology_therapist_custom_css .='}';
	}

	/*---------------------------Blog Layout -------------------*/

	$psychology_therapist_theme_lay = get_theme_mod( 'psychology_therapist_blog_layout_option','Default');
    if($psychology_therapist_theme_lay == 'Default'){
		$psychology_therapist_custom_css .='.post-main-box{';
			$psychology_therapist_custom_css .='';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_theme_lay == 'Center'){
		$psychology_therapist_custom_css .='.post-main-box, .post-main-box h2, .post-info, .new-text p, .content-bttn{';
			$psychology_therapist_custom_css .='text-align:center;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.post-info{';
			$psychology_therapist_custom_css .='margin-top:10px;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.post-info hr{';
			$psychology_therapist_custom_css .='margin:15px auto;';
		$psychology_therapist_custom_css .='}';
	}else if($psychology_therapist_theme_lay == 'Left'){
		$psychology_therapist_custom_css .='.post-main-box, .post-main-box h2, .post-info, .new-text p, .content-bttn, #our-services p{';
			$psychology_therapist_custom_css .='text-align:Left;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.post-info hr{';
			$psychology_therapist_custom_css .='margin-bottom:10px;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.post-main-box h2{';
			$psychology_therapist_custom_css .='margin-top:10px;';
		$psychology_therapist_custom_css .='}';
		$psychology_therapist_custom_css .='.service-text .more-btn{';
			$psychology_therapist_custom_css .='display:inline-block;';
		$psychology_therapist_custom_css .='}';
	}

	/*--------------------- Blog Page Posts -------------------*/

	$psychology_therapist_blog_page_posts_settings = get_theme_mod( 'psychology_therapist_blog_page_posts_settings','Into Blocks');
    if($psychology_therapist_blog_page_posts_settings == 'Without Blocks'){
		$psychology_therapist_custom_css .='.post-main-box{';
			$psychology_therapist_custom_css .='box-shadow: none; border: none; margin:30px 0;';
		$psychology_therapist_custom_css .='}';
	}

	/*--------------------- Grid Posts Posts -------------------*/

	$psychology_therapist_display_grid_posts_settings = get_theme_mod( 'psychology_therapist_display_grid_posts_settings','Into Blocks');
    if($psychology_therapist_display_grid_posts_settings == 'Without Blocks'){
		$psychology_therapist_custom_css .='.grid-post-main-box{';
			$psychology_therapist_custom_css .='box-shadow: none; border: none; margin:30px 0;';
		$psychology_therapist_custom_css .='}';
	}

	// featured image dimention
	$psychology_therapist_blog_post_featured_image_dimension = get_theme_mod('psychology_therapist_blog_post_featured_image_dimension', 'default');
	$psychology_therapist_blog_post_featured_image_custom_width = get_theme_mod('psychology_therapist_blog_post_featured_image_custom_width',250);
	$psychology_therapist_blog_post_featured_image_custom_height = get_theme_mod('psychology_therapist_blog_post_featured_image_custom_height',250);
	if($psychology_therapist_blog_post_featured_image_dimension == 'custom'){
		$psychology_therapist_custom_css .='.post-main-box img{';
			$psychology_therapist_custom_css .='width: '.esc_attr($psychology_therapist_blog_post_featured_image_custom_width).'; height: '.esc_attr($psychology_therapist_blog_post_featured_image_custom_height).';';
		$psychology_therapist_custom_css .='}';
	}

	/*---------------- Posts Settings ------------------*/

	$psychology_therapist_featured_image_border_radius = get_theme_mod('psychology_therapist_featured_image_border_radius', 0);
	if($psychology_therapist_featured_image_border_radius != false){
		$psychology_therapist_custom_css .='.box-image img, .feature-box img{';
			$psychology_therapist_custom_css .='border-radius: '.esc_attr($psychology_therapist_featured_image_border_radius).'px;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_featured_image_box_shadow = get_theme_mod('psychology_therapist_featured_image_box_shadow',0);
	if($psychology_therapist_featured_image_box_shadow != false){
		$psychology_therapist_custom_css .='.box-image img, .feature-box img, #content-vw img{';
			$psychology_therapist_custom_css .='box-shadow: '.esc_attr($psychology_therapist_featured_image_box_shadow).'px '.esc_attr($psychology_therapist_featured_image_box_shadow).'px '.esc_attr($psychology_therapist_featured_image_box_shadow).'px #cccccc;';
		$psychology_therapist_custom_css .='}';
	}

	/*---------------- Button Settings ------------------*/

	$psychology_therapist_button_letter_spacing = get_theme_mod('psychology_therapist_button_letter_spacing',14);
	$psychology_therapist_custom_css .='.post-main-box .more-btn{';
		$psychology_therapist_custom_css .='letter-spacing: '.esc_attr($psychology_therapist_button_letter_spacing).';';
	$psychology_therapist_custom_css .='}';

	$psychology_therapist_button_border_radius = get_theme_mod('psychology_therapist_button_border_radius');
	if($psychology_therapist_button_border_radius != false){
		$psychology_therapist_custom_css .='.post-main-box .more-btn a{';
			$psychology_therapist_custom_css .='border-radius: '.esc_attr($psychology_therapist_button_border_radius).'px !important;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_button_top_bottom_padding = get_theme_mod('psychology_therapist_button_top_bottom_padding');
	$psychology_therapist_button_left_right_padding = get_theme_mod('psychology_therapist_button_left_right_padding');
	if($psychology_therapist_button_top_bottom_padding != false || $psychology_therapist_button_left_right_padding != false){
		$psychology_therapist_custom_css .='.post-main-box .more-btn{';
			$psychology_therapist_custom_css .='padding-top: '.esc_attr($psychology_therapist_button_top_bottom_padding).'!important; padding-bottom: '.esc_attr($psychology_therapist_button_top_bottom_padding).'!important;padding-left: '.esc_attr($psychology_therapist_button_left_right_padding).'!important;padding-right: '.esc_attr($psychology_therapist_button_left_right_padding).'!important;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_button_font_size = get_theme_mod('psychology_therapist_button_font_size',14);
	$psychology_therapist_custom_css .='.post-main-box .more-btn a{';
		$psychology_therapist_custom_css .='font-size: '.esc_attr($psychology_therapist_button_font_size).';';
	$psychology_therapist_custom_css .='}';

	$psychology_therapist_theme_lay = get_theme_mod( 'psychology_therapist_button_text_transform','Uppercase');
	if($psychology_therapist_theme_lay == 'Capitalize'){
		$psychology_therapist_custom_css .='.post-main-box .more-btn a{';
			$psychology_therapist_custom_css .='text-transform:Capitalize;';
		$psychology_therapist_custom_css .='}';
	}
	if($psychology_therapist_theme_lay == 'Lowercase'){
		$psychology_therapist_custom_css .='.post-main-box .more-btn a{';
			$psychology_therapist_custom_css .='text-transform:Lowercase;';
		$psychology_therapist_custom_css .='}';
	}
	if($psychology_therapist_theme_lay == 'Uppercase'){
		$psychology_therapist_custom_css .='.post-main-box .more-btn a{';
			$psychology_therapist_custom_css .='text-transform:Uppercase;';
		$psychology_therapist_custom_css .='}';
	}

	/*---------------- Single Blog Page Settings ------------------*/

	$psychology_therapist_single_blog_comment_title = get_theme_mod('psychology_therapist_single_blog_comment_title', 'Leave a Reply');
	if($psychology_therapist_single_blog_comment_title == ''){
		$psychology_therapist_custom_css .='#comments h2#reply-title {';
			$psychology_therapist_custom_css .='display: none;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_single_blog_comment_button_text = get_theme_mod('psychology_therapist_single_blog_comment_button_text', 'Post Comment');
	if($psychology_therapist_single_blog_comment_button_text == ''){
		$psychology_therapist_custom_css .='#comments p.form-submit {';
			$psychology_therapist_custom_css .='display: none;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_comment_width = get_theme_mod('psychology_therapist_single_blog_comment_width');
	if($psychology_therapist_comment_width != false){
		$psychology_therapist_custom_css .='#comments textarea{';
			$psychology_therapist_custom_css .='width: '.esc_attr($psychology_therapist_comment_width).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_single_blog_post_navigation_show_hide = get_theme_mod('psychology_therapist_single_blog_post_navigation_show_hide',true);
	if($psychology_therapist_single_blog_post_navigation_show_hide != true){
		$psychology_therapist_custom_css .='.post-navigation{';
			$psychology_therapist_custom_css .='display: none;';
		$psychology_therapist_custom_css .='}';
	}
	
	// Header Background Color
	$psychology_therapist_header_background_color = get_theme_mod('psychology_therapist_header_background_color');
	if($psychology_therapist_header_background_color != false){
		$psychology_therapist_custom_css .='.home-page-header{';
			$psychology_therapist_custom_css .='background-color: '.esc_attr($psychology_therapist_header_background_color).';';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_header_img_position = get_theme_mod('psychology_therapist_header_img_position','center top');
	if($psychology_therapist_header_img_position != false){
		$psychology_therapist_custom_css .='.header-menu{';
			$psychology_therapist_custom_css .='background-position: '.esc_attr($psychology_therapist_header_img_position).'!important;';
		$psychology_therapist_custom_css .='}';
	}

	/*---------------- Grid Posts Settings ------------------*/

	$psychology_therapist_grid_featured_image_border_radius = get_theme_mod('psychology_therapist_grid_featured_image_border_radius', 0);
	if($psychology_therapist_grid_featured_image_border_radius != false){
		$psychology_therapist_custom_css .='.grid-post-main-box .box-image img, .grid-post-main-box .feature-box img{';
			$psychology_therapist_custom_css .='border-radius: '.esc_attr($psychology_therapist_grid_featured_image_border_radius).'px;';
		$psychology_therapist_custom_css .='}';
	}

	$psychology_therapist_grid_featured_image_box_shadow = get_theme_mod('psychology_therapist_grid_featured_image_box_shadow',0);
	if($psychology_therapist_grid_featured_image_box_shadow != false){
		$psychology_therapist_custom_css .='.grid-post-main-box .box-image img, .grid-post-main-box .feature-box img, #content-vw img{';
			$psychology_therapist_custom_css .='box-shadow: '.esc_attr($psychology_therapist_grid_featured_image_box_shadow).'px '.esc_attr($psychology_therapist_grid_featured_image_box_shadow).'px '.esc_attr($psychology_therapist_grid_featured_image_box_shadow).'px #cccccc;';
		$psychology_therapist_custom_css .='}';
	}