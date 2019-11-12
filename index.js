function getValue(value) {
    document.getElementById("result").value += value;
    // console.log(value);
}

function solve() {
    let x = document.getElementById("result").value;
    // console.log('given value' + x);
    let y = eval(x);
    // console.log('updated value' + y);
    document.getElementById("result").value = y;
}

function clearValue() {
    document.getElementById("result").value = '';
}