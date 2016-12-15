function createPlayer(){
	let player = game.add.sprite(150, 300, "player");
	game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.drag.set(100);
    player.body.maxVelocity.set(300);
    player.body.setSize(155,125, 10, 10 );
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 0;
    player.anchor.set(0.5,0.5);
    game.camera.follow(player);
    game.camera.deadzone = new Phaser.Rectangle(50, 250, 100, 100);
    player.scale.x= 0.5;
    player.scale.y= 0.5;
    tween = game.add.tween(player);
    tween.to({y: [h/15, h/1.1, 300] }, 10000, "Linear");
    tween.start();
   	/*let move = player.animations.add('move');*/

	player.update = function(){ 
        	tween.start();   
    };
	return player;
}