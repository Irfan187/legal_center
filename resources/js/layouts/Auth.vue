<template>
    <div class="page-wrapper">

        <div class="main-page-content" style="background: var(--grey-20, #F2F4F7);">
            <div class="page-content">
                <b-container fluid>
                    <slot />
                </b-container>
            </div>
        </div>


    </div>
</template>

<script setup lang='js'>

import { onMounted } from "vue";

onMounted(() => {

});

</script>
