document.addEventListener("DOMContentLoaded", function() {
  var header = document.getElementById("main-name");
  var hr = document.getElementById("main-hr");
  var carousel = document.getElementById("carousel-container");
  var copyCarousel = document.getElementById("word-carousel").cloneNode(true); 
  carousel.appendChild(copyCarousel);

  updateCurrentDate();

  window.addEventListener("scroll", function() {
      var scrollPosition = window.scrollY;

      // Ajuste a posição do rolar conforme necessário
      if (scrollPosition > 1000) {
          header.classList.add("scrolled");
          hr.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
          hr.classList.remove("scrolled");
      }

      if (scrollPosition > 1100) {
          carousel.classList.add("fixed")
      } else if (scrollPosition > 2200){
          carousel.classList.remove("fixed")
      }
  });
});

function getCurrentDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString('pt-BR', options);
}

function updateCurrentDate() {
  const currentDateElement = document.getElementById('current-date');
  if (currentDateElement) {
    const currentDateText = getCurrentDate().toUpperCase();
    currentDateElement.textContent = currentDateText;
  }
}

function abrirJanela(tecnologia, description) {
  var windowTec = document.createElement("div");
  windowTec.classList.add("win-description");
  windowTec.innerHTML = `
    <h2 class="tec-description">${tecnologia}</h2>
    <p class="description">${description}</p>
  `;
  document.querySelector(".stack-back-end").appendChild(windowTec);
}

document.querySelectorAll(".container").forEach((tecnologia) => {
  tecnologia.addEventListener("mouseenter", () => {
    var h3Text = tecnologia.querySelector("h3").textContent;
    var descriptionText = tecnologia.querySelector(".description").textContent;
    abrirJanela(h3Text, descriptionText);
  });

  tecnologia.addEventListener("mouseleave", function () {
    var windowTecRemove = document.querySelector(".win-description");
    windowTecRemove.remove();
  });
});
  