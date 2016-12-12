let w = window.innerWidth;
let h = window.innerHeight;
let game = new Phaser.Game(w, h, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update, render: render});
let player = 0;
let sky = null;

function preload() {

	game.load.image("gameBg","assets/simple-background.jpg", w, h);
    game.load.spritesheet("player", "assets/PlayerSprite1.png", 64, 65, 8);

}


function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE); 
	game.renderer.clearBeforeRender = false;
	game.renderer.roundPixels = true;
	// fond
    sky = game.add.tileSprite(0,0,w,h,'gameBg');
    sky.fixedToCamera = true;
    // Joueur
    player = createPlayer();
}

function update() {
	// Camera fond
    sky.tilePosition.x = -(game.camera.x * 0.7);
}

function render() {
	game.debug.body(player);
}