import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from 'vue-router'

export function useHttpErrorManager() {

    const handleError = async (error, displayToast = false) => {
        let errors = {};

        let message = error.message;
        let error_message = "";
        let err_404 = false;

        if (error.response !== undefined && error.response.status !== undefined && error.response.status === 422) {
            displayToast = false;
            let error_set = error.response.data.errors;
            if(error_set){
                error_set = Object.entries(error_set);
                error_set.forEach((errorItem) => {
                    errors[errorItem[0]] = errorItem[1][0];
                });
            }
            error_message = error.response.data.message;
        }
        else if (error.response !== undefined && error.response.status !== undefined && error.response.status === 419) {
            error_message = error.response.data.message;
            window.location.reload();
        }
        else if (error.response !== undefined && error.response.status !== undefined && error.response.status === 404) {
            error_message = error.response.data.message;
            err_404 = true;
        }
        else if (error.response !== undefined && error.response.status !== undefined && error.response.status === 401) {
            error_message = error.response.data.message;
            if (useAuthStore().isLoggedIn) {
                useAuthStore().processLogout();
            }
        }
        else if (error.response !== undefined && error.response.status !== undefined && error.response.data !== undefined) {
            error_message = error.response.data.message;
        }

        if (error.response !== undefined && error.response.data !== undefined && error.response.data.message !== undefined && error.response.data.title !== undefined) {
            error_message = error.response.data.message;
        }

        if (error_message != undefined || error_message != null || error_message != "") {
            errors['err_message'] = error_message; 
        }

        if (message != undefined || message != null || message != "") {
            errors['alt_message'] = message; 
        }

        if(displayToast){
            let temp_message = error_message+"\n"+message;
        }

        if(err_404){
            useRouter().push({ name: "error-404" });
        }

        return errors;
    }

    return { handleError };
}

