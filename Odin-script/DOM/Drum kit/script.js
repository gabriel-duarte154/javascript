function playingSound(e) {
    const audio = document.querySelector(`audio.${e.code}`);
    const key = document.querySelector(`div.${e.code}`);
    key.classList.add('playing');
    if(!audio) return;
    audio.play();
};
function stopSound(e) {
    const key = document.querySelector(`div.${e.code}`);
    const audio = document.querySelector(`audio.${e.code}`);
    audio.currentTime = 1;
    key.classList.remove("playing");
};

window.addEventListener('keydown', playingSound
 );
 window.addEventListener('keyup', stopSound);