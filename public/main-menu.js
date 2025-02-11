document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".main-menu");
    const menuItems = document.querySelectorAll(".main-menu li");

    // Toggle Menu Open/Close
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("open");
        menuToggle.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove("open");
            menuToggle.classList.remove("active");
        }
    });

    // Smooth dropdown animations
    menuItems.forEach(item => {
        if (item.querySelector("ul")) {
            item.classList.add("has-submenu");
            item.addEventListener("click", function (e) {
                if (window.innerWidth <= 768) {
                    e.stopPropagation();
                    this.classList.toggle("submenu-open");
                }
            });
        }
    });

    // Smooth scrolling to sections
    document.querySelectorAll(".main-menu a").forEach(link => {
        link.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });
});
