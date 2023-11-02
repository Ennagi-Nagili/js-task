let btn = document.getElementsByClassName("btn");
let names = document.getElementsByClassName("name");
let prices = document.getElementsByClassName("price");
let pros = document.getElementsByClassName("pro");
let clear = document.getElementById("clear");
let items = [];
let total = document.getElementById("total");
let amount = 0;
let realAmount = 0;
let count = 0;

for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        let prc = Number(prices[i].innerHTML.replace("$", ""))

        realAmount += prc;
        count++;
        sessionStorage.setItem("amount", realAmount);
        sessionStorage.setItem("count", count);

        if(pros[i].innerHTML == "Promotion: Yes") {
            prc *= 0.85
        }

        if(items.length >= 4) {
            prc *= 0.9
        }

        items.push(prc)

        let amount = 0;

        for(j in items) {
            amount += items[j]
        }

        total.innerHTML = "Total: " + amount + "$"
    }
}

clear.onclick = function() {
    amount = 0;
    count = 0;
    total.innerHTML = "Total: " + amount + "$";
    sessionStorage.setItem("amount", realAmount);
    sessionStorage.setItem("count", count);
}