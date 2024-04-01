// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-svgo',],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  pinia: {
    // autoImports: ['defineStore'],
    storesDirs: ['stores'],
  },
  imports: {
    dirs: ['stores']
  },
  svgo: {
    defaultImport: 'component',
  },
  // modules: ['@nuxtjs/tailwindcss', 'nuxt-svg-icons'],
  // nuxtSvgIcons: {
  //   svg4vue: {
  //     assetsDirName: 'assets/images/svg'
  //   }
  // }
})
