var module = angular.module('myApp', []);
module.controller('HeaderController', function($scope, $http) {




    $(".product").click(function() {
        $("#slide_menu").slideToggle(1000);
    });

    $(".cookie").click(function() {
        window.location.assign("cookie.html");
    });

    $(".cake").click(function() {
        $("#container").load("cake.html", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $('#contain div').fadeOut("slow");
                $('#cake_contain').fadeIn("slow");
            }
            if (statusTxt == "error") {
                console.log("error");
            }
        });
    });
    $(".about").click(function() {
        window.location.assign("about.html");
    });
    $(".order").click(function() {
        window.location.assign("order.html");
    });
    $(".contact").click(function() {
        window.location.assign("contact.html");
    });

    //cookie
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

    //product
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

    //cart
    var ref = new Firebase("https://cookieholic.firebaseio.com/");



    $(".checkout").click(function() {

        var name = $(this).parent().find(".name_input").val();
        var phone = $(this).parent().find(".phone_input").val();
        var email = $(this).parent().find(".email_input").val();

        var item_1 = $(this).parent().find(".item_1").val();
        var item_2 = $(this).parent().find(".item_2").val();
        var item_3 = $(this).parent().find(".item_3").val();
        var item_4 = $(this).parent().find(".item_4").val();
        var item_5 = $(this).parent().find(".item_5").val();
        var item_6 = $(this).parent().find(".item_6").val();
        var item_7 = $(this).parent().find(".item_7").val();
        var item_8 = $(this).parent().find(".item_8").val();

        if (name != "" && phone != "" && email != "") {
            ref.push({
                name: name,
                phone: phone,
                email: email,
                order: {
                    item_1: item_1,
                    item_2: item_2,
                    item_3: item_3,
                    item_4: item_4,
                    item_5: item_5,
                    item_6: item_6,
                    item_7: item_7,
                    item_8: item_8,
                },
                time: timenow(),
                check: "none"
            });
            alert("thank you for your order!");
            window.location.assign("index.html");
        } else {
            alert("表格需填完整");
        }

    });

function timenow(){
    var now= new Date(), 
    ampm= 'am', 
    h= now.getHours(), 
    m= now.getMinutes(), 
    s= now.getSeconds();
    if(h>= 12){
        if(h>12) h -= 12;
        ampm= 'pm';
    }

    if(m<10) m= '0'+m;
    if(s<10) s= '0'+s;
    return now.toLocaleDateString()+ ' ' + h + ':' + m + ':' + s + ' ' + ampm;
}

});
