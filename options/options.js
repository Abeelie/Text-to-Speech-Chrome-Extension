const selectOption = document.querySelector('#selectElementId');
const langChanged = document.querySelector(".alert");
langChanged.style.display = "none";

chrome.tts.getVoices(
  getAllVoices = (voices) => {
    voices.forEach((_, i, voices) => { 
      const opt = document.createElement('option');
      opt.value = voices[i].lang;
      opt.innerHTML = `${voices[i].voiceName}: ${voices[i].lang}`;
      selectOption.appendChild(opt);
    });
  }
);

selectOption.addEventListener("change", (e) => {
  const newLanguage = e.target.value;
  chrome.storage.local.set({"langauge": newLanguage || "en-US"}, () => {
    langChanged.classList.remove("alert-danger");
    langChanged.classList.add("alert-success");
    langChanged.innerHTML = "You have successfully changed languages";
    langChanged.style.display = "block";
  });
});