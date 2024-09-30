<template>
    <div :class="class">
        <div>
            <h4 v-if="heading" v-html="heading"></h4>
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

const myFunction = () => {
    alert('hghg');
}
// click on isclosable button then visible set to false;




</script>