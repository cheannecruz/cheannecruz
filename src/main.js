// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/styles/app.scss';
import VueTypedJs from 'vue-typed-js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'hamburgers/dist/hamburgers.css';

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(VueTypedJs);
  var VueScrollTo = require('vue-scrollto');
  Vue.use(VueScrollTo);

  if (process.isClient) {
    AOS.init()
  }

  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Comfortaa'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat+Alternates'
  })
}



