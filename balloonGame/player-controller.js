let balls = 20;

AFRAME.registerComponent("teleporter", {
  init: function () {
    document.addEventListener("click", () => {
      let ray = document.getElementById("ray").components.raycaster;
      console.log(ray, document.querySelector(".teleport-target"));
      const getHit = ray.getIntersection(
        document.querySelector(".teleport-target")
      );
      if (getHit) {
        console.log(getHit);
        this.el.object3D.position.x = getHit.point.x;
        this.els.object3D.position.z = getHit.point.z;
      } else {
        console.log(score);
        if (balls <= 0) return;
  
        else if(score >= 50){
          document.querySelector("#score").setAttribute('text','value: YOU WON AN OCTO!!!!');
          document.querySelector("#score").setAttribute('scale', '5 5 5');
          document.querySelector("#score").setAttribute('position', {x: -10, y: 5, z: -5});
          let prize = document.querySelector('#prize');
          prize.setAttribute('scale', '1 1 1');
          prize.setAttribute('position', {x: -7, y: 1.5, z: -5});
          document
          .querySelector("#balls")
          .setAttribute("text", "value: Game Over :(");
          return;
        }
        // get reference of the pool of objects from the aframe scene
        const newBall = this.el.sceneEl.components.pool__dart.requestEntity();
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

        balls = balls - 1;
        document
          .querySelector("#balls")
          .setAttribute("text", "value: Darts left = " + balls);
        if (balls <= 0) {
          document
            .querySelector("#balls")
            .setAttribute("text", "value: Game Over :(");
          return 0;
        }
        this.el.sceneEl.components.pool__dart.returnEntity(this.el);
      }
    });
  },
});
