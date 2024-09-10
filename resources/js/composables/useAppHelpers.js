export function useAppHelpers() {
    const togglePassword = (element) => {
        alert(element);
        if (element) {
            element.onclick = () => {
                var passwordInputs =
                    element.parentElement.parentElement.parentElement.parentElement.querySelectorAll(
                        ".password-input"
                    );
                passwordInputs.forEach((elem) => {
                    if (elem.type === "password") {
                        elem.type = "text";
                        element.classList.remove("bx-show");
                        element.classList.add("bx-hide");
                    } else {
                        elem.type = "password";
                        element.classList.remove("bx-hide");
                        element.classList.add("bx-show");
                    }
                });
            };
        }
    };

    const switchClasses = (element, addClass, removeClass) => {
        if (element) {
            element.classList.add(addClass);
            element.classList.remove(removeClass);
        }
    };

    const htmlDecode = (data) => {
        var txt = document.createElement("textarea");
        txt.innerHTML = data;
        return txt.value;
    };

    const htmlEncode = (input) => {
        const textArea = document.createElement("textarea");
        textArea.innerText = input;
        return textArea.innerHTML.split("<br>").join("\n");
    };

    const deleteAllCookies = (cookieName = "", path = "") => {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;

            if (cookie == "" || cookieName.trim() == name.trim()) {
            } else {
                continue;
            }
            deleteCookie(name, path);
        }
    };

    const deleteCookie = (name, path = "") => {
        if (path == "") {
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie =
                name.trim() + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie =
                name + "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie =
                name.trim() +
                "=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        } else {
            document.cookie =
                name +
                "=; path=" +
                path +
                "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie =
                name.trim() +
                "=; path=" +
                path +
                "; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    };

    const getCookie = (name) => {
        const cookies = document.cookie.split(";");
        for (const cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key.trim() === name) {
                return decodeURIComponent(value.trim());
            }
        }
        return "";
    };

    const timeAgo = (date) => {
        date = date.trim();
        if (!date.endsWith(".000000Z")) {
            date += ".000000Z";
        }
        if (date.indexOf(" ") >= 0) {
            date = date.replace(/\s+/g, "T");
        }

        const seconds = Math.floor(
            (new Date().valueOf() - new Date(date).valueOf()) / 1000
        );

        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
            return interval + " years ago";
        }

        interval = Math.floor(seconds / 2592000);
        if (interval >= 1) {
            return interval + " months ago";
        }

        interval = Math.floor(seconds / 86400);
        if (interval >= 1) {
            return interval + " days ago";
        }

        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
            return interval + " hours ago";
        }

        interval = Math.floor(seconds / 60);
        if (interval >= 1) {
            return interval + " minutes ago";
        }

        if (seconds < 10) return "just now";

        return Math.floor(seconds) + " seconds ago";
    };

    return {
        togglePassword,
        switchClasses,
        htmlDecode,
        htmlEncode,
        deleteAllCookies,
        deleteCookie,
        getCookie,
        timeAgo
    };
}
