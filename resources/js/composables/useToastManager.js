
import { TYPE, useToast } from 'vue-toastification'

export function useToastManager() {
    const display = (message, variant = 'success') => {
        const toast = useToast();
        toast(message, {type : variant})
    }

    return { display };
}

export function useErrorToastManager() {
    const display = (message, variant = 'danger') => {
        const toast = useToast();
        toast(message, {type : variant})
    }

    return { display };
}