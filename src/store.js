//my data come from an api, called with axios and I use it with "reactive" funcion from vue

import { reactive } from 'vue';
import axios from "axios";

export const store = reactive
({
    products:[],
    data_api_url:"http://localhost:3000/products",
    /**
     * Make the ajax call with axios to take all Store's info about our Products
     * @param {String} url 
     */
    getApi(url)
    {
        axios.get(url)
        .then(response =>
        {
            //console.log(response.data);
            this.products = response.data
            //console.log(this.products);
        })
        .catch(err => {
            console.error(err.message) //log in console the error (if there are errors) just in case
        })        
    },
})
