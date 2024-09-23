<template>
    <Layout type='auth'>
        <!-- <PageHeader :title="title" :breadcrumbs="breadcrumbs"></PageHeader> -->
        <b-row class="justify-content-center">
            <b-col md="10" class="signup-col custom-rounded">
                <b-card class="border-none">
                    <h3 class="text-center">Create an Account</h3>
                    <!-- <p class="text-tertiary fs-14 fw-400">Let's Sign up first for enter into Mahara.</p> -->

                    <b-overlay variant="dark" :show="show_overlay">
                        <div class="">
                            <form ref="registerForm" class="needs-validation registerForm-col row" novalidate>

                                <div class="col-sm-12 col-md-6 mb-18">
                                    <div class="position-relative ">
                                        <label for="first_name" class="form-label">First Name</label>
                                        <input placeholder="Enter first name" tabindex="1" type="text"
                                            data-validation="required" data-validation-name="First Name"
                                            name="first_name" class="form-control form-field rounded" id="first_name"
                                            :value.attr="''" required>
                                        <span class="form-icon">
                                            <i class="fa fa-user"></i>
                                        </span>
                                    </div>

                                    <div v-if="formErrors.first_name"
                                        class="invalid-feedback d-flex align-items-center gap-1">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24'
                                            height='24' fill='none' stroke='#f06548'>
                                            <circle cx='6' cy='6' r='4.5' />
                                            <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                            <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                        </svg> {{ formErrors.first_name }}
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-6 mb-18">
                                    <div class="position-relative ">
                                        <label for="last_name" class="form-label">Last Name</label>
                                        <input tabindex="2" placeholder="Enter last name" type="text"
                                            data-validation="required" data-validation-name="Last Name" name="last_name"
                                            class="form-control form-field rounded" id="last_name" :value.attr="''" required>
                                        <span class="form-icon">
                                            <i class="fa fa-user"></i>
                                        </span>
                                    </div>

                                    <div v-if="formErrors.last_name"
                                        class="invalid-feedback d-flex align-items-center gap-1">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24'
                                            height='24' fill='none' stroke='#f06548'>
                                            <circle cx='6' cy='6' r='4.5' />
                                            <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                            <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                        </svg> {{ formErrors.last_name }}
                                    </div>
                                </div>

                                <div class="col-sm-12 mb-18">
                                    <div class="phone-number-input">
                                        <label for="contact" class="form-label">Phone Number</label>
                                        <vue-tel-input class="form-control rounded" ref="phoneInput" v-model="phone"
                                            :dropdownOptions="{ showFlags: true, showDialCodeInList: true, showSearchBox: true, tabindex: 3 }"
                                            :inputOptions="{ tabindex: 4, id: 'phone_number', name: 'phone_number', showDialCode: true, autocomplete: 'on', placeholder: 'Enter a phone number', type: 'tel', required: true }"
                                            data-validation="required|phone" defaultCountry="pk"
                                            mode="international"></vue-tel-input>
                                    </div>
                                    <div v-if="contactCheck == 1"
                                        class="invalid-feedback d-flex align-items-center gap-1">

                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24'
                                            height='24' fill='none' stroke='#f06548'>
                                            <circle cx='6' cy='6' r='4.5' />
                                            <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                            <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                        </svg> The phone number field is required
                                    </div>
                                </div>

                                <div class="col-sm-12 mb-18">
                                    <div class="position-relative ">
                                        <label for="email" class="form-label">Email</label>
                                        <input tabindex="5" type="email" placeholder="Enter your email address"
                                            data-validation="required|email" name="email"
                                            class="form-control form-field rounded" id="email" required autocomplete="username"
                                            :value.attr="''">

                                        <span class="form-icon">
                                            <i class="fa fa-regular fa-envelope"></i>
                                        </span>
                                    </div>
                                    <div v-if="formErrors.email"
                                        class="invalid-feedback d-flex align-items-center gap-1">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24'
                                            height='24' fill='none' stroke='#f06548'>
                                            <circle cx='6' cy='6' r='4.5' />
                                            <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                            <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                        </svg>{{ formErrors.email }}
                                    </div>
                                </div>

                                <div class="password-input-col mb-18">
                                    <div class="position-relative">
                                        <label class="form-label" for="password">Password</label>
                                        <input tabindex="6" ref="password" placeholder="Enter your password"
                                            data-validation="required|minLen:8" :type="showPassword ? 'text' : 'password'"
                                            class="form-control pe-5 password-input form-field rounded" onpaste="return false"
                                            id="password" name="password" aria-describedby="password" :value.attr="''"
                                            required autocomplete="new-password">

                                        <span class="form-icon">
                                            <i class="fa fa-solid fa-lock"></i>
                                        </span>

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

                                    <div v-if="formErrors.password"
                                        class="invalid-feedback d-flex align-items-center gap-1">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24'
                                            height='24' fill='none' stroke='#f06548'>
                                            <circle cx='6' cy='6' r='4.5' />
                                            <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                            <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                        </svg>
                                        {{ formErrors.password }}
                                    </div>
                                </div>
                                <div class="password-input-col mb-18">
                                    <div class="position-relative">
                                        <label class="form-label" for="password">Confirm Password</label>
                                        <input tabindex="7" placeholder="Confirm your password" ref="confirm_password"
                                            data-validation="required|minLen:8" :type="showConfirmPassword ? 'text' : 'password'"
                                            name="password_confirmation" data-validation-name="Confirm Password"
                                            class="form-control pe-5 password-input form-field rounded" onpaste="return false"
                                            id="password_confirmation" aria-describedby="passwordConfirmation"
                                            :value.attr="''" required autocomplete="new-password">

                                        <span class="form-icon">
                                            <i class="fa fa-solid fa-lock"></i>
                                        </span>

                                        <div class="auth-pass-inputgroup">
                                            <b-button variant="link" class="text-decoration-none text-medium-light p-0"
                                                @click="toggleConfirmPassword" type="button">
                                                <span class="icon is-small is-right">
                                                    <i class="bx"
                                                        :class="{ 'bx-hide': showConfirmPassword, 'bx-show': !showConfirmPassword }"></i>
                                                </span>
                                            </b-button>
                                        </div>
                                    </div>

                                    <div v-if="formErrors.password"
                                        class="invalid-feedback d-flex align-items-center gap-1">
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='24'
                                            height='24' fill='none' stroke='#f06548'>
                                            <circle cx='6' cy='6' r='4.5' />
                                            <path stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z' />
                                            <circle cx='6' cy='8.2' r='.6' fill='#f06548' stroke='none' />
                                        </svg>
                                        {{ formErrors.password }}
                                    </div>
                                </div>


                                <!-- <div class="mb-2">
                                    <div class="form-check">
                                        <input tabindex="7" class="form-check-input" data-validation-name="signup_policy"
                                            ref="signup_policy" type="checkbox" id="remember">
                                        <label class="form-check-label" for="remember">I agree to Mahara's <router-link
                                                class="no-underline" :to="{ name: 'register' }">Cookie</router-link> and
                                            <router-link class="no-underline" :to="{ name: 'register' }">Privacy
                                                Policy.</router-link></label>
                                    </div>
                                    <div v-if="formErrors.policy_check" class="invalid-feedback">
                                        {{ formErrors.policy_check }}
                                    </div>
                                </div> -->

                                <div class="">
                                    <b-button tabindex="8" size="lg" variant="primary"
                                        class="w-100 login-btn text-white font-500 py-3" type="button">Sign
                                        up</b-button>
                                </div>

                                <SocialLogin></SocialLogin>

                            </form>
                            <hr>
                        </div>
                    </b-overlay>

                    <div class="mt-4 fw-500 text-center">
                        <p class="mb-0 font-400 " style="color: #475467;">Already have an account? <router-link
                                class="font-500 no-underline" :to="{ name: 'login' }">Sign In</router-link></p>
                    </div>
                </b-card>
            </b-col>


        </b-row>

    </Layout>
</template>



<script setup lang='js'>

import Layout from "@/layouts/Index.vue";

import SocialLogin from "@/views/auth/social/Index.vue";
import { onMounted, ref, reactive, watch } from 'vue';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/vue-tel-input.css';
import { useAppHelpers } from "@/composables/useAppHelpers";

let formErrors = ref({});
const helper = useAppHelpers();

const show_overlay = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);



const togglePassword = () => {
    showPassword.value = !showPassword.value;
}


const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value;
}





</script>


<style scoped>
.signup-col {
    width: 550px;
}

.rounded {
    border-radius: 5px;
}
</style>