class Game {
    //properties
  constructor() {
        this.bg = new Image(); // bg for background
        this.bg.src = "./images/msg28111671-717378.jpg";
        this.santa = new Santa();
        this.drop;
        this.houseArr = [new House( "./images/oie_yfl4iDXqROob.png " )]; 
        this.gapBetweenHouses = 75;
        this.houseApperingDistance = canvas.width - 500 ; 
        this.isGameOver = false;
        this.giftsArr = [];
        this.isPoint = 0;
        this.score = document.querySelector("#score");
  
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
        let srcImage = ["./images/oie_agasnKIahJKw.png", "./images/oie_DlYg29DnyXFM.png", "./images/oie_lMMR54ccCMAy.png", "./images/oie_QcqZYknnYDSL.png", "./images/oie_yfl4iDXqROob.png"]
        let randomNum = Math.floor(Math.random() * srcImage.length);
        let houseBottom = new House( srcImage[randomNum] );
        // this is already a diff image, but i'll choose it randomly
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
           !this.gameOver();
        } // if the santa touches the floor game is over

        this.giftsArr.forEach((gift, i)=>{

          if (gift.y >= canvas.height) {
            this.isPoint -= 15; 
            console.log("Lost Points", this.isPoint);
            this.giftsArr.splice(i, 1);
            this.score.innerText = this.isPoint;
          }

          this.houseArr.forEach((eachHouse) => {
            if (gift.giftCollision(eachHouse)){
              this.isPoint += 5
              this.giftsArr.splice(i, 1);
              // ctx.clearRect(gift.x, gift.y, gift.width, gift.height)
              console.log("Points", this.isPoint);
              this.score.innerText = this.isPoint;
            }     
          }); 
        })

        if (this.isPoint < 0){
         // ! COMMENT THIS OUT this.gameOver();
        }

        
          

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