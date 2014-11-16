/// <reference path="../objects/debris.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private ship: objects.Ship;
        private survivor: objects.Survivor;
        private debris = [];
        private scoreboard: objects.Scoreboard;

        constructor(ship: objects.Ship, survivor: objects.Survivor, debris, scoreboard: objects.Scoreboard) {
            this.ship = ship;
            this.survivor = survivor;
            this.debris = debris;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between ship and any Debris object
        private shipAndDebris(Debris: objects.Debris) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
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
        }

        // check collision between ship and survivor
        private shipAndsurvivor() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
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
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.DEBRIS_NUM; count++) {
                this.shipAndDebris(this.debris[count]);
            }
            this.shipAndsurvivor();
        }
    }
} 