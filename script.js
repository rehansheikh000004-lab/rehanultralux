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

/* THEME TOGGLE */

const toggle =
  document.getElementById("themeToggle");

if (toggle) {

  toggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
      document.body.classList.contains("light-mode")
    ) {

      toggle.innerHTML = "☾";

    } else {

      toggle.innerHTML = "☀";

    }

  });

}

/* =========================
   TIMELINE PARALLAX
========================= */

const timelineImages =
  document.querySelectorAll(
    ".timeline-right img"
  );

window.addEventListener("scroll", () => {

  const scrollY =
    window.scrollY;

  timelineImages.forEach((img, index) => {

    const speed =
      (index + 1) * 0.03;

    img.style.transform =
      `translateY(${scrollY * speed}px)`;

  });

});
