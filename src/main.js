/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// store in vuex

// import store from './store/store.js';
import Appstore from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/ store/store.js';

import store from '@/ store/store';


import router from '/home/dixitcoder/Desktop/DixitCoder_Project/tools-ai/src/router/index.js'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(store);
app.use(router)
app.use(Appstore)
registerPlugins(app)

app.mount('#app')

