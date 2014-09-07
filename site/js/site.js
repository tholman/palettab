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

    this.init = function() {

        bindElements();
        // bindEvents();

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
        cards[0].className = 'card-holster active';
    }

    function bindEvents() {

        setTimeout( function() {
            cards[0].className = 'card-holster active hide';
        }, 1000 );
    }




}

var site = new Palettab();
site.init();