<template>
    <div :class="class" v-if="visible">
        <div v-if="icon">

        </div>
        <div>
            <h3 v-if="heading" v-html="heading"></h3>
            <span v-html="message"></span>
        </div>
        <div v-if="isClosable">
            <span></span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    class: { default: 'primary-alert', type: String },
    message: { required: true, type: String },
    heading: { default: '', type: String },
    icon: { default: '', type: String },
    isClosable: { default: false, type: Boolean },
});

const visible = ref(true);
// click on isclosable button then visible set to false;

</script>
