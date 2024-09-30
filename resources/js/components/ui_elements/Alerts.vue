<template>
    <div :class="class" v-if="visible">
        <div class="icon_message_body">
            <div v-if="icon">
                <i :class="icon"></i>
            </div>
            <div>
                <h4 v-if="heading" v-html="heading"></h4>
                <span v-html="message"></span>
            </div>
        </div>
        <div v-if="isClosable" class="close-icon" @click="closeAlert()">
            <span><i class="bi bi-x"></i></span>
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
    isClosable: { default: false, type: Boolean }
});

const visible = ref(true);

const emit = defineEmits(['close-alert']);
const closeAlert = () => {
    emit('close-alert');
    visible.value = false;
}

</script>
