AFRAME.registerComponent("player-controller", {
    init() {
      document.addEventListener("click", () => {
        // get reference of the pool of objects from the aframe scene
        const newBall = this.el.sceneEl.components.pool__ball.requestEntity();
        // activate the entity we got
        newBall.play();
        // create a vector to store the impulse direction and value
        const impulseV = new CANNON.Vec3();
        // take the forward direction of the camera and assign it's values to our impulse vector
        this.el.sceneEl.camera.getWorldDirection(impulseV);
        
        // Move the spawned ball to
        newBall.body.position.copy(this.el.object3D.position);
        newBall.body.position.x -= 0.3;
        newBall.body.position.y -= 0.2;
        
        newBall.body.applyImpulse(
          impulseV.scale(90),
          new CANNON.Vec3().copy(newBall.body.position)
        );
        
        console.log(newBall.body);
        
      });
    }
  });