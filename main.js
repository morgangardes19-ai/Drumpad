// let enregistrement = document.querySelector(".enregistrer");

// enregistrement.addEventListener("keydown", handleKeydown);

// function handleKeydown() {
//
//  });
// }

addEventListener("keydown", playSound);

function playSound(evenement) {
  if (evenement.repeat) return;


  let key = document.querySelector(`div[data-key="${evenement.keyCode}"]`);
// console.log(typeof evenement.keyCode);
  // let key = document.querySelector(`div[data-key2="${evenement.keyCode}"]`);


  let keySound = document.querySelector(
    `audio[data-key="${evenement.keyCode}"]`,
  );

  if (!key) return;
  if (evenement.keyCode === 82) {
    enregistrer(key);
  }
  if (!keySound) return;

  key.classList.add("playing");
  keySound.currentTime = 0;
  keySound.play();
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
  // console.log(key);
  key.classList.toggle("playing");
}



