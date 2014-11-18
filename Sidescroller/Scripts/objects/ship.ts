/// <reference path="../managers/asset.ts" />
module objects {
    // Ship Class
    export class Ship {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        invincible: boolean;
        constructor(stage: createjs.Stage, game: createjs.Container) {
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
        }

        

        update() {
            this.image.y = this.stage.mouseY;
        }

        destroy() {
            game.removeChild(this.image);
        }
    }
} 