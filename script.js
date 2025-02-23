document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebar = document.querySelector('.sidebar');
    const backdrop = document.querySelector('.sidebar-backdrop');
    const themeToggler = document.getElementById('theme-toggler');

    // Function to toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('show');
        backdrop.classList.toggle('show');
        body.classList.toggle('sidebar-open');
    }

    // Add event listeners only for small and medium devices
    if (window.innerWidth < 992) {
        sidebarToggle.addEventListener('click', toggleSidebar);
        sidebarClose.addEventListener('click', toggleSidebar);
        backdrop.addEventListener('click', toggleSidebar);
    }

    // Close sidebar on window resize if screen becomes large
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 992) {
            sidebar.classList.remove('show');
            backdrop.classList.remove('show');
            body.classList.remove('sidebar-open');
        } else {
            // Re-add event listeners for small and medium devices
            sidebarToggle.addEventListener('click', toggleSidebar);
            sidebarClose.addEventListener('click', toggleSidebar);
            backdrop.addEventListener('click', toggleSidebar);
        }
    });

    // Toggle theme
    themeToggler.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const icon = themeToggler.querySelector('img');
        // If dark mode is enabled, show sun icon to indicate switching back.
        icon.src = document.body.classList.contains('dark-mode')
            ? './images/sun.png'
            : './images/moon.png';
    });
});