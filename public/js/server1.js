var isInIFrame = ( window.self !== window.top ) ? true : false;

if(! isInIFrame ) {
    var jsData = ["showcase-cta","https:\/\/websitedemos.net\/furniture-shop-04\/wp-content\/plugins\/astra-sites-server\/admin\/showcase-cta\/switcher\/dist\/style-main.css?ver=be07010bac8d77fe6a0e"];
    var style = document.createElement('link');
    style.setAttribute('id', jsData[0]);
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('type', 'text/css');
    style.setAttribute('media', 'all');
    style.setAttribute('href', jsData[1]);

    document.head.appendChild(style);
}