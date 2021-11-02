class Drop {
    constructor(posX, posY) {
        this.giftImage = new Image();
        this.giftImage.src = "./images/icons8-gift-64.png";
        this.width = 50;
        this.height = 50;
        this.x = posX;
        this.y = posY;
        this.giftSpeed = 7;
        }

        //methods
    drawGift = () => {
        ctx.drawImage( this.giftImage, this.x, this.y, this.width, this.height);
        //console.log(this.x, this.y, this.height, this.width)
    }
        
    giftGravity = () => {
       this.y += this.giftSpeed;;
    } 
    
     giftCollision = (singleHouse) => {
        //check if the gift gets to the house

        if (this.x < singleHouse.x + singleHouse.width &&
            this.x + this.width > singleHouse.x &&
            this.y < singleHouse.y + singleHouse.height &&
            this.height + this.y > singleHouse.y) {
                return true;
            } else {
                return false;
            }
    }

}