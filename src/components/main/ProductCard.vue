<script>
export default
    {
        name: "Card",
        emits: ["show-modal"],
        props:
        {
            product: Object
        },
        methods:
        {

        }
    }
</script>

<template>
    <div class="card">
        <img :src="product.image" alt="">
        <span v-if="product.discount" class="discount">-50%</span>
        <span v-if="product.sustenability" class="sustain">Sostenibilità</span>
        <span class="hearts">&hearts;</span> <br>
        <div class="info" @click="$emit('show-modal', product)">
            <span class="brand">{{ product.brand }}</span>
            <br>
            <span>
                <strong>
                    {{ product.name }}
                </strong>
            </span>
            <br>
            <span class="new_price">{{ product.price }}&euro;</span>
            <span v-if="product.discount" class="old_price">{{ product.priceDiscounted }}&euro;</span>
        </div>
    </div>
</template>

<style></style>