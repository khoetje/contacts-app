// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  plugins: ['~/plugins/vee-validate.js'],
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
});
