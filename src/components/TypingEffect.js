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
  const h1 = document.getElementById("heading1");
  const h2 = document.getElementById("heading2");
  const h3 = document.getElementById("heading3");

  const p1 = document.getElementById("ParagraphFirst");
  const p2 = document.getElementById("ParagraphSecond");
  const p3 = document.getElementById("ParagraphThird");
  const p4 = document.getElementById("ParagraphFour");
  const p5 = document.getElementById("ParagraphFive");
  const p6 = document.getElementById("ParagraphSix");

  typeWriter(h1, "No sé bien cómo empezar esto...", Timer, () => {
    typeWriter(
      h2,
      "Pero quiero decirte todo lo que llevo dentro",
      Timer,
      () => {
        typeWriter(
          h3,
          "Ha pasado un tiempo desde que nos alejamos y, aunque he intentado seguir adelante, aún hay cosas dentro de mí que necesitan ser dichas",
          Timer,
          () => {
            typeWriter(
              p1,
              "Me gustaría decir que, cuando te vi por primera vez, nunca imaginé que llegarías a ser tan importante para mí. Mientras más te conocía, más sentía que había algo especial en ti, algo que me hacía querer estar cerca, compartir, aprender y descubrir contigo. Nunca olvidaré la sensación que tuve la primera vez que te vi en el salón mientras traían una torta. No sé cómo ni por qué, pero en ese momento brillaste ante mis ojos. Y aunque me moría de nervios sosteniendo el regalo que quería darte, en el fondo, solo pensaba en verte sonreír.",
              Timer,
              () => {
                typeWriter(
                  p2,
                  "Los momentos que pasé contigo fueron únicos y especiales para mí. No sé si alguna vez entendiste lo mucho que llegaste a significar en mi vida, pero quiero que sepas que cada instante a tu lado tuvo un valor enorme. ",
                  Timer,
                  () => {
                    typeWriter(
                      p3,
                      "Aún me cuesta asimilar la decisión que tomé. En mi mente, sigo preguntándome si podría haber hecho algo diferente, si existía otro camino para nosotros. Hay días en los que me descubro recordándote sin querer, deseando verte, saber cómo estás. Extraño los pequeños detalles, las preguntas 'bobas' que me hacías, el sonido de tu risa, la manera en que hablabas... ",
                      Timer,
                      () => {
                        typeWriter(
                          p4,
                          "La verdad es que sigo sintiendo cosas por ti, aunque trato de convencerme de que debo seguir adelante. Mi corazón y mi razón están en constante pelea, y no sé cuál tiene la respuesta correcta. Lo único que sé con certeza es que, a pesar de todo, aún hay una parte de mí que te extraña más de lo que quisiera admitir.",
                          Timer,
                          () => {
                            typeWriter(
                              p5,
                              "Hoy no te escribo para pedirte nada. Te escribo porque quiero encontrar paz.",
                              Timer,
                              () => {
                                typeWriter(
                                  p6,
                                  "Si alguna vez dudaste de mis sentimientos, quiero que sepas que cada palabra, cada mirada, cada abrazo que te di fueron sinceros. Todo lo que compartimos fue real para mí.",
                                  Timer,
                                  () => {}
                                );
                              }
                            );
                          }
                        );
                      }
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});
