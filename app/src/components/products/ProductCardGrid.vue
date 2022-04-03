<template>
    <h1 class="mb-4 text-center text-lg-start">Products</h1>

    <!-- Product cards -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        <ProductCard v-for="product in products" :key="product._id" :product="product" />
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard.vue'
export default {
  components: { ProductCard },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>