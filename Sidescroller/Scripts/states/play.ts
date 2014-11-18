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
module states {
    export function playState() {
        space.update();
        survivor.update();
        ship.update();
        
        this.scoreboard.score += (this.scoreboard.multiplier *  1);

        
       

        for (var count = 0; count < constants.DEBRIS_NUM; count++) {
            debris[count].update();
        }

        constants.DIFFICULTY_TICKER += (1 / 60);
        if (constants.DIFFICULTY_TICKER > 30) {
            constants.DIFFICULTY_TICKER = 0;
            constants.DIFFICULTY_LEVEL++
            constants.DEBRIS_NUM++
            debris[constants.DIFFICULTY_LEVEL] = new objects.Debris(stage, game, count);
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

    // play state Function
    export function play(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        space = new objects.Space(stage, game);
        survivor = new objects.Survivor(stage, game);
        ship = new objects.Ship(stage, game);
        

        
        

        // Show Cursor
        stage.cursor = "none";

        // Create multiple DEBRISs
        for (var count = 0; count < constants.DEBRIS_NUM; count++) {
            debris[count] = new objects.Debris(stage, game, count);
        }

        
            

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        collision = new managers.Collision(ship, survivor, debris, scoreboard);

        stage.addChild(game);
    }
}