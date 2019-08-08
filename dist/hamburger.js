var navSlide = () => {
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');
  // aici avem toggle nav

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    //aici animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });

    //hamburger anim
    hamburger.classList.toggle('toggle');
  });
};

navSlide();
