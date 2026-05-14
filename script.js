/* LOADER */

window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  setTimeout(() => {

    loader.classList.add("hidden");

  }, 2000);

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

/* CURSOR GLOW */

const glow =
  document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {

  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";

});

/* PARTICLES */

const particles =
  document.querySelector(".particles");

for (let i = 0; i < 60; i++) {

  const particle =
    document.createElement("span");

  particle.style.position = "absolute";

  particle.style.width =
    `${Math.random() * 4 + 2}px`;

  particle.style.height =
    particle.style.width;

  particle.style.background =
    "rgba(255,255,255,0.3)";

  particle.style.borderRadius = "50%";

  particle.style.left =
    `${Math.random() * 100}%`;

  particle.style.top =
    `${Math.random() * 100}%`;

  particle.style.animation =
    `float ${Math.random() * 10 + 5}s linear infinite`;

  particles.appendChild(particle);

}
