class Food{
    constructor(x,y,width,height){
        this.image = loadImage("images/Milk.png")
        var foodStock, lastFed;
        this.body = Bodies.rectangle(this.x,this.y,80,100);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

    };

    
    display(){
        var x = 80;
        var y = 100;
        var foodStock, lastFed;
        imageMode(CENTER);
        image(this.image, 720,220,70,70);

        if (this.foodStock != 0){
            for (var i=0; i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image, x,y,50,50);
                x=x+30;
            }
        }
    }
};