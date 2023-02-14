
let num1 = prompt('1-son kiriting')
let num2 = prompt('2-son kiriting')
let num3 = prompt('3-son kiriting')


if (num1 > num2 && num1 < num3 || num1 < num2 && num1 > num3) {
    if (num1%2 === 0) {
        alert(num1 + ' juft')
    }
    else{
        alert(num1 + ' toq')
    }
}
else if (num2 > num1 && num2 < num3 || num2 < num1 && num2 > num3) {
    if (num2%2 === 0) {
        alert(num2 + ' juft')
    }
    else{
        alert(num2 + ' toq')
    }
}
else if (num3 > num2 && num3 < num1 || num3 < num2 && num3 > num1) {
    if (num3%2 === 0) {
        alert(num3 + ' juft')
    }
    else{
        alert(num3 + ' toq')
    }
}
