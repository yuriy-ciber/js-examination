import { glide } from "./slider";
import { useMap } from "./map";
document.addEventListener("DOMContentLoaded", () => {
  const $burger = document.querySelector(".header__burger");
  const $menu = document.querySelector(".header__menu");
  const $line = document.querySelector(".header__burger-line");
  const $link = document.querySelector(".header__link");
  const $list = document.querySelector(".header__list");
  const $body = document.getElementsByTagName("body");
  console.log($body);
  // console.log(event);
  const addActive = () => {
    $burger.classList.toggle("header__burger--active");
    $line.classList.toggle("header__burger-line--active");
    $menu.classList.toggle("header__menu--active");
    $body.classList.toggle("body__lock");

    //   console.log(event);
  };
  $burger.onclick = addActive;

  const removeActive = () => {
    $burger.classList.remove("header__burger--active");
    $line.classList.remove("header__burger-line--active");
    $menu.classList.remove("header__menu--active");
    console.log(event);
  };
  $list.onclick = removeActive;
});
