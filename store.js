let btn = document.getElementsByClassName("btn");
let names = document.getElementsByClassName("name");
let prices = document.getElementsByClassName("price");
let pros = document.getElementsByClassName("pro");
let clear = document.getElementById("clear");
let items = []
let total = document.getElementById("total")

for(let i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        let prc = Number(prices[i].innerHTML.replace("$", ""))
        console.log(typeof prc)

        if(pros[i].innerHTML == "Promotion: Yes") {
            prc -= (prc / 100) * 15
        }

        if(items.length >= 4) {
            prc -= (prc / 10)
        }

        items.push(prc)

        let amount = 0

        for(j in items) {
            amount += items[j]
        }

        total.innerHTML = "Total: " + amount + "$"
    }
}