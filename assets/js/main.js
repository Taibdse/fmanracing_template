(function($) {
    "use strict";
    
    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    /*--
	Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.menu-toggle');
    searchToggle.on('click', function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).siblings('.main-menu').removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).siblings('.main-menu').addClass('open');
        }
    })
    
    /* slider active */
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* hover 3d init for tilt */
    if ($('.tilter').length > 0) {
        $('.tilter').tilt({
            maxTilt: 40,
            perspective: 800,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 800,
            transition: true,
        });
    }
    
    /* testimonial active */
    $('.product-slider-active').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        // navText: ['PRE', 'NEXT'],
        nav: true,
        item: 3,
        margin: 15,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })

    $('.our-customer-slider').owlCarousel({
        loop: false,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<', '>'],
        nav: true,
        item: 3,
        margin: 20,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 4
            },
            1000: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    })
    
    /* latest-product-slider active */
    $('.latest-product-slider').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['PRE', 'NEXT'],
        nav: true,
        item: 1,
        margin: 30,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* testimonial active */
    $('.product-accessories-active').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        nav: false,
        item: 5,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 4
            }
        }
    })
    
    /* testimonial active */
    $('.testimonial-active').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['PRE', 'NEXT'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /* cart */
    $(".icon-cart").on("click", function() {
        $(this).parent().find('.shopping-cart-content').slideToggle('medium');
    })
    
    /*---------------------
    shop grid list
    --------------------- */
    $('.view-mode li a').on('click', function() {
        var $proStyle = $(this).data('view');
        $('.view-mode li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.product-view').removeClass('product-grid product-list').addClass($proStyle);
    })
    
    /*--------------------------
    tab active
    ---------------------------- */
    var ProductDetailsSmall = $('.product-details-small a');
    
    ProductDetailsSmall.on('click', function(e) {
        e.preventDefault();
        
        var $href = $(this).attr('href');
        
        ProductDetailsSmall.removeClass('active');
        $(this).addClass('active');
        
        $('.product-details-large .tab-pane').removeClass('active');
        $('.product-details-large ' + $href).addClass('active');
    })
    
    /*------ Wow Active ----*/
    new WOW().init();
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    
    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.transparent-bar');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 200) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    /*---------------------
    sidebar sticky
    --------------------- */
    $('.sidebar-active').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 991,
    });
    
    /*---------------------
    chosen
    --------------------- */
    $('.orderby').chosen({
        disable_search: true,
        width: "auto"
    });
    
    /* product-dec-slider active */
    $('.product-dec-slider').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
        nav: true,
        item: 4,
        margin: 12,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    })
    
    /*---------------------
    price slider
    --------------------- */
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    var prices = [];
    for(let i = 0; i <= 1000; i++){
        prices.push(i * 10);
    }

    $(function() {
        function findNearest(includeLeft, includeRight, value) {
            var nearest = null;
            var diff = null;
            for (var i = 0; i < prices.length; i++) {
                if ((includeLeft && prices[i] <= value) || (includeRight && prices[i] >= value)) {
                    var newDiff = Math.abs(value - prices[i]);
                    if (diff == null || newDiff < diff) {
                        nearest = prices[i];
                        diff = newDiff;
                    }
                }
            }
            return nearest;
        }
        var priceSlider = sliderrange.slider({
            range: true,
            min: 0,
            max: 10000,
            values: [0, 10000],
            slide: function(event, ui) {
                
                var includeLeft = event.keyCode != $.ui.keyCode.RIGHT;
                var includeRight = event.keyCode != $.ui.keyCode.LEFT;
                var value = findNearest(includeLeft, includeRight, ui.value);
                if (ui.value == ui.values[0]) {
                    priceSlider.slider('values', 0, value);
                }
                else {
                    priceSlider.slider('values', 1, value);
                }
                // $("#price-amount").html('$' + slider.slider('values', 0) + ' - $' + slider.slider('values', 1));
                // return false;
                var startVal = priceSlider.slider('values', 0);
                var endVal = priceSlider.slider('values', 1);
                console.log(startVal)
                amountprice.text(startVal + " - " + endVal);
            }
        });
        amountprice.text(sliderrange.slider("values", 0) +
            " - " + sliderrange.slider("values", 1));
            // amountprice.css({ s })
    });
    
    
    // Instantiate EasyZoom instances
    var $easyzoom = $('.easyzoom').easyZoom();
    
    
    /*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    })
    
    /*--------------------------
     ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="icofont icofont-rounded-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });




})(jQuery);