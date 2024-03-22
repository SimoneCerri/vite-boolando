<script>
import {products} from "../data.js"
import ProductCard from "./main/ProductCard.vue"

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
            products
        }
    }
}
</script>

<template>
    <main id="site_main">
        <ProductCard v-for="product in products" :product="product" :key="product.id" />
    </main>
    <!-- /#site_main -->
</template>

<style></style>
