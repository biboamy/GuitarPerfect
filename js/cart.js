var ref = new Firebase("https://cookieholic.firebaseio.com/");


$( window ).load(function() {
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
			  check: "none"
			});
			alert("thank you for your order!");
			window.location.assign("index.html");
	    }
	    else{
	    	alert("表格需填完整");
	    }
    
  	});
	$(".about").click(function() {
		window.location.assign("index.html");
	});
	$(".order").click(function() {
		window.location.assign("index.html");
	});
	$(".contact").click(function() {
		window.location.replace("index.html");
		console("hi");
		contact();
		
	});
	$(".cookie").click(function() {
		window.location.assign("index.html");
	});
	$(".cake").click(function() {
		window.location.assign("index.html");
	});
});

function contact(){
	$("#container").load("contact.html", function(responseTxt, statusTxt, xhr) {
            if (statusTxt == "success") {
                $('#contain div').fadeOut("slow");
                $('#contact_contain').fadeIn("slow");
            }
            if (statusTxt == "error") {
                console.log("error");
            }
        });
}
