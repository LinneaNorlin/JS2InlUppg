<template>
  <div class="p-2 d-flex justify-content-between align-items-center">
    
    <div class="d-flex align-items-center">
      <div class="image-container">
        <img :src="item.product.imageURL" class="img-fluid">
      </div>
      <div>
        <div><strong>{{ item.product.name }}</strong></div>
        <div><small>{{ item.quantity }} x {{ item.product.price }}</small></div>
      </div>
    </div>
    
    <div>
      <div class="btn-group btn-group-sm me-2">
        <button class="btn btn-dark" @click.stop="removeOneItem(item)">-</button>
        <button class="btn btn-dark" @click.stop="addOneItem(item)">+</button>
      </div>
      <button class="btn btn-danger btn-sm" @click.stop="removeAllItems(item)"><i class="fa-solid fa-trash"></i></button>
    </div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['item'],
  data() {
      return {
      quantity: 1
      }
  },
  methods: {
    ...mapActions(['addOneItem', 'removeOneItem', 'removeAllItems'])
  },
}
</script>

<style scoped>
  .image-container {
    width: 90px;
  }
</style>