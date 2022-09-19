function openNav(){document.getElementById("myNav").style.width="100%"}function closeNav(){document.getElementById("myNav").style.width="0"}$(document).ready(function(){$(".js--stiky").waypoint(function(a){"down"==a?$(".navbar").addClass("stiky"):$(".navbar").removeClass("stiky")},{offset:"20%"}),$(".js--stiky").waypoint(function(a){"down"==a&&($(".service_a").addClass("activate"),$(".home_a").removeClass("activate")),"up"==a&&($(".service_a").removeClass("activate"),$(".home_a").addClass("activate"))},{offset:"20%"}),$(".team").waypoint(function(a){"down"==a&&($(".team_a").addClass("activate"),$(".service_a").removeClass("activate")),"up"==a&&($(".team_a").removeClass("activate"),$(".service_a").addClass("activate"))},{offset:"20%"}),$(".skills").waypoint(function(a){"down"==a&&($(".skill_a").addClass("activate"),$(".team_a").removeClass("activate")),"up"==a&&($(".skill_a").removeClass("activate"),$(".team_a").addClass("activate"))},{offset:"20%"}),$(".portfolio").waypoint(function(a){"down"==a&&($(".portfolio_a").addClass("activate"),$(".skill_a").removeClass("activate")),"up"==a&&($(".skill_a").addClass("activate"),$(".portfolio_a").removeClass("activate"))},{offset:"20%"}),$(".testimonial").waypoint(function(a){"down"==a&&($(".testimonial_a").addClass("activate"),$(".portfolio_a").removeClass("activate")),"up"==a&&($(".portfolio_a").addClass("activate"),$(".testimonial_a").removeClass("activate"))},{offset:"20%"}),$(".contect").waypoint(function(a){"down"==a&&($(".contect_a").addClass("activate"),$(".testimonial_a").removeClass("activate")),"up"==a&&($(".contect_a").removeClass("activate"),$(".testimonial_a").addClass("activate"))},{offset:"20%"}),mixitup(".mixituup"),$("a").on("click",function(a){if(""!==this.hash){a.perventDefoult();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},500,function(){window.location.hash=t})}})});




$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
  });
  $(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
      // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
      if ( 
          $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
          $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
      ) {
          // Get percentage of progress
          percent = $(value).data('percentage');
          // Get radius of the svg's circle.complete
          radius = $(this).find($('circle.complete')).attr('r');
          // Get circumference (2πr)
          circumference = 2 * Math.PI * radius;
          // Get stroke-dashoffset value based on the percentage of the circumference
          strokeDashOffset = circumference - ((percent * circumference) / 100);
          // Transition progress for 1.25 seconds
          $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
      }
    });
  }).trigger('scroll');