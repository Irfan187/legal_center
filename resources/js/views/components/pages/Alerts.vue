<template>
  <Layout>
    <div class="container">
      <h3 class="text-center mb-5">Fixed Alerts</h3>
      <div class="row">
        <div class="col-md-6 mb-5">
          <Alert class="primary-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="primary_visible" @close-alert="closePrimaryAlert($event)"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="secondary-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="secondary_visible" @close-alert="closeSecondaryAlert($event)"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="success-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="success_visible" @close-alert="closeSuccessAlert($event)"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="info-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="info_visible" @close-alert="closeInfoAlert($event)"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="danger-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="danger_visible" @close-alert="closeDangerAlert($event)"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="warning-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="warning_visible" @close-alert="closeWarningAlert($event)"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="light-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="light_visible" @close-alert="closeLightAlert($event)"></Alert>
        </div>
        <div class="col-md-6 mb-5">
          <Alert class="dark-alert" message="this is message" icon="fa fa-user" heading="My Heading"
            :isClosable="true" :visible="dark_visible" @close-alert="closeDarkAlert($event)"></Alert>
        </div>
      </div>
<<<<<<< HEAD
    </Layout>
  </template>

  <script setup>
  import Layout from "@/layouts/Index.vue";
  import { ref, onMounted } from 'vue';
  import Alert from "@/components/ui_elements/Alert.vue";

  const message ="fkjgsdkjgfdkjshgkjfdghkg";
  // message (req), class, heading, icon, isClosable
  </script>
=======
    </div>
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import { ref, onMounted } from 'vue';
import Alert from "@/components/ui_elements/Alerts.vue";

const message = "fkjgsdkjgfdkjshgkjfdghkg";
const primary_visible = ref(true);
const secondary_visible = ref(true);
const info_visible = ref(true);
const success_visible = ref(true);
const warning_visible = ref(true);
const danger_visible = ref(true);
const light_visible = ref(true);
const dark_visible = ref(true);


const closePrimaryAlert = (data) => {
  primary_visible.value = data[1];
}

const closeSecondaryAlert = (data) => {
  secondary_visible.value = data[1];
}

const closeInfoAlert = (data) => {
  info_visible.value = data[1];
}

const closeWarningAlert = (data) => {
  warning_visible.value = data[1];
}

const closeSuccessAlert = (data) => {
  success_visible.value = data[1];
}

const closeDangerAlert = (data) => {
  danger_visible.value = data[1];
}

const closeDarkAlert = (data) => {
  dark_visible.value = data[1];
}

const closeLightAlert = (data) => {
  light_visible.value = data[1];
}

</script>
>>>>>>> 56e3214375c5df7259bfa325b99d61629c4adb77
