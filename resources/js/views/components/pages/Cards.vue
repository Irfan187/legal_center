<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <Card heading="Card Heading" class="simple-card" image="https://dummyimage.com/600x400/000/fff" :buttons="buttons" body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></Card>
                </div>
                
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import { ref, onMounted } from 'vue';
  
import Card from "@/components/ui_elements/Cards.vue";
const buttons = ['<button>Button 1</button>','<button>Button2</button>','<button>Button3</button>'];
  // heading, body, buttons, image, icon, sub-text, button-alignment, image style, variant, isClosable

</script>