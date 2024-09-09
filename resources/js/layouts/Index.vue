<template>
    <div>
        <App v-if="props.type == 'app'">
            <slot />
        </App>
        
        
    </div>
</template>

<script setup lang='js'>

import App from "@/layouts/App.vue";
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
