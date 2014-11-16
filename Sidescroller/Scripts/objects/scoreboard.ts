module objects {
    // Scoreboard Class
    export class Scoreboard {
        stage: createjs.Stage;
        game: createjs.Container;
        lives: number;
        score: number;
        survivors: number;
        multiplier: number;
        highestMultiplier: number;
        label: createjs.Text;
        labelText: string = "";
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.lives = constants.SHIP_LIVES;
            this.score = 0;
            this.survivors = 0;
            this.multiplier = 1;
            this.highestMultiplier = 1;
            this.label = new createjs.Text(this.labelText, constants.LABEL_FONT, constants.LABEL_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;

            game.addChild(this.label);
        }

        update() {
            this.labelText = "Lives: " + this.lives.toString() + " Score: " + Math.round(this.score).toString() + " Multiplier: " + this.multiplier.toString();
            this.label.text = this.labelText;
        }

        destroy() {
            game.removeChild(this.label);
        }
    }
} 