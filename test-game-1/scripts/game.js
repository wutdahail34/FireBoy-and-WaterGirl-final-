import level1 from "./level1.js";


var config = {
  type: Phaser.AUTO,
  width: 500,
  height: 500,
  parent: "gameContainer",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: true,
    },
  },
  scene: [level1],
};




var game = new Phaser.Game(config);
