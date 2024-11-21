//funcionalidad del Menú
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.icono-nav button');
    const navbar = document.getElementById('navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('mostrar');
    });

    // Opcional: Cerrar menú al hacer clic fuera o en un enlace
    document.addEventListener('click', (event) => {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnMenuIcon = menuIcon.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnMenuIcon) {
            navbar.classList.remove('mostrar');
        }
    });
});
// Función para manejar el cambio de tema
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Verificar si hay un tema guardado en localStorage
    const currentTheme = localStorage.getItem('theme') || 
                        (prefersDarkScheme.matches ? 'dark' : 'light');
    
    document.documentElement.classList.toggle('dark-mode', currentTheme === 'dark');
    updateIcon(currentTheme);

    // Agregar clase de transición después de cargar la página
    setTimeout(() => {
        document.body.classList.add('theme-transition');
    }, 100);

    // Manejar el clic en el botón de tema
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';

        // Actualizar el tema
        document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    // Función para actualizar el icono
    function updateIcon(theme) {
        themeIcon.classList.toggle('fa-sun', theme === 'light');
        themeIcon.classList.toggle('fa-moon', theme === 'dark');
    }

    // Función para manejar cambios en la preferencia del sistema
    function handleColorSchemeChange(e) {
        const theme = e.matches ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark-mode', theme === 'dark');
        localStorage.setItem('theme', theme);
        updateIcon(theme);
    }
});

function myFunction() {
var x = document.getElementById("icono-nav");
if (x.className === "icono-nav") {
    x.className += " responsive";
} else {
    x.className = "icono-nav";
}
}
