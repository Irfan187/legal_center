<template>
    <div :class="class">
        <div>
            <div class="heading-icon">
                <h4 v-if="heading" v-html="heading"></h4>
                <span><i v-if="isClosable" :class="icon" @click="closeCard()"></i></span>
            </div>
            <p v-html="sub_text" v-if="visible"></p>
            <span v-html="body" v-if="visible"></span>
        </div>
        <div class="buttons" v-if="buttons.length > 0 && visible">
            <div v-for="button in buttons">
                <button :class="button.class" class="" @click="button.callback">{{ button.text }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue';

const props = defineProps({
    class: { default: 'simple-card', type: String },
    buttons: { default: [], type: Array },
    heading: { default: '', type: String },
    body: { default: '', type: String },
    isClosable: { default: false, type: Boolean },
    variant: { type: String},
    // image: { default: '', type: String },
    sub_text: { default: '', type: String },
    button_allignment: { default: '', type: String }

});
const visible = ref(true);
const icon = ref('bi bi-x');
const emit = defineEmits(['close-card']);
const closeCard = () => {
    emit('close-card');
    if(icon.value == 'bi bi-x'){
        visible.value = false;
        icon.value = 'bi bi-dash';
    }else if(icon.value == 'bi bi-dash'){
        icon.value = 'bi bi-x';
        visible.value = true;
    }
}

// click on isclosable button then visible set to false;




</script>