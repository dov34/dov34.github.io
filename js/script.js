(function($) {
    
    "use strict";

    /* ----- Предварительный загрузчик ----- */
    function preloaderLoad() {
        if($('.preloader').length){
            $('.preloader').delay(300).fadeOut(400);
        }
    }

    /* ----- Навигационная Панель Прокрутка До Фиксированной ----- */
    function navbarScrollfixed() {
        $('.navbar-scrolltofixed').scrollToFixed();
        var summaries = $('.summary');
        summaries.each(function(i) {
            var summary = $(summaries[i]);
            var next = summaries[i + 1];
            summary.scrollToFixed({
                marginTop: $('.navbar-scrolltofixed').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                    } else {
                        limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    }
                    return limit;
                },
                zIndex: 999
            });
        });
    }
    
    /* ----- счетчик фактов ----- */
    if($('div.timer').length) {
        $('div.timer').counterUp({
            delay: 5,
            time: 2000
        });
    }
    
    /* ----- Выбор даты и времени ----- */
    if($('.datepicker').length){
        $('.datepicker').datetimepicker();
    }

    /* ----- КАМЕННАЯ ИЗОТОПНАЯ ГАЛЕРЕЯ ----- */
    if ($('.masonry-gallery').length>0 || $('.masonry-grid').length>0 || $('.masonry-grid-fitrows').length>0) {
        $(window).load(function() {
            $('.masonry-gallery').fadeIn();
            var $container = $('.masonry-gallery').isotope({
                itemSelector: '.isotope-item',
                layoutMode: 'masonry',
                transitionDuration: '0.6s',
                filter: "*"
            });
            $('.masonry-grid').isotope({
                itemSelector: '.masonry-grid-item',
                layoutMode: 'masonry'
            });
            $('.masonry-grid-fitrows').isotope({
                itemSelector: '.masonry-grid-item',
                layoutMode: 'fitRows'
            });
            // фильтровать элементы по щелчку кнопки
            $('.masonry-filter').on( 'click', 'li a', function() {
                var filterValue = $(this).attr('data-filter');
                $(".masonry-filter").find("a.active").removeClass("active");
                $(this).parent().addClass("active");
                $container.isotope({ filter: filterValue });
                return false;
            });
        });
    };


    /* ----- Лайтбокс / Подарочная коробка ----- */
    if($('.lightbox-image').length) {
      $('.lightbox-image').fancybox();
    }

    /* ----- Увеличительное Всплывающее Окно ----- */
    if (($(".popup-img").length > 0) || ($(".popup-iframe").length > 0) || ($(".popup-img-single").length > 0)) {
        $(".popup-img").magnificPopup({
            type:"image",
            gallery: {
                enabled: true,
            }
        });
        $(".popup-img-single").magnificPopup({
            type:"image",
            gallery: {
                enabled: false,
            }
        });
        $('.popup-iframe').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            preloader: false,
            fixedContentPos: false
        });
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          fixedContentPos: false
        });
    };

    /* ----- YT плеер ----- */
    if($('.player').length) {
        $(".player").mb_YTPlayer();
    }

    /* ----- wow анимация ----- */
    function wowAnimation() {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true, // запуск анимации на мобильных устройствах (по умолчанию true)
            offset:       0
        });
        wow.init();
    }

    /* ----- ФЛИП-ЧАСЫ ----- */
    function flip_Clock() {
        var clock;    
        var clock;
        clock = $('.clock').FlipClock({
            clockFace: 'DailyCounter',
            autoStart: false,
            callbacks: {
                stop: function() {
                    $('.message').html('The clock has stopped!')
                }
            }
        });
                
        clock.setTime(8220880);
        clock.setCountdown(true);
        clock.start();
    }

    /* ----- Прокрутка до верха ----- */
    function scrollToHome() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });
        
        //Нажмите кнопку событие, чтобы прокрутить страницу вверх
        $('.scrollToTop').on('click',function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }

    /* ----- ИСПОЛЬЗОВАНИЕ СОВИНОЙ КАРУСЕЛИ В ДОМАШНИХ УСЛОВИЯХ ----- */
    if($('.ulockd-main-slider').length){
        $('.ulockd-main-slider').owlCarousel({
            autoHeight:true,
            autoplay: 5000,
            autoplayHoverPause:false,
            dots: false,
            loop:true,
            margin:0,
            nav:true,
            smartSpeed: 2000,
            navText: [
              '<i class="fa fa-long-arrow-left"></i>',
              '<i class="fa fa-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /* ----- Сова-Новости-карусель ----- */
    if($('.ulockd-main-slider-style2').length){
        $('.ulockd-main-slider-style2').owlCarousel({
            loop:true,
            margin:0,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: true,
            autoHeight:true,
            animateIn: 'fadeIn',
            smartSpeed: 500,
            navText: [
              '<i class="fa fa-long-arrow-left"></i>',
              '<i class="fa fa-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /* ----- Сова-отзыв-карусель ----- */
    if($('.blog-single-post-slider').length){
        $('.blog-single-post-slider').owlCarousel({
            loop:true,
            margin:5,
            dots: false,
            nav:false,
            autoplayHoverPause:false,
            autoplay: false,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /* ----- Сова-отзыв-карусель ----- */
    if($('.testimonial-carousel').length){
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav:false,
            autoplayHoverPause:false,
            autoplay: true,
            smartSpeed: 700,
            navText: [
              '<i class="lnr lnr-arrow-left"></i>',
              '<i class="lnr lnr-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }

    /* ----- Сова-отзыв-карусель ----- */
    if($('.ulockd-testimonial-carousel').length){
        $('.ulockd-testimonial-carousel').owlCarousel({
            loop:true,
            margin:30,
            dots: false,
            nav:true,
            autoplayHoverPause:false,
            autoplay: true,
            smartSpeed: 1800,
            navText: [
              '<i class="fa fa-long-arrow-left"></i>',
              '<i class="fa fa-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 1,
                    center: false
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 2
                }
            }
        })
    }

    /* ----- Сова-отзыв-карусель ----- */
    if($('.ulockd-bpost-slider').length){
        $('.ulockd-bpost-slider').owlCarousel({
            autoHeight:true,
            autoplay: 5000,
            autoplayHoverPause:false,
            dots: false,
            loop:true,
            margin:0,
            nav:true,
            smartSpeed: 2000,
            navText: [
              '<i class="fa fa-long-arrow-left"></i>',
              '<i class="fa fa-long-arrow-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    center: false
                },
                480:{
                    items:1,
                    center: false
                },
                600: {
                    items: 2,
                    center: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        })
    }

    /* ----- Настройки Карты Google ----- */
    if($('#map-location').length){
        var map;
        map = new GMaps({
            el: '#map-location',
            zoom: 14,
            scrollwheel:false,
            //Установите широту и долготу здесь
            lat: 39.768403,
            lng: -86.158068
        });
    }

    /* ----- FLICEKR FEED ----- */
    if($('.flickr-photo').length){
        $('.flickr-photo').jflickrfeed({
            limit: 9,
            qstrings: {
                id: '44802888@N04'
            },
            itemTemplate: 
            '<li>' +
                '<a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a>' +
            '</li>'
        });
    }

/* ======
   Когда документ будет готов, сделайте это
   ====== */
    $(document).on('ready', function() {
        // добавьте свои функции
        navbarScrollfixed();
        scrollToHome();
        wowAnimation();
        flip_Clock();
    });
    
/* ======
   Когда документ загружается, сделайте это
   ====== */
    // окно с функцией загрузки
    $(window).on('load', function() {
        // добавьте свои функции
        preloaderLoad();
    }); 


})(window.jQuery);