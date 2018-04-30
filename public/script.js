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
// drop scroll
$(function(){
  var header =  $('.dropbtn');

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll >= 50){
      header.addClass('scrolled-drop');
    }
    else if(scroll < 50){
      header.removeClass('scrolled-drop');
    }
    else{
      hearder.removeClass('scrolled-drop');
    }
  });
});
// end scroll
//scroll animation
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
