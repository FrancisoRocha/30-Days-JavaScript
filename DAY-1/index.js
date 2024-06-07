
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
}
//FUNCION QUE REPRODUCCE LOS SONIDOS
function playSound(e){
    //SELECCION EL AUDIO
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //SELECCION DE LA LETRA PERTENECIENTE AL CODIGO KEY
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio) return;
    
    key.classList.add('playing'); //AGREGA LA CLASE PLAYING EN EL DIV SELECCIONADA 
    audio.currentTime = 0; // CONTADOR PARA INCIAR EL SONIDOS EN 0 SEG
    audio.play(); // REPRODUCCE LOS SONIDOS
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);