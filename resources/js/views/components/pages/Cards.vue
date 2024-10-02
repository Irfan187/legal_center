<template>
    <Layout>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <h3>Simple Card With Buttons</h3>
                    <SimpleCard heading="Card Heading" class="simple-card" :buttons="buttons" button_allignment="left"
                        :isClosable="true" sub_text="<p class='text-muted'>My Text</p>"
                        body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s">
                    </SimpleCard>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-lg-5">
                    <h3>Card With Background Image</h3>
                    <CardWithImage action="goToGoogle()" background_image_url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAVFBMVEXh5urDzdbZ3+TT19vW2t7M0tfAytPd5OnT2d/CzNPO2dvg5enk6ezBytLY3uTT2t/W4OLM1d7I09W/ys/G0NfN2N3c5efN0dXCzs/S3eDJ1dbQ2eL4S0liAAACs0lEQVR4nO3c4XqaMBhAYYISjASUYq1293+fQ1AbSBhdp+DHzvtvsfB4BsMQ6aIIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDpZUX8PEU2d14t1up59GruvFr8xEClKJwChRRSOD8KKaRwfm5hEq8fYKdft3BnH7HH9IULNw/ZI4VTo3BMFtnIdv79Lq3Qxh9vb6u1M7KsQns27aa6vI8tq7CsbttqlV7HllRoN+4ij7kuOy2pcF85Gyt9aC84Syo8qA6zb0YFFhZxeDzrLUSa92ZYYKGqjsHxtbfU2gyLK7QrpQ7BFz5NL1A349IKbZrX518o8ZK+hGNok8sbDi7Pe2dp+/cgrXDfnop657/kXWm2zbCwQnt/+2nkfZHUO4SmndUIK3SWJPwXi7wTmEj8xHff7cl71SZu4enob/Pyhd2ExF/G+bjXmNNtXiCp0MadT7x84yXajakuQZVJ7rMCSYX9iWfuT9/s8VwqVZ6zr3hJhdu8W6h08Hv57iKGoEKb9WdltXRgNw5BhYnXV98Dju9RTmERekpDl6Pr4mIKbeAcvSSex/YopbD+HAgWqioePIrtB4aUwv60+osZeNDJxu2sR0ih/RwKHLraZKWWdAfcm830EgNXGxvnWlRh9IdAFZqi7y6TA0mFv0ae5yu6RzFTzc8LKgzNZjqMu/pmbzeRggrLkUBlnAtqmtymr3IKv/PM6cf1PLXOKoCYwuNpPPB+P3xweqQUDs5mupr74b1xf1ZKYda/KxxKjO1758snMYXbbx3CNqn3x2b7RRX2g5vtKZwahRRSOD8KKaRwfn6h94jF4gqP6Y81279+4b+icGr/V2HgmZkfeOnCxf9GyeNROAUKKaRwfhRSSOH8lv//02TJM60fMtMFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODv/AaWZyr86EvqgAAAAABJRU5ErkJggg==" heading="Card Heading" class="card-with-image" :buttons="buttons" button_allignment="left"
                        :isClosable="true" sub_text="<p class='text-muted'>My Text</p>"
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis lacus at lacus sagittis gravida. Sed euismod hendrerit erat a convallis. Donec eu felis ac nibh venenatis finibus. Nullam eu sapien mauris. Ut hendrerit tellus elit. Cras sit amet accumsan tellus. Nullam tempus ipsum sit amet interdum scelerisque. Suspendisse potenti. Nam a blandit ipsum, eu finibus risus. Morbi accumsan aliquam placerat. Phasellus bibendum dignissim eleifend.">
                    </CardWithImage>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "@/layouts/Index.vue";
import { ref, onMounted } from 'vue';

import SimpleCard from "@/components/ui_elements/Cards/SimpleCard.vue";
import CardWithImage from "@/components/ui_elements/Cards/CardWithImage.vue";

const buttons = [{
    'text': 'Click Me',
    'variant': 'primary', // default primary
    'class': 'custom-button button-primary', // nullable,
    'icon': '', // nullable
    'callback': 'myFunction()' // nullable
}];
// heading, body, buttons, image, icon, sub-text, button-alignment (default: center), image style, variant, isClosable

// 

</script>