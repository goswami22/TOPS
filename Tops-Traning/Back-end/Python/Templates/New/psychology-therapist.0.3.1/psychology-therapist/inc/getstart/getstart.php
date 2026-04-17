<?php
//about theme info
add_action( 'admin_menu', 'psychology_therapist_gettingstarted' );
function psychology_therapist_gettingstarted() {
	add_theme_page( esc_html__('About Psychology Therapist', 'psychology-therapist'), esc_html__('About Psychology Therapist', 'psychology-therapist'), 'edit_theme_options', 'psychology_therapist_guide', 'psychology_therapist_mostrar_guide');
}

// Add a Custom CSS file to WP Admin Area
function psychology_therapist_admin_theme_style() {
	wp_enqueue_style('psychology-therapist-custom-admin-style', esc_url(get_template_directory_uri()) . '/inc/getstart/getstart.css');
	wp_enqueue_script('psychology-therapist-tabs', esc_url(get_template_directory_uri()) . '/inc/getstart/js/tab.js');
}
add_action('admin_enqueue_scripts', 'psychology_therapist_admin_theme_style');

//guidline for about theme
function psychology_therapist_mostrar_guide() { 
	//custom function about theme customizer
	$psychology_therapist_return = add_query_arg( array()) ;
	$psychology_therapist_theme = wp_get_theme( 'psychology-therapist' );
?>

<div class="wrapper-info">
    <div class="col-left">
    	<h2><?php esc_html_e( 'Welcome to Psychology Therapist', 'psychology-therapist' ); ?> <span class="version"><?php esc_html_e( 'Version', 'psychology-therapist' ); ?>: <?php echo esc_html($psychology_therapist_theme['Version']);?></span></h2>
    	<p><?php esc_html_e('All our WordPress themes are modern, minimalist, 100% responsive, seo-friendly,feature-rich, and multipurpose that best suit designers, bloggers and other professionals who are working in the creative fields.','psychology-therapist'); ?></p>
    </div>
	<div class="col-right">
    	<div class="logo">
			<img src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/getstart/images/final-logo.png" alt="" />
		</div>
		<div class="update-now">
			<h4><?php esc_html_e('Buy Psychology Therapist at 20% Discount','psychology-therapist'); ?></h4>
			<h4><?php esc_html_e('Use Coupon','psychology-therapist'); ?> ( <span><?php esc_html_e('vwpro20','psychology-therapist'); ?></span> ) </h4>
			<div class="info-link">
				<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_BUY_NOW ); ?>" target="_blank"> <?php esc_html_e( 'Upgrade to Pro', 'psychology-therapist' ); ?></a>
			</div>
		</div> 
	</div>

    <div class="tab-sec">
    	<div class="tab">
			<button class="tablinks" onclick="psychology_therapist_open_tab(event, 'lite_theme')"><?php esc_html_e( 'Setup With Customizer', 'psychology-therapist' ); ?></button>
			<button class="tablinks" onclick="psychology_therapist_open_tab(event, 'block_pattern')"><?php esc_html_e( 'Setup With Block Pattern', 'psychology-therapist' ); ?></button>
			<button class="tablinks" onclick="psychology_therapist_open_tab(event, 'gutenberg_editor')"><?php esc_html_e( 'Setup With Gutunberg Block', 'psychology-therapist' ); ?></button>
			<button class="tablinks" onclick="psychology_therapist_open_tab(event, 'product_addons_editor')"><?php esc_html_e( 'Woocommerce Product Addons', 'psychology-therapist' ); ?></button>
			<button class="tablinks" onclick="psychology_therapist_open_tab(event, 'theme_pro')"><?php esc_html_e( 'Get Premium', 'psychology-therapist' ); ?></button>
		  	<button class="tablinks" onclick="psychology_therapist_open_tab(event, 'free_pro')"><?php esc_html_e( 'Support', 'psychology-therapist' ); ?></button>
		</div>

		<?php
			$psychology_therapist_plugin_custom_css = '';
			if(class_exists('Ibtana_Visual_Editor_Menu_Class')){
				$psychology_therapist_plugin_custom_css ='display: block';
			}
		?>
		<div id="lite_theme" class="tabcontent open">
			<?php if(!class_exists('Ibtana_Visual_Editor_Menu_Class')){ 
				$plugin_ins = Psychology_Therapist_Plugin_Activation_Settings::get_instance();
				$psychology_therapist_actions = $plugin_ins->recommended_actions;
				?>
				<div class="psychology-therapist-recommended-plugins">
				    <div class="psychology-therapist-action-list">
				        <?php if ($psychology_therapist_actions): foreach ($psychology_therapist_actions as $key => $psychology_therapist_actionValue): ?>
				                <div class="psychology-therapist-action" id="<?php echo esc_attr($psychology_therapist_actionValue['id']);?>">
			                        <div class="action-inner">
			                            <h3 class="action-title"><?php echo esc_html($psychology_therapist_actionValue['title']); ?></h3>
			                            <div class="action-desc"><?php echo esc_html($psychology_therapist_actionValue['desc']); ?></div>
			                            <?php echo wp_kses_post($psychology_therapist_actionValue['link']); ?>
			                            <a class="ibtana-skip-btn" get-start-tab-id="lite-theme-tab" href="javascript:void(0);"><?php esc_html_e('Skip','psychology-therapist'); ?></a>
			                        </div>
				                </div>
				            <?php endforeach;
				        endif; ?>
				    </div>
				</div>
			<?php } ?>
			<div class="lite-theme-tab" style="<?php echo esc_attr($psychology_therapist_plugin_custom_css); ?>">
				<h3><?php esc_html_e( 'Lite Theme Information', 'psychology-therapist' ); ?></h3>
				<hr class="h3hr">
				<p><?php esc_html_e('Psychology Therapist WordPress Theme is a website template designed especially for psychology professionals, therapists, counselors, and related businesses. The theme can be used for creating an online presence website or a psychology-related blog. The theme comes with all the necessary features and tools to help you create a perfect website. It has a sleek and modern design with a clean layout and an intuitive user interface that makes it easy to navigate. The theme also offers a range of customization options that allow users to personalize their websites and create a unique online identity. The theme includes multiple pre-designed templates and layouts, making it easy to create a professional-looking website quickly. In terms of features, the theme is fully responsive and cross-browser-compatible. It is also translation ready which helps in translating the text from your website to multiple local and international languages. The theme is also optimized for SEO, ensuring that your website ranks well in search engine results and is easily discoverable by potential clients. This is essential for any psychology professional looking to attract new clients and grow their business. The Psychology Therapist WordPress Theme includes several built-in features that are specifically designed for psychology professionals, such as appointment booking functionality, which allows clients to schedule appointments directly through your website. The theme also includes a section for publishing blog posts, which can be used to share industry news, tips, and insights with your clients. The theme is easy to install and set up, even for those with little to no coding experience. The theme comes with detailed documentation and professional support, making it easy to get started and customize your website to your specific needs.','psychology-therapist'); ?></p>
			  	<div class="col-left-inner">
			  		<h4><?php esc_html_e( 'Theme Documentation', 'psychology-therapist' ); ?></h4>
					<p><?php esc_html_e( 'If you need any assistance regarding setting up and configuring the Theme, our documentation is there.', 'psychology-therapist' ); ?></p>
					<div class="info-link">
						<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_FREE_THEME_DOC ); ?>" target="_blank"> <?php esc_html_e( 'Documentation', 'psychology-therapist' ); ?></a>
					</div>
					<hr>
					<h4><?php esc_html_e('Theme Customizer', 'psychology-therapist'); ?></h4>
					<p> <?php esc_html_e('To begin customizing your website, start by clicking "Customize".', 'psychology-therapist'); ?></p>
					<div class="info-link">
						<a target="_blank" href="<?php echo esc_url( admin_url('customize.php') ); ?>"><?php esc_html_e('Customizing', 'psychology-therapist'); ?></a>
					</div>
					<hr>
					<h4><?php esc_html_e('Having Trouble, Need Support?', 'psychology-therapist'); ?></h4>
					<p> <?php esc_html_e('Our dedicated team is well prepared to help you out in case of queries and doubts regarding our theme.', 'psychology-therapist'); ?></p>
					<div class="info-link">
						<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_SUPPORT ); ?>" target="_blank"><?php esc_html_e('Support Forum', 'psychology-therapist'); ?></a>
					</div>
					<hr>
					<h4><?php esc_html_e('Reviews & Testimonials', 'psychology-therapist'); ?></h4>
					<p> <?php esc_html_e('All the features and aspects of this WordPress Theme are phenomenal. I\'d recommend this theme to all.', 'psychology-therapist'); ?></p>
					<div class="info-link">
						<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_REVIEW ); ?>" target="_blank"><?php esc_html_e('Reviews', 'psychology-therapist'); ?></a>
					</div>

					<div class="link-customizer">
						<h3><?php esc_html_e( 'Link to customizer', 'psychology-therapist' ); ?></h3>
						<hr class="h3hr">
						<div class="first-row">
							<div class="row-box">
								<div class="row-box1">
									<span class="dashicons dashicons-buddicons-buddypress-logo"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[control]=custom_logo') ); ?>" target="_blank"><?php esc_html_e('Upload your logo','psychology-therapist'); ?></a>
								</div>
								<div class="row-box2">
									<span class="dashicons dashicons-format-gallery"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_post_settings') ); ?>" target="_blank"><?php esc_html_e('Post settings','psychology-therapist'); ?></a>
								</div>
							</div>

							<div class="row-box">
								<div class="row-box1">
									<span class="dashicons dashicons-slides"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_slidersettings') ); ?>" target="_blank"><?php esc_html_e('Slider Settings','psychology-therapist'); ?></a>
								</div>
								<div class="row-box2">
									<span class="dashicons dashicons-category"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_about_us_section') ); ?>" target="_blank"><?php esc_html_e('About Section','psychology-therapist'); ?></a>
								</div>
							</div>
						
							<div class="row-box">
								<div class="row-box1">
									<span class="dashicons dashicons-menu"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=nav_menus') ); ?>" target="_blank"><?php esc_html_e('Menus','psychology-therapist'); ?></a>
								</div>
								<div class="row-box2">
									<span class="dashicons dashicons-screenoptions"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=widgets') ); ?>" target="_blank"><?php esc_html_e('Footer Widget','psychology-therapist'); ?></a>
								</div>
							</div>
							
							<div class="row-box">
								<div class="row-box1">
									<span class="dashicons dashicons-admin-generic"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_left_right') ); ?>" target="_blank"><?php esc_html_e('General Settings','psychology-therapist'); ?></a>
								</div>
								<div class="row-box2">
									<span class="dashicons dashicons-text-page"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_footer') ); ?>" target="_blank"><?php esc_html_e('Footer Text','psychology-therapist'); ?></a>
								</div>
							</div>
						</div>
					</div>
			  	</div>
				<div class="col-right-inner">
					<h3 class="page-template"><?php esc_html_e('How to set up Home Page Template','psychology-therapist'); ?></h3>
				  	<hr class="h3hr">
					<p><?php esc_html_e('Follow these instructions to setup Home page.','psychology-therapist'); ?></p>
                  	<p><span class="strong"><?php esc_html_e('1. Create a new page :','psychology-therapist'); ?></span><?php esc_html_e(' Go to ','psychology-therapist'); ?>
					  	<b><?php esc_html_e(' Dashboard >> Pages >> Add New Page','psychology-therapist'); ?></b></p>
                  	<p><?php esc_html_e('Name it as "Home" then select the template "Custom Home Page".','psychology-therapist'); ?></p>
                  	<img src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/getstart/images/home-page-template.png" alt="" />
                  	<p><span class="strong"><?php esc_html_e('2. Set the front page:','psychology-therapist'); ?></span><?php esc_html_e(' Go to ','psychology-therapist'); ?>
					  	<b><?php esc_html_e(' Settings >> Reading ','psychology-therapist'); ?></b></p>
				  	<p><?php esc_html_e('Select the option of Static Page, now select the page you created to be the homepage, while another page to be your default page.','psychology-therapist'); ?></p>
                  	<img src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/getstart/images/set-front-page.png" alt="" />
                  	<p><?php esc_html_e(' Once you are done with setup, then follow the','psychology-therapist'); ?> <a class="doc-links" href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_FREE_THEME_DOC ); ?>" target="_blank"><?php esc_html_e('Documentation','psychology-therapist'); ?></a></p>
			  	</div>
			</div>
		</div>

	<div id="block_pattern" class="tabcontent">
				<?php if(!class_exists('Ibtana_Visual_Editor_Menu_Class')){
				$plugin_ins = psychology_therapist_Plugin_Activation_Settings::get_instance();
				$psychology_therapist_actions = $plugin_ins->recommended_actions;
				?>
				<div class="psychology-therapist-recommended-plugins">
				    <div class="psychology-therapist-action-list">
				        <?php if ($psychology_therapist_actions): foreach ($psychology_therapist_actions as $key => $psychology_therapist_actionValue): ?>
				                <div class="psychology-therapist-action" id="<?php echo esc_attr($psychology_therapist_actionValue['id']);?>">
			                        <div class="action-inner">
			                            <h3 class="action-title"><?php echo esc_html($psychology_therapist_actionValue['title']); ?></h3>
			                            <div class="action-desc"><?php echo esc_html($psychology_therapist_actionValue['desc']); ?></div>
			                            <?php echo wp_kses_post($psychology_therapist_actionValue['link']); ?>
			                            <a class="ibtana-skip-btn" href="javascript:void(0);" get-start-tab-id="gutenberg-editor-tab"><?php esc_html_e('Skip','psychology-therapist'); ?></a>
			                        </div>
				                </div>
				            <?php endforeach;
				        endif; ?>
				    </div>
				</div>
				<?php } ?>
				<div class="gutenberg-editor-tab" style="<?php echo esc_attr($psychology_therapist_plugin_custom_css); ?>">
				<div class="block-pattern-img">
				  	<h3><?php esc_html_e( 'Block Patterns', 'psychology-therapist' ); ?></h3>
					<hr class="h3hr">
					<p><?php esc_html_e('Follow the below instructions to setup Home page with Block Patterns.','psychology-therapist'); ?></p>
	              	<p><b><?php esc_html_e('Click on Below Add new page button >> Click on "+" Icon ','psychology-therapist'); ?></span></b></p>
	              	<div class="psychology-therapist-pattern-page">
				    	<a href="javascript:void(0)" class="vw-pattern-page-btn button-primary button"><?php esc_html_e('Add New Page','psychology-therapist'); ?></a>
				    </div>
	              	<img src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/getstart/images/block-pattern1.png" alt="" />
	              	 <p><b><?php esc_html_e('Click on Patterns Tab >> Click on Theme Name >> Click on Section >> Publish.','psychology-therapist'); ?></span></b></p>
	              	<img src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/getstart/images/block-pattern.png" alt="" />
	            </div>

	            <div class="block-pattern-link-customizer">
					<h3><?php esc_html_e( 'Link to customizer', 'psychology-therapist' ); ?></h3>
					<hr class="h3hr">
					<div class="first-row">
						<div class="row-box">
							<div class="row-box1">
								<span class="dashicons dashicons-buddicons-buddypress-logo"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[control]=custom_logo') ); ?>" target="_blank"><?php esc_html_e('Upload your logo','psychology-therapist'); ?></a>
							</div>
							<div class="row-box2">
								<span class="dashicons dashicons-format-gallery"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_post_settings') ); ?>" target="_blank"><?php esc_html_e('Post settings','psychology-therapist'); ?></a>
							</div>
						</div>
						<div class="row-box">
							<div class="row-box1">
								<span class="dashicons dashicons-menu"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=nav_menus') ); ?>" target="_blank"><?php esc_html_e('Menus','psychology-therapist'); ?></a>
							</div>

							<div class="row-box2">
								<span class="dashicons dashicons-text-page"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_footer') ); ?>" target="_blank"><?php esc_html_e('Footer Text','psychology-therapist'); ?></a>
							</div>
						</div>

						<div class="row-box">
							<div class="row-box1">
								<span class="dashicons dashicons-admin-generic"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_left_right') ); ?>" target="_blank"><?php esc_html_e('General Settings','psychology-therapist'); ?></a>
							</div>
							 <div class="row-box2">
								<span class="dashicons dashicons-screenoptions"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=widgets') ); ?>" target="_blank"><?php esc_html_e('Footer Widget','psychology-therapist'); ?></a>
							</div>
						</div>
					</div>
				</div>
	     	</div>
			</div>
		
		<div id="gutenberg_editor" class="tabcontent">
			<?php if(!class_exists('Ibtana_Visual_Editor_Menu_Class')){ 
			$plugin_ins = Psychology_Therapist_Plugin_Activation_Settings::get_instance();
			$psychology_therapist_actions = $plugin_ins->recommended_actions;
			?>
				<div class="psychology-therapist-recommended-plugins">
				    <div class="psychology-therapist-action-list">
				        <?php if ($psychology_therapist_actions): foreach ($psychology_therapist_actions as $key => $psychology_therapist_actionValue): ?>
				                <div class="psychology-therapist-action" id="<?php echo esc_attr($psychology_therapist_actionValue['id']);?>">
			                        <div class="action-inner plugin-activation-redirect">
			                            <h3 class="action-title"><?php echo esc_html($psychology_therapist_actionValue['title']); ?></h3>
			                            <div class="action-desc"><?php echo esc_html($psychology_therapist_actionValue['desc']); ?></div>
			                            <?php echo wp_kses_post($psychology_therapist_actionValue['link']); ?>
			                        </div>
				                </div>
				            <?php endforeach;
				        endif; ?>
				    </div>
				</div>
			<?php }else{ ?>
				<h3><?php esc_html_e( 'Gutunberg Blocks', 'psychology-therapist' ); ?></h3>
				<hr class="h3hr">
				<div class="psychology-therapist-pattern-page">
			    	<a href="<?php echo esc_url( admin_url( 'admin.php?page=ibtana-visual-editor-templates' ) ); ?>" class="vw-pattern-page-btn ibtana-dashboard-page-btn button-primary button"><?php esc_html_e('Ibtana Settings','psychology-therapist'); ?></a>
			    </div>

			    <div class="link-customizer-with-guternberg-ibtana">
	              	<div class="link-customizer-with-block-pattern">
						<h3><?php esc_html_e( 'Link to customizer', 'psychology-therapist' ); ?></h3>
						<hr class="h3hr">
						<div class="first-row">
							<div class="row-box">
								<div class="row-box1">
									<span class="dashicons dashicons-buddicons-buddypress-logo"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[control]=custom_logo') ); ?>" target="_blank"><?php esc_html_e('Upload your logo','psychology-therapist'); ?></a>
								</div>
								<div class="row-box2">
									<span class="dashicons dashicons-format-gallery"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_post_settings') ); ?>" target="_blank"><?php esc_html_e('Post settings','psychology-therapist'); ?></a>
								</div>
							</div>
							<div class="row-box">
								<div class="row-box1">
									<span class="dashicons dashicons-menu"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=nav_menus') ); ?>" target="_blank"><?php esc_html_e('Menus','psychology-therapist'); ?></a>
								</div>
								
								<div class="row-box2">
									<span class="dashicons dashicons-text-page"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_footer') ); ?>" target="_blank"><?php esc_html_e('Footer Text','psychology-therapist'); ?></a>
								</div>
							</div>
							
							<div class="row-box">
								<div class="row-box1">
									<span class="dashicons dashicons-admin-generic"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[section]=psychology_therapist_left_right') ); ?>" target="_blank"><?php esc_html_e('General Settings','psychology-therapist'); ?></a>
								</div>
								 <div class="row-box2">
									<span class="dashicons dashicons-screenoptions"></span><a href="<?php echo esc_url( admin_url('customize.php?autofocus[panel]=widgets') ); ?>" target="_blank"><?php esc_html_e('Footer Widget','psychology-therapist'); ?></a>
								</div> 
							</div>
						</div>
					</div>	
				</div>
			<?php } ?>
		</div>

				<div id="product_addons_editor" class="tabcontent">
				<?php if(!class_exists('IEPA_Loader')){
					$plugin_ins = psychology_therapist_Plugin_Activation_Woo_Products::get_instance();
					$psychology_therapist_actions = $plugin_ins->recommended_actions;
					?>
					<div class="psychology-therapist-recommended-plugins">
						    <div class="psychology-therapist-action-list">
						        <?php if ($psychology_therapist_actions): foreach ($psychology_therapist_actions as $key => $psychology_therapist_actionValue): ?>
						                <div class="psychology-therapist-action" id="<?php echo esc_attr($psychology_therapist_actionValue['id']);?>">
					                        <div class="action-inner plugin-activation-redirect">
					                            <h3 class="action-title"><?php echo esc_html($psychology_therapist_actionValue['title']); ?></h3>
					                            <div class="action-desc"><?php echo esc_html($psychology_therapist_actionValue['desc']); ?></div>
					                            <?php echo wp_kses_post($psychology_therapist_actionValue['link']); ?>
					                        </div>
						                </div>
						            <?php endforeach;
						        endif; ?>
						    </div>
					</div>
				<?php }else{ ?>
					<h3><?php esc_html_e( 'Woocommerce Products Blocks', 'psychology-therapist' ); ?></h3>
					<hr class="h3hr">
					<div class="psychology-therapist-pattern-page">
						<p><?php esc_html_e('Follow the below instructions to setup Products Templates.','psychology-therapist'); ?></p>
						<p><b><?php esc_html_e('1. First you need to activate these plugins','psychology-therapist'); ?></b></p>
							<p><?php esc_html_e('1. Ibtana - WordPress Website Builder ','psychology-therapist'); ?></p>
							<p><?php esc_html_e('2. Ibtana - Ecommerce Product Addons.','psychology-therapist'); ?></p>
							<p><?php esc_html_e('3. Woocommerce','psychology-therapist'); ?></p>

						<p><b><?php esc_html_e('2. Go To Dashboard >> Ibtana Settings >> Woocommerce Templates','psychology-therapist'); ?></span></b></p>
		              	<div class="psychology-therapist-pattern-page">
				    		<a href="<?php echo esc_url( admin_url( 'admin.php?page=ibtana-visual-editor-woocommerce-templates&ive_wizard_view=parent' ) ); ?>" class="vw-pattern-page-btn ibtana-dashboard-page-btn button-primary button"><?php esc_html_e('Woocommerce Templates','psychology-therapist'); ?></a>
				    	</div>
		              	<p><?php esc_html_e('You can create a template as you like.','psychology-therapist'); ?></span></p>
				    </div>
				<?php } ?>
			</div>

		<div id="theme_pro" class="tabcontent">
		  	<h3><?php esc_html_e( 'Premium Theme Information', 'psychology-therapist' ); ?></h3>
			<hr class="h3hr">
		    <div class="col-left-pro">
		    	<p><?php esc_html_e('The Premium Therapist WordPress Theme is a versatile and professional template designed specifically for therapists, counselors, psychology professionals, psychologists, and other mental health care professionals.The Premium Therapist WordPress Theme has a sleek and modern design with plenty of customizable options to help you create a unique online presence. It also comes with a set of premium features to help you create a stunning website.The theme is compatible with the popular page builder, Elementor. This allows you to easily create and customize your website without needing any coding or web development skills. You can also choose from a range of pre-designed page layouts or create your custom pages with drag-and-drop functionality. The Premium Therapist WordPress Theme also includes several helpful features for mental health professionals. For example, it includes a built-in appointment booking system that allows clients to schedule appointments directly from your website. You can customize the availability, duration, and pricing of your appointments and receive notifications when new appointments are booked.','psychology-therapist'); ?></p>
		    	<div class="pro-links">
			    	<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_LIVE_DEMO ); ?>" target="_blank"><?php esc_html_e('Live Demo', 'psychology-therapist'); ?></a>
					<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Buy Pro', 'psychology-therapist'); ?></a>
					<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_PRO_DOC ); ?>" target="_blank"><?php esc_html_e('Pro Documentation', 'psychology-therapist'); ?></a>
				</div>
		    </div>
		    <div class="col-right-pro">
		    	<img src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/getstart/images/responsive.png" alt="" />
		    </div>
		    <div class="featurebox">
			    <h3><?php esc_html_e( 'Theme Features', 'psychology-therapist' ); ?></h3>
				<hr class="h3hr">
				<div class="table-image">
					<table class="tablebox">
						<thead>
							<tr>
								<th></th>
								<th><?php esc_html_e('Free Themes', 'psychology-therapist'); ?></th>
								<th><?php esc_html_e('Premium Themes', 'psychology-therapist'); ?></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td><?php esc_html_e('Theme Customization', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Responsive Design', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Logo Upload', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Social Media Links', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Slider Settings', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Number of Slides', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('4', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('Unlimited', 'psychology-therapist'); ?></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Template Pages', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('3', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('6', 'psychology-therapist'); ?></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Home Page Template', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('1', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('1', 'psychology-therapist'); ?></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Theme sections', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('2', 'psychology-therapist'); ?></td>
								<td class="table-img"><?php esc_html_e('10', 'psychology-therapist'); ?></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Contact us Page Template', 'psychology-therapist'); ?></td>
								<td class="table-img">0</td>
								<td class="table-img"><?php esc_html_e('1', 'psychology-therapist'); ?></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Blog Templates & Layout', 'psychology-therapist'); ?></td>
								<td class="table-img">0</td>
								<td class="table-img"><?php esc_html_e('3(Full width/Left/Right Sidebar)', 'psychology-therapist'); ?></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Page Templates & Layout', 'psychology-therapist'); ?></td>
								<td class="table-img">0</td>
								<td class="table-img"><?php esc_html_e('2(Left/Right Sidebar)', 'psychology-therapist'); ?></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Color Pallete For Particular Sections', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Global Color Option', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Section Reordering', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Demo Importer', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Allow To Set Site Title, Tagline, Logo', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Enable Disable Options On All Sections, Logo', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Full Documentation', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Latest WordPress Compatibility', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Woo-Commerce Compatibility', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Support 3rd Party Plugins', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Secure and Optimized Code', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Exclusive Functionalities', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Section Enable / Disable', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Section Google Font Choices', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Gallery', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Simple & Mega Menu Option', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Support to add custom CSS / JS ', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Shortcodes', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Custom Background, Colors, Header, Logo & Menu', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Premium Membership', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Budget Friendly Value', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('Priority Error Fixing', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Custom Feature Addition', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr class="odd">
								<td><?php esc_html_e('All Access Theme Pass', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td><?php esc_html_e('Seamless Customer Support', 'psychology-therapist'); ?></td>
								<td class="table-img"><span class="dashicons dashicons-no"></span></td>
								<td class="table-img"><span class="dashicons dashicons-saved"></span></td>
							</tr>
							<tr>
								<td></td>
								<td class="table-img"></td>
								<td class="update-link"><a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Upgrade to Pro', 'psychology-therapist'); ?></a></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div id="free_pro" class="tabcontent">
		  	<div class="col-3">
		  		<h4><span class="dashicons dashicons-star-filled"></span><?php esc_html_e('Pro Version', 'psychology-therapist'); ?></h4>
				<p> <?php esc_html_e('To gain access to extra theme options and more interesting features, upgrade to pro version.', 'psychology-therapist'); ?></p>
				<div class="info-link">
					<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_BUY_NOW ); ?>" target="_blank"><?php esc_html_e('Get Pro', 'psychology-therapist'); ?></a>
				</div>
		  	</div>
		  	<div class="col-3">
		  		<h4><span class="dashicons dashicons-cart"></span><?php esc_html_e('Pre-purchase Queries', 'psychology-therapist'); ?></h4>
				<p> <?php esc_html_e('If you have any pre-sale query, we are prepared to resolve it.', 'psychology-therapist'); ?></p>
				<div class="info-link">
					<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_CONTACT ); ?>" target="_blank"><?php esc_html_e('Question', 'psychology-therapist'); ?></a>
				</div>
		  	</div>
		  	<div class="col-3">
		  		<h4><span class="dashicons dashicons-admin-customizer"></span><?php esc_html_e('Child Theme', 'psychology-therapist'); ?></h4>
				<p> <?php esc_html_e('For theme file customizations, make modifications in the child theme and not in the main theme file.', 'psychology-therapist'); ?></p>
				<div class="info-link">
					<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_CHILD_THEME ); ?>" target="_blank"><?php esc_html_e('About Child Theme', 'psychology-therapist'); ?></a>
				</div>
		  	</div>

		  	<div class="col-3">
		  		<h4><span class="dashicons dashicons-admin-comments"></span><?php esc_html_e('Frequently Asked Questions', 'psychology-therapist'); ?></h4>
				<p> <?php esc_html_e('We have gathered top most, frequently asked questions and answered them for your easy understanding. We will list down more as we get new challenging queries. Check back often.', 'psychology-therapist'); ?></p>
				<div class="info-link">
					<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_FAQ ); ?>" target="_blank"><?php esc_html_e('View FAQ','psychology-therapist'); ?></a>
				</div>
		  	</div>

		  	<div class="col-3">
		  		<h4><span class="dashicons dashicons-sos"></span><?php esc_html_e('Support Queries', 'psychology-therapist'); ?></h4>
				<p> <?php esc_html_e('If you have any queries after purchase, you can contact us. We are eveready to help you out.', 'psychology-therapist'); ?></p>
				<div class="info-link">
					<a href="<?php echo esc_url( PSYCHOLOGY_THERAPIST_SUPPORT ); ?>" target="_blank"><?php esc_html_e('Contact Us', 'psychology-therapist'); ?></a>
				</div>
		  	</div>
		</div>

	</div>
</div>

<?php } ?>