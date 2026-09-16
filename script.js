// Show one screen at a time by toggling the "active" class
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

// Start on the welcome screen
showScreen("start");