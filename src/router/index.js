import Vue from 'vue'
import Router from 'vue-router'
import SearchBar from '@/components/SearchBar'
import Stars from '@/components/Stars'
import ContentFiexd from '@/components/contentFiexd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchBar',
      component: SearchBar
    },
    {
      path: '/stars',
      name: 'Stars',
      component: Stars
    },
    {
      path: '/con',
      name: 'Con',
      component: ContentFiexd
    }
  ]
})
