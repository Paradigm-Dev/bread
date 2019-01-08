import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Flamechat from './views/Flamechat.vue'
import Hex from './views/Hex.vue'
import Drawer from './views/Drawer.vue'
import Launchpad from './views/Launchpad.vue'
import Bookshelf from './views/Bookshelf.vue'
import Scorecard from './views/Scorecard.vue'
import DevNet from './views/DevNet.vue'
import Support from './views/Support.vue'
import Terms from './views/Terms.vue'
import Changelog from './views/Changelog.vue'
import Notice from './views/Notice.vue'
import PageNotFound from './views/PageNotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/flamechat',
      name: 'flamechat',
      component: Flamechat
    },
    {
      path: '/hex',
      name: 'hex',
      component: Hex
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: Drawer
    },
    {
      path: '/launchpad',
      name: 'launchpad',
      component: Launchpad
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: Bookshelf
    },
    {
      path: '/scorecard',
      name: 'scorecard',
      component: Scorecard
    },
    {
      path: '/devnet',
      name: 'devnet',
      component: DevNet
    },
    {
      path: '/support',
      name: 'support',
      component: Support
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms
    },
    {
      path: '/changelog',
      name: 'changelog',
      component: Changelog
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
