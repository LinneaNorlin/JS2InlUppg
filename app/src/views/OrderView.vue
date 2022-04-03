<template>
  <h1 class="mb-5 text-center text-lg-start">Order History</h1>
    <div>
        <OrderCardList v-for="order in orders" :key="order._id" :order="order" />
    </div>
    <div class="text-center mb-2">
      <router-link to="/myProfile" class="text-dark">Back to my profile</router-link>
    </div>      
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import OrderCardList from '../components/orders/OrderCardList.vue'
export default {
  components: { OrderCardList },
  methods: {
      ...mapActions(['getOrders'])
  },
  computed: {
    ...mapGetters(['userToken', 'orders'])
  },
  created() {
      this.getOrders(this.userToken)
  }
}
</script>