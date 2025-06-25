document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".hero-text .btn");

  startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const section = document.querySelector("#menu");
    section.scrollIntoView({ behavior: "smooth" });
  });

  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    observer.observe(card);
  });
});