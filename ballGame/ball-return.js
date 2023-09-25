let balls = 10
AFRAME.registerComponent("ball-return", {
  tick() {
      if(this.el.body.position.y < -10) {
        if(balls > 0){
          this.el.sceneEl.components.pool__ball.returnEntity(this.el);
          balls = balls - 1
          document.querySelector("#balls").setAttribute('text','value: Balls left = '+balls)
        }
        else{
          document.querySelector("#balls").setAttribute('text','value: Game Over :(')
        }
      
      }
    }
  });

// let score = 0;
// let hit = false;
// let resetId = 0;
// on($("#weapon"),'collide',(e)=>{
//     const ball = $(pool__ball);
//     if(e.detail.body.id === ball.body.id && !hit) {
//         hit = true;
//         score = score + 1;
//         clearTimeout(resetId);
//         resetId = setTimeout(resetBall,2000);
//     }
// });

// setTimeout(resetBall,3000);

// on($("#weapon"),'collide',(e)=>{
//   const ball = $(pool__ball);
//   if(e.detail.body.id === ball.body.id && !hit) {
//       $("#score").setAttribute('text','value','Score '+score)
//   }
// });