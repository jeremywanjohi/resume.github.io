const year = document.getElementById("year");
const themeToggle = document.getElementById("themeToggle");
const revealElements = document.querySelectorAll(".reveal");

if (year) {
  year.textContent = new Date().getFullYear();
}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.body.classList.add("light");
  themeToggle.textContent = "Light";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeToggle.textContent = isLight ? "Light" : "Dark";
  localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
});

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
