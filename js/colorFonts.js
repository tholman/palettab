var colorFonts = (function() {

    'use strict';
    var body, colorBars, colorText, reloadButton, reloadSvg, textField,
        barFonts, fontBlock, barNames, barCreators;

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

        assignFonts();

        setTimeout( function() {
            reloadColors();
        }, 0 );
    }

    function reloadClick() {

        rotation -= 180;
        reloadSvg.style.webkitTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
        reloadColors();
    }

    function barClick( event ) {
        
        var element = event.srcElement;
        copyText( element.getAttribute('data-color') || element.innerHTML );
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

        var colorSet = colors[ Math.floor( Math.random() * colors.length )]; //Random
        assignColors( colorSet.colors );
    }

    function assignColors( colorSet ) {

        var i = 0;
        for( i; i < colorBars.length; i++ ) {
            var bar = colorBars[i];
            var hashColor = '#' + colorSet[i];
            bar.style.backgroundColor = hashColor;
            bar.setAttribute( 'data-color', hashColor );
            colorText[i].innerHTML = hashColor;
        }
    }

    function assignFonts() {

        var i = 0;
        for( i; i < barFonts.length; i++ ) {
            barFonts[i].style.fontFamily = usedFonts[i].name;
            barNames[i].innerHTML        = usedFonts[i].name;
            barCreators[i].innerHTML     = "by " + usedFonts[i].creator;
            fontBlock[i].href            = "http://www.google.com/fonts/specimen/" + usedFonts[i].name
        }
    }

    function main() {

        // Caching
        body             = document.body;
        colorBars        = document.querySelectorAll( '.colors .contents' );
        colorText        = document.querySelectorAll( '.colors .color .hex' );

        fontBlock        = document.querySelectorAll( '.colors .font' );
        barFonts         = document.querySelectorAll( '.colors .font .sample' );
        barNames         = document.querySelectorAll( '.colors .font .name' );
        barCreators      = document.querySelectorAll( '.colors .font .creator' );

        reloadButton     = document.querySelector( '.reload' );
        reloadSvg        = reloadButton.querySelector( 'svg' );
        textField        = document.createElement( 'textarea' );

        // Initialize
        init();
    }

    return extend( main, {
    });

})();

colorFonts();