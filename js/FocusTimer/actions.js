import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";
import * as audio from "./sounds.js";

export function toggleRunning() {
  // state.isRunning = !state.isRunning;
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countDown();
  audio.buttonPressAudio.play();
}

export function reset() {
  // state.isRunning = false;
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  updateDisplay();

}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
  //el.seconds.focus();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    audio.bgAudio.play();
  } else {
    audio.bgAudio.pause();
    audio.bgAudio.currentTime = 0;
  }
}
