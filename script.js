function myFunction() {
    const x = document.getElementById("find").value;
    if (x <= 0) {
        console.log(document.getElementById("result").innerHTML = "Invalid input");
    }
    else if (x % 3 === 0 && x % 5 === 0) {
        console.log(document.getElementById("result").innerHTML = "FizzBuzz!");
    }
    else if (x % 3 === 0) {
        console.log(document.getElementById("result").innerHTML = "Fizz!");
    }
    else if (x % 5 === 0) {
        console.log(document.getElementById("result").innerHTML = "Buzz!");
    }else {
        console.log(document.getElementById("result").innerHTML = x);
    }
    
}

