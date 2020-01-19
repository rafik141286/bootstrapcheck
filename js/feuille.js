$("document").ready(function()
	 {
	 	$("p").hide();

	 });

$ ("button").click(function(){
	console.log("fff");
	$("#first").fadeIn();
	$("#second").fadeIn("slow");
	$("#third").fadeIn(3000);
});
$("#main").click(function(){
	$("#child").slideDown("slow");
	});