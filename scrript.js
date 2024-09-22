const navMenu = document.getElementById("nav_menu");
const hamberIcon = document.getElementById("hamber_icon");
const selectedSatEl = document.getElementById("selected-seat");
const totalBookedEl = document.getElementById("total-booked");
const availableSeatEl = document.getElementById("available-seat");
const totalPriceEl = document.getElementById("total-price");
const couponInputEl = document.getElementById("coupon-field");
const couponBtnEl = document.getElementById("coupon-btn");
const defaultTextEl = document.getElementById("default-text");
const grandTotalEl = document.getElementById("grand-total");
const phoneNumberEl = document.getElementById("phone-number");
const nextBtnEl = document.getElementById("next-btn");

hamberIcon.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
  const value = event.innerText;
  if (selectedSeat.includes(value)) {
    return alert("Seat Alrady Booked");
  } else if (selectedSeat.length < 4) {
    event.classList.add("bg-[#1dd100]");
    event.classList.add("text-white");

    selectedSeat.push(event.innerText);
    totalBookedEl.innerText = selectedSeat.length;

    const availableSeatValue = parseFloat(availableSeatEl.innerText);
    const newAvailableSeatValue = availableSeatValue - 1;
    availableSeatEl.innerText = newAvailableSeatValue;

    defaultTextEl.classList.add("hidden");
    // console.log(availableSeatValue);

    selectedSatEl.innerHTML += `
  <li class='text-base font-normal flex justify-between'>
  <span>${event.innerText}</span>
  <span>Economy</span>
  <span>550</span>
  </li>
  `;

    totalPrice += 550;
    totalPriceEl.innerText = totalPrice.toFixed(2);

    if (selectedSeat.length > 3) {
      couponInputEl.removeAttribute("disabled");
      couponBtnEl.removeAttribute("disabled");
    }
  } else {
    return alert("Maximum seat Booked");
  }
}

document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponInputValue = couponInputEl.value;
  let couponSave = 0;
  if (couponInputValue !== "NEW15" && couponInputValue !== "Couple 20") {
    alert("Your Provided Coupon is not Valid");
  }
  if (couponInputValue === "NEW15") {
    couponSave = totalPrice * 0.15;
  } else if (couponInputValue === "Couple 20") {
    couponSave = totalPrice * 0.2;
  }

  const showCouponPriceEl = document.getElementById("show-coupon-price");
  showCouponPriceEl.innerHTML = `
                <p>Discount:</p>
              <p>
                <span>-BDT:</span>
                <span>${couponSave}</span>
              </p>
  `;

  const grandTotalValue = totalPrice - couponSave;
  grandTotalEl.innerText = grandTotalValue.toFixed(2);
});

phoneNumberEl.addEventListener("input", function (e) {
  const inputValue = e.target.value;
  if (inputValue.length > 10) {
    nextBtnEl.removeAttribute("disabled");
  }
});

document.getElementById("btn-continue").addEventListener("click", function () {
  window.location.reload();
});
