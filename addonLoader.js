+function($){
	$ && $.each(window.__jqueryAddon||[], function(i, js){
		document.write('<script src="'+ js +'"></script>');
	});
}(window.jQuery);