﻿/// <reference path="constants.ts" />
/// <reference path="managers/asset.ts" />
/// <reference path="objects/debris.ts" />
/// <reference path="objects/survivor.ts" />
/// <reference path="objects/stars.ts" />
/// <reference path="objects/shipwreck.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/ship.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/paragraph.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="managers/collision.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/instructions.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/gameover.ts" />
// Mail Pilot Version 11 - Added basic state machine structure - Added Button and Label classes
// Changed online repo
var stage;
var game;

var space;
var ship;
var survivor;
var debris = [];
var scoreboard;

var collision;

var playAgain;
var playButton;
var instructionsButton;
var quitButton;

var currentState;
var currentStateFunction;

var myAudio = new Audio('assets/sounds/Tron.wav');

// Preload function - Loads Assets and initializes game;
function preload() {
    managers.Assets.init();
    managers.Assets.loader.addEventListener("complete", init);
}

// init called after Assets have been loaded.
function init() {
    stage = new createjs.Stage(document.getElementById("canvas"));
    myAudio.play();

    //createjs.Sound.play("music");
    stage.enableMouseOver(30);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    optimizeForMobile();

    currentState = constants.MENU_STATE;
    changeState(currentState);
}

// Add touch support for mobile devices
function optimizeForMobile() {
    if (createjs.Touch.isSupported()) {
        createjs.Touch.enable(stage);
    }
}

// Game Loop
function gameLoop(event) {
    currentStateFunction();
    myAudio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    stage.update();
}

function changeState(state) {
    switch (state) {
        case constants.MENU_STATE:
            // instantiate menu screen
            currentStateFunction = states.menuState;
            states.menu();
            break;

        case constants.PLAY_STATE:
            // instantiate play screen
            currentStateFunction = states.playState;
            states.play();
            break;

        case constants.GAME_OVER_STATE:
            currentStateFunction = states.gameOverState;

            // instantiate game over screen
            states.gameOver();
            break;

        case constants.INSTRUCTIONS_STATE:
            // instantiate menu screen
            currentStateFunction = states.instructionsState;
            states.instructions();
            break;
    }
}
//# sourceMappingURL=game.js.map
