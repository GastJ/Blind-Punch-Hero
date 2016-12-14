// Début de la Leap Loop

Leap.loop(function(frame){
	if(!frame.valid){
		return;
	}
	frame.hands.forEach(function(hand){
		// Dessine la paume
		let palmPos = to2D(hand.stabilizedPalmPosition, frame);
		/*console.log(hand.type);*/

		if(hand.type == "left"){
			/*player.position.x = palmPos.x;*/
			player.position.y = palmPos.y;
		}

		if(hand.type == "right"){

		}
	});
}) // Fin de la Leap Loop

