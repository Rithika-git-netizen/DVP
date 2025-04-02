// ========== Smooth Scroll for Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ========== Typing Animation for Hero Section ==========
const textElement = document.getElementById("typing-text");
const textArray = ["Your DVP Lab Guide", "Your IoT Lab Partner", "Your Digital Signal Expert"];
let index = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < textArray[index].length) {
    textElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      textElement.textContent = "";
      charIndex = 0;
      index = (index + 1) % textArray.length;
      typeEffect();
    }, 2000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ========== Sticky Header Effect ==========
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// ========== Back-to-Top Button ==========
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== Modal Pop-Ups for Programs ==========
const programItems = document.querySelectorAll('.program-item');
const programModal = document.getElementById('programModal');
const programModalText = document.getElementById('programModalText');
const closeProgramModal = document.querySelector('.close-program-modal');

programItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const programDetails = item.getAttribute('data-details');
    programModalText.innerHTML = programDetails;
    programModal.classList.add('active');
  });
});

closeProgramModal.addEventListener('click', () => {
  programModal.classList.remove('active');
});

// ========== About Us Modal ==========
const aboutUsModal = document.getElementById("aboutUsModal");
const aboutUsBtn = document.getElementById("aboutUsBtn");
const closeAboutUsModal = document.getElementsByClassName("close")[0];

aboutUsBtn.onclick = function () {
  aboutUsModal.style.display = "block";
};

closeAboutUsModal.onclick = function () {
  aboutUsModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == aboutUsModal) {
    aboutUsModal.style.display = "none";
  }
};

// ========== Scroll to About Section ==========
document.getElementById("aboutUsBtn").addEventListener("click", function () {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
