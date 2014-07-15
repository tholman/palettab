var colorFonts = (function() {

    'use strict';
    var body, colorBars, reloadButton, reloadSvg, textField;

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

        var i = 0;
        for( i; i < colorBars.length; i++ ) {
            colorBars[i].addEventListener( 'click', function( event ) { barClick( event ) } );
        }

        // Bind events
        reloadButton.addEventListener('click', function() { reloadClick() });
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

    function barClick( event ) {
        
        var element = event.srcElement;
        copyText( element.getAttribute('data-color') );
        copySuccess( element );
    }

    // Copy text to clipboard.
    function copyText( text ) {
        textField.textContent = text;
        document.body.appendChild( textField );
        textField.select();
        document.execCommand( 'copy' );
        body.removeChild( textField );
    }

    function copySuccess( element ) {
        console.log( "show success!" );
    }

    function reloadColors() {
        assignColors( colors[ Math.floor( Math.random() * colors.length )].colors );
    }

    function assignColors( colorSet ) {

        var i = 0;
        for( i; i < colorBars.length; i++ ) {
            var bar = colorBars[i];
            bar.style.backgroundColor = colorSet[i];
            bar.setAttribute( 'data-color', colorSet[i] );
        }
    }

    function main() {

        // Caching
        body         = document.body;
        colorBars    = document.querySelectorAll( '.colors .color' );
        reloadButton = document.querySelector( '.reload' );
        reloadSvg    = reloadButton.querySelector( 'svg' );
        textField    = document.createElement( 'textarea' );

        // Initialize
        init();
    }

    return extend( main, {
    });

})();

colorFonts();