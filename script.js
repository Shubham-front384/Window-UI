const menuData = document.querySelector(".right-click");

document.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  menuData.style.display = "block";
  menuData.style.top = event.clientY + "px";
  menuData.style.left = event.clientX + "px";
});

document.addEventListener("click", () => {
  menuData.style.display = "none";
});
