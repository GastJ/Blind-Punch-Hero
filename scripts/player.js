function createPlayer(){
	let player = game.add.sprite(640,298,"player");
	game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.drag.set(100);
    player.body.maxVelocity.set(1000);
    player.body.setSize(60,55, 0, 0 );
    player.body.collideWorldBounds = true;
    player.body.bounce.y = 1.2;
    player.body.gravity.y = 0;
    player.anchor.set(0.5,0.5);
    game.camera.follow(player);
    player.scale.x=1;
    var move = player.animations.add('move');

	player.update = function(){
        var right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        if(right.isDown){
            player.body.velocity.x = 300;
            player.animations.play('move', 8, true);
        }
    };
	return player;
}