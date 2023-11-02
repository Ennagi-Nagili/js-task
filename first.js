document.getElementById("button1").onclick = function() {register()}
document.getElementById("button2").onclick = function() {delivery()}
document.getElementById("button3").onclick = function() {window.location.href = "store.html"}
document.getElementById("button4").onclick = function() {table()}
document.getElementById("button5").onclick = function() {temperature()}
document.getElementById("button6").onclick = function() {discount()}
document.getElementById("button7").onclick = function() {ship()}

function register() {
    let firstName = prompt("Please enter your first name");
    let lastName = prompt("Please enter your last name");
    let email = prompt("Please enter your email");
    window.alert("*" + email + "*" + " - " + "*" + lastName + "*" + " - " + "*" + firstName + "*");
}

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

let numResult = ""

function number() {
    let number = Number(prompt("Enter number"));

    if(isNaN(number)) {
        window.alert("Please enter valid number");
    } else {
        
    }
}

function numCheck(number) {
    switch(number) {
        case 1: numResult = 
    }
}