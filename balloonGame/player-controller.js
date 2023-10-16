AFRAME.registerComponent("player-controller", {
    init() {
      document.addEventListener("click", () => {
        // get reference of the pool of objects from the aframe scene
        const newBall = this.el.sceneEl.components.pool__dart.requestEntity();
        // activate the entity we got
        // newBall.play();
        newBall.setAttribute('active', true);
        // create a vector to store the impulse direction and value
        const impulseV = new CANNON.Vec3();
        // take the forward direction of the camera and assign it's values to our impulse vector
        this.el.sceneEl.camera.getWorldDirection(impulseV);
        
        // Move the spawned ball to
        // newBall.body.position.copy(this.el.object3D.position);
        newBall.getAttribute('position').copy(this.el.object3D.position);
        newBall.getAttribute('position').x -= 0.3;
        newBall.getAttribute('position').y -= 0.2;
        
        const physicsBody = newBall.getAttribute('dynamic-body');
        physicsBody.applyImpulse(
          impulseV.scale(90),
          new CANNON.Vec3().copy(newBall.getAttribute('position'))
        );
        
        console.log(newBall.getAttribute('dynamic-body'));
        
      });
    }
  });