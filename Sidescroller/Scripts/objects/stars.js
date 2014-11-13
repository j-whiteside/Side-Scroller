/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Stars Class
    var Stars = (function () {
        function Stars(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("stars"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = -5;

            game.addChild(this.image);
        }
        Stars.prototype.update = function () {
            this.image.x += this.dx;
            if (this.image.x >= 0) {
                this.reset();
            }
        };

        Stars.prototype.reset = function () {
            this.image.x = 10;
        };

        Stars.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Stars;
    })();
    objects.Stars = Stars;
})(objects || (objects = {}));
//# sourceMappingURL=stars.js.map
