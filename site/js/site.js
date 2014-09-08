/*!
 * site
 *
 * MIT licensed
 * Copyright (C) 2013 Tim Holman, http://tholman.com
 */

/*********************************************
 *
 *********************************************/

function Palettab() {

    var palettes = [[]];
    var cards;
    var currentCard = 0;
    var lastCard;

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
        lastCard = cards.length - 1;
        cards[0].className = 'card-holster active';
    }

    function bindEvents() {

        setInterval( cycleCards, 5000 );
    }

    function cycleCards() {

        cards[ lastCard ].className = 'card-holster lower';

        cards[ currentCard ].className = 'card-holster active higher';
        lastCard = currentCard;
        currentCard++;
        if( currentCard > (cards.length - 1) ) {
            currentCard = 0;
        }


        cards[ currentCard ].className = 'card-holster active';

    }




}

var site = new Palettab();
site.init();