/*!
 * Palettab
 *
 * fonts.js loads (random) fonts using googles web font loader
 * and assigns to useable variable!
 */

var fontOptions = [
  {
    "name": "Open Sans",
    "creator": "Steve Matteson"
  },
  {
    "name": "Roboto",
    "creator": "Christian Robertson"
  },
  {
    "name": "Oswald",
    "creator": "Vernon Adams"
  },
  {
    "name": "Lato",
    "creator": "Łukasz Dziedzic"
  },
  {
    "name": "Droid Sans",
    "creator": "Steve Matteson"
  },
  {
    "name": "PT Sans",
    "creator": "ParaType"
  },
  {
    "name": "Open Sans Condensed",
    "creator": "Steve Matteson"
  },
  {
    "name": "Roboto Condensed",
    "creator": "Christian Robertson"
  },
  {
    "name": "Source Sans Pro",
    "creator": "Paul D. Hunt"
  },
  {
    "name": "Droid Serif",
    "creator": "Steve Matteson"
  },
  {
    "name": "Ubuntu",
    "creator": "Dalton Maag"
  },
  {
    "name": "Raleway",
    "creator": "Multiple Designers"
  },
  {
    "name": "Montserrat",
    "creator": "Julieta Ulanovsky"
  },
  {
    "name": "PT Sans Narrow",
    "creator": "ParaType"
  },
  {
    "name": "Roboto Slab",
    "creator": "Christian Robertson"
  },
  {
    "name": "Yanone Kaffeesatz",
    "creator": "Yanone"
  },
  {
    "name": "Lobster",
    "creator": "Pablo Impallari",
    "line": 140
  },
  {
    "name": "Arimo",
    "creator": "Steve Matteson"
  },
  {
    "name": "Merriweather",
    "creator": "Eben Sorkin"
  },
  {
    "name": "Lora",
    "creator": "Cyreal"
  },
  {
    "name": "Arvo",
    "creator": "Anton Koovit"
  },
  {
    "name": "Bitter",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Francois One",
    "creator": "Vernon Adams"
  },
  {
    "name": "Oxygen",
    "creator": "Vernon Adams"
  },
  {
    "name": "PT Serif",
    "creator": "ParaType"
  },
  {
    "name": "Dosis",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Shadows Into Light",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Titillium Web",
    "creator": "Multiple Designers"
  },
  {
    "name": "Noto Sans",
    "creator": "Google"
  },
  {
    "name": "Indie Flower",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Cabin",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Signika",
    "creator": "Anna Giedryś"
  },
  {
    "name": "Archivo Narrow",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Fjalla One",
    "creator": "Sorkin Type"
  },
  {
    "name": "Ubuntu Condensed",
    "creator": "Dalton Maag"
  },
  {
    "name": "Inconsolata",
    "creator": "Raph Levien"
  },
  {
    "name": "Play",
    "creator": "Jonas Hecksher"
  },
  {
    "name": "Abel",
    "creator": "MADType"
  },
  {
    "name": "Muli",
    "creator": "Vernon Adams"
  },
  {
    "name": "Nunito",
    "creator": "Vernon Adams"
  },
  {
    "name": "Playfair Display",
    "creator": "Claus Eggers Sørensen",
    "line": 130
  },
  {
    "name": "Cuprum",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Varela Round",
    "creator": "Joe Prince"
  },
  {
    "name": "Rokkitt",
    "creator": "Vernon Adams"
  },
  {
    "name": "Anton",
    "creator": "Vernon Adams"
  },
  {
    "name": "Libre Baskerville",
    "creator": "Impallari Type"
  },
  {
    "name": "Maven Pro",
    "creator": "Joe Prince"
  },
  {
    "name": "Hammersmith One",
    "creator": "Sorkin Type"
  },
  {
    "name": "Pacifico",
    "creator": "Vernon Adams"
  },
  {
    "name": "Bree Serif",
    "creator": "TypeTogether"
  },
  {
    "name": "Asap",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Audiowide",
    "creator": "Astigmatic"
  },
  {
    "name": "Josefin Sans",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Gloria Hallelujah",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Vollkorn",
    "creator": "Friedrich Althausen"
  },
  {
    "name": "Merriweather Sans",
    "creator": "Eben Sorkin"
  },
  {
    "name": "Armata",
    "creator": "Viktoriya Grabowska"
  },
  {
    "name": "Dancing Script",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Droid Sans Mono",
    "creator": "Steve Matteson"
  },
  {
    "name": "Questrial",
    "creator": "Joe Prince"
  },
  {
    "name": "Noto Serif",
    "creator": "Google"
  },
  {
    "name": "Quicksand",
    "creator": "Andrew Paglinawan"
  },
  {
    "name": "PT Sans Caption",
    "creator": "ParaType"
  },
  {
    "name": "Karla",
    "creator": "Jonny Pinhorn"
  },
  {
    "name": "Alegreya",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Quattrocento Sans",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Playfair Display SC",
    "creator": "Claus Eggers Sørensen",
    "line": 130
  },
  {
    "name": "News Cycle",
    "creator": "Nathan Willis"
  },
  {
    "name": "Poiret One",
    "creator": "Denis Masharov"
  },
  {
    "name": "Coming Soon",
    "creator": "Open Window"
  },
  {
    "name": "Exo",
    "creator": "Natanael Gama"
  },
  {
    "name": "Ubuntu Mono",
    "creator": "Dalton Maag"
  },
  {
    "name": "Changa One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Nobile",
    "creator": "Vernon Adams"
  },
  {
    "name": "Cabin Condensed",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Ropa Sans",
    "creator": "Botio Nikoltchev"
  },
  // {
  //   "name": "Crafty Girls",
  //   "creator": "Tart Workshop"
  // },
  {
    "name": "Pathway Gothic One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Pontano Sans",
    "creator": "Vernon Adams"
  },
  {
    "name": "Monda",
    "creator": "Vernon Adams"
  },
  {
    "name": "Gudea",
    "creator": "Agustina Mingote"
  },
  {
    "name": "Sanchez",
    "creator": "Daniel Hernandez"
  },
  {
    "name": "Istok Web",
    "creator": "Andrey V. Panov"
  },
  {
    "name": "Squada One",
    "creator": "Joe Prince"
  },
  {
    "name": "Kreon",
    "creator": "Julia Petretta"
  },
  {
    "name": "Noticia Text",
    "creator": "JM Solé"
  },
  {
    "name": "Playball",
    "creator": "TypeSETit"
  },
  {
    "name": "Permanent Marker",
    "creator": "Font Diner"
  },
  {
    "name": "Philosopher",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Bubblegum Sans",
    "creator": "Sudtipos",
    "line": 159
  },
  {
    "name": "Cantarell",
    "creator": "Dave Crossland"
  },
  {
    "name": "Chewy",
    "creator": "Sideshow"
  },
  {
    "name": "Crimson Text",
    "creator": "Sebastian Kosch"
  },
  {
    "name": "Old Standard TT",
    "creator": "Alexey Kryukov"
  },
  {
    "name": "Crete Round",
    "creator": "TypeTogether"
  },
  {
    "name": "Patua One",
    "creator": "LatinoType"
  },
  {
    "name": "Josefin Slab",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Righteous",
    "creator": "Astigmatic",
    "line": 144
  },
  // {
  //   "name": "Rock Salt",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Varela",
    "creator": "Joe Prince"
  },
  {
    "name": "Shadows Into Light Two",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Rambla",
    "creator": "Martin Sommaruga",
    "line": 154
  },
  {
    "name": "Vidaloka",
    "creator": "Cyreal"
  },
  {
    "name": "BenchNine",
    "creator": "Vernon Adams"
  },
  {
    "name": "Economica",
    "creator": "Vicente Lamónaca"
  },
  {
    "name": "Lemon",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Tinos",
    "creator": "Steve Matteson"
  },
  {
    "name": "Black Ops One",
    "creator": "James Grieshaber"
  },
  // {
  //   "name": "Luckiest Guy",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Comfortaa",
    "creator": "Johan Aakerlund"
  },
  {
    "name": "Actor",
    "creator": "Thomas Junold"
  },
  {
    "name": "Lobster Two",
    "creator": "Pablo Impallari",
    "line": 140
  },
  {
    "name": "Amatic SC",
    "creator": "Vernon Adams"
  },
  {
    "name": "Oleo Script",
    "creator": "soytutype fonts"
  },
  // {
  //   "name": "Bangers",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Lusitana",
    "creator": "Ana Paula Megda"
  },
  {
    "name": "Marck Script",
    "creator": "Denis Masharov"
  },
  // {
  //   "name": "Cinzel",
  //   "creator": "Natanael Gama",
  //   "line": 158
  // },
  {
    "name": "Bevan",
    "creator": "Vernon Adams"
  },
  {
    "name": "EB Garamond",
    "creator": "Georg Duffner"
  },
  {
    "name": "Handlee",
    "creator": "Joe Prince"
  },
  {
    "name": "Montserrat Alternates",
    "creator": "Julieta Ulanovsky"
  },
  {
    "name": "Fredoka One",
    "creator": "Milena Brandao"
  },
  {
    "name": "Paytone One",
    "creator": "Vernon Adams"
  },
  // {
  //   "name": "Alfa Slab One",
  //   "creator": "JM Solé"
  // },
  {
    "name": "Source Code Pro",
    "creator": "Paul D. Hunt"
  },
  {
    "name": "Voltaire",
    "creator": "Yvonne Schüttler"
  },
  {
    "name": "Glegoo",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Calligraffitti",
    "creator": "Open Window"
  },
  {
    "name": "Cardo",
    "creator": "David Perry"
  },
  {
    "name": "Orbitron",
    "creator": "Matt McInerney"
  },
  {
    "name": "Passion One",
    "creator": "Fontstage"
  },
  {
    "name": "Amaranth",
    "creator": "Gesine Todt"
  },
  {
    "name": "Didact Gothic",
    "creator": "Daniel Johnson"
  },
  {
    "name": "Yellowtail",
    "creator": "Astigmatic"
  },
  {
    "name": "Antic Slab",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Molengo",
    "creator": "Denis Jacquerye"
  },
  {
    "name": "Archivo Black",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Quattrocento",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Satisfy",
    "creator": "Sideshow"
  },
  {
    "name": "Jockey One",
    "creator": "TypeTogether"
  },
  {
    "name": "Marvel",
    "creator": "Carolina Trebol"
  },
  {
    "name": "Scada",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Exo 2",
    "creator": "Natanael Gama"
  },
  {
    "name": "Architects Daughter",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Unkempt",
    "creator": "Sideshow"
  },
  {
    "name": "Gentium Book Basic",
    "creator": "Victor Gaultney"
  },
  {
    "name": "Pinyon Script",
    "creator": "Nicole Fally",
    "line": 172
  },
  {
    "name": "Copse",
    "creator": "Dan Rhatigan"
  },
  {
    "name": "Domine",
    "creator": "Impallari Type"
  },
  {
    "name": "Enriqueta",
    "creator": "FontFuror"
  },
  {
    "name": "Kaushan Script",
    "creator": "Pablo Impallari"
  },
  // {
  //   "name": "Syncopate",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Signika Negative",
    "creator": "Anna Giedryś"
  },
  {
    "name": "Waiting for the Sunrise",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Sintony",
    "creator": "Eduardo Rodriguez Tunni"
  },
  {
    "name": "Cherry Cream Soda",
    "creator": "Font Diner"
  },
  {
    "name": "Coda",
    "creator": "Vernon Adams"
  },
  {
    "name": "Reenie Beanie",
    "creator": "James Grieshaber"
  },
  {
    "name": "Patrick Hand",
    "creator": "Patrick Wagesreiter"
  },
  {
    "name": "Chivo",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Covered By Your Grace",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Overlock",
    "creator": "Dario Manuel Muhafara"
  },
  {
    "name": "Tangerine",
    "creator": "Toshi Omagari"
  },
  {
    "name": "Russo One",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Sorts Mill Goudy",
    "creator": "Barry Schwartz"
  },
  // {
  //   "name": "Michroma",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Love Ya Like A Sister",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Carme",
    "creator": "Rubén Prol"
  },
  {
    "name": "Rancho",
    "creator": "Sideshow"
  },
  {
    "name": "Neuton",
    "creator": "Brian Zick"
  },
  {
    "name": "Courgette",
    "creator": "Karolina Lach"
  },
  {
    "name": "Allerta",
    "creator": "Matt McInerney"
  },
  {
    "name": "Damion",
    "creator": "Vernon Adams"
  },
  {
    "name": "Gochi Hand",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Jura",
    "creator": "Daniel Johnson"
  },
  {
    "name": "Carrois Gothic",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Doppio One",
    "creator": "Szymon Celej"
  },
  // {
  //   "name": "Sigmar One",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Goudy Bookletter 1911",
    "creator": "Barry Schwartz"
  },
  {
    "name": "Cantata One",
    "creator": "Joana Correia da Silva"
  },
  {
    "name": "Berkshire Swash",
    "creator": "Astigmatic"
  },
  {
    "name": "Niconne",
    "creator": "Vernon Adams"
  },
  {
    "name": "Fauna One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Kameron",
    "creator": "Vernon Adams"
  },
  // {
  //   "name": "Walter Turncoat",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Strait",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Electrolize",
    "creator": "Gaslight"
  },
  {
    "name": "Marmelad",
    "creator": "Cyreal"
  },
  {
    "name": "Just Another Hand",
    "creator": "Astigmatic"
  },
  {
    "name": "Viga",
    "creator": "Fontstage"
  },
  {
    "name": "Neucha",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Great Vibes",
    "creator": "TypeSETit"
  },
  {
    "name": "Aldrich",
    "creator": "MADType"
  },
  {
    "name": "ABeeZee",
    "creator": "Anja Meiners"
  },
  {
    "name": "Spinnaker",
    "creator": "Elena Albertoni"
  },
  {
    "name": "Telex",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Bad Script",
    "creator": "Gaslight"
  },
  {
    "name": "Alegreya Sans",
    "creator": "Juan Pablo del Peral"
  },
  {
    "name": "Rosario",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Share",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Nothing You Could Do",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Just Me Again Down Here",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Limelight",
    "creator": "Sorkin Type"
  },
  {
    "name": "Julius Sans One",
    "creator": "Luciano Vergara"
  },
  {
    "name": "Schoolbell",
    "creator": "Font Diner"
  },
  {
    "name": "Volkhov",
    "creator": "Cyreal"
  },
  {
    "name": "Belleza",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Gentium Basic",
    "creator": "Victor Gaultney"
  },
  {
    "name": "Nova Square",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Judson",
    "creator": "Daniel Johnson"
  },
  {
    "name": "Prata",
    "creator": "Cyreal"
  },
  {
    "name": "Rochester",
    "creator": "Sideshow",
    "line": 137
  },
  {
    "name": "Coda Caption",
    "creator": "Vernon Adams"
  },
  {
    "name": "Fugaz One",
    "creator": "LatinoType"
  },
  {
    "name": "Allerta Stencil",
    "creator": "Matt McInerney"
  },
  {
    "name": "Coustard",
    "creator": "Vernon Adams"
  },
  {
    "name": "Abril Fatface",
    "creator": "TypeTogether"
  },
  {
    "name": "Orienta",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Aclonica",
    "creator": "Astigmatic"
  },
  {
    "name": "Trocchi",
    "creator": "Vernon Adams"
  },
  {
    "name": "Candal",
    "creator": "Vernon Adams"
  },
  {
    "name": "Advent Pro",
    "creator": "Andreas Kalpakidis"
  },
  {
    "name": "Racing Sans One",
    "creator": "Impallari Type"
  },
  {
    "name": "Ruda",
    "creator": "Multiple Designers"
  },
  {
    "name": "Tauri",
    "creator": "Yvonne Schüttler"
  },
  {
    "name": "Nixie One",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Sansita One",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Mako",
    "creator": "Vernon Adams"
  },
  {
    "name": "Convergence",
    "creator": "Multiple Designers"
  },
  {
    "name": "Cutive",
    "creator": "Vernon Adams"
  },
  {
    "name": "Arbutus Slab",
    "creator": "Karolina Lach"
  },
  {
    "name": "Radley",
    "creator": "Vernon Adams"
  },
  {
    "name": "Sacramento",
    "creator": "Astigmatic",
    "line": 179
  },
  {
    "name": "Alike",
    "creator": "Cyreal"
  },
  {
    "name": "PT Serif Caption",
    "creator": "ParaType"
  },
  {
    "name": "Cookie",
    "creator": "Ania Kruk"
  },
  {
    "name": "Spirax",
    "creator": "Brenda Gallo",
    "line": 150
  },
  // {
  //   "name": "Griffy",
  //   "creator": "Neapolitan"
  // },
  {
    "name": "Boogaloo",
    "creator": "John Vargas Beltrán"
  },
  {
    "name": "Six Caps",
    "creator": "Vernon Adams"
  },
  {
    "name": "Contrail One",
    "creator": "Riccardo De Franceschi"
  },
  {
    "name": "Inder",
    "creator": "Sorkin Type"
  },
  {
    "name": "Duru Sans",
    "creator": "Onur Yazıcıgil"
  },
  {
    "name": "Arapey",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Merienda One",
    "creator": "Eduardo Tunni"
  },
  // {
  //   "name": "Fontdiner Swanky",
  //   "creator": "Font Diner"
  // },
  {
    "name": "The Girl Next Door",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Homenaje",
    "creator": "Multiple Designers"
  },
  {
    "name": "Cabin Sketch",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Parisienne",
    "creator": "Astigmatic"
  },
  {
    "name": "Puritan",
    "creator": "Ben Weiner"
  },
  {
    "name": "Caudex",
    "creator": "Nidud"
  },
  {
    "name": "Alice",
    "creator": "Cyreal"
  },
  {
    "name": "Allura",
    "creator": "TypeSETit",
    "line": 183
  },
  {
    "name": "Iceland",
    "creator": "Cyreal"
  },
  {
    "name": "Metrophobic",
    "creator": "Vernon Adams"
  },
  {
    "name": "Fanwood Text",
    "creator": "Barry Schwartz"
  },
  {
    "name": "Adamina",
    "creator": "Cyreal"
  },
  {
    "name": "Basic",
    "creator": "Magnus Gaarde"
  },
  {
    "name": "Fredericka the Great",
    "creator": "Tart Workshop"
  },
  {
    "name": "Crushed",
    "creator": "Astigmatic"
  },
  {
    "name": "Anaheim",
    "creator": "Vernon Adams"
  },
  {
    "name": "Lustria",
    "creator": "MADType"
  },
  {
    "name": "Lily Script One",
    "creator": "Julia Petretta"
  },
  {
    "name": "Alegreya Sans SC",
    "creator": "Juan Pablo del Peral"
  },
  // {
  //   "name": "IM Fell English",
  //   "creator": "Igino Marini"
  // },
  {
    "name": "Tenor Sans",
    "creator": "Denis Masharov"
  },
  {
    "name": "Lekton",
    "creator": "Multiple Designers"
  },
  {
    "name": "Ultra",
    "creator": "Astigmatic"
  },
  {
    "name": "Cousine",
    "creator": "Steve Matteson"
  },
  // {
  //   "name": "Slackey",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Grand Hotel",
    "creator": "Astigmatic",
    "line": 159
  },
  // {
  //   "name": "Gruppo",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Brawler",
    "creator": "Cyreal"
  },
  {
    "name": "Average Sans",
    "creator": "Eduardo Tunni"
  },
  // {
  //   "name": "Frijole",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Leckerli One",
    "creator": "Gesine Todt",
    "line": 144
  },
  // {
  //   "name": "Days One",
  //   "creator": "Jovanny Lemonad"
  // },
  {
    "name": "Sancreek",
    "creator": "Vernon Adams"
  },
  {
    "name": "Yesteryear",
    "creator": "Astigmatic"
  },
  {
    "name": "Kristi",
    "creator": "Birgit Pulk"
  },
  {
    "name": "Ovo",
    "creator": "Nicole Fally",
    "line": 157
  },
  {
    "name": "Kranky",
    "creator": "Sideshow"
  },
  {
    "name": "Shanti",
    "creator": "Vernon Adams"
  },
  {
    "name": "Imprima",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Alef",
    "creator": "Hagilda"
  },
  {
    "name": "Tienne",
    "creator": "Vernon Adams"
  },
  {
    "name": "Sue Ellen Francisco",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Forum",
    "creator": "Denis Masharov",
    "line": 157
  },
  {
    "name": "Petit Formal Script",
    "creator": "Impallari Type"
  },
  {
    "name": "Montez",
    "creator": "Astigmatic"
  },
  {
    "name": "Pompiere",
    "creator": "Karolina Lach",
    "line": 150
  },
  {
    "name": "Loved by the King",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Magra",
    "creator": "FontFuror"
  },
  {
    "name": "Anonymous Pro",
    "creator": "Mark Simonson"
  },
  {
    "name": "Carrois Gothic SC",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Federo",
    "creator": "Cyreal"
  },
  {
    "name": "Delius",
    "creator": "Natalia Raices"
  },
  {
    "name": "Alex Brush",
    "creator": "TypeSETit"
  },
  {
    "name": "Bentham",
    "creator": "Ben Weiner"
  },
  {
    "name": "Lilita One",
    "creator": "Juan Montoreano"
  },
  {
    "name": "Kavoon",
    "creator": "Viktoriya Grabowska"
  },
  {
    "name": "Englebert",
    "creator": "Astigmatic",
    "line": 190
  },
  {
    "name": "Simonetta",
    "creator": "Brownfox"
  },
  {
    "name": "Quando",
    "creator": "Joana Correia da Silva"
  },
  {
    "name": "Yeseva One",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Allan",
    "creator": "Anton Koovit"
  },
  {
    "name": "Share Tech",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Fenix",
    "creator": "Fernando Díaz"
  },
  {
    "name": "Andada",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Andika",
    "creator": "Annie Olsen"
  },
  {
    "name": "Podkova",
    "creator": "Cyreal"
  },
  {
    "name": "Marcellus SC",
    "creator": "Astigmatic"
  },
  {
    "name": "Acme",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "La Belle Aurore",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Kotta One",
    "creator": "Ania Kruk"
  },
  {
    "name": "Annie Use Your Telescope",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Alegreya SC",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Wire One",
    "creator": "Cyreal"
  },
  {
    "name": "Corben",
    "creator": "Vernon Adams"
  },
  {
    "name": "Headland One",
    "creator": "Gary Lonergan"
  },
  {
    "name": "Kelly Slab",
    "creator": "Denis Masharov"
  },
  {
    "name": "Merienda",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Carter One",
    "creator": "Vernon Adams"
  },
  {
    "name": "Metamorphous",
    "creator": "James Grieshaber"
  },
  // {
  //   "name": "Cinzel Decorative",
  //   "creator": "Natanael Gama"
  // },
  {
    "name": "Capriola",
    "creator": "Viktoriya Grabowska"
  },
  // {
  //   "name": "IM Fell DW Pica",
  //   "creator": "Igino Marini"
  // },
  {
    "name": "Mountains of Christmas",
    "creator": "Tart Workshop"
  },
  // {
  //   "name": "Wendy One",
  //   "creator": "Alejandro Inler"
  // },
  {
    "name": "Give You Glory",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Codystar",
    "creator": "Neapolitan"
  },
  // {
  //   "name": "Sunshiney",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Gafata",
    "creator": "Lautaro Hourcade"
  },
  {
    "name": "Chau Philomene One",
    "creator": "Vicente Lamonaca"
  },
  // {
  //   "name": "Short Stack",
  //   "creator": "James Grieshaber"
  // },
  {
    "name": "Oranienbaum",
    "creator": "Multiple Designers"
  },
  {
    "name": "Over the Rainbow",
    "creator": "Kimberly Geswein"
  },
  // {
  //   "name": "Holtwood One SC",
  //   "creator": "Vernon Adams"
  // },
  // {
  //   "name": "Bowlby One",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Graduate",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Antic",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Salsa",
    "creator": "John Vargas Beltrán"
  },
  {
    "name": "Quantico",
    "creator": "MADType"
  },
  {
    "name": "Marcellus",
    "creator": "Astigmatic"
  },
  {
    "name": "Expletus Sans",
    "creator": "Jasper de Waard"
  },
  {
    "name": "Cantora One",
    "creator": "Impallari Type"
  },
  // {
  //   "name": "IM Fell DW Pica SC",
  //   "creator": "Igino Marini"
  // },
  {
    "name": "UnifrakturMaguntia",
    "creator": "j. 'mach' wust"
  },
  // {
  //   "name": "Chelsea Market",
  //   "creator": "Tart Workshop"
  // },
  {
    "name": "Denk One",
    "creator": "Sorkin Type"
  },
  {
    "name": "Dawning of a New Day",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Patrick Hand SC",
    "creator": "Patrick Wagesreiter"
  },
  {
    "name": "Stardos Stencil",
    "creator": "Vernon Adams"
  },
  {
    "name": "Tulpen One",
    "creator": "Naima Ben Ayed",
    "line": 153
  },
  {
    "name": "Cedarville Cursive",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Maiden Orange",
    "creator": "Astigmatic"
  },
  {
    "name": "Poly",
    "creator": "Nicolás Silva"
  },
  {
    "name": "Happy Monkey",
    "creator": "Brenda Gallo"
  },
  // {
  //   "name": "Prosto One",
  //   "creator": "Multiple Designers"
  // },
  {
    "name": "Nova Mono",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Vibur",
    "creator": "Johan Kallas"
  },
  {
    "name": "Monoton",
    "creator": "Vernon Adams"
  },
  {
    "name": "Delius Swash Caps",
    "creator": "Natalia Raices"
  },
  {
    "name": "Averia Sans Libre",
    "creator": "Dan Sayers"
  },
  // {
  //   "name": "VT323",
  //   "creator": "Peter Hull"
  // },
  {
    "name": "Megrim",
    "creator": "Daniel Johnson",
    "line": 148
  },
  {
    "name": "Average",
    "creator": "Eduardo Tunni"
  },
  // {
  //   "name": "IM Fell English SC",
  //   "creator": "Igino Marini"
  // },
  {
    "name": "Norican",
    "creator": "Vernon Adams"
  },
  {
    "name": "Rationale",
    "creator": "Cyreal"
  },
  {
    "name": "Geo",
    "creator": "Ben Weiner"
  },
  {
    "name": "Rufina",
    "creator": "Martin Sommaruga"
  },
  {
    "name": "Baumans",
    "creator": "Cyreal"
  },
  {
    "name": "Italianno",
    "creator": "TypeSETit",
    "line": 187
  },
  {
    "name": "IM Fell Double Pica",
    "creator": "Igino Marini"
  },
  {
    "name": "Finger Paint",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Text Me One",
    "creator": "Julia Petretta"
  },
  {
    "name": "Skranji",
    "creator": "Neapolitan"
  },
  {
    "name": "Gilda Display",
    "creator": "Eduardo Tunni"
  },
  // {
  //   "name": "Bowlby One SC",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Port Lligat Slab",
    "creator": "Tipo"
  },
  {
    "name": "Arizonia",
    "creator": "TypeSETit",
    "line": 162
  },
  {
    "name": "Oregano",
    "creator": "Astigmatic"
  },
  {
    "name": "IM Fell French Canon",
    "creator": "Igino Marini"
  },
  // {
  //   "name": "Freckle Face",
  //   "creator": "Astigmatic"
  // },
  // {
  //   "name": "Vast Shadow",
  //   "creator": "Nicole Fally"
  // },
  {
    "name": "Voces",
    "creator": "Multiple Designers"
  },
  {
    "name": "Unna",
    "creator": "Omnibus-Type"
  },
  // {
  //   "name": "Wallpoet",
  //   "creator": "Lars Berggren"
  // },
  {
    "name": "Redressed",
    "creator": "Astigmatic"
  },
  {
    "name": "Miltonian Tattoo",
    "creator": "Pablo Impallari"
  },
  // {
  //   "name": "Meddon",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Kite One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Mate SC",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Clicker Script",
    "creator": "Astigmatic"
  },
  {
    "name": "Press Start 2P",
    "creator": "CodeMan38"
  },
  {
    "name": "Sniglet",
    "creator": "Haley Fiege"
  },
  // {
  //   "name": "Delius Unicase",
  //   "creator": "Natalia Raices"
  // },
  {
    "name": "Flamenco",
    "creator": "LatinoType"
  },
  {
    "name": "Mr De Haviland",
    "creator": "Sudtipos"
  },
  {
    "name": "Dorsa",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Nova Round",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Belgrano",
    "creator": "LatinoType"
  },
  {
    "name": "Gravitas One",
    "creator": "Sorkin Type"
  },
  {
    "name": "PT Mono",
    "creator": "ParaType"
  },
  {
    "name": "Numans",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Snippet",
    "creator": "Gesine Todt"
  },
  {
    "name": "Poller One",
    "creator": "Yvonne Schüttler"
  },
  {
    "name": "Buenard",
    "creator": "FontFuror"
  },
  {
    "name": "Buda",
    "creator": "Adèle Antignac"
  },
  {
    "name": "Ledger",
    "creator": "Denis Masharov"
  },
  // {
  //   "name": "IM Fell Great Primer SC",
  //   "creator": "Igino Marini"
  // },
  {
    "name": "Qwigley",
    "creator": "TypeSETit"
  },
  {
    "name": "Swanky and Moo Moo",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Bilbo Swash Caps",
    "creator": "TypeSETit"
  },
  {
    "name": "Shojumaru",
    "creator": "Astigmatic"
  },
  // {
  //   "name": "Henny Penny",
  //   "creator": "Brownfox"
  // },
  {
    "name": "UnifrakturCook",
    "creator": "j. 'mach' wust"
  },
  {
    "name": "Oleo Script Swash Caps",
    "creator": "soytutype fonts"
  },
  {
    "name": "Sofadi One",
    "creator": "Botjo Nikoltchev"
  },
  {
    "name": "Sofia",
    "creator": "LatinoType"
  },
  {
    "name": "Amethysta",
    "creator": "Cyreal"
  },
  {
    "name": "Ceviche One",
    "creator": "LatinoType"
  },
  // {
  //   "name": "Cutive Mono",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Fjord One",
    "creator": "Viktoriya Grabowska"
  },
  {
    "name": "Zeyada",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Mouse Memoirs",
    "creator": "Astigmatic"
  },
  {
    "name": "Artifika",
    "creator": "Cyreal"
  },
  {
    "name": "Londrina Solid",
    "creator": "Marcelo Magalhães"
  },
  {
    "name": "MedievalSharp",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Concert One",
    "creator": "Multiple Designers"
  },
  {
    "name": "Dynalight",
    "creator": "Astigmatic",
    "line": 161
  },
  {
    "name": "Linden Hill",
    "creator": "Barry Schwartz"
  },
  {
    "name": "IM Fell French Canon SC",
    "creator": "Igino Marini"
  },
  // {
  //   "name": "Ruslan Display",
  //   "creator": "Denis Masharov"
  // },
  {
    "name": "IM Fell Great Primer",
    "creator": "Igino Marini"
  },
  {
    "name": "Quintessential",
    "creator": "Astigmatic"
  },
  {
    "name": "Petrona",
    "creator": "Ringo Romei"
  },
  {
    "name": "Alike Angular",
    "creator": "Cyreal"
  },
  {
    "name": "Mate",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Mr Dafoe",
    "creator": "Sudtipos"
  },
  {
    "name": "Euphoria Script",
    "creator": "Sabrina Mariela Lopez"
  },
  {
    "name": "Unica One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Donegal One",
    "creator": "Gary Lonergan"
  },
  {
    "name": "Astloch",
    "creator": "Dan Rhatigan"
  },
  {
    "name": "Oxygen Mono",
    "creator": "Vernon Adams"
  },
  // {
  //   "name": "Monofett",
  //   "creator": "Vernon Adams"
  // },
  // {
  //   "name": "Rammetto One",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Oldenburg",
    "creator": "Nicole Fally"
  },
  {
    "name": "Gabriela",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "League Script",
    "creator": "Haley Fiege"
  },
  {
    "name": "Julee",
    "creator": "Julian Tunni"
  },
  // {
  //   "name": "Irish Grover",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Nova Slim",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Balthazar",
    "creator": "Dario Manuel Muhafara"
  },
  {
    "name": "Mystery Quest",
    "creator": "Sideshow"
  },
  {
    "name": "Inika",
    "creator": "Constanza Artigas"
  },
  {
    "name": "Kenia",
    "creator": "Julia Petretta"
  },
  // {
  //   "name": "Galindo",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Overlock SC",
    "creator": "Dario Manuel Muhafara"
  },
  {
    "name": "Junge",
    "creator": "Cyreal"
  },
  {
    "name": "Prociono",
    "creator": "Barry Schwartz"
  },
  {
    "name": "Sail",
    "creator": "LatinoType",
    "line": 151
  },
  {
    "name": "Nova Script",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Engagement",
    "creator": "Astigmatic"
  },
  {
    "name": "Bigshot One",
    "creator": "Gesine Todt"
  },
  {
    "name": "Rosarivo",
    "creator": "Pablo Ugerman"
  },
  {
    "name": "Revalia",
    "creator": "Multiple Designers"
  },
  {
    "name": "Knewave",
    "creator": "Tyler Finck"
  },
  {
    "name": "Cambo",
    "creator": "Huerta Tipográfica"
  },
  // {
  //   "name": "Geostar Fill",
  //   "creator": "Joe Prince"
  // },
  {
    "name": "Medula One",
    "creator": "LatinoType",
    "line": 147
  },
  {
    "name": "IM Fell Double Pica SC",
    "creator": "Igino Marini"
  },
  {
    "name": "Amarante",
    "creator": "Karolina Lach"
  },
  {
    "name": "Montaga",
    "creator": "Alejandra Rodriguez"
  },
  // {
  //   "name": "Trade Winds",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Smythe",
    "creator": "Vernon Adams"
  },
  {
    "name": "Nova Flat",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Cagliostro",
    "creator": "MADType"
  },
  // {
  //   "name": "Chango",
  //   "creator": "Fontstage"
  // },
  {
    "name": "Life Savers",
    "creator": "Impallari Type"
  },
  {
    "name": "Modern Antiqua",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Aladin",
    "creator": "Sudtipos"
  },
  {
    "name": "Lancelot",
    "creator": "Marion Kadi"
  },
  // {
  //   "name": "Seaweed Script",
  //   "creator": "Neapolitan"
  // },
  // {
  //   "name": "Goblin One",
  //   "creator": "Sorkin Type"
  // },
  {
    "name": "Rouge Script",
    "creator": "Sabrina Mariela Lopez",
    "line": 159
  },
  {
    "name": "Nova Oval",
    "creator": "Wojciech Kalinowski"
  },
  // {
  //   "name": "Creepster",
  //   "creator": "Sideshow"
  // },
  // {
  //   "name": "Smokum",
  //   "creator": "Astigmatic"
  // },
  // {
  //   "name": "Geostar",
  //   "creator": "Joe Prince"
  // },
  // {
  //   "name": "Passero One",
  //   "creator": "Viktoriya Grabowska"
  // },
  {
    "name": "Trochut",
    "creator": "Andreu Balius"
  },
  {
    "name": "Bilbo",
    "creator": "TypeSETit"
  },
  // {
  //   "name": "Condiment",
  //   "creator": "Sudtipos",
  //   "line": 191
  // },
  {
    "name": "Stint Ultra Condensed",
    "creator": "Astigmatic"
  },
  {
    "name": "Aubrey",
    "creator": "Cyreal"
  },
  {
    "name": "Galdeano",
    "creator": "Dario Manuel Muhafara"
  },
  {
    "name": "Rye",
    "creator": "Nicole Fally"
  },
  {
    "name": "Atomic Age",
    "creator": "James Grieshaber"
  },
  {
    "name": "Federant",
    "creator": "Cyreal"
  },
  {
    "name": "Stoke",
    "creator": "Nicole Fally"
  },
  {
    "name": "Miltonian",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Jacques Francois",
    "creator": "Cyreal"
  },
  {
    "name": "Nova Cut",
    "creator": "Wojciech Kalinowski"
  },
  // {
  //   "name": "Sonsie One",
  //   "creator": "Riccardo De Franceschi"
  // },
  {
    "name": "Habibi",
    "creator": "Magnus Gaarde"
  },
  {
    "name": "Iceberg",
    "creator": "Cyreal"
  },
  {
    "name": "Offside",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Raleway Dots",
    "creator": "Multiple Designers",
    "line": 142
  },
  {
    "name": "Supermercado One",
    "creator": "James Grieshaber"
  },
  {
    "name": "Milonga",
    "creator": "Impallari Type"
  },
  {
    "name": "Port Lligat Sans",
    "creator": "Tipo"
  },
  {
    "name": "Della Respira",
    "creator": "Nathan Willis"
  },
  {
    "name": "Esteban",
    "creator": "Angélica Díaz"
  },
  {
    "name": "Molle",
    "creator": "Elena Albertoni"
  },
  {
    "name": "Ruluko",
    "creator": "Multiple Designers"
  },
  {
    "name": "Devonshire",
    "creator": "Astigmatic"
  },
  {
    "name": "Pirata One",
    "creator": "Multiple Designers"
  },
  {
    "name": "Titan One",
    "creator": "Rodrigo Fuenzalida"
  },
  {
    "name": "Cherry Swash",
    "creator": "Nataliya Kasatkina"
  },
  {
    "name": "Aguafina Script",
    "creator": "Sudtipos"
  },
  {
    "name": "Fondamento",
    "creator": "Astigmatic"
  },
  {
    "name": "Paprika",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Lovers Quarrel",
    "creator": "TypeSETit",
    "line": 184
  },
  // {
  //   "name": "Seymour One",
  //   "creator": "Vernon Adams"
  // },
  {
    "name": "Monsieur La Doulaise",
    "creator": "Sudtipos",
    "line": 163
  },
  {
    "name": "Trykker",
    "creator": "Magnus Gaarde"
  },
  {
    "name": "Chela One",
    "creator": "Miguel Hernandez"
  },
  {
    "name": "Averia Libre",
    "creator": "Dan Sayers"
  },
  {
    "name": "Averia Serif Libre",
    "creator": "Dan Sayers"
  },
  {
    "name": "Miniver",
    "creator": "Open Window"
  },
  // {
  //   "name": "Snowburst One",
  //   "creator": "Annet Stirling"
  // },
  {
    "name": "Keania One",
    "creator": "Julia Petretta"
  },
  {
    "name": "Fresca",
    "creator": "Fontstage"
  },
  {
    "name": "Ranchers",
    "creator": "Impallari Type"
  },
  // {
  //   "name": "Ribeye Marrow",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Share Tech Mono",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Wellfleet",
    "creator": "Riccardo De Franceschi"
  },
  // {
  //   "name": "Krona One",
  //   "creator": "Yvonne Schüttler"
  // },
  {
    "name": "Ruthie",
    "creator": "TypeSETit"
  },
  {
    "name": "McLaren",
    "creator": "Astigmatic"
  },
  {
    "name": "Germania One",
    "creator": "John Vargas Beltrán"
  },
  // {
  //   "name": "Caesar Dressing",
  //   "creator": "Open Window"
  // },
  {
    "name": "Londrina Shadow",
    "creator": "Marcelo Magalhães"
  },
  {
    "name": "Jacques Francois Shadow",
    "creator": "Cyreal"
  },
  {
    "name": "Jolly Lodger",
    "creator": "Font Diner"
  },
  {
    "name": "Antic Didone",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Rum Raisin",
    "creator": "Astigmatic"
  },
  // {
  //   "name": "Joti One",
  //   "creator": "Eduardo Tunni"
  // },
  {
    "name": "Asul",
    "creator": "Mariela Monsalve",
    "line": 148
  },
  {
    "name": "Mrs Saint Delafield",
    "creator": "Sudtipos"
  },
  {
    "name": "Italiana",
    "creator": "Santiago Orozco",
    "line": 149
  },
  {
    "name": "Marko One",
    "creator": "Cyreal"
  },
  // {
  //   "name": "Nosifer",
  //   "creator": "Typomondo"
  // },
  {
    "name": "Croissant One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Original Surfer",
    "creator": "Astigmatic"
  },
  {
    "name": "Gorditas",
    "creator": "Gustavo Dipre"
  },
  {
    "name": "Eagle Lake",
    "creator": "Astigmatic"
  },
  {
    "name": "Elsie Swash Caps",
    "creator": "Alejandro Inler",
    "line": 158
  },
  // {
  //   "name": "Montserrat Subrayada",
  //   "creator": "Julieta Ulanovsky"
  // },
  {
    "name": "Autour One",
    "creator": "Eben Sorkin"
  },
  // {
  //   "name": "Stint Ultra Expanded",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Ek Mukta",
    "creator": "Ek Type"
  },
  // {
  //   "name": "Spicy Rice",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Emblema One",
    "creator": "Riccardo De Franceschi"
  },
  {
    "name": "Meie Script",
    "creator": "Multiple Designers"
  },
  {
    "name": "Glass Antiqua",
    "creator": "Denis Masharov",
    "line": 154
  },
  {
    "name": "Sarina",
    "creator": "James Grieshaber"
  },
  {
    "name": "Londrina Sketch",
    "creator": "Marcelo Magalhães"
  },
  {
    "name": "Elsie",
    "creator": "Alejandro Inler",
    "line": 158
  },
  {
    "name": "Almendra",
    "creator": "Ana Sanfelippo"
  },
  {
    "name": "Fira Sans",
    "creator": "Carrois and Edenspiekermann"
  },
  // {
  //   "name": "Emilys Candy",
  //   "creator": "Neapolitan"
  // },
  {
    "name": "Sirin Stencil",
    "creator": "Cyreal",
    "line": 126
  },
  // {
  //   "name": "Eater",
  //   "creator": "Typomondo"
  // },
  {
    "name": "Stalemate",
    "creator": "Astigmatic",
    "line": 186
  },
  // {
  //   "name": "Diplomata",
  //   "creator": "Eduardo Tunni"
  // },
  {
    "name": "Akronim",
    "creator": "Grzegorz Klimczewski",
    "line": 174
  },
  {
    "name": "Mrs Sheppards",
    "creator": "Sudtipos",
    "line": 160
  },
  {
    "name": "Combo",
    "creator": "Eduardo Tunni"
  },
  // {
  //   "name": "Peralta",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Bubbler One",
    "creator": "Brenda Gallo"
  },
  {
    "name": "Ewert",
    "creator": "Multiple Designers"
  },
  {
    "name": "Butterfly Kids",
    "creator": "Tart Workshop"
  },
  {
    "name": "Romanesco",
    "creator": "Astigmatic"
  },
  {
    "name": "Chicle",
    "creator": "Sudtipos"
  },
  // {
  //   "name": "Risque",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Sevillana",
    "creator": "Brownfox",
    "line": 151
  },
  {
    "name": "Ribeye",
    "creator": "Astigmatic"
  },
  {
    "name": "Bigelow Rules",
    "creator": "Astigmatic"
  },
  // {
  //   "name": "Princess Sofia",
  //   "creator": "Tart Workshop"
  // },
  {
    "name": "Macondo Swash Caps",
    "creator": "John Vargas Beltrán"
  },
  {
    "name": "Dr Sugiyama",
    "creator": "Sudtipos"
  },
  {
    "name": "Herr Von Muellerhoff",
    "creator": "Sudtipos"
  },
  {
    "name": "Purple Purse",
    "creator": "Astigmatic"
  },
  {
    "name": "Felipa",
    "creator": "Fontstage"
  },
  // {
  //   "name": "New Rocker",
  //   "creator": "Impallari Type"
  // },
  // {
  //   "name": "Margarine",
  //   "creator": "Astigmatic"
  // },
  // {
  //   "name": "Faster One",
  //   "creator": "Eduardo Tunni"
  // },
  {
    "name": "Mr Bedfort",
    "creator": "Sudtipos"
  },
  {
    "name": "Fascinate",
    "creator": "Astigmatic"
  },
  // {
  //   "name": "Vampiro One",
  //   "creator": "Riccardo De Franceschi"
  // },
  // {
  //   "name": "Metal Mania",
  //   "creator": "Open Window"
  // },
  {
    "name": "Averia Gruesa Libre",
    "creator": "Dan Sayers"
  },
  {
    "name": "Jim Nightshade",
    "creator": "Astigmatic"
  },
  {
    "name": "Miss Fajardose",
    "creator": "Sudtipos",
    "line": 170
  },
  // {
  //   "name": "Diplomata SC",
  //   "creator": "Eduardo Tunni"
  // },
  // {
  //   "name": "Stalinist One",
  //   "creator": "Multiple Designers"
  // },
  {
    "name": "Uncial Antiqua",
    "creator": "Astigmatic",
    "line": 152
  },
  {
    "name": "Underdog",
    "creator": "Multiple Designers"
  },
  // {
  //   "name": "Butcherman",
  //   "creator": "Typomondo"
  // },
  {
    "name": "Almendra SC",
    "creator": "Ana Sanfelippo"
  },
  {
    "name": "Macondo",
    "creator": "John Vargas Beltrán"
  },
  // {
  //   "name": "Flavors",
  //   "creator": "Sideshow"
  // },
  {
    "name": "Fira Mono",
    "creator": "Carrois and Edenspiekermann"
  },
  {
    "name": "Ruge Boogie",
    "creator": "TypeSETit"
  },
  // {
  //   "name": "Unlock",
  //   "creator": "Eduardo Tunni"
  // },
  {
    "name": "Source Serif Pro",
    "creator": "Frank Grießhammer"
  },
  // {
  //   "name": "Arbutus",
  //   "creator": "Karolina Lach"
  // },
  {
    "name": "Fascinate Inline",
    "creator": "Astigmatic",
    "line": 142
  },
  // {
  //   "name": "Fruktur",
  //   "creator": "Viktoriya Grabowska"
  // },
  {
    "name": "Erica One",
    "creator": "LatinoType"
  },
  {
    "name": "Bonbon",
    "creator": "Cyreal",
    "line": 167
  },
  {
    "name": "Rubik One",
    "creator": "Hubert and Fischer"
  },
  // {
  //   "name": "Hanalei",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Hind",
    "creator": "Indian Type Foundry"
  },
  {
    "name": "Kalam",
    "creator": "Indian Type Foundry"
  },
  {
    "name": "Rajdhani",
    "creator": "Indian Type Foundry"
  },
  {
    "name": "Almendra Display",
    "creator": "Ana Sanfelippo"
  },
  // {
  //   "name": "Hanalei Fill",
  //   "creator": "Astigmatic"
  // },
  {
    "name": "Plaster",
    "creator": "Eben Sorkin"
  },
  {
    "name": "Teko",
    "creator": "Indian Type Foundry"
  },
  {
    "name": "Karma",
    "creator": "Indian Type Foundry"
  },
  // {
  //   "name": "Rubik Mono One",
  //   "creator": "Hubert and Fischer"
  // },
  {
    "name": "Warnes",
    "creator": "Eduardo Tunni"
  }
]