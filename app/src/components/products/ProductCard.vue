<template>
  <div class="col">
    <div class="card h-100 pt-2">
      <router-link :to="{ name: 'productDetails', params: { id: product._id } }">
      <img :src="product.imageURL" class="card-img-top" alt=""/>
      <div class="card-body">
        <h5 class="card-title text-dark text-center">{{ product.name }}</h5>
      </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>

<style>

</style>