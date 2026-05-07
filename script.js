const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  // Toggle the 'dark' class instead of 'light'
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "Light" : "Dark";
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
