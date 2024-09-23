<template>
    <b-row>
        <b-col cols="12">
            <div class="page-title-box d-sm-flex flex-column">
                <div class="breadcrumb-area mb-2">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item" v-for="(item, index) in breadcrumbs" :key="index" :class="{ active: item.active }">
                            <router-link :to="item.href ? item.href : 'javascript:void(0)'">{{ item.text }}</router-link>
                            
                        </li>
                    </ol>
                </div>

                <h4 class="page-title mb-sm-0 fs-20 fw-500">{{ title }}</h4>
            </div>
        </b-col>
    </b-row>
</template>

<script setup lang='js'>

const props = defineProps({
    title: { type: String, default: "" },
    breadcrumbs: { type: Array, default: () => { return []; } },
});

</script>
