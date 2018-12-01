import Vue from 'vue'
import Router from 'vue-router'
import AllShirts from '../components/AllShirts'
import Product from '../components/Product'
import CartCheckout from '../components/CartCheckout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/shirts',
      name: 'Shirts',
      component: AllShirts
    },
    {
      path: '/product-details',
      name: 'Product',
      component: Product
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: CartCheckout
    }
  ]
})
