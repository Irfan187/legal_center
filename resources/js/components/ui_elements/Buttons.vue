<template>
    <button
      :class="[ sizeClass, buttonClass, outlineClass]"
      :type="type"
      :disabled="disabled"
    >
      <span v-if="icon" class="icon">
        <i :class="icon"></i>
      </span>
      <slot></slot>
    </button>
  </template>

  <script setup>
  const props = defineProps({
    button: { type: String, default: 'button-primary' },
    size: { type: String, default: '' },
    outline: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
    icon: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
  });

  // Dynamic classes based on the props
  const sizeClass = props.size ? `button-${props.size}` : '';
  const outlineClass = props.outline ? `outline-${props.button.split('-')[1]}` : '';
  const buttonClass = props.outline ? '' : props.button; // Only apply non-outline button class if outline is false
  </script>
