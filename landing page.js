// Initialize Lucide icons
lucide.createIcons();

// Element selectors
const signinModal = document.getElementById("signinModal");
const signupModal = document.getElementById("signupModal");
const openSignInBtn = document.getElementById("openSignIn");
const openSignUpBtn = document.getElementById("openSignUp");
const closeSignInBtn = document.getElementById("closeSignInModal");
const closeSignUpBtn = document.getElementById("closeSignUpModal");

const mainContent = document.getElementById("main-content");

// Utility to apply blur effect
function applyBlur(apply) {
  if (mainContent) {
    mainContent.classList.toggle("blurred", apply);
  }
}

// Sign In Modal handlers
if (openSignInBtn && signinModal) {
  openSignInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signinModal.classList.add("active");
    applyBlur(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });
}

if (closeSignInBtn && signinModal) {
  closeSignInBtn.addEventListener("click", () => {
    signinModal.classList.remove("active");
    applyBlur(false);
    document.body.style.overflow = "auto";
  });
}

// Sign Up Modal handlers
if (openSignUpBtn && signupModal) {
  openSignUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.classList.add("active");
    applyBlur(true);
    document.body.style.overflow = "hidden";
  });
}

if (closeSignUpBtn && signupModal) {
  closeSignUpBtn.addEventListener("click", () => {
    signupModal.classList.remove("active");
    applyBlur(false);
    document.body.style.overflow = "auto";
  });
}

// Close modals when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === signinModal) {
    signinModal.classList.remove("active");
    applyBlur(false);
    document.body.style.overflow = "auto";
  }
  if (e.target === signupModal) {
    signupModal.classList.remove("active");
    applyBlur(false);
    document.body.style.overflow = "auto";
  }
});

// Switch between modals
function switchToSignUp() {
  if (signinModal) signinModal.classList.remove("active");
  if (signupModal) signupModal.classList.add("active");
  applyBlur(true);
  document.body.style.overflow = "hidden";
}

function switchToSignIn() {
  if (signupModal) signupModal.classList.remove("active");
  if (signinModal) signinModal.classList.add("active");
  applyBlur(true);
  document.body.style.overflow = "hidden";
}

// Password toggle function
function togglePassword(fieldId, iconId) {
  const passField = document.getElementById(fieldId);
  const eyeIcon = document.getElementById(iconId);

  if (passField && eyeIcon) {
    const isPassword = passField.type === "password";
    passField.type = isPassword ? "text" : "password";
    eyeIcon.setAttribute("data-lucide", isPassword ? "eye-off" : "eye");

    // Re-initialize the specific icon
    lucide.createIcons();
  }
}

// Password validation
const passwordField = document.getElementById("signUpPasswordField");
const passwordError = document.getElementById("passwordError");
const registerBtn = document.getElementById("registerBtn");
const agreeTerms = document.getElementById("agreeTerms");
const usernameField = document.getElementById("usernameField");
const emailField = document.getElementById("emailField");

function validatePassword(password) {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /\d/.test(password) &&
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  );
}

function checkFormValidity() {
  const passwordValue = passwordField?.value || "";
  const usernameValue = usernameField?.value || "";
  const emailValue = emailField?.value || "";
  const isPasswordValid = validatePassword(passwordValue);
  const isTermsChecked = agreeTerms?.checked || false;

  // Show/hide password error
  if (passwordValue && !isPasswordValid && passwordError) {
    passwordError.style.display = "block";
  } else if (passwordError) {
    passwordError.style.display = "none";
  }

  // Enable/disable register button
  if (registerBtn) {
    registerBtn.disabled = !(
      isPasswordValid &&
      isTermsChecked &&
      usernameValue &&
      emailValue
    );
  }
}

// Event listeners for validation
if (passwordField) {
  passwordField.addEventListener("input", checkFormValidity);
}
if (agreeTerms) {
  agreeTerms.addEventListener("change", checkFormValidity);
}
if (usernameField) {
  usernameField.addEventListener("input", checkFormValidity);
}
if (emailField) {
  emailField.addEventListener("input", checkFormValidity);
}

// Form submission handlers
const signinForm = document.getElementById("signinForm");
const signupForm = document.getElementById("signupForm");

if (signinForm) {
  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Sign in form submitted");
    // Add your sign-in logic here
    alert("Sign in functionality would be implemented here!");
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Sign up form submitted");
    // Add your sign-up logic here
    alert("Sign up functionality would be implemented here!");
  });
}

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (signinModal?.classList.contains("active")) {
      signinModal.classList.remove("active");
      applyBlur(false);
      document.body.style.overflow = "auto";
    }
    if (signupModal?.classList.contains("active")) {
      signupModal.classList.remove("active");
      applyBlur(false);
      document.body.style.overflow = "auto";
    }
  }
});

// Initialize icons after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});
