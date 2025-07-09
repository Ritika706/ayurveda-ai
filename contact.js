// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Simulate form submission
  console.log("Form submitted:", data);

  // Show success message
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  // Reset form
  this.reset();

  // Hide success message after 5 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 5000);
});

// Smooth scrolling for navigation links
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = "0.2s";
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Add interactive hover effects
document.querySelectorAll(".contact-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-3px)";
    this.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
    this.style.boxShadow = "none";
  });
});

// Form validation with real-time feedback
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.trim() === "") {
      this.style.borderColor = "#ef4444";
    } else {
      this.style.borderColor = "#10b981";
    }
  });

  input.addEventListener("focus", function () {
    this.style.borderColor = "#ea580c";
  });
});
