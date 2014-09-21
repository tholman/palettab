var loader = (function() {

    'use strict';
    var palette;
    var body, loader, squares;
    var interval;

    var initPeriod = 8;

    /* -------------------------
    /* UTILS
    /* -------------------------*/

    // Soft object augmentation
    function extend( target, source ) {

        for ( var key in source ) {
            if ( !( key in target ) ) {
                target[ key ] = source[ key ];
            }
        }

        return target;
    }

    function init() {
    	start();
    }

    function start() {

    	interval = setInterval( iterateColors, 50 );
    }

    function iterateColors() {

		var i = 0;
		for( var i; i < palette.length; i++ ) {
			squares[i].style.backgroundColor = '#' + palette[i];
		}

		// Move last item in array to first
		palette.splice(0, 0, palette.splice(palette.length - 1, 1)[0]);
    }

    function stop() {
    	clearInterval( interval );
        loader.style.display = 'none';
    }

    function main( colors ) {

        // There is always 5 colors.
        palette = [
            colors[0],
            colors[1],
            colors[2],
            colors[3],
            colors[4],
            colors[3],
            colors[2],
            colors[1],
            colors[0]
        ];

        // Caching
        body               = document.body;
        loader             = document.querySelector( '.loader' );
        var squareElements = document.querySelectorAll( '.loader .square' );
        
        // Arranged square elements so they look snake like!
        squares = [
            squareElements[0],
            squareElements[1],
            squareElements[2],
            squareElements[5],
            squareElements[8],
            squareElements[7],
            squareElements[6],
            squareElements[3],
            squareElements[4]
        ]

        // Initialize
        init();
    }

    return extend( main, {
        stop: stop
    });

})();