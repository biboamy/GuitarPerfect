var module = angular.module('myApp', []);
module.controller('HeaderController', function($scope, $http) {

    $( window ).load(function() {
      $("#container").load("about.html", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $('#contain div').fadeOut("slow");
                $('#about_contain').fadeIn("slow");
            }
            if (statusTxt == "error") {
                console.log("error");
            }
        });
    });

    $(".product").click(function() {
        $("#slide_menu").slideToggle(1000);
    });

    $(".cookie").click(function() {
        $("#container").load("cookie.html", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $('#contain div').fadeOut("slow");
                $('#cookie_contain').fadeIn("slow");
            }
            if (statusTxt == "error") {
                //alert("Error: " + xhr.status + ": " + xhr.statusText);
            }
        });
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
        $("#container").load("about.html", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $('#contain div').fadeOut("slow");
                $('#about_contain').fadeIn("slow");
            }
            if (statusTxt == "error") {
                console.log("error");
            }
        });
    });
    $(".contact").click(function() {
        $("#container").load("contact.html", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $('#contain div').fadeOut("slow");
                $('#contact_contain').fadeIn("slow");
            }
            if (statusTxt == "error") {
                console.log("error");
            }
        });
    });

});




