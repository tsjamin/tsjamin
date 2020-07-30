// import React, { Component } from 'react';
// import paper from 'paper';
// export default class Cursor extends Component {

//     componentDidMount() {

//         console.log(this.cursorRef);


//         // set the starting position of the cursor outside of the screen
// let clientX = -100;
// let clientY = -100;
// const innerCursor =  this.cursorRef;

// const initCursor = () => {
//   // add listener to track the current mouse position
//   document.addEventListener("mousemove", e => {
//     clientX = e.clientX;
//     clientY = e.clientY;
//   });
  
//   // transform the innerCursor to the current mouse position
//   // use requestAnimationFrame() for smooth performance
//   const render = () => {
//     innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
//     // if you are already using TweenMax in your project, you might as well
//     // use TweenMax.set() instead
//     // TweenMax.set(innerCursor, {
//     //   x: clientX,
//     //   y: clientY
//     // });
    
//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);
// };

// initCursor();




// let lastX = 0;
// let lastY = 0;
// // let isStuck = false;
// // let showCursor = false;
// let group;
// //  stuckX, stuckY, fillOuterCursor;

// const initCanvas = () => {
//   const canvas = this.canvasRef;
//   const shapeBounds = {
//     width: 100,
//     height: 100
//   };
//   paper.setup(canvas);
//   const strokeColor = "rgba(0, 0, 0, 0.5)";
//   const strokeWidth = 1.5;
//   const segments = 20;
//   const radius = 25;
  
//   // we'll need these later for the noisy circle
// //   const noiseScale = 150; // speed
// //   const noiseRange = 4; // range of distortion
// //   let isNoisy = false; // state
  
//   // the base shape for the noisy circle
//   const polygon = new paper.Path.RegularPolygon(
//     new paper.Point(0, 0),
//     segments,
//     radius
//   );
//   polygon.strokeColor = strokeColor;
//   polygon.strokeWidth = strokeWidth;
//   polygon.smooth();
//   group = new paper.Group([polygon]);
//   group.applyMatrix = false;
  
// //   const noiseObjects = polygon.segments.map(() => new SimplexNoise());
// //   let bigCoordinates = [];
  
//   // function for linear interpolation of values
//   const lerp = (a, b, n) => {
//     return (1 - n) * a + n * b;
//   };
  
//   // function to map a value from one range to another range
//   const map = (value, in_min, in_max, out_min, out_max) => {
//     return (
//       ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
//     );
//   };
  
//   // the draw loop of Paper.js 
//   // (60fps with requestAnimationFrame under the hood)
//   paper.view.onFrame = event => {
//     // using linear interpolation, the circle will move 0.2 (20%)
//     // of the distance between its current position and the mouse
//     // coordinates per Frame
//     lastX = lerp(lastX, clientX, 0.5);
//     lastY = lerp(lastY, clientY, 0.5);
//     group.position = new paper.Point(lastX, lastY);
//   }
// }

// initCanvas();



//     }
//     render() {

      
//         return (
//             <>
//                       <div class="cursor  cursor--small" resize ref={(cursor) => { this.cursorRef = cursor; }}></div>
//       <canvas class="cursor  cursor--canvas grow" resize ref={(canvas) => { this.canvasRef = canvas; }}></canvas>
//             </>
//         )
//     }
// }
