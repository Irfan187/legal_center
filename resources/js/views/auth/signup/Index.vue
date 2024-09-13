<template>
    <Layout type='auth'>
        <!-- <PageHeader :title="title" :breadcrumbs="breadcrumbs"></PageHeader> -->
        <b-row class="justify-content-center">
            <b-col md="10" class="signup-col">
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
                                            name="first_name" class="form-control form-field" id="first_name"
                                            :value.attr="''" required>
                                        <span class="form-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M16.6667 18.3335H15V16.6668C15 16.0038 14.7366 15.3679 14.2678 14.8991C13.799 14.4302 13.1631 14.1668 12.5 14.1668H7.50004C6.837 14.1668 6.20111 14.4302 5.73227 14.8991C5.26343 15.3679 5.00004 16.0038 5.00004 16.6668V18.3335H3.33337V16.6668C3.33337 15.5618 3.77236 14.502 4.55376 13.7206C5.33516 12.9391 6.39497 12.5002 7.50004 12.5002H12.5C13.6051 12.5002 14.6649 12.9391 15.4463 13.7206C16.2277 14.502 16.6667 15.5618 16.6667 16.6668V18.3335ZM10 10.8335C9.34343 10.8335 8.69325 10.7042 8.08662 10.4529C7.48 10.2016 6.9288 9.83332 6.46451 9.36903C6.00021 8.90474 5.63192 8.35354 5.38064 7.74691C5.12937 7.14029 5.00004 6.49011 5.00004 5.8335C5.00004 5.17689 5.12937 4.52671 5.38064 3.92008C5.63192 3.31345 6.00021 2.76226 6.46451 2.29796C6.9288 1.83367 7.48 1.46537 8.08662 1.2141C8.69325 0.962825 9.34343 0.833496 10 0.833496C11.3261 0.833496 12.5979 1.36028 13.5356 2.29796C14.4733 3.23564 15 4.50741 15 5.8335C15 7.15958 14.4733 8.43135 13.5356 9.36903C12.5979 10.3067 11.3261 10.8335 10 10.8335ZM10 9.16683C10.8841 9.16683 11.7319 8.81564 12.3571 8.19052C12.9822 7.5654 13.3334 6.71755 13.3334 5.8335C13.3334 4.94944 12.9822 4.10159 12.3571 3.47647C11.7319 2.85135 10.8841 2.50016 10 2.50016C9.11599 2.50016 8.26814 2.85135 7.64302 3.47647C7.0179 4.10159 6.66671 4.94944 6.66671 5.8335C6.66671 6.71755 7.0179 7.5654 7.64302 8.19052C8.26814 8.81564 9.11599 9.16683 10 9.16683Z"
                                                    fill="#101828" />
                                            </svg>
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
                                            class="form-control form-field" id="last_name" :value.attr="''" required>
                                        <span class="form-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M16.6667 18.3335H15V16.6668C15 16.0038 14.7366 15.3679 14.2678 14.8991C13.799 14.4302 13.1631 14.1668 12.5 14.1668H7.50004C6.837 14.1668 6.20111 14.4302 5.73227 14.8991C5.26343 15.3679 5.00004 16.0038 5.00004 16.6668V18.3335H3.33337V16.6668C3.33337 15.5618 3.77236 14.502 4.55376 13.7206C5.33516 12.9391 6.39497 12.5002 7.50004 12.5002H12.5C13.6051 12.5002 14.6649 12.9391 15.4463 13.7206C16.2277 14.502 16.6667 15.5618 16.6667 16.6668V18.3335ZM10 10.8335C9.34343 10.8335 8.69325 10.7042 8.08662 10.4529C7.48 10.2016 6.9288 9.83332 6.46451 9.36903C6.00021 8.90474 5.63192 8.35354 5.38064 7.74691C5.12937 7.14029 5.00004 6.49011 5.00004 5.8335C5.00004 5.17689 5.12937 4.52671 5.38064 3.92008C5.63192 3.31345 6.00021 2.76226 6.46451 2.29796C6.9288 1.83367 7.48 1.46537 8.08662 1.2141C8.69325 0.962825 9.34343 0.833496 10 0.833496C11.3261 0.833496 12.5979 1.36028 13.5356 2.29796C14.4733 3.23564 15 4.50741 15 5.8335C15 7.15958 14.4733 8.43135 13.5356 9.36903C12.5979 10.3067 11.3261 10.8335 10 10.8335ZM10 9.16683C10.8841 9.16683 11.7319 8.81564 12.3571 8.19052C12.9822 7.5654 13.3334 6.71755 13.3334 5.8335C13.3334 4.94944 12.9822 4.10159 12.3571 3.47647C11.7319 2.85135 10.8841 2.50016 10 2.50016C9.11599 2.50016 8.26814 2.85135 7.64302 3.47647C7.0179 4.10159 6.66671 4.94944 6.66671 5.8335C6.66671 6.71755 7.0179 7.5654 7.64302 8.19052C8.26814 8.81564 9.11599 9.16683 10 9.16683Z"
                                                    fill="#101828" />
                                            </svg>
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
                                        <vue-tel-input class="form-control" ref="phoneInput" v-model="phone"
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
                                            class="form-control form-field" id="email" required autocomplete="username"
                                            :value.attr="''">

                                        <span class="form-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M2.49996 2.5H17.5C17.721 2.5 17.9329 2.5878 18.0892 2.74408C18.2455 2.90036 18.3333 3.11232 18.3333 3.33333V16.6667C18.3333 16.8877 18.2455 17.0996 18.0892 17.2559C17.9329 17.4122 17.721 17.5 17.5 17.5H2.49996C2.27895 17.5 2.06698 17.4122 1.9107 17.2559C1.75442 17.0996 1.66663 16.8877 1.66663 16.6667V3.33333C1.66663 3.11232 1.75442 2.90036 1.9107 2.74408C2.06698 2.5878 2.27895 2.5 2.49996 2.5ZM16.6666 6.03167L10.06 11.9483L3.33329 6.01333V15.8333H16.6666V6.03167ZM3.75913 4.16667L10.0508 9.71833L16.2516 4.16667H3.75913Z"
                                                    fill="#1D2939" />
                                            </svg>
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
                                            class="form-control pe-5 password-input form-field" onpaste="return false"
                                            id="password" name="password" aria-describedby="password" :value.attr="''"
                                            required autocomplete="new-password">

                                        <span class="form-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                                                viewBox="0 0 21 20" fill="none">
                                                <path
                                                    d="M5.5 6.66683V5.8335C5.5 4.50741 6.02678 3.23564 6.96447 2.29796C7.90215 1.36028 9.17392 0.833496 10.5 0.833496C11.8261 0.833496 13.0979 1.36028 14.0355 2.29796C14.9732 3.23564 15.5 4.50741 15.5 5.8335V6.66683H17.1667C17.3877 6.66683 17.5996 6.75463 17.7559 6.91091C17.9122 7.06719 18 7.27915 18 7.50016V17.5002C18 17.7212 17.9122 17.9331 17.7559 18.0894C17.5996 18.2457 17.3877 18.3335 17.1667 18.3335H3.83333C3.61232 18.3335 3.40036 18.2457 3.24408 18.0894C3.0878 17.9331 3 17.7212 3 17.5002V7.50016C3 7.27915 3.0878 7.06719 3.24408 6.91091C3.40036 6.75463 3.61232 6.66683 3.83333 6.66683H5.5ZM16.3333 8.3335H4.66667V16.6668H16.3333V8.3335ZM9.66667 13.1102C9.34893 12.9267 9.1006 12.6436 8.9602 12.3046C8.8198 11.9656 8.79517 11.5898 8.89012 11.2354C8.98508 10.881 9.19432 10.5679 9.4854 10.3445C9.77647 10.1212 10.1331 10.0001 10.5 10.0001C10.8669 10.0001 11.2235 10.1212 11.5146 10.3445C11.8057 10.5679 12.0149 10.881 12.1099 11.2354C12.2048 11.5898 12.1802 11.9656 12.0398 12.3046C11.8994 12.6436 11.6511 12.9267 11.3333 13.1102V15.0002H9.66667V13.1102ZM7.16667 6.66683H13.8333V5.8335C13.8333 4.94944 13.4821 4.10159 12.857 3.47647C12.2319 2.85135 11.3841 2.50016 10.5 2.50016C9.61594 2.50016 8.7681 2.85135 8.14298 3.47647C7.51786 4.10159 7.16667 4.94944 7.16667 5.8335V6.66683Z"
                                                    fill="#1D2939" />
                                            </svg>
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
                                            class="form-control pe-5 password-input form-field" onpaste="return false"
                                            id="password_confirmation" aria-describedby="passwordConfirmation"
                                            :value.attr="''" required autocomplete="new-password">

                                        <span class="form-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"
                                                viewBox="0 0 21 20" fill="none">
                                                <path
                                                    d="M5.5 6.66683V5.8335C5.5 4.50741 6.02678 3.23564 6.96447 2.29796C7.90215 1.36028 9.17392 0.833496 10.5 0.833496C11.8261 0.833496 13.0979 1.36028 14.0355 2.29796C14.9732 3.23564 15.5 4.50741 15.5 5.8335V6.66683H17.1667C17.3877 6.66683 17.5996 6.75463 17.7559 6.91091C17.9122 7.06719 18 7.27915 18 7.50016V17.5002C18 17.7212 17.9122 17.9331 17.7559 18.0894C17.5996 18.2457 17.3877 18.3335 17.1667 18.3335H3.83333C3.61232 18.3335 3.40036 18.2457 3.24408 18.0894C3.0878 17.9331 3 17.7212 3 17.5002V7.50016C3 7.27915 3.0878 7.06719 3.24408 6.91091C3.40036 6.75463 3.61232 6.66683 3.83333 6.66683H5.5ZM16.3333 8.3335H4.66667V16.6668H16.3333V8.3335ZM9.66667 13.1102C9.34893 12.9267 9.1006 12.6436 8.9602 12.3046C8.8198 11.9656 8.79517 11.5898 8.89012 11.2354C8.98508 10.881 9.19432 10.5679 9.4854 10.3445C9.77647 10.1212 10.1331 10.0001 10.5 10.0001C10.8669 10.0001 11.2235 10.1212 11.5146 10.3445C11.8057 10.5679 12.0149 10.881 12.1099 11.2354C12.2048 11.5898 12.1802 11.9656 12.0398 12.3046C11.8994 12.6436 11.6511 12.9267 11.3333 13.1102V15.0002H9.66667V13.1102ZM7.16667 6.66683H13.8333V5.8335C13.8333 4.94944 13.4821 4.10159 12.857 3.47647C12.2319 2.85135 11.3841 2.50016 10.5 2.50016C9.61594 2.50016 8.7681 2.85135 8.14298 3.47647C7.51786 4.10159 7.16667 4.94944 7.16667 5.8335V6.66683Z"
                                                    fill="#1D2939" />
                                            </svg>
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