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
}

const startGame = () => {
    splashScreen.style.display = "none";
    canvas.style.display = "flex";
    gameScreen.style.display = "flex";
    game = new Game(); 
    game.gameLoop();

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
// change the click to arrows might be better
