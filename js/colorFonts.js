var colorFonts = (function() {

    'use strict';
    var colorBars;
    var colorSet = [ '#FC0000', '#FFEB98', '#87D292', '#004566', '#191A29' ];

    /* -------------------------
    /*                    UTILS
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

    // Initialize
    function init() {
        
        setTimeout( function() {
            assignColors( colorSet );
        }, 0 );
    }

    function assignColors( colorSet ) {

        var i = 0;
        for( i; i < colorBars.length; i++ ) {
            colorBars[i].style.backgroundColor = colorSet[i];
        }
    }

    function main() {

        // Caching
        colorBars = document.querySelectorAll( '.colors .color' );

        // Initialize
        init();
    }

    return extend( main, {
    });

})();

colorFonts();