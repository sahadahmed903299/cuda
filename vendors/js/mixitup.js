$(function(){
    $('#Grid').mixitup();
  });
  $('#Grid').mixitup({

    // default selectors
    selectors: {
      target: '.mix',
      filter: '.filter',
      sort: '.sort'
    },
  
    // config animations here
    animation: {
      enable: true,
      // fade, scale, translateX, translateY
      // translateZ, rotateX, rotateY
      // rotateZ, stagger
      effects: 'fade scale',
      duration: 600,
      easing: 'ease',
      perspectiveDistance: '3000',
      perspectiveOrigin: '50% 50%',
      queue: true,
      queueLimit: 1,
      animateChangeLayout: false,
      animateResizeContainer: true,
      animateResizeTargets: false,
      staggerSequence: false,
      reverseOut: false
    },
  
    // callbacks
    callbacks: {
      onMixLoad: false,
      onMixStart: false,
      onMixBusy: false,
      onMixEnd: false,
      onMixFail: false,
      _user: false
    },
  
    // config controls here
    controls: {
      enable: true,
      live: false,
      toggleFilterButtons: false,
      toggleLogic: 'or',
      activeClass: 'active'
    },
  
    // layout options
    layout: {
      display: 'inline-block',
      containerClass: '',
      containerClassFail: 'fail'
    },
  
    load: {
      filter: 'all', // e.g. 'none', '.category-1'
      sort: false // e.g. 'age:desc name:asc'
    },
  
  });