

function Main(name, email, address, amount) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.amount = amount;
}

function submit() {

    let name = document.getElementById("name").value;
    console.log(name);
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;

    let user = new Main(name, email, address, +amount)
    console.log("user:", user);

    localStorage.setItem("user", JSON.stringify(user));
}