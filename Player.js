class Player{

    constructor(){


    }

    getPlayerCount(){

         //refer to gameState location in DB
         var playerCountRef = database.ref ('/playerCount');

         // listen to gameState changes in DB
         playerCountRef.on ("value", 
                         function(data){
                             playerCount = data.val ();
                             
                         }
         );        

    }

    updatePlayerCount(count){

        //refer to playercount in DB
        var playerCountRef=database.ref("/");
        //updte playercount in DB
        playerCountRef.update({"playerCount" : count});

    }

    updatePlayerName(name){

        //create a new player for every name and add to playerCount
        var playerIndex = "/player"+playerCount;
        console.log (playerIndex);
        //refer to DB to set the name
        database.ref (playerIndex).set ({name : name});
        

    }
}