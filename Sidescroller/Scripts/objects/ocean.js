﻿/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Space Class
    var Space = (function () {
        function Space(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("space"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dy = 5;

            game.addChild(this.image);
        }
        Space.prototype.update = function () {
            this.image.y += this.dy;
            if (this.image.y >= 0) {
                this.reset();
            }
        };

        Space.prototype.reset = function () {
            this.image.y = -960;
        };

        Space.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Space;
    })();
    objects.Space = Space;
})(objects || (objects = {}));
//# sourceMappingURL=ocean.js.map
