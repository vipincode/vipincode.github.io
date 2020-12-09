// INDEX RIGHT FORM

$('.btn-letstalk').on('click', function () {
    $('.talk-form').addClass('js__open_talk');
    $('.js__overlay_page').addClass('js__overlay');
    $('.talk-form').removeClass('js__close_talk');
});

$('.tl__close').on('click', function () {
    $('.talk-form').addClass('js__close_talk');
    $('.talk-form').removeClass('js__open_talk');
    $('.js__overlay_page').removeClass('js__overlay');
});

$('.js__overlay_page').on('click', function () {
    $('.talk-form').removeClass('js__open_talk');
    if ($('.js__overlay_page').hasClass('js__overlay')) {
        $('.js__overlay_page').removeClass('js__overlay');
    } 
});

$('.js__toggler').on('click', function() {
    $('.js__mob_nav').addClass('js__open');
    $('.js__overlay_page').addClass('js__mob__overlay');
    $(this).hide();
    $('.js_toggler_icon').show();
});

$('.js_toggler_icon').on('click', function() {
    $('.js__mob_nav').removeClass('js__open');
    $('.js__overlay_page').removeClass('js__mob__overlay');
    $(this).hide();
    $('.js__toggler').show();
});

$('.js__overlay_page').on('click', function() {
    $('.js__mob_nav').removeClass('js__open');
    $('.js__toggler').show();
    $('.js_toggler_icon').hide();
    $('.js__overlay_page').removeClass('js__mob__overlay');
});

$('.top-menus').on('click', function() {
    $(this).children('.sub-menu').toggleClass('js__sub-menu-open ');
});

// SITE SLIDER 

$('.trvl-theme-slider').slick({
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.trvl-zone-slider').slick({
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.top-state-slider').slick({
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.ind-grp-slider').slick({
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.pop-torist-slider').slick({
  dots: false,
  autoplay: false,
  infinite: false,
  speed: 400,
  slidesToShow: 6,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.single-event-slider').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});