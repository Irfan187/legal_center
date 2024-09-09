<template>
    <div class="container mt-5">
        <h1>Legal Center</h1>
        <button @click="test">Test</button>
        
    </div>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const test = () => {
    alert('hgdshjhdgjsgdj');
}

</script>

<style scoped>
.example {
    text-align: center;
    margin-top: 50px;
}
</style>