let honger = 100;
let slaap = 100;
let plezier = 100;


const gedachten = [
  " Ik heb Honger!",
  " Ik wil slapen!",
  " Ik wil plezier!"
];

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

// functie die dominante emotie bepaalt
function bepaalEmotie() {
  if (honger <= 30) return 0; 
  if (slaap <= 30) return 1;  
  if (plezier <= 30) return 2; 
  return -1;
}

// functie om de emotie in HTML te tonen
function toonEmotie() {
  const emotieIndex = bepaalEmotie();
  const el = document.getElementById("emotie");
  el.innerText = gedachten[emotieIndex];
  el.style.display = "block";
  if (emotieIndex === -1) {
    el.style.display = "none";
  }
}


/* ==========================
   GAME LOOP (EVERY 10 SECONDS)
   ========================== */
gameInterval = setInterval(() => {
  honger  = Math.max(honger - 2, 0);
  slaap   = Math.max(slaap - 2, 0);
  plezier = Math.max(plezier - 2, 0);
 function showWarning(id) {
   const el = document.getElementById(id);

  if (el.style.display === "block") return; // voorkomt spam

  el.style.display = "block";

  setTimeout(() => {
    el.style.display = "none";
  }, 2000);
}

//if (honger <= 30) showWarning("text-honger");
//if (slaap <= 30) showWarning("text-slaap");
//if (plezier <= 30) showWarning("text-plezier");


  updateStats();
  toonEmotie();
  checkGameOver();
}, 1000);



/* ==========================
   ACTIONS
   ========================== */
function feed() {
  if (honger >= 100) return;

  honger = Math.min(honger + 20, 100);
  slaap  = Math.max(slaap - 5, 0);

  updateStats();
  checkGameOver();
}

function play() {
  if (plezier >= 100) return;

  plezier = Math.min(plezier + 20, 100);
  slaap   = Math.max(slaap - 10, 0);
  honger  = Math.max(honger - 5, 0);

  updateStats();
  checkGameOver();
}

function sleepPet() {
  if (slaap >= 100) return;

  slaap = Math.min(slaap + 20, 100);
  plezier = Math.max(plezier - 10, 0);
  honger = Math.max(honger - 5, 0);

  updateStats();
  checkGameOver();
}


// Update immediately on load
updateStats();
//===========================//
//  PIXEL ART RENDERING   // 
//===========================//
// ===== CANVAS SETUP =====
const canvas = document.getElementById('game'); // make sure your HTML has <canvas id="game" width="64" height="64"></canvas>
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false; // keep pixels sharp when scaled

// clear canvas
function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// draw a single pixel
function drawPixel(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}
let wingtime = 0;
// ===== BIG PENGUIN SPRITE =====
function drawBigPenguin() {
  const xOffset = 4;
  const yOffset = 30;
  // Body/outline (black)
const flap = Math.sin(wingtime) * 0.5;

  const blackPixels = [
    // Head top
    [24,5],[25,5],[26,5],[27,5],[28,5],[29,5],[30,5],[31,5],
    [23,6],[24,6],[25,6],[26,6],[27,6],[28,6],[29,6],[30,6],[31,6],[32,6],
    [23,7],[24,7],[25,7],[26,7],[27,7],[28,7],[29,7],[30,7],[31,7],[32,7],
    [22,8],[23,8],[24,8],[25,8],[26,8],[27,8],[28,8],[29,8],[30,8],[31,8],[32,8],[33,8],
    // Body
    [21,9],[22,9],[23,9],[24,9],[25,9],[26,9],[27,9],[28,9],[29,9],[30,9],[31,9],[32,9],[33,9],[34,9],
    [21,10],[22,10],[23,10],[24,10],[25,10],[26,10],[27,10],[28,10],[29,10],[30,10],[31,10],[32,10],[33,10],[34,10],
    [20,11],[21,11],[22,11],[23,11],[24,11],[25,11],[26,11],[27,11],[28,11],[29,11],[30,11],[31,11],[32,11],[33,11],[34,11],[35,11],
    [20,12],[21,12],[22,12],[23,12],[24,12],[25,12],[26,12],[27,12],[28,12],[29,12],[30,12],[31,12],[32,12],[33,12],[34,12],[35,12],
    [19,13],[20,13],[21,13],[22,13],[23,13],[24,13],[25,13],[26,13],[27,13],[28,13],[29,13],[30,13],[31,13],[32,13],[33,13],[34,13],[35,13],[36,13],
    [19,14],[20,14],[21,14],[22,14],[23,14],[24,14],[25,14],[26,14],[27,14],[28,14],[29,14],[30,14],[31,14],[32,14],[33,14],[34,14],[35,14],[36,14],
  ];
    // Wings
      // Wings (animated)
    const wingPixels = [
  // Left wing
  [18,15],[19,15],
  [18,16],[19,16],
  [17,17],[18,17],
  [17,18],[18,18],
  [17,19],[18,19],

  // Right wing
  [36,15],[37,15],
  [36,16],[37,16],
  [37,17],[38,17],
  [37,18],[38,18],
  [37,19],[38,19],
];



  blackPixels.forEach(p => drawPixel(p[0] + xOffset, p[1] + yOffset, "#000"));

  wingPixels.forEach(p => {
  drawPixel(
    p[0] + xOffset,
    p[1] + yOffset - flap,
    "#000"
  );
});
  // Belly (white)
  const whitePixels = [
    [25,9],[26,9],[27,9],[28,9],[29,9],[30,9],
    [25,10],[26,10],[27,10],[28,10],[29,10],[30,10],
    [26,11],[27,11],[28,11],[29,11],
    [26,12],[27,12],[28,12],[29,12],
    [26,13],[27,13],[28,13],[29,13]
  ];
  whitePixels.forEach(p => drawPixel(p[0] + xOffset, p[1] + yOffset, "#fff"));

  // Eyes (white)
  drawPixel(26 + xOffset,7 + yOffset,"#fff");
  drawPixel(29 + xOffset,7 + yOffset,"#fff");

  // Pupils (black)
  drawPixel(26 + xOffset,7 + yOffset,"#000");
  drawPixel(29 + xOffset,7 + yOffset,"#000");

  // Beak (orange)
  drawPixel(27 + xOffset,10 + yOffset,"#FFA500");
  drawPixel(28 + xOffset,10 + yOffset,"#FFA500");

  // Feet (orange)
  drawPixel(24 + xOffset,15 + yOffset,"#FFA500");
  drawPixel(25 + xOffset,15 + yOffset,"#FFA500");
  drawPixel(30 + xOffset,15 + yOffset,"#FFA500");
  drawPixel(31 + xOffset,15 + yOffset,"#FFA500");
}

// ===== GAME LOOP =====
function gameLoop() {
  clearScreen();
  wingtime += 0.3;
  drawBigPenguin();
}


// run 10 FPS
setInterval(gameLoop, 50);




