import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/auth-store';
// Import Bootstrap and Bootstrap-Vue-Next CSS

const dashboard = () => import("@/views/dashboard.vue");
const Login = () => import("@/views/auth/signin/Index.vue");
const Register = () => import("@/views/auth/signup/Index.vue");
const DesignationList = () => import("@/views/designations/Index.vue");
const cards = () => import("@/views/components/pages/Cards.vue");
const alerts = () => import("@/views/components/pages/Alerts.vue");
const input_elements = () => import("@/views/components/pages/InputElements.vue");






const routes = [
    {
        name: "cards",
        path: "/cards",
        component: cards,
        meta: {
            title: `Home Page`,
            authRequired: false,
            isAuthLayout: false,
        }
    },
    {
        name: "alerts",
        path: "/alerts",
        component: alerts,
        meta: {
            title: `Home Page`,
            authRequired: false,
            isAuthLayout: false,
        }
    },
    {
        name: "input_elements",
        path: "/input_elements",
        component: input_elements,
        meta: {
            title: `Home Page`,
            authRequired: false,
            isAuthLayout: false,
        }
    },
    {
        name: "home",
        path: "/",
        component: dashboard,
        meta: {
            title: `Home Page`,
            authRequired: false,
            isAuthLayout: false,
        }
    },
    {
        name: "dashboard",
        path: "/dashboard",
        component: dashboard,
        meta: {
            title: `Dashboard`,
            authRequired: true,
            isAuthLayout: false,
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
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            title: `Register`,
            authRequired: false,
            isAuthLayout: true,
        },
    },
    {
        name: "designation_list",
        path: "/designations",
        component: DesignationList,
        meta: {
            title: `EmployerList`,
            authRequired: true,
            isAuthLayout: false,
            type: ['admin']
        }
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
//     let canAccessRoute = await useAuthStore().canAccessRoute(to);
//     if (!to.meta.authRequired || (to.meta.authRequired && canAccessRoute)) {
//         if (to.meta.isAuthLayout && useAuthStore().isLoggedIn) {
//             if (useAuthStore().role) {
//                 next({ name: "dashboard" });
//             } else {
//                 next({ name: "home" });
//             }
//         }
//         else {
//             if (useAuthStore().role) {
//                 if (canAccessRoute) {
//                     next();
//                 }
//                 else {
//                     next({ name: "dashboard" });
//                 }
//             }
//             else {
//                 next();
//             }
//         }
//     }
//     else {
//         if ((to.meta.authRequired || to.meta.isAuthLayout) && useAuthStore().isLoggedIn) {
//             if (useAuthStore().role == 'admin') {
//                 next({ name: "dashboard" });
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
// })

router.beforeResolve(async (to, from, next) => {
    const authStore = useAuthStore(); // Store reference for reusability

    // Load user if required
    if ((to.meta.authRequired || to.meta.isAuthLayout) && !authStore.isLoggedIn) {
        await authStore.loadUser();
    }

    // Check if user can access the route
    let canAccessRoute = await authStore.canAccessRoute(to);

    if (!to.meta.authRequired || canAccessRoute) {
        // Redirect logged-in user away from auth layout (login/register) to dashboard
        if (to.meta.isAuthLayout && authStore.isLoggedIn) {
            next({ name: "dashboard" });
        } else {
            // Allow access to all other pages
            next();
        }
    } else {
        // If route requires authentication and the user is not logged in
        if (to.meta.authRequired && !authStore.isLoggedIn) {
            // Redirect to login with return URL
            let params = JSON.stringify(to.params);
            next({ name: "login", query: { returnTo: to.name, params: params } });
        } else {
            // Default redirect for unauthorized users
            next({ name: "home" });
        }
    }
});

export default router;
