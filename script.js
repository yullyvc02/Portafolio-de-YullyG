
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a elementos del DOM
    const menuIcon = document.querySelector('.icono-nav button');
    const navbar = document.getElementById('navbar');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Funcionalidad del menú
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('mostrar');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);
        if (!isClickInsideNavbar && !isClickOnMenuIcon) {
            navbar.classList.remove('mostrar');
        }
    });

    // Funcionalidad del tema
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    document.documentElement.classList.toggle('dark-mode', currentTheme === 'dark');
    updateIcon(currentTheme);

    // Agregar clase de transición
    setTimeout(() => {
        document.body.classList.add('theme-transition');
    }, 100);

    // Event listener para el botón de tema
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.classList.contains('dark-mode') 
            ? 'light' 
            : 'dark';
        document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    // Event listener para cambios en la preferencia del sistema
    prefersDarkScheme.addListener(handleColorSchemeChange);

    // Funciones auxiliares
    function updateIcon(theme) {
        themeIcon.classList.toggle('fa-sun', theme === 'light');
        themeIcon.classList.toggle('fa-moon', theme === 'dark');
    }

    function handleColorSchemeChange(e) {
        const theme = e.matches ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
        updateIcon(theme);
    }
});
