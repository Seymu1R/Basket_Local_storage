"use strict";
let btns = document.querySelectorAll(".btn");
let basketContent = document.getElementById("basket-action");
//create empty array localstorage
if (localStorage.getItem("basket") === null) {
  localStorage.setItem("basket", JSON.stringify([]));
}
//selecting  item  adding basket
for (const btn of btns) {
  btn.addEventListener("click", (e) => {
    let productName =
      e.target.previousElementSibling.previousElementSibling.innerText;
    let productImg =
      e.target.parentElement.previousElementSibling.firstElementChild.src;
    let productPrice =
      e.target.previousElementSibling.firstElementChild.innerText;
    let productid = e.target.parentElement.parentElement.parentElement.id;

    let basket = JSON.parse(localStorage.getItem("basket"));
    let result = basket.find(object => object.productId === productid);
    if (result === undefined) {
      let productData = {
        productId: productid,
        productN: productName,
        productI: productImg,
        productP: productPrice,
        count: 1,
      };
      basket.push(productData);
    } else {
      result.count++;
    }

    localStorage.setItem("basket", JSON.stringify(basket));

    showCount();
  });
}
// show count item count of basket
const showCount = () => {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let basketLength = basket.length;
  document.querySelector("#basket-count").innerHTML = basketLength;
  
};
showCount();
