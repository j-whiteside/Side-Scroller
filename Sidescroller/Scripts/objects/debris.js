/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Debris class
    var Debris = (function () {
        function Debris(stage, game, debris) {
            this.stage = stage;
            this.game = game;
            if (debris == 0)
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("debris1"));
            else if (debris == 1)
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("debris2"));
            else
                this.image = new createjs.Bitmap(managers.Assets.loader.getResult("debris3"));

            this.image.scaleX = 2;
            this.image.scaleY = 2;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();

            game.addChild(this.image);
        }
        Debris.prototype.update = function () {
            this.image.x += this.dx;
            this.image.y += this.dy;
            if (this.image.x < -300) {
                this.reset();
            }
        };

        Debris.prototype.reset = function () {
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.dx = -(Math.floor(Math.random() * 5 + 5));
            this.dy = Math.floor(Math.random() * -3) + Math.floor(Math.random() * 3);
            this.image.x = (this.stage.canvas.width) + 300;
        };

        Debris.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Debris;
    })();
    objects.Debris = Debris;
})(objects || (objects = {}));
//# sourceMappingURL=debris.js.map
