export default function initScrollSuave() {
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
  
      //Primeira forma de fazer
      // const top = section.offsetTop
      // window.scrollTo({
      //   top: top,
      //   behavior: 'smooth',
      // })
  
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }