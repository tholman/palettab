var colorFonts = (function() {

    'use strict';

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
        
    }

    function main() {

        // Caching

        // Initialize
        init();
    }

    return extend( main, {
    });

})();

colorFonts();