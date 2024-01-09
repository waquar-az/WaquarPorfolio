document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.ull');

  menuToggle.addEventListener('click', function () {
    menuList.classList.toggle('show');
  });
});
