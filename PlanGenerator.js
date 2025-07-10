let buttons = document.querySelectorAll(".plan-duration-buttons button");
let solbtn = document.querySelector(".get-solution");
let text = document.querySelector("textarea");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.style.backgroundColor = "";
      b.style.color = "";
    });

    btn.style.backgroundColor = "rgb(248, 121, 48)";
    btn.style.color = "white";
  });
});

text.addEventListener("input", () => {
  if (text.value.trim() !== "") {
    text.style.border = `1px solid orange`;
  } else {
    text.style.border = `1px solid rgb(196 209 196)`;
  }
});

const toggle = document.querySelector(".onoff");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");

  if (toggle.classList.contains("active")) {
    toggle.style.backgroundColor = 'rgb(248, 121, 48)';
  } else {
    toggle.style.backgroundColor = 'hsl(214.3 31.8% 91.4%)';
  }
});
