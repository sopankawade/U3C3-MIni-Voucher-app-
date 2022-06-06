

let balance = document.getElementById("balance");
let userData = JSON.parse(localStorage.getItem("user"));
balance.innerText = userData.amount;

let purchaseVoucher = JSON.parse(localStorage.getItem("purchase"))
console.log(purchaseVoucher);

    let container = document.getElementById("purchased_vouchers");

    purchaseVoucher.forEach(function (el){
        let div = document.createElement("div");
        div.setAttribute("class", "voucher");

        let img = document.createElement("img");
        img.src = el.image;

        let h3 = document.createElement("h3");
        h3.innerText = el.name;

        let h31 = document.createElement("h3");
        h31.innerText = el.price;

        div.append(img, h3, h31);
        container.append(div);
    })
 