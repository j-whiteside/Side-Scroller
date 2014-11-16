/// <reference path="../objects/button.ts" />
/// <reference path="../objects/debris.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/stars.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/shipwreck.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
var states;
(function (states) {
    function playState() {
        space.update();
        survivor.update();
        ship.update();
        this.scoreboard.score += (this.scoreboard.multiplier * 1);

        for (var count = 0; count < constants.DEBRIS_NUM; count++) {
            debris[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            ship.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    // play state Function
    function play() {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        survivor = new objects.Survivor(stage, game);
        ship = new objects.Ship(stage, game);

        // Show Cursor
        stage.cursor = "none";

        for (var count = 0; count < constants.DEBRIS_NUM; count++) {
            debris[count] = new objects.Debris(stage, game, count);
        }

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(ship, survivor, debris, scoreboard);

        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map
