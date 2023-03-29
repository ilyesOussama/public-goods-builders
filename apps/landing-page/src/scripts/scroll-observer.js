const fadeUpElements = document.querySelectorAll(".fade-in");
const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeUp");
      observer.unobserve(entry.target);
    }
  });
}, options);

fadeUpElements.forEach((element) => {
  observer.observe(element);
});
