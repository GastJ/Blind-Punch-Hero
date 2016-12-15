function createEnemy(vitesse, positionX, positionY){
	let enemy = game.add.sprite(positionX, positionY, "enemy");
	game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.body.drag.set(100);
    enemy.body.maxVelocity.set(1000);
    enemy.body.setSize(200,125, 10, 10 );
    enemy.body.collideWorldBounds = true;
    enemy.body.bounce.y = 1.2;
    enemy.body.gravity.y = 0;
    enemy.anchor.set(0.5,0.5);
    enemy.scale.x = -0.5;
    enemy.scale.y= 0.5;
    let move = enemy.animations.add('move');
    enemy.animations.play('move', 2, true);
    
    enemy.update = function(){
    	enemy.body.velocity.x = vitesse;
    }

	return enemy;
}