$(document).ready(function () {

    // navbar scroll box shadow
    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('navbar-shadow');
        }
        else {
            $('.navbar').removeClass('navbar-shadow')
        }
    });

    // navbar fixed top
    $(window).scroll(function(){
        if($(window).scrollTop() > 130) {
            $('.navbar').addClass('fixed-top');
        }else {
            $('.navbar').removeClass('fixed-top')
        }
    });
    
    // single product slider
    $('.single-product-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
    // single product tab slider
    $('.new-product-tab-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 3000,
                nav: false,
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })
    // new product slider
    $('.new-product-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
              768: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 3000,
                nav: false,
            },
              992: {
                items: 1,
                nav: true,
            }
        }
    })
    // blog slider
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 2
            }
        }
    })
    // client testimonial slider
    $('.client-testimonial').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
    // brand slider
    $('.brand-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,  
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            991: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
    // top move
    $(window).scroll(function() {
        if( $(window).scrollTop() > 500 ){
            $('.top-move').fadeIn();
        }
        else 
        {
            $('.top-move').fadeOut();
        }
    });

    // comment 
    $('.review-btn a').click(function(){
        $('.write-review').slideToggle();
    });

    $('.fancybox').fancybox({
        padding : 0,
        openEffect  : 'elastic',
        closeBtn: false,
    });

    // cart 
    $('.remove-product').click(function(){
        $(this).parents('tr').remove()
    })
});

