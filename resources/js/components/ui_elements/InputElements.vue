<template>
    <label class="switch" v-if="isToggle && type == 'checkbox'">
        <input :class="class" :id="id" :type="type" :name="name" :value="value" :placeholder="placeholder"
        :disabled="isDisabled" :readonly="isReadonly" :checked="isChecked">
        <span class="slider round"></span>
    </label>
    <input v-else :class="class" :id="id" :type="type" :name="name" :value="value" :placeholder="placeholder"
        :disabled="isDisabled" :readonly="isReadonly" :checked="isChecked">
</template>

<script setup>
import { readonly, ref, watch } from 'vue';

const props = defineProps({
    id: { default: '', type: String },
    name: { required: true, type: String },
    placeholder: { default: '', type: String },
    isReadonly: { default: false, type: Boolean },
    isDisabled: { default: false, type: Boolean },
    isChecked: { default: false, type: Boolean },
    value: { default: '', type: String },
    type: { default: 'text', type: String },
    class: { default: 'form-control', type: String },
    isToggle: { default: false, type: Boolean },
});


// items,disable,class,  
</script>