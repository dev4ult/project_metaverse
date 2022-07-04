const exploreButton = document.querySelector('.explore-button');

exploreButton.addEventListener('click', (_) => {
  document.body.classList.remove('overflow-y-hidden');
});

const slider = document.querySelector('.slider');

const slideButton = document.querySelectorAll('.slide-button');

for (let i = 0; i < slideButton.length; i++) {
  slideButton[i].addEventListener('click', (_) => {
    slideButton.forEach((button) => {
      button.classList.remove('from-teal-400');
      button.classList.remove('to-sky-500');
      button.classList.add('from-violet-500');
      button.classList.add('to-fuchsia-500');
    });
    slider.style.transform = `translateX(-${100 * i}vw)`;
    slideButton[i].classList.add('from-teal-400');
    slideButton[i].classList.add('to-sky-500');
    slideButton[i].classList.remove('from-violet-500');
    slideButton[i].classList.remove('to-fuchsia-500');
  });
}
