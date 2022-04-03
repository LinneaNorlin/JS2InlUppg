<template>
    <h1 class="mb-4 text-center text-lg-start">Register</h1>

    <form class="border p-3 shadow rounded" @submit.prevent="handleSubmit">
        <!-- 2 column grid layout with text inputs for the first and last names -->
        <div class="row row-cols-1 row-cols-lg-2 g-2 mb-4">
          <div class="col">
            <div>
              <label class="form-label" for="form3Example1">First name</label>
              <input type="text" id="form3Example1" class="form-control" v-model="firstName" />
            </div>
          </div>
          <div class="col">
            <div>
              <label class="form-label" for="form3Example2">Last name</label>
              <input type="text" id="form3Example2" class="form-control" v-model="lastName" />
            </div>
          </div>
        </div>
        <!-- Email input -->
        <div class="mb-4">
            <label class="form-label" for="form3Example3">Email address</label>
            <input type="email" id="form3Example3" class="form-control" v-model="email" />
        </div>
        <!-- Password input -->
        <div class="mb-4">
            <label class="form-label" for="form3Example4">Password</label>
            <input type="password" id="form3Example4" class="form-control" v-model="password" />
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-dark btn-block mb-6">Register</button>
        <!-- Go-to-login button -->
        <div class="text-center">
            <p>Already a member?</p>
            <router-link to="/login" class="text-dark"><button type="button" class="btn btn-sm btn-light mb-2">Go to login!</button></router-link>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    async handleSubmit() {
      if(this.firstName.trim() === '' || this.lastName.trim() === '' ||
      this.email.trim() === '' || this.password.trim() === '') {
        return
      }
      let user = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      }
      let route = this.$route.query.redirect
      this.register({ user, route })
    }
  }
}
</script>

<style>

</style>