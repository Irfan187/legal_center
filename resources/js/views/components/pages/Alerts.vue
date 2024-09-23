<template>
    <Layout>
      <div class="container">
        <h3 class="text-center mb-5">Fixed Alerts</h3>
        <div class="row">
          <div class="col-lg-12">
            <Alert class="primary-alert" message="this is message"></Alert>
          </div>
        </div>
      </div>
    </Layout>
  </template>
  
  <script setup>
  import Layout from "@/layouts/Index.vue";
  import { ref, onMounted } from 'vue';
import Alert from "@/components/ui_elements/Alert.vue";
  
  const message ="fkjgsdkjgfdkjshgkjfdghkg";
  // message (req), class, heading, icon, isClosable
  </script>
  