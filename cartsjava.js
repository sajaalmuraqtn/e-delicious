

const carts_list = JSON.parse(localStorage.getItem("carts_list")) || [];
let counter=0;
const counter_list= JSON.parse(localStorage.getItem("carts_list")) || [];
let Total=0;
const drawCart = (carts_list,index) => {
    document.getElementById("cart_container").innerHTML += `
    <li class="sale" > <span> ${carts_list.name} </span> | ${carts_list.price} * ${carts_list.quantity}| <span>${carts_list.result}</span> <button class="delete" onclick="handleDelete(${index})">X</button>
    </li>
    `
}

const drawAllCarts = () => {
    console.log('hi');
    console.log(carts_list);
    document.getElementById("cart_container").innerHTML =" "
for (let i = 0; i < carts_list.length; i++) {
    drawCart(carts_list[i], i);
}
if (document.getElementById("cart_container").innerHTML ===" ") {
    document.getElementById("cart_container").innerHTML += `
         <h1 class="empty_message"> Your cart is empty. Let's fill it up with delicious food </h1>
    `
}
   showCount(counter);
   showTotal(Total);
}


const handleDelete=(index)=>{
 carts_list.splice(index, 1);
 counter_list.splice(index, 1);

 drawAllCarts();
 counter= localStorage.getItem("count");
 counter=counter-parseInt(carts_list[index].quantity);

 showCount(counter);
 console.log(localStorage.getItem("count"));

}

 const handleDeleteAll=()=>{
    if (document.getElementById("cart_container").innerHTML ===` <h1 class="empty_message"> Your cart is empty. Let's fill it up with delicious food </h1>` ) {
    window.alert("you can not clear...the cart is empty!!");
    }
    else{
        console.log("del");
        localStorage.setItem("count",0);
        document.getElementById("counter").innerHTML=` <span class="count1"> ${localStorage.getItem("count")}</span>`;
        localStorage.removeItem("carts_list");
        localStorage.removeItem("counter_list");
        
        document.getElementById("cart_container").innerHTML =` <h1 class="empty_message"> Your cart is empty. Let's fill it up with delicious food </h1>`;
    }
}

const showCount = (counter) =>{
      counter=0;
    for (let i = 0; i< carts_list.length; i++) {
       counter+=parseInt(carts_list[i].quantity);
    }
    console.log(localStorage.getItem("count"));

    localStorage.setItem("count",counter);
    document.getElementById("counter").innerHTML=` <span class="count1"> ${localStorage.getItem("count")}</span>`;
}

const showTotal = (Total) =>{
    Total=0;
  for (let i = 0; i< carts_list.length; i++) {
    Total+=parseInt(carts_list[i].result);
  }
  console.log(localStorage.getItem("count"));
  document.getElementById("TotalPrice").innerHTML=`Total Price : ${Total}`;
}