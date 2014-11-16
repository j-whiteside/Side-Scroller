/// <reference path="../constants.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/stars.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    function gameOverState() {
        space.update();
    }
    states.gameOverState = gameOverState;

    // Restart Game when Try Again Button is clicked
    function playAgainClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playAgainClicked = playAgainClicked;

    function quitButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }
    states.quitButtonClicked = quitButtonClicked;

    // Game Over Scene
    function gameOver() {
        var gameOverLabel;
        var finalScoreLabel;
        var finalScore;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameOverLabel = new objects.Label(stage.canvas.width / 2, 40, "GAME OVER");
        game.addChild(gameOverLabel);

        // Display Final Score Label
        finalScoreLabel = new objects.Label(stage.canvas.width / 2, 120, "FINAL SCORE");
        game.addChild(finalScoreLabel);

        // Display Final Score
        finalScore = new objects.Label(stage.canvas.width / 2, 160, Math.round(scoreboard.score).toString());
        game.addChild(finalScore);

        // Display Try Again Button
        playAgain = new objects.Button(410, 400, "playAgain");
        game.addChild(playAgain);
        playAgain.addEventListener("click", playAgainClicked);

        // Display Menu Button
        quitButton = new objects.Button(610, 400, "quit");
        game.addChild(quitButton);
        quitButton.addEventListener("click", quitButtonClicked);

        stage.addChild(game);
    }
    states.gameOver = gameOver;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map
