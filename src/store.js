import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    getShirts: state => state.shirts,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart
  },

  state: {
    shirts: [
      {
        name: 'Shrute Farms Long Sleeve TShirt',
        price: 24.99,
        image: 'https://www.nbcstore.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/h/theoffice_schrutefarmsbeetsshirt.jpg',
        stars: 5,
        totalReviews: 230,
        details: 'Dwight loves beets, and you do too! Show your love for beets with this soft and durable size Large TShirt!'
      },
      {
        name: 'PewPew Star Wars TShirt',
        price: 19.99,
        image: 'https://res.cloudinary.com/teepublic/image/private/s--AL40UquD--/t_Preview/b_rgb:191919,c_limit,f_auto,h_313,q_90,w_313/v1446248624/production/designs/314242_1',
        stars: 5,
        totalReviews: 285,
        details: 'PewPew!! Pew pew!! Size Large, soft and comfy Star Wars tshirt'
      },
      {
        name: 'Check Yo TRex',
        price: 19.99,
        image: 'https://d3qdvvkm3r2z1i.cloudfront.net/media/catalog/product/cache/1/image/1800x/6b9ffbf72458f4fd2d3cb995d92e8889/r/e/rexyoself_newthumb.png',
        stars: 5,
        totalReviews: 291,
        details: 'Funny Jurassic Park tshirt, size Large'
      }
    ],
    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false
  },
  mutations: {
    ADD_PRODUCT: (state, product) => {
      state.cartProducts.push(product)
    },
    REMOVE_PRODUCT: (state, index) => {
      state.cartProducts.splice(index, 1)
    },
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product
    },
    SHOW_MODAL: (state) => {
      state.showModal = !state.showModal
    },
    SHOW_POPUP_CART: (state) => {
      state.showPopupCart = !state.showPopupCart
    }
  },
  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product)
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index)
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product)
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL')
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART')
    }
  }
})
