import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactsPage from '../views/ContactsPage.vue'
import UserDetailPage from '../views/UserDetailPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'ContactsPage',
    component: ContactsPage
  },
  {
    path: '/userDetailPage',
    name: 'userDetailPage',
    component: UserDetailPage,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
