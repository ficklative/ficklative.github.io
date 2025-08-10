// Add fade-out keyframe and class
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
}
.fade-out {
    animation: fadeOut 0.5s ease-out forwards;
}
`;
document.head.appendChild(style);

const buttons = document.getElementById('buttons');
const subText = document.getElementById('sub-text');

const glassBox = document.getElementById('glass-box');
const originalGlassBoxContent = glassBox.innerHTML;
const heroText = document.getElementById('hero-text');
const btnportfolio = document.getElementById('btn-portfolio');
const btnresume = document.getElementById('btn-resume');
let highlightsVisible = false;

// Helper to restore original view when toggling off highlights
function restoreOriginalView() {
glassBox.innerHTML = originalGlassBoxContent;
if (heroText) heroText.style.display = 'block';
if (subText) subText.style.display = 'block';
// Show portfolio and resume buttons again
if (btnportfolio) btnportfolio.style.display = 'inline-block';
if (btnresume) btnresume.style.display = 'inline-block';
highlightsVisible = false;
}

// HOME — Reset the page
document.getElementById('link-home').addEventListener('click', () => {
location.reload();
});

// ABOUT — Fade out buttons, change subtext
document.getElementById('link-about').addEventListener('click', () => {
if (highlightsVisible) {
    restoreOriginalView();
}

// Fade out buttons
if (buttons) {
    buttons.classList.remove('fade-in');
    buttons.classList.add('fade-out');
    setTimeout(() => { buttons.style.display = 'none'; }, 500);
}

// Fade out then replace subtext
if (subText) {
    subText.classList.remove('fade-in');
    subText.classList.add('fade-out');
    setTimeout(() => {
    subText.innerHTML = `
        <strong>Welcome to the website!</strong><br>
        Rosalynn Alejandro is a web and UI/UX designer<br>
        who has helped business unify their voice,<br>
        with their brand, into visuals that speak<br>
        louder than words
    `;
    subText.classList.remove('fade-out');
    subText.classList.add('fade-in');
    }, 500);
}
});

// CONTACT — Replace subtext with email and linkedin
document.getElementById('link-contact').addEventListener('click', () => {
if (highlightsVisible) {
    restoreOriginalView();
}

if (subText) {
    subText.classList.remove('fade-in');
    subText.classList.add('fade-out');
    setTimeout(() => {
    subText.innerHTML = `
        <a href="mailto:ficklative@gmail.com" style="text-decoration: none;">
        ficklative@gmail.com
        </a><br>
        <a href="https://www.linkedin.com/in/rosalynn-alejandro-09609b286" style="text-decoration: none;" target="_blank">
        Linkedin Profile
        </a>
    `;
    subText.classList.remove('fade-out');
    subText.classList.add('fade-in');
    }, 500);
}
});

// HIGHLIGHTS — toggle scrollable images in #glass-box and hide/show other content
document.getElementById('link-highlights').addEventListener('click', () => {
if (!highlightsVisible) {
    if (heroText) heroText.style.display = 'none';
    if (subText) subText.style.display = 'none';
    // Hide only portfolio and resume buttons, keep buttons container visible
    if (btnportfolio) btnportfolio.style.display = 'none';
    if (btnresume) btnresume.style.display = 'none';

    glassBox.innerHTML = `
    <div class="highlights-scroll" data-simplebar style="margin-top: 8px; max-height:90%; height:90%; overflow-y:auto; padding:1rem; display:flex; flex-direction:column; gap:1rem; align-items:center; box-sizing:border-box;">
        <img src="https://ficklative.github.io/images/umers_highlight_1.png" alt="Highlight 1" style="width:90%; max-width:700px; border-radius:8px;">
        <img src="https://ficklative.github.io/images/umers_highlight_2.png" alt="Highlight 2" style="width:90%; max-width:700px; border-radius:8px;">
        <img src="https://ficklative.github.io/images/umers_highlight_3.png" alt="Highlight 3" style="width:90%; max-width:700px; border-radius:8px;">
    </div>
    `;

    if (window.SimpleBar) {
    new SimpleBar(glassBox.querySelector('[data-simplebar]'), { autoHide: false });
    }

    highlightsVisible = true;
} else {
    restoreOriginalView();
}
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) { // Bootstrap's md breakpoint
    window.location.href = "/mobile.html"; 
  }
});