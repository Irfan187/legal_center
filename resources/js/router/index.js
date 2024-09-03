import { createRouter, createWebHistory } from "vue-router";

const getCallingFeatureForm = () => import("@/components/CallingComponent.vue");

const routes = [
    {
        name: "getCallingFeatureForm",
        path: "/",
        component: getCallingFeatureForm,
        meta: {
            title: `Calling Feature`,
            authRequired: false,
            isAuthLayout: true,
        },
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
