//воспроизведение аудио
const keys = document.querySelectorAll('div');
const pianoКeys = document.querySelectorAll('.piano-key');
const piano = document.querySelector('.piano');
const audio = document.querySelectorAll('audio');

pianoКeys.forEach(key => {
 key.addEventListener('mousedown', playNote)
 
});

function playNote(e) {
 let key = e.target;
 let note = document.getElementById(key.dataset.note);
 key.classList.add('piano-key-active');
 note.currentTime = 0;
 note.play(); 
}; 

//добавила цвет и трансформ нажатой клавише 
piano.addEventListener('mousedown', (event) => {
  if(event.target.classList.contains('piano-key')) {
    keys.forEach((el) => {
      if(el.classList.contains('piano-key-active', 'piano-key-activ',
      'piano-key-active-pseudo')) {
       el.classList.remove('piano-key-active', 'piano-key-activ',
        'piano-key-active-pseudo');
      }
    });
    event.target.classList.add(
      'piano-key-active', 'piano-key-activ', 
      'piano-key-active-pseudo');
  }
}); 

piano.addEventListener('mouseup', (event) => {
  if(event.target.classList.contains('piano-key')) {
    keys.forEach((el) => {
      if(el.classList.contains('piano-key-active', 'piano-key-activ',
      'piano-key-active-pseudo')) {
       el.classList.remove('piano-key-active', 'piano-key-activ',
        'piano-key-active-pseudo');
      }
    });
    event.target.classList.add("piano-key-remove-mouse");
  }
}); 

piano.addEventListener('mouseover', (event) => {
  if(event.target.classList.contains('piano-key')) {
    keys.forEach((el) => {
      if(el.classList.contains('piano-key-active', 'piano-key-activ',
      'piano-key-active-pseudo')) {
       el.classList.remove('piano-key-active', 'piano-key-activ',
        'piano-key-active-pseudo');
      }
    event.target.classList.add('piano-key-active', 'piano-key-activ',
    'piano-key-active-pseudo');
  })
}
});

piano.addEventListener('mouseout', (event) => {
  if(event.target.classList.contains('piano-key')) {
    keys.forEach((el) => {
      if(el.classList.contains('piano-key-active', 'piano-key-activ',
      'piano-key-active-pseudo')) {
       el.classList.remove('piano-key-active', 'piano-key-activ',
        'piano-key-active-pseudo');
      }
    event.target.classList.add("piano-key-remove-mouse");
  })
}
});

//клавиатура
window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.play();
  if (key !== null && !event.repeat) {
    if (key.classList.contains("piano-key")) {
      pianoКeys.forEach((el) => {
        if (el.classList.contains("piano-key-active", "piano-key-activ", "piano-key-active-pseudo")) {
          el.classList.remove("piano-key-active", "piano-key-activ", "piano-key-active-pseudo");
        }
      });
    }
    key.classList.add("piano-key-active", "piano-key-activ", "piano-key-active-pseudo");
  }
});

window.addEventListener("keyup", (e) => {
  let key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
  if (key !== null) {
    pianoКeys.forEach((el) => {
      el.classList.remove("piano-key-active", "piano-key-activ", "piano-key-active-pseudo");
    });
  }
});

//переключение notes/letters
const btnLetters = document.querySelector(".btn-letters");
const btnNotes = document.querySelector(".btn-notes");

btnNotes.addEventListener("mousedown", function () {
  btnNotes.classList.add("btn-active");
  btnLetters.classList.remove("btn-active");
  for (let pianoКeys of keys){
  pianoКeys.classList.remove("letter");
  }
});
btnLetters.addEventListener("mousedown", function () {
  btnLetters.classList.add("btn-active");
  btnNotes.classList.remove("btn-active");
  for (let pianoКeys of keys){
    pianoКeys.classList.add("letter");
  }
}); 



//FullScreen
document.querySelector('.fullscreen').addEventListener('click', toggleScreen);
function toggleScreen() {
    if (document.fullscreenElement === null) {
      document.documentElement.requestFullscreen();
    }
    else {
      if (document.fullscreenEnabled){
        document.exitFullscreen();
      }
    }
  };

