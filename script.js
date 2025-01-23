document.addEventListener('DOMContentLoaded', () => {
    const domain = ".";

    const getElement = (selector) => {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`Element with selector "${selector}" not found in the DOM.`);
            return {
                classList: { add: () => { }, remove: () => { }, toggle: () => { } },
                style: {},
                src: "",
                onclick: () => {}
            };
        }
        return element;
    };

    const body = getElement("body");
    const header = getElement(".header");
    const headerMain = getElement(".header--main");
    const nav = getElement("nav.menu");
    const modeToggle = getElement(".dark-light");
    const searchToggle = getElement(".searchToggle");
    const navOpen = getElement(".open-nav");
    const navLogo = getElement(".nav-logo");
    const footerLogo = getElement(".footer-logo");
    const checkOut = getElement(".shopping-cart");
    const backToTopButton = getElement(".back-to-top");
    const pageProgressBar = getElement(".progress");
    const dropDown = document.querySelectorAll(".js-sub_menu");
    const showDn = document.querySelectorAll(".sub-menu");
    const iconDn = document.querySelectorAll(".uil-angle-down");
    const yearElement = getElement("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    window.addEventListener('scroll', () => {
        if (header && window.scrollY > 20) {
            header.classList.add("f-nav");
        } else if (header) {
            header.classList.remove("f-nav");
        }

        // Corrected cross-browser scroll percentage calculation
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight || 0;
        const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

        pageProgressBar.style.width = `${scrolledPercentage}%`;
        backToTopButton.classList.toggle("hidden", window.scrollY <= 100);
    });

    const checkBgMode = (mode) => {
        if (mode) {
            switch (mode) {
                case "light-mode":
                    body?.classList.remove("dark"); // Ensure dark class is removed
                    if (navLogo) navLogo.src = `${domain}/images/Halo Cyberlife Logo.gif`;
                    if (footerLogo) footerLogo.src = `${domain}/images/Halo Cyberlife Logo.gif`;
                    break;
                case "dark-mode":
                    body?.classList.add("dark");
                    if (navLogo) navLogo.src = `${domain}/images/Halo Cyberlife Logo.gif`;
                    if (footerLogo) footerLogo.src = `${domain}/images/Halo Cyberlife Logo.gif`;
                    break;
                default:
                    break;
            }
        }
    };

    const toggleMode = () => {
        modeToggle?.classList.toggle("active");
        body?.classList.toggle("dark");
        localStorage.setItem("mode", body?.classList.contains("dark") ? "dark-mode" : "light-mode");
    };

    modeToggle?.addEventListener("click", toggleMode);

    const storedMode = localStorage.getItem("mode");
    checkBgMode(storedMode);

    searchToggle?.addEventListener("click", () => {
        searchToggle.classList.toggle("active");
    });

    checkOut?.addEventListener("click", () => {
        window.location.href = `${domain}/cart.html`;
    });

    navOpen?.addEventListener("click", () => {
        nav?.classList.toggle("active");
    });

    function handleClick(event) {
        const target = event.target;
        const className = "active";
        const iconClass = "opened";

        showDn.forEach(elem => {
            if (elem && target.parentNode) {
                elem.classList.toggle(className, target.parentNode.contains(elem));
            }
        });

        iconDn.forEach(elem => {
            if (elem && target.parentNode) {
                elem.classList.toggle(iconClass, target.parentNode.contains(elem));
            }
        });
    }

    dropDown.forEach(elem => elem.addEventListener("click", handleClick));

    backToTopButton?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
