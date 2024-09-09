import { defineStore } from 'pinia';

export const useHelperStore = defineStore('helperStore', {
    state() {
        return {
            error404: false
        };
    },
    getters: {
        isError404() {
            return this.error404;
        }
    },
    actions: {
        change404State(state) {
            this.error404 = state;
        }
    }
});
