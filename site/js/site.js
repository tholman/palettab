/*!
 * Palettab site!
 *
 * MIT licensed
 * Copyright (C) 2013 Tim Holman, http://tholman.com
 */

function Palettab() {

    var palettes = [
        ['#F9FFA2', '#AAFD6D', '#00E2C5', '#00A7A8', '#312633'],
        // ['#E01B1E', '#FFECA9', '#A4E798', '#009678', '#1C2030'],
        // ['#FFF1BA', '#FFC6AB', '#E02856', '#84294E', '#3B0A2E'],
        ['#511F19', '#612D23', '#00C8D7', '#51E9FF', '#FFF7E9'],
        ['#DCEDE6', '#81CDA3', '#00A7A4', '#045B6E', '#2D2D29']
    ];
    
    // Cards
    var cards;
    var currentSet = 0;
    var lastCard;

    // Colors
    var colors;

    this.init = function() {

        bindElements();
        bindEvents();

   		// Load Twitter
        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

        // Load Facebook
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
    }

    function bindElements() {

        cards = document.querySelectorAll( '.card-holster' );
        colors = document.querySelectorAll( '.colors .color' );
        lastCard = cards.length - 1;
        cards[0].className = 'card-holster active';
    }

    function bindEvents() {

        setInterval( cycle, 3000 );
    }

    function cycle() {
        cycleCards();
        cycleColors();
    }

    // Also cycle the set.
    function cycleCards() {

        cards[ lastCard ].className = 'card-holster lower';

        cards[ currentSet ].className = 'card-holster active higher';
        lastCard = currentSet;
        currentSet++;
        if( currentSet > (cards.length - 1) ) {
            currentSet = 0;
        }

        cards[ currentSet ].className = 'card-holster active';
    }

    function cycleColors() {

        var i = 0;
        for( i; i < colors.length; i++ ) {
            colors[i].style.backgroundColor = palettes[currentSet][i];
        }
    }
}

var site = new Palettab();
site.init();

console.log( "Hey friend, kapow here we are in the console! ~ If you're interested, you can check out the source on github: http://github.com/tholman/palettab" )