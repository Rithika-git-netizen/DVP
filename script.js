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
const closeProgramModal = document.getElementById('close-program-modal');

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
const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("about-btn");
const closeAboutModal = document.getElementsByClassName("close-btn")[0];

aboutBtn.addEventListener("click", function () {
  aboutModal.style.display = "block";
});

closeAboutModal.addEventListener("click", function () {
  aboutModal.style.display = "none";
});

// Close Modal when Clicking Outside
window.addEventListener("click", function (event) {
  if (event.target === aboutModal) {
    aboutModal.style.display = "none";
  }
  if (event.target === programModal) {
    programModal.style.display = "none";
  }
});
