<template>
    <!-- Order list -->
    <div class="card mt-1 mb-5 p-3">
      <h4 class="">Order Id</h4>
      <p class="mb-4">{{ order._id }}</p>
      <h6>Order Date:</h6>
      <p>{{ order.createdAt }}</p>
    </div>

</template>

<script>
import { mapGetters } from 'vuex' //som för produkterna

export default {
  components: {  },
  props: ['order'], //tar emot dem, som vi skickat in
  //som för produkterna:
  computed: {
    ...mapGetters(['orders'])
  } 
}
</script>

<style>

</style>