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

const loadPage = () => {
  loadMouseFollower();
  loadEventListeners();
};

document.addEventListener("DOMContentLoaded", loadPage);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hELGlDQUFpQyxjQUFjO0FBQy9DLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTFRYLVdlYnNpdGUvLi9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsb2FkTW91c2VGb2xsb3dlciA9ICgpID0+IHtcbiAgY29uc3QgbW91c2VGb2xsb3dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbW91c2UtZm9sbG93ZXJcIik7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgbW91c2VGb2xsb3dlci5zdHlsZS5sZWZ0ID0gYCR7ZXZlbnQuY2xpZW50WH1weGA7XG4gICAgbW91c2VGb2xsb3dlci5zdHlsZS50b3AgPSBgJHtldmVudC5jbGllbnRZfXB4YDtcbiAgfSk7XG59O1xuXG4vLyAjdG9kbzogYWRkIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHNjcm9sbCBzbyB0aGF0IHNjcm9sbC1zbmFwIHdvcmtzIHNtb290aGx5XG5jb25zdCBsb2FkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7fTtcblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGxvYWRNb3VzZUZvbGxvd2VyKCk7XG4gIGxvYWRFdmVudExpc3RlbmVycygpO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZFBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9