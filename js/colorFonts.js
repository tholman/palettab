var colorFonts = (function() {

    'use strict';
    var colorBars, reloadButton, reloadSvg;

    var rotation = 0;

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

    /* -------------------------
    /* APP
    /* -------------------------*/

    // Initialize
    function init() {

        // Cache elements
        reloadButton = document.querySelector( '.reload' );
        reloadSvg    = reloadButton.querySelector( 'svg' );

        // Bind events
        reloadButton.addEventListener('click', function() { reloadClick() });

        setTimeout( function() {
            reloadColors();
        }, 0 );
    }

    function reloadClick() {

        rotation -= 180;
        reloadSvg.style.webkitTransform = 'rotateZ( ' + rotation + 'deg )';
        reloadColors();
    }

    function reloadColors() {
        assignColors( colors[ Math.floor( Math.random() * colors.length )].colors );
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