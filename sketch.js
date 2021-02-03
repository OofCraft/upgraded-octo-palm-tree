//Create variables here
var dog,doge
var hdog, hdoge
var getFoodStock, deductFood, updateFoodStock;
var database, foodS, foodStock;
var fedTime, lastFed
var foodObj,addFood,feed;

function preload()
{
  //load images here
  doge = loadImage("images/dogImg1.png")
  hdog = loadImage("images/dogImg.png")

}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,350,50,50);
  dog.addImage("hdog", hdog);
  dog.scale = 0.15;
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
  foodObj = new Food

  feed = createButton("¡Darle comida al perro!");
  feed.position(700,95);
  feed.mousePressed(feedDog);

}
//fffffffffffffffffffffffff

function draw() {  
  background(46,193,87);
  if (keyDown("UP_ARROW")){
    writeStock(foodS);
    //Food=Food-1
    dog.addImage("doge", doge);
  }

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeImage("doge", doge);
  }

  if (keyWentUp(UP_ARROW)){
    dog.changeImage("hdog", hdog)
  }

  drawSprites();
  //add styles here
  stroke("black");
  textSize(18);
  fill("black");
  text("Food remaining: " + foodS,20,20);
}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  if(x<=0){
  x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({Food:x})

}

