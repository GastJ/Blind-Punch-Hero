function shortObstacle(longueur, hauteur, positionX, positionY){
	obstacle1 = game.add.sprite(positionX, positionY, "obstacle1");
	game.physics.enable(obstacle1, Phaser.Physics.ARCADE);
	obstacle1.enableBody = true;
	obstacle1.body.immovable = true;
	obstacle1.body.allowGravity = false;
	/*obstacle.body.velocity.x = vitesse;*/
	obstacle1.width = longueur;
	obstacle1.height = hauteur;
	obstacle1.anchor.set(0.5,0);

	return obstacle1;
}

function longObstacle(longueur, hauteur, positionX, positionY){
	obstacle2 = game.add.sprite(positionX, positionY, "obstacle2");
	game.physics.enable(obstacle2, Phaser.Physics.ARCADE);
	obstacle2.enableBody = true;
	obstacle2.body.immovable = true;
	obstacle2.body.allowGravity = false;
	obstacle2.width = longueur;
	obstacle2.height = hauteur;
	obstacle2.anchor.set(0.5,0);

	return obstacle2;
}