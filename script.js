document.addEventListener('DOMContentLoaded', () => {
    // Let's keep the domain variable for future flexibility
    const domain = ".";

    // Function to get elements with null checks
    const getElement = (selector) => {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`Element with selector "${selector}" not found in the DOM.`);
            // Return a dummy object to prevent errors later
            return {
                classList: { add: () => { }, remove: () => { }, toggle: () => { } },
                style: {},
                src: "" // Add a dummy src property
            };
        }
        return element;
    };

    const body = getElement("body");
    const loader = getElement(".loader");
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

    // Fix: Correctly handle the year element
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.innerText = new Date().getFullYear();
    }


    // Window scroll event listener
    window.addEventListener('scroll', () => {
        if (header && window.scrollY > 20) {
            header.classList.add("f-nav");
        } else if (header) {
            header.classList.remove("f-nav");
        }
    });

    // Light & Dark mode toggle logic with localStorage
    const checkBgMode = (mode) => {
        if (mode) {
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
                    break;
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

});



// // Let's keep the domain variable for future flexibility
// let domain = ".";

// document.addEventListener('DOMContentLoaded', () => {

//     // Function to get elements with null checks and dummy objects
//     const getElement = (selector) => {
//         const element = document.querySelector(selector);
//         if (!element) {
//             console.error(`Element with selector "${selector}" not found in the DOM.`);
//             return {
//                 classList: { add: () => { }, remove: () => { }, toggle: () => { } },
//                 style: {}
//             };
//         }
//         return element;
//     };

//     const body = getElement("body");
//     const loader = getElement(".loader");
//     let header = getElement(".header"); // Important: let for re-assignment in scroll handler
//     const headerMain = getElement(".header--main");
//     const nav = getElement("nav.menu");
//     const modeToggle = getElement(".dark-light");
//     const searchToggle = getElement(".searchToggle");
//     const navOpen = getElement(".open-nav");
//     const navLogo = getElement(".nav-logo");
//     const footerLogo = getElement(".footer-logo");
//     const year = document.getElementById("year") ? document.getElementById("year") : { innerText: "" }; //Special case for ID
//     const checkOut = getElement(".shopping-cart");
//     const backToTopButton = getElement(".back-to-top");
//     const pageProgressBar = getElement(".progress");
//     const dropDown = document.querySelectorAll(".js-sub_menu");
//     const showDn = document.querySelectorAll(".sub-menu");
//     const iconDn = document.querySelectorAll(".uil-angle-down");

//     // Window scroll event listener (Correctly handled)
//     window.addEventListener('scroll', () => {
//         if (header && window.scrollY > 20) {
//             header.classList.add("f-nav");
//         } else if (header) {
//             header.classList.remove("f-nav");
//         }
//     });

//     // Light & Dark mode toggle logic with localStorage
//     const checkBgMode = (mode) => {
//         if (mode) {
//             switch (mode) {
//                 case "light-mode":
//                     navLogo.src = `${domain}/images/logo3.png`;
//                     footerLogo.src = `${domain}/images/logo3.png`;
//                     break;
//                 case "dark-mode":
//                     body?.classList.add("dark");
//                     navLogo.src = `${domain}/images/logo3.png`;
//                     footerLogo.src = `${domain}/images/logo3.png`;
//                     break;
//                 default:
//                     break; // No need to return here
//             }
//         }
//     };

//     const toggleMode = () => {
//         modeToggle?.classList.toggle("active");
//         body?.classList.toggle("dark");
//         localStorage.setItem("mode", body?.classList.contains("dark") ? "dark-mode" : "light-mode");
//     };

//     if (modeToggle) {
//         modeToggle.addEventListener("click", toggleMode);
//     }

//     const storedMode = localStorage.getItem("mode");
//     checkBgMode(storedMode);

//     if (searchToggle) {
//         searchToggle.addEventListener("click", () => {
//             searchToggle.classList.toggle("active");
//         });
//     }

//     if (checkOut) {
//         checkOut.onclick = () => {
//             location.href = `${domain}/cart.html`;
//         };
//     }

//     if (navOpen) {
//         navOpen.addEventListener("click", () => {
//             nav?.classList.toggle("active");
//         });
//     }

//     function handleClick(event) {
//     const target = event.target;
//     const className = "active";
//     const iconClass = "opened";

//     showDn.forEach(elem => {
//         if (elem && target.parentNode) { // Check if both elem and parent exist
//             elem.classList.toggle(className, target.parentNode.contains(elem));
//         }
//     });

//     iconDn.forEach(elem => {
//         if (elem && target.parentNode) { // Check if both elem and parent exist
//             elem.classList.toggle(iconClass, target.parentNode.contains(elem));
//         }
//     });
// }

//     dropDown.forEach(elem => elem.addEventListener("click", handleClick));

 
//     const showOnPx = 100;
//     const scrollContainer = () => document.documentElement || document.body;
//     const goToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     document.addEventListener("scroll", () => {
//         const scrolledPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
//         pageProgressBar?.style.width = `${scrolledPercentage}%`;
//         backToTopButton?.classList.toggle("hidden", scrollContainer().scrollTop <= showOnPx);
//     });

//     if (backToTopButton) {
//         backToTopButton.addEventListener("click", goToTop);
//     }

//     if (year) {
//         year.innerText = new Date().getFullYear();
//     }
// });





// // Let's keep the domain variable for future flexibility
// let domain = ".";

// // Select elements (with null checks) - Moved inside DOMContentLoaded
// let body, loader, header, headerMain, nav, modeToggle, searchToggle, navOpen, navLogo, footerLogo, year, checkOut, backToTopButton, pageProgressBar;

// document.addEventListener('DOMContentLoaded', () => {
//     body = document.querySelector("body");
//     loader = document.querySelector(".loader");
//     header = document.querySelector(".header");
//     headerMain = document.querySelector(".header--main");
//     nav = document.querySelector("nav.menu");
//     modeToggle = document.querySelector(".dark-light");
//     searchToggle = document.querySelector(".searchToggle");
//     navOpen = document.querySelector(".open-nav");
//     navLogo = document.querySelector(".nav-logo");
//     footerLogo = document.querySelector(".footer-logo");
//     year = document.getElementById("year");
//     checkOut = document.querySelector(".shopping-cart");
//     backToTopButton = document.querySelector(".back-to-top");
//     pageProgressBar = document.querySelector(".progress");
    
//      body = getElement("body");
//     loader = getElement(".loader");
//     header = getElement(".header");
    
//      const getElement = (selector) => {
//         const element = document.querySelector(selector);
//         if (!element) {
//             console.error(`Element with selector "${selector}" not found in the DOM.`);
//             return { classList: { add: () => { }, remove: () => { }, toggle: () => { } },
//                      style: {} // Add a dummy style object
//                    };
//         }
//         return element;
//     };

//   const checkBgMode = (mode) => {
//         const navLogo = getElement(".nav-logo"); // Get navLogo using getElement
//         const footerLogo = getElement(".footer-logo"); // Get footerLogo using getElement
//         // ... (rest of your code)
//     };

//     // Window scroll event listener for header class toggle (using getElement)
//     window.onscroll = () => {
//         const header = getElement(".header"); // Get header using getElement
//         if (header && window.scrollY > 20) {
//             header.classList.add("f-nav");
//         } else if (header) {
//             header.classList.remove("f-nav");
//         }
//     };

//     // ... (rest of your code)
// });
//     // Check if elements exist before adding listeners.
//     // if (!body || !header || !nav || !modeToggle || !searchToggle || !navOpen || !navLogo || !footerLogo || !year || !checkOut || !backToTopButton || !pageProgressBar) {
//     //     console.error("One or more essential elements not found in the DOM.");
//     //     return; // Stop script execution if elements are missing
//     // }

//     // Window scroll event listener for header class toggle
//     window.onscroll = () => {
//         if (window.scrollY > 20) {
//             header.classList.add("f-nav");
//         } else {
//             header.classList.remove("f-nav");
//         }
//     };

//     // Light & Dark mode toggle logic with localStorage
//     const checkBgMode = (mode) => {
//         if (mode) {
//             switch (mode) {
//                 case "light-mode":
//                     navLogo.src = `${domain}/images/logo3.png`;
//                     footerLogo.src = `${domain}/images/logo3.png`;
//                     break;
//                 case "dark-mode":
//                     body.classList.add("dark");
//                     navLogo.src = `${domain}/images/logo3.png`;
//                     footerLogo.src = `${domain}/images/logo3.png`;
//                     break;
//                 default:
//                     return;
//             }
//         }
//     };

//     const toggleMode = () => {
//         body.classList.toggle("dark");
//         modeToggle.classList.toggle("active");

//         localStorage.setItem("mode", body.classList.contains("dark") ? "dark-mode" : "light-mode");
//     };

//     // Event listener for mode toggle
//     modeToggle.addEventListener("click", toggleMode);

//     // Check local storage for existing mode
//     const storedMode = localStorage.getItem("mode");
//     checkBgMode(storedMode);


//     // Search toggle functionality
//     searchToggle.addEventListener("click", () => {
//         searchToggle.classList.toggle("active");
//     });

//     // Checkout button functionality
//     checkOut.onclick = () => {
//         location.href = `${domain}/cart.html`;
//     };

//     // Mobile navigation toggle
//     navOpen.addEventListener("click", () => {
//         nav.classList.toggle("active");
//     });

//     // Dropdown navigation
//     const dropDown = document.querySelectorAll(".js-sub_menu");
//     const showDn = document.querySelectorAll(".sub-menu");
//     const iconDn = document.querySelectorAll(".uil-angle-down");

//     function handleClick(event) {
//         const target = event.target;
//         // const className = "active";
//         // const iconClass = "opened";
//         const className = "active";
//         const iconClass = "opened";

//         showDn.forEach(elem => elem.classList.toggle(className, target.parentNode.contains(elem)));
//         iconDn.forEach(elem => elem.classList.toggle(iconClass, target.parentNode.contains(elem)));
//     }

//     dropDown.forEach(elem => elem.addEventListener("click", handleClick));

//     // Back to top functionality
//     const showOnPx = 100;
//     const scrollContainer = () => document.documentElement || document.body;
//     const goToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" }); // Use window.scrollTo
//     };

//     document.addEventListener("scroll", () => {
//         const scrolledPercentage = (scrollContainer().scrollTop / (scrollContainer().scrollHeight - scrollContainer().clientHeight)) * 100;
//         pageProgressBar.style.width = `${scrolledPercentage}%`;
//         backToTopButton.classList.toggle("hidden", scrollContainer().scrollTop <= showOnPx); // Use toggle with condition
//     });

//     backToTopButton.addEventListener("click", goToTop);

//     // Year
//     year.innerText = new Date().getFullYear();
// });
