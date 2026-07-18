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