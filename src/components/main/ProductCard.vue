<script>
export default
    {
        name: "Card",
        emits: ["someEvent"],
        props:
        {
            product: Object
        },
        methods:
        {
            /* event()
            {
                this.$emit("someEvent")
                console.log(this.$emit);
            } */
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
            <strong @click="$emit('someEvent')">
                {{product.name}}
            </strong>
        </span> <br>
        <span class="new_price">{{product.price}}&euro;</span>
        <span v-if="product.discount" class="old_price">{{ product.priceDiscounted }}&euro;</span>
    </div>
</template>

<style lang="scss"></style>