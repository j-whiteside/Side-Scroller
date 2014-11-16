/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Survivor Class
    var Survivor = (function () {
        function Survivor(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("survivor"));
            this.image.scaleX = 0.8;
            this.image.scaleY = 0.8;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            this.dx = -5;

            game.addChild(this.image);
        }
        Survivor.prototype.update = function () {
            this.image.x += this.dx;
            if (this.image.x < -10) {
                this.reset();
            }
        };

        Survivor.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = +this.stage.canvas.width;
        };

        Survivor.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Survivor;
    })();
    objects.Survivor = Survivor;
})(objects || (objects = {}));
//# sourceMappingURL=survivor.js.map
