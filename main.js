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
let currentLang = 'ja';
function toggleLanguage() {
    currentLang = currentLang === 'ja' ? 'ko' : 'ja';
    document.body.classList.toggle('lang-ko', currentLang === 'ko');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// Nav active class helpers
const ACTIVE_CLASS   = 'text-sky-700 dark:text-sky-400 font-bold border-b-2 border-sky-700 dark:border-sky-400 pb-1';
const INACTIVE_CLASS = 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors';

function setActiveNav(id) {
    document.querySelectorAll('nav a[href^="#"]').forEach(a => {
        a.className = a.getAttribute('href') === '#' + id ? ACTIVE_CLASS : INACTIVE_CLASS;
    });
}

// Smooth scroll on nav click
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
        setActiveNav(targetId);
    });
});

// Scroll spy — highlight nav based on visible section
const sections = document.querySelectorAll('section[id]');
const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveNav(entry.target.id);
        }
    });
}, {
    rootMargin: '-30% 0px -60% 0px',   // 섹션 상단 30% 지점에서 활성화
    threshold: 0
});

sections.forEach(section => spyObserver.observe(section));
