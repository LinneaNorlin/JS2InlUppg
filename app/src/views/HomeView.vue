<template>
  <div class="home">
    <h1 class="mb-4 text-center text-lg-start">Home</h1>
  </div>

  <div class="text-center mb-8">
    <p>...is where your</p>
    <i class="fa-regular fa-heart text-danger"></i>
    <p>is...</p>
  </div>

  <div class="card mt-1 mb-3 p-2">
    <h4>Go shopping</h4>
    <small>
    <router-link to="/products" class="text-dark">See Products</router-link>
    </small>
  </div>

  <div class="card mt-1 mb-3 p-2">
    <h4>About us</h4>
    <small>
    <router-link to="/about" class="text-dark">To about page</router-link>
    </small>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>
