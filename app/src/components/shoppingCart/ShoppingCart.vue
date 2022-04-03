<template>
    <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product._id" :item="item" />
  <div v-if="shoppingCart.length < 1">
      <div class="p-2 d-flex justify-content-center algin-items-center">
          Your shopping cart is empty!
      </div>
      <div class="dropdown-divider"></div>
  </div>

  <div class="p-2 d-flex justify-content-between algin-items-center">
      <div>
          <div>Total: {{ shoppingCartTotal }} SEK </div>
          <small class="text-muted">incl. VAT</small>
      </div>
      <button type="button" @click="handleCheckout" class="btn btn-light">Save Cart As Order</button>
  </div>

</template>

<script>
import ShoppingCartProduct from './ShoppingCartProduct.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: { ShoppingCartProduct },
    computed: {
        ...mapGetters(['shoppingCart', 'shoppingCartTotal', 'userToken'])
    },
    methods: {
        ...mapActions(['sendOrder']),
        handleCheckout() {
            let order = {
                cart: this.shoppingCart,
                user: this.userToken
            }
            // console.log('checkout')
            this.sendOrder({order})
        }
    }
}
</script>

<style>

</style>