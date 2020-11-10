// GSAP
gsap.registerPlugin(ScrollTrigger);

var resume = $(".btn--warning");
var close = $("#close");

var tl = gsap.timeline();

resume.on("click", function(e) {
  e.preventDefault();
  $("#rbase").removeClass("js__hideClass").addClass("js__addclss");
});

close.on("click", function(e) {
  e.preventDefault();
  $("#rbase").addClass("js__hideClass").removeClass("js__addclss");
});

$("a.rsm--download").on("click", function(e) {
  e.preventDefault();  
  window.location.href = '../img/Vipin-Singh.pdf';
});

$('.webwork').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true
});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'fitImagesInViewport': true,
  'showImageNumberLabel': true
});

