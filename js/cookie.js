
//general
$(".box").mouseover(function() {
    $(this).find(".mask").show();
}).mouseout(function() {
    $(this).find(".mask").hide();
});


$(".box").click(function() {
    var product_name = $(this).find(".product_name").text();
    var product_img = $(this).find("img").attr('src');
    var product_detail = $(this).find(".product_describe").text();


    $("#container").load("product_template.html", function(responseTxt, statusTxt, xhr) {
      if (statusTxt == "success") {
          $('#contain div').fadeOut("slow");
          $('#product_contain').fadeIn("slow");

          $('.header').text(product_name);
          $(".picture img").attr("src", product_img);
          $('.describe').text(product_detail);
      }
      if (statusTxt == "error") {
          console.log("error");
      }
  });

});


