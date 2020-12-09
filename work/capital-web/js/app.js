// Cart Plus Minus Code

$(document).on('click', '.qty-plus', function () {
   $(this).prev().val(+$(this).prev().val() + 1);
});
$(document).on('click', '.qty-minus', function () {
   if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
});

// Mobile Menu

$('.mobile-menu').on('click', function() {
    $('.top-mega-menu').toggleClass('js__toggle');
    $('.mobile-menu').toggle();
});

$('.close').on('click', function() {
    $('.top-mega-menu').toggleClass('js__toggle');
    $('.mobile-menu').toggle();
});


$('.subnav').on('click', function() {
   $(this).children('inner-nav').toggleClass('js__inner-nav');
});

// Sliders

$('.banner-slider').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<span class="banner-prev"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
    prevArrow: '<span class="banner-next"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
            }
    }
  ]
});

$('.blog-slider').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: '<span class="arrow-next"><i class="fa fa-angle-right" aria-hidden="true"></i></span>',
    prevArrow: '<span class="arrow-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></span>',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
        arrows: false,
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

// Cards Tabs 

$('.tabs').tabslet({
    mouseevent: 'click',
    attribute: 'href',
    animation: true
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};
var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

