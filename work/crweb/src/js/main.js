// Hero background images

$('#hero-bg').vide({
}, {
  volume: 1,
  playbackRate: 1,
  muted: true,
  loop: true,
  autoplay: true,
  position: '50% 50%', 
  resizing: true, 
  bgColor: 'transparent',
  // className: '.hero-bg'  
});

// Responsive accordian tab

$('#parentVerticalTab').easyResponsiveTabs({
    type: 'vertical', 
    width: 'auto', 
    fit: true, 
    closed: false, 
    tabidentify: 'hor_1' 
});


