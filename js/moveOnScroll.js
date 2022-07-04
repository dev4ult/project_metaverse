const onScrollDiv1 = document.querySelector('.on-scroll-div-1');
const onScrollDiv2 = document.querySelector('.on-scroll-div-2');
const onScrollDiv3 = document.querySelector('.on-scroll-div-3');
const onScrollDiv4 = document.querySelector('.on-scroll-div-4');
const onScrollDiv5 = document.querySelector('.on-scroll-div-5');
const onScrollDiv6 = document.querySelector('.on-scroll-div-6');

window.addEventListener('scroll', (_) => {
  let scrolled = window.scrollY;

  if (scrolled == 0) {
    document.body.classList.add('overflow-y-hidden');
  } else {
    document.body.classList.remove('overflow-y-hidden');

    let val = scrolled * 0.045 - 85;

    onScrollDiv1.style.left = `-${val * 0.8}vw`;
    onScrollDiv2.style.left = `-${val * 0.9}vw`;
    onScrollDiv3.style.left = `-${val * 1}vw`;
    onScrollDiv4.style.right = `-${val * 0.8}vw`;
    onScrollDiv5.style.right = `-${val * 0.9}vw`;
    onScrollDiv6.style.right = `-${val * 1}vw`;
  }
});
