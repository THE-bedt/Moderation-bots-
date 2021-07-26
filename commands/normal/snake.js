const SnakeGame = require('snakecord');
const snakeGame = new SnakeGame({
  title: 'Snake Game',
  color: "GREEN",
  timestamp: false,
  gameOverTitle: "Game Over"
});

module.exports = {
    name: "snake",
    aliases: ['snake'],
    usage: "!snake",
    description: "snake game",
    run: async (client, message, args) => {
       return snakeGame.newGame(message);
    }
}