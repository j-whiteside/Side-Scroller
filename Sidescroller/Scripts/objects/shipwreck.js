/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Shipwreck Class
    var Shipwreck = (function () {
        function Shipwreck(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("shipwreck"));
            this.image.rotation = 90;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.scaleY = 4;
            this.image.scaleX = 4;
            this.image.regY = this.height / 2;
            this.image.y = this.stage.canvas.height / 2;

            this.dx = -5;

            game.addChild(this.image);
        }
        Shipwreck.prototype.update = function () {
            this.image.x += this.dx;
            if (this.image.x < -10) {
                this.destroy();
            }
        };

        Shipwreck.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Shipwreck;
    })();
    objects.Shipwreck = Shipwreck;
})(objects || (objects = {}));
//# sourceMappingURL=shipwreck.js.map
