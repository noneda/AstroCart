function typeWriter(element, text, speed, callback) {
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML =
        text.slice(0, i + 1) + "<span class='cursor'>|</span>";

      // Hace que el cursor desaparezca por un momento después de escribir
      setTimeout(() => {
        document.querySelector(".cursor").style.opacity = "0";
        setTimeout(() => {
          document.querySelector(".cursor").style.opacity = "1";
          i++;
          typing();
        }, 100); // Hace que reaparezca antes de la siguiente letra
      }, 50);
    } else {
      element.innerHTML = text; // Elimina el cursor al terminar
      if (callback) setTimeout(callback, 500);
    }
  }

  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.getElementById("heading1");
  const h2 = document.getElementById("heading2");

  typeWriter(h1, "No sé bien cómo empezar esto...", 100, () => {
    typeWriter(h2, "Pero quiero decirte todo lo que llevo dentro...", 100);
  });
});
