import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SimplePagination from '@/components/SimplePagination'
import PostsList from '@/components/PostsList'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/SimplePagination',
            name: 'SimplePagination',
            component: SimplePagination
        },
        {
            path: '/PostsList',
            name: 'PostsList',
            component: PostsList
        }
    ]
})