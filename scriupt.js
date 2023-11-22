var user = document.getElementById("userInput");
operator = '';

function press(sum) {
    operator += sum;
    user.value = operator;
}

function equal() {
    user.value = eval(operator);
    operator = '';  // kese aa raha he data comment karne ke baad be.
}
function erase() {
    operator = '';
user.value = operator;
}