const carousel = document.querySelector('.carousel');
const div = carousel.querySelector('div');
const ul = carousel.querySelector('ul');
const li = ul.querySelectorAll('li');
const slideButtons = carousel.querySelectorAll('.slide');
const slideLeft = carousel.querySelector('.slide-left');
const slideRight = carousel.querySelector('.slide-right');
const indicators = carousel.querySelectorAll('footer > div');

const width = li[0].clientWidth;
const adjustWidth = li.length * width;

ul.style.width = `${adjustWidth}px`;

const scrollDiv = (nextIndex) => {
  const width = div.clientWidth;
  const newLeft = width * nextIndex;

  div.scrollTo({ left: newLeft, behavior: 'smooth' });
};

slideButtons.forEach((slideButton) => {
  slideButton.addEventListener('click', () => {
    const count = li.length;

    let currentIndex = parseInt(carousel.attributes.data.value);

    if (slideButton.className.includes('right') && currentIndex < count - 1) {
      currentIndex++;

      scrollDiv(currentIndex);
    }

    if (slideButton.className.includes('left') && currentIndex > 0) {
      currentIndex--;

      scrollDiv(currentIndex);
    }

    indicators.forEach((indicator, index) => {
      if (currentIndex === index) {
        indicator.className = 'active';
      } else {
        indicator.className = '';
      }
    });

    if (currentIndex === 0) {
      slideLeft.style.display = 'none';
    } else if (currentIndex === count - 1) {
      slideRight.style.display = 'none';
    } else {
      slideLeft.style.display = 'block';
      slideRight.style.display = 'block';
    }

    carousel.attributes.data.value = currentIndex;
  });
});
