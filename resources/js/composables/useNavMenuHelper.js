export function useNavMenuHelper() {
    const initActiveMenu = () => {
        if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
            localStorage.setItem('hoverd', "true")
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
        } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
            localStorage.setItem('hoverd', "false")
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        } else {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        }
    }

    const initActiveMenuOnRouteChange = (ele) => {
        setTimeout(() => {
            let navbar = document.querySelector("#navbar-nav");
            if (navbar != null) {

                let a = navbar.querySelector('[href="' + ele + '"]');
                if (a) {
                    a.classList.add("active");
                    let parentCollapseDiv = a.closest(".collapse.menu-dropdown");
                    if (parentCollapseDiv) {
                        parentCollapseDiv.classList.add("show");
                        let parentColParent = parentCollapseDiv.parentElement;
                        if (parentColParent != null) {
                            parentColParent.children[0].classList.add("active");
                            parentColParent.children[0].setAttribute("aria-expanded", "true");
                            if (parentColParent.closest(".collapse.menu-dropdown")) {
                                let parentColParentCloseCollapse = parentColParent.closest(".collapse");
                                if (parentColParentCloseCollapse != null) {
                                    parentColParentCloseCollapse.classList.add("show");
                                    if (parentColParentCloseCollapse.previousElementSibling) {
                                        parentColParentCloseCollapse.previousElementSibling.classList.add("active");
                                        let grandParentColParentCloseCollapse = parentColParentCloseCollapse.previousElementSibling.parentElement;
                                        if (grandParentColParentCloseCollapse != null) {
                                            const grandparent = grandParentColParentCloseCollapse.closest(".collapse");
                                            if (grandparent && grandparent && grandparent.previousElementSibling) {
                                                grandparent.previousElementSibling.classList.add("active");
                                                grandparent.classList.add("show");
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }, 100);
    }

    return { initActiveMenu, initActiveMenuOnRouteChange };
}