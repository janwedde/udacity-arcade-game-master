// Create enemies our player must avoid
class Enemy {
  constructor(x, y, speed) {
    // Determine x and y axis as well as speed of enemies
    this.x = x;
    this.y = y;
    // Randomize speed of enemy
    this.speed = 100 + Math.random() * speed;
    // Set image of enemy
    this.sprite = "images/enemy-bug.png";
  }
  // Update the enemy's position
  update(dt) {
    // Multiply enemy movement on the x-axis by dt paramter
    this.x += this.speed * dt;
    // Reset enemey position if off canvas
    if (this.x > 505) {
      this.x = -100;
    }
    // Check for collision between enemy and player
    if (player.x < this.x + 80 && player.x + 80 > this.x &&
        player.y < this.y + 30 && player.y + 30 > this.y) {
          player.x = 200;
          player.y = 400;
          alert("Try again!");
    }
  }
  // Render enemy to screen
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Create player who has to avoid the enemies
class Player {
  constructor(x, y) {
    // Determine position on x and y axis
    this.x = x;
    this.y = y;
    //Set image of player
    this.player = "images/char-boy.png";
  }
  // Update players position
  update(dt) {
    // Multiply with dt-parameter
    this.x * dt;
    this.y * dt;
    // Stops player to leave canvas
    if (this.x <= 0) {
      this.x = 0;
    }
    if (this.x > 400) {
      this.x = 400;
    }
    if (this.y <= 0) {
      this.y = 0;
    }
    if (this.y > 400) {
      this.y = 400;
    }
    // Reset positon after delay to starting point
    if (this.y <= 0) {
      setTimeout(() => {
        this.x = 202;
        this.y = 405;
      }, 200);
    }
  }
  // Render player to playing field
  render() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
  }
  // Handle player input
  handleInput(keyAction) {
    switch (keyAction) {
      case "left":
        this.x -= 100;
        break;
      case "right":
        this.x += 100;
        break;
      case "up":
        this.y -= 80;
        break;
      case "down":
        this.y += 80;
    }
  }
}
// Set up all enemies in an array
let allEnemies = [];
// Set up enemy starting points on y-axis
const enemyPositionY = [63, 63, 147, 147, 230];
const enemyPositionX = Math.floor(Math.random() * 298) + 1;
// Create enemies at starting point and push them to array
enemyPositionY.forEach((positionY) => {
  enemy = new Enemy(enemyPositionX, positionY, 200);
  allEnemies.push(enemy);
})
// Create new player at starting point
const player = new Player(202, 405);
// Listens for key presses and sends input
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: "left",
        38: "up",
        39: "right",
        40: "down"
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
