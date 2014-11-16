/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(ship, survivor, clouds, scoreboard) {
            this.clouds = [];
            this.ship = ship;
            this.survivor = survivor;
            this.clouds = clouds;
            this.scoreboard = scoreboard;
        }
        // Utility method - Distance calculation between two points
        Collision.prototype.distance = function (p1, p2) {
            var result = 0;
            var xPoints = 0;
            var yPoints = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        };

        // check collision between ship and any cloud object
        Collision.prototype.shipAndCloud = function (cloud) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = cloud.image.x;
            p2.y = cloud.image.y;

            if (this.distance(p1, p2) < ((this.ship.height / 2) + (cloud.height / 2))) {
                while (this.ship.invincible == false) {
                    createjs.Sound.play("thunder");
                    this.scoreboard.lives -= 1;
                    this.scoreboard.multiplier = 1;
                    cloud.reset();
                    this.ship.noDamage();
                }
            }
        };

        // check collision between ship and survivor
        Collision.prototype.shipAndsurvivor = function () {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = this.survivor.image.x;
            p2.y = this.survivor.image.y;
            if (this.distance(p1, p2) < ((this.ship.height / 2) + (this.survivor.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += (this.scoreboard.multiplier * 100);
                this.scoreboard.survivors += 1;
                this.scoreboard.multiplier += 0.5;
                this.survivor.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.shipAndCloud(this.clouds[count]);
            }
            this.shipAndsurvivor();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
