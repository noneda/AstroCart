function typeWriter(element, text, speed, callback) {
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML =
        text.slice(0, i + 1) + "<span class='cursor'>|</span>";

      setTimeout(() => {
        document.querySelector(".cursor").style.opacity = "0";
        setTimeout(() => {
          document.querySelector(".cursor").style.opacity = "1";
          i++;
          typing();
        }, 1);
      }, 5);
    } else {
      element.innerHTML = text;
      if (callback) setTimeout(callback, 500);
    }
  }

  typing();
}

document.addEventListener("DOMContentLoaded", () => {
  const Timer = 100;
}
