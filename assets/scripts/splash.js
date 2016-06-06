$("a").click(function(event) {

  $("span").text("CONFIRMED").css({
    "font-weight": "bold"
});
  $(".container-fluid").fadeOut(1500);

  event.preventDefault();
  var url = $(this).attr("href");

  setTimeout(function() {
    window.location = url;
  }, 500);
});

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

starsFlicker();
