$.fn.Matrix = function (options) {
    var container = $(this);
    container.addClass("matrix");

    container.children().each(function () {
        $(this)
        .css("-webkit-animation-duration", Math.floor((Math.random() * 20) + 3) + "s")
        .css("animation-duration", Math.floor((Math.random() * 20) + 3) + "s")
        .css("-ms-animation-duration", Math.floor((Math.random() * 20) + 3) + "s")
        .css("-moz-animation-duration", Math.floor((Math.random() * 20) + 3) + "s")
        .css("bottom", Math.floor((Math.random() * parseInt($(container).width())) + 10))
        .css("font-size", Math.floor((Math.random() * 20) + 10) + "px");
    });
};

function toggleMenu() {
  if($(window).width() < 991)
    $('.menu').toggle();
}

$(function() {
    $('.nav-tabs li a').click(function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      $(this).tab('show');
      var body = $("html, body");
      body.stop().animate({scrollTop:0}, 500, 'swing', function() {
      });
    });
    $('#matrix').show();
    $('.logo').fadeIn('slow');
    AOS.init();
    $("#matrix").Matrix();
    $('.shuffleLetters').each(function() {
        var ele = this;

        $(this).on('mouseenter', function() {
            $(this).shuffleLetters({
                "text": $(this).text()
            });
        })
        $(ele).one('inview', function (event, visible) {
            if (visible == true) {
              $(ele).shuffleLetters({
                    "text": $(this).text()
                });
            }
        });
    })

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  $('#intro').on('click', function() {
    $('.intro').slideUp();
    $('#main').slideDown();
  })
  $('#backToTop, #backToTopX').on('click', function() {
    $('.intro').slideDown();
    $('#main').slideUp();
  })

})
