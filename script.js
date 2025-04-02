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
document.addEventListener("DOMContentLoaded", function () {
    const aboutModal = document.getElementById("aboutModal");
    const aboutBtn = document.querySelector(".about-btn");
    const closeAboutModal = document.querySelector(".close-btn");
    
    // Function to open modal
    function openModal() {
        aboutModal.style.display = "block";
    }
    
    // Function to close modal
    function closeModal() {
        aboutModal.style.display = "none";
    }
    
    // Event listeners
    aboutBtn.addEventListener("click", openModal);
    closeAboutModal.addEventListener("click", closeModal);
    
    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === aboutModal) {
            closeModal();
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
// About Us Modal Functionality
const aboutModal = document.getElementById("aboutModal");
const aboutBtn = document.getElementById("about-btn");
const closeAboutModal = document.querySelector(".close-btn");

// Open the modal when the button is clicked
aboutBtn.addEventListener("click", function () {
    aboutModal.style.display = "block";
});

// Close the modal when the close button (×) is clicked
closeAboutModal.addEventListener("click", function () {
    aboutModal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === aboutModal) {
        aboutModal.style.display = "none";
    }
});
