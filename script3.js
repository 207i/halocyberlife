// Let's keep the domain variable for future flexibility
let domain = ".";

document.addEventListener('DOMContentLoaded', () => {
    // Utility function to get elements with null checks and dummy objects
    const getElement = (selector) => {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`Element with selector "${selector}" not found in the DOM.`);
            // Return a dummy object to prevent further errors
            return { classList: { add: () => { }, remove: () => { }, toggle: () => { } },
                     style: {} // Add a dummy style object
                   };
        }
        return element;
    };

    const body = getElement("body");
    let header = getElement(".header"); // Declare header inside DOMContentLoaded
    const nav = getElement("nav.menu");
    const modeToggle = getElement(".dark-light");
    const searchToggle = getElement(".searchToggle");
    const navOpen = getElement(".open-nav");
    const navLogo = getElement(".nav-logo");
    const footerLogo = getElement(".footer-logo");
    const year = getElement("#year");
    const checkOut = getElement(".shopping-cart");
    const backToTopButton = getElement(".back-to-top");
    const pageProgressBar = getElement(".progress");
    const dropDown = document.querySelectorAll(".js-sub_menu");
    const showDn = document.querySelectorAll(".sub-menu");
    const iconDn = document.querySelectorAll(".uil-angle-down");

    // Window scroll event listener (Correctly handled)
    window.addEventListener('scroll', () => {
        if (header && window.scrollY > 20) {
            header.classList.add("f-nav");
        } else if (header) {
            header.classList.remove("f-nav");
        }
    });

    // Light & Dark mode toggle logic with localStorage
    const checkBgMode = (mode) => {
        if (mode && navLogo && footerLogo) {
            switch (mode) {
                case "light-mode":
                    navLogo.src = `${domain}/images/logo3.png`;
                    footerLogo.src = `${domain}/images/logo3.png`;
                    break;
                case "dark-mode":
                    body?.classList.add("dark");
                    navLogo.src = `${domain}/images/logo3.png`;
                    footerLogo.src = `${domain}/images/logo3.png`;
                    break;
                default:
                    return;
            }
        }
    };

    const toggleMode = () => {
        modeToggle?.classList.toggle("active");
        body?.classList.toggle("dark");
        localStorage.setItem("mode", body?.classList.contains("dark") ? "dark-mode" : "light-mode");
    };

    if (modeToggle) {
        modeToggle.addEventListener("click", toggleMode);
    }

    const storedMode = localStorage.getItem("mode");
    checkBgMode(storedMode);

    if (searchToggle) {
        searchToggle.addEventListener("click", () => {
            searchToggle.classList.toggle("active");
        });
    }

    if (checkOut) {
        checkOut.onclick = () => {
            location.href = `${domain}/cart.html`;
        };
    }

    if (navOpen) {
        navOpen.addEventListener("click", () => {
            nav?.classList.toggle("active");
        });
    }

    function handleClick(event) {
        const target = event.target;
        const className = "active";
        const iconClass = "opened";

        showDn.forEach(elem => elem?.classList.toggle(className, target.parentNode?.contains(elem)));
        iconDn.forEach(elem => elem?.classList.toggle(iconClass, target.parentNode?.contains(elem)));
    }

    dropDown.forEach(elem => elem.addEventListener("click", handleClick));

    // Back to top functionality
    const showOnPx = 100;
    const scrollContainer = () => document.documentElement || document.body;
    const goToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    document.addEventListener("scroll", () => {
        const scrolledPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
        pageProgressBar?.style.width = `${scrolledPercentage}%`;
        backToTopButton?.classList.toggle("hidden", scrollContainer().scrollTop <= showOnPx);
    });

    if (backToTopButton) {
        backToTopButton.addEventListener("click", goToTop);
    }

    if (year) {
        year.innerText = new Date().getFullYear();
    }
});
