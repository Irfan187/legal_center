<template>
    <Layout type="app">
        <AdminDashboard v-if="authStore.userHasRole(['admin'])"></AdminDashboard>
        <ClientDashboard v-if="authStore.userHasRole(['client'])"></ClientDashboard>
        <ModeratorDashboard v-if="authStore.userHasRole(['moderator'])"></ModeratorDashboard>
        <LawyerDashboard v-if="authStore.userHasRole(['lawyer'])"></LawyerDashboard>

    </Layout>

</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Layout from "@/layouts/Index.vue";
import { useAuthStore } from "@/stores/auth-store";

const authStore = useAuthStore();

import AdminDashboard from "@/views/dashboard/AdminDashboard.vue";
import ClientDashboard from "@/views/dashboard/ClientDashboard.vue";
import ModeratorDashboard from "@/views/dashboard/ModeratorDashboard.vue";
import LawyerDashboard from "@/views/dashboard/LawyerDashboard.vue";


</script>

<style scoped>
.example {
    text-align: center;
    margin-top: 50px;
}
</style>

