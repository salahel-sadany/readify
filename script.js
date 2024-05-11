const btn = document.querySelector(".close-icon");
const bg = document.querySelector(".bg-sign");
const account = document.querySelector(".user-nav__account-text");
const hearts = document.querySelectorAll(".card__icon");

btn.onclick = () => bg.classList.remove("active");
account.onclick = () => bg.classList.add("active");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("fav");
  });
});
