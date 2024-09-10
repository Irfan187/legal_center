<template>
    <div class="page-wrapper">

        <div class="main-page-content" :class="main_class">
            <div class="page-content" :class="page_class">
                <b-container fluid :class="container_class">
                    <slot />
                </b-container>
            </div>
        </div>

        <Footer :footerType="props.footerType"></Footer>

    </div>
</template>

<script setup lang='js'>

import { onMounted } from "vue";
import Footer from "@/components/Footer.vue";

const props = defineProps({
    container_class: {
        default: '',
        type: String
    },
    main_class: {
        default: '',
        type: String
    },
    page_class: {
        default: '',
        type: String
    },
    footerType: {
        default: 'centered',
        type: String
    }
})

onMounted(() => {

});

</script>
