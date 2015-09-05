(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/***
  *   PostCSS Plugin List
  *
  *   A consolidated list of PostCSS Plugins
  *   for the community to share/export/use
  *
  *   Feel free to add and make changes!
  *
  *   Schema:  {
  *     name        : "name-of-plugin",
  *     url         : "http://cool-plugin-link.com",
  *     description : "It gives your CSS superpowers",
  *     tags        : [ 'colors', 'grids', 'lions', tigers', 'bears' ]
  *   }
  *
  */

module.exports = require('./plugins.json');

},{"./plugins.json":2}],2:[function(require,module,exports){
module.exports=[
  {
    "name": "atcss",
    "url": "https://github.com/morishitter/atcss",
    "description": "Plugin pack that transforms your CSS according to special annotation comments.",
    "tags": [
      "pack"
    ],
    "author": "morishitter"
  },
  {
    "name": "cssnano",
    "url": "https://github.com/ben-eb/cssnano",
    "description": "Plugin pack that optimizes CSS size for use in production.",
    "tags": [
      "pack"
    ],
    "author": "ben-eb"
  },
  {
    "name": "cssnext",
    "url": "https://github.com/cssnext/cssnext/",
    "description": "Plugin pack that allows you to use future CSS features today.",
    "tags": [
      "pack",
      "future"
    ],
    "author": "cssnext"
  },
  {
    "name": "precss",
    "url": "https://github.com/jonathantneal/precss",
    "description": "Plugin pack that allows you to use Sass-like CSS.",
    "tags": [
      "pack",
      "sass"
    ],
    "author": "jonathantneal"
  },
  {
    "name": "rucksack",
    "url": "https://github.com/simplaio/rucksack",
    "description": "Plugin pack to speeds up CSS development with new features and shortcuts.",
    "tags": [
      "pack",
      "future"
    ],
    "author": "simplaio"
  },
  {
    "name": "stylelint",
    "url": "https://github.com/stylelint/stylelint",
    "description": "Plugin pack that lints your stylesheets.",
    "tags": [
      "pack",
      "debug"
    ],
    "author": "stylelint"
  },
  {
    "name": "postcss-color-function",
    "url": "https://github.com/postcss/postcss-color-function",
    "description": "Supports functions to transform colors.",
    "tags": [
      "future",
      "color"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-color-gray",
    "url": "https://github.com/postcss/postcss-color-gray",
    "description": "Supports the gray() function.",
    "tags": [
      "future",
      "color"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-color-hex-alpha",
    "url": "https://github.com/postcss/postcss-color-hex-alpha",
    "description": "Supports #rrggbbaa and #rgba notation.",
    "tags": [
      "color"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-color-hwb",
    "url": "https://github.com/postcss/postcss-color-hwb",
    "description": "Transforms hwb() to widely compatible rgb().",
    "tags": [
      "color"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-color-rebeccapurple",
    "url": "https://github.com/postcss/postcss-color-rebeccapurple",
    "description": "Supports the rebeccapurple color.",
    "tags": [
      "future",
      "color"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-colors-only",
    "url": "https://github.com/rsanchez/postcss-colors-only",
    "description": "Removes all rules except those which contain one or more colors.",
    "tags": [
      "color"
    ],
    "author": "rsanchez"
  },
  {
    "name": "postcss-conic-gradient",
    "url": "https://github.com/jonathantneal/postcss-conic-gradient",
    "description": "Supports the conic-gradient background.",
    "tags": [
      "future",
      "color"
    ],
    "author": "jonathantneal"
  },
  {
    "name": "postcss-custom-media",
    "url": "https://github.com/postcss/postcss-custom-media",
    "description": "Supports custom aliases for media queries.",
    "tags": [
      "future",
      "media-queries"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-custom-properties",
    "url": "https://github.com/postcss/postcss-custom-properties",
    "description": "Supports variables, using syntax from the W3C Custom Properties.",
    "tags": [
      "future"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-custom-selectors",
    "url": "https://github.com/postcss/postcss-custom-selectors",
    "description": "Adds custom aliases for selectors.",
    "tags": [
      "future"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-extend",
    "url": "https://github.com/travco/postcss-extend",
    "description": "Supports spec-approximate @extend for rules and placeholders, recursively.",
    "tags": [
      "future"
    ],
    "author": "travco"
  },
  {
    "name": "postcss-font-variant",
    "url": "https://github.com/postcss/postcss-font-variant",
    "description": "Transpiles human-readable font-variant to more widely supported CSS.",
    "tags": [
      "future",
      "fonts"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-host",
    "url": "https://github.com/vitkarpov/postcss-host",
    "description": "Makes the Shadow DOM :host selector work properly with pseudo-classes.",
    "tags": [
      "future"
    ],
    "author": "vitkarpov"
  },
  {
    "name": "postcss-initial",
    "url": "https://github.com/maximkoretskiy/postcss-initial",
    "description": "supports `initial` keyword and `all: initial` to clean inherit styles.",
    "tags": [
      "future"
    ],
    "author": "maximkoretskiy"
  },
  {
    "name": "postcss-media-minmax",
    "url": "https://github.com/postcss/postcss-media-minmax",
    "description": "Adds <= and => statements to media queries.",
    "tags": [
      "media-queries"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-pseudo-class-any-link",
    "url": "https://github.com/jonathantneal/postcss-pseudo-class-any-link",
    "description": "Adds :any-link pseudo-class.",
    "tags": [
      "future"
    ],
    "author": "jonathantneal"
  },
  {
    "name": "postcss-selector-not",
    "url": "https://github.com/postcss/postcss-selector-not",
    "description": "Transforms CSS4 :not() to CSS3 :not()",
    "tags": [
      "future"
    ],
    "author": "postcss"
  },
  {
    "name": "mq4-hover-shim",
    "url": "https://github.com/twbs/mq4-hover-shim",
    "description": "Supports the @media(hover) feature.",
    "tags": [
      "future",
      "media-queries"
    ],
    "author": "twbs"
  },
  {
    "name": "postcss-color-rgba-fallback",
    "url": "https://github.com/postcss/postcss-color-rgba-fallback",
    "description": "Transforms rgba() to hexadecimal.",
    "tags": [
      "color",
      "fallbacks"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-epub",
    "url": "https://github.com/Rycochet/postcss-epub",
    "description": "Adds the -epub- prefix to relevant properties.",
    "tags": [
      "fallbacks",
      "media-queries"
    ],
    "author": "Rycochet"
  },
  {
    "name": "postcss-opacity",
    "url": "https://github.com/iamvdo/postcss-opacity",
    "description": "Adds opacity filter for IE8.",
    "tags": [
      "fallbacks"
    ],
    "author": "iamvdo"
  },
  {
    "name": "postcss-pseudoelements",
    "url": "https://github.com/axa-ch/postcss-pseudoelements",
    "description": "Convert :: selectors into : selectors for IE 8 compatibility.",
    "tags": [
      "fallbacks"
    ],
    "author": "axa-ch"
  },
  {
    "name": "postcss-vmin",
    "url": "https://github.com/iamvdo/postcss-vmin",
    "description": "Generates vm fallback for vmin unit in IE9.",
    "tags": [
      "fallbacks"
    ],
    "author": "iamvdo"
  },
  {
    "name": "postcss-will-change",
    "url": "https://github.com/postcss/postcss-will-change",
    "description": "Inserts 3D hack before will-change property.",
    "tags": [
      "fallbacks"
    ],
    "author": "postcss"
  },
  {
    "name": "autoprefixer",
    "url": "https://github.com/postcss/autoprefixer",
    "description": "Adds vendor prefixes for you, using data from Can I Use.",
    "tags": [
      "fallbacks"
    ],
    "author": "postcss"
  },
  {
    "name": "cssgrace",
    "url": "https://github.com/cssdream/cssgrace",
    "description": "Provides various helpers and transpiles CSS 3 for IE and other old browsers.",
    "tags": [
      "fallbacks"
    ],
    "author": "cssdream"
  },
  {
    "name": "pixrem",
    "url": "https://github.com/robwierzbowski/node-pixrem",
    "description": "Generates pixel fallbacks for rem units.",
    "tags": [
      "fallbacks"
    ],
    "author": "robwierzbowski"
  },
  {
    "name": "postcss-bem",
    "url": "https://github.com/ileri/postcss-bem",
    "description": "Adds at-rules for BEM and SUIT style classes.",
    "tags": [
      "extensions"
    ],
    "author": "ileri"
  },
  {
    "name": "postcss-conditionals",
    "url": "https://github.com/andyjansson/postcss-conditionals",
    "description": "Adds @if statements.",
    "tags": [
      "extensions"
    ],
    "author": "andyjansson"
  },
  {
    "name": "postcss-css-variables",
    "url": "https://github.com/MadLittleMods/postcss-css-variables",
    "description": "Supports variables for selectors, and at-rules using W3C similar syntax.",
    "tags": [
      "extensions"
    ],
    "author": "MadLittleMods"
  },
  {
    "name": "postcss-define-property",
    "url": "https://github.com/daleeidd/postcss-define-property",
    "description": "To define properties shortcut.",
    "tags": [
      "extensions"
    ],
    "author": "daleeidd"
  },
  {
    "name": "postcss-each",
    "url": "https://github.com/outpunk/postcss-each",
    "description": "Adds @each statement.",
    "tags": [
      "extensions"
    ],
    "author": "outpunk"
  },
  {
    "name": "postcss-for",
    "url": "https://github.com/antyakushev/postcss-for",
    "description": "Adds @for loops.",
    "tags": [
      "extensions"
    ],
    "author": "antyakushev"
  },
  {
    "name": "postcss-functions",
    "url": "https://github.com/andyjansson/postcss-functions",
    "description": "enables exposure of JavaScript functions.",
    "tags": [
      "extensions"
    ],
    "author": "andyjansson"
  },
  {
    "name": "postcss-local-constants",
    "url": "https://github.com/macropodhq/postcss-local-constants",
    "description": "Adds support for localized constants.",
    "tags": [
      "extensions"
    ],
    "author": "macropodhq"
  },
  {
    "name": "postcss-match",
    "url": "https://github.com/rtsao/postcss-match",
    "description": "adds @match for Rust-style pattern matching.",
    "tags": [
      "extensions"
    ],
    "author": "rtsao"
  },
  {
    "name": "postcss-map",
    "url": "https://github.com/pascalduez/postcss-map",
    "description": "Enables configuration maps.",
    "tags": [
      "extensions"
    ],
    "author": "pascalduez"
  },
  {
    "name": "postcss-mixins",
    "url": "https://github.com/postcss/postcss-mixins",
    "description": "Enables mixins more powerful than Sass', defined within stylesheets or in JS.",
    "tags": [
      "extensions",
      "sass"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-media-variables",
    "url": "https://github.com/WolfgangKluge/postcss-media-variables",
    "description": "Adds support for var() and calc() in @media rules.",
    "tags": [
      "extensions",
      "media-queries"
    ],
    "author": "WolfgangKluge"
  },
  {
    "name": "postcss-modular-scale",
    "url": "https://github.com/kristoferjoseph/postcss-modular-scale",
    "description": "Adds a modular scale ms() function.",
    "tags": [
      "extensions"
    ],
    "author": "kristoferjoseph"
  },
  {
    "name": "postcss-nested",
    "url": "https://github.com/postcss/postcss-nested",
    "description": "Unwraps nested rules.",
    "tags": [
      "extensions",
      "sass"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-nested-props",
    "url": "https://github.com/jedmao/postcss-nested-props",
    "description": "Unwraps nested properties.",
    "tags": [
      "extensions"
    ],
    "author": "jedmao"
  },
  {
    "name": "postcss-pseudo-class-enter",
    "url": "https://github.com/jonathantneal/postcss-pseudo-class-enter",
    "description": "Transforms :enter into :hover and :focus.",
    "tags": [
      "extensions"
    ],
    "author": "jonathantneal"
  },
  {
    "name": "postcss-quantity-queries",
    "url": "https://github.com/pascalduez/postcss-quantity-queries",
    "description": "Enables quantity queries.",
    "tags": [
      "extensions",
      "sass"
    ],
    "author": "pascalduez"
  },
  {
    "name": "postcss-sassy-mixins",
    "url": "https://github.com/andyjansson/postcss-sassy-mixins",
    "description": "Enables mixins with Sass keywords.",
    "tags": [
      "extensions",
      "sass"
    ],
    "author": "andyjansson"
  },
  {
    "name": "postcss-simple-extend",
    "url": "https://github.com/davidtheclark/postcss-simple-extend",
    "description": "Lightweight extending of silent classes, like Sass' @extend.",
    "tags": [
      "extensions",
      "sass"
    ],
    "author": "davidtheclark"
  },
  {
    "name": "postcss-simple-vars",
    "url": "https://github.com/postcss/postcss-simple-vars",
    "description": "Supports for Sass-style variables.",
    "tags": [
      "extensions",
      "sass"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-strip-units",
    "url": "https://github.com/whitneyit/postcss-strip-units",
    "description": "Strips units off of property values.",
    "tags": [
      "extensions"
    ],
    "author": "whitneyit"
  },
  {
    "name": "postcss-vertical-rhythm",
    "url": "https://github.com/markgoodyear/postcss-vertical-rhythm",
    "description": "Adds a vertical rhythm unit based on font-size and line-height.",
    "tags": [
      "extensions"
    ],
    "author": "markgoodyear"
  },
  {
    "name": "csstyle",
    "url": "https://github.com/geddski/csstyle",
    "description": "Adds components workflow to your styles.",
    "tags": [
      "extensions"
    ],
    "author": "geddski"
  },
  {
    "name": "postcss-gtk",
    "url": "https://github.com/1j01/postcss-gtk",
    "description": "Processes GTK+ CSS into browser CSS.",
    "tags": [
      "https://github.com/1j01/postcss-gtk"
    ],
    "author": "1j01"
  },
  {
    "name": "postcss-ase-colors",
    "url": "https://github.com/dfernandez79/postcss-ase-colors",
    "description": "replaces color names with values read from an ASE palette file.",
    "tags": [
      "color"
    ],
    "author": "dfernandez79"
  },
  {
    "name": "postcss-brand-colors",
    "url": "https://github.com/postcss/postcss-brand-colors",
    "description": "Inserts company brand colors in the brand-colors module.",
    "tags": [
      "color"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-color-alpha",
    "url": "https://github.com/avanes/postcss-color-alpha",
    "description": "Transforms #hex.a, black(alpha) and white(alpha) to rgba().",
    "tags": [
      "color"
    ],
    "author": "avanes"
  },
  {
    "name": "postcss-color-hcl",
    "url": "https://github.com/devgru/postcss-color-hcl",
    "description": "Transforms hcl(H, C, L) and hcl(H, C, L, alpha) to #rgb and #rgba.",
    "tags": [
      "color"
    ],
    "author": "devgru"
  },
  {
    "name": "postcss-color-hexa",
    "url": "https://github.com/nicksheffield/postcss-color-hexa",
    "description": "Transforms hexa(hex, alpha) into rgba() format.",
    "tags": [
      "color"
    ],
    "author": "nicksheffield"
  },
  {
    "name": "postcss-color-mix",
    "url": "https://github.com/iamstarkov/postcss-color-mix",
    "description": "Mixes two colors together.",
    "tags": [
      "color"
    ],
    "author": "iamstarkov"
  },
  {
    "name": "postcss-color-palette",
    "url": "https://github.com/zaim/postcss-color-palette",
    "description": "Transforms CSS 2 color keywords to a custom palette.",
    "tags": [
      "color"
    ],
    "author": "zaim"
  },
  {
    "name": "postcss-color-pantone",
    "url": "https://github.com/longdog/postcss-color-pantone",
    "description": "Transforms pantone color to RGB.",
    "tags": [
      "color"
    ],
    "author": "longdog"
  },
  {
    "name": "postcss-color-scale",
    "url": "https://github.com/kristoferjoseph/postcss-color-scale",
    "description": "Adds a color scale cs() function.",
    "tags": [
      "color"
    ],
    "author": "kristoferjoseph"
  },
  {
    "name": "postcss-color-short",
    "url": "https://github.com/andrepolischuk/postcss-color-short",
    "description": "adds shorthand color declarations.",
    "tags": [
      "color"
    ],
    "author": "andrepolischuk"
  },
  {
    "name": "postcss-colorblind",
    "url": "https://github.com/btholt/postcss-colorblind",
    "description": "Transforms colors using filters to simulate colorblindness.",
    "tags": [
      "color"
    ],
    "author": "btholt"
  },
  {
    "name": "postcss-hexrgba",
    "url": "https://github.com/seaneking/postcss-hexrgba",
    "description": "Adds shorthand hex rgba(hex, alpha) method.",
    "tags": [
      "color"
    ],
    "author": "seaneking"
  },
  {
    "name": "postcss-rgb-plz",
    "url": "https://github.com/himynameisdave/postcss-rgb-plz",
    "description": "converts 3 or 6 digit hex values to rgb",
    "tags": [
      "color"
    ],
    "author": "himynameisdave"
  },
  {
    "name": "postcss-assets",
    "url": "https://github.com/borodean/postcss-assets",
    "description": "Allows you to simplify URLs, insert image dimensions, and inline files.",
    "tags": [
      "images"
    ],
    "author": "borodean"
  },
  {
    "name": "postcss-at2x",
    "url": "https://github.com/simonsmith/postcss-at2x",
    "description": "Handles retina background images via use of at-2x keyword.",
    "tags": [
      "images"
    ],
    "author": "simonsmith"
  },
  {
    "name": "postcss-data-packer",
    "url": "https://github.com/Ser-Gen/postcss-data-packer",
    "description": "Moves embedded Base64 data to a separate file.",
    "tags": [
      "images"
    ],
    "author": "Ser-Gen"
  },
  {
    "name": "postcss-image-set",
    "url": "https://github.com/alex499/postcss-image-set",
    "description": "Adds background-image with first image for image-set().",
    "tags": [
      "images"
    ],
    "author": "alex499"
  },
  {
    "name": "postcss-font-pack",
    "url": "https://github.com/jedmao/postcss-font-pack",
    "description": "Simplifies font declarations and validates they match configured font packs.",
    "tags": [
      "fonts"
    ],
    "author": "jedmao"
  },
  {
    "name": "postcss-fontpath",
    "url": "https://github.com/seaneking/postcss-fontpath",
    "description": "Adds font links for different browsers.",
    "tags": [
      "fonts"
    ],
    "author": "seaneking"
  },
  {
    "name": "postcss-sprites",
    "url": "https://github.com/2createStudio/postcss-sprites",
    "description": "Generates CSS sprites from stylesheets.",
    "tags": [
      "images"
    ],
    "author": "2createStudio"
  },
  {
    "name": "postcss-svg",
    "url": "https://github.com/Pavliko/postcss-svg",
    "description": "Insert inline SVG to CSS and allows to manage it colors.",
    "tags": [
      "svg"
    ],
    "author": "Pavliko"
  },
  {
    "name": "postcss-svg-fallback",
    "url": "https://github.com/justim/postcss-svg-fallback",
    "description": "Converts SVG in your CSS to PNG files for IE 8.",
    "tags": [
      "svg",
      "images"
    ],
    "author": "justim"
  },
  {
    "name": "postcss-svgo",
    "url": "https://github.com/ben-eb/postcss-svgo",
    "description": "Processes inline SVG through SVGO.",
    "tags": [
      "svg"
    ],
    "author": "ben-eb"
  },
  {
    "name": "postcss-url",
    "url": "https://github.com/postcss/postcss-url",
    "description": "Rebases or inlines url()s.",
    "tags": [
      "images"
    ],
    "author": "postcss"
  },
  {
    "name": "webpcss",
    "url": "https://github.com/lexich/webpcss",
    "description": "Adds URLs for WebP images for browsers that support WebP.",
    "tags": [
      "images"
    ],
    "author": "lexich"
  },
  {
    "name": "postcss-urlrev",
    "url": "https://github.com/yuezk/postcss-urlrev",
    "description": "Adds md5 hash strings to url()s.",
    "tags": [
      "images"
    ],
    "author": "yuezk"
  },
  {
    "name": "postcss-grid",
    "url": "https://github.com/andyjansson/postcss-grid",
    "description": "Adds a semantic grid system.",
    "tags": [
      "grids"
    ],
    "author": "andyjansson"
  },
  {
    "name": "postcss-neat",
    "url": "https://github.com/jo-asakura/postcss-neat",
    "description": "A semantic and fluid grid framework.",
    "tags": [
      "grids"
    ],
    "author": "jo-asakura"
  },
  {
    "name": "lost",
    "url": "https://github.com/corysimmons/lost",
    "description": "Feature-rich calc() grid system by Jeet author.",
    "tags": [
      "grids"
    ],
    "author": "corysimmons"
  },
  {
    "name": "postcss-calc",
    "url": "https://github.com/postcss/postcss-calc",
    "description": "Reduces calc() to values (when expressions involve the same units).",
    "tags": [
      "optimizations"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-import",
    "url": "https://github.com/postcss/postcss-import",
    "description": "Inlines the stylesheets referred to by @import rules.",
    "tags": [
      "optimizations"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-single-charset",
    "url": "https://github.com/hail2u/postcss-single-charset",
    "description": " ensures that there is one and only one @charset rule at the top of file.",
    "tags": [
      "optimizations"
    ],
    "author": "hail2u"
  },
  {
    "name": "postcss-zindex",
    "url": "https://github.com/ben-eb/postcss-zindex",
    "description": "Rebases positive z-index values.",
    "tags": [
      "optimizations"
    ],
    "author": "ben-eb"
  },
  {
    "name": "css-byebye",
    "url": "https://github.com/AoDev/css-byebye",
    "description": "Removes the CSS rules that you don't want.",
    "tags": [
      "optimizations"
    ],
    "author": "AoDev"
  },
  {
    "name": "css-mqpacker",
    "url": "https://github.com/hail2u/node-css-mqpacker",
    "description": "Joins matching CSS media queries into a single statement.",
    "tags": [
      "optimizations",
      "media-queries"
    ],
    "author": "hail2u"
  },
  {
    "name": "stylehacks",
    "url": "https://github.com/ben-eb/stylehacks",
    "description": "Removes CSS hacks based on browser support.",
    "tags": [
      "optimizations",
      "fallbacks"
    ],
    "author": "ben-eb"
  },
  {
    "name": "postcss-alias",
    "url": "https://github.com/seaneking/postcss-alias",
    "description": "Creates shorter aliases for properties.",
    "tags": [
      "shortcuts"
    ],
    "author": "seaneking"
  },
  {
    "name": "postcss-all-link-colors",
    "url": "https://github.com/jedmao/postcss-all-link-colors",
    "description": "Insert colors for link-related pseudo-classes.",
    "tags": [
      "shortcuts",
      "color"
    ],
    "author": "jedmao"
  },
  {
    "name": "postcss-border",
    "url": "https://github.com/andrepolischuk/postcss-border",
    "description": "Adds shorthand for width and color of all borders in border property.",
    "tags": [
      "shortcuts"
    ],
    "author": "andrepolischuk"
  },
  {
    "name": "postcss-center",
    "url": "https://github.com/jedmao/postcss-center",
    "description": "centers elements",
    "tags": [
      "shortcuts"
    ],
    "author": "jedmao"
  },
  {
    "name": "postcss-circle",
    "url": "https://github.com/jedmao/postcss-circle",
    "description": "Inserts a circle with color.",
    "tags": [
      "shortcuts"
    ],
    "author": "jedmao"
  },
  {
    "name": "postcss-clearfix",
    "url": "https://github.com/seaneking/postcss-clearfix",
    "description": "Adds fix and fix-legacy properties to the clear declaration.",
    "tags": [
      "shortcuts"
    ],
    "author": "seaneking"
  },
  {
    "name": "postcss-crip",
    "url": "https://github.com/johnie/postcss-crip",
    "description": "Shorthand properties for Crips that are too lazy to write.",
    "tags": [
      "shortcuts"
    ],
    "author": "johnie"
  },
  {
    "name": "postcss-default-unit",
    "url": "https://github.com/antyakushev/postcss-default-unit",
    "description": "Adds default unit to numeric CSS properties.",
    "tags": [
      "shortcuts"
    ],
    "author": "antyakushev"
  },
  {
    "name": "postcss-easings",
    "url": "https://github.com/postcss/postcss-easings",
    "description": "Replaces easing names from easings.net with cubic-bezier() functions.",
    "tags": [
      "shortcuts"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-filter",
    "url": "https://github.com/alanev/postcss-filter",
    "description": "adds shorthand for black and white filter.",
    "tags": [
      "shortcuts"
    ],
    "author": "alanev"
  },
  {
    "name": "postcss-focus",
    "url": "https://github.com/postcss/postcss-focus",
    "description": "Adds :focus selector to every :hover.",
    "tags": [
      "shortcuts"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-generate-preset",
    "url": "https://github.com/simonsmith/postcss-generate-preset",
    "description": "Allows quick generation of rules. Useful for creating repetitive utilities.",
    "tags": [
      "shortcuts"
    ],
    "author": "simonsmith"
  },
  {
    "name": "postcss-input-style",
    "url": "https://github.com/seaneking/postcss-input-style",
    "description": "adds new pseudo-elements for cross-browser styling of inputs.",
    "tags": [
      "shortcuts",
      "fallbacks"
    ],
    "author": "seaneking"
  },
  {
    "name": "postcss-position",
    "url": "https://github.com/seaneking/postcss-position",
    "description": "Adds shorthand declarations for position attributes.",
    "tags": [
      "shortcuts"
    ],
    "author": "seaneking"
  },
  {
    "name": "postcss-property-lookup",
    "url": "https://github.com/simonsmith/postcss-property-lookup",
    "description": "Allows referencing property values without a variable.",
    "tags": [
      "shortcuts"
    ],
    "author": "simonsmith"
  },
  {
    "name": "postcss-responsive-type",
    "url": "https://github.com/seaneking/postcss-responsive-type",
    "description": "Changes font-size depending on screen size.",
    "tags": [
      "shortcuts"
    ],
    "author": "seaneking"
  },
  {
    "name": "postcss-short",
    "url": "https://github.com/jonathantneal/postcss-short",
    "description": "Adds and extends numerous shorthand properties.",
    "tags": [
      "shortcuts"
    ],
    "author": "jonathantneal"
  },
  {
    "name": "postcss-size",
    "url": "https://github.com/postcss/postcss-size",
    "description": "Adds a size shortcut that sets width and height with one declaration.",
    "tags": [
      "shortcuts"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-transform-shortcut",
    "url": "https://github.com/jonathantneal/postcss-transform-shortcut",
    "description": "Allows shorthand transform properties in CSS.",
    "tags": [
      "shortcuts"
    ],
    "author": "jonathantneal"
  },
  {
    "name": "postcss-triangle",
    "url": "https://github.com/jedmao/postcss-triangle",
    "description": "creates a triangle",
    "tags": [
      "shortcuts"
    ],
    "author": "jedmao"
  },
  {
    "name": "postcss-verthorz",
    "url": "https://github.com/davidhemphill/postcss-verthorz",
    "description": "Adds vertical and horizontal spacing declarations.",
    "tags": [
      "shortcuts"
    ],
    "author": "davidhemphill"
  },
  {
    "name": "postcss-font-magician",
    "url": "https://github.com/jonathantneal/postcss-font-magician",
    "description": "generates all the @font-face rules needed in CSS.",
    "tags": [
      "shortcuts",
      "fonts"
    ],
    "author": "jonathantneal"
  },
  {
    "name": "postcss-class-prefix",
    "url": "https://github.com/thompsongl/postcss-class-prefix",
    "description": "Adds a prefix/namespace to class selectors.",
    "tags": [
      "other"
    ],
    "author": "thompsongl"
  },
  {
    "name": "postcss-fakeid",
    "url": "https://github.com/pathsofdesign/postcss-fakeid",
    "description": "Transforms #foo IDs to attribute selectors [id='foo'].",
    "tags": [
      "other"
    ],
    "author": "pathsofdesign"
  },
  {
    "name": "postcss-flexboxfixer",
    "url": "https://github.com/hallvors/postcss-flexboxfixer",
    "description": "Unprefixes -webkit- only flexbox in legacy CSS.",
    "tags": [
      "other",
      "fallbacks"
    ],
    "author": "hallvors"
  },
  {
    "name": "postcss-gradientfixer",
    "url": "https://github.com/hallvors/postcss-gradientfixer",
    "description": "Unprefixes -webkit- only gradients in legacy CSS.",
    "tags": [
      "other",
      "fallbacks"
    ],
    "author": "hallvors"
  },
  {
    "name": "postcss-increase-specificity",
    "url": "https://github.com/MadLittleMods/postcss-increase-specificity",
    "description": "increases the specificity of your selectors.",
    "tags": [
      "other"
    ],
    "author": "MadLittleMods"
  },
  {
    "name": "postcss-mq-keyframes",
    "url": "https://github.com/TCotton/postcss-mq-keyframes",
    "description": "Moves any animation keyframes in media queries to the end of the file.",
    "tags": [
      "other",
      "media-queries"
    ],
    "author": "TCotton"
  },
  {
    "name": "postcss-pseudo-elements-content",
    "url": "https://github.com/omgovich/postcss-pseudo-elements-content",
    "description": "Automatically adds content: '' to :before and :after.",
    "tags": [
      "other"
    ],
    "author": "omgovich"
  },
  {
    "name": "postcss-pxtorem",
    "url": "https://github.com/cuth/postcss-pxtorem",
    "description": "Converts pixel units to rem.",
    "tags": [
      "other"
    ],
    "author": "cuth"
  },
  {
    "name": "postcss-remove-prefixes",
    "url": "https://github.com/johnotander/postcss-remove-prefixes",
    "description": "removes vendor prefixes.",
    "tags": [
      "other",
      "future"
    ],
    "author": "johnotander"
  },
  {
    "name": "postcss-style-guide",
    "url": "https://github.com/morishitter/postcss-style-guide",
    "description": "Generates a style guide automatically.",
    "tags": [
      "other"
    ],
    "author": "morishitter"
  },
  {
    "name": "postcss-scopify",
    "url": "https://github.com/pazams/postcss-scopify",
    "description": "Adds a user input scope to each selector.",
    "tags": [
      "other"
    ],
    "author": "pazams"
  },
  {
    "name": "cssfmt",
    "url": "https://github.com/morishitter/cssfmt",
    "description": "formats CSS source code automatically inspired by Gofmt.",
    "tags": [
      "other"
    ],
    "author": "morishitter"
  },
  {
    "name": "perfectionist",
    "url": "https://github.com/ben-eb/perfectionist",
    "description": "Formats poorly written CSS and renders a 'pretty' result.",
    "tags": [
      "other"
    ],
    "author": "ben-eb"
  },
  {
    "name": "rtlcss",
    "url": "https://github.com/MohammadYounes/rtlcss",
    "description": "Mirrors styles for right-to-left locales.",
    "tags": [
      "other"
    ],
    "author": "MohammadYounes"
  },
  {
    "name": "postcss-bem-linter",
    "url": "https://github.com/necolas/postcss-bem-linter",
    "description": "Lints CSS for conformance to SUIT CSS methodology.",
    "tags": [
      "analysis",
      "debug"
    ],
    "author": "necolas"
  },
  {
    "name": "postcss-cssstats",
    "url": "https://github.com/cssstats/postcss-cssstats",
    "description": "Returns an object with CSS statistics.",
    "tags": [
      "analysis"
    ],
    "author": "cssstats"
  },
  {
    "name": "css2modernizr",
    "url": "https://github.com/vovanbo/css2modernizr",
    "description": "Creates a Modernizr config file that requires only the tests that your CSS uses.",
    "tags": [
      "analysis"
    ],
    "author": "vovanbo"
  },
  {
    "name": "doiuse",
    "url": "https://github.com/anandthakker/doiuse",
    "description": "Lints CSS for browser support, using data from Can I Use.",
    "tags": [
      "analysis",
      "debug"
    ],
    "author": "anandthakker"
  },
  {
    "name": "immutable-css",
    "url": "https://github.com/johnotander/immutable-css",
    "description": "Lints CSS for class mutations.",
    "tags": [
      "analysis",
      "debug"
    ],
    "author": "johnotander"
  },
  {
    "name": "list-selectors",
    "url": "https://github.com/davidtheclark/list-selectors",
    "description": "Lists and categorizes the selectors used in your CSS, for code review.",
    "tags": [
      "analysis",
      "debug"
    ],
    "author": "davidtheclark"
  },
  {
    "name": "postcss-selector-source",
    "url": "https://github.com/a-axton/postcss-selector-source",
    "description": "Displays the original line and column position of your CSS selectors and declarations from your pre-processed files.",
    "tags": [
      "analysis"
    ],
    "author": "a-axton"
  },
  {
    "name": "postcss-browser-reporter",
    "url": "https://github.com/postcss/postcss-browser-reporter",
    "description": "Displays warning messages from other plugins right in your browser.",
    "tags": [
      "other"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-reporter",
    "url": "https://github.com/postcss/postcss-reporter",
    "description": "Logs warnings and other messages from other plugins in the console.",
    "tags": [
      "other"
    ],
    "author": "postcss"
  },
  {
    "name": "postcss-australian-stylesheets",
    "url": "https://github.com/dp-lewis/postcss-australian-stylesheets",
    "description": "Australian Style Sheets.",
    "tags": [
      "fun"
    ],
    "author": "dp-lewis"
  },
  {
    "name": "postcss-canadian-stylesheets",
    "url": "https://github.com/chancancode/postcss-canadian-stylesheets",
    "description": "Canadian Style Sheets.",
    "tags": [
      "fun"
    ],
    "author": "chancancode"
  },
  {
    "name": "postcss-german-stylesheets",
    "url": "https://github.com/timche/postcss-german-stylesheets",
    "description": "German Style Sheets.",
    "tags": [
      "fun"
    ],
    "author": "timche"
  },
  {
    "name": "postcss-imperial",
    "url": "https://github.com/cbas/postcss-imperial",
    "description": "adds CSS support for Imperial and US customary units of length.",
    "tags": [
      "fun"
    ],
    "author": "cbas"
  },
  {
    "name": "postcss-russian-units",
    "url": "https://github.com/Semigradsky/postcss-russian-units",
    "description": "adds CSS support for russian units of length.",
    "tags": [
      "fun"
    ],
    "author": "Semigradsky"
  },
  {
    "name": "postcss-pointer",
    "url": "https://github.com/markgoodyear/postcss-pointer",
    "description": "Replaces pointer: cursor with cursor: pointer.",
    "tags": [
      "fun"
    ],
    "author": "markgoodyear"
  },
  {
    "name": "postcss-spiffing",
    "url": "https://github.com/HashanP/postcss-spiffing",
    "description": "Lets you use British English in your CSS.",
    "tags": [
      "fun"
    ],
    "author": "HashanP"
  },
  {
    "name": "postcss-currency",
    "url": "https://github.com/talgautb/postcss-currency",
    "description": "replaces the name of currency with symbols.",
    "tags": [
      "other",
      "fun"
    ],
    "author": "talgautb"
  },
  {
    "name": "postcss-simple-grid",
    "url": "https://github.com/admdh/postcss-simple-grid",
    "description": "create grid with one line.",
    "tags": [
      "grids"
    ],
    "author": "admdh"
  },
  {
    "name": "postcss-autoreset",
    "url": "https://github.com/maximkoretskiy/postcss-autoreset",
    "description": "automatically adds reset styles.",
    "tags": [
      "fallbacks"
    ],
    "author": "maximkoretskiy"
  },
  {
    "name": "postcss-inline-comment",
    "url": "https://github.com/moczolaszlo/postcss-inline-comment",
    "description": "Plugin to use inline comments in CSS rules.",
    "tags": [
      "extensions"
    ],
    "author": "moczolaszlo"
  },
  {
    "name": "postcss-mqwidth-to-class",
    "url": "https://github.com/notacouch/postcss-mqwidth-to-class",
    "description": "plugin converts min/max-width media queries to classes, for IE8 support",
    "tags": [
      "media-queries",
      "fallbacks"
    ],
    "author": "notacouch"
  },
  {
    "name": "postcss-swedish-stylesheets",
    "url": "https://github.com/johnie/postcss-swedish-stylesheets",
    "description": "plugin for writing Swedish Style Sheets.",
    "tags": [
      "fun"
    ],
    "author": "johnie"
  },
  {
    "name": "postcss-flexbugs-fixes",
    "url": "https://github.com/luisrudge/postcss-flexbugs-fixes",
    "description": "fixes to some of known flexbox bugs",
    "tags": [
      "analysis"
    ],
    "author": "luisrudge"
  },
  {
    "name": "postcss-round-subpixels",
    "url": "https://github.com/himynameisdave/postcss-round-subpixels",
    "description": "plugin that rounds sub-pixel values to the nearest full pixel.",
    "tags": [
      "fallbacks"
    ],
    "author": "himynameisdave"
  }
]
},{}],3:[function(require,module,exports){
module.exports={
  "name": "postcss-playground",
  "version": "1.0.0",
  "description": "Test out PostCSS plugins in a safe and fun environment!",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "directories": {
    "src": {
      "root": "./src/",
      "css": "./src/css/",
      "js": "./src/js/"
    },
    "dist": {
      "root": "./dist/",
      "css": "./dist/css/",
      "js": "./dist/js/"
    }
  },
  "browserify": {
    "transform": [
      "babelify"
    ]
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/himynameisdave/postcss-playground.git"
  },
  "keywords": [
    "PostCSS",
    "postcss-plugins",
    "CSS",
    "GUI",
    "web",
    "app",
    "front-end"
  ],
  "author": "Dave Lunny",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/himynameisdave/postcss-playground/issues"
  },
  "homepage": "https://github.com/himynameisdave/postcss-playground#readme",
  "dependencies": {
    "body-parser": "^1.13.3",
    "express": "^4.13.3",
    "postcss-plugins": "^1.3.1"
  },
  "devDependencies": {
    "autoprefixer-core": "^6.0.0",
    "babelify": "^6.3.0",
    "browserify": "^11.0.1",
    "gulp-cssnano": "^1.1.0",
    "gulp-html-replace": "^1.5.1",
    "gulp-imagemin": "^2.3.0",
    "gulp-less": "^3.0.3",
    "gulp-load-plugins": "^0.10.0",
    "gulp-postcss": "^6.0.0",
    "gulp-shell": "^0.4.3",
    "gulp-svgmin": "^1.2.0",
    "gulp-uglify": "^1.4.0",
    "loggit": "^0.2.0",
    "vinyl-source-stream": "^1.1.0",
    "watchify": "^3.4.0"
  }
}

},{}],4:[function(require,module,exports){
"use strict";

var plugins = require("postcss-plugins"),
    pkg = require("../../package.json");

},{"../../package.json":3,"postcss-plugins":1}]},{},[4]);
