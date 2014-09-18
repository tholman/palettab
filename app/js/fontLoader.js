var fontLoader = (function( options ) {
  
  var fonts = options;
  var fontSetCount = 5; // 5 cards per screen.
  var availableFonts = [];
  var nextFonts = [];
  var setText = 'AaBbCcg'
  
  // Get the current 5 fonts.
  saveNextFontNames();
  loadFonts();


  function saveNextFontNames() {
    nextFonts = [];
    var i = 0;
    for( i; i < fontSetCount; i++ ) {
      nextFonts.push( fonts[ Math.floor( Math.random() * fonts.length ) ] );
    }
  }

  this.getCurrentFontNames = function() {
    return nextFonts;
  }

  function loadFonts() {
    WebFont.load({
      google: {
        families: [ nextFonts[0].name, nextFonts[1].name, nextFonts[2].name, nextFonts[3].name, nextFonts[4].name ],
        text: setText
      },
      fontinactive: function() {
        loadFail();
      },
      inactive: function() {
        loadFail();
      }
    });
  }

  // Next fonts will be set to null if they fail to load.
  function loadFail() {
    nextFonts = null;
  }

  // Loads the next 5 fonts, to be cached
  function cacheNextFonts() {
    saveNextFontNames();
    loadFonts();
  }

  return {
    getCurrentFontNames: getCurrentFontNames,
    cacheNextFonts: cacheNextFonts
  }


})( fontOptions );