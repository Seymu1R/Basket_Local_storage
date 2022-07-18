"use strict";


let basketElement = document.querySelector(".basket-content");

let basket = JSON.parse(localStorage.getItem("basket"));
let editItem = (e, id) => {
  e.preve;
  let basketedit = JSON.parse(localStorage.getItem("basket"));

  let inputEdit =
    e.target.parentElement.previousElementSibling.firstElementChild
      .firstElementChild;

  inputEdit.removeAttribute("disabled");

  if (inputEdit.getAttribute("disabled") == null) {
    for (let item of basketedit) {
      if (item.productId == id) {
        item.count = inputEdit.value;

        localStorage.setItem("basket", JSON.stringify(basketedit));

        break;
      }
    }
  }
};

let removeItem = (e) => {
  let basketarr = JSON.parse(localStorage.getItem("basket"));
  let removedElemet =
    e.target.parentElement.parentElement.firstElementChild.firstElementChild
      .firstElementChild.innerHTML;

  let result = basketarr.find((item) => item.productId === removedElemet);

  let index = basketarr.indexOf(result);

  if (index > -1) {
    // only splice array when item is found
    basketarr.splice(index, 1); // 2nd parameter means remove one item only
  }
  e.target.parentElement.parentElement.parentElement.remove();
  localStorage.setItem("basket", JSON.stringify(basketarr));

  showCount();
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
        <div class="col-lg-1">
          <h6>${item.productN}</h6>
        </div>
        <div class="col-lg-2">
          <h6>PRICE: <span>${item.productP}</span>AZN</h6>
        </div>
        
        <div class="col-lg-3">
          <h6> COUNT: <input  class=" w-25" type="number" disabled id="input-count" value="${
            item.count
          }" > </h6>
        </div>
        <div class="col-lg-1">
        <button onclick=editItem(event,${
          item.productId
        }) class="btn btn-primary" ><i class="fa-solid fa-pen-to-square"></i></button>
      </div>
        <div class="col-lg-1">
          <button onclick=removeItem(event) class="btn btn-danger" ><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="col-lg-2">
          <h6 id="total" >TOTAL: <span id="total-num" >${
            item.count * item.productP
          }</span>AZN</h6>
        </div>
      </div>
    </div>
  
      `;

      
  });
let showCount = () => {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let basketLength = basket.length;
  document.querySelector("#basket-count-2").innerHTML = basketLength;
};

var reaload = function () {
  window.location.reload();
};
let showShopingtotal = ()=>{
  let basket = JSON.parse(localStorage.getItem("basket"));
 for (let item of basket) {
  let sum = (item.count)*item.productP;
  let sumShoping = 0;
  sumShoping+=sum;
  console.log(sumShoping);
  
 }

}
createContent();
showCount();
