const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jonathanfreed/Development/Chocolate-Works/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jonathanfreed/Development/Chocolate-Works/src/pages/404.js"))),
  "component---src-pages-birthdays-js": hot(preferDefault(require("/Users/jonathanfreed/Development/Chocolate-Works/src/pages/birthdays.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jonathanfreed/Development/Chocolate-Works/src/pages/index.js"))),
  "component---src-pages-workshops-js": hot(preferDefault(require("/Users/jonathanfreed/Development/Chocolate-Works/src/pages/workshops.js"))),
  "component---src-pages-fieldtrips-js": hot(preferDefault(require("/Users/jonathanfreed/Development/Chocolate-Works/src/pages/fieldtrips.js")))
}

