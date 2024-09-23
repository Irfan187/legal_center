<template>
    <div class="page-wrapper">
        <TopbarFull />
        <div class="main-page-content" style="background: var(--grey-20, #F2F4F7);">
            <div class="page-content">
                <b-container fluid class="p-5">
                    <slot />
                </b-container>
            </div>
        </div>


    </div>
</template>

<script setup lang='js'>

import { onMounted } from "vue";
import Footer from "@/components/Footer.vue";
import TopbarFull from "@/components/TopbarFull.vue";

onMounted(() => {

});

</script>
