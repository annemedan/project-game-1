class Santa {
    //properties
    constructor(){
        this.santaImage = new Image();
        this.santaImage.src = "./images/—Pngtree—red nosed elk santa sleigh_5713088.png";
        this.width = 220;
        this.height = 170;
        this.x = canvas.width / 5;
        this.y = canvas.height / 2;
        this.santaSpeed = 20;
    }
    //methods
    drawSanta = () => {
        ctx.drawImage( this.santaImage, this.x, this.y, this.width, this.height);
    }
    santaGravity = () => {
       this.y++;
    }

    santaJump = () => {
        this.y -= this.santaSpeed;
    }

    santaHouseCollision = (singleHouse) => {

        //check if santa collides with a house

        if (this.x < singleHouse.x + singleHouse.width &&
            this.x + this.width > singleHouse.x &&
            this.y < singleHouse.y + singleHouse.height &&
            this.height + this.y > singleHouse.y) {

              //! TAKE THIS OUT -  return true;
        //cause the game to end
        //create a boolean for the game to end and trigger, also requestAnimationFrame
            } else {
                return false
            }
    }
    
    // ! birdFalling 


}