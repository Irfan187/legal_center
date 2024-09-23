<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div :class="cardClass" v-html="cardHtml"></div>
                </div>
                
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import { ref, onMounted } from 'vue';
  
  const props = defineProps({
    cardClass: String,
    cardHtml: String,
  });
  
  const cardClass = ref(props.cardClass);
  const cardHtml = ref(props.cardHtml);
  

  onMounted(() => {
    // Update the local variables, not the props
    cardClass.value = 'simple-card';
    cardHtml.value = "<h5 class='text-center'>Simple Card</h5><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>";
  });
  // heading, body, buttons, image, icon, sub-text, button-alignment, image style, variant, isClosable

</script>