/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ship Class
    var Ship = (function () {
        function Ship(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.shipAtlas, "straight");
            this.image.x = 50;
            this.image.scaleX = 2;
            this.image.scaleY = 2;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.invincible = false;
            this.image.alpha = 1;
            game.addChild(this.image);
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        Ship.prototype.noDamage = function () {
            this.invincible = true;
            for (var i = 0; i < 6; i++) {
                setTimeout(this.invincibilityFlash, 500);
            }
            this.invincible = false;
        };

        Ship.prototype.invincibilityFlash = function () {
            if (this.image.alpha == 1)
                this.image.alpha = 0.5;
            else
                this.image.alpha = 1;
        };

        Ship.prototype.update = function () {
            this.image.y = this.stage.mouseY;
        };

        Ship.prototype.destroy = function () {
            this.engineSound.stop();
            game.removeChild(this.image);
        };
        return Ship;
    })();
    objects.Ship = Ship;
})(objects || (objects = {}));
//# sourceMappingURL=ship.js.map
