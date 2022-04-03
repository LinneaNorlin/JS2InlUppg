export default {
    state: {
      cart: []
    },
    getters: {
      shoppingCart: state => state.cart,
      cartItemCount: state => {
        let items = 0
        state.cart.forEach(item => {
          items += item.quantity
        })
        return items
      },
      shoppingCartTotal: state => {
        let total = 0
        if(state.cart.length !== 0) {
          state.cart.forEach(item => {
            total += item.product.price * item.quantity
          })
        }
        return total
      }
    },
    mutations: {
      ADD_TO_CART: (state, { product, quantity }) => {
        let exist = state.cart.find(item => item.product._id === product._id)
        if(exist) {
          exist.quantity += quantity
          return
        }
        state.cart.push({ product, quantity })
      },
      // + in cart
      ADD_ONE_ITEM: (state, product) => {
        product.quantity += 1
      }, 
      // - in cart
      REMOVE_ONE_ITEM: (state, product) => {
        product.quantity -= 1
          if(product.quantity < 1) {          
          state.cart = state.cart.filter(item => item.product._id !== product.product._id)
          }
      },
      // trashcan in cart
      REMOVE_ALL_ITEMS: (state, product ) => {
      state.cart = state.cart.filter(item => item.product._id !== product.product._id)
      }
    },
    actions: {
      addToCart: ({commit}, { product, quantity }) => {
        commit('ADD_TO_CART', { product, quantity })
      },
      // + in cart
      addOneItem: ({commit},product) => {
        // console.log(product)
        commit('ADD_ONE_ITEM', product)
      },
      // - in cart
      removeOneItem: ({commit}, product) => {        
        commit('REMOVE_ONE_ITEM', product)
      },
      // trashcan in cart
      removeAllItems: ({commit}, product) => {
        commit('REMOVE_ALL_ITEMS', product)
      }
    }
  }