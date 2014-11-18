/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/stars.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/debris.ts" />
/// <reference path="../objects/shipwreck.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function instructionsButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.INSTRUCTIONS_STATE;
        changeState(currentState);
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    function menuState() {
        space.update();
    }
    states.menuState = menuState;

    function menu() {
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
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
