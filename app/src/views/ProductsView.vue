<template>
  <div>
    <ProductCardGrid />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ProductCardGrid from '../components/products/ProductCardGrid.vue'
export default {
  components: { ProductCardGrid },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>