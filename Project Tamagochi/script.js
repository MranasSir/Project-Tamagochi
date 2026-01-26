let honger = 100;
let slaap = 100;
let plezier = 100;
let age = 0;
let CurrentRankText = "kid";
let previousranktext = "Kid";


const emoties = [
  " Ik heb Honger!",
  " Ik wil slapen!",
  " Ik wil plezier!"
];

const agesub = [
  "Kid",
  "Adult",
  "warrior",
  "Legend",
  "Arcane"
]

let gameInterval;


function updateStats() {
  document.getElementById("honger-value").innerText = honger;
  document.getElementById("slaap-value").innerText = slaap;
  document.getElementById("plezier-value").innerText = plezier;
  document.getElementById("age-num").innerText = age;
  document.getElementById("age-sub").innerText = CurrentRankText;


  document.getElementById("honger-bar").style.width  = honger + "%";
  document.getElementById("slaap-bar").style.width   = slaap + "%";
  document.getElementById("plezier-bar").style.width = plezier + "%";
}


function bepaalEmotie() {
  if (honger <= 30) return 0; 
  if (slaap <= 30) return 1;  
  if (plezier <= 30) return 2; 
  return -1;
}


function toonEmotie(){
  let emotie = document.getElementById("emotie")
  let index = bepaalEmotie();

  if (index === -1) {
    emotie.innerText = "";
    emotie.style.display = "none";
  } else {
    emotie.innerText = emoties[index];
    emotie.style.display = "block";
  }
}

gameInterval = setInterval(() => {
  //age checkpoints//
   age += 1;
    if (age >= 0 && age < 20){
      CurrentRankText = agesub[0]; 
    } else if ( age >= 20 && age < 60) {
      CurrentRankText = agesub[1];
      honger -= 2 * 2;

    } else if ( age >= 60 && age < 100) {
      CurrentRankText = agesub[2];
      honger -= 2 * 4;
    } else if ( age >= 100 && age <300 ) 
      {CurrentRankText = agesub[3]; 
      honger -= 2 * 8;
    } else {CurrentRankText = agesub[4];
      honger -= 2 * 12;
    }
    //age checkpoints einde//

  const rankMessage = document.getElementById("age-text")

  if (CurrentRankText !== previousranktext) {
    rankMessage.style.display = "block";

    setTimeout(() => {
        rankMessage.style.display = "none";
    }, 2000);

    previousranktext = CurrentRankText;
}

   // stats elke seconde omlaag//
       if (honger <= 0 || slaap <= 0 || plezier <= 0) {
           honger = 0;
           slaap = 0;
           plezier = 0;
        clearInterval(gameInterval);
     } else {
        honger -= 2;
        slaap -= 2;
        plezier -= 2;
    }
    // stats elke seconde omlaag//
    updateStats();
    toonEmotie();
}, 1000);

function GameOver() {
  return honger <= 0 || slaap <= 0 || plezier <= 0;
}

//knop-werk//
document.getElementById("feed-button").onclick = () => {
  if (GameOver()) return;
    if (honger < 100) {
       honger += 20; 
    
    if (honger > 100) {
        honger = 100;

    }
    slaap -= 5 
      if (slaap <0) slaap = 0;

    }
     updateStats();
  toonEmotie();
}

document.getElementById("sleep-button").onclick = () => {
    if (GameOver()) return;
   if (slaap < 100)  {
       slaap  += 20;
   
   if (slaap > 100) {
       slaap = 100;
   }
       plezier -= 5 
      if (plezier <0) plezier = 0;
    }
  updateStats();
  toonEmotie();
  }

document.getElementById("play-button").onclick = () => {
    if (GameOver()) return;
    if (plezier < 100)  {
        plezier += 20;
    
    if ( plezier > 100) {
        plezier = 100
    }
          slaap -= 5 
      if (slaap <0) slaap = 0;
    }

  updateStats();
  toonEmotie();
}
//knop-werk einde//






