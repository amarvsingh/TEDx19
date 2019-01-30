
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/speaker18/aditya.png' },
            { src: 'images/speaker18/alif.jpg' },
            { src: 'images/speaker18/colsundaresan.jpg' },
            { src: 'images/speaker18/hemali_vadal.jpg' },
            { src: 'images/speaker18/jayt.jpg' },
            { src: 'images/speaker18/mehak.jpg' },
            { src: 'images/speaker18/nischal_dwivedi.jpg' },
            { src: 'images/speaker18/prasannaseshadri.jpg' },
            { src: 'images/speaker18/shikhar.jpg' },
            { src: 'images/speaker17/abhaagarwal.jpg' },
            { src: 'images/speaker17/ashokrathod.png' },
            { src: 'images/speaker17/chandrashekhar.png' },
            { src: 'images/speaker17/chetansolanki.jpg' },
            { src: 'images/speaker17/hansdalal.jpg' },
            { src: 'images/speaker17/pareshpatel.png' },
            { src: 'images/speaker17/rabiakapoor.jpg' },
            { src: 'images/speaker17/sidharthsthalekar.png' },
            { src: 'images/speaker17/sudhagopalkrishnan.jpg' }
        ],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
    });
  });


  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function() {
      $("#team-carousel").owlCarousel({
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          slideSpeed: 300,
          itemsDesktop : [1199,2],
          itemsTablet: [768,1],
          itemsTabletSmall: [985,2],
          itemsMobile : [479,1],
      });
    });
    

    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

