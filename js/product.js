$(".order_btn").mouseover(function() {
    $(this).css("background-color", "#dac997");
    $(this).find("a").css("color", "black");
}).mouseout(function() {
    $(this).css("background-color", "transparent");
    $(this).find("a").css("color", "#dac997");
});

$(".order_btn").click(function() {
  window.location.assign("cart.html");
});