/* =========================================================================
   MAXTRON RACING CLUB — CURSOR-FOLLOWING BACKGROUND LIGHT
   A soft glow that trails the mouse cursor across the page background.
   ========================================================================= */

(function () {
  // Build the glow element and attach it once, site-wide
  const glow = document.createElement("div");
  glow.className = "cursor-light";
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(glow);
  });

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  let active = false;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!active) {
      active = true;
      glow.style.opacity = "1";
    }
  });

  // Fade out when the cursor leaves the window (e.g. moves to another tab/app)
  document.addEventListener("mouseleave", () => {
    active = false;
    glow.style.opacity = "0";
  });

  // Smoothly trail the light toward the real cursor position (lerp)
  function animate() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();
