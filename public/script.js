// Start scroll
$(function(){
  var header =  $('.navbar');

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 50){
      header.addClass('scrolled');
    }
    else if(scroll < 50){
      header.removeClass('scrolled');
    }
    else{
      hearder.removeClass('scrolled');
    }
  });
});
// end scroll
// active
$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
// this currently bumps into issues with the buffer zones I implemented for scroll
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
//end active
//scroll animation
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
//active classes
$('#about-buffer').click(function(event) {
  //target navbar for active
});
