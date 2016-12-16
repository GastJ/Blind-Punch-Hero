function createEnemy(vitesse, positionX, positionY){
	let enemy = game.add.sprite(positionX, positionY, "enemy");
	let enemies = game.add.group();
	game.physics.enable(enemy, Phaser.Physics.ARCADE);
    enemy.body.drag.set(100);
    enemy.body.maxVelocity.set(1000);
    enemy.body.setSize(200,125, 10, 10 );
    enemy.body.collideWorldBounds = true;
    enemy.anchor.set(0.5,0.5);
    enemy.scale.x = -0.5;
    enemy.scale.y= 0.5;
    let move = enemy.animations.add('move');
    enemy.animations.play('move', 2, true);
    
}

function createEnemies(){
	for(let y = 0; y < 4; y++){
		for(let x = 0; x < 10; x++){
			let enemy = enemies.create(4000, 2000, "enemy");
			enemy.anchor.setTo(0.5, 0.5);
		}
	}
}
    enemy.update = function(){
    	enemy.body.velocity.x = vitesse;
    }

	return enemy;
