
$(document).ready(function(){

    // HERO BANNER
    $('.hero-banner').owlCarousel({
        loop: false,
        margin: 0,
        items: 1
    })
    // FEATURED SLIDER
    $('.featured-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1199: {
                items: 5,
                nav: true,
                loop: false
            },
            1440: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    })
    // WEEK DEALS SLIDER
    $('.week-deals-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            1440: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })
    // SHOP FEATURED SLIDER
    $('.shop-featured-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: false
            },
            992: {
                items: 4,
                nav: false
            },
            1200: {
                items: 5,
                nav: false
            },
            1440: {
                items: 8,
                nav: true,
                loop: false
            }
        }
    })
    // TESTIMONIAL SLIDER
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 2,
                nav: false
            },
            992: {
                items: 3,
                nav: false
            },
            1440: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
    // OUR PARTNER SLIDER
    $('.our-partners-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        responsiveClass: true,
        navText: ["<i class='fa-solid fa-arrow-left-long'></i>", "<i class='fa-solid fa-arrow-right-long'></i>"],
        responsive: {
            0: {
                items: 4,
                nav: true
            },
            768: {
                items: 6,
                nav: false
            },
            1000: {
                items: 7,
                nav: true,
                loop: false
            }
        }
    })
    

    })  // END FUNCTION
    
    $(document).ready(function(){
 
        // PRODUCT DETAILS SLIDER
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            margin: 10,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            vertical: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 0,
                    settings: {
                        vertical: false,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        vertical: true,
                    }
                }
            ]
        });

    // you might slider
    $('.you-might-slider').slick({
        infinite: false,
        slidesToShow: 7,
        arrows: true,
        prevArrow: '<i class="fa-solid fa-arrow-left-long"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right-long"></i>',
        responsive: [
            {
            breakpoint: 1200,
                settings: {
                    slidesToShow: 5
                }
            },
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
        });

        // review
        $('.review-header button.main-btn').click(function(){
            $('.review-content').slideToggle()
        })

        // footer
     
    }) // END FUNCTION

    
    $(document).ready(function(){
        if($(window).width() <= 991) {
            $('footer h2.title').click(function(){
                $(this).next().slideToggle();
                $(this).toggleClass('active')
            })
        }
    }) // END FUNCTION