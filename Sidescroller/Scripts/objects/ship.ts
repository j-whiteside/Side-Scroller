/// <reference path="../managers/asset.ts" />
module objects {
    // Ship Class
    export class Ship {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        engineSound: createjs.SoundInstance;
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
            this.engineSound = createjs.Sound.play('engine', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }

        noDamage() {
            this.invincible = true;
            for(var i = 0; i < 6; i++)
            {
                setTimeout(this.invincibilityFlash, 500);
            }
            this.invincible = false;
        }

        invincibilityFlash() {
            if (this.image.alpha == 1)
                this.image.alpha = 0.5;
            else
                this.image.alpha = 1;
        }

        update() {
            this.image.y = this.stage.mouseY;
        }

        destroy() {
            this.engineSound.stop();
            game.removeChild(this.image);
        }
    }
} 