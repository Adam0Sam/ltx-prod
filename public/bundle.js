/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
const loadMouseFollower = () => {
  const mouseFollower = document.querySelector("#mouse-follower");

  window.addEventListener("mousemove", (event) => {
    mouseFollower.style.left = `${event.clientX}px`;
    mouseFollower.style.top = `${event.clientY}px`;
  });
};

// #todo: add event listeners for the scroll so that scroll-snap works smoothly
const loadEventListeners = () => {};

const loadBallAnimation = () => {
  const colors = ["#ff000080", "#ff77005e", "#ff0000", "#ff7700", "#930000"];
  const numSections = document.querySelectorAll("section").length;
  const avgBallSize = 10; // in rem
  // number of balls present in the page
  const numBalls = 100;
  const balls = [];

  for (let i = 0; i < numBalls; i++) {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.background = colors[Math.floor(Math.random() * colors.length)];
    ball.style.left = `${Math.floor(Math.random() * 100 * numSections)}vw`;
    ball.style.top = `${Math.floor(Math.random() * 100 * numSections)}vh`;
    ball.style.width = `${Math.random() * avgBallSize}rem`;
    ball.style.height = ball.style.width;

    balls.push(ball);
    document.body.append(ball);
  }

  const animationDuration = 2000; // (miliseconds)
  // Keyframes
  const yDisplacement = 110; // in rem
  const xDisplacement = 110; // in rem
  balls.forEach((ball, id) => {
    const to = {
      x: Math.random() * (id % 2 === 0 ? -xDisplacement : xDisplacement),
      y: Math.random() * yDisplacement,
    };

    ball.animate([{ transform: "translate(0, 0)" }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
      duration: (Math.random() + 1) * animationDuration, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    });
  });
};

const loadPage = () => {
  loadMouseFollower();
  loadEventListeners();
  loadBallAnimation();
};

document.addEventListener("DOMContentLoaded", loadPage);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hELGlDQUFpQyxjQUFjO0FBQy9DLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUE4QztBQUN2RSx3QkFBd0IsOENBQThDO0FBQ3RFLDBCQUEwQiw0QkFBNEI7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQztBQUNsQztBQUNBLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsOEJBQThCLElBQUksd0JBQXdCLEtBQUssT0FBTyxLQUFLLE9BQU87QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0xUWC1XZWJzaXRlLy4vanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbG9hZE1vdXNlRm9sbG93ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1vdXNlRm9sbG93ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21vdXNlLWZvbGxvd2VyXCIpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChldmVudCkgPT4ge1xuICAgIG1vdXNlRm9sbG93ZXIuc3R5bGUubGVmdCA9IGAke2V2ZW50LmNsaWVudFh9cHhgO1xuICAgIG1vdXNlRm9sbG93ZXIuc3R5bGUudG9wID0gYCR7ZXZlbnQuY2xpZW50WX1weGA7XG4gIH0pO1xufTtcblxuLy8gI3RvZG86IGFkZCBldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBzY3JvbGwgc28gdGhhdCBzY3JvbGwtc25hcCB3b3JrcyBzbW9vdGhseVxuY29uc3QgbG9hZEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge307XG5cbmNvbnN0IGxvYWRCYWxsQW5pbWF0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjb2xvcnMgPSBbXCIjZmYwMDAwODBcIiwgXCIjZmY3NzAwNWVcIiwgXCIjZmYwMDAwXCIsIFwiI2ZmNzcwMFwiLCBcIiM5MzAwMDBcIl07XG4gIGNvbnN0IG51bVNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInNlY3Rpb25cIikubGVuZ3RoO1xuICBjb25zdCBhdmdCYWxsU2l6ZSA9IDEwOyAvLyBpbiByZW1cbiAgLy8gbnVtYmVyIG9mIGJhbGxzIHByZXNlbnQgaW4gdGhlIHBhZ2VcbiAgY29uc3QgbnVtQmFsbHMgPSAxMDA7XG4gIGNvbnN0IGJhbGxzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1CYWxsczsgaSsrKSB7XG4gICAgY29uc3QgYmFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFsbC5jbGFzc0xpc3QuYWRkKFwiYmFsbFwiKTtcbiAgICBiYWxsLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCldO1xuICAgIGJhbGwuc3R5bGUubGVmdCA9IGAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCAqIG51bVNlY3Rpb25zKX12d2A7XG4gICAgYmFsbC5zdHlsZS50b3AgPSBgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAgKiBudW1TZWN0aW9ucyl9dmhgO1xuICAgIGJhbGwuc3R5bGUud2lkdGggPSBgJHtNYXRoLnJhbmRvbSgpICogYXZnQmFsbFNpemV9cmVtYDtcbiAgICBiYWxsLnN0eWxlLmhlaWdodCA9IGJhbGwuc3R5bGUud2lkdGg7XG5cbiAgICBiYWxscy5wdXNoKGJhbGwpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGJhbGwpO1xuICB9XG5cbiAgY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSAyMDAwOyAvLyAobWlsaXNlY29uZHMpXG4gIC8vIEtleWZyYW1lc1xuICBjb25zdCB5RGlzcGxhY2VtZW50ID0gMTEwOyAvLyBpbiByZW1cbiAgY29uc3QgeERpc3BsYWNlbWVudCA9IDExMDsgLy8gaW4gcmVtXG4gIGJhbGxzLmZvckVhY2goKGJhbGwsIGlkKSA9PiB7XG4gICAgY29uc3QgdG8gPSB7XG4gICAgICB4OiBNYXRoLnJhbmRvbSgpICogKGlkICUgMiA9PT0gMCA/IC14RGlzcGxhY2VtZW50IDogeERpc3BsYWNlbWVudCksXG4gICAgICB5OiBNYXRoLnJhbmRvbSgpICogeURpc3BsYWNlbWVudCxcbiAgICB9O1xuXG4gICAgYmFsbC5hbmltYXRlKFt7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoMCwgMClcIiB9LCB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3RvLnh9cmVtLCAke3RvLnl9cmVtKWAgfV0sIHtcbiAgICAgIGR1cmF0aW9uOiAoTWF0aC5yYW5kb20oKSArIDEpICogYW5pbWF0aW9uRHVyYXRpb24sIC8vIHJhbmRvbSBkdXJhdGlvblxuICAgICAgZGlyZWN0aW9uOiBcImFsdGVybmF0ZVwiLFxuICAgICAgZmlsbDogXCJib3RoXCIsXG4gICAgICBpdGVyYXRpb25zOiBJbmZpbml0eSxcbiAgICAgIGVhc2luZzogXCJlYXNlLWluLW91dFwiLFxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICBsb2FkTW91c2VGb2xsb3dlcigpO1xuICBsb2FkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgbG9hZEJhbGxBbmltYXRpb24oKTtcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGxvYWRQYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==