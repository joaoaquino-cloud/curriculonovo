const menuToggle = document.querySelector('.menu-toggle');
const navigationList = document.querySelector('#menu-principal');
const navigationLinks = navigationList?.querySelectorAll('a');

function setMenuOpen(isOpen) {
    menuToggle?.setAttribute('aria-expanded', String(isOpen));
    navigationList?.classList.toggle('is-open', isOpen);
}

menuToggle?.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
});

navigationLinks?.forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
});

const currentYear = document.querySelector('#ano-atual');
if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}