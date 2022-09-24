import { defineNuxtConfig } from 'nuxt'
import transformerDirective from '@unocss/transformer-directives'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: 'static',
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  // Global page headers (https://go.nuxtjs.dev/config-head)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  css: [
    'normalize.css',
    'assets/css/style.css',
    'assets/css/main.css',
  ],
  unocss: {
    uno: true,
    icons: true,
    attributify: true,

    // core options
    shortcuts: [],
    transformers: [
      transformerDirective(),
    ],
    rules: [],
    theme: {
      colors: {
        'heading': '#2E2E2E',
        'subheading': '#16221C',
        'body': '#555555'
      }
    },
  },
  googleFonts: {
    families: {
      Lexend: true,
      Inter: [400],
    }
  }
})

