<template>
    <Layout>
      <div class="container">
        <h4 class="text-left mb-3">Select Students</h4>

        <div class="mb-4">
          <div class="custom-multiselect">
            <div class="select-box" @click="toggleDropdown">
              <div class="selected-items">
                <span v-if="select.length === 0" class="text">Choose an option</span>
                <div
                  v-for="(option, index) in select"
                  :key="option.value"
                  class="selected-item"
                >
                  {{ option.label }}
                  <span class="cross-icon" @click.stop="removeOption(option)">×</span>
                </div>
              </div>
              <span class="dropdown-icon">&#9660;</span>
            </div>

            <div v-if="isOpen" class="dropdown">
              <div
                v-for="(option, index) in selectOptions"
                :key="option.value"
                class="dropdown-item"
                @click="selectOption(option)"
              >
                {{ option.label }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </template>

  <script setup>
  import { ref } from 'vue';
  import Layout from "@/layouts/Index.vue";

  const select = ref([]);
  const isOpen = ref(false);

  const selectOptions = [
    { value: 'option1', label: 'Student 1' },
    { value: 'option2', label: 'Student 2' },
    { value: 'option3', label: 'Student 3' },
  ];

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const selectOption = (option) => {
    if (!select.value.includes(option)) {
      select.value.push(option);
    }
  };

  const removeOption = (option) => {
    select.value = select.value.filter((selected) => selected.value !== option.value);
  };
  </script>
