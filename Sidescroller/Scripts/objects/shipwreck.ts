/// <reference path="../managers/asset.ts" />
module objects {
    // Shipwreck Class
    export class Shipwreck {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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

        update() {
            this.image.x += this.dx;
            if (this.image.x < -10) {
                this.destroy();
            }
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}