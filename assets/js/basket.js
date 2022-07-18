"use strict";
let basketElement = document.querySelector(".basket-content");
let basket = JSON.parse(localStorage.getItem("basket"));
let removeItem = (e) => {
  let basketarr = JSON.parse(localStorage.getItem("basket"));
  let removedElemet =
    e.target.parentElement.previousElementSibling.previousElementSibling
      .previousElementSibling.previousElementSibling.previousElementSibling
      .firstElementChild.firstElementChild.innerHTML;
  let result = basketarr.find((item) => item.productId === removedElemet);

  let index = basketarr.indexOf(result);

  if (index > -1) {
    // only splice array when item is found
    basketarr.splice(index, 1); // 2nd parameter means remove one item only
  }
  e.target.parentElement.parentElement.parentElement.remove();
  localStorage.setItem("basket",JSON.stringify(basketarr))
};
basket.forEach((item) => {
  basketElement.innerHTML += `
    <div class="container">
    <div class=" all row align-items-lg-center">

     <div class="col-lg-1">
        <h4>ID-<span>${item.productId}</span></h4>
      </div>
      <div class="col-lg-1">
        <img
          src="${item.productI}"
          alt=""
        />
      </div>
      <div class="col-lg-2">
        <h4>${item.productN}</h4>
      </div>
      <div class="col-lg-2">
        <h4>PRICE: <span>${item.productP}</span>AZN</h4>
      </div>
      
      <div class="col-lg-3">
        <h4> COUNT: <input  class=" w-25" type="number" id="input-count" value="${item.count}" > </h4>
      </div>
      <div class="col-lg-1">
        <button onclick=removeItem(event) class="btn btn-danger" ><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="col-lg-2">
        <h4 id="total" >TOTAL: <span id="total-num" >100</span>AZN</h4>
      </div>
    </div>
  </div>

    `;
});
