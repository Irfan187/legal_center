<template>
    <!-- <footer v-if="footerType == 'wide'" class="footer no-hero-container">
        <b-container fluid>
            <b-row>
                <b-col col sm="6">
                    © {{ new Date().getFullYear() }} Intreego.
                </b-col>
                <b-col col sm="6">
                    <div class="text-sm-end d-none d-sm-block">
                        Developed by ScrumAD
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </footer>
    <footer v-if="footerType == 'fullwide'" class="">

        <b-row class="w-100">
            <b-col col sm="6">
                © {{ new Date().getFullYear() }} Intreego.
            </b-col>
            <b-col col sm="6">
                <div class="text-sm-end d-none d-sm-block">
                    Developed by ScrumAD
                </div>
            </b-col>
        </b-row>
    </footer> -->

    <!-- <footer v-if="footerType == 'centere'" class="footer" style="left: 0;">
        <b-container>
            <b-row>
                <b-col lg="12">
                    <div class="text-center">
                        <p class="mb-0 text-muted">© {{ new Date().getFullYear() }} This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </footer> -->

    <footer v-if="footerType == 'centered-talls'" class="footer border-top" style="left: 0;">

        <b-container class="">
            <b-row>
                <div class="col-lg-1 col-md-12 order-last order-lg-first footer-section footer-company-info-section">
                    <a href="/" class="mb-3">
                        <img src="" alt="Company Logo" class="footer-logo">
                    </a>
                    <p class="text-muted">mahara is more than a job search. Register<br /></p>
                    <p>
                        with us and our in-house consultants will</p>
                    <p> help employers find you.
                    </p>
                </div>

                <div class="col-lg-2 col-6 footer-section">
                    <h5 class="fw-400 text-dark">Industries</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Finance &
                                Banking</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Aviation</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Real Estate</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Information
                                Technology</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Education</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-6 footer-section">
                    <h5 class="fw-400 text-dark">Helpful links</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Terms and
                                conditions</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Privacy policy</a>
                        </li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Cookie policy</a>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-12 footer-section">
                    <h5 class="fw-400 text-dark">Contact us</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Our Dubai
                                address</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400"></a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Phone:(+72)
                                211-7370</a></li>
                        <li class="nav-item mb-2"><a href="#"
                                class="nav-link p-0 text-tertiary fw-400">Email:support@intreego.com</a></li>
                    </ul>
                </div>

            </b-row>
            <b-row>
                <b-col lg="12" class="border-top mt-2 mt-md-5">
                    <div class="text-center pt-3">
                        <p class="mb-0 text-muted">© {{ new Date().getFullYear() }} Intreego. Developed by ScrumAD</p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </footer>

    <footer v-if="footerType == 'centered-tall'" class="footer border-top" style="left: 0;">

        <b-container class="">
            <!-- <b-row>
                <div class="col-lg-2 col-md-12 order-last order-lg-first footer-section footer-company-info-section mb-1 d-sm-none d-block">
                    <a href="/" class="mb-1">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="70" viewBox="0 0 95 20" fill="none">
                            <path d="M71.9131 4.92676V20.0006H76.0806V11.1238V7.31099V4.92676H71.9131Z" fill="#09404B" />
                            <path
                                d="M81.5977 4.92605L76.6716 4.92604L76.6716 9.06396L77.4597 9.06396C79.745 9.06396 81.5977 7.21135 81.5977 4.92605Z"
                                fill="#09404B" />
                            <path
                                d="M40.9365 19.9999V0H45.104V6.99505C45.7345 6.06895 46.4439 5.399 47.2321 4.98521C48.0202 4.57142 48.9168 4.36452 49.9217 4.36452C51.5572 4.36452 52.838 4.85713 53.7641 5.84235C54.6902 6.80786 55.1532 8.15761 55.1532 9.8916V19.9999H50.9858V10.5418C50.9858 9.73396 50.7887 9.11327 50.3946 8.67978C50.0005 8.24628 49.4685 8.02953 48.7986 8.02953C48.0498 8.02953 47.3404 8.28569 46.6705 8.79801C45.3542 9.8351 45.104 11.6493 45.104 13.325V19.9999H40.9365Z"
                                fill="#09404B" />
                            <path
                                d="M30.9456 19.9704C29.3889 19.9704 28.1377 19.7536 27.1919 18.4334C26.2658 17.0935 25.8027 15.261 25.8027 12.9359C25.8027 10.1379 26.5121 8.00983 27.9308 6.5517C29.3495 5.07387 31.3889 4.33496 34.049 4.33496C35.5465 4.33496 37.3002 4.57141 39.3101 5.04432V19.9704H35.4382V17.5467V17.2118C34.4135 19.1231 32.8372 19.9704 30.9456 19.9704ZM31.8323 16.7783C32.4825 16.7783 33.1032 16.4334 33.6943 15.7438C34.9845 14.2386 35.2904 12.174 35.2904 10.1915V8.23643C34.9751 8.13791 34.65 8.06894 34.315 8.02953C33.9801 7.99012 33.6746 7.97042 33.3988 7.97042C31.0145 7.97042 29.8224 9.56647 29.8224 12.7586C29.8224 14 29.9998 14.9852 30.3544 15.7142C30.7091 16.4236 31.2017 16.7783 31.8323 16.7783Z"
                                fill="#09404B" />
                            <path
                                d="M61.9221 19.9704C60.3655 19.9704 59.1143 19.7536 58.1685 18.4334C57.2424 17.0935 56.7793 15.261 56.7793 12.9359C56.7793 10.1379 57.4887 8.00983 58.9074 6.5517C60.3261 5.07387 62.3655 4.33496 65.0256 4.33496C66.5231 4.33496 68.2768 4.57141 70.2866 5.04432V19.9704H66.4147V17.5467V17.2118C65.3901 19.1231 63.8138 19.9704 61.9221 19.9704ZM62.8088 16.7783C63.4591 16.7783 64.0798 16.4334 64.6709 15.7438C65.9611 14.2386 66.267 12.174 66.267 10.1915V8.23643C65.9517 8.13791 65.6266 8.06894 65.2916 8.02953C64.9566 7.99012 64.6512 7.97042 64.3753 7.97042C61.9911 7.97042 60.799 9.56647 60.799 12.7586C60.799 14 60.9763 14.9852 61.331 15.7142C61.6857 16.4236 62.1783 16.7783 62.8088 16.7783Z"
                                fill="#09404B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.0932 7.57075C13.8121 6.62753 13.0091 5.55603 12.0605 5.01398C11.2526 4.46226 10.1182 4.33496 8.95564 4.33496C7.87206 4.33496 6.90693 4.5939 6.06025 5.11177L0 11.374V19.9704H4.16748V12.6693C4.16748 11.6349 4.3037 10.5682 4.90364 9.72559C5.15225 9.37641 5.42903 9.07706 5.73397 8.82756C6.38422 8.27584 7.06402 7.99997 7.77338 7.99997C8.42362 7.99997 8.94579 8.22658 9.33988 8.67978C9.73396 9.11327 9.93101 9.72411 9.93101 10.5123V19.9704H14.0932V7.57075Z"
                                fill="#09404B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.0928 19.9704V7.58884C14.5855 6.50475 15.3123 5.42065 16.0192 5.10343C16.8862 4.59112 17.8714 4.33496 18.9748 4.33496C20.6103 4.33496 21.8812 4.82757 22.7876 5.81279C23.7137 6.7783 24.1768 8.12805 24.1768 9.86204V19.9704H20.0093V10.5123C20.0093 9.7044 19.8123 9.08372 19.4182 8.65022C19.0438 8.21672 18.5315 7.99997 17.8812 7.99997C17.0536 7.99997 16.295 8.33495 15.6054 9.0049C15.2059 9.4044 14.8659 9.87047 14.5855 10.4031C14.1929 11.149 14.098 12.0055 14.098 12.8484V19.9704H14.0928Z"
                                fill="#09404B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M81.9028 18.4334C82.8486 19.7536 84.0999 19.9704 85.6565 19.9704C87.5481 19.9704 89.1245 19.1231 90.1491 17.2118V17.5467V19.7457H94.021V5.04432C92.0112 4.57141 90.2575 4.33496 88.76 4.33496C86.0999 4.33496 84.0605 5.07387 82.6417 6.5517C81.223 8.00983 80.5137 10.1379 80.5137 12.9359C80.5137 15.261 80.9767 17.0935 81.9028 18.4334ZM88.4053 15.7438C87.8141 16.4334 87.1935 16.7783 86.5432 16.7783C85.9127 16.7783 85.4201 16.4236 85.0654 15.7142C84.7107 14.9852 84.5334 14 84.5334 12.7586C84.5334 9.56647 85.7255 7.97042 88.1097 7.97042C88.3856 7.97042 88.691 7.99012 89.026 8.02953C89.3609 8.06894 89.6861 8.13791 90.0013 8.23643V11.3844C90.0013 12.5813 89.7781 13.7901 89.1199 14.7898C88.8922 15.1357 88.6539 15.4537 88.4053 15.7438Z"
                                fill="#09404B" />
                        </svg>
                    </a>
                    <p class="text-textiary mt-2">Mahara is more than a job search. Register with us and our in-house
                        consultants will help employers find you.</p>
                    <div class=""><a
                            href="https://www.linkedin.com/"><img
                                src="https://intreego.cc:5173/resources/js/assets/images/linkedin.png"
                                class="create_account_icon" alt=""></a><a
                            href="https://twitter.com/"><img
                                src="https://intreego.cc:5173/resources/js/assets/images/twitter.png"
                                class="create_account_icon" alt=""></a></div>

                </div>
            </b-row> -->
            <b-row>
                <div class="col-lg-7 col-md-12 order-last order-lg-first footer-section footer-company-info-section mb-1 d-none d-sm-block">
                    <a href="/" class="mb-4 d-block ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="35" viewBox="0 0 95 20" fill="none">
                            <path d="M71.9131 4.92676V20.0006H76.0806V11.1238V7.31099V4.92676H71.9131Z" fill="#09404B" />
                            <path
                                d="M81.5977 4.92605L76.6716 4.92604L76.6716 9.06396L77.4597 9.06396C79.745 9.06396 81.5977 7.21135 81.5977 4.92605Z"
                                fill="#09404B" />
                            <path
                                d="M40.9365 19.9999V0H45.104V6.99505C45.7345 6.06895 46.4439 5.399 47.2321 4.98521C48.0202 4.57142 48.9168 4.36452 49.9217 4.36452C51.5572 4.36452 52.838 4.85713 53.7641 5.84235C54.6902 6.80786 55.1532 8.15761 55.1532 9.8916V19.9999H50.9858V10.5418C50.9858 9.73396 50.7887 9.11327 50.3946 8.67978C50.0005 8.24628 49.4685 8.02953 48.7986 8.02953C48.0498 8.02953 47.3404 8.28569 46.6705 8.79801C45.3542 9.8351 45.104 11.6493 45.104 13.325V19.9999H40.9365Z"
                                fill="#09404B" />
                            <path
                                d="M30.9456 19.9704C29.3889 19.9704 28.1377 19.7536 27.1919 18.4334C26.2658 17.0935 25.8027 15.261 25.8027 12.9359C25.8027 10.1379 26.5121 8.00983 27.9308 6.5517C29.3495 5.07387 31.3889 4.33496 34.049 4.33496C35.5465 4.33496 37.3002 4.57141 39.3101 5.04432V19.9704H35.4382V17.5467V17.2118C34.4135 19.1231 32.8372 19.9704 30.9456 19.9704ZM31.8323 16.7783C32.4825 16.7783 33.1032 16.4334 33.6943 15.7438C34.9845 14.2386 35.2904 12.174 35.2904 10.1915V8.23643C34.9751 8.13791 34.65 8.06894 34.315 8.02953C33.9801 7.99012 33.6746 7.97042 33.3988 7.97042C31.0145 7.97042 29.8224 9.56647 29.8224 12.7586C29.8224 14 29.9998 14.9852 30.3544 15.7142C30.7091 16.4236 31.2017 16.7783 31.8323 16.7783Z"
                                fill="#09404B" />
                            <path
                                d="M61.9221 19.9704C60.3655 19.9704 59.1143 19.7536 58.1685 18.4334C57.2424 17.0935 56.7793 15.261 56.7793 12.9359C56.7793 10.1379 57.4887 8.00983 58.9074 6.5517C60.3261 5.07387 62.3655 4.33496 65.0256 4.33496C66.5231 4.33496 68.2768 4.57141 70.2866 5.04432V19.9704H66.4147V17.5467V17.2118C65.3901 19.1231 63.8138 19.9704 61.9221 19.9704ZM62.8088 16.7783C63.4591 16.7783 64.0798 16.4334 64.6709 15.7438C65.9611 14.2386 66.267 12.174 66.267 10.1915V8.23643C65.9517 8.13791 65.6266 8.06894 65.2916 8.02953C64.9566 7.99012 64.6512 7.97042 64.3753 7.97042C61.9911 7.97042 60.799 9.56647 60.799 12.7586C60.799 14 60.9763 14.9852 61.331 15.7142C61.6857 16.4236 62.1783 16.7783 62.8088 16.7783Z"
                                fill="#09404B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.0932 7.57075C13.8121 6.62753 13.0091 5.55603 12.0605 5.01398C11.2526 4.46226 10.1182 4.33496 8.95564 4.33496C7.87206 4.33496 6.90693 4.5939 6.06025 5.11177L0 11.374V19.9704H4.16748V12.6693C4.16748 11.6349 4.3037 10.5682 4.90364 9.72559C5.15225 9.37641 5.42903 9.07706 5.73397 8.82756C6.38422 8.27584 7.06402 7.99997 7.77338 7.99997C8.42362 7.99997 8.94579 8.22658 9.33988 8.67978C9.73396 9.11327 9.93101 9.72411 9.93101 10.5123V19.9704H14.0932V7.57075Z"
                                fill="#09404B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M14.0928 19.9704V7.58884C14.5855 6.50475 15.3123 5.42065 16.0192 5.10343C16.8862 4.59112 17.8714 4.33496 18.9748 4.33496C20.6103 4.33496 21.8812 4.82757 22.7876 5.81279C23.7137 6.7783 24.1768 8.12805 24.1768 9.86204V19.9704H20.0093V10.5123C20.0093 9.7044 19.8123 9.08372 19.4182 8.65022C19.0438 8.21672 18.5315 7.99997 17.8812 7.99997C17.0536 7.99997 16.295 8.33495 15.6054 9.0049C15.2059 9.4044 14.8659 9.87047 14.5855 10.4031C14.1929 11.149 14.098 12.0055 14.098 12.8484V19.9704H14.0928Z"
                                fill="#09404B" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M81.9028 18.4334C82.8486 19.7536 84.0999 19.9704 85.6565 19.9704C87.5481 19.9704 89.1245 19.1231 90.1491 17.2118V17.5467V19.7457H94.021V5.04432C92.0112 4.57141 90.2575 4.33496 88.76 4.33496C86.0999 4.33496 84.0605 5.07387 82.6417 6.5517C81.223 8.00983 80.5137 10.1379 80.5137 12.9359C80.5137 15.261 80.9767 17.0935 81.9028 18.4334ZM88.4053 15.7438C87.8141 16.4334 87.1935 16.7783 86.5432 16.7783C85.9127 16.7783 85.4201 16.4236 85.0654 15.7142C84.7107 14.9852 84.5334 14 84.5334 12.7586C84.5334 9.56647 85.7255 7.97042 88.1097 7.97042C88.3856 7.97042 88.691 7.99012 89.026 8.02953C89.3609 8.06894 89.6861 8.13791 90.0013 8.23643V11.3844C90.0013 12.5813 89.7781 13.7901 89.1199 14.7898C88.8922 15.1357 88.6539 15.4537 88.4053 15.7438Z"
                                fill="#09404B" />
                        </svg>
                    </a>
                    <p class="text-textiary mb-4 font-size14">Mahara is more than a job search. <br />Register with us and
                        our in-house
                        consultants will help employers find you.</p>
                    <div class="d-flex align-items-center gap-3 ">
                        <a href="https://www.linkedin.com/company/mahara-ai/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4 3.00049H20C20.2652 3.00049 20.5196 3.10585 20.7071 3.29338C20.8946 3.48092 21 3.73527 21 4.00049V20.0005C21 20.2657 20.8946 20.5201 20.7071 20.7076C20.5196 20.8951 20.2652 21.0005 20 21.0005H4C3.73478 21.0005 3.48043 20.8951 3.29289 20.7076C3.10536 20.5201 3 20.2657 3 20.0005V4.00049C3 3.73527 3.10536 3.48092 3.29289 3.29338C3.48043 3.10585 3.73478 3.00049 4 3.00049ZM5 5.00049V19.0005H19V5.00049H5ZM7.5 9.00049C7.10218 9.00049 6.72064 8.84245 6.43934 8.56115C6.15804 8.27984 6 7.89831 6 7.50049C6 7.10266 6.15804 6.72113 6.43934 6.43983C6.72064 6.15852 7.10218 6.00049 7.5 6.00049C7.89782 6.00049 8.27936 6.15852 8.56066 6.43983C8.84196 6.72113 9 7.10266 9 7.50049C9 7.89831 8.84196 8.27984 8.56066 8.56115C8.27936 8.84245 7.89782 9.00049 7.5 9.00049ZM6.5 10.0005H8.5V17.5005H6.5V10.0005ZM12 10.4305C12.584 9.86549 13.266 9.50049 14 9.50049C16.071 9.50049 17.5 11.1795 17.5 13.2505V17.5005H15.5V13.2505C15.5 12.7864 15.3156 12.3412 14.9874 12.0131C14.6592 11.6849 14.2141 11.5005 13.75 11.5005C13.2859 11.5005 12.8408 11.6849 12.5126 12.0131C12.1844 12.3412 12 12.7864 12 13.2505V17.5005H10V10.0005H12V10.4305Z" fill="#475467"/>
</svg>
</a>

<a href="https://twitter.com/">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M18.2048 2.25049H21.5128L14.2858 10.5105L22.7878 21.7505H16.1308L10.9168 14.9335L4.95084 21.7505H1.64084L9.37084 12.9155L1.21484 2.25049H8.04084L12.7538 8.48149L18.2048 2.25049ZM17.0438 19.7705H18.8768L7.04484 4.12649H5.07784L17.0438 19.7705Z" fill="#475467"/>
</svg>
</a>
                    </div>

                </div>

                <div class="col-lg-2 col-12 footer-section">
                    <!-- <h5 class="fw-400 text-dark mb-4 fw-bold">Browse jobs</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-0">
                            <a href="#" class="nav-link p-0 text-tertiary fw-400">Designer</a></li>
                        <li class="nav-item mb-0"><a href="#" class="nav-link p-0 text-tertiary fw-400">Marketing</a></li>
                        <li class="nav-item mb-0"><a href="#" class="nav-link p-0 text-tertiary fw-400">Businsss</a></li>
                        <li class="nav-item mb-0"><a href="#" class="nav-link p-0 text-tertiary fw-400">Technology
                                Technology</a></li>

                    </ul> -->
                </div>

                <!-- <div class="col-lg-2 col-6 footer-section">
                    <h5 class="fw-400 text-dark bold">Job Functions</h5>
                    <ul class="nav flex-column">

                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Technology &
                                Innovation</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Engineering</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Consulting</a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Creative Arts
                            </a></li>
                        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-tertiary fw-400">Human Resource</a>
                        </li>
                    </ul>
                </div> -->

                <div class="col-lg-3 col-md-12 footer-section">
                    <h5 class="fw-400 text-dark mb-4">Contact us</h5>
                    <ul class="nav flex-column footer-contact">
                        <li class="nav-item font-400 mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M2.50033 2.50049H17.5003C17.7213 2.50049 17.9333 2.58829 18.0896 2.74457C18.2459 2.90085 18.3337 3.11281 18.3337 3.33382V16.6672C18.3337 16.8882 18.2459 17.1001 18.0896 17.2564C17.9333 17.4127 17.7213 17.5005 17.5003 17.5005H2.50033C2.27931 17.5005 2.06735 17.4127 1.91107 17.2564C1.75479 17.1001 1.66699 16.8882 1.66699 16.6672V3.33382C1.66699 3.11281 1.75479 2.90085 1.91107 2.74457C2.06735 2.58829 2.27931 2.50049 2.50033 2.50049ZM16.667 6.03215L10.0603 11.9488L3.33366 6.01382V15.8338H16.667V6.03215ZM3.75949 4.16715L10.0512 9.71882L16.252 4.16715H3.75949Z"
                                    fill="#475467" />
                            </svg>
                            support@mahara.ai
                        </li>
                        <li class="nav-item font-400 mb-0">
                            <i class="ri ri-phone-line fs-20 text-secondary"> </i>
                            800 4 DQR (377)
                        </li>

                        <li class="nav-item d-flex align-items-start mb-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M10 19.7738L4.69667 14.4705C3.64779 13.4216 2.93349 12.0852 2.64411 10.6304C2.35473 9.17553 2.50326 7.66753 3.07092 6.29709C3.63858 4.92665 4.59987 3.75531 5.83324 2.93121C7.0666 2.1071 8.51665 1.66724 10 1.66724C11.4834 1.66724 12.9334 2.1071 14.1668 2.93121C15.4001 3.75531 16.3614 4.92665 16.9291 6.29709C17.4968 7.66753 17.6453 9.17553 17.3559 10.6304C17.0665 12.0852 16.3522 13.4216 15.3033 14.4705L10 19.7738ZM14.125 13.2922C14.9408 12.4763 15.4963 11.4369 15.7213 10.3054C15.9463 9.17386 15.8308 8.001 15.3892 6.93514C14.9477 5.86927 14.2 4.95826 13.2408 4.31731C12.2815 3.67636 11.1537 3.33426 10 3.33426C8.8463 3.33426 7.71851 3.67636 6.75924 4.31731C5.79997 4.95826 5.05229 5.86927 4.61076 6.93514C4.16923 8.001 4.05368 9.17386 4.27871 10.3054C4.50374 11.4369 5.05926 12.4763 5.875 13.2922L10 17.4172L14.125 13.2922ZM10 10.8338C9.55798 10.8338 9.13405 10.6582 8.82149 10.3457C8.50893 10.0331 8.33334 9.6092 8.33334 9.16717C8.33334 8.72514 8.50893 8.30122 8.82149 7.98866C9.13405 7.6761 9.55798 7.5005 10 7.5005C10.442 7.5005 10.866 7.6761 11.1785 7.98866C11.4911 8.30122 11.6667 8.72514 11.6667 9.16717C11.6667 9.6092 11.4911 10.0331 11.1785 10.3457C10.866 10.6582 10.442 10.8338 10 10.8338Z"
                                    fill="#475467" />
                            </svg>
                            <p class="text-tertiary font-size14 fw-400">Dquarter, Building 5, Dubai Media City, Dubai, UAE</p>
                        </li>
                    </ul>
                </div>

            </b-row>
            <b-row class="footer-bar border-top">
                <b-col lg="12" class="">
                    <div class="d-flex  justify-content-between">
                        <p class="mb-0 font-size14 text-muted">© {{ new Date().getFullYear() }}   All Rights Reserved - <router-link :to="{'name' : 'home'}"><span class="text-primary">mahara.ai
                            </span></router-link> </p>
                        <div class="d-flex">
                            <router-link class="me-4 font-400 font-size14 mb-0" :to="{name: 'cookiePolicy'}">Cookie Policy</router-link>
                            <router-link class="me-4 font-400 font-size14 mb-0" :to="{name: 'privacyPolicy'}">Privacy Policy</router-link>
                            <router-link class="me-4 font-400 font-size14 mb-0" :to="{name: 'terms'}">Terms</router-link>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </footer>
</template>

<script setup lang='js'>

const props = defineProps({
    footerType: { type: String, default: 'wide' },
});

</script>
