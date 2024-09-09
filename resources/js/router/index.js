import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/auth-store';
// Import Bootstrap and Bootstrap-Vue-Next CSS

const dashboard = () => import("@/views/dashboard.vue");
const Login = () => import("@/views/auth/signIn/Index.vue");


const routes = [
    {
        name: "dashboard",
        path: "/",
        component: dashboard,
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

router.beforeResolve(async (to, from, next) => {
    if ((to.meta.authRequired || to.meta.isAuthLayout) && !useAuthStore().isLoggedIn) {
    console.log(to,from)

        await useAuthStore().loadUser();
    }

    let canAccessRoute = await useAuthStore().canAccessRoute(to);
    if (!to.meta.authRequired || (to.meta.authRequired && canAccessRoute)) {
        if (to.meta.isAuthLayout && useAuthStore().isLoggedIn) {
            if (useAuthStore().role) {
                next({ name: "dashboard" });
            } else {
                next({ name: "home" });
            }
        }
        else {
            if (useAuthStore().role) {
                if (canAccessRoute) {
                    next();
                }
                else {
                    next({ name: "dashboard" });
                }
            }
            else {
                next();
            }
        }
    }
    else {
        if ((to.meta.authRequired || to.meta.isAuthLayout) && useAuthStore().isLoggedIn) {
            if (useAuthStore().role == 'admin' || useAuthStore().role == 'manager') {
                next({ name: "dashboard" });
            }
            else {
                next({ name: "dashboard" });
            }

        }
        else if (to.meta.authRequired && !useAuthStore().isLoggedIn) {
            // next({name: "login"});
            let params = JSON.stringify(to.params);
            if (to.params) {
                next({ name: "login", query: { returnTo: to.name, params: params } });
            }
            else {
                next({ name: "login", query: { returnTo: to.name } });
            }
        }
        else {
            next({ name: "home" });
        }
    }
})

export default router;
