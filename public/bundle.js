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

const loadPage = () => {
  loadMouseFollower();
};

document.addEventListener("DOMContentLoaded", loadPage);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxjQUFjO0FBQ2hELGlDQUFpQyxjQUFjO0FBQy9DLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9MVFgtV2Vic2l0ZS8uL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxvYWRNb3VzZUZvbGxvd2VyID0gKCkgPT4ge1xuICBjb25zdCBtb3VzZUZvbGxvd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtb3VzZS1mb2xsb3dlclwiKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZXZlbnQpID0+IHtcbiAgICBtb3VzZUZvbGxvd2VyLnN0eWxlLmxlZnQgPSBgJHtldmVudC5jbGllbnRYfXB4YDtcbiAgICBtb3VzZUZvbGxvd2VyLnN0eWxlLnRvcCA9IGAke2V2ZW50LmNsaWVudFl9cHhgO1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICBsb2FkTW91c2VGb2xsb3dlcigpO1xufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZFBhZ2UpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9