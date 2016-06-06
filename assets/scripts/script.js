// functional but lacking in sexy

statusMessage();
worksMessage();
checkMessage();

rocket();
guy();

starsFlicker()

function statusMessage() {
  $("#status").delay(3500).animate({bottom: "1000px"}, 3000).fadeOut(function(){
      $(this).remove();
  });
}

function worksMessage() {
  $("#works").fadeIn(800, function(){
    $(this).delay(500).fadeOut(800, function(){
      $(this).fadeIn(800, function(){
        $(this).delay(500).fadeOut(800, function(){
          $(this).remove();
        });
     });
    });
  });
}

function checkMessage() {
  $("#check").delay(4000).fadeIn('slow');
}

function rocket() {
  $(".rocket").delay(4000).animate({left: "120%"}, 3500);
}

function guy() {
  $(".guy").delay(6000).toggle(".mission").animate({right: "110%"}, 10000);
}

function starsFlicker() {
  var count = 0;
  while (count < 100) {
    $(".star_pink, .star_blue_2").fadeIn(2500).fadeOut(1500);
    $(".star_blue, .star_pink_2").fadeIn(5000).delay(2000).fadeOut(500);
    $(".star_yellow, .star_teal_2").fadeIn(1000).delay(1000).fadeOut(1000);
    $(".star_teal, star_yellow_2").fadeIn(1000).delay(2000).fadeOut(1000);
    count++;
  }
}
