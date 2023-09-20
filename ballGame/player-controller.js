AFRAME.registerComponent("player-controller", {
  init(){
    document.addEventListener("click", () => {
        const newBall = this.el.sceneEl.components.pool_ball.requestEntity();
        newBall.play();
        const implulseV = new CANNON.Vec3();
        this.el.sceneEl.camera.getWorldDirection(impulseV);
        newBall.body.position.copy(this.el.object3D.position);
        newBall.body.position.x += 0.3;
        newBall.body.position.y -= 0.2;
        
        newBall.body.applyImpulse(
            impulseV.scale(90), new CANNON.Vec3().copy(newBall.body.position)
        );
      
        console.log(newBallewBall.body);
    });
  }
});