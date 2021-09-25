// ANIMAÇÃO AO SCROLL //
export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  let windowMetade;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible) section.classList.add('atv');
      else if (section.classList.contains('atv')) {
        section.classList.remove('atv');
      }
    });
  }
  if (sections.length) {
    windowMetade = window.innerHeight * 0.8;
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
