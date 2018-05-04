$(document).ready(function() {
  setTimeout(function() { $('.a1').addClass('animated bounceInRight block'); }, 100);
  setTimeout(function() { $('.a1').addClass('animated flip block'); }, 500);
  setTimeout(function() { $('.a2').addClass('animated bounceInRight block'); }, 300);
  setTimeout(function() { $('.a2').addClass('animated flip block'); }, 700);
  setTimeout(function() { $('.a3').addClass('animated bounceInRight block'); }, 500);
  setTimeout(function() { $('.a3').addClass('animated flip block'); }, 900);
  setTimeout(function() { $('.a4').addClass('animated bounceInRight block'); }, 700);
  setTimeout(function() { $('.a4').addClass('animated flip block'); }, 1100);
  setTimeout(function() { $('.a5').addClass('animated bounceInRight block'); }, 900);
  setTimeout(function() { $('.a5').addClass('animated flip block'); }, 1300);
  setTimeout(function() { $('.a6').addClass('animated bounceInRight block'); }, 1100);
  setTimeout(function() { $('.a6').addClass('animated flip block'); }, 1500);
  $("#menu").on("click","a", function (event) {
       event.preventDefault();
       var id  = $(this).attr('href'),
           top = $(id).offset().top;
       $('body,html').animate({scrollTop: top}, 1500);
   });
   // $('.examples__grid').masonry({
   //    itemSelector: '.examples__item',
   //    // horizontalOrder: true
   //  });
   var $container = $('.examples__grid');
    $container.imagesLoaded( function() {
        $container.masonry({
            itemSelector: '.examples__item',
        });
        $container.addClass('loaded');
    });
})



