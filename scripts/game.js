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
    game.load.image("target", "assets/cible.png", 200, 200);
}

function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE); 
	game.renderer.clearBeforeRender = false;
	game.renderer.roundPixels = true;
	game.world.setBounds(0, 0, w, h);
	// fond
    sky = game.add.tileSprite(0, 0, w, h, 'gameBg');
    sky.fixedToCamera = true;
    // Joueur
    player = createPlayer();
    // Cible
    target = createTarget();
    // Ennemi
    enemy = createEnemy(-400, 1000, 300);
    /*for (var i = 0; i < 4; i++) {
    	setInterval(createEnemy(-400, game.rnd.integerInRange(1200, 2000), game.rnd.integerInRange(100, 700)), 2000);
    }*/
    // Obstacle
    obstacleTab1 = [
    // En bas
    shortObstacle(-300, 300, 100, w/2.5, h/1.11),
    shortObstacle(-300, 300, 100, w/1.5, h/1.11),
    shortObstacle(-300, 300, 100, w/1.1, h/1.11),
    shortObstacle(-300, 300, 100, w*1.2, h/1.11),
    shortObstacle(-300, 300, 100, w*1.45,h/1.11),
    // En haut
    shortObstacle(-300, 300, 100, w/2.5, h/9.5).angle += 180,
    shortObstacle(-300, 300, 100, w/1.5, h/9.5).angle += 180,
    shortObstacle(-300, 300, 100, w/1.1, h/9.5).angle += 180,
    shortObstacle(-300, 300, 100, w*1.2, h/9.5).angle += 180,
    shortObstacle(-300, 300, 100, w*1.45,h/9.5).angle += 180
    ]
    obstacleTab1 = game.add.group();
    obstacleTab1.enableBody = true;

    for (var i = 0; i < obstacleTab1.length; i++) {
    	var obstacleTab1Group = obstacleTab1.create(300,100,"obstacle1");
    }
    obstacleTab2 = [
    // En bas
    longObstacle(-300, 50, 500, w/1.27, h/1.9),
    longObstacle(-300, 50, 500, w/0.755, h/1.9),
    // En haut
    longObstacle(-300, 50, 500, w/0.95, h/1.9).angle += 180
    ]
}

function collisionHandler(player, obstacleTab1, obstacleTab2, enemy){
		player.kill();
		if(enemy.y == 0){
			enemy.kill()
		}
}

function update() {
	/*game.physics.arcade.collide(player, enemy, collisionHandler, null, this);
	game.physics.arcade.collide(player, obstacleTab1, collisionHandler, null, this);
	game.physics.arcade.collide(player, obstacleTab2, collisionHandler, null, this);*/
	/*game.physics.arcade.collide(enemy, collisionHandler, null, this);*/
	// Camera fond
	sky.tilePosition.x -= 4;
}

function render() {
	/*game.debug.body(player);*/
	/*let zone = game.camera.deadzone;
	game.context.fillStyle = 'rgba(255,0,0,0.6)';
    game.context.fillRect(zone.x, zone.y, zone.width, zone.height);*/

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);
}