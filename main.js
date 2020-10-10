const utterance = new SpeechSynthesisUtterance();

const synth = window.speechSynthesis;

utterance.lang = "pt-BR";
utterance.rate = 1.0;

function setText(event) {
  utterance.text = event.target.value;
}

function play() {
  if(speechSynthesis.paused) {
    speechSynthesis.resume();
  }

  else {
    speechSynthesis.speak(utterance);
  }
}

function stop() {
  speechSynthesis.cancel();
}

function pause() {
  speechSynthesis.pause();
}

