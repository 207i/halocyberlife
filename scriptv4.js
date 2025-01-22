document.addEventListener("DOMContentLoaded", function () {
    const dropDown = document.querySelectorAll(".js-sub_menu");
    const backToTopButton = document.querySelector(".back-to-top");
    const menu = document.querySelector(".js-menu"); // Select the menu element
    const menuToggle = document.getElementById("menu__toggle"); // Select the menu toggle
    const menuBtn = document.querySelector(".menu__btn");
    const searchToggle = document.querySelector(".searchToggle");
    const searchBox = document.querySelector(".searchBox");
    const cancelBtn = document.querySelector(".cancel");
    const searchBtn = document.querySelector(".search");
    const body = document.body;
    const darkLight = document.querySelector(".dark-light");
    const yearSpan = document.getElementById("year");
    const progress = document.querySelector('.progress');
    const allLinks = document.querySelectorAll('a');
    const ulMenu = document.querySelector('.ul-menu');
    const subMenu = document.querySelectorAll('.sub-menu');
    const cartCheckout = document.querySelector('.cart-checkout');
    const proImg = document.querySelector(".pro-img");
    const imgCol = document.querySelectorAll(".img-sm");
    const welcome = document.querySelector('.welcome');
    const welcomeAlert = document.querySelector('.welcome-alert');

    // Set Current Year
    if (yearSpan) { // Check if the element exists
        yearSpan.textContent = new Date().getFullYear();
    }


    // Progress Bar
    window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        let clientHeight = document.documentElement.clientHeight;
        let progressValue = (scrollTop / (scrollHeight - clientHeight)) * 100;
        progress.style.width = `${progressValue}%`;
    });

    // Dark & Light Mode
    if (darkLight) { // Check if the element exists
        darkLight.addEventListener("click", () => {
            body.classList.toggle("dark");
            if (body.classList.contains("dark")) {
                localStorage.setItem("mode", "dark");
            } else {
                localStorage.setItem("mode", "light");
            }
        });
    }

    // Check if mode is in local storage
    if (localStorage.getItem("mode") == "dark") {
        body.classList.add("dark");
    }

    // Search Box
    if (searchToggle) { // Check if the element exists
        searchToggle.addEventListener('click', () => {
            searchBox.classList.toggle("active");
        });
    }

    if (cancelBtn) { // Check if the element exists
        cancelBtn.addEventListener('click', () => {
            searchBox.classList.remove("active");
        });
    }

    if (searchBtn) { // Check if the element exists
        searchBtn.addEventListener('click', () => {
            searchBox.classList.add("active");
        });
    }

    // Mobile Menu
    if (menuToggle && menuBtn && menu) { // Check if the elements exist
        menuToggle.addEventListener('change', () => {
            if (menuToggle.checked) {
                menuBtn.classList.add('open');
                menu.classList.add('open');
                body.style.overflow = 'hidden';
            } else {
                menuBtn.classList.remove('open');
                menu.classList.remove('open');
                body.style.overflow = 'auto';
            }
        });

        // Close menu on link click (for mobile)
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768 && menuToggle.checked) { // Close only on mobile and if menu is open
                    menuToggle.checked = false;
                    menuBtn.classList.remove('open');
                    menu.classList.remove('open');
                    body.style.overflow = 'auto';
                }
            });
        });
    }

    // Dropdown Menu
    if (dropDown && ulMenu && subMenu) { // Check if elements exist
        dropDown.forEach(elem => {
            elem.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                const parentLi = elem.closest('li');
                if (parentLi) {
                    parentLi.classList.toggle('active');
                }
            });
        });
    }

    // Back to Top Button
    backToTopButton?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    //Image change on product page
    if (imgCol && proImg) {
        imgCol.forEach((img) => {
            img.onclick = () => {
                proImg.src = img.src;
            }
        });
    }

    if (welcome && welcomeAlert) {
        welcome.addEventListener('click', () => {
            welcomeAlert.style.display = 'none';
        })
    }
});

// document.addEventListener('DOMContentLoaded', () => {
//     const domain = ".";

//     const getElement = (selector) => {
//         const element = document.querySelector(selector);
//         if (!element) {
//             console.error(`Element with selector "${selector}" not found in the DOM.`);
//             return {
//                 classList: { add: () => { }, remove: () => { }, toggle: () => { } },
//                 style: {},
//                 src: "",
//                 onclick: () => {}
//             };
//         }
//         return element;
//     };

//     const body = getElement("body");
//     const header = getElement(".header");
//     const headerMain = getElement(".header--main");
//     const nav = getElement("nav.menu");
//     const modeToggle = getElement(".dark-light");
//     const searchToggle = getElement(".searchToggle");
//     const navOpen = getElement(".open-nav");
//     // const navLogo = getElement(".nav-logo");
//     const footerLogo = getElement(".footer-logo");
//     const checkOut = getElement(".shopping-cart");
//     const backToTopButton = getElement(".back-to-top");
//     const pageProgressBar = getElement(".progress");
//     const dropDown = document.querySelectorAll(".js-sub_menu");
//     const showDn = document.querySelectorAll(".sub-menu");
//     const iconDn = document.querySelectorAll(".uil-angle-down");
//     const yearElement = getElement("#year");

//     if (yearElement) {
//         yearElement.textContent = new Date().getFullYear();
//     }

//     window.addEventListener('scroll', () => {
//         if (header && window.scrollY > 20) {
//             header.classList.add("f-nav");
//         } else if (header) {
//             header.classList.remove("f-nav");
//         }

//         // Corrected cross-browser scroll percentage calculation
//         const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//         const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight || 0;
//         const clientHeight = document.documentElement.clientHeight || window.innerHeight || 0;
//         const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

//         pageProgressBar.style.width = `${scrolledPercentage}%`;
//         backToTopButton.classList.toggle("hidden", window.scrollY <= 100);
//     });

//     // ... other code

// const checkBgMode = (mode) => {
//     if (mode) {
//         switch (mode) {
//             case "light-mode":
//                 body?.classList.remove("dark");
//                 // if (navLogo) navLogo.src = "images/Memorable design 2.png"; // Correct path
//                 if (footerLogo) footerLogo.src = "images/Memorable design 2.png"; // Correct path
//                 break;
//             case "dark-mode":
//                 body?.classList.add("dark");
//                 // if (navLogo) navLogo.src = "images/Memorable design 2.png"; // Correct path
//                 if (footerLogo) footerLogo.src = "images/Memorable design 2.png"; // Correct path
//                 break;
//             // ...
//         }
//     }
// };

// // ... other code
//     // const checkBgMode = (mode) => {
//     //     if (mode) {
//     //         switch (mode) {
//     //             case "light-mode":
//     //                 body?.classList.remove("dark"); // Ensure dark class is removed
//     //                 if (navLogo) navLogo.src = `${domain}images/Memorable design 2.png`;
//     //                 if (footerLogo) footerLogo.src = `${domain}images/Memorable design 2.png`;
//     //                 break;
//     //             case "dark-mode":
//     //                 body?.classList.add("dark");
//     //                 if (navLogo) navLogo.src = `${domain}images/Memorable design 2.png`;
//     //                 if (footerLogo) footerLogo.src = `${domain}images/Memorable design 2.png`;
//     //                 break;
//     //             default:
//     //                 break;
//     //         }
//     //     }
//     // };

//     const toggleMode = () => {
//         modeToggle?.classList.toggle("active");
//         body?.classList.toggle("dark");
//         localStorage.setItem("mode", body?.classList.contains("dark") ? "dark-mode" : "light-mode");
//     };

//     modeToggle?.addEventListener("click", toggleMode);

//     const storedMode = localStorage.getItem("mode");
//     checkBgMode(storedMode);

//     searchToggle?.addEventListener("click", () => {
//         searchToggle.classList.toggle("active");
//     });

//     checkOut?.addEventListener("click", () => {
//         window.location.href = `${domain}/cart.html`;
//     });

//     navOpen?.addEventListener("click", () => {
//         nav?.classList.toggle("active");
//     });

//     function handleClick(event) {
//         const target = event.target;
//         const className = "active";
//         const iconClass = "opened";

//         showDn.forEach(elem => {
//             if (elem && target.parentNode) {
//                 elem.classList.toggle(className, target.parentNode.contains(elem));
//             }
//         });

//         iconDn.forEach(elem => {
//             if (elem && target.parentNode) {
//                 elem.classList.toggle(iconClass, target.parentNode.contains(elem));
//             }
//         });
//     }

//     dropDown.forEach(elem => elem.addEventListener("click", handleClick));

//     backToTopButton?.addEventListener("click", () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     });
// });

// /* Basic menu styles */
// .menu ul {
//     list-style: none; /* Remove bullet points */
//     margin: 0;
//     padding: 0;
//     display: flex; /* Make the main menu horizontal */
// }

// .menu li {
//     position: relative; /* Needed for dropdown positioning */
// }

// .menu a {
//     display: block; /* Make links fill the list item space */
//     padding: 10px 15px; /* Add padding to links */
//     text-decoration: none; /* Remove underlines */
//     color: #333; /* Set link color */
// }

// /* Submenu styles */
// .sub-menu {
//     display: none; /* Hide submenu by default */
//     position: absolute; /* Position submenu relative to parent li */
//     top: 100%; /* Position below the parent link */
//     left: 0;
//     background-color: #fff; /* Submenu background color */
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
//     min-width: 150px; /* Minimum width for the submenu */
//     z-index: 1000; /* Ensure submenu is on top */
//     border-radius: 5px;
//     padding: 10px 0;
// }

// .sub-menu li {
//     display: block; /* Submenu items are vertical */
//     border-bottom: 1px solid #eee;
// }
// .sub-menu li:last-child {
//     border-bottom: none;
// }

// .sub-menu a {
//     padding: 8px 15px;
//     color: #555;
// }

// /* Show submenu on hover */
// .menu li:hover .sub-menu {
//     display: block;
// }
// .menu li:hover > a {
//     background-color: #f0f0f0; /* Highlight parent link on hover */
// }
// .sub-menu a:hover {
//     background-color: #f0f0f0;
// }
// /* Style for active link */
// .menu .active-n,
// .menu .active-n:hover {
//     background-color: #007bff; /* Example active color */
//     color: white;
// }


// document.addEventListener('DOMContentLoaded', () => {
//     // Let's keep the domain variable for future flexibility
//     const domain = ".";

//     // Function to get elements with null checks
//     const getElement = (selector) => {
//         const element = document.querySelector(selector);
//         if (!element) {
//             console.error(`Element with selector "${selector}" not found in the DOM.`);
//             // Return a dummy object to prevent errors later
//             return {
//                 classList: { add: () => { }, remove: () => { }, toggle: () => { } },
//                 style: {},
//                 src: "" // Add a dummy src property
//             };
//         }
//         return element;
//     };

//     const body = getElement("body");
//     const loader = getElement(".loader");
//     const header = getElement(".header");
//     const headerMain = getElement(".header--main");
//     const nav = getElement("nav.menu");
//     const modeToggle = getElement(".dark-light");
//     const searchToggle = getElement(".searchToggle");
//     const navOpen = getElement(".open-nav");
//     const navLogo = getElement(".nav-logo");
//     const footerLogo = getElement(".footer-logo");
//     const checkOut = getElement(".shopping-cart");
//     const backToTopButton = getElement(".back-to-top");
//     const pageProgressBar = getElement(".progress");
//     const dropDown = document.querySelectorAll(".js-sub_menu");
//     const showDn = document.querySelectorAll(".sub-menu");
//     const iconDn = document.querySelectorAll(".uil-angle-down");

//     // Fix: Correctly handle the year element
//     const yearElement = document.getElementById("year");
//     if (yearElement) {
//         yearElement.innerText = new Date().getFullYear();
//     }


//     // Window scroll event listener
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
//                     break;
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
//         const target = event.target;
//         const className = "active";
//         const iconClass = "opened";

//         showDn.forEach(elem => {
//             if (elem && target.parentNode) {
//                 elem.classList.toggle(className, target.parentNode.contains(elem));
//             }
//         });

//         iconDn.forEach(elem => {
//             if (elem && target.parentNode) {
//                 elem.classList.toggle(iconClass, target.parentNode.contains(elem));
//             }
//         });
//     }

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

// });





// // Let's keep the domain variable for future flexibility
// let domain = ".";

// document.addEventListener('DOMContentLoaded', () => {
//     // Utility function to get elements with null checks and dummy objects
//     const getElement = (selector) => {
//         const element = document.querySelector(selector);
//         if (!element) {
//             console.error(`Element with selector "${selector}" not found in the DOM.`);
//             // Return a dummy object to prevent further errors
//             return { classList: { add: () => { }, remove: () => { }, toggle: () => { } },
//                      style: {} // Add a dummy style object
//                    };
//         }
//         return element;
//     };

//     const body = getElement("body");
//     let header = getElement(".header"); // Declare header inside DOMContentLoaded
//     const nav = getElement("nav.menu");
//     const modeToggle = getElement(".dark-light");
//     const searchToggle = getElement(".searchToggle");
//     const navOpen = getElement(".open-nav");
//     const navLogo = getElement(".nav-logo");
//     const footerLogo = getElement(".footer-logo");
//     const year = getElement("#year");
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
//         if (mode && navLogo && footerLogo) {
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
//                     return;
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
//         const target = event.target;
//         const className = "active";
//         const iconClass = "opened";

//         showDn.forEach(elem => elem?.classList.toggle(className, target.parentNode?.contains(elem)));
//         iconDn.forEach(elem => elem?.classList.toggle(iconClass, target.parentNode?.contains(elem)));
//     }

//     dropDown.forEach(elem => elem.addEventListener("click", handleClick));

//     // Back to top functionality
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
