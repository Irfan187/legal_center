<template>
    <div :class="class" :style="backgroundImage" v-if="visible" @click="action">
        <div>
            <div class="heading-icon">
                <h4 v-if="heading" v-html="heading"></h4>
                <span><i v-if="isClosable" :class="icon" @click="closeCard()"></i></span>
            </div>
            <p v-html="sub_text"></p>
            <span v-html="body"></span>
        </div>
        <div class="buttons" v-if="buttons.length > 0">
            <div v-for="button in buttons">
                <button :class="button.class" class="" @click="button.callback">{{ button.text }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
    class: { default: 'card-with-image', type: String },
    buttons: { default: [], type: Array },
    heading: { default: '', type: String },
    body: { default: '', type: String },
    isClosable: { default: false, type: Boolean },
    variant: { type: String },
    // image: { default: '', type: String },
    sub_text: { default: '', type: String },
    button_allignment: { default: '', type: String },
    background_image_url: { type: String },
    background_size: { default: 'cover', type: String },
    background_position: { default: 'center', type: String },
    action: { default: '', type: String }
});


// click on isclosable button then visible set to false;
const backgroundImage = computed(() => {
    return `background-image: url(${props.background_image_url});background-size: ${props.background_size};background-position: ${props.background_position}`;
})

const visible = ref(true);
const icon = ref('bi bi-x');
const emit = defineEmits(['close-card']);
const closeCard = () => {
    emit('close-card');
    if (icon.value == 'bi bi-x') {
        visible.value = false;
        icon.value = 'bi bi-dash';
    } else if (icon.value == 'bi bi-dash') {
        icon.value = 'bi bi-x';
        visible.value = true;
    }
}

</script>