const menuList = document.querySelector(".menu__list");
console.log(menuList);

const button = document.querySelector(".menu__btn");
console.log(button);

const active = document.querySelector('.active');


button.addEventListener("click", () => {
  menuList.classList.toggle('menu-active');
  button.classList.toggle('active');
});


