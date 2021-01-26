module.exports = {
  devServer: {
    proxy: process.env.PROXY_ADDRESS || 'https://localhost:4100',
    host: 'localhost',
    https: true,
  },

  pluginOptions: {
    i18n: {
      locale: 'es',
      fallbackLocale: 'es',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
