<template>
    <div class="custom-select">
      <label v-if="label" :for="selectId">{{ label }}</label>
      <select
        :id="selectId"
        :class="['form-select', sizeClass]"
        v-model="localValue"
        @change="onChange"
        :disabled="disabled"
        :multiple="multiple"
      >
        <option v-if="placeholder && !multiple" disabled value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </template>


  <script setup>
  import { ref, watch, computed } from 'vue';

  const props = defineProps({
    options: { type: Array, required: true },
    modelValue: { type: [Array], default: '' },
    placeholder: { type: String, default: 'Select an option' },
    label: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    size: { type: String, default: '' },
    multiple: { type: Boolean, default: false },
  });

  const localValue = ref(props.modelValue);

  </script>
