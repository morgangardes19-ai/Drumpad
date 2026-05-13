let touchesEnregistrees = [];
let enEnregistrement = false;


addEventListener("keydown", playSound);

function playSound(evenement) {
  if (evenement.repeat) return;

  let key = document.querySelector(`div[data-key="${evenement.keyCode}"]`);
  // console.log(typeof evenement.keyCode);

  let keySound = document.querySelector(
    `audio[data-key="${evenement.keyCode}"]`,
  );

  if (!key) return;
  if (evenement.keyCode === 82) {
    enregistrer(key);
  }
  if (evenement.keyCode === 70) {
    rejouer(key);
  }
  if (!keySound) return;

  key.classList.add("playing");
  keySound.currentTime = 0;
  keySound.play();
 
  if (enEnregistrement) {
    touchesEnregistrees.push(evenement.keyCode);
   
    
  }
}

addEventListener("keyup", stop);

function stop(evenement) {
  let key = document.querySelector(`div[data-key="${evenement.keyCode}"]`);
  let keySound = document.querySelector(
    `audio[data-key="${evenement.keyCode}"]`,
  );

  if (!key) return;
  if (!keySound) return;

  key.classList.remove("playing");
}

/**
 * @param {Element} key - La touche à enregistrer
 */
function enregistrer(key) {
  // cette fonction démarre ou coupe l'enregistrement
  key.classList.toggle("playing");
// !enEnregistrement signifie l'opposé
  enEnregistrement = !enEnregistrement
//  si on démarre un enregistrement on remet le tableau de touches enregistrées vide
   if (enEnregistrement) {
    touchesEnregistrees = [];
   }
}
/**
 * @param {Element} key - La touche à enregistrer
 */
function rejouer(key) {
  // console.log(key);
  
  key.classList.toggle("playing");

  // exemple de création artificiel d'évènement
  // dispatchEvent(new KeyboardEvent("keydown", { keyCode: 87 }));
  // setTimeout(() => {
  //   dispatchEvent(new KeyboardEvent("keyup", { keyCode: 87 }));
  // }, 300);
}
