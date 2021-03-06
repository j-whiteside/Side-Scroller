﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Stars Class
    export class Stars {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("stars"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = -5;

            game.addChild(this.image);
        }

        update() {
            this.image.x += this.dx;
            if (this.image.x >= 0) {
                this.reset();
            }
        }

        reset() {
            this.image.x = 10;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}