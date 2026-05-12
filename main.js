addEventListener("keydown", playSound);

function playSound(evenement) {
  if (evenement.repeat) return;

  let key = document.querySelector(`div[data-key="${evenement.keyCode}"]`);

  let keySound = document.querySelector(
    `audio[data-key="${evenement.keyCode}"]`,
  );

  if (!key) return;
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




