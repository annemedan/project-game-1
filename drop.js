class Drop {
    constructor(posX, posY) {
        this.giftImage = new Image();
        this.giftImage.src = "./images/icons8-gift-64.png";
        this.width = 50;
        this.height = 50;
        this.x = posX;
        this.y = posY;
        this.giftSpeed = 15;
        }

        //methods
    drawGift = () => {
        ctx.drawImage( this.giftImage, this.x, this.y, this.width, this.height);
        console.log("is drawing", this.y)
    }
        
    giftGravity = () => {
       this.y += this.giftSpeed;;
    } 
    
}