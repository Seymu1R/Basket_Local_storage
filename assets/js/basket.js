"use strict";


let basketElement = document.querySelector(".basket-content");

let basket = JSON.parse(localStorage.getItem("basket"));
 let  openDisable=(e)=>{
  let inputEdit =
  e.target.parentElement.parentElement.querySelector("#input-count");

   inputEdit.removeAttribute("disabled");

 }

let editItem = (e, id) => {
  
  let basketedit = JSON.parse(localStorage.getItem("basket"));
  let inputEdit =
  e.target.parentElement.parentElement.querySelector("#input-count");

  
    for (let item of basketedit) {
      if (item.productId == id) {
        item.count = inputEdit.value;

        localStorage.setItem("basket", JSON.stringify(basketedit));
        let totalNum=e.target.parentElement.parentElement.parentElement.querySelector("#total-num");
        totalNum.innerText=item.count*item.productP;
        

        
      }
    }
  
};

let removeItem = (e) => {
  let basketarr = JSON.parse(localStorage.getItem("basket"));
  let removedElemet =
    e.target.parentElement.parentElement.querySelector(".id-span").innerText;

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
          <h6> COUNT: <input onchange="editItem(event,${item.productId})" class=" w-25" type="number" disabled id="input-count" min="o" value="${
            item.count
          }" > </h6>
        </div>
        <div class="col-lg-1">
        <button onclick="openDisable(event)"  class="btn btn-primary" ><i class="fa-solid fa-pen-to-square"></i></button>
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

showCount();
