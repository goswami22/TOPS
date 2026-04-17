<?php
/**
 * The template part for Middle Header
 *
 * @package Psychology Therapist
 * @subpackage psychology-therapist
 * @since psychology-therapist 1.0
 */
?>
<?php if( get_theme_mod('psychology_therapist_topbar_hide_show',false) != '' ){ ?>
  <div id="topbar">
    <div class="container">
      <div class="row topinner">
        <div class="col-lg-8 col-md-12 align-self-center contactinfo">
            <span class="text-lg-start text-md-start text-center call-box">
              <?php if(get_theme_mod('psychology_therapist_phone_number') != ''){ ?>
                <span class="phone-number"><i class="fas fa-phone"></i> <a href="tel:<?php echo esc_attr( get_theme_mod('psychology_therapist_phone_number','') ); ?>"><?php echo esc_html(get_theme_mod('psychology_therapist_phone_number',''));?></a></span>
              <?php }?>
            </span>
            <span class="text-lg-start text-md-start text-center email-box">
              <?php if(get_theme_mod('psychology_therapist_email_address') != ''){ ?>
                <span class="adress"><i class="fas fa-envelope"></i> <a href="mailto:<?php echo esc_attr(get_theme_mod('psychology_therapist_email_address',''));?>"><?php echo esc_html(get_theme_mod('psychology_therapist_email_address',''));?></a></span>
              <?php }?>
            </span>
            <span class="text-lg-start text-center ms-2">
              <?php if(get_theme_mod('psychology_therapist_location_text') != ''){ ?>
                <span class="location"><i class="fas fa-map-marker-alt"></i> <?php echo esc_html(get_theme_mod('psychology_therapist_location_text',''));?></span>
              <?php }?>
            </span>
        </div>

        <div class="col-lg-2 col-md-6 col-12 text-lg-center text-md-start text-center align-self-center topbtn">
          <div class="topbar_btn text-center text-md-end">
            <?php if( get_theme_mod('psychology_therapist_topbar_btn_link') != '' || get_theme_mod('psychology_therapist_topbar_btn_text') != '' ){ ?>
              <a href="<?php echo esc_url(get_theme_mod('psychology_therapist_topbar_btn_link',''));?>"><?php echo esc_html(get_theme_mod('psychology_therapist_topbar_btn_text',''));?></a>
            <?php }?>
          </div>
        </div>

        <div class="col-lg-2 col-md-6 col-12 social-box text-lg-start text-md-start text-center align-self-center">
          <?php dynamic_sidebar('social-widget'); ?>
        </div>
      </div>
    </div>
  </div>
<?php }?>
  <div class="header-menu text-center">
    <div class="container">
      <?php get_template_part('template-parts/header/navigation'); ?>
    </div>
  </div>