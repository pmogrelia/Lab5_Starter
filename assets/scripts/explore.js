// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const faceImage = document.querySelector('img');
  const textInput = document.getElementById('text-to-speak');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  // Load voices — some browsers may delay loading
  populateVoices();
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoices;
  }

  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedIndex = parseInt(voiceSelect.value);
    if (!isNaN(selectedIndex)) {
      utterance.voice = voices[selectedIndex];
    }
    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };
    synth.speak(utterance);
  });
}
