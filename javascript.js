// Make sections visible when scrolling
window.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('section');
    sections.forEach(section => {
      let sectionPosition = section.getBoundingClientRect().top;
      if (sectionPosition <= window.innerHeight * 0.8) {
        section.classList.add('visible');
      }
    });
  });
  
  // Scroll to the section on click
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }