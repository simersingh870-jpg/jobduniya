// Simple on-scroll animation trigger
const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in');

const appearOnScroll = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.animationPlayState = 'running';
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  {threshold:0.2}
);

elements.forEach(el => appearOnScroll.observe(el));
