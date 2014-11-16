module managers {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "space", src: "assets/images/space.gif" },
        { id: "stars", src: "assets/images/stars.png" },
        { id: "survivor", src: "assets/images/survivor.png" },
        { id: "collision", src: "assets/sounds/explosion.wav" },
        { id: "points", src: "assets/sounds/point.wav" },
        { id: "title", src: "assets/images/SPACE-CADET.png" },
        { id: "play", src: "assets/images/Play.png" },
        { id: "playAgain", src: "assets/images/playAgain.png" },
        { id: "instructions", src: "assets/images/instructions.png" },
        { id: "debris1", src: "assets/images/debris1.png" },
        { id: "debris2", src: "assets/images/debris2.png" },
        { id: "debris3", src: "assets/images/debris3.png" },
        { id: "shipwreck", src: "assets/images/shipwreckClear.png" },
        { id: "quit", src: "assets/images/quit.png" }
    ];


    var shipSpriteSheet = {
        "images": ["assets/images/Arcade%20-%20Gradius%20IV%20Fukkatsu%20-%20Vic%20Viper.png"],
        "frames": [
            [5, 3, 40, 32],
            [44, 3, 40, 32],
            [83, 3, 40, 32],
            [121, 3, 41, 32],
            [161, 3, 40, 31],
            [200, 7, 41, 21],
            [240, 7, 42, 24],
            [282, 4, 43, 29],
            [324, 2, 41, 31]
        ],
        "animations": {
            "right3": [0],
            "right2": [1],
            "right1": [2],
            "right0": [3],
            "straight": [4],
            "left0": [5],
            "left1": [6],
            "left2": [7],
            "left3": [8]
        }
    }


    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static shipAtlas: createjs.SpriteSheet;

        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.shipAtlas = new createjs.SpriteSheet(shipSpriteSheet);
        }

    }
} 