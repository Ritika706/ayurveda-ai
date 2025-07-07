let buttons = document.querySelectorAll(".main-buttons button");
let solbtn=document.querySelector(".get-solution");
let text=document.querySelector("textarea");

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const currentBgColor = getComputedStyle(btn).backgroundColor;
    const currentColor = getComputedStyle(btn).color;

    if (currentBgColor === "rgb(248, 121, 48)" && currentColor === "rgb(255, 255, 255)") {
      btn.style.backgroundColor = "";
      btn.style.color = "";
    } else {
      btn.style.backgroundColor = "rgb(248, 121, 48)";
      btn.style.color = "white";
    }
  });
});


text.addEventListener('input',()=>{
  if(text.value.trim()!==""){
    solbtn.style.opacity="1";
    text.style.border=`1px solid orange`;
  }else{
    solbtn.style.opacity="0.5";
    text.style.border=`1px solid rgb(196 209 196)`;
  }
});
