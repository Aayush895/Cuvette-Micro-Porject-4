// Toggle button for switching between light and dark mode

let display = document.getElementById("body");

// Calculator 

let calcDisp = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName('btn'));
let str1 = "";
let operator = "";
let str2 = "";
let res = "";
let pressed = false;

buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case 'C':
                if(calcDisp.innerHTML) {
                    calcDisp.innerHTML = 'Enter the numbers';
                }
                str1 = "";
                str2 = "";
                operator = "";
                break;
            case 'X': 
                if(calcDisp.innerHTML) {
                    calcDisp.innerHTML = calcDisp.innerHTML.substring(0,(calcDisp.innerHTML.length - 1));
                }
                else {
                    calcDisp.innerHTML = "Enter the numbers";
                }
                break;
            case '+':
                if(!pressed) {
                    pressed = true;
                    operator = '+';
                    calcDisp.innerHTML = '+';
                }
                break;
            case '-':
                if(!pressed) {
                    pressed = true;
                    operator = '-';
                    calcDisp.innerHTML = '-';
                }
                break;
            case '*':
                if(!pressed) {
                    pressed = true;
                    operator = '*';
                    calcDisp.innerHTML = '*';
                }
                break;
            case '/':
                if(!pressed) {
                    pressed = true;
                    operator = '/';
                    calcDisp.innerHTML = '/';
                }
                break;
            case '%':
                if(!pressed) {
                    pressed = true;
                    operator = '%';
                    calcDisp.innerHTML = '%';
                }
                break;
            case '=':
                if(pressed) {
                    pressed = false;
                }
                res = eval(str1 + operator + str2);
                calcDisp.innerHTML = res;
                str2 = "";
                str1 = "";
                break;
            default:
                if(pressed) {
                    str2 += e.target.innerHTML;
                    calcDisp.innerHTML = str2;
                    if(res !== "") {
                        str1 = res;
                        res = "";
                    }
                }
                else {
                    str1 += e.target.innerHTML;
                    calcDisp.innerHTML = str1; 
                }
        }
    })
});

// World Clock

function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById("session");
  
    if (hrs >= 12) {
      session.innerHTML = "PM";
    } else {
      session.innerHTML = "AM";
    }
    if (hrs > 12) {
      hrs = hrs - 12;
    }
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(displayTime, 1000);
