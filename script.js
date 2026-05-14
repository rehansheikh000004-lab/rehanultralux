/* CURSOR */

const cursor =
  document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {

  cursor.style.left =
    e.clientX + "px";

  cursor.style.top =
    e.clientY + "px";

});

/* REVEAL */

const reveals =
  document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((el) => {

    const top =
      el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

      el.classList.add("active");

    }

  });

});
