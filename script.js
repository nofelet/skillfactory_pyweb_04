// function set_content_in_divs(paragraphs) {
// 	console.log("entered function")
//     console.log(paragraphs)
      
//     $.each(paragraphs, function(i, d) {
//     	p = $("#p-" + i)
//     	p.html("<p>" + d + "</p>")
//         console.log("i value: " + i)
//         console.log("d value: " + d)
      
//      })
// }

// var par = $.getJSON("http://sf-pyw.mosyag.in/m04/api/forecasts");
// console.log("par value: " + par);
$("h1").click(function() {
	console.log("clicked");
	$.getJSON("https://sf-pyw.mosyag.in/m04/api/forecasts", function(data) {
		console.log("read JSON");
		$.each(data["prophecies"], function(i, d) {
			console.log("i value: ", i);
			console.log("d value: ", d);
			$("#p-" + i).html("<p>" + d + "</p>")
		})
	})
})

$(".col").hover(function() {
	$( this ).addClass( "hover" );
}, function() {
	$( this ).removeClass( "hover" );
});