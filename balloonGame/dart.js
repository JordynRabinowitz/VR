// let aiming = false;
// let touchStartX, touchStartY;
// let deltaX, deltaY;
// const releaseSpeed = 0.1; // Adjust the release speed as needed

// // Get the A-Frame canvas
// const canvas = document.querySelector("a-scene").canvas;
// const dart = document.querySelector("#dart");

// dart.addEventListener("click", () => {
//     console.log("aim true");
//     if (!aiming) {
//       // Enter aim mode when tapping the dart object
//       aiming = true;
//       touchStartX = 0;
//       touchStartY = 0;
//       deltaX = 0;
//       deltaY = 0;
//     }
//   });

// canvas.addEventListener("touchstart", (event) => {
//   if(aiming){
//     const touch = event.touches[0];
//     touchStartX = touch.clientX;
//     touchStartY = touch.clientY;

//     // Prevent the default touchmove behavior
//     event.preventDefault();
//   }
  
// });

// canvas.addEventListener("touchmove", (event) => {
//   if (aiming) {
//     const touch = event.touches[0];
//     const touchEndX = touch.clientX;
//     const touchEndY = touch.clientY;

//     deltaX = touchEndX - touchStartX;
//     deltaY = touchEndY - touchStartY;

//     // Adjust dart's position and rotation based on touch movement
//     // (You may need to fine-tune these values)
//     dart.object3D.position.x += deltaX * 0.001;
//     dart.object3D.position.y += deltaY * 0.001;
//     dart.object3D.rotation.y += deltaX * 0.01;
//     dart.object3D.rotation.x += deltaY * 0.01;

//     // Update the starting position for the next calculation
//     touchStartX = touchEndX;
//     touchStartY = touchEndY;

//     // Prevent the default touchmove behavior
//     event.preventDefault();
//   }
// });

// canvas.addEventListener("touchend", () => {
//   if (aiming) {
//     aiming = false;

//     // Calculate velocity based on the aiming direction and release speed
//     const velocityX = deltaX * releaseSpeed;
//     const velocityY = deltaY * releaseSpeed;

//     // Log the calculated velocity before releasing
//     console.log("Release Velocity X:", velocityX, "Release Velocity Y:", velocityY);

//     // Apply the velocity to the dart's dynamic body
//     dart.setAttribute("dynamic-body", {
//       linearVelocity: { x: velocityX, y: velocityY, z: 0 },
//     });
//   }
// });

let balls = 20
AFRAME.registerComponent("ball-return", {
  init() {
    this.el.addEventListener("collide", ({ detail }) => {
      console.log(detail.body.el);
    });
  },
  tick() {
      if(this.el.body.position.y < 2 && balls > 0) {
    
          balls = balls - 1
          document.querySelector("#balls").setAttribute('text','value: Balls left = '+balls)
          if(balls <= 0){
            document.querySelector("#balls").setAttribute('text','value: Game Over :(')
            return 0;
          }
          this.el.sceneEl.components.pool__dart.returnEntity(this.el);
      }
    
    }
  });
 
