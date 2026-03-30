// Timeline scroll fade-in
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.timeline-item').forEach(item => {
    timelineObserver.observe(item);
});

// Language Toggle Logic
let currentLang = 'ko';
function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'ja' : 'ko';
    document.body.classList.toggle('lang-ja', currentLang === 'ja');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// Simple Scroll Animation Trigger
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });

        // Update active state
        document.querySelectorAll('nav a').forEach(a => {
            a.className = 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors';
        });
        this.className = 'text-sky-700 dark:text-sky-400 font-bold border-b-2 border-sky-700 dark:border-sky-400 pb-1';
    });
});
