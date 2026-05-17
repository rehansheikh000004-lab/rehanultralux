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

/* =========================
   AI TERMINAL
========================= */

const terminalInput =
  document.getElementById("terminalInput");

const terminalOutput =
  document.getElementById("terminalOutput");

if (terminalInput) {

  terminalInput.addEventListener(
    "keydown",
    (e) => {

      if (e.key === "Enter") {

        const command =
          terminalInput.value
            .toLowerCase();

        addLine(
          `> ${command}`
        );

        runCommand(command);

        terminalInput.value = "";

      }

    }
  );

}

/* ADD LINE */

function addLine(text) {

  const line =
    document.createElement("p");

  line.textContent = text;

  terminalOutput.appendChild(line);

  terminalOutput.scrollTop =
    terminalOutput.scrollHeight;

}

/* COMMANDS */

function runCommand(command) {

  switch(command) {

    case "help":

      addLine(
        "Commands: vision, motion, atmosphere, enter, clear"
      );

      break;

    case "vision":

      addLine(
        "Luxury cinematic future initialized."
      );

      break;

    case "motion":

      addLine(
        "Experimental motion system activated."
      );

      break;

    case "atmosphere":

      addLine(
        "Dark art atmosphere detected."
      );

      break;

    case "enter":

      addLine(
        "Opening REHAN ecosystem..."
      );

      setTimeout(() => {

        window.location.href =
          "dashboard.html";

      }, 1200);

      break;

    case "clear":

      terminalOutput.innerHTML = "";

      break;

    default:

      addLine(
        "Unknown command."
      );

  }

}

/* =========================
   BLACK HOLE INTERACTION
========================= */

const blackhole =
  document.querySelector(".blackhole-container");

if (blackhole) {

  window.addEventListener("mousemove", (e) => {

    const rect =
      blackhole.getBoundingClientRect();

    const centerX =
      rect.left + rect.width / 2;

    const centerY =
      rect.top + rect.height / 2;

    const deltaX =
      e.clientX - centerX;

    const deltaY =
      e.clientY - centerY;

    const distance =
      Math.sqrt(
        deltaX * deltaX +
        deltaY * deltaY
      );

    if (distance < 300) {

      blackhole.style.transform =
        `
        translate(
          ${deltaX * 0.03}px,
          ${deltaY * 0.03}px
        )
        scale(1.03)
        `;

    } else {

      blackhole.style.transform =
        `
        translate(0,0)
        scale(1)
        `;

    }

  });

}
