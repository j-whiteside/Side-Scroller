/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/survivor.ts" />
/// <reference path="../objects/ship.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private ship: objects.Ship;
        private survivor: objects.Survivor;
        private clouds = [];
        private scoreboard: objects.Scoreboard;

        constructor(ship: objects.Ship, survivor: objects.Survivor, clouds, scoreboard: objects.Scoreboard) {
            this.ship = ship;
            this.survivor = survivor;
            this.clouds = clouds;
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

        // check collision between ship and any cloud object
        private shipAndCloud(cloud: objects.Cloud) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
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
                createjs.Sound.play("yay");
                this.scoreboard.score += (this.scoreboard.multiplier * 100);
                this.scoreboard.survivors += 1;
                this.scoreboard.multiplier += 0.5;
                this.survivor.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.CLOUD_NUM; count++) {
                this.shipAndCloud(this.clouds[count]);
            }
            this.shipAndsurvivor();
        }
    }
} 