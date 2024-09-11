<template>
    <b-container fluid class="d-flex flex-column justify-content-between">

        <ul class="navbar-nav px-3" :class="{ mobile_sticky_footer: isActive }" id="navbar-nav">
            <!-- <li class="menu-title d-flex justify-content-between">
                <span> Menu</span>
            </li> -->

            <li class="nav-item" v-if="authStore.user">
                <router-link :to="{ name: 'dashboard' }" class="nav-link menu-link">
                    <i class="ri ri-apps-2-fill"></i>
                    <span> Dashboard</span>
                </router-link>
            </li>

            <!-- Admin Menu -->
            
            <li class="nav-item" v-if="authStore.userHasRole(['admin'])">
                <router-link :to="{ name: 'designation_list' }" class="nav-link menu-link">
                    <i class="fa fa-user-tie"></i>
                    <span> Designations</span>
                </router-link>
            </li>
        </ul>

        <div class="sidebar-footer">
        <p class="mb-1">legalcenter.com</p>
        <span>© 2024 All Rights Reserved.</span>
    </div>
    </b-container>
</template>

<script setup lang='js'>

import { useNavMenuHelper } from "@/composables/useNavMenuHelper";
import { onMounted, reactive, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/stores/auth-store";
import Swal from 'sweetalert2';

const isActive = ref(false);
const authStore = useAuthStore();
console.log(authStore.userHasRole(['admin']));
// authStore.loadUser();
const initNavMenu = () => {
    if (document.querySelectorAll(".navbar-nav .collapse")) {
        let collapses = document.querySelectorAll(".navbar-nav .collapse");

        collapses.forEach((collapse) => {
            console.log(collapse, 'jjhjhkhkjhkjhkh')
            // Hide sibling collapses on `show.bs.collapse`
            collapse.addEventListener("show.bs.collapse", (e) => {
                e.stopPropagation();
                let collapseParent = collapse.parentElement;
                if (collapseParent != null) {
                    let closestCollapse = collapseParent.closest(".collapse");
                    if (closestCollapse) {
                        let siblingCollapses = closestCollapse.querySelectorAll(".collapse");
                        siblingCollapses.forEach((siblingCollapse) => {
                            if (siblingCollapse.classList.contains("show")) {
                                siblingCollapse.classList.remove("show");
                            }
                        });
                    }
                    else {

                        let getSiblings = (elem) => {
                            // Setup siblings array and get the first sibling
                            let siblings = [];
                            if (elem && elem.parentNode) {
                                let sibling = elem.parentNode.firstChild;
                                // Loop through each sibling and push to the array
                                while (sibling) {
                                    if (sibling.nodeType === 1 && sibling !== elem) {
                                        siblings.push(sibling);
                                    }
                                    sibling = sibling.nextSibling;
                                }
                            }
                            return siblings;
                        };

                        let siblings = getSiblings(collapse.parentElement);
                        siblings.forEach((item) => {
                            if (item.childNodes.length > 2)
                                item.firstElementChild.setAttribute("aria-expanded", "false");
                            let ids = item.querySelectorAll("*[id]");
                            ids.forEach((item1) => {
                                item1.classList.remove("show");
                                if (item1.childNodes.length > 2) {
                                    let val = item1.querySelectorAll("ul li a");

                                    val.forEach((subitem) => {
                                        if (subitem.hasAttribute("aria-expanded"))
                                            subitem.setAttribute("aria-expanded", "false");
                                    });
                                }
                            });
                        });
                    }
                }
            });

            // Hide nested collapses on `hide.bs.collapse`
            collapse.addEventListener("hide.bs.collapse", (e) => {
                e.stopPropagation();
                let childCollapses = collapse.querySelectorAll(".collapse");
                childCollapses.forEach((childCollapse) => {
                    let childCollapseInstance = childCollapse;
                    childCollapseInstance.style.display = "none";
                });
            });
        });
    }
}
onMounted(() => {
    initNavMenu();
});


const submitLogoutAction = async () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to logout account.",
        showCancelButton: true,
        confirmButtonText: 'Logout',
        cancelButtonText: 'Cancel',
        confirmButtonColor: '#153753',
        cancelButtonColor: '#3085d6'
    }).then((result) => {
        if (result.isConfirmed) {
            authStore.processLogout();
        }
    })


}
const settings = reactive({
    minScrollbarLength: 60,
});

const onRoutechange = (ele) => {
    useNavMenuHelper().initActiveMenuOnRouteChange(ele.path);
    if (document.getElementsByClassName("mm-active").length > 0) {
        let htmlElem = document.getElementsByClassName("mm-active")[0];
    }
}

const route = useRoute();
watch(() => {
    return { ...route }
}, onRoutechange, { deep: true, immediate: true })

if (window.innerWidth <= 768) {
    isActive.value = true;
} else {
    isActive.value = false;
}

</script>

<style>
@media (max-width:992px) {
    .mobile_sticky_footer {
        position: fixed;
        flex-direction: row !important;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: scroll;
        background-color: #fff;
        top: 90%;
        z-index: 1000;
    }

    .navbar-menu {
        background: none !important;
        border-right: none !important;
        position: relative !important;
        width: 0px !important;
        box-shadow: none;
    }

    .navbar-menu .navbar-nav .nav-link.active {
        color: var(--text-color);
        background: #E6F7FF;
        border-top: 0.1875rem solid var(--primary-color);
        border-right: none !important;
        font-weight: 500;
    }

    #scrollbar {
        height: 0px !important;
    }

    ul#navbar-nav {
        overflow: scroll;
    }
}
</style>
