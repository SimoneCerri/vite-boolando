<script>

export default
    {
        name: "Modal",
        emits:["close-modal"],
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
    <div class="modal-overlay">
        <div class="modal df">
            <div class="modal_image">
               <img class="check" :src="product.image" alt="" /> 
            </div>
            <div class="modal_info">
              <h6>
                <strong>
                    {{product.name}}
                </strong>
            </h6>
            <p>by</p>
            <p class="brand">{{ product.brand }}</p>
            <span class="new_price">{{ product.price}}&euro;</span>
            <span v-if="product.discount" class="old_price">{{ product.priceDiscounted }}&euro;</span>  
            </div>
        </div>
        <div class="close">
            <!-- <img class="close-img" src="" alt="" /> -->
            <button @click="$emit('close-modal')">X</button>
        </div>
    </div>
</template>

<style scoped>
.df 
{
    display: flex;
    justify-content: center;
    align-items: center;

    .modal_image
    {
        flex-basis: 50%;
    }
}
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
    z-index: 999;
}

.modal {
    text-align: center;
    background-color: white;
    height: 500px;
    width: 500px;
    margin-top: 10%;
    padding: 60px 0;
    border-radius: 20px;
}

.close {
    cursor: pointer;
    position: absolute;
    left:66%;
    top:6%;
}

.check {
    width: 150px;
    box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 20px 0;
}

p {
    font-size: 16px;
    margin: 20px 0;
}

button {
    background-color: #333;
    width: 40px;
    height: 40px;
    color: red;
    font-size: 14px;
    border-radius: 16px;
    margin-top: 50px;
}
</style>