<template>
    <Layout>
      <div class="container">
        <h3 class="text-left mb-5">Buttons</h3>

        <!-- Regular Buttons Row -->
        <div class="row mb-4">
          <div class="col-lg-12 d-flex flex-wrap gap-2">
            <Button class="button-primary">Primary</Button>
            <Button class="button-secondary">Secondary</Button>
            <Button class="button-success">Success</Button>
            <Button class="button-danger">Danger</Button>
            <Button class="button-warning">Warning</Button>
            <Button class="button-info">Info</Button>
            <Button class="button-light">Light</Button>
            <Button class="button-dark">Dark</Button>
          </div>
        </div>

        <!-- Small Buttons Row -->
        <div class="row mb-4">
          <div class="col-lg-12 d-flex flex-wrap gap-2">
            <Button class="button-primary" size="small">Primary</Button>
            <Button class="button-secondary" size="small">Secondary</Button>
            <Button class="button-success" size="small">Success</Button>
            <Button class="button-danger" size="small">Danger</Button>
            <Button class="button-warning" size="small">Warning</Button>
            <Button class="button-info" size="small">Info</Button>
            <Button class="button-light" size="small">Light</Button>
            <Button class="button-dark" size="small">Dark</Button>
          </div>
        </div>

        <!-- Outline Buttons Row -->
        <div class="row mb-4">
          <div class="col-lg-12 d-flex flex-wrap gap-2">
            <Button class="outline-primary" outline>Primary</Button>
            <Button class="outline-secondary" outline>Secondary</Button>
            <Button class="outline-success" outline>Success</Button>
            <Button class="outline-danger" outline>Danger</Button>
            <Button class="outline-warning" outline>Warning</Button>
            <Button class="outline-info" outline>Info</Button>
            <Button class="outline-light" outline>Light</Button>
            <Button class="outline-dark" outline>Dark</Button>
          </div>
        </div>
      </div>
    </Layout>
  </template>



  <script setup>
  import Layout from "@/layouts/Index.vue";
  import { ref } from 'vue';
  import Button from "@/components/ui_elements/Buttons.vue";

  </script>
