/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/stars.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
module states {
    export function playButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }

    export function instructionsButtonClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }

    export function menuState() {
        space.update();
    }

    export function menu() {
        

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        
        

        // Show Cursor
        stage.cursor = "default";

        // Display game title
        var title = new createjs.Bitmap(managers.Assets.loader.getResult("title"));
        title.x = 260;
        title.y = 50;
        game.addChild(title);

        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "play");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Play Button
        playButton = new objects.Button(stage.canvas.width / 2, 380, "instructions");
        game.addChild(playButton);
        playButton.addEventListener("click", instructionsButtonClicked);

        stage.addChild(game);
    }
} 
