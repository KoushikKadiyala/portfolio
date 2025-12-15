document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const navLinks = Array.from(document.querySelectorAll("nav a"));

  // compute header height used as offset (updates on resize)
  function getNavOffset() {
    return navbar ? navbar.offsetHeight : 0;
  }

  function activateSection() {
    const scrollPos = window.scrollY;
    const offset = getNavOffset() + 20; // small extra margin to be safe
    let currentId = "";

    // find the last section whose top is <= scrollPos + offset
    for (const sec of sections) {
      const top = sec.offsetTop;
      if (scrollPos + offset >= top) {
        currentId = sec.id;
      }
    }

    // update nav link classes once
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  }

  // run on load, scroll and resize
  window.addEventListener("scroll", activateSection, { passive: true });
  window.addEventListener("resize", activateSection);
  activateSection(); // initial activation
});
