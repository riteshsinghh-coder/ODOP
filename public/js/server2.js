var isInIFrame = ( window.self !== window.top ) ? true : false;

	if(! isInIFrame ) {
		var jsData = ["showcase-cta-google-fonts","\/\/fonts.googleapis.com\/css?family=DM%20Sans%3A400%2C500%2C700&subset=latin%2Clatin-ext"];
		var style = document.createElement('link');
		style.setAttribute('id', jsData[0]);
		style.setAttribute('rel', 'stylesheet');
		style.setAttribute('type', 'text/css');
		style.setAttribute('media', 'all');
		style.setAttribute('href', jsData[1]);

		document.head.appendChild(style);
	}