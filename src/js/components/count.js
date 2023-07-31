const minus = document.querySelector(".sleep__minus")
const plus = document.querySelector(".sleep__plus")
const minusguests = document.getElementById("minusguests")
const plusguests = document.getElementById("plusguests")


let nights = document.getElementById('nights')
let guests = document.getElementById('guests')
minus.addEventListener('click', function () {
  nights.textContent = parseInt(nights.textContent) - 1;
});

plus.addEventListener("click", function () {
  nights.textContent = parseInt(nights.textContent) + 1;

})

minusguests.addEventListener('click', function () {
  guests.textContent = parseInt(guests.textContent) - 1;
});

plusguests.addEventListener("click", function () {
  guests.textContent = parseInt(guests.textContent) + 1;

})


let date = new Date();
year = date.getFullYear()
month = date.getMonth() + 1;
day = date.getDate();
let headerday = document.querySelector(".header__day")
let headermounth = document.querySelector(".header__mounth")
let headeryear = document.querySelector(".header__year")

headerday.innerHTML = day
headermounth.innerHTML = '0' + month
headeryear.innerHTML = year
