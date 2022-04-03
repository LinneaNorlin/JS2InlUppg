<template>
    <div  v-if="product">
        <div class="row">
            
            <div class="col-lg-6">
                <img :src="product.imageURL" class="img-fluid">
            </div>
            
            <div class="col-lg-6 text-center text-lg-start">
                <h2>{{product.name}}</h2>
                <h4 class="text-reset">{{product.price}} SEK</h4>
                <div class="mt-4">
                    <p>{{product.desc}}</p>
                </div>
            </div>

            <div class="text-center text-lg-end mt-4 mt-lg-1 mb-3">
                <button @click="addToCart({ product, quantity })" class="btn btn-light bg-clr1"><i class="fa-solid fa-cart-plus me-2"></i>Add to cart</button>
            </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['id'],
    data() {
        return {
        quantity: 1
        }
    },
    methods: {
        ...mapActions(['getProductById', 'addToCart'])
    },
    computed: {
        ...mapGetters(['product'])
    },
    created() {
        this.getProductById(this.id)
    }
}
</script>

<style>

</style>