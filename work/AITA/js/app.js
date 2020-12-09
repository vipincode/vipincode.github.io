//Print code

$('.btn-print-page').on('click', function () {
  print();
});

// Header Search Bar

$('.header-search-wrapper .search-main').click(function(){
    $('.search-form-main').toggleClass('active-search');
    $('.search-form-main .search-field').focus();
});

$('.header-search-wrapper .ham-search-main').click(function(){
    $('.search-form-main').toggleClass('active-search');
    $('.search-form-main .search-field').focus();
});

//Hamburger menus
var isActive = false;
$('.js-menu').on('click', function() {
  if (isActive) {
    $(this).removeClass('active');
    $('body').removeClass('menu-open');
        $('.hamburger-overlay').removeClass('ham-overlay');
  } else {
    $(this).addClass('active');
    $('body').addClass('menu-open');
        $('.hamburger-overlay').addClass('ham-overlay');
  }
    
  isActive = !isActive;
});

$('.hamburger-overlay').on('click', function() {
    $('.js-menu').removeClass('active');
    $('body').removeClass('menu-open');
    $('.hamburger-overlay').removeClass('ham-overlay');
});


// Read more button
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more...") {
    $(this).text("Read less...")
  } else {
    $(this).text("Read more...")
  }
});

 // Hero Full Screen Overlay

 $(document).ready(function() {  
    $('input.hero-input-ser').on('click', function() {
      $('#myNav').css('display', 'block');
    });
    $('a.closebtn').on('click', function() {
         $('#myNav').css('display', 'none');
    }); 
 });
  
  // Increment Decreament Counter
  
 $(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});


// Slick Slider Code

$('.group-slider').slick({
    autoplay: true,
    dots: false,
    centerMode: true,
    mobileFirst: true,
    slidesToShow: 1,
    nextArrow: '<span class="slider-arrow-left"><i class="fa fa-arrow-left" aria-hidden="true"></i></span>',
    prevArrow: '<span class="slider-arrow-right"><i class="fa fa-arrow-right" aria-hidden="true"></i></span>',
    responsive: [
        {
            breakpoint: 300,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
    },
    {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '100px',
                slidesToShow: 2
            }
    },
    {
            breakpoint: 1400,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '158px',
                slidesToShow: 3
            }
    }
  ]
});

$('.service-slider').slick({
  autoplay: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: '<span class="srv-arrow-left"><i class="fas fa-chevron-left"></i></span>',
  prevArrow: '<span class="srv-arrow-right"><i class="fas fa-chevron-right"></i></span>',
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

$('.why-group-slider').slick({
  autoplay: true,
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<span class="grp-arrow-left"><i class="fas fa-chevron-left"></i></span>',
  prevArrow: '<span class="grp-arrow-right"><i class="fas fa-chevron-right"></i></span>'
});


$('.in-travel-slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

$('.hero-baner-slider').slick({
  autoplay: true,
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.single-tour-slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  nextArrow: '<span class="blog-arrow-left"><i class="fas fa-chevron-left"></i></span>',
  prevArrow: '<span class="blog-arrow-right"><i class="fas fa-chevron-right"></i></span>'
});

// Sticky Nav Code

$(window).scroll(function(){
 if ($(window).scrollTop() >= 850) {
   $('.footer-fix-nav').addClass('footer-fixed-bottom');
  }
  else {
   $('.footer-fix-nav').removeClass('footer-fixed-bottom');
  }
});


// Tool Tip Code

new jBox('Tooltip', {
  attach: '.book_info',
});

new jBox('Tooltip', {
  attach: '.cancel-info',
});

//Conact US Tab Grid

 $('#gridtab-contact').gridtab({
      grid: 3,
      borderWidth: 3,
      contentPadding: 40,
      config:{
        layout: 'tab',
        activeTab:0
      },
      responsive: [{
          breakpoint: 600,
          settings: {
              grid: 2,
              contentPadding: 30
          }
      }]
  });

