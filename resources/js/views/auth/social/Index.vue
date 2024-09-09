<template>
    <div class="social-btn-col">
        <div class="signin-other-title">
            <h5 class="font-400">Or continue with social account</h5>
        </div>

        <!-- <button class="btn btn-indigo btn-md btn-icon" title="Facebook" type="button">
                <div class="btn-content"><i class="bx bxl-facebook fs-16"></i></div>
            </button> -->
        <button class="btn bg-white py-3 fs-17 w-100 text-center signin-google-btn" style="border: 1px solid var(--grey-40, #D0D5DD);" @click="socialLogin('google')" title="Google" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M21.0009 12.2001C21.0009 11.4601 20.9396 10.9201 20.807 10.3601H12.1846V13.7001H17.2457C17.1438 14.5301 16.5927 15.7801 15.3682 16.6201L15.351 16.7319L18.0773 18.8017L18.2661 18.8201C20.0008 17.2501 21.0009 14.9401 21.0009 12.2001Z" fill="#4285F4" />
                <path d="M12.1836 21C14.6631 21 16.7448 20.2 18.2652 18.82L15.3672 16.6199C14.5918 17.1499 13.5509 17.52 12.1836 17.52C9.75504 17.52 7.69382 15.9501 6.95906 13.78L6.85136 13.789L4.01657 15.939L3.97949 16.04C5.48968 18.98 8.59172 21 12.1836 21Z" fill="#34A853" />
                <path d="M6.95914 13.78C6.76526 13.22 6.65306 12.6199 6.65306 12C6.65306 11.3799 6.76526 10.7799 6.94894 10.2199L6.94381 10.1007L4.07348 7.91614L3.97957 7.95992C3.35715 9.17993 3 10.55 3 12C3 13.45 3.35715 14.8199 3.97957 16.04L6.95914 13.78Z" fill="#FBBC05" />
                <path d="M12.1836 6.47999C13.908 6.47999 15.0712 7.20998 15.7346 7.82003L18.3264 5.34C16.7347 3.89001 14.6631 3 12.1836 3C8.59172 3 5.48968 5.01998 3.97949 7.95997L6.94887 10.22C7.69382 8.05001 9.75504 6.47999 12.1836 6.47999Z" fill="#EB4335" />
            </svg>
            Continue with google
        </button>

        <button class="btn bg-white fs-17 w-100 text-center"
            @click="socialLogin('linkedin-openid')" title="Google" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                    d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71648 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31543 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30817 8.5752 7.002 8.575H7.003ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.669H19.67Z"
                    fill="#0077B5" />
            </svg>
            Continue with LinkedIn
        </button>

        <!-- <button class="btn btn-dark btn-md btn-icon ms-1" title="LinkedIn" type="button">
                <div class="btn-content">
                    <i class="bx bxl-linkedin fs-16"></i>
                </div>
            </button> -->
        <!-- <button class="btn btn-info btn-md btn-icon ms-1" title="Twitter" type="button">
                <div class="btn-content"><i class="bx bxl-twitter fs-16"></i></div>
            </button> -->
    </div>
</template>