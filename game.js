class Game {
    //properties
  constructor() {
        this.bg = new Image(); // bg for background
        this.bg.src = "./images/msg28111671-717378.jpg";
        this.santa = new Santa();
        this.drop;
        this.houseArr = [new House( "./images/oie_yfl4iDXqROob.png " )]; 
        this.gapBetweenHouses = 50;
        this.houseApperingDistance = canvas.width - 350 ; 
        this.isGameOver = false;
        this.giftsArr = [];
  }

   

    //methods
  gameOver = () => {
        //stop the game
        this.isGameOver = true;
        //hide canvas
       canvas.style.display = "none";
        //show restart state
        gameoverScreen.style.display = "flex";
  }

  
  createDrop = () => {
  
    const newGift = new Drop(this.santa.x, this.santa.y);
    this.giftsArr.push(newGift)
    //this.drop = new Drop(this.santa.x, this.santa.y);
    console.log(newGift);
    
  }

  createDraw = () => {
    this.giftsArr.forEach((gift) => {
      gift.drawGift();
    }) 
    //using load function - it's not loading 
  }
  
  addHouses = () => {
       
    let lastHouse = this.houseArr[this.houseArr.length - 1]
      if (lastHouse.x  === this.houseApperingDistance){
        let houseBottom = new House( "./images/oie_QcqZYknnYDSL.png"); // this is already a diff image, but i'll choose it randomly
          this.houseArr.push(houseBottom);

      } 
  }


    gameLoop = () => {
        //console.log("game running");
        //* 1. clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        //* 2. movements and changes to the elements
        this.santa.santaGravity();    
        //this.drop.giftGravity();
        //this.house.houseMove(); // --- for the array, need to change to a forEach
        this.houseArr.forEach((eachHouse) => {
            eachHouse.houseMove();
        })
        this.addHouses();
        this.houseArr.forEach ((eachHouse) => {
            if (this.santa.santaHouseCollision(eachHouse)) {
             this.gameOver();
            };
            
        })

        //* 3. drawing the elements
        ctx.drawImage( this.bg, 0, 0, canvas.width, canvas.height)
        this.santa.drawSanta();
        this.houseArr.forEach ((eachHouse) => {eachHouse.drawHouse()})
        //this.drop.drawGift();

        //*4. animation frame and logic changes
       if (!this.isGameOver){
           requestAnimationFrame(this.gameLoop) // element from own class
       }
        
    }
}