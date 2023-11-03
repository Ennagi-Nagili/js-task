document.getElementById("button1").onclick = function() {register()}
document.getElementById("button2").onclick = function() {delivery()}
document.getElementById("button3").onclick = function() {window.location.href = "store.html"}
document.getElementById("button4").onclick = function() {table()}
document.getElementById("button5").onclick = function() {temperature()}
document.getElementById("button6").onclick = function() {discount()}
document.getElementById("button7").onclick = function() {ship()}
document.getElementById("button8").onclick = function() {number()}
document.getElementById("button9").onclick = function() {printer()}
document.getElementById("button10").onclick = function() {deposit()}
document.getElementById("button11").onclick = function() {loyalty()}
document.getElementById("button12").onclick = function() {sumDigits()}
document.getElementById("button13").onclick = function() {atm()}

//Task1
function register() {
    let firstName = prompt("Please enter your first name");
    let lastName = prompt("Please enter your last name");
    let email = prompt("Please enter your email");
    window.alert("*" + email + "*" + " - " + "*" + lastName + "*" + " - " + "*" + firstName + "*");
}

//Task2
function delivery() {
    let distance = Number(prompt("Please enter distance"));

    if(isNaN(distance) || distance < 0) {
        window.alert("Please enter valid distance");
    }

    else {
        let cost = distance * 0.25 + 5
        window.alert("Delivery cost is " + cost);
    }
}

//Task4
function table() {
    let count = Number(prompt("Please enter number of guests"));

    if(isNaN(count) || count < 0) {
        window.alert("Please enter valid number");
    }

    else {
        if(count >= 0 && count <= 2) {
            window.alert("Take small table")
        }

        else if(count > 2 && count <= 4) {
            window.alert("Take medium table")
        }

        else if(count > 4 && count <= 8) {
            window.alert("Take large table")
        }

        else {
            let eights = Math.floor(count / 8)

            if(count % 8 > 0 && count % 8 <= 2) {
                window.alert("Take " + eights + " large and 1 small tables")
            }
    
            else if(count % 8 > 2 && count % 8 <= 4) {
                window.alert("Take " + eights + " large and 1 medium tables")
            }
    
            else if((count % 8 > 4 && count % 8 <= 8)) {
                window.alert("Take " + (eights + 1) + " large table")
            }

            else {
                window.alert("Take " + eights + " large table")
            }
        }
    }
}

//Task5
function temperature() {
    let temperature1 = Number(prompt("Please enter temperature"));
    let temperature2 = Number(prompt("Please enter temperature"));
    let temperature3 = Number(prompt("Please enter temperature"));
    let temps = [temperature1, temperature2, temperature3];

    for(let i = 0; i < temps.length-1; i++) {
        if(temps[i] < temps[i+1]) {
            let a = temps[i+1]
            temps[i+1] = temps[i]
            temps[i] = a
        }
    }

    let result = ""

    for(i in temps) {
        if(i < temps.length-1) {
            result += temps[i] + ", "
        } 
        else {
            result += temps[i]
        }
    }

    window.alert(result)
}

//Task6
function discount() {
    let name = prompt("Enter your name");
    let age = Number(prompt("Enter your age please"))
    let count = Number(sessionStorage.getItem("count"))
    let amount = Number(sessionStorage.getItem("amount"))

    if(isNaN(age)) {
        window.alert("Please enter valid age")
    }

    else if(age >= 60 || (count >= 4 && amount >= 100)) {
        window.alert("You received discount")
    }

    else {
        window.alert("You can't receive discount")
    }
}

//Task7
function ship() {
    let length = Number(prompt("Enter length"));
    let width = Number(prompt("Enter width"));
    let height = Number(prompt("Enter height"));
    let weight = Number(prompt("Enter weight"));
    let distance = Number(prompt("Enter distance"));

    if(isNaN(length) || isNaN(width) || isNaN(height) || isNaN(weight) || isNaN(distance)) {
        window.alert("Please enter valid values")
    } else {
        if(length + width + height <= 150) {
            if(length <= 100 && width <= 100 && height <= 100) {
                if(weight <= 10) {
                    if(distance >= 3 && distance <= 10) {
                        window.alert("It is available for shipping")
                    } else {
                        window.alert("Distance must be between 3km and 10km")
                    }
                } else {
                    window.alert("Weight can not exceed 10 kg")
                }
            } else {
                window.alert("None of the measurements can exceed 100 cm")
            }
        } else {
            window.alert("Sum of length, width and height can not exceed 150 cm")
        }
    }
}

//Task 8
let num;

function number() {
    num = Number(prompt("Enter number"));

    if(isNaN(num) || num < 10 || num > 99) {
        window.alert("Please enter valid number");
    } else {
        window.alert(numCheck(Math.floor(num / 10), 1) + " " + numCheck(num % 10, 2))
    }
}

function numCheck(number, place) {
    if(num >= 20) {
        if(place == 1) {
            switch(number) {
                case 2: return "Twenty"
                case 3: return "Thirty"
                case 4: return "Forty"
                case 5: return "Fifty"
                case 6: return "Sixty"
                case 7: return "Seventy"
                case 8: return "Eighty"
                case 9: return "Ninety"
            }
        } else {
            switch(number) {
                case 1: return "one"
                case 2: return "two"
                case 3: return "three"
                case 4: return "four"
                case 5: return "five"
                case 6: return "six"
                case 7: return "seven"
                case 8: return "eight"
                case 9: return "nine"
                case 0: return ""
            }
        }
    } else if(place == 2) {
        switch(number) {
            case 0: return "Ten"
            case 1: return "Eleven"
            case 2: return "Twelve"
            case 3: return "Thirteen"
            case 4: return "Fourteen"
            case 5: return "Fifteen"
            case 6: return "Sixteen"
            case 7: return "Seventeen"
            case 8: return "Eighteen"
            case 9: return "Nineteen"
        }
    } else {
        return ""
    }
}

//Task 9
function printer() {
    let num = Number(prompt("Enter number"))

    if(isNaN(num)) {
        window.alert("Please enter valid number")
    } else {
        for(let i = 1; i <= 1000; i++) {
            if(i % num == 0) {
                console.log(i)
            }
        }
    }
}

//Task 10
function deposit() {
    let amount = Number(prompt("Enter amount of money"))
    let year = Number(prompt("Enter duration year"))
    let percent = Number(prompt("Enter % per year"))

    if(isNaN(amount) || isNaN(year) || isNaN(percent)) {
        window.alert("Please enter valid number")
    } else {
        for(let i = 0; i < year; i++) {
            amount += (amount / 100) * percent
        }
    }

    window.alert("Amount of savings after deposit expire: " + amount)
}

//Task11
function loyalty() {
    let orders = Number(prompt("Enter order count"))

    if(isNaN(orders)) {
        window.alert("Please enter valid number")
    } else {
        let previous = 0
        let actual = 1

        for(let i = 1; i < orders; i++) {
            console.log("actual:" + actual)
            console.log("previous:" + previous)
            let temp = actual
            actual += previous
            previous = temp
        }

        window.alert("Your loyalty point is " + actual)
    }
}

function sumDigits() {
    let code = prompt("Enter your code")
    let result = 0
    
    if(isNaN(Number(code))) {
        window.alert("Please enter valid code")
    } else {
        for(i in code) {
            result += Number(code[i])
        }
    }

    window.alert("Sum of digits is " + result)
}

function atm() {
    let money = Number(prompt("Enter amount of money"))

    if(isNaN(money) || money < 0) {
        window.alert("Please enter valid amount")
    } else {
        let noms = [100, 50, 20, 10, 5, 1]
        result = ""

        for(i in noms) {
            if(money - Math.floor(money / noms[i]) != 0) {
                if(Math.floor(money / noms[i]) != 0) {
                    result += Math.floor(money / noms[i]) + " " + noms[i] + ", "
                    money -= noms[i] * Math.floor(money / noms[i])
                }
            } else {
                if(Math.floor(money / noms[i]) != 0) {
                    result += Math.floor(money / noms[i]) + " " + noms[i] + ", "
                    break;
                }
            }
        }

        result = result.slice(0, -2)
        result += " azn"
        window.alert(result)
    }
}