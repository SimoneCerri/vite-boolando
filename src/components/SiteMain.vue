<script>
/* import {products} from "../data.js" */
import ProductCard from "./main/ProductCard.vue"
import {store} from "../store.js"
import Modal from "./main/Modal.vue"

export default
{
    name: "SiteMain",
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
            showModal: false,
            productModal: null,
        }
    },
    methods:
    {
        changeShowModal(product)
        {
            this.productModal = product;

            this.showModal = !this.showModal;
            //console.log(this.showModal);
        },
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
        <ProductCard v-for="product in store.products" :product :key="product.id" @show-modal="changeShowModal(product)" />

        <!-- DON'T USE V-SHOW, BETTER V-IF OR WILL LOAD AN EMPTY DIV -->
        <div v-if="showModal">
            <Modal :product="productModal" @close-modal="changeShowModal"/>
        </div>
    </main>
</template>

<style>

</style>
