const allBtn = document.getElementsByClassName("add-btn");
let count = 0;
for(const btn of allBtn){
    btn.addEventListener("click",function(e){
       count = count +1; 

       const placeName = e.target.parentNode.childNodes[1].innerText;
       let price = e.target.parentNode.childNodes[3].childNodes[1].innerText;

       price = parseInt(price);

       const selectedContainer = document.getElementById("selected-place-container");

       const li = document.createElement("li");

       const p = document.createElement("p");
       p.innerText = placeName;
       const p2 = document.createElement("p");
       p2.innerText = price;

       e.target.parentNode.parentNode.style.backgroundColor="gray"

       li.appendChild(p);
       li.appendChild(p2);

       const budget = document.getElementById("budget").innerText;
       const convertBudget = parseInt(budget);
       if(convertBudget-price<0){
        alert("budget end")
        return;
       }
       document.getElementById("budget").innerText=convertBudget-price;
       selectedContainer.appendChild(li);

       //    total const
    //    let totalPrice = document.getElementById("total-cost").innerText;
    //    totalPrice = parseInt(totalPrice);
    //    totalPrice = price + totalPrice;
    //    console.log(totalPrice)

    // total cost
       totalCost("total-cost",price);
    //    grand total
       grandTotal();
       setInnerText("cart-count",count);
    })
}

function setInnerText(id, value){
    document.getElementById(id).innerText=value;
}

function grandTotal(category){
    let totalPrice = document.getElementById('total-cost').innerText;
    totalPrice = parseInt(totalPrice);
    // totalPrice = value + totalPrice;

    if(category == "bus"){
        setInnerText("grand-total",totalPrice+100);
    }else if(category=="train"){
        setInnerText("grand-total",totalPrice-200);
    }else if(category=="flight"){
        setInnerText("grand-total",totalPrice+500);
    }else{
        setInnerText('grand-total',totalPrice);
    }
}

function totalCost(id,value){
    let totalPrice = document.getElementById(id).innerText;
    totalPrice = parseInt(totalPrice);
    totalPrice = value + totalPrice;

    if(totalPrice<=900){
        setInnerText(id,totalPrice);
    }
}