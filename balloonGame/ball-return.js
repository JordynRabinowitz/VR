let balls = 10
AFRAME.registerComponent("ball-return", {
  init() {
    this.el.addEventListener("collide", ({ detail }) => {
      console.log(detail.body.el);
    });
  },
  tick() {
      if(this.el.body.position.y < -10 && balls > 0) {
    
          balls = balls - 1
          document.querySelector("#balls").setAttribute('text','value: Balls left = '+balls)
          if(balls <= 0){
            document.querySelector("#balls").setAttribute('text','value: Game Over :(')
            return 0;
          }
          this.el.sceneEl.components.pool__ball.returnEntity(this.el);
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