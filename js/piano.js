const WHITE_KEYS = ['z','x','c','v','b','n','m']; 
const BLACK_KEYS = ['s','d','f','g','h','j','k']; 

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
keys.forEach(key => {
    key.addEventListener('click', () => onPlayPiano(key));
})
//to caucht keyboard
document.addEventListener('keydown', event =>{
    const keyBoard = event.key;
    const whiteIndex = WHITE_KEYS.indexOf(keyBoard);
    const blackIndex = BLACK_KEYS.indexOf(keyBoard);
    // console.log(whiteIndex);
    if(!event.repeat){
        if(whiteIndex > -1){
            onPlayPiano(whiteKeys[whiteIndex]);
        }
        if(blackIndex > -1){
            onPlayPiano(blackKeys[blackIndex]);
        }
    }
    
})
// to play audio and active or not active of color background
function onPlayPiano(key){
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
    audio.addEventListener('ended', () => {
        key.classList.remove("active");
    })
}
