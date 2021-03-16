class Game {

    constructor (){


    }

    getState(){

        var gameStateRef;

        //refer to gameState in DB
        gameStateRef = database.ref("/gameState");
        
        // listen to gameState changes in DB
        gameStateRef.on ("value", 
            function(data){
            gameState = data.val ();
            console.log ("GAME STATE : "+ gameState);
        }
        );

    }

    update(state){

        //update the gameState
        var gameStateRef=database.ref("/").update ({"gameState":state});
        

    }

    start(){

        if (gameState==0){

            //create player
            player=new Player();
            //get the player count
            var playerCount = player.getPlayerCount();
            //create form and display it
            form=new Form();
            form.display();
        }
    }

}