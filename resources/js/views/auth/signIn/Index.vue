<template>
    <Layout type="auth">
        <!-- <PageHeader :title="title" :breadcrumbs="breadcrumbs"></PageHeader> -->
        <b-row class="justify-content-center align-items-center">
            <b-col md="10" class="signin-col">
                <b-card class="border-none">

                    <h3 class="text-center">Legal Center</h3>


                    <form ref="loginForm" class="needs-validation row" novalidate>

                        <div class="email-input-col">
                            <div class="position-relative ">
                                <label for="email" class="form-label">Email Address</label>
                                <input tabindex="1" type="email" placeholder="Enter your email address" name="email"
                                    data-validation="required|email" class="form-control form-field rounded" id="email"
                                    aria-labelledby="label-email" :value.attr="''" required>

                                <span class="form-icon"><i class="fa fa-regular fa-envelope"></i></span>

                            </div>

                            <div v-if="formErrors.email"
                                class="invalid-feedback gap-1 line-height-130 d-flex align-items-center ">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24' height='24'
                                    fill='none' stroke='#f06548'>
                                    <circle cx='6' cy='6' r='4.5' />
                                    <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                    <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                </svg> {{ formErrors.email }}
                            </div>
                        </div>

                        <div class="password-input-col">

                            <div class="position-relative ">
                                <label class="form-label" for="password" id="label-password">Password</label>
                                <input @keydown.enter="submitLoginForm" placeholder="Enter your password" tabindex="2"
                                    :type="showPassword ? 'text' : 'password'" name="password"
                                    data-validation="required" class="form-control password-input form-field rounded"
                                    id="password" autocomplete="current-password" aria-labelledby="label-password"
                                    :value.attr="''" required>

                                <span class="form-icon"><i class="fa fa-solid fa-lock"></i></span>

                                <div class="auth-pass-inputgroup">
                                    <b-button variant="link" class="text-decoration-none text-medium-light p-0"
                                        @click="togglePassword" type="button">
                                        <span class="icon is-small is-right">
                                            <i class="bx"
                                                :class="{ 'bx-hide': showPassword, 'bx-show': !showPassword }"></i>
                                        </span>
                                    </b-button>
                                </div>
                            </div>

                            <div v-if="formErrors.password" class="invalid-feedback d-flex gap-1  align-items-center">
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24' height='24'
                                    fill='none' stroke='#f06548'>
                                    <circle cx='6' cy='6' r='4.5' />
                                    <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                    <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                </svg>{{ formErrors.password }}
                            </div>
                        </div>

                        <div class=" d-flex justify-content-between">
                            <!-- <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="remember">
                                <label class="form-check-label" for="remember">Remember me</label>
                            </div> -->

                        </div>

                        <div class="">

                            <b-overlay :show="show_overlay">
                                <b-button tabindex="3" size="lg" variant="primary"
                                    class="w-100 login-btn text-white font-500" type="button"
                                    @click="submitLoginForm">Log
                                    In</b-button>

                                <SocialLogin></SocialLogin>
                            </b-overlay>
                        </div>


                    </form>

                    <hr>

                    <div class=" text-center">
                        <p class="mb-0 font-400" style="color: #475467;">Don't have an account? <router-link
                                class="fw-500 no-underline" :to="{ name: 'register' }">Sign Up</router-link>
                        </p>
                    </div>
                </b-card>
            </b-col>

        </b-row>

    </Layout>
</template>


<script setup>
import { onMounted, ref, reactive, watch } from 'vue';
import Layout from "@/layouts/Index.vue";
import SocialLogin from "@/views/auth/social/Index.vue";
import { useFormManager } from '@/composables/useFormManager';
import { useAuthStore } from '@/stores/auth-store';
import apiClient from '@/utils/axios';
import { useHttpErrorManager } from '@/composables/useHttpErrorManager';
import { useRoute, useRouter } from 'vue-router';

const show_overlay = ref(false);
const showPassword = ref(false);
const formManager = useFormManager();

const loginForm = ref(null);
let formErrors = ref({});
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const togglePassword = () => {
    showPassword.value = !showPassword.value;
}


const submitLoginForm = async () => {
    try {
        // Validate the form using formManager
        await formManager.validate(loginForm.value, formErrors);
        
        formErrors.value = {};
        show_overlay.value = true; // Show loading overlay
        
        // Fetch the CSRF cookie for security
        await apiClient.get('/sanctum/csrf-cookie');
        
        // Submit the login data
        const response = await apiClient.post('auth/login', loginForm.value);

        // Load the authenticated user into the auth store
        await authStore.loadUser();

        // Turn off the loading overlay
        show_overlay.value = false;

        // Handle redirection after login
        let returnTo = route.query?.returnTo;
        let paramsTo = route.query?.params ? JSON.parse(route.query.params) : null;

        if (returnTo) {
            // If returnTo exists, redirect back to the intended route
            await router.push({ name: returnTo, params: paramsTo || {} });
        } else {
            // Default redirection to the dashboard if no returnTo is provided
            await router.push({ name: 'dashboard' });
        }

    } catch (error) {
        // Handle validation errors or server errors
        formErrors.value = await useHttpErrorManager().handleError(error, true);
        formManager.displayServerSideFormErrors(loginForm.value, formErrors.value);
        show_overlay.value = false; // Turn off the loading overlay
        console.error("Login failed:", error); // Log the error for debugging
    }
};

</script>


<style scoped>
.signin-col {
    width: 550px;
}
</style>
