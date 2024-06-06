const sound = document.querySelectorAll(".sound");

function play(){
    sound.addEventListener("play", (e) => {
        e.preventDefault();
        console.log("play");
    })
}
