<script>
/* import {products} from "../data.js" */
import ProductCard from "./main/ProductCard.vue"
import {store} from "../store.js"
import showProduct from "./main/ProductCard.vue"

export default
{
    name: "SiteMain",
    emit: showProduct,
    components:
    {
        ProductCard
    },
    data()
    {
        return{
            //products,
            store,
            modal : document.querySelector("#modal"),
            modalOverlay : document.querySelector("#modal-overlay"),
            closeButton : document.querySelector("#close-button"),
            openButton : document.querySelector("#open-button")
        }
    },
    methods:
    {
        /* prova()
        {

            var modal = document.querySelector("#modal");
            var modalOverlay = document.querySelector("#modal-overlay");
            var closeButton = document.querySelector("#close-button");
            var openButton = document.querySelector("#open-button");
        }, */

        prova_2(modal,modalOverlay)
        {
            closeButton.addEventListener("click", function ()
            {
                modal.classList.toggle("closed");
                modalOverlay.classList.toggle("closed");
            })
        },

        showProduct()
        {
            modal.classList.toggle("closed");
            modalOverlay.classList.toggle("closed");
            console.log("click?");
        }
    },
    mounted()
    {
        //console.log(store);
        store.getApi(store.data_api_url);
    },
    updated()
    {
        console.log(modal,modalOverlay);
    }
}

</script>

<template>
    <main id="site_main">
        <ProductCard v-for="product in store.products" :product="product" :key="product.id" />
    </main>
    <div class="modal-overlay" id="modal-overlay"></div>

    <div class="modal" id="modal">
        <button class="close-button" id="close-button">X</button>
        <div class="modal-guts">
            <h1>Title</h1>
            <p>Prova.</p>
            <p>Prova</p>

        </div>
    </div>

    <button id="open-button" class="open-button">Open Button</button>
    <!-- /#site_main -->
</template>

<style>
.modal {
    display: block;
    width: 600px;
    max-width: 100%;
    height: 400px;
    max-height: 100%;
    position: fixed;
    z-index: 100;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
}

.closed {
    display: none;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 50;
    background: rgba(0, 0, 0, 0.6);
}

.modal-guts {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    padding: 20px 50px 20px 20px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

ul {
    margin: 10px 0 10px 30px;
}

li,
p {
    margin: 0 0 10px 0;
}

h1 {
    margin: 0 0 20px 0;
}

.modal .close-button {
    position: absolute;
    z-index: 1;
    top: 10px;
    right: 20px;
    border: 0;
    background: black;
    color: white;
    padding: 5px 10px;
    font-size: 1.3rem;
}

.open-button {
    border: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: lightgreen;
    color: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 21px;
}
</style>
