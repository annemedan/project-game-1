// * global variables

//canvas setup 
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
let gameScreen = document.querySelector("#score-screen");

//dom elements
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let splashScreen = document.querySelector("#splash-screen");
let gameoverScreen = document.querySelector("#gameover-screen");

//pictures from splash screen
let myPix = ["./images/xmas-jokes/The-50-Funniest-Christmas-Jokes-for-Kids-Redo-scaled.jpeg", "./images/xmas-jokes/The-50-Funniest-Christmas-Jokes-for-Kids-Redo2-scaled.jpeg", "./images/xmas-jokes/The-50-Funniest-Christmas-Jokes-for-Kids2-scaled.jpeg", "./images/xmas-jokes/The-50-Funniest-Christmas-Jokes-for-Kids4-scaled.jpeg", "./images/xmas-jokes/The-50-Funniest-Christmas-Jokes-for-Kids5-scaled.jpeg", "./images/xmas-jokes/The-50-Funniest-Christmas-Jokes-for-Kids7-scaled.jpeg", "./images/xmas-jokes/The-50-Funniest-Christmas-Jokes-for-Kids8-scaled.jpeg", "./images/xmas-jokes/xmasjokes-kids3.jpeg", "./images/xmas-jokes/xmasjokes-kids4.jpeg", "./images/xmas-jokes/xmasjokes-kids5.jpeg", "./images/xmas-jokes/xmasjokes-kids8.jpeg"];
let index = 0;
    
function prevImage() {
     index--;
     index = index < 0 ? 0 : index;
     return myPix[index];
    }
   
function nextImage() {
     index++;
     index = index >= myPix.length ? myPix.length - 1 : index;
     return myPix[index];
    }
   
document.querySelector("#bprev").onclick= () => {
     document.querySelector("#my-jokes").src = prevImage();}
   
document.querySelector("#bnext").onclick = () => {
     document.querySelector("#my-jokes").src = nextImage();}
   



//game object
let game; 

// * functions 
const restartGame = () => {
    gameoverScreen.style.display = "none";
    canvas.style.display = "flex";
    gameScreen.style.display = "flex";
    game = new Game();
    game.gameLoop();
    game.score.innerText = 0;
    game.audio.play();
   
}

const startGame = () => {
    splashScreen.style.display = "none";
    canvas.style.display = "flex";
    gameScreen.style.display = "flex";
    game = new Game(); 
    game.gameLoop();
    game.audio.play();;


}


// * add event listeners 
startButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame)

window.addEventListener("keydown", event => {
    if (event.code === "ArrowUp"){
        game.santa.santaJump();
    } else if (event.code === "Space") {
    game.createDrop();
        
    }
});
