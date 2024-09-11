<template>
    <div class="header second-header-main">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex align-items-center">
                        <!-- Dark Logo-->
                        <router-link to="/" class="logo logo-dark">
                            <span class="logo-sm">
                                <span><img class="" src=""
                                        style="width: 50px;" alt=""></span>
                                <!-- <img src="@/assets/images/logo-sm.png" alt="" height="22" /> -->
                            </span>
                            <span class="logo-lg d-flex">
                                
                                    Legal Center
                                <!-- <img src="@/assets/images/logo-dark.png" alt="" height="17" /> -->
                            </span>
                        </router-link>

                        <!-- Light Logo-->
                        <router-link to="/" class="logo logo-light">
                            <span class="logo-sm">
                                <span><img class="" src=""
                                        style="width: 50px;margin-top: -40px;" alt=""></span>
                                <!-- <img src="@/assets/images/logo-sm.png" alt="" height="22" /> -->
                            </span>
                            <span class="logo-lg">
                                <span><svg style="width: 50px;margin-top: -40px;" xmlns="http://www.w3.org/2000/svg"
                                        width="95" height="20" viewBox="0 0 95 20" fill="none">
                                        <path d="M71.9131 4.92676V20.0006H76.0806V11.1238V7.31099V4.92676H71.9131Z"
                                            fill="#09404B">
                                        </path>
                                        <path
                                            d="M81.5977 4.92605L76.6716 4.92604L76.6716 9.06396L77.4597 9.06396C79.745 9.06396 81.5977 7.21135 81.5977 4.92605Z"
                                            fill="#09404B"></path>
                                        <path
                                            d="M40.9365 19.9999V0H45.104V6.99505C45.7345 6.06895 46.4439 5.399 47.2321 4.98521C48.0202 4.57142 48.9168 4.36452 49.9217 4.36452C51.5572 4.36452 52.838 4.85713 53.7641 5.84235C54.6902 6.80786 55.1532 8.15761 55.1532 9.8916V19.9999H50.9858V10.5418C50.9858 9.73396 50.7887 9.11327 50.3946 8.67978C50.0005 8.24628 49.4685 8.02953 48.7986 8.02953C48.0498 8.02953 47.3404 8.28569 46.6705 8.79801C45.3542 9.8351 45.104 11.6493 45.104 13.325V19.9999H40.9365Z"
                                            fill="#09404B"></path>
                                        <path
                                            d="M30.9456 19.9704C29.3889 19.9704 28.1377 19.7536 27.1919 18.4334C26.2658 17.0935 25.8027 15.261 25.8027 12.9359C25.8027 10.1379 26.5121 8.00983 27.9308 6.5517C29.3495 5.07387 31.3889 4.33496 34.049 4.33496C35.5465 4.33496 37.3002 4.57141 39.3101 5.04432V19.9704H35.4382V17.5467V17.2118C34.4135 19.1231 32.8372 19.9704 30.9456 19.9704ZM31.8323 16.7783C32.4825 16.7783 33.1032 16.4334 33.6943 15.7438C34.9845 14.2386 35.2904 12.174 35.2904 10.1915V8.23643C34.9751 8.13791 34.65 8.06894 34.315 8.02953C33.9801 7.99012 33.6746 7.97042 33.3988 7.97042C31.0145 7.97042 29.8224 9.56647 29.8224 12.7586C29.8224 14 29.9998 14.9852 30.3544 15.7142C30.7091 16.4236 31.2017 16.7783 31.8323 16.7783Z"
                                            fill="#09404B"></path>
                                        <path
                                            d="M61.9221 19.9704C60.3655 19.9704 59.1143 19.7536 58.1685 18.4334C57.2424 17.0935 56.7793 15.261 56.7793 12.9359C56.7793 10.1379 57.4887 8.00983 58.9074 6.5517C60.3261 5.07387 62.3655 4.33496 65.0256 4.33496C66.5231 4.33496 68.2768 4.57141 70.2866 5.04432V19.9704H66.4147V17.5467V17.2118C65.3901 19.1231 63.8138 19.9704 61.9221 19.9704ZM62.8088 16.7783C63.4591 16.7783 64.0798 16.4334 64.6709 15.7438C65.9611 14.2386 66.267 12.174 66.267 10.1915V8.23643C65.9517 8.13791 65.6266 8.06894 65.2916 8.02953C64.9566 7.99012 64.6512 7.97042 64.3753 7.97042C61.9911 7.97042 60.799 9.56647 60.799 12.7586C60.799 14 60.9763 14.9852 61.331 15.7142C61.6857 16.4236 62.1783 16.7783 62.8088 16.7783Z"
                                            fill="#09404B"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.0932 7.57075C13.8121 6.62753 13.0091 5.55603 12.0605 5.01398C11.2526 4.46226 10.1182 4.33496 8.95564 4.33496C7.87206 4.33496 6.90693 4.5939 6.06025 5.11177L0 11.374V19.9704H4.16748V12.6693C4.16748 11.6349 4.3037 10.5682 4.90364 9.72559C5.15225 9.37641 5.42903 9.07706 5.73397 8.82756C6.38422 8.27584 7.06402 7.99997 7.77338 7.99997C8.42362 7.99997 8.94579 8.22658 9.33988 8.67978C9.73396 9.11327 9.93101 9.72411 9.93101 10.5123V19.9704H14.0932V7.57075Z"
                                            fill="#09404B"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M14.0928 19.9704V7.58884C14.5855 6.50475 15.3123 5.42065 16.0192 5.10343C16.8862 4.59112 17.8714 4.33496 18.9748 4.33496C20.6103 4.33496 21.8812 4.82757 22.7876 5.81279C23.7137 6.7783 24.1768 8.12805 24.1768 9.86204V19.9704H20.0093V10.5123C20.0093 9.7044 19.8123 9.08372 19.4182 8.65022C19.0438 8.21672 18.5315 7.99997 17.8812 7.99997C17.0536 7.99997 16.295 8.33495 15.6054 9.0049C15.2059 9.4044 14.8659 9.87047 14.5855 10.4031C14.1929 11.149 14.098 12.0055 14.098 12.8484V19.9704H14.0928Z"
                                            fill="#09404B"></path>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M81.9028 18.4334C82.8486 19.7536 84.0999 19.9704 85.6565 19.9704C87.5481 19.9704 89.1245 19.1231 90.1491 17.2118V17.5467V19.7457H94.021V5.04432C92.0112 4.57141 90.2575 4.33496 88.76 4.33496C86.0999 4.33496 84.0605 5.07387 82.6417 6.5517C81.223 8.00983 80.5137 10.1379 80.5137 12.9359C80.5137 15.261 80.9767 17.0935 81.9028 18.4334ZM88.4053 15.7438C87.8141 16.4334 87.1935 16.7783 86.5432 16.7783C85.9127 16.7783 85.4201 16.4236 85.0654 15.7142C84.7107 14.9852 84.5334 14 84.5334 12.7586C84.5334 9.56647 85.7255 7.97042 88.1097 7.97042C88.3856 7.97042 88.691 7.99012 89.026 8.02953C89.3609 8.06894 89.6861 8.13791 90.0013 8.23643V11.3844C90.0013 12.5813 89.7781 13.7901 89.1199 14.7898C88.8922 15.1357 88.6539 15.4537 88.4053 15.7438Z"
                                            fill="#09404B"></path>
                                    </svg></span>
                                <!-- <img src="@/assets/images/logo-light.png" alt="" height="17" /> -->
                            </span>
                        </router-link>

                    <div class="second-header">
                        <div class="header-middle">
                            <div class="header-search-bar">
                                <div class="search-group search-group2 cross">
                                    <span class="search-icon">
                                        <svg width="21" height="20" viewBox="0 0 21 20" id="search" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M15.7889 13.8475L19.358 17.4159L18.1789 18.595L14.6105 15.0259C13.2828 16.0902 11.6314 16.6691 9.92969 16.6667C5.78969 16.6667 2.42969 13.3067 2.42969 9.16669C2.42969 5.02669 5.78969 1.66669 9.92969 1.66669C14.0697 1.66669 17.4297 5.02669 17.4297 9.16669C17.4321 10.8684 16.8532 12.5198 15.7889 13.8475ZM14.1172 13.2292C15.1748 12.1416 15.7654 10.6837 15.763 9.16669C15.763 5.94335 13.1522 3.33335 9.92969 3.33335C6.70635 3.33335 4.09635 5.94335 4.09635 9.16669C4.09635 12.3892 6.70635 15 9.92969 15C11.4467 15.0024 12.9046 14.4118 13.9922 13.3542L14.1172 13.2292Z" />
                                        </svg>
                                    </span>
                                    <input type="text" placeholder="Search Lawyers" id="search_val"
                                        :value="route.query.search" @keyup.enter="findJobs()">

                                    <button @click="reset_search()" class="reset_search"><i
                                            class="ri ri-close-fill"></i></button>

                                </div>
                                <button class="search-group-button  text-white" @click="findJobs()">
                                    <span>
                                        <span>Find</span>
                                        <svg width="21" height="20" viewBox="0 0 21 20" id="arrow_right" fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.7395 9.16664L9.26952 4.69664L10.4479 3.51831L16.9295 9.99998L10.4479 16.4816L9.26952 15.3033L13.7395 10.8333H3.59619V9.16664H13.7395Z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>

                        </div>

                        <div class="header-right header-right-humburger">

                            <router-link class="d-flex align-items-center gap-10" :to="{ 'name': 'login' }"
                                v-if="auth.user == null">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M9.99984 18.3332C5.39734 18.3332 1.6665 14.6023 1.6665 9.99984C1.6665 5.39734 5.39734 1.6665 9.99984 1.6665C14.6023 1.6665 18.3332 5.39734 18.3332 9.99984C18.3332 14.6023 14.6023 18.3332 9.99984 18.3332ZM5.844 15.2132C7.02363 16.1563 8.48957 16.6689 9.99984 16.6665C11.6415 16.6665 13.144 16.0732 14.3057 15.0898C13.7629 14.533 13.114 14.0906 12.3974 13.7888C11.6807 13.4871 10.9108 13.3322 10.1332 13.3332C9.32699 13.3322 8.52942 13.4989 7.79106 13.8225C7.05269 14.1462 6.38965 14.6197 5.844 15.2132ZM4.67984 14.0165C5.38022 13.2732 6.2254 12.6813 7.16329 12.2771C8.10118 11.8729 9.1119 11.6651 10.1332 11.6665C11.1179 11.6652 12.0931 11.8585 13.003 12.2352C13.9128 12.6118 14.7392 13.1645 15.4348 13.8615C16.1482 12.8574 16.5695 11.6754 16.652 10.4464C16.7344 9.21749 16.4748 7.98974 15.9019 6.89938C15.329 5.80902 14.4653 4.89869 13.4065 4.26937C12.3477 3.64006 11.1352 3.31637 9.90368 3.33421C8.6721 3.35206 7.46955 3.71074 6.42944 4.37047C5.38932 5.03019 4.5523 5.96517 4.01125 7.07167C3.47019 8.17817 3.24625 9.41293 3.36427 10.639C3.48229 11.865 3.93765 13.0344 4.67984 14.0173V14.0165ZM9.99984 10.8332C9.11578 10.8332 8.26794 10.482 7.64281 9.85686C7.01769 9.23174 6.6665 8.38389 6.6665 7.49984C6.6665 6.61578 7.01769 5.76794 7.64281 5.14281C8.26794 4.51769 9.11578 4.1665 9.99984 4.1665C10.8839 4.1665 11.7317 4.51769 12.3569 5.14281C12.982 5.76794 13.3332 6.61578 13.3332 7.49984C13.3332 8.38389 12.982 9.23174 12.3569 9.85686C11.7317 10.482 10.8839 10.8332 9.99984 10.8332ZM9.99984 9.1665C10.4419 9.1665 10.8658 8.99091 11.1783 8.67835C11.4909 8.36579 11.6665 7.94186 11.6665 7.49984C11.6665 7.05781 11.4909 6.63389 11.1783 6.32133C10.8658 6.00877 10.4419 5.83317 9.99984 5.83317C9.55781 5.83317 9.13389 6.00877 8.82133 6.32133C8.50877 6.63389 8.33317 7.05781 8.33317 7.49984C8.33317 7.94186 8.50877 8.36579 8.82133 8.67835C9.13389 8.99091 9.55781 9.1665 9.99984 9.1665Z"
                                        fill="#344054" />
                                </svg>
                                <span class=" create_account">Log in</span>
                            </router-link>
                            <b-button class="logout-button" @click="logoutAction" v-else>
                                Logout
                            </b-button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script setup lang='js'>

import { onMounted, ref, reactive } from "vue";
import apiClient from '@/utils/axios';
import { useRoute } from 'vue-router';
import router from '@/router';
import { useAuthStore } from "@/stores/auth-store.js";
import { Icon } from '@iconify/vue';
const auth = useAuthStore();
const route = useRoute();
// console.log(auth.loadUser())

const logoutAction = () => {
    auth.processLogout();
}

</script>

<style>
.logout-button{
    background-color: transparent;
    border: none;
    color: var(--primary-color);
}

.logout-button:hover{
    background-color: transparent;
    border: none;
    color: var(--primary-color);
}
.logo-lg{
    color: var(--primary-color);
}
a {
    text-decoration: none;
}

.search_icon_show {
    display: none;
    cursor: pointer;
}

.search_mobile_view {
    margin-top: 100px;
}

.create_account {
    color: var(--secondary-100, #09404B);
    /* Body/Small/Medium */
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    /* 18.2px */
}

.create_account_icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
}

.btn-close {
    font-size: small;
}

@media (max-width: 1024px) {
    .header-search-bar {
        display: none;
    }

    .search_icon_show {
        display: block;
    }

    .search-group:first-of-type {
        border-right: 1px solid #d0d5dd;
    }
}

@media (min-width: 1025px) {
    .header-search-bar {
        display: flex;
    }

    .search_icon_show {
        display: none;
    }

    .search-group:first-of-type {
        border-right: 0;
    }
}

@media (min-width: 768px) {
    .navbar-brand-box {
        width: calc(70px - 1.5rem / 2) !important;
    }
}

.cross>.reset_search {
    position: relative;
    border: none;
    display: block;
    width: 15px;
    height: 15px;
    line-height: 16px;
    font-size: 12px;
    border-radius: 50%;
    top: 0;
    bottom: 0;
    right: 1rem;
    margin: auto;
    padding: 0;
    outline: none;
    cursor: pointer;
    transition: .1s;
}

.cross>#search_val:placeholder-shown+button {
    opacity: 0;
    pointer-events: none;
}</style>
