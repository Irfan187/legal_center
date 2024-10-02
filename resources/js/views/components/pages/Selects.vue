<template>
    <Layout>
      <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <h4 class="text-left mb-3">Single Select</h4>
                <Select :options="options" :multiple="false" selectId="mySelect" label="Select Items"></Select>
            </div>
            <div class="col-lg-6">
                <h4 class="text-left mb-3">Multiple Select</h4>
                <Select :options="options" :multiple="true" selectId="mySelect" label="Select Items"></Select>
            </div>
        </div>
      </div>
    </Layout>
  </template>

  <script setup>
  import { ref } from 'vue';
  import Layout from "@/layouts/Index.vue";
  import Select from '@/components/ui_elements/Selects.vue';

  const options = [
    { id: 1, value: 'option1', label: 'Student 1' },
    { id: 2,value: 'option2', label: 'Student 2' },
    { id: 3,value: 'option3', label: 'Student 3' },
  ];
  </script>
