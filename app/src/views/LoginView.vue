<template>
    <h1 class="mb-4 text-center text-lg-start">Login</h1>

    <form class="border p-3 shadow rounded" @submit.prevent="handleSubmit">
        <!-- Email input -->
        <div class="mb-4">
            <label class="form-label" for="form2Example1">Email address</label>
            <input type="email" id="form2Example1" class="form-control" v-model="email" />
        </div>
        <!-- Password input -->
        <div class="mb-4">
            <label class="form-label" for="form2Example2">Password</label>
            <input type="password" id="form2Example2" class="form-control" v-model="password" />
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-dark btn-block mb-5">Sign in</button>
        <!-- Go-to-register button -->
        <div class="text-center">
            <p>Not yet a member?</p>
            <router-link to="/register"><button type="button" class="btn btn-sm btn-light mb-2">Register here!</button></router-link>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['login']),
        async handleSubmit() {
            if(this.email.trim() === '' || this.password.trim() === '') {
                return
            }
            let user = {
            email: this.email,
            password: this.password
            }
            let route = this.$route.query.redirect
            this.login({user, route})
        }
    }
}
</script>

<style>

</style>