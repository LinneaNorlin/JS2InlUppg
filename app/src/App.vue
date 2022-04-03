<template>
  <Navbar />
  <div class="container mt-4">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar },
  methods: {
    ...mapActions(['checkUser'])
  },
  created() {
    this.checkUser()
  }
}
</script>

<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .bg-clr1 {
    background-color: #dedede;
  }

</style>
