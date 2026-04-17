$(document).ready(function () {
    // shop category slider
        $('.shop-category-silder').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 5
                }
            }
        })

    // BLOG slider
    $('.blog-slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })


    // new arrival wrapper 
    if (jQuery(window).width() < 1200) {
        $('.new-arrival-wrapper').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoPlaySpeed: 3000,
            autoPlayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                },
            }
        })
    }

    if (jQuery(window).width() < 768) {
        $('.support-block-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                }
            }
        })
    }

    if (jQuery(window).width() < 768) {
        $('.brand-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                }
            }
        })
    }

    // form btn
    jQuery('.toggle-btn').click(function () {
        jQuery('.review-form').slideToggle()
    })

    // recommanded product slider
    $('.recommanded-product-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    //product detail slider
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.slider-nav')
        .on('init', function (event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }]
        });

    $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });
})

$(document).ready(function () {

    // our client 
    $('.hot-deal-wrapper-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        nextArrow: '<i class="fa-solid fa-arrow-right-long"></i>',
        prevArrow: '<i class="fa-solid fa-arrow-left-long"></i>',
    });

    $('.our-client-comments-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        nextArrow: '<i class="fa-solid fa-arrow-right-long"></i>',
        prevArrow: '<i class="fa-solid fa-arrow-left-long"></i>',
    });
});

$(document).ready(function(){
    jQuery('.dropdown-toggle').click(function(){
        jQuery('.dropdown-submenu').addClass('show')
    })

    jQuery('.menu-header a').click(function(){
        jQuery('.dropdown-submenu').removeClass('show')
    })
})



