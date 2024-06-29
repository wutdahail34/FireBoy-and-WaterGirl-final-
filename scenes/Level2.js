export default class Level2 extends Phaser.Scene {
    constructor() {
        super({ key: "secondlevel" });
    }

    create() {
        this.width = this.sys.game.config.width;
        this.height = this.sys.game.config.height;
        this.center_width = this.width / 2;
        this.center_height = this.height / 2;

        this.cameras.main.setBackgroundColor(0x87ceeb);

        this.add
            .bitmapText(
                this.center_width,
                this.center_height,
                "arcade",
                "LEVEL2",
                45
            )
            .setOrigin(0.5);
        this.add
            .bitmapText(
                this.center_width,
                this.center_height + 50,
                "arcade",
                "Press SPACE to go to Game Over!",
                15
            )
            .setOrigin(0.5);

        this.input.keyboard.on("keydown-SPACE", this.startGameOver, this);
    }

    startGameOver() {
        this.scene.start("gameover");
    }
}
