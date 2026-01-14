let honger = 100;
let slaap = 100;
let plezier = 100;

// store interval so we can stop it
let gameInterval;

/* ==========================
   UPDATE NUMBERS & BARS
   ========================== */
function updateStats() {
  // Update numbers
  document.getElementById("honger-value").innerText = honger;
  document.getElementById("slaap-value").innerText = slaap;
  document.getElementById("plezier-value").innerText = plezier;

  // Update visual bars
  document.getElementById("honger-bar").style.width  = honger + "%";
  document.getElementById("slaap-bar").style.width   = slaap + "%";
  document.getElementById("plezier-bar").style.width = plezier + "%";
}

/* ==========================
   CHECK GAME OVER
   ========================== */
function checkGameOver() {
  if (honger <= 0 || slaap <= 0 || plezier <= 0) {
    // set all stats to 0
    honger = 0;
    slaap = 0;
    plezier = 0;

    updateStats();

    // stop the game loop
    clearInterval(gameInterval);

    // optional: show a visual "Game Over" message
    console.log("Game Over! Je tamagotchi is overleden.");
  }
}

/* ==========================
   GAME LOOP (EVERY 10 SECONDS)
   ========================== */
gameInterval = setInterval(() => {
  honger  = Math.max(honger - 30, 0);
  slaap   = Math.max(slaap - 30, 0);
  plezier = Math.max(plezier - 30, 0);

  updateStats();
  checkGameOver();
}, 10000);

/* ==========================
   ACTIONS
   ========================== */
function feed() {
  if (honger >= 100) return;

  honger = Math.min(honger + 20, 100);
  slaap  = Math.max(slaap - 10, 0);

  updateStats();
  checkGameOver();
}

function play() {
  if (plezier >= 100) return;

  plezier = Math.min(plezier + 20, 100);
  slaap   = Math.max(slaap - 15, 0);

  updateStats();
  checkGameOver();
}

function sleepPet() {
  if (slaap >= 100) return;

  slaap = Math.min(slaap + 30, 100);
  plezier = Math.max(plezier - 10, 0);

  updateStats();
  checkGameOver();
}

// Update immediately on load
updateStats();
