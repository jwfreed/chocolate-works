const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/lizzy/Development/chocolate-works/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/lizzy/Development/chocolate-works/src/pages/404.js"))),
  "component---src-pages-birthdays-js": hot(preferDefault(require("/Users/lizzy/Development/chocolate-works/src/pages/birthdays.js"))),
  "component---src-pages-fieldtrips-js": hot(preferDefault(require("/Users/lizzy/Development/chocolate-works/src/pages/fieldtrips.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/lizzy/Development/chocolate-works/src/pages/index.js"))),
  "component---src-pages-workshops-js": hot(preferDefault(require("/Users/lizzy/Development/chocolate-works/src/pages/workshops.js")))
}

