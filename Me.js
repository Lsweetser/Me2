function toggleTheme() {
    const body = document.body;
    const header = document.querySelector('header');
    const textElements = document.querySelectorAll('h1, h3, p, li, a');

    // Toggle dark mode classes
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    textElements.forEach(element => {
        element.classList.toggle('dark-mode');
    });

    // Save theme preference
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

function initApplication() {
    // Apply saved theme on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelectorAll('h1, h3, p, li, a').forEach(element => {
            element.classList.add('dark-mode');
        });
    }
}

