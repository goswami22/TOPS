<?php
/**
 * The template part for header
 *
 * @package Psychology Therapist 
 * @subpackage psychology-therapist
 * @since psychology-therapist 1.0
 */
?>

<div id="header">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 col-md-3 col-12 align-self-center">
        <div class="logo mb-lg-0 mb-md-0 mb-4 text-md-start">
          <?php if ( has_custom_logo() ) : ?>
            <div class="site-logo"><?php the_custom_logo(); ?></div>
          <?php endif; ?>
          <?php $blog_info = get_bloginfo( 'name' ); ?>
            <?php if ( ! empty( $blog_info ) ) : ?>
              <?php if ( is_front_page() && is_home() ) : ?>                
                  <h1 class="site-title mb-0"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
              <?php else : ?>
                  <p class="site-title mb-0"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
              <?php endif; ?>
            <?php endif; ?>
            <?php
              $description = get_bloginfo( 'description', 'display' );
              if ( $description || is_customize_preview() ) :
            ?>
              <p class="site-description mb-0">
                <?php echo esc_html($description); ?>
              </p>
          <?php endif; ?>
        </div>
      </div>

      <div class="col-lg-7 col-md-5 col-12 align-self-center">
            <div class="toggle-nav mobile-menu text-lg-end text-md-center text-center">
              <button role="tab" onclick="psychology_therapist_menu_open_nav()" class="responsivetoggle"><i class="fas fa-bars"></i><span class="screen-reader-text"><?php esc_html_e('Open Button','psychology-therapist'); ?></span></button>
            </div>
          <div id="mySidenav" class="nav sidenav">
            <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Top Menu', 'psychology-therapist' ); ?>">
              <?php 
                wp_nav_menu( array( 
                  'theme_location' => 'primary',
                  'container_class' => 'main-menu clearfix' ,
                  'menu_class' => 'clearfix',
                  'items_wrap' => '<ul id="%1$s" class="%2$s mobile_nav">%3$s</ul>',
                  'fallback_cb' => 'wp_page_menu',
                ) );
               ?>
              <a href="javascript:void(0)" class="closebtn mobile-menu" onclick="psychology_therapist_menu_close_nav()"><i class="fas fa-times"></i><span class="screen-reader-text"><?php esc_html_e('Close Button','psychology-therapist'); ?></span></a>
            </nav>
          </div>
      </div>

      <div class="col-lg-2 col-md-4 col-12 align-self-center">
        <div class="header_btn text-center text-md-end py-3 py-md-0">
          <?php if( get_theme_mod('psychology_therapist_appointment_btn_link') != '' || get_theme_mod('psychology_therapist_appointment_btn_text') != '' ){ ?>
            <a href="<?php echo esc_url(get_theme_mod('psychology_therapist_appointment_btn_link',''));?>"><?php echo esc_html(get_theme_mod('psychology_therapist_appointment_btn_text',''));?></a>
          <?php }?>
        </div>
      </div>
    </div>
  </div>

</div>