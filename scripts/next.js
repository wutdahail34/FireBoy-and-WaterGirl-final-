export default class NextLevel extends Phaser.Scene {
    constructor() {
      super({ key: "nextScenex" });
    }
  
    preload() {
      this.load.bitmapFont("arcade", "assets/arcade.png", "assets/arcade.xml");
    }

    init(data){
      this.hearts = data.hearts;
      this.previousScore = data.score || 0;

    }



  
    create() {




      this.width = this.sys.game.config.width;
      this.height = this.sys.game.config.height;
      this.center_width = this.width / 2;
      this.center_height = this.height / 2;
    
      this.cameras.main.setBackgroundColor(0x79c4eb);
    


      this.add
        .bitmapText(
          this.center_width,
          this.center_height - 50,
          "arcade",
          `Score: ${this.previousScore}`,
          25
        )
        .setOrigin(0.5);
  


      this.add
        .bitmapText(
          this.center_width,
          this.center_height,
          "arcade",
          "NEXT LEVEL",
          45
        )
        .setOrigin(0.5);


    
      this.add
        .bitmapText(
          this.center_width,
          this.center_height + 50,
          "arcade",
          "Press SPACE or Click to start!",
          15
        )
        .setOrigin(0.5);



    
        this.input.keyboard.on("keydown-SPACE", this.startNextLevel, this);
        this.input.keyboard.on("keydown-ENTER", this.startNextLevel, this);
        this.input.on("pointerdown", () => this.startNextLevel(), this);

    }



    
    startNextLevel() {

      this.registry.set("currentLevel", this.registry.get("currentLevel")+ 1 ); ;
      let nextLevel = this.registry.get("currentLevel");
      console.log(nextLevel);
      this.scene.start(`level${nextLevel}`, {hearts:this.hearts});

    }



  }
  