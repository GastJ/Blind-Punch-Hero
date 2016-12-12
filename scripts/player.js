function createPlayer(){
	let player = game.add.sprite(640,298,"player");
	game.physics.enable(player, Phaser.Physics.ARCADE);
    player.body.drag.set(100);
    player.body.maxVelocity.set(1000);
    player.body.setSize(155,125, 10, 10 );
    player.body.collideWorldBounds = true;
    player.body.bounce.y = 1.2;
    player.body.gravity.y = 0;
    player.anchor.set(0.5,0.5);
    game.camera.follow(player);
    player.scale.x= 0.5;
    player.scale.y= 0.5;
   	let move = player.animations.add('move');

	player.update = function(){
        let right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        let left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        let up = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        let down = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        if(right.isDown){
            player.body.velocity.x = 500;
            player.animations.play('move', 8, true);
        }
        if(left.isDown){
            player.body.velocity.x = -500;
            player.animations.play('move', 8, true);
        }
        if(up.isDown){
            player.body.velocity.y = -200;
            player.animations.play('move', 8, true);
        }
        if(down.isDown){
            player.body.velocity.y = 200;
            player.animations.play('move', 8, true);
        }
       	else {
            player.animations.stop('move', 8);
        }
    };
	return player;
}