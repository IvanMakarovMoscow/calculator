const inputCale = document.querySelector('.account');
const resultClac = document.querySelector('.result');


function input(i) {
    console.log(i);
    inputCale.value = inputCale.value + i
}

function result() {
    if (eval(inputCale.value) == undefined) {
        resultClac.value = '0,00';
        inputCale.value = '0,00';
    } if (eval(inputCale.value) == Infinity) {
        resultClac.value = '0,00';
        inputCale.value = 'Деление на ноль не допускаетсяы';
    }
    resultClac.value = eval(inputCale.value);
    inputCale.value = eval(inputCale.value);
}

function backspace() {
    inputCale.value = inputCale.value.substring(0, inputCale.value.length - 1);
}
function reset() {
    resultClac.value = '';
    inputCale.value = '';
}