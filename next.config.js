const locales = ['es', 'hy', 'ru']
const defaultLocale = 'en-US';
let routes = [];
const defaultRoutes = require(`./data/phrases/${defaultLocale}.json`).routes;

locales.forEach(locale => {
  const localeRoutes = require(`./data/phrases/${locale}.json`).routes;
  const mappedRoutes = Object.entries(localeRoutes).map(
    ([key, route]) =>  ({
      source: `/${route}`,
      destination: `/${defaultRoutes[key]}`, 
    }))
    ;
  routes = [...routes, ...mappedRoutes];
})

module.exports = {
  i18n: {
    locales: [defaultLocale, ...locales],
    defaultLocale,
  },
  async rewrites() {
    return routes;
  }
}