/*$(document).ready(function() {
  $('.prev-post').click(function() {
    $(this).toggleClass('prev-post-modal');
    $('body').toggleClass('archive-hide');
  });
});*/

$(document).ready(function() {
  $(".menu").hide();
  $("#m-button").click(function() {
    $(".menu").slideToggle('slow');
  });
});