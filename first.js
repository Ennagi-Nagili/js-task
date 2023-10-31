document.getElementById("button1").onclick = function() {register()}
document.getElementById("button2").onclick = function() {delivery()}
document.getElementById("button3").onclick = function() {window.location.href = "store.html"}
document.getElementById("button4").onclick = function() {table()}
document.getElementById("button5").onclick = function() {temperature()}

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