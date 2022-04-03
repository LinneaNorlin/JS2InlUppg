<template>
  <h1 class="mb-4 text-center text-lg-start">My Profile</h1>

  <div class="card mt-1 mb-3 p-2">
    <h4>My orders</h4>
    <small>
    <router-link to="/orders" class="text-dark">See Order History</router-link>
    </small>
  </div>

  <div class="card mt-1 mb-3 p-2">
    <h4>Go shopping</h4>
    <small>
    <router-link to="/products" class="text-dark">See Products</router-link>
    </small>
  </div>

  <div class="card mt-1 mb-3 p-2">
    <h4>Go home</h4>
    <small>
    <router-link to="/" class="text-dark">To home page</router-link>
    </small>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>