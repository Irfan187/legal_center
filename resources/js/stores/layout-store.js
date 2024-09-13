import { defineStore } from 'pinia';
import { LayoutType, LayoutWidth, SidebarSize, Topbar, Mode, Postion, SidebarView, SidebarColor, SidebarImage, Preloader } from '@/utils/enums';

export const useLayoutStore = defineStore('layoutStore', {
    state() {
        return {
            layoutType: LayoutType.vertical,
            layoutWidth: LayoutWidth.fluid,
            sidebarSize: SidebarSize.smHoverActive,
            topbar: Topbar.light,
            mode: Mode.light,
            position: Postion.fixed,
            sidebarView: SidebarView.default,
            sidebarColor: SidebarColor.light,
            sidebarImage: SidebarImage.none,
            preloader: Preloader.enable
        };
    },
    getters: {
        modeName() {
            if (this.mode == Mode.dark) {
                return ["bx-sun", "Light Mode"];
            }
            return ["bx-moon", "Dark Mode"];
        },
        sidebarName() {
            if (this.sidebarView == SidebarView.detached) {
                return ["bx-arrow-to-left", "Attach Sidebar"];
            }
            return ["bx-arrow-to-right", "Detach Sidebar"];
        },
    },
    actions: {
        changeLayoutWidth(layoutWidth) {
            this.layoutWidth = layoutWidth;
        },    
        changeTopbar(topbar) {
            this.topbar = topbar;
        },    
        changeMode() {
            if (this.mode == Mode.light) {
                this.mode = Mode.dark;
                this.sidebarColor = SidebarColor.dark;
            }
            else {
                this.mode = Mode.light;
                this.sidebarColor = SidebarColor.light;
            }
            document.documentElement.setAttribute("data-layout-mode", this.mode);
            document.documentElement.setAttribute("data-sidebar", this.mode);
        },
        changeSidebarView() {
            if (this.sidebarView == SidebarView.detached) {
                this.sidebarView = SidebarView.default;
            }
            else {
                this.sidebarView = SidebarView.detached;
            }
            document.documentElement.setAttribute("data-layout-style", this.sidebarView);
        },
        changeSidebarColor(sidebarColor) {
            this.sidebarColor = sidebarColor;
        },
        changeSidebarSize() {
            if (this.sidebarSize == SidebarSize.smHover) {
                this.sidebarSize = SidebarSize.smHoverActive;
            }
            else {
                this.sidebarSize = SidebarSize.smHover;
            }
            document.documentElement.setAttribute("data-sidebar-size", this.sidebarSize);
        },
        updateColorMode(mode){
            if (mode == 'light') {
                this.mode = Mode.light;
                this.sidebarColor = SidebarColor.light;
            }
            else {
                this.mode = Mode.dark;
                this.sidebarColor = SidebarColor.dark;
            }
            document.documentElement.setAttribute("data-layout-mode", this.mode);
            document.documentElement.setAttribute("data-sidebar", this.mode);
        },
        updateLayoutMode(mode){
            if (mode == 'default') {
                this.sidebarView = SidebarView.default;
            }
            else {
                this.sidebarView = SidebarView.detached;
            }
            document.documentElement.setAttribute("data-layout-style", this.sidebarView);
        },
        updateSidebarMode(mode){
            if (mode == 'sm-hover') {
                this.sidebarSize = SidebarSize.smHover;
            }
            else {
                this.sidebarSize = SidebarSize.smHoverActive;
            }
            document.documentElement.setAttribute("data-sidebar-size", this.sidebarSize);
        },
    }
});