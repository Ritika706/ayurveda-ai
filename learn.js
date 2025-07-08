function page3button() {
  const ele1 = document.getElementById('page3button1');
  const ele2 = document.getElementById('page3button2');
  const ele3 = document.getElementById('page3button3');
  const ele4 = document.getElementById('page3button4');

  const agni = document.querySelector(".agni");
  const ama = document.querySelector(".ama");
  const ojas = document.querySelector(".ojas");
  const daily = document.querySelector(".daily");

  ele1.addEventListener('click', () => {
    agni.style.display = 'block';
    
    ama.style.display = 'none';
    ojas.style.display = 'none';
    daily.style.display = 'none';
  });
  

  ele2.addEventListener('click', () => {
    agni.style.display = 'none';
    ama.style.display = 'block';
    ojas.style.display = 'none';
    daily.style.display = 'none';
  });

  ele3.addEventListener('click', () => {
    agni.style.display = 'none';
    ama.style.display = 'none';
    ojas.style.display = 'block';
    daily.style.display = 'none';
  });

  ele4.addEventListener('click', () => {
    agni.style.display = 'none';
    ama.style.display = 'none';
    ojas.style.display = 'none';
    daily.style.display = 'block';
  });


}

// ✅ Call it when DOM is ready
document.addEventListener("DOMContentLoaded", page3button);
page3button();


window.addEventListener("DOMContentLoaded", function () {
  showSection("page1"); // Show Introduction by default
});

function showSection(classNameToShow) {
  const sections = ["page1", "dosha", "page3", "page4"];
  sections.forEach(className => {
    const section = document.querySelector("." + className);
    if (section) {
      section.style.display = (className === classNameToShow) ? "flex" : "none";
    }
  });
}

// Button event listeners
document.getElementById("button1").addEventListener("click", function () {
  showSection("page1");
});

document.getElementById("button2").addEventListener("click", function () {
  showSection("dosha");
});

document.getElementById("button3").addEventListener("click", function () {
  showSection("page3");
});

document.getElementById("button4").addEventListener("click", function () {
  showSection("page4");
});

