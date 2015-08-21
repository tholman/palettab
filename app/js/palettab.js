/**
 * Palettab by Claudio & Tim.
 *  - This is a chrome extension at the moment, so no need for
 *    browser prefixes. Should fix them anyway... but oh well.
 */

var Palettab = (function() {

    'use strict';
    var body, reloadButton, reloadSvg, textField;

    var twitterButton, facebookButton;
    var colorSet;
    var cardSets = [];
    var paletteInfo, paletteName, paletteCreator, paletteColors;

    var rotation = 0;

    var cardWidth = 250;
    var cardHeight = 430;

    var flipped = false;
    var reloadEnabled = true;

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
        for( i; i < cardSets.length; i++ ) {

            (function() {
                var card = cardSets[i];

                card.front.top.addEventListener( 'click', function( event ) { barClick( event, card.front.main ) } );
                card.front.top.addEventListener( 'mouseover', function( event ) { onMouseOverTop( event, card.front.main ) });
                card.front.top.addEventListener( 'mouseout', function( event ) { onMouseOut( event, card.front.main ) });

                card.back.top.addEventListener( 'click', function( event ) { barClick( event, card.back.main ) } );
                card.back.top.addEventListener( 'mouseover', function( event ) { onMouseOverTop( event, card.back.main ) });
                card.back.top.addEventListener( 'mouseout', function( event ) { onMouseOut( event, card.back.main ) });

                card.front.bottom.addEventListener( 'mouseover', function( event ) { onMouseOverBottom( event, card.front.main ) } );
                card.back.bottom.addEventListener( 'mouseover', function( event ) { onMouseOverBottom( event, card.back.main ) } );

                card.front.main.addEventListener( 'mouseout', function( event ) { onMouseOut( event, card.front.main ) });
                card.back.main.addEventListener( 'mouseout', function( event ) { onMouseOut( event, card.back.main ) });

            })();
        }

        // Bind events
        reloadButton.addEventListener('click', function() { reloadClick() });
        window.addEventListener('resize', function() { onResize() });
        assignFonts();
        twitterButton.addEventListener( 'click', function() { twitterClick() });
        facebookButton.addEventListener( 'click', function() { facebookClick() });

        initializePositions();
        positionReload();

        // Nice, a ton of setTimeouts. Cool Tim, What were you thinking?
        setTimeout( function() {
            body.style.backgroundColor = '#f8f8f8'; // This fades in the bg color.
            assignFirstColorSet();
            loader( colorSet.colors );
        }, 0 );

        setTimeout( function() {
            revealCards();
        }, 2000 );

        setTimeout( function() {
            if( window.innerHeight > 650) {
                paletteInfo.style.opacity = 1;
            }
        }, 2200 );

        setTimeout( function() {
            reloadButton.classList.add( 'active' );
            loader.stop();
        }, 2500 );

        setTimeout( function() {
            // Remove main card delays, they won't animate in or out again.
            for( var i = 0; i < 5; i++ ) {
                cardSets[i].main.style.webkitTransitionDelay = '0ms';
                cardSets[i].main.style.webkitTransitionDuration = '0ms';
            }

            reloadButton.style.webkitTransitionDuration = '0ms';
        }, 3000 );
    }

    function onResize() {

        revealCards();
        positionReload();

        // @TODO: Should be media query.
        if (window.innerHeight < 650) {
            paletteInfo.style.opacity = '0';
        } else {
            paletteInfo.style.opacity = '1';
        }
    }

    function positionReload() {

        var modifier = -35;
        if( window.innerHeight < 650) {
            modifier = -25;
        }

        var cardTop = window.innerHeight / 2 - (cardHeight / 2);
        reloadButton.style.top = (( cardTop / 2 ) + modifier) + 'px';
    }

    // Series of timed animations, to reveal the font cards.
    function revealCards() {
        
        cardWidth = cardSets[0].front.main.clientWidth;
        cardHeight = cardSets[0].front.main.clientHeight;

        var modifier = -20;
        if( window.innerHeight < 650) {
            modifier = 0;
        }

        var top = Math.floor(window.innerHeight / 2) + modifier;
        var center = Math.floor(window.innerWidth / 2);
        var j = 0;
        for( var i = -2; i < 3; i++ ){
            var left = Math.floor( (center + ( i * (cardWidth + 6) ) ) ) ;
            cardSets[j].main.style.webkitTransform = 'translate3d(' + left + 'px, ' + top + 'px, 0px)';
            j++;
        }  
    }

    function initializePositions() {
        var top = window.innerHeight + (cardHeight / 2);
        var center = Math.floor(window.innerWidth / 2);
        
        // Start positions
        var j = 0;
        for( var i = -2; i < 3; i++ ){
            var left = Math.floor( (center + ( i * (cardWidth + 6) ) ) ) ;
            cardSets[j].main.style.webkitTransform = 'translate3d(' + left + 'px, ' + top + 'px, 0px)';
            cardSets[j].main.style.display = 'block';
            j++;
        }

        // @TODO: Move into above loop.
        cardSets[0].main.style.zIndex = 1;
        cardSets[1].main.style.zIndex = 2;
        cardSets[2].main.style.zIndex = 3;
        cardSets[3].main.style.zIndex = 2;
        cardSets[4].main.style.zIndex = 1;

        cardSets[0].main.style.webkitTransitionDelay = '300ms';
        cardSets[1].main.style.webkitTransitionDelay = '150ms';
        cardSets[2].main.style.webkitTransitionDelay = '0ms';
        cardSets[3].main.style.webkitTransitionDelay = '150ms';
        cardSets[4].main.style.webkitTransitionDelay = '300ms';
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

        if ( reloadEnabled === false ) {
            return;
        }

        reloadEnabled = false;
        flipped = !flipped;
        rotation -= 180;
        reloadSvg.style.webkitTransform = 'translateZ(0px) rotateZ( ' + rotation + 'deg )';
        reloadColors();
        assignFonts();
        flipCards();

        // Re enable reload after cards flip.
        // @TODO: Should bind on the animationend function.
        setTimeout( enableReload, 1200 );
    }

    function enableReload() {
        reloadEnabled = true;
    }

    function flipCards() {

        var setTo = 'card-holster';
        if( flipped ) {
            setTo = 'card-holster flipped'
        }

        var i = 0;
        for( i; i < cardSets.length; i++ ) {
            cardSets[i].main.className = setTo;
        }
    }

    function barClick( event, card ) {

        var color = card.getAttribute('data-color');
        
        copyText( color );
        triggerCopyAnimation( event, color );
        copySuccess( card );
    }

    function copyText( text ) {
        textField.textContent = text;
        document.body.appendChild( textField );
        textField.select();
        document.execCommand( 'copy' );
        body.removeChild( textField );
    }

    function triggerCopyAnimation( event, color ) {

        var position = {};
        position.x = event.x;
        position.y = event.y;

        var element = document.createElement( 'div' );
        element.className = "expander";
        element.style.left = position.x + 'px';
        element.style.top = position.y + 'px';
        element.style.color = color;
        document.body.appendChild( element );
        element.addEventListener( "webkitAnimationEnd", copyAnimationEnd, false);

        // Debounce activating animation
        setTimeout( function() {
            element.classList.add( 'active' );
        }, 1);
    }

    function copyAnimationEnd( event ) {
        document.body.removeChild( this );
    }

    function copySuccess( card ) {

        var successBox = card.querySelector( '.success-box' );
        successBox.classList.add( 'active' );

        setTimeout( function() {
            successBox.classList.add('out');
            successBox.classList.remove('active');
        }, 2000 );

        setTimeout( function() {
            successBox.classList.remove('out');
        }, 2400 );
    }

    function getColorSet(forceFresh) {
        var index;
        var storedIndex = parseInt(sessionStorage.getItem("lastColorIndex"), 10);

        // We use history.length to determine if the back button was pressed
        // in order to restore the last used color set
        if (history.length > 1 && !isNaN(storedIndex) && !forceFresh) {
            index = storedIndex;
        } else {
            index = Math.floor( Math.random() * colors.length);
        }

        sessionStorage.setItem("lastColorIndex", index);

        return colors[index];
    }

    function reloadColors() {
        colorSet = getColorSet(true);
        assignColors( colorSet );
    }

    // Inefficient way to get a color set that has a small name.
    function assignFirstColorSet() {

        colorSet = getColorSet();
        var maxNameLength = 15;
        while (colorSet.title.length > maxNameLength ) {
            colorSet = getColorSet(true);
        }

        assignColors( colorSet );
    }

    function assignColors( set ) {

        var colorSet = set.colors;

        var i = 0;
        for( i; i < cardSets.length; i++ ) {
            
            var card;
            if( flipped ) {
                card = cardSets[i].back
            } else {
                card = cardSets[i].front
            }

            var hashColor = '#' + colorSet[i];
            card.main.setAttribute( 'data-color', hashColor );
            card.colorWrapper.style.backgroundColor = hashColor;
            card.hex.innerHTML = hashColor;
            card.eye.style.fill = hashColor;
        }

        paletteInfo.href = set.url;

        for( i = 0; i < paletteColors.length; i++ ) {
            paletteColors[i].style.background = '#' + colorSet[i];
        }

        paletteName.innerHTML    = set.title;
        paletteCreator.innerHTML = "by " + set.userName;
    }

    function assignFonts() {

        var i = 0;
        var usedFonts = fontLoader.getCurrentFontNames();

        // Balls fonts failed to load!
        if( usedFonts === null ) {
            onFontLoadFail();
            return;
        }

        for( i; i < cardSets.length; i++ ) {

            var card;
            if( flipped ) {
                card = cardSets[i].back
            } else {
                card = cardSets[i].front
            }
            
            card.top.style.fontFamily  = usedFonts[i].name;
            card.fontName.innerHTML    = usedFonts[i].name;
            card.fontCreator.innerHTML = "by " + usedFonts[i].creator;
            card.bottom.href           = "http://www.google.com/fonts/specimen/" + usedFonts[i].name
        }
        fontLoader.cacheNextFonts();
    }

    // Function called when the fonts don't load (user is probably offline)
    function onFontLoadFail() {
        console.log( "fail!" );
    }

    function twitterClick() {

        var leftPosition, topPosition;
        var width = 600;
        var height = 250;
        leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
        topPosition = (window.screen.height / 2) - ((height / 2) + 50);

        var text = "Palettab, something new with every tab! by @twholman & @claudioguglieri -";
        var url  = "http://palettab.com/";

        var tweet_url = 'https://twitter.com/intent/tweet?text=';
        tweet_url     += encodeURIComponent(text);
        tweet_url     += '&url=' + encodeURIComponent(url);
        window.open( tweet_url, '_blank', "height=250,width=600,modal=yes,alwaysRaised=yes,top=" + topPosition + ',left=' + leftPosition );
    }

    function facebookClick() {

        var leftPosition, topPosition;
        var width = 700;
        var height = 330;
        leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
        topPosition = (window.screen.height / 2) - ((height / 2) + 50);
        var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
        
        var u = 'http://palettab.com/';
        var t = 'Palettab, a chrome extension to bring something new, to the new tab button.';

        window.open('http://www.facebook.com/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t),'sharer', windowFeatures);
    }

    // Yeah, this is a bit excessive, but eh, nicer I feel than 3 functions that do small things.
    function createCard( baseElement ) {

        var card = {};
        card.main = baseElement;
        card.front = {};
        card.back = {};

        card.wrapper = baseElement.querySelector( '.outer-wrapper' );

        card.front.main = baseElement.querySelector( '.front' );
        card.back.main  = baseElement.querySelector( '.back'  );

        card.front.colorWrapper = card.front.main.querySelector( '.color-wrapper' );
        card.back.colorWrapper   = card.back.main.querySelector( '.color-wrapper' );

        card.front.top = card.front.main.querySelector( '.top-half' );
        card.back.top   = card.back.main.querySelector( '.top-half' );

        card.front.bottom = card.front.main.querySelector( '.bottom-half' );
        card.back.bottom  = card.back.main.querySelector( '.bottom-half' );

        card.front.sample = card.front.main.querySelector( '.font-container' );
        card.back.sample  =  card.back.main.querySelector( '.font-container' );

        card.front.hex = card.front.main.querySelector( '.hex-value' );
        card.back.hex  =  card.back.main.querySelector( '.hex-value' );

        card.front.fontName = card.front.main.querySelector( '.name' );
        card.back.fontName  =  card.back.main.querySelector( '.name' );

        card.front.fontCreator = card.front.main.querySelector( '.creator' );
        card.back.fontCreator  =  card.back.main.querySelector( '.creator' );

        card.front.eye = card.front.main.querySelector( '.eye svg path' );
        card.back.eye  =  card.back.main.querySelector( '.eye svg path' );

        return card;
    }

    function main() {

        // Caching
        body             = document.body;
        
        // UI
        reloadButton     = document.querySelector( '.reload' );
        reloadSvg        = reloadButton.querySelector( 'svg' );
        textField        = document.createElement( 'textarea' );

        twitterButton    = document.querySelector( '.share .twitter' );
        facebookButton   = document.querySelector( '.share .facebook' );

        // Cards
        var cardElement  = document.querySelector( '.card-holster' );
        var i = 0;
        for( i; i < 4; i++ ) {
            var newCard = cardElement.cloneNode( true );
            cardElement.parentNode.insertBefore(newCard, cardElement.nextSibling);
        }

        var cardElements = document.querySelectorAll( '.card-holster' );
        for( i = 0; i < cardElements.length; i++ ) {
            var card = createCard( cardElements[i] );
            card.front.main.style["-webkit-transition-delay"] = (( i * 200 ) + 'ms, 0ms');
            card.back.main.style["-webkit-transition-delay"] = (( i * 200 ) + 'ms, 0ms');
            cardSets.push( card );
        }

        paletteColors    = document.querySelectorAll( '.sweet-color' );
        paletteInfo      = document.querySelector( '.palette-info' );
        paletteName      = document.querySelector( '.palette-info .name' );
        paletteCreator   = document.querySelector( '.palette-info .creator' );

        // Initialize
        init();
    }

    return extend( main, {
    });

})();

Palettab();