class Form{

    constructor(){


    }

    display(){

        //create title as heading 2
        var title = createElement ("h2");
        //make title say Car Racing Game
        title.html ("Car Racing Game");
        //position the title
        title.position (130,0);

        //create input for Name
        var input = createInput ("Name") ;
        //position the input
        input.position (130,160);

        //create the Play button
        var button = createButton ("Play");
        //position the button
        button.position (250,200);
        
        //create the greeting and heading 3
        var greeting = createElement ("h3");

        //when Play button is pressed,
        button.mousePressed (function () {

            //stop displaying the Name input
            input.hide ();
            //stop displaying the Play button
            button.hide ();

            //make the Name from input equal to the name variable
            var name=input.value();
            //increment playerCount because new player has just logged on and pressed "Play"
            playerCount=playerCount+1;
            //update player's name using input value
            player.updatePlayerName(name);
            //update # of players 
            player.updatePlayerCount(playerCount);

            //make greeting variable say "Welcome _name of player (using input value)_"
            greeting.html("Welcome " + name);
            //position the greeting
            greeting.position(130,160);
        });


        
    }



}