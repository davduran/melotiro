(function melotiro(){
	$('.like_link, .cmnt_like_link').parent().html(
		function(index, oldhtml)
		{
			return oldhtml.
				replace('me gusta', 'me lo tiro').
				replace('Me gusta', 'Me lo tiro').
				replace('te gusta', 'te lo tiras').
				replace('os gusta', 'os lo tiráis').
				replace('le gusta', 'se tira').
				replace('les gusta', 'se tiran');
		}
	);
	$('.uiUfiLike div div').parent().html(
		function(index, oldhtml)
		{
			return oldhtml.
				replace('A ', '').
				replace('le gusta', 'se tira').
				replace('les gusta', 'se tiran').
				replace('le gusta', 'se tira').
				replace('os gusta', 'os tiráis');
		}
	);
	setTimeout(
		function()
		{
			melotiro();
		},
		6000
	);
})();
