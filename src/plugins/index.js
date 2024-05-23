/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
// import store from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/ store/store.js'
import router from '@/router'

export function registerPlugins (app) {
  app
    .use(vuetify)
    .use(router)
}
