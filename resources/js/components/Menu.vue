<template>
    <div class="d-flex flex-column justify-content-between container vh-100 bg-white">
        <ul class="navbar-nav px-3">
            <li class="nav-item mb-3">
                <span class="nav-link text-muted">Menu</span>
            </li>

            <li class="nav-item">
                <router-link :to="{ name: 'cards' }" class="nav-link">
                    <i class="bi bi-credit-card"></i>
                    <span> Cards</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'alerts' }" class="nav-link">
                    <i class="bi bi-exclamation-triangle"></i>
                    <span> Alerts</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'input_elements' }" class="nav-link">
                    <i class="bi bi-hdmi"></i>
                    <span> Input Elements</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'buttons' }" class="nav-link">
                    <i class="bi bi-menu-button-wide"></i>
                    <span> Buttons </span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'selects' }" class="nav-link">
                    <i class="bi bi-menu-button-wide"></i>
                    <span> Selects </span>
                </router-link>
            </li>
        </ul>

        <div class="sidebar-footer text-center mt-auto">
            <span class="text-muted">© 2024 Your Company</span>
        </div>
    </div>
</template>

<script setup lang="js">
import { onMounted, reactive, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth-store";

const isActive = ref(false);
const authStore = useAuthStore();

</script>
