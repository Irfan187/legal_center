import { User } from '@/utils/types';
import { defineStore } from 'pinia';
import apiClient from '@/utils/axios';
// import { useHttpErrorManager } from '@/composables/useHttpErrorManager';
import router from '@/router';
// import { useAppHelpers } from '@/composables/useAppHelpers';
// import { useLayoutStore } from "@/stores/layout-store";

export const useAuthStore = defineStore('authStore', {
    state() {
        return {
            user: null,
            scopes: [] ,
            role: null,
        };
    },
    getters: {
        isLoggedIn() {
            if (this.user == null) {
                return false;
            }
            return true;
        },
        getUser() {
            return this.user;
        }
    },
    actions: {
        updateUser () {
            if(this.user){
                this.user = value;
            }
        },
        updateHasNewMessage () {
            if(this.user){
                this.user.has_new_message = value;
            }
        },
        async loadUser(force = false) {
            try {
                const response = await apiClient.get('auth/user');
                
                this.user = response.data.user;
                this.scopes = response.data.scopes;
                this.role = response.data.user.type;
        
                if (this.isLoggedIn) {
                    const responseSettings = await apiClient.get('user_setting/fetchTemplateSettings');

                    const colorMode = responseSettings.data.dark_mode;
                    const layoutMode = responseSettings.data.detach_layout;
                    const sidebarSize = responseSettings.data.sidebar_size;
        
                    // useLayoutStore().updateColorMode(colorMode === 1 ? 'dark' : 'light');
                    // useLayoutStore().updateLayoutMode(layoutMode === 1 ? 'detached' : 'default');
                    // useLayoutStore().updateSidebarMode(sidebarSize === 1 ? 'sm-hover-active' : 'sm-hover');
                }
                return true;
            } 
            catch (error) {
                // let errorObj = await useHttpErrorManager().handleError(error, false);
                if (this.isLoggedIn) {
                    await this.processLogout();
                } 
                return false;
            }
        },
        async onlyLoadUser() {
            try {
                const response = await apiClient.get('auth/user');
                
                this.user = response.data.user;
                this.scopes = response.data.scopes;
                this.role = response.data.user.type;

                return true;
            } 
            catch (error) {
                // let errorObj = await useHttpErrorManager().handleError(error, false);
                if (this.isLoggedIn) {
                    await this.processLogout();
                } 
                return false;
            }
        },
        async processLogout() {
            if(this.user){
                let type = this.role == 'manager' || this.role == 'admin' ? 'manager' : 'user';
            }
            await apiClient.post('auth/logout', {})
                .then(async (response) => {
                    this.user = null;
                    this.scopes = [];
                    this.role = null;
                    window.location.href = '/auth/login';
                    // await router.push({ name: 'login' });
                })
                .catch((error) => {
                    // useAppHelpers().deleteAllCookies('XSRF-TOKEN');
                });
            if(this.isLoggedIn){
                this.user = null;
                this.scopes = [];
                this.role = null;
                window.location.href = '/auth/login';
            }
           
        },
        userHasScope(scopes, condition = 'any') {
            let hasScope = false;
            if (condition == undefined) {
                condition = "any";
            }
            if (scopes == undefined || scopes.length == 0) {
                hasScope = true;
                return hasScope;
            }

            if (typeof scopes == 'string') {
                scopes = [scopes];
            }

            if (scopes != undefined) {
                if (scopes) {
                    scopes.every((scope) => {
                        if (this.scopes.includes('*')) {
                            hasScope = true;
                            return false;
                        }

                        if (this.scopes.includes(scope)) {
                            hasScope = true;
                            if (condition == "any") {
                                return false;
                            }
                            return true;
                        }
                        else {
                            if (condition == "all") {
                                hasScope = false;
                                return false;
                            }
                            return true;
                        }
                        return true;
                    });
                }
            }
            return hasScope;
        },
        userHasRole(role){
            if(role == undefined){
                return true;
            }
            if(this.role){
                let roleAccess = true;
                
                if(typeof role == 'string'){
                    if(this.role == 'admin' || this.role == 'manager'){
                        roleAccess = role == 'manager';
                    }
                    else{
                        roleAccess = this.role == role
                    }
                }
                else{
                    if(!role.includes(this.role)){
                        roleAccess = false;
                    }
                }
                
                return roleAccess
            }
            return false;
        },
        async canAccessRoute(route) {
            let hasRole = this.userHasRole(route.meta.type);
            let hasScope = this.userHasScope(route.meta.scope, route.meta.scope_condition);

            if (!route.meta.authRequired && route.meta.isAuthLayout && !this.isLoggedIn) {
                return true;
            }
            else if (!route.meta.authRequired && !route.meta.isAuthLayout) {
                return true;
            }
            else if (route.meta.authRequired && hasRole && hasScope && this.isLoggedIn) {
                return true;
            }
            return false;
        }
    }
});