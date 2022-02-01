module.exports = {
  publicPath: '',

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },

  pages: {
    index: {
      entry: 'src/main.ts',
      title: process.env.VUE_APP_TITLE
    }
  }
};
