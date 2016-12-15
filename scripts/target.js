function createTarget(){
  let target = game.add.sprite(w/1.3, h/2, "target");
  game.physics.enable(target, Phaser.Physics.ARCADE);
  target.body.drag.set(100);
  target.body.setSize(200,200, 10, 10);
  target.body.collideWorldBounds = true;
  target.body.gravity.y = 0;
  target.anchor.set(0.5,0.5);
  game.camera.deadzone = new Phaser.Rectangle(50, 250, 100, 100);
  target.scale.x= 0.5;
  target.scale.y= 0.5;


  target.update = function(){

  };
  return target;
}