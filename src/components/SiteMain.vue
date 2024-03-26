<script>
/* import {products} from "../data.js" */
import ProductCard from "./main/ProductCard.vue"
import {store} from "../store.js"
import showProduct from "./main/ProductCard.vue"
import Modal from "./main/Modal.vue"

export default
{
    name: "SiteMain",
    emit: showProduct,
    components:
    {
        ProductCard,
        Modal
    },
    data()
    {
        return{
            //products,
            store,
            showModal: false
        }
    },
    methods:
    {
        changeShowModal()
        {
            if (this.emit)
            {
                this.showModal = true
                console.log(this.showModal);
            }
        }
    },
    mounted()
    {
        //console.log(store);
        store.getApi(store.data_api_url);
    },
    updated()
    {
        
    }
}

</script>

<template>
    <main id="site_main">
        <Modal v-show="showModal" />
        <ProductCard v-for="product in store.products" :product="product" :key="product.id" />
    </main>
</template>

<style>

</style>
