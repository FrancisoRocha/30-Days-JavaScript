const sound = document.querySelectorAll(".sound");

function play(){
    sound.addEventListener("play", () => {
        console.log("play");
    })
}
