function productCount(product, price, isIncrese) {
    const productInput = document.getElementById(product + '-value');
    let productNumber = productInput.value;
    if (isIncrese) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price;
    subTotal();
}
function getInput(product) {
    const productInput = document.getElementById(product + '-value').value;
    return productInput;
}
function subTotal() {
    const phoneTotal = parseInt(getInput('phone')) * 1219;
    const caseTotal = parseInt(getInput('case')) * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxValue = subTotal/10;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-total').innerText = taxValue;
    document.getElementById('final-total').innerText = taxValue + subTotal;
    
}
function restore(product, price) {
    document.getElementById(product + '-value').value = 1;
    document.getElementById(product + '-total').innerText = price;
}

// phone price increment decrement
document.getElementById('phone-plus').addEventListener('click', function () {
    productCount('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    productCount('phone', 1219, false);
});
// restore button phone
document.getElementById('phone-close').addEventListener('click', function () {
    restore('phone', 1219);
})

// case value increment decrement
document.getElementById('case-plus').addEventListener('click', function () {
    productCount('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    productCount('case', 59, false);
});
// restore button case
document.getElementById('case-close').addEventListener('click', function () {
    restore('case', 59);
})
