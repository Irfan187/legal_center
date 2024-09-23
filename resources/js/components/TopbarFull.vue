<template>
    
</template>

<script setup lang='js'>

import { onMounted, ref, reactive } from "vue";
import apiClient from '@/utils/axios';
import { useRoute } from 'vue-router';
import router from '@/router';
import { useAuthStore } from "@/stores/auth-store.js";
const auth = useAuthStore();
const route = useRoute();
// console.log(auth.loadUser())

const logoutAction = () => {
    auth.processLogout();
}

</script>

<style>

</style>
