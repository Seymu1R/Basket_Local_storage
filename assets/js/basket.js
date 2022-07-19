"use strict";

let basketElement = document.querySelector(".basket-content");
let basket = JSON.parse(localStorage.getItem("basket"));
//method for disable or enable for change count
let openDisable = (e) => {
  
    let parent=e.target.parentElement.parentElement;
    
    if (e.target.classList.contains("fa-solid")) {
      parent = e.target.parentElement.parentElement.parentElement;
      
    }
   let inputEdit = parent.querySelector("#input-count");

  inputEdit.removeAttribute("disabled");
};
//edits for change count of products olso change total price of product and
let editItem = (e, id) => {
  let basketedit = JSON.parse(localStorage.getItem("basket"));
  let inputEdit = e.target.parentElement.parentElement.querySelector("#input-count");   

  if (inputEdit.value < 0) {
    inputEdit.value = 1;
    if ((inputEdit.value = 1)) {
      for (let item of basketedit) {
        if (item.productId == id) {
          item.count = inputEdit.value;

          localStorage.setItem("basket", JSON.stringify(basketedit));
          let totalNum =
            e.target.parentElement.parentElement.parentElement.querySelector(
              "#total-num"
            );
          totalNum.innerText = item.count * item.productP;
        }
      }
    }
  } else {
    for (let item of basketedit) {
      if (item.productId == id) {
        item.count = inputEdit.value;

        localStorage.setItem("basket", JSON.stringify(basketedit));
        let totalNum =
          e.target.parentElement.parentElement.parentElement.querySelector(
            "#total-num"
          );
        totalNum.innerText = item.count * item.productP;
      }
    }
  }
};
// method for  remove  adding items
let removeItem = (e) => {
  console.log(e.target);
  let basketarr = JSON.parse(localStorage.getItem("basket"));
  let parent = e.target.parentElement.parentElement;

  if (e.target.classList.contains("fa-trash")) {
    parent = e.target.parentElement.parentElement.parentElement;
  }

  let removedElemet = parent.querySelector(".id-span").innerText;

  let result = basketarr.find((item) => item.productId === removedElemet);

  let index = basketarr.indexOf(result);

  if (index > -1) {
    // only splice array when item is found
    basketarr.splice(index, 1); // 2nd parameter means remove one item only
  }
  parent.parentElement.remove();
  localStorage.setItem("basket", JSON.stringify(basketarr));
  showShopingtotal();
  basketLength();

  showCount();
};

//cotent adding dom
basket.forEach((item) => {
  basketElement.innerHTML += `
      <div class="container">
      <div class=" all row align-items-lg-center">
  
       <div class="col-lg-1">
          <h4>ID-<span class="id-span" >${item.productId}</span></h4>
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
          <h6> COUNT: <input onchange="editItem(event,${
            item.productId
          }),showShopingtotal(event)" class=" w-25" type="number" disabled id="input-count" min="o" value="${
    item.count
  }" > </h6>
        </div>
        <div class="col-lg-1">
        <button onclick="openDisable(event)"  class="btn btn-primary" ><i class="fa-solid fa-pen-to-square"></i></button>
      </div>
        <div class="col-lg-1">
          <button class="btn btn-danger" onclick="removeItem(event)">
            <i class="fa-solid fa-trash"></i>
          </button>
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
// method for showing
let showCount = () => {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let basketLength = basket.length;
  document.querySelector("#basket-count-2").innerHTML = basketLength;
};
// method for show total shoping price
let showShopingtotal = (e) => {
  let basket = JSON.parse(localStorage.getItem("basket"));
  let sumShoping = 0;
  for (let item of basket) {
    let sum = item.count * item.productP;
    sumShoping += sum;
    document.querySelector("#shoping-price").innerText = sumShoping;
  }
};

let basketLength = () => {
  let basket = JSON.parse(localStorage.getItem("basket"));
  if (basket.length === 0) {
    document.querySelector(".alert").classList.remove("d-none");
    document.querySelector(".sum").classList.add("d-none");
  }
};
basketLength();
showShopingtotal();

showCount();
