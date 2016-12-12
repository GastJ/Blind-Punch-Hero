let w = window.innerWidth;
let h = window.innerHeight;
let game = new Phaser.Game(w, h, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render});
function preload() {

	console.log("test");
	game.load.image("gameBg","assets/background.png", w, h);
}


function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE); 
	// fond
    game.add.tileSprite(0,0,w,h,'gameBg');
}

function update() {
}

function render() {

}