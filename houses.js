class House {
    //properties
    constructor( srcImage ) {
        this.houseImage = new Image();
        this.houseImage.src = srcImage; // needs to be dynamic
        this.width = 300;
        this.height = 300;
        this.x = canvas.width;
        this.y = canvas.height - 300; 

    }

    //methods
    drawHouse(){
        ctx.drawImage ( this.houseImage, this.x, this.y, this.width, this.height);
    }

    houseMove(){
        this.x -= 2
    }


}