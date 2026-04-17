<?php
/**
 * Template Name: Custom Home Page
 */

get_header(); ?>

<main id="maincontent" role="main">
  <?php do_action( 'psychology_therapist_before_slider' ); ?>

  <?php if( get_theme_mod( 'psychology_therapist_slider_hide_show', false) == 1 || get_theme_mod( 'psychology_therapist_resp_slider_hide_show', false) == 1) { ?>
    <section id="slider"> 
      <?php if(get_theme_mod('psychology_therapist_slider_type', 'Default slider') == 'Default slider' ){ ?>       
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" data-bs-interval="<?php echo esc_attr(get_theme_mod( 'psychology_therapist_slider_speed',4000)) ?>">
          <?php $psychology_therapist_pages = array();
            for ( $count = 1; $count <= 3; $count++ ) {
              $mod = intval( get_theme_mod( 'psychology_therapist_slider_page' . $count ));
              if ( 'page-none-selected' != $mod ) {
                $psychology_therapist_pages[] = $mod;
              }
            }
            if( !empty($psychology_therapist_pages) ) :
              $args = array(
                'post_type' => 'page',
                'post__in' => $psychology_therapist_pages,
                'orderby' => 'post__in'
              );
              $query = new WP_Query( $args );
              if ( $query->have_posts() ) :
                $i = 1;
          ?>
          <div class="carousel-inner" role="listbox">
            <?php while ( $query->have_posts() ) : $query->the_post(); ?>
              <div <?php if($i == 1){echo 'class="carousel-item active"';} else{ echo 'class="carousel-item"';}?>>
                <?php if(has_post_thumbnail()){
                  the_post_thumbnail();
                } else{?>
                  <img src="<?php echo esc_url(get_template_directory_uri()); ?>/inc/block-patterns/images/slider.png" alt="" />
                <?php } ?>
                <div class="carousel-caption">
                  <div class="inner_carousel">
                    <h1 class="wow slideInRight delay-1000" data-wow-duration="2s"><a href="<?php echo esc_url( get_permalink() ); ?>" title="<?php echo the_title_attribute(); ?>"><?php the_title(); ?></a></h1>
                    <p class="wow slideInRight delay-1000" data-wow-duration="2s"><?php $psychology_therapist_excerpt = get_the_excerpt(); echo esc_html( psychology_therapist_string_limit_words( $psychology_therapist_excerpt, 20)); ?></p>
                    <div class="sliderbutton">
                      <div class="slider-btn1 me-3 wow slideInRight delay-1000" data-wow-duration="2s">
                        <a href="<?php the_permalink(); ?>"><?php echo esc_html('CONSULT','psychology-therapist');?><span class="screen-reader-text"><?php echo esc_html('CONSULT','psychology-therapist');?></span></a>
                      </div>
                      <div class="slider-btn2 wow slideInRight delay-1000" data-wow-duration="2s">
                        <a href="<?php the_permalink(); ?>"><?php echo esc_html('KNOW MORE','psychology-therapist');?><span class="screen-reader-text"><?php echo esc_html('KNOW MORE','psychology-therapist');?></span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <?php $i++; endwhile; 
            wp_reset_postdata();?>
          </div>
          <?php else : ?>
            <div class="no-postfound"></div>
          <?php endif;
          endif;?>
          <?php if(get_theme_mod('psychology_therapist_slider_arrow_hide_show', true)){?>
            <a class="carousel-control-prev" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" role="button">
              <span class="carousel-control-prev-icon w-auto h-auto" aria-hidden="true"><i class="<?php echo esc_attr(get_theme_mod('psychology_therapist_slider_prev_icon','fas fa-angle-double-left')); ?> "></i></span>
              <span class="screen-reader-text"><?php esc_html_e( 'Previous','psychology-therapist' );?></span>
            </a>
            <a class="carousel-control-next" data-bs-target="#carouselExampleInterval" data-bs-slide="next" role="button">
              <span class="carousel-control-next-icon w-auto h-auto" aria-hidden="true"><i class="<?php echo esc_attr(get_theme_mod('psychology_therapist_slider_next_icon','fas fa-angle-double-right')); ?>"></i></span>
              <span class="screen-reader-text"><?php esc_html_e( 'Next','psychology-therapist' );?></span>
            </a>
          <?php } ?>
        </div> 
      <?php } else if(get_theme_mod('psychology_therapist_slider_type', 'Advance slider') == 'Advance slider'){?>
        <?php echo do_shortcode(get_theme_mod('psychology_therapist_advance_slider_shortcode')); ?>
      <?php } ?>
    </section>
  <?php }?>

  <?php do_action( 'psychology_therapist_after_slider' ); ?>

  <?php if(get_theme_mod('psychology_therapist_about_setting') != '' || get_theme_mod('psychology_therapist_section_small_title') != '' || get_theme_mod('psychology_therapist_about_name') != '') {?>
    <section id="about-section" class="p-lg-5 p-4">
      <div class="container">
        <?php
        $psychology_therapist_postData1 =  get_theme_mod('psychology_therapist_about_setting');
        if($psychology_therapist_postData1){
          $args = array( 'name' => esc_html($psychology_therapist_postData1 ,'psychology-therapist'));
          $query = new WP_Query( $args );
          if ( $query->have_posts() ) :
            $count = 0;
            while ( $query->have_posts() ) : $query->the_post(); ?>
              <div class="row">
                <?php if (has_post_thumbnail()){?>
                  <div class="col-lg-5 col-md-5 mb-4 align-self-center about-img">
                    <div class="abtimg">
                      <?php the_post_thumbnail(); ?>
                    </div>
                  </div>
                <?php }?>
                <div class="<?php if (has_post_thumbnail()){?> col-lg-7 col-md-7 ps-lg-5 <?php } else {?> col-lg-12 col-md-12 <?php }?> align-self-center about-content">
                  <?php if( get_theme_mod('psychology_therapist_section_small_title') != '' ){ ?>
                    <p class="small-title"><?php echo esc_html(get_theme_mod('psychology_therapist_section_small_title'));?></p>
                  <?php }?>
                  <h2 class="mt-2"><a href="<?php the_permalink(); ?>"><?php the_title(); ?><span class="screen-reader-text"><?php the_title(); ?></span></a></h2>
                  <p><?php $excerpt = get_the_excerpt(); echo esc_html( psychology_therapist_string_limit_words( $excerpt, esc_attr(get_theme_mod('psychology_therapist_about_excerpt_number','30')))); ?></p>
                  <div class="about-list">
                    <div class="row">
                      <?php for ($i=1; $i <= 4 ; $i++) { ?>
                       <div class="col-lg-6 col-md-6 mb-3 align-self-center">
                         <i class="<?php echo esc_attr(get_theme_mod('psychology_therapist_about_list_icon'.$i, 'fas fa-check')); ?>"></i> <span class="list mb-4"><?php echo esc_html(get_theme_mod('psychology_therapist_about_page_list'.$i));?></span>
                       </div>
                      <?php }?>
                    </div>
                  </div>
                    <div class="about-btn mt-4">
                      <a href="<?php the_permalink(); ?>"><?php esc_html_e('KNOW MORE','psychology-therapist');?><span class="screen-reader-text"><?php esc_html_e('KNOW MORE','psychology-therapist');?></span></a>
                    </div>
                </div>
              </div>
            <?php endwhile; 
            wp_reset_postdata();?>
          <?php else : ?>
            <div class="no-postfound"></div>
          <?php endif;
        }?>
      </div>
    </section>
  <?php }?>

  <?php do_action( 'psychology_therapist_after_service' ); ?>

  <div id="content-vw" class="entry-content py-3">
    <div class="container">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
      <?php endwhile; // end of the loop. ?>
    </div>
  </div>
</main>

<?php get_footer(); ?>