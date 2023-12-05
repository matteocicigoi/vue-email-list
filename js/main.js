'use strict';
const { createApp } = Vue;

createApp({
    data() {
        return {
            email: [],
            counter: 0,
        }
    },
    created(){
        for(let i = 0; i < 10; i++){
            axios('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                this.email.push(response.data.response);
                this.counter++;
            });
        }
    }
}).mount('#app');