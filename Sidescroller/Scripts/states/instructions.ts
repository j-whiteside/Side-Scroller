/// <reference path="../objects/button.ts" />
/// <reference path="../objects/debris.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/stars.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/paragraph.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
module states {
    

    export function instructionsState() {
        space.update();
    }

    // play state Function
    export function instructions() {
        var instructionsParagraph: objects.Paragraph;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);



        // Show Cursor
        stage.cursor = "default";

        // Display game title
        instructionsParagraph = new objects.Paragraph(stage.canvas.width / 2, 60, "The HMS Traveller has been ambushed by an unknown enemy. "
        +"\nThe crew managed to escape the ship before it blew up,"
	+"\nbut they are stranded in space.Your objective is to rescue as many "
	+"\nsurvivors as possible, while avoiding the debris."
        +"\nColliding with debris will cause you to lose one of your three lives."
        +"\nThe game is over when you lose all your lives."
        +"\nYou get points for staying alive, and for collecting survivors."
            + "\n\nYou get 100 points for rescuing a survivor, and get points simply for staying alive."
            + "\nRescuing a survivor also increases your score multiplier."
            + "\n Once you hit debris your multiplier will be reset to 0."
            + "\nGood luck space cadet.");
        game.addChild(instructionsParagraph);

        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 400, "play");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        stage.addChild(game);
    }
}