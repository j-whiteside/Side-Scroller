/// <reference path="../objects/debris.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />
var managers;
(function (managers) {
    // Collision Manager Class
    var Collision = (function () {
        function Collision(ship, survivor, debris, scoreboard) {
            this.debris = [];
            this.ship = ship;
            this.survivor = survivor;
            this.debris = debris;
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

        // check collision between ship and any Debris object
        Collision.prototype.shipAndDebris = function (Debris) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.ship.image.x;
            p1.y = this.ship.image.y;
            p2.x = Debris.image.x;
            p2.y = Debris.image.y;

            if (this.distance(p1, p2) < ((this.ship.height / 2) + (Debris.height / 2))) {
                createjs.Sound.play("collision");
                this.scoreboard.lives -= 1;
                this.scoreboard.multiplier = 1;
                Debris.reset();
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
                createjs.Sound.play("points");
                this.scoreboard.score += (this.scoreboard.multiplier * 100);
                this.scoreboard.survivors += 1;
                this.scoreboard.multiplier += 0.5;
                if (this.scoreboard.multiplier > this.scoreboard.highestMultiplier)
                    this.scoreboard.highestMultiplier = this.scoreboard.multiplier;
                this.survivor.reset();
            }
        };

        // Utility Function to Check Collisions
        Collision.prototype.update = function () {
            for (var count = 0; count < constants.DEBRIS_NUM; count++) {
                this.shipAndDebris(this.debris[count]);
            }
            this.shipAndsurvivor();
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map
