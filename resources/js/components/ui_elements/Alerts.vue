<template>
    <div :class="class" v-if="visible" @hidden="$emit('closeAlert')">
        <div v-if="icon">
            <i :class="icon"></i>
        </div>
        <div>
            <h4 v-if="heading" v-html="heading"></h4>
            <span v-html="message"></span>
        </div>
        <div v-if="isClosable" class="close-icon" @hidden="$emit('closeAlert')" @click="closeAlert()">
            <span>x</span>
        </div>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue';

const props = defineProps({
    class: { default: 'primary-alert', type: String },
    message: { required: true, type: String },
    heading: { default: '', type: String },
    icon: { default: '', type: String },
    isClosable: { default: false, type: Boolean },
    visible: { type: Boolean}
});

// click on isclosable button then visible set to false;

const emit = defineEmits(['close-alert']);
const closeAlert = () => {
    emit('close-alert', ['visible', false]);
}

// items,disable,class,
</script>
