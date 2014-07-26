var colorFonts = (function() {

    'use strict';
    var body, reloadButton, reloadSvg, textField;

    var colorSet, localLoader;
    var cardElements, cards, cardDivs, cardTop, cardBottom, fontSamples, fontNames, fontCreators, hexValues, eyes;
    var palleteName, palleteCreator, palleteColors;

    var rotation = 0;

    var cardWidth = 250;
    var cardHeight = 430;

    var inertiaNames = [ 'inertia-a', 'inertia-b', 'inertia-x', 'inertia-c', 'inertia-d']

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
        for( i; i < cards.length; i++ ) {
            (function() {
                var card = cards[i];
                cards[i].addEventListener( 'click', function( event ) { barClick( event ) } );
                cardTop[i].addEventListener( 'mouseover', function( event ) { onMouseOverTop( event, card ) });
                cardTop[i].addEventListener( 'mouseout', function( event ) { onMouseOut( event, card ) });
                cardBottom[i].addEventListener( 'mouseover', function( event ) { onMouseOverBottom( event, card ) } );
                cardBottom[i].addEventListener( 'mouseout', function( event ) { onMouseOut( event, card ) });
            })();
        }

        // Bind events
        reloadButton.addEventListener('click', function() { reloadClick() });
        assignFonts();

        initializePositions();

        setTimeout( function() {
            body.style.backgroundColor = '#f8f8f8'; // This fades in the color.
            reloadColors();
            loader( colorSet.colors );
        }, 0 );

        setTimeout( function() {
            revealCards();
        }, 1000 );

        setTimeout( function() {
            loader.stop();
        }, 1500 );

    }

    // Series of timed animations, to reveal the font cards.
    function revealCards() {

        var top = Math.floor(window.innerHeight / 2);
        var center = Math.floor(window.innerWidth / 2);
        var j = 0;
        for( var i = -2; i < 3; i++ ){
            var rotate = i * 6;
            cardElements[j].style.webkitTransform = 'translate3d(' + center + 'px, ' + top + 'px, 0px) rotateZ(' + 0 + 'deg)';
            j++;
        }    

        // @TODO: Do this on animation end, rather than with a timeout.
        setTimeout( function() {
            var top = Math.floor(window.innerHeight / 2);
            var center = Math.floor(window.innerWidth / 2);
            var j = 0;
            for( var i = -2; i < 3; i++ ){
                var left = Math.floor( (center + ( i * (cardWidth + 6) ) ) ) ;
                cardDivs[j].style.webkitAnimation = inertiaNames[j] + ' 600ms';
                cardElements[j].style.webkitTransition = '-webkit-transform 900ms ease';
                cardElements[j].style.webkitTransform = 'translate3d(' + left + 'px, ' + top + 'px, 0px) rotateZ(0deg)';
                j++;
            }            
        }, 900 );

    }

    function initializePositions() {
        var top = window.innerHeight + (cardHeight / 2);
        var left = Math.floor(window.innerWidth / 2);
        
        // Start positions
        for( var i = 0; i < cardElements.length; i++ ) {
            cardElements[i].style.webkitTransform = 'translate3d(' + left + 'px, ' + top + 'px, 0px)';
            cardElements[i].style.display = 'block';
        }

        // Start Z Indexs, there's probably a smart mathy way to do this in the above loop.
        cardElements[0].style.zIndex = 1
        cardElements[1].style.zIndex = 2
        cardElements[2].style.zIndex = 3
        cardElements[3].style.zIndex = 2
        cardElements[4].style.zIndex = 1
    }

    // @TODO: Find a better way that is not constantly adding classes
    function onMouseOverTop( event, element ) {
        element.classList.remove( 'mouse-over-bottom' );
        element.classList.add( 'mouse-over-top' );
    }

    function onMouseOverBottom( event, element ) {
        element.classList.remove( 'mouse-over-top' );
        element.classList.add( 'mouse-over-bottom' );
    }

    // @TODO: Looks like this is firing a lot, is there a way to stop that?
    function onMouseOut( event, element ) {

        element.classList.remove( 'mouse-over-top' );
        element.classList.remove( 'mouse-over-bottom' );
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

    function copyText( text ) {
        textField.textContent = text;
        document.body.appendChild( textField );
        textField.select();
        document.execCommand( 'copy' );
        body.removeChild( textField );
    }

    function copySuccess( element ) {
    }

    function reloadColors() {
        colorSet = colors[ Math.floor( Math.random() * colors.length )]; //Random
        assignColors( colorSet );
    }

    function assignColors( set ) {

        var colorSet = set.colors;

        var i = 0;
        for( i; i < cards.length; i++ ) {
            var card = cards[i];
            var hashColor = '#' + colorSet[i];
            card.setAttribute( 'data-color', hashColor );
            card.style.backgroundColor = hashColor;
            hexValues[i].innerHTML = hashColor;
            eyes[i].style.fill = hashColor;
        }

        for( i = 0; i < palleteColors.length; i++ ) {
            palleteColors[i].style.background = '#' + colorSet[i];
        }

        palleteName.innerHTML    = set.title;
        palleteCreator.innerHTML = "by " + set.userName;
    }

    function assignFonts() {

        var i = 0;
        for( i; i < cards.length; i++ ) {
            fontSamples[i].style.fontFamily = usedFonts[i].name;
            fontNames[i].innerHTML          = usedFonts[i].name;
            fontCreators[i].innerHTML       = "by " + usedFonts[i].creator;
            cardBottom[i].href              = "http://www.google.com/fonts/specimen/" + usedFonts[i].name
        }
    }

    function main() {

        // Caching
        body             = document.body;
        
        // UI
        reloadButton     = document.querySelector( '.reload' );
        reloadSvg        = reloadButton.querySelector( 'svg' );
        textField        = document.createElement( 'textarea' );

        // Cards
        var cardElement     = document.querySelector( '.card-holster' );
        // Clone this card, 4 more times.
        var i = 0;
        for( i; i < 4; i++ ) {

            // console.log( i );
            var newCard = cardElement.cloneNode( true );
            cardElement.parentNode.insertBefore(newCard, cardElement.nextSibling);
        }

        cardElements     = document.querySelectorAll( '.card-holster' );
        cards            = document.querySelectorAll( '.color-wrapper' );
        cardDivs         = document.querySelectorAll( '.card' );

        cardTop          = document.querySelectorAll( '.top-half' );
        cardBottom       = document.querySelectorAll( '.bottom-half' );

        fontSamples      = document.querySelectorAll( '.top-half .font-container' );
        hexValues        = document.querySelectorAll( '.hex-value' );

        fontNames        = document.querySelectorAll( '.name' );
        fontCreators     = document.querySelectorAll( '.creator' );
        eyes             = document.querySelectorAll( '.bottom-half .eye svg path' );

        palleteColors    = document.querySelectorAll( '.sweet-color' );
        palleteName      = document.querySelector( '.pallete-info .name' );
        palleteCreator   = document.querySelector( '.pallete-info .creator' );

        // Initialize
        init();
    }

    return extend( main, {
    });

})();

colorFonts();