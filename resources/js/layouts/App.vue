<template>
    <div id="layout-wrapper">

        <div>
            <div class="app-menu navbar-menu mt-3">


                <div class="sidebar-background"></div>
            </div>
            <div class="vertical-overlay" id="overlay"></div>
        </div>

        <div class="main-content">
            <div class="page-content" style="background: var(--grey-20, #F2F4F7);">
                <b-container fluid>
                    <slot />
                </b-container>
            </div>
        </div>



    </div>
</template>

<script setup lang='js'>

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";



const router = useRouter();

onMounted(() => {

})


</script>
