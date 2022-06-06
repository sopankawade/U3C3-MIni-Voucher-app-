

let userData = JSON.parse(localStorage.getItem("user"));
console.log("userData:", userData);

let wallet_balance = document.getElementById("wallet_balance");
wallet_balance.innerText = userData.amount;
//console.log("wallet_balance:", wallet_balance.innerText);

let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

async function voucher() {
    let res = await fetch(url);
    //console.log("res:", res);

    let data = await res.json();
    console.log("data:", data);
    let vouchers = data[0].vouchers;
    append(vouchers);
    //console.log("vouchers:", vouchers);
}
voucher();

function append(data) {
    let container = document.getElementById("voucher_list");

    data.forEach(function (el){
        let div = document.createElement("div");
        div.setAttribute("class", "voucher");

        let img = document.createElement("img");
        img.src = el.image;

        let h3 = document.createElement("h3");
        h3.innerText = el.name;

        let h31 = document.createElement("h3");
        h31.innerText = el.price;
        
        let btn = document.createElement("button");
        btn.innerText = "Buy Voucher";
        btn.setAttribute("class", "buy_voucher");
        btn.addEventListener("click", function(){
            buyVoucher(el);
        })

        div.append(img, h3, h31, btn);
        container.append(div);
    })


    function buyVoucher(el) {
            if(userData.amount>el.price){
                let purchase = JSON.parse(localStorage.getItem("purchase")) || [];
                console.log("purchase:", purchase);
                alert("Hurray! purchase successful");
                purchase.push(el);
                localStorage.setItem("purchase", JSON.stringify(purchase));
                wallet_balance.innerText = userData.amount-el.price;
                userData.amount = parseInt(userData.amount-el.price);
                localStorage.setItem("user", JSON.stringify(userData))
            }
            else{
                alert("Sorry! insufficient balance")
            }
    }

}