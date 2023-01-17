const playMusic = (audioTag) => {
  audioTag.currentTime = 0;
  audioTag.play();
};

const addKeyCss = (keyDiv) => {
  keyDiv.classList.add("playing");
};

const addLastKeyCss = (keyDiv1) => {
  keyDiv1.classList.add("playing");
};

const removeKeyCss = (keyDiv) => {
  keyDiv.classList.remove("playing");
};

const keyDownEvent = (event) => {
  const keyCode = event.keyCode;
  const audioTag = document.querySelector(`audio[data-key="${keyCode}"]`);

  // console.log(1, keyCode);
  const keyDiv = document.querySelector(`.key[data-key="${keyCode}"]`);
  const keyDiv1 = document.querySelector(`.key[data-key=""]`);

  if (!keyDiv) {
    // console.log("lock");
    const audioTag = document.querySelector(`audio[data-key=""]`);
    playMusic(audioTag);
    addLastKeyCss(keyDiv1);
    return;
  }
  playMusic(audioTag);
  addKeyCss(keyDiv);
};

const transitionEndEvent = (event) => {
  if ("transform" !== event.propertyName) return;
  removeKeyCss(event.target);
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) =>
  key.addEventListener("transitionend", transitionEndEvent)
);
document.addEventListener("keydown", keyDownEvent);
