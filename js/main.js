'use strict';
const { createApp } = Vue;

createApp({
    data() {
        return {
            counter: 0
        }
    },
    created(){
        for(let i = 0; i < 10; i++){
            console.log
        }
    }
}).mount('#app');