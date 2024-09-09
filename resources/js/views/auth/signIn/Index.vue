<template>
  <Layout>
    <div class="d-flex justify-content-center align-items-center vh-100">
      <b-row class="w-100 justify-content-center">
        <b-col lg="4"></b-col>
        <b-col lg="4" md="" sm="" xs="">
          <b-card-group class="login-card justify-content-center">
            <b-card title="Sign In" class="p-4 shadow-sm">
              <b-card-text>

                <!-- Email Field -->
                <b-form-group
                  id="email-field"
                  label="Email Address"
                  label-for="email-input"
                  valid-feedback="Looks good!"
                  :invalid-feedback="invalidFeedback"
                  :state="state"
                >
                  <b-form-input
                    id="email-input"
                    v-model="email"
                    :state="state"
                    trim
                    placeholder="Enter your email address"
                    class="square-input"
                  ></b-form-input>

                </b-form-group>

                <!-- Password Field -->
                <b-form-group class="mb-3"
                  id="password-field"
                  label="Password"
                  label-for="password-input"
                  :invalid-feedback="invalidFeedback"
                  :state="state"
                >
                  <b-form-input
                    type="password"
                    id="password-input"
                    v-model="password"
                    :state="state"
                    trim
                    placeholder="Enter your password"
                    class="square-input"
                  ></b-form-input>
                </b-form-group>

                <!-- Login Button -->
                <b-button class="w-100 square-btn mb-2">Login</b-button>

                <!-- Forgot Password Link -->
                <div class="mb-3">
                  <b-link class="text-decoration-none" href="#">Forgot Password?</b-link>
                </div>

                <!-- Login with Social Text -->
                <div class="text-center">
                  <SocialLogin>
                  </SocialLogin>
                </div>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col lg="4"></b-col>
      </b-row>
    </div>
  </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import SocialLogin from "@/views/auth/signIn/social.vue";
</script>

<style scoped>
    .square-input {
    border-radius: 0 !important;
    padding: 15px !important;
    font-size: 17px !important;
    border: 1px solid var(--grey-40, #D0D5DD) !important;
    }

    .square-btn {
    background: #11548d;
    border-radius: 0 !important;
    padding: 15px !important;
    font-size: 17px !important;
    }


</style>
