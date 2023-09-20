AFRAME.registerComponent("ball-return", {
    tick() {
      if(this.el.body.position.y < -10) {
        this.el.sceneEl.components.pool__ball.returnEntity(this.el);
      }
    }
  });