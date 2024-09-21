document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    const menuToggle = document.getElementById('menu-toggle');
    const sideNav = document.getElementById('side-nav');
    const closeNavBtn = document.getElementById('close-nav');

    const updateThemeIcon = () => {
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    };

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateThemeIcon();
    });

    document.querySelectorAll('nav a, .side-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    menuToggle.addEventListener('click', () => {
        sideNav.style.width = "250px";
    });

    closeNavBtn.addEventListener('click', () => {
        sideNav.style.width = "0";
    });

    window.closeNav = function() {
        sideNav.style.width = "0";
    }
});
