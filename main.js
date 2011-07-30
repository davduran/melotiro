function melotiro(){
	$('.default_message').html("¡Me lo tiro!");
	$('INPUT[value="Me gusta"]').val("¡Me lo tiro!");
}

setInterval(function(){
	melotiro();
},6000);

melotiro();
