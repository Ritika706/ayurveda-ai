document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const beginBtn = document.getElementById("beginBtn");
  nameInput.addEventListener("input", () => {
    const hasName = nameInput.value.trim() !== "";
    beginBtn.disabled = !hasName;
    beginBtn.style.opacity = hasName ? "1" : "0.5";
    beginBtn.style.cursor = hasName ? "pointer" : "default";
  });
  beginBtn.addEventListener("click", () => {
    if (nameInput.value.trim() !== "") {
      localStorage.setItem("username", nameInput.value.trim());

      window.location.href = "quiz ui.html";
    }
  });
});
