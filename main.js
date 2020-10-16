const utterance = new SpeechSynthesisUtterance();

const synth = window.speechSynthesis;

utterance.lang = "pt-BR";
utterance.rate = 1.0;

function play() {
  if(speechSynthesis.paused) {
    speechSynthesis.resume();
  }

  else {
    speechSynthesis.speak(utterance);
  }
}

const stop = () => speechSynthesis.cancel();

const pause = () => speechSynthesis.pause();

const clean = () => utterance.text = "";

const setText = (event) => utterance.text = event.target.value;
