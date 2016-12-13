let w = window.innerWidth;
let h = window.innerHeight;
let game = new Phaser.Game(w, h, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render});
let player = 0;
let sky = null;

function preload() {

	game.load.image("gameBg","assets/simple-background.jpg", w, h);
    game.load.spritesheet("player", "assets/Taya.png", 165, 140, 8);

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
}

function update() {
	// Camera fond
    sky.tilePosition.x = -(game.camera.x * 1.4);
}

function render() {
	/*game.debug.body(player);*/
	let zone = game.camera.deadzone;
	game.context.fillStyle = 'rgba(255,0,0,0.6)';
    game.context.fillRect(zone.x, zone.y, zone.width, zone.height);

    game.debug.cameraInfo(game.camera, 32, 32);
    game.debug.spriteCoords(player, 32, 500);
}