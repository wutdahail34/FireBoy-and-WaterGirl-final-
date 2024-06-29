export default class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: "firstlevel" });
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
                "LEVEL1",
                45
            )
            .setOrigin(0.5);
        this.add
            .bitmapText(
                this.center_width,
                this.center_height + 50,
                "arcade",
                "Press SPACE to go to the Second Level!",
                15
            )
            .setOrigin(0.5);

        this.input.keyboard.on("keydown-SPACE", this.startLevel2, this);
    }

    startLevel2() {
        this.scene.start("secondlevel");
    }
}
