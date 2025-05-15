function performArithmatic() {
    const firstnumber = Number(document.arithmaticform.firstnumber.value);
    const secondnumber = Number(document.arithmaticform.secondnumber.value);
    const arithmaticoperator = document.arithmaticform.arithmaticoperator.value;
    let arithmaticresult = 0;

    switch (arithmaticoperator) {
        case 'Addition':
            arithmaticresult = firstnumber + secondnumber;
            alert(`The result of adding ${firstnumber} and ${secondnumber} is ${arithmaticresult}`);
            break;
        case 'Subtraction':
            arithmaticresult = firstnumber - secondnumber;
            alert(`The result of subtracting ${firstnumber} and ${secondnumber} is ${arithmaticresult}`);
            break;
        case 'Multiplication':
            arithmaticresult = firstnumber * secondnumber;
            alert(`The result of multiplying ${firstnumber} and ${secondnumber} is ${arithmaticresult}`);
            break;
        case 'Division':
            if (secondnumber == 0) {
                alert('Cannot divide by 0!');
            } else {
                arithmaticresult = firstnumber / secondnumber;
                alert(`The result of dividing ${firstnumber} and ${secondnumber} is ${arithmaticresult}`);
            }
            break;
        default:
            alert('Invalid operator selected.');
    }
}

function performfactorial() {
    const number = Number(document.factorialform.factorialnumber.value);
    if (number < 0) {
        alert('Factorial is not defined for negative numbers');
        return;
    }

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    alert(`The factorial of ${number} is ${result}`);
}


function performfibonacci() {
    const n = Number(document.fibonacciform.fibonaccinumber.value);
    if (n < 0) {
        alert('Please enter a positive integer.');
        return;
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    alert(`The ${n}th Fibonacci number is ${fib[n - 1]}`);
}


function performrange() {
    const num1 = Number(document.rangeform.num1.value);
    const num2 = Number(document.rangeform.num2.value);
    const num3 = Number(document.rangeform.num3.value);
    
   
    const max = Math.max(num1, num2, num3);
    const min = Math.min(num1, num2, num3);
    const range = max - min;

    alert(`The range of the numbers is: ${range}`);
}
function signup() {
   var first = document.SignupForm.firstname.value;
   var last = document.SignupForm.lastname.value;
   var mail = document.SignupForm.email.value;
   var ZIP = document.SignupForm.zip.value;

   var info = '<br><div>First Name:' + first +'<br>Last name:' + last + '<br> Email' + mail + '<br>zip: ' + ZIP + '</div>';

   document.getElementById("list").innerHTML += info; 
 }
