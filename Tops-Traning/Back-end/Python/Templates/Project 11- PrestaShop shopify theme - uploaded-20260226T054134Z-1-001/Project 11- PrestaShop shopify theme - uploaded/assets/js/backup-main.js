
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
    
    // FOOTER 
    if($(window).width() <= 991) {
        $('footer h2.title').click(function(){
            $(this).next().slideToggle();
            $(this).toggleClass('active')
        })
    }
    
    })  // END FUNCTION
    