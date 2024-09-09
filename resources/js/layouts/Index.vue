<template>
    <div>
        <App v-if="props.type == 'app'">
            <slot />
        </App>
        <Auth v-if="props.type == 'auth'">
            <slot />
        </Auth>
        <Full v-if="props.type == 'full'" :main_class="props.class" :footer-Type="props.footer">
            <slot />
        </Full>
        
    </div>
</template>

<script setup lang='js'>

import App from "@/layouts/App.vue";
import Auth from "@/layouts/Auth.vue";
import Full from "@/layouts/Full.vue";

import { onMounted } from "vue";

const props = defineProps({
    type: {
        default: 'app',
        type: String
    },
    class: {
        default: '',
        type: String
    },
    footer: {
        default: 'centered',
        type: String
    }
})

onMounted(() => {
});

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

</script>
