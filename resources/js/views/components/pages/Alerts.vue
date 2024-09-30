<template>
  <Layout>
    <div class="container">
      <h3 class="text-center mb-5">Fixed Alerts</h3>
      <div class="row">
        <div class="col-md-6 mb-5">
          <Alert class="primary-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="secondary-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="success-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="info-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="danger-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="warning-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="light-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="dark-alert" message="this is message" icon="bi bi-person" heading="My Heading"
            :isClosable="true"></Alert>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import { ref, onMounted } from 'vue';
import Alert from "@/components/ui_elements/Alerts.vue";


</script>
