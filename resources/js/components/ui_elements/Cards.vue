<template>
    <div :class="class">
        <div v-if="image">
            <img :src="image" alt="">
        </div>
        <div>
            <h4 v-if="heading" v-html="heading"></h4>
            <span v-html="body"></span>
        </div>
        <div class="buttons" v-if="buttons.length > 0">
            <div v-for="button in buttons" v-html="button"></div>
        </div>
    </div>
</template>

<script setup>
import { ref,watch } from 'vue';

const props = defineProps({
    class: { default: 'primary-alert', type: String },
    buttons: { default: [], type: Array },
    heading: { default: '', type: String },
    body: { default: '', type: String },
    isClosable: { default: false, type: Boolean },
    variant: { type: String},
    image: { default: '', type: String },
    sub_text: { default: '', type: String }
});

console.log(props.buttons)
// click on isclosable button then visible set to false;




</script>