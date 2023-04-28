
const ITEMS = [
    {
        name: "Caramel Donuts",
        price: 8,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVN7veI1dg8jHaYTop3eDq0Yc5dMMxwSDAg&usqp=CAU"
    },
    {
        name: "Shrimps Rice",
        price: 12,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyagjDR_8ZtOz0Ld3-t6gU864UYkVSOZVjRA&usqp=CAU"
    },
    {
        name: "Vegetable Pizza",
        price: 17,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-W7rSbzbGvZaOtaGxWIYBLb1tXKODQ-AbNXRKROGvfYuQZxwCAuJd4YvYwJ7yyB6u-kg&usqp=CAU"
    },
    {
        name: "Cheese Burger",
        price: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxqr5fFArpcOkI1tS0qlx8duVAQHfGZXKAw&usqp=CAU"
    },
    {
        name: "Italian Pasta",
        price: 23,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajO4Kkch5Jeh45DX58l0W95GRrdDnTQqcuA&usqp=CAU"
    },
    {
        name: "Beef Samosa",
        price: 14,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgazfkInfSJXYnVjs9WlEDJwVSBYf_QELovw&usqp=CAU"
    }
];
const carts_list=[]; //cart list define
const mainMenu= document.getElementById('main');

const count=localStorage.getItem("count"); //counter local storage
let counter=0;




for (let index = 0; index < ITEMS.length; index++) {
    mainMenu.innerHTML+=`
   <button onclicK=(addToMenu(${index})) class="food"><div > 
    <img src=" ${ITEMS[index].image}"alt="${ITEMS[index].name}" height="150px">
    <span class="name_price"> ${ITEMS[index].name} ${ITEMS[index].price}$</span>
</div> <button/>
    `
}

const addToMenu=(index)=>{
    let quantity=window.prompt("How many item you want to add"); //quantity
     if(quantity==null){
        quantity=0;
     }
     else{
     parseInt(quantity);
     parseInt(counter);
     counter=counter+parseInt(quantity);
    //  localStorage.setItem("count",counter);
    showCount(counter);
    }
     const result=quantity*ITEMS[index].price;
     const cart={ name:ITEMS[index].name,  // object of carts
     price:ITEMS[index].price,
     quantity:parseInt(quantity), 
     result:result};
     console.log("add");
     const oldCarts = JSON.parse(localStorage.getItem("carts_list")) || []; //old carts 
     const CartsArr = [...oldCarts, cart];
     localStorage.setItem("carts_list", JSON.stringify(CartsArr));

    console.log(carts_list);
    showCount(counter);

}
const showCount = (counter) =>{
    counter=0;
    const counter_list= JSON.parse(localStorage.getItem("carts_list")) || [];
    for (let index = 0; index < counter_list.length; index++) {
        counter+=parseInt(counter_list[index].quantity);
        console.log("show");
       console.log(count);

    }
    localStorage.setItem("count",counter);
    document.getElementById("counter").innerHTML=` <span class="count1"> ${localStorage.getItem("count")}</span>`;
}