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
