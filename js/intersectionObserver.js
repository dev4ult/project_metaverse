const fadeRight = document.querySelectorAll('.fade-right');
const fadeLeft = document.querySelectorAll('.fade-left');

const appearSelector = {
  treshold: 1,
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearSelector);

fadeRight.forEach((item) => {
  appearOnScroll.observe(item);
});

fadeLeft.forEach((item) => {
  appearOnScroll.observe(item);
});
