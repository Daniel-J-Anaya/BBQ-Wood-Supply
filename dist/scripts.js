"use strict";
// Fade-in on scroll (both directions)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
        else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.2 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
// Smooth scroll offset fix
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.currentTarget;
        const href = link.getAttribute("href");
        if (!href)
            return;
        const target = document.querySelector(href);
        if (target instanceof HTMLElement) {
            window.scrollTo({
                top: target.getBoundingClientRect().top + window.pageYOffset - 70,
                behavior: 'smooth'
            });
        }
        // Close mobile nav when link clicked
        closeMenuSmooth();
    });
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
// Open / close with smooth animation
menuToggle === null || menuToggle === void 0 ? void 0 : menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('show')) {
        closeMenuSmooth();
    }
    else {
        openMenuSmooth();
    }
});
function openMenuSmooth() {
    navLinks.classList.add('show');
    menuToggle.classList.add('active');
    const fullHeight = navLinks.scrollHeight + 'px';
    navLinks.style.maxHeight = fullHeight;
}
function closeMenuSmooth() {
    navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    setTimeout(() => {
        navLinks.style.maxHeight = '0';
    });
    navLinks.classList.remove('show');
    menuToggle.classList.remove('active');
}
// Navbar scroll background
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header === null || header === void 0 ? void 0 : header.classList.add('scrolled');
    }
    else {
        header === null || header === void 0 ? void 0 : header.classList.remove('scrolled');
    }
});
