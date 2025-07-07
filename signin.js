const toggleLink = document.getElementById("toggle-link");
const formTitle = document.getElementById("form-title");
const extraField = document.getElementById("extra-field");
const form = document.getElementById("auth-form");

let isSignUp = false;

toggleLink.addEventListener("click", () => {
  isSignUp = !isSignUp;

  formTitle.textContent = isSignUp ? "Sign Up" : "Sign In";
  toggleLink.textContent = isSignUp ? "Sign In" : "Sign Up";
  document.querySelector(".toggle-text").innerHTML = isSignUp
    ? `Already have an account? <span id="toggle-link">Sign In</span>`
    : `Don’t have an account? <span id="toggle-link">Sign Up</span>`;

  extraField.style.display = isSignUp ? "block" : "none";

  // Re-attach event listener to new span
  document
    .getElementById("toggle-link")
    .addEventListener("click", arguments.callee);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(isSignUp ? "Signed up successfully!" : "Signed in successfully!");
});
