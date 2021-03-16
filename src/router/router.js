import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vContacts from '../components/v-contacts'
import vAbout from '../components/v-about'

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: vContacts,
        },
        {
            path: '/about',
            name: 'about',
            component: vAbout,
        },
    ]
})

export default router;