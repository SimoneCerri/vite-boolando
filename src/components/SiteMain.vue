<script>
/* import {products} from "../data.js" */
import ProductCard from "./main/ProductCard.vue"
import {store} from "../store.js"

export default
{
    name: "SiteMain",
    components:
    {
        ProductCard
    },
    data()
    {
        return{
            //products,
            store
        }
    },
    mounted()
    {
        //console.log(store);
        store.getApi(store.data_api_url)
    }
}
</script>

<template>
    <main id="site_main">
        <ProductCard v-for="product in store.products" :product="product" :key="product.id" />
    </main>
    <!-- /#site_main -->
</template>

<style></style>
