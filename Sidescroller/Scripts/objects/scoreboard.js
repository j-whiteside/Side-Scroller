﻿var objects;
(function (objects) {
    // Scoreboard Class
    var Scoreboard = (function () {
        function Scoreboard(stage, game) {
            this.labelText = "";
            this.stage = stage;
            this.game = game;
            this.lives = constants.SHIP_LIVES;
            this.score = 0;
            this.survivors = 0;
            this.multiplier = 1;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }
        Scoreboard.prototype.update = function () {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + Math.round(this.score).toString() + " Multiplier: " + this.multiplier.toString();
            this.label.text = this.labelText;
        };

        Scoreboard.prototype.destroy = function () {
            game.removeChild(this.label);
        };
        return Scoreboard;
    })();
    objects.Scoreboard = Scoreboard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map
