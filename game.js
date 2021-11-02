class Game {
    //properties
  constructor() {
        this.bg = new Image(); // bg for background
        this.bg.src = "./images/msg28111671-717378.jpg";
        this.santa = new Santa();
        this.drop;
        this.houseArr = [new House( "./images/oie_yfl4iDXqROob.png " )]; 
        this.gapBetweenHouses = 75;
        this.houseApperingDistance = canvas.width - 600 ; 
        this.isGameOver = false;
        this.giftsArr = [];
        this.isPoint = 0;
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
    
  }

  createDraw = () => {
    this.giftsArr.forEach((gift) => {
      gift.drawGift();
      gift.giftGravity();
    }) 
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
         //this.house.houseMove(); // --- for the array, need to change to a forEach
        this.houseArr.forEach((eachHouse) => {
            eachHouse.houseMove();
        })
        
        this.addHouses();
        
        this.houseArr.forEach ((eachHouse) => {
            if (this.santa.santaHouseCollision(eachHouse)) {
             this.gameOver();
            }});
        
        if (this.santa.y === canvas.height - this.santa.height){
         // ! COMMENT THIS OUT -- !this.gameOver();
        } // if the santa touches the floor game is over

        this.giftsArr.forEach((gift, i)=>{

          if (gift.y >= canvas.height) {
            this.isPoint -= 15; 
            console.log("Lost Points", this.isPoint);
            this.giftsArr.splice(i, 1);
          }

          this.houseArr.forEach((eachHouse) => {
            if (gift.giftCollision(eachHouse)){
              this.isPoint += 5
              this.giftsArr.splice(i, 1);
              // ctx.clearRect(gift.x, gift.y, gift.width, gift.height)
              console.log("Points", this.isPoint);
            }     
          }); 
        })
          

        //* 3. drawing the elements
        ctx.drawImage( this.bg, 0, 0, canvas.width, canvas.height)
        this.santa.drawSanta();
        this.houseArr.forEach ((eachHouse) => {eachHouse.drawHouse()})
        
        
        this.createDraw(); // has to be inside the game loop 

        //*4. animation frame and logic changes
       if (!this.isGameOver){
           requestAnimationFrame(this.gameLoop) // element from own class
       }
        
    }
}