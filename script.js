// Mouse Spotlight
const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);
 
document.addEventListener("mousemove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// GitHub ontribution heatmap squares
const heatmapGrid = document.getElementById("heatmapGrid");
const totalDays = 371; 
 
for (let i = 0; i < totalDays; i++) {
  const square = document.createElement("div");
 
  // random intensity level from 0 (no activity) to 4 (very active)
  const level = Math.floor(Math.random() * 5);
  square.className = `heatmap-square level-${level}`;
 
  heatmapGrid.appendChild(square);
}

// Mobile navbar menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Auto-close mobile menu when any link inside it is tapped
const mobileMenuLinks = mobileMenu.querySelectorAll("a");

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});