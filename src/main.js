var speech = new SpeechSynthesisUtterance();
function voice() {
  speech.text = textToVoice.value;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
