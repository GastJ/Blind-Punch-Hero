let w = window.innerWidth;
let h = window.innerHeight;
let game = new Phaser.Game(w, h, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render});
let player = 0;
let sky = null;

function preload() {

	game.load.image("gameBg","assets/background1.jpg", w, h);
    game.load.spritesheet("player", "assets/Taya.png", 165, 140);
    game.load.image("obstacle1", "assets/spike1.png", 100, 800);
    game.load.image("obstacle2", "assets/spike2.png", 100, 800);
    game.load.spritesheet("enemy", "assets/bullet.png", 280, 150, 2);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE); 
	game.renderer.clearBeforeRender = false;
	game.renderer.roundPixels = true;
	game.world.setBounds(0, 0, w*7, h);
	// fond
    sky = game.add.tileSprite(0, 0, w, h, 'gameBg');
    sky.fixedToCamera = true;
    // Joueur
    player = createPlayer();
    // Ennemi
    enemy = createEnemy(-550, 2562, 310);
    // Obstacle
    obstacleTab1 = [
    // En bas
    shortObstacle(300, 100, w/2.5, h/1.11),
    shortObstacle(300, 100, w/1.5, h/1.11),
    shortObstacle(300, 100, w/1.1, h/1.11),
    shortObstacle(300, 100, w*1.2, h/1.11),
    shortObstacle(300, 100, w*1.45,h/1.11),
    // En haut
    shortObstacle(300, 100, w/2.5, h/9.5).angle += 180,
    shortObstacle(300, 100, w/1.5, h/9.5).angle += 180,
    shortObstacle(300, 100, w/1.1, h/9.5).angle += 180,
    shortObstacle(300, 100, w*1.2, h/9.5).angle += 180,
    shortObstacle(300, 100, w*1.45,h/9.5).angle += 180
    ]
    obstacleTab2 = [
    // En bas
    longObstacle(50, 500, w/1.89, h/2.2),
    longObstacle(50, 500, w/0.95, h/2.2),
    // En haut
    longObstacle(50, 500, w/1.27, h/1.9).angle += 180
    ]
}

function collisionHandler(player, obstacleTab1, obstacleTab2, enemy){
		player.kill();
}

function update() {
	game.physics.arcade.collide(player, enemy, collisionHandler);
	game.physics.arcade.collide(player, obstacleTab1, collisionHandler, null, this);
	game.physics.arcade.collide(player, obstacleTab2, collisionHandler, null, this);
	// Camera fond
    sky.tilePosition.x = -(game.camera.x * 1.0);
}

function render() {
	/*game.debug.body(player);*/
	/*let zone = game.camera.deadzone;
	game.context.fillStyle = 'rgba(255,0,0,0.6)';
    game.context.fillRect(zone.x, zone.y, zone.width, zone.height);*/

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);
}