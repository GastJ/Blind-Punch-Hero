let w = window.innerWidth;
let h = window.innerHeight;
let game = new Phaser.Game(w, h, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render});
let player = 0;
let sky = null;

function preload() {

	game.load.image("gameBg","assets/simple_background.jpg", w, h);
    game.load.spritesheet("player", "assets/Taya.png", 165, 140);
    game.load.image("obstacle1", "assets/spike1.png", 100, 800);
    game.load.image("obstacle2", "assets/spike2.png", 100, 800);
    game.load.spritesheet("enemy", "assets/bird.png", 85, 85, 11);
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
    enemy = createEnemy(-550, 2562, 320);
    // Obstacle
    obstacleTab1 = [
    // En bas
    createObstacle1(300, 100, 500, 560),
    createObstacle1(300, 100, 980, 560),
    createObstacle1(300, 100, 1460, 560),
    // En haut
    createObstacle1(300, 100, 500, 100).angle += 180,
    createObstacle1(300, 100, 980, 100).angle += 180,
    createObstacle1(300, 100, 1460, 100).angle += 180
    ]
    obstacleTab2 = [
    // En bas
    createObstacle2(50, 500, 740, 285),
    createObstacle2(50, 500, 1700, 285),
    // En haut
    createObstacle2(50, 500, 1220, 350).angle += 180
    ]
}

function update() {
	// Camera fond
    sky.tilePosition.x = -(game.camera.x * 1.4);
}

function render() {
	/*game.debug.body(player);*/
	/*let zone = game.camera.deadzone;
	game.context.fillStyle = 'rgba(255,0,0,0.6)';
    game.context.fillRect(zone.x, zone.y, zone.width, zone.height);*/

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);
}