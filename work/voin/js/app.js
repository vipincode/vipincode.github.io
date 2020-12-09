$(".nav-button").on("click", function () {
    $(".nav-button").toggleClass("change");

    $(".main-nav").animate({
        opacity: 'toggle',
        top: "+=50",
        height: 'toggle'
    }, 1000, function () {
        if ($('.main-nav').hasClass('open')) {
            $('.main-nav').removeClass('open');
        } else {
            $('.main-nav').addClass('open');
        }
    });
});

$(window).resize(function () {
    $('.main-nav').removeAttr("style");
});

//======Slick Plugins===============
$('.slider').slick({
    infinite: false,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: true,

    responsive: [{
            breakpoint: 1600,
            settings: {
                slidesToShow: 2,
                infinite: true,
            }
    }, {
            breakpoint: 767,
            settings: "unslick"
    }]
});

$(window).on('resize orientationchange', function(){
    $('.slider').slick('resize');
});

//==========Slide effect for navigation=============

$("a").on('click', function(event) {
   if(this.hash !== "") {
       event.preventDefault();
       
       var hash = this.hash;
       
       $('html, body').animate({
          scrollTop: $(hash).offset().top
       }, 800, function() {
           window.location.hash = hash;
       });
   } 
});

//==========Scroll Top=============

$(window).scroll(function(){
   if($(window).scrollTop() > 300) {
       $("#button-top").addClass('show');
   } else {
       $("#button-top").removeClass('show');
   }
});

$("#button-top").on('click', function(e){
   e.preventDefault();
    $('html, body').animate({
       scrollTop: 0 
    }, 500);
});

//==========Scroll Animation-================


$('.animation-1').waypoint(function(direction) {
    $('.animation-1').addClass('animated fadeInLeft');
}, {
  offset: '50%'
});

$('.animation-2').waypoint(function(direction) {
    $('.animation-2').addClass('animated fadeInDown');
}, {
  offset: '50%'
});

$('.animation-3').waypoint(function(direction) {
    $('.animation-3').addClass('animated fadeInRight');
}, {
  offset: '50%'
});

$('.animation-4').waypoint(function(direction) {
    $('.animation-4').addClass('animated fadeInLeft');
}, {
  offset: '50%'
});

$('.animation-5').waypoint(function(direction) {
    $('.animation-5').addClass('animated fadeInUp');
}, {
  offset: '50%'
});

$('.animation-6').waypoint(function(direction) {
    $('.animation-6').addClass('animated fadeInRight');
}, {
  offset: '50%'
});


$('#whyus').waypoint(function(direction) {
    $('#whyus').addClass('animated fadeInUp');
}, {
  offset: '25%'
});










