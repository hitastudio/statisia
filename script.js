const hamburger = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

// 1. Fungsi Klik Hamburger (Buka/Tutup)
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active'); // Ubah ikon jadi X
    mobileMenu.classList.toggle('active'); // Munculkan menu
});

// 2. Fungsi Klik Link di Menu (Otomatis Tutup)
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// 3. Scroll Animation (Fade In)
window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.scroll-reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
    }
}
reveal();

