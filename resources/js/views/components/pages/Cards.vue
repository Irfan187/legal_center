<template>
    <Layout>
        <div class="container">
            <div class="row">
                <h3>Simple Card With Buttons</h3>
                <div class="col-lg-4">
                    <Card heading="Card Heading" class="simple-card"
                        :buttons="buttons" button_allignment="left" :isClosable="true" sub_text="<p class='text-muted'>My Text</p>"
                        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
                    </Card>
                </div>

            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import { ref, onMounted } from 'vue';

import Card from "@/components/ui_elements/Cards/SimpleCard.vue";
const buttons = [{
    'text': 'Click Me',
    'variant': 'primary', // default primary
    'class': 'btn btn-primary', // nullable,
    'icon': '', // nullable
    'callback': 'myFunction()' // nullable
}];
// heading, body, buttons, image, icon, sub-text, button-alignment (default: center), image style, variant, isClosable

// 

</script>