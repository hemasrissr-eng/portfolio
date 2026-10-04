document.addEventListener("DOMContentLoaded", () => {

  /* ================= ELEMENTS ================= */

  const menu = document.getElementById("menu");
  const nav = document.getElementById("navlinks");
  const links = document.querySelectorAll("#navlinks a");

  const sections = document.querySelectorAll(
    "main section[id]"
  );

  const year = document.getElementById("year");
  const top = document.getElementById("top");

  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");


  /* ================= FOOTER YEAR ================= */

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  /* ================= MOBILE MENU ================= */

  if (menu && nav) {

    menu.addEventListener("click", () => {

      const open = nav.classList.toggle("open");

      menu.setAttribute(
        "aria-label",
        open ? "Close menu" : "Open menu"
      );

    });

  }


  /* ================= NAVIGATION ================= */

  links.forEach((link) => {

    link.addEventListener("click", () => {

      links.forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");

      if (nav) {
        nav.classList.remove("open");
      }

    });

  });


  /* ================= ACTIVE NAV ON SCROLL ================= */

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            links.forEach((link) => {

              link.classList.toggle(
                "active",
                link.getAttribute("href") ===
                "#" + entry.target.id
              );

            });

          }

        });

      },
      {
        rootMargin: "-35% 0px -55% 0px"
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

  }


  /* ================= BACK TO TOP ================= */

  window.addEventListener("scroll", () => {

    if (top) {

      top.classList.toggle(
        "show",
        window.scrollY > 450
      );

    }

  });


  /* ================= CONTACT FORM ================= */

  if (form) {

    form.addEventListener("submit", (event) => {

      event.preventDefault();

      const name =
        document.getElementById("name")?.value || "";

      const email =
        document.getElementById("email")?.value || "";

      const subject =
        document.getElementById("subject")?.value ||
        "Portfolio Contact";

      const message =
        document.getElementById("message")?.value || "";


      const emailBody =
        "Name: " +
        name +
        "\nEmail: " +
        email +
        "\n\nMessage:\n" +
        message;


      const mailto =
        "mailto:hemasrissr@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(emailBody);


      if (note) {
        note.textContent =
          "Opening your email app...";
      }


      window.location.href = mailto;

    });

  }


  /* ================= SMOOTH INTERNAL LINKS ================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const targetId =
          link.getAttribute("href");

        if (
          targetId &&
          targetId !== "#"
        ) {

          const target =
            document.querySelector(targetId);

          if (target) {

            event.preventDefault();

            target.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });

          }

        }

      });

    });


});
