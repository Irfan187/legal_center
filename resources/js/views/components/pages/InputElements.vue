<template>
    <Layout>
        <div class="container">
            <h3 class="mb-5 text-center">Input Elements</h3>
            <div class="row">
                <div class="col-lg-4 mb-3">
                    <h5>Basic Input</h5>
                    <Input type="text" value="123456789"></Input>
                </div>
                <div class="col-lg-4 mb-3">
                    <h5>Password Input</h5>
                    <Input type="password" value="123456789"></Input>
                </div>
                <div class="col-lg-4 mb-3">
                    <h5>Disabled Input</h5>
                    <Input type="text" value="123456789" :isDisabled="true"></Input>
                </div>
                <div class="col-lg-4 mb-3">
                    <h5>PlaceHolder Input</h5>
                    <Input type="text" value="" placeholder="Place Holder Input"></Input>
                </div>
                <div class="col-lg-4 mb-3">
                    <h5>Readonly Input</h5>
                    <Input type="text" value="123456789" :isReadonly="true"></Input>
                </div>
                <div class="col-lg-4 mb-3">
                    <h5>File Input</h5>
                    <Input type="file"></Input>
                </div>
                <div class="col-lg-4 mb-3">
                    <h5>Checkbox Input</h5>
                    <Input type="checkbox" class="" value="123456789" :isChecked="true"></Input>
                </div>
                <div class="col-lg-4 mb-3">
                    <h5>Radio Input</h5>
                    <Input type="radio" name="input_radio" class="" value="123456789" :isChecked="false"></Input>

                </div>
                
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import { ref, onMounted } from 'vue';
  
import Input from "@/components/ui_elements/InputElements.vue";
const buttons = ['<button>Button 1</button>','<button>Button2</button>','<button>Button3</button>'];
  // heading, body, buttons, image, icon, sub-text, button-alignment, image style, variant, isClosable

</script>