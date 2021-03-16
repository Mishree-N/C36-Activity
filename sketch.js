//variables
var gameState=0;
var playerCount=0;
var form, game, player;
var database, dbPosition;

function setup(){
    //setup database
    database = firebase.database ();
    //create canvas
    createCanvas(400,400);

    //create game
    game=new Game();
    //get the gameState
    game.getState();
    //start the game and create the form
    game.start();
}

function draw(){

    

    
}


