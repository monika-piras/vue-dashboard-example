import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactsPage from '../views/ContactsPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ItemDetailPage from '../views/ItemDetailPage.vue'
import EditItemPage from '../views/EditItemPage.vue'
import AddProductPage from '../views/AddProductPage.vue'
import UserDetailPage from '../views/UserDetailPage.vue'
import AddUserPage from '../views/AddUserPage.vue'

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
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  },
  {
    path: '/itemDetailPage/:id',
    name: 'itemDetailPage',
    component: ItemDetailPage,
  },
  {
    path: '/editItemPage/:id',
    name: 'editItemPage',
    component: EditItemPage,
  },
  {
    path: '/addProductPage',
    name: 'AddProductPage',
    component: AddProductPage
  },
  {
    path: '/addUserPage',
    name: 'addUserPage',
    component: AddUserPage,
  }
]

const router = new VueRouter({
  routes
})

export default router