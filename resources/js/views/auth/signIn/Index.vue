<template>
    <Layout type="auth">
        <!-- <PageHeader :title="title" :breadcrumbs="breadcrumbs"></PageHeader> -->
        <b-row class="justify-content-center align-items-center">
            <b-col md="10" class="signin-col">
                <b-card class="border-none">

                    <h3 class="text-center">Sign In</h3>


                    <form ref="loginForm" class="needs-validation row" novalidate>

                        <div class="email-input-col">
                            <div class="position-relative ">
                                <label for="email" class="form-label">Email Address</label>
                                <input tabindex="1" type="email" placeholder="Enter your email address" name="email"
                                    data-validation="required|email" class="form-control form-field" id="email"
                                    aria-labelledby="label-email" :value.attr="''" required>

                                <span class="form-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                        viewBox="0 0 20 20" fill="none">
                                        <path
                                            d="M2.49984 2.5H17.4998C17.7209 2.5 17.9328 2.5878 18.0891 2.74408C18.2454 2.90036 18.3332 3.11232 18.3332 3.33333V16.6667C18.3332 16.8877 18.2454 17.0996 18.0891 17.2559C17.9328 17.4122 17.7209 17.5 17.4998 17.5H2.49984C2.27882 17.5 2.06686 17.4122 1.91058 17.2559C1.7543 17.0996 1.6665 16.8877 1.6665 16.6667V3.33333C1.6665 3.11232 1.7543 2.90036 1.91058 2.74408C2.06686 2.5878 2.27882 2.5 2.49984 2.5ZM16.6665 6.03167L10.0598 11.9483L3.33317 6.01333V15.8333H16.6665V6.03167ZM3.759 4.16667L10.0507 9.71833L16.2515 4.16667H3.759Z"
                                            fill="#1D2939" />
                                    </svg></span>

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
                                    type="password" name="password" data-validation="required"
                                    class="form-control password-input form-field" id="password"
                                    autocomplete="current-password" aria-labelledby="label-password" :value.attr="''"
                                    required>

                                <span class="form-icon"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                                        viewBox="0 0 21 20" fill="none">
                                        <path
                                            d="M5.5 6.66683V5.8335C5.5 4.50741 6.02678 3.23564 6.96447 2.29796C7.90215 1.36028 9.17392 0.833496 10.5 0.833496C11.8261 0.833496 13.0979 1.36028 14.0355 2.29796C14.9732 3.23564 15.5 4.50741 15.5 5.8335V6.66683H17.1667C17.3877 6.66683 17.5996 6.75463 17.7559 6.91091C17.9122 7.06719 18 7.27915 18 7.50016V17.5002C18 17.7212 17.9122 17.9331 17.7559 18.0894C17.5996 18.2457 17.3877 18.3335 17.1667 18.3335H3.83333C3.61232 18.3335 3.40036 18.2457 3.24408 18.0894C3.0878 17.9331 3 17.7212 3 17.5002V7.50016C3 7.27915 3.0878 7.06719 3.24408 6.91091C3.40036 6.75463 3.61232 6.66683 3.83333 6.66683H5.5ZM16.3333 8.3335H4.66667V16.6668H16.3333V8.3335ZM9.66667 13.1102C9.34893 12.9267 9.1006 12.6436 8.9602 12.3046C8.8198 11.9656 8.79517 11.5898 8.89012 11.2354C8.98508 10.881 9.19432 10.5679 9.4854 10.3445C9.77647 10.1212 10.1331 10.0001 10.5 10.0001C10.8669 10.0001 11.2235 10.1212 11.5146 10.3445C11.8057 10.5679 12.0149 10.881 12.1099 11.2354C12.2048 11.5898 12.1802 11.9656 12.0398 12.3046C11.8994 12.6436 11.6511 12.9267 11.3333 13.1102V15.0002H9.66667V13.1102ZM7.16667 6.66683H13.8333V5.8335C13.8333 4.94944 13.4821 4.10159 12.857 3.47647C12.2319 2.85135 11.3841 2.50016 10.5 2.50016C9.61594 2.50016 8.7681 2.85135 8.14298 3.47647C7.51786 4.10159 7.16667 4.94944 7.16667 5.8335V6.66683Z"
                                            fill="#1D2939" />
                                    </svg></span>

                                <div class="auth-pass-inputgroup">
                                    <b-button variant="link" class="text-decoration-none text-medium-light p-0"
                                        type="button" id="password-addon">
                                        <i ref="toggle_password_view"
                                            class="bx bx-show align-middle btn-spacing fw-400"></i>
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

let formErrors = ref({});
</script>


<style scoped>
    .signin-col{
        width: 550px;
    }
</style>