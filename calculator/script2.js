let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        console.log("Button text is ", buttonText);
        if (buttonText == "x") {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "÷") {
            buttonText = "/";
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == "C") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == "=") {
            screen.value = eval(screenValue);
        } else if (buttonText == "⌫") {
            screenValue = screen.value.slice(0, -1);
            screen.value = screenValue;
        } else if (buttonText == "sin") {
            screen.value = Math.sin(screen.value);
        } else if (buttonText == "π") {
            screen.value = Math.PI;
        } else if (buttonText == "!") {
            var i, num, f;
            f = 1;
            num = screen.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }

            i = i - 1;

            screen.value = f;
        } else if (buttonText == "cos") {
            screen.value = Math.cos(screen.value);
        } else if (buttonText == "tan") {
            screen.value = Math.tan(screen.value);
        } else if (buttonText == "√") {
            screen.value = Math.sqrt(screen.value, 2);
        } else if (buttonText == "log") {
            screen.value = Math.log10(screen.value);
        } else if (buttonText == "e") {
            screen.value = Math.E;
        } else if (buttonText == "x^2") {
            screen.value = Math.pow(screen.value, 2);
        }
        else if (buttonText == "1/x") {
            screen.value = Math.pow(screen.value, -1);


        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

// function cos() {
//     screen.value = Math.cos(screen.value);
// }

// function tan() {
//     screen.value = Math.tan(screen.value);
// }

// function pow() {
//     screen.value = Math.pow(screen.value, 2);
// }

// function sqrt() {
//     screen.value = Math.sqrt(screen.value, 2);
// }

// function log() {
//     screen.value = Math.log(screen.value);
// }

// function pi() {
//     screen.value = 3.14159265359;
// }

// function e() {
//     screen.value = 2.71828182846;
// }

// function fact() {
//     var i, num, f;
//     f = 1
//     num = screen.value;
//     for (i = 1; i <= num; i++) {
//         f = f * i;
//     }

//     i = i - 1;

//     screen.value = f;
// }
