function to2D(leapPoint, frame){
	let iBox = frame.interactionBox;
	let normalizedPoint = iBox.normalizePoint(leapPoint, true);

	return{
		x : normalizedPoint[0] * w * 7,
		y : (1 - normalizedPoint[1]) * h

	};
}

function drawCirle(x, y, size, color = 'black'){
	game.canvas.getContext.beginPath();

	ctx.arc(x, y, size, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();
}
