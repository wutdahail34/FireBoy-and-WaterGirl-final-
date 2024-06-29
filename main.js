import GameStart from './scenes/GameStart.js';
import Choose from './scenes/Choose.js';
import Level1 from './scenes/Level1.js';
import Level2 from './scenes/Level2.js';
import GameOver from './scenes/GameOver.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [GameStart, Choose, Level1, Level2, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    }
};

const game = new Phaser.Game(config);
