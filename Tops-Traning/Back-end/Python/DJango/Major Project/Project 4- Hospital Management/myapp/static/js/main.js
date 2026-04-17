(function ($)
  { "use strict"
  
/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

/* 4. MainSlider-1 */
    // h1-hero-active
    function mainSlider() {
      var BasicSlider = $('.slider-active');
      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        fade: true,
        arrows: false, 
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSlider();

/* 5. Testimonial Active*/

/* 4. Testimonial Active*/
    var testimonial = $('.h1-testimonial-active');
    if(testimonial.length){
    testimonial.slick({
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay:false,
        loop:true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrow:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
            }
          }
        ]
      });
    }



/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }
// 12 Pop Up Video
    var popUp = $('.popup-video');
    if(popUp.length){
      popUp.magnificPopup({
        type: 'iframe'
      });
    }

/* 13. counterUp*/
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });
    /*------------------
        CountDown
    --------------------*/
    // For demo preview
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    if(mm == 12) {
        mm = '01';
        yyyy = yyyy + 1;
    } else {
        mm = parseInt(mm) + 1;
        mm = String(mm).padStart(2, '0');
    }
    var timerdate = mm + '/' + dd + '/' + yyyy;
    // For demo preview end
    

    // Use this for real timer date
    /*  var timerdate = "2020/01/01"; */

	$("#countdown").countdown(timerdate, function(event) {
        $(this).html(event.strftime("<div class='cd-item'><span>%D</span><p>Days</p> </div>" + "<div class='cd-item'><span>%H</span><p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span><p>Min</p> </div>" + "<div class='cd-item'><span>%S</span><p>Sec</p> </div>"));
    });



    
/* 14. Datepicker */
  $('#datepicker1').datepicker();

// 15. Time Picker
  $('#timepicker').timepicker();


})(jQuery);


// Deshbord js 
document.addEventListener('DOMContentLoaded', function() {
    
    // Set Current Date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', dateOptions);

    // Sidebar Toggle Logic
    const toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const body = document.body;

    function toggleSidebar() {
        if (window.innerWidth >= 992) {
            // Desktop: toggle collapsed state
            body.classList.toggle('sidebar-collapsed');
        } else {
            // Mobile: toggle open/close state
            body.classList.toggle('sidebar-open');
        }
    }

    toggleSidebarBtn.addEventListener('click', toggleSidebar);
    
    if(closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => {
             body.classList.remove('sidebar-open');
        });
    }

    // Single Page Application (SPA) Routing mechanism
    const menuItems = document.querySelectorAll('.menu-item[data-view]');
    const viewSections = document.querySelectorAll('.view-section');
    const dropdownLinks = document.querySelectorAll('[data-view-target]');

    // Make switchView globally accessible for inline onclick handlers if needed
    window.switchView = function(viewId) {
        // Update menu active state
        menuItems.forEach(item => {
            if (item.dataset.view === viewId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Hide all sections, show target
        viewSections.forEach(section => {
            if (section.id === `view-${viewId}`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });

        // Close mobile sidebar on navigation
        if (window.innerWidth < 992) {
            body.classList.remove('sidebar-open');
        }
    };

    // Attach event listeners to sidebar items
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = item.dataset.view;
            window.switchView(viewId);
        });
    });

    // Attach event listeners to top header dropdown items bridging to views
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const viewId = link.dataset.viewTarget;
            window.switchView(viewId);
        });
    });

    // --- Chart.js Initializations ---
    
    // Set global font
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#64748b';

    // 1. Patient Registration Growth (Area Chart)
    const ctxGrowth = document.getElementById('patientGrowthChart');
    if (ctxGrowth) {
        const gradientBlue = ctxGrowth.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradientBlue.addColorStop(0, 'rgba(0, 97, 242, 0.4)');
        gradientBlue.addColorStop(1, 'rgba(0, 97, 242, 0.05)');

        new Chart(ctxGrowth, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'New Patients',
                    data: [120, 190, 150, 220, 180, 250, 210, 280, 240, 310, 280, 350],
                    borderColor: '#0061f2',
                    backgroundColor: gradientBlue,
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4, // Smooth curves
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: '#0061f2',
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        titleColor: '#1e293b',
                        bodyColor: '#1e293b',
                        borderColor: 'rgba(226, 232, 240, 1)',
                        borderWidth: 1,
                        padding: 10,
                        boxPadding: 4,
                        usePointStyle: true
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(226, 232, 240, 0.5)',
                            drawBorder: false
                        },
                        border: { display: false }
                    },
                    x: {
                        grid: { display: false },
                        border: { display: false }
                    }
                }
            }
        });
    }

    // 2. Department Distribution (Doughnut Chart)
    const ctxDept = document.getElementById('departmentChart');
    if (ctxDept) {
        new Chart(ctxDept, {
            type: 'doughnut',
            data: {
                labels: ['Cardiology', 'Neurology', 'Pediatrics', 'Orthopedics', 'Other'],
                datasets: [{
                    data: [35, 20, 15, 20, 10],
                    backgroundColor: [
                        '#0061f2', // Primary
                        '#00c9a7', // Success/Teal
                        '#f59e0b', // Warning
                        '#6900c7', // Purple/Accent
                        '#e2e8f0'  // Light config
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: { size: 12 }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        titleColor: '#1e293b',
                        bodyColor: '#1e293b',
                        borderColor: 'rgba(226, 232, 240, 1)',
                        borderWidth: 1
                    }
                }
            }
        });
    }

});

