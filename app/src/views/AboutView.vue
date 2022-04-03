<template>
  <div class="about">
    <h1 class="mb-4 text-center text-lg-start">About</h1>

    <div class="text-center mb-8">
      <p>A lot of information...</p>
      <i class="fa-regular fa-heart text-danger"></i>
      <p>...about us...</p>
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

  </div>
</template>
