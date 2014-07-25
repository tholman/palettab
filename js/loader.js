// @TODO: Create via colorfonts, and not be a global var.
var loader = (function() {

    'use strict';
    var body, loader, squares;

    var colors = [
    	'#326474',
    	'#263A4A',
    	'#A9D5DE',
    	'#F6EFDC',
    	'#FF5400',
    	'#F6EFDC',
    	'#A9D5DE',
    	'#263A4A',
    	'#326474',
    ]

    var interval;

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

    	interval = setInterval( iterateColors, 300 );
    }

    function iterateColors() {

		var i = 0;
		for( var i; i < colors.length; i++ ) {
			squares[i].style.backgroundColor = colors[i];
		}

		// Move last item in array to first
		colors.splice(0, 0, colors.splice(8, 1)[0]);
    }

    function stop() {
    	clearInterval( interval );
    }

    function main() {

        // Caching
        body             = document.body;
        loader           = document.querySelector( '.loader' );
        squares          = document.querySelectorAll( '.loader .square' );

        // Initialize
        init();
    }

    return extend( main, {
    });

})();