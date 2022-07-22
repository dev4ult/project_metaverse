const fadeRight = document.querySelectorAll('.fade-right');
const fadeLeft = document.querySelectorAll('.fade-left');

const header = document.querySelector('header');
const arrowUp = document.querySelector('.arrow-up');

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

const headerSelector = {
  treshold: 1,
  rootMargin: '0px 0px -250px 0px',
};

const hideOnHeader = new IntersectionObserver(function (entries, hideOnHeader) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      arrowUp.classList.remove('hidden');
      arrowUp.classList.add('block');
      console.log('is not intersecting');
    } else {
      arrowUp.classList.add('hidden');
      arrowUp.classList.remove('block');
      console.log('is intersecting');
    }
  });
}, headerSelector);

hideOnHeader.observe(header);

fadeRight.forEach((item) => {
  appearOnScroll.observe(item);
});

fadeLeft.forEach((item) => {
  appearOnScroll.observe(item);
});
