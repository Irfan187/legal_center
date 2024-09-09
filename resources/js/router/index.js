import { createRouter, createWebHistory } from "vue-router";
// import { useAuthStore } from '@/stores/auth-store';
// Import Bootstrap and Bootstrap-Vue-Next CSS

const getCallingFeatureForm = () => import("@/views/CallingComponent.vue");
const Login = () => import("@/views/auth/signIn/Index.vue");


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
    },
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            title: `Login`,
            authRequired: false,
            isAuthLayout: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeResolve(async (to, from, next) => {

//     if ((to.meta.authRequired || to.meta.isAuthLayout) && !useAuthStore().isLoggedIn) {
//         await useAuthStore().loadUser();
//     }

//     if(to.path == '/login') {
//         next({ name: "login"});
//     }

//     let canAccessRoute = await useAuthStore().canAccessRoute(to);
//     if (!to.meta.authRequired || (to.meta.authRequired && canAccessRoute)) {
//         if (to.meta.isAuthLayout && useAuthStore().isLoggedIn) {
//             if (useAuthStore().role == 'admin' || useAuthStore().role == 'manager') {
//                 next({ name: "manager_dashboard" });
//             }
//             else {
//                 next({ name: "dashboard" });
//             }
//         }
//         else {
//             if (useAuthStore().role == 'admin' || useAuthStore().role == 'manager') {
//                 if (canAccessRoute) {
//                     next();
//                 }
//                 else {
//                     next({ name: "manager_dashboard" });
//                 }
//             }
//             else {
//                 next();
//             }
//         }
//     }
//     else {
//         if ((to.meta.authRequired || to.meta.isAuthLayout) && useAuthStore().isLoggedIn) {
//             if (useAuthStore().role == 'admin' || useAuthStore().role == 'manager') {
//                 next({ name: "manager_dashboard" });
//             }
//             else {
//                 next({ name: "dashboard" });
//             }

//         }
//         else if (to.meta.authRequired && !useAuthStore().isLoggedIn) {
//             // next({name: "login"});
//             let params = JSON.stringify(to.params);
//             if (to.params) {
//                 next({ name: "login", query: { returnTo: to.name, params: params } });
//             }
//             else {
//                 next({ name: "login", query: { returnTo: to.name } });
//             }

//         }
//         else {
//             next({ name: "home" });
//         }
//     }
// });

export default router;
