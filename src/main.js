import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faFileArchive } from '@fortawesome/free-solid-svg-icons'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faMobileAlt)
library.add(faFileArchive)
library.add(faAddressCard)
library.add(faBrush)
library.add(faFacebook)
library.add(faTwitter)
library.add(faYoutube)
library.add(faGoogle)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
