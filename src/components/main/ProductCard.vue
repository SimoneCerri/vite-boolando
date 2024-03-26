<script>
export default
    {
        name: "Card",
        props:
        {
            product: Object
        }
    }
</script>

<template>
    <div class="card">
        <img :src="product.image" alt="">
        <span v-if="product.discount" class="discount">-50%</span>
        <span v-if="product.sustenability" class="sustain">Sostenibilità</span>
        <span class="hearts">&hearts;</span> <br>
        <span class="brand">{{product.brand}}</span> <br>
        <span>
            <strong @click="$emit(showProduct)">
                {{product.name}}
            </strong>
        </span> <br>
        <span class="new_price">{{product.price}}&euro;</span>
        <span v-if="product.discount" class="old_price">{{ product.priceDiscounted }}&euro;</span>
    </div>
</template>

<style lang="scss"></style>