function updateProdustNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-number");
    let caseNumber = productInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    } else if (productInput.value > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    productInput.value = caseNumber;

    // update  total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = caseNumber * price;

    // calculate total
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + "-number");
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal * 0.1;
    const grandTotal = subTotal + tax;

    document.getElementById("sub-total").innerText = subTotal;
    document.getElementById("tax-amount").innerText = tax.toFixed(2);
    document.getElementById("total-amount").innerText = grandTotal.toFixed(2);
}
// phone increase descrease
document.getElementById("phone-plus").addEventListener("click", function() {
    updateProdustNumber("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function() {
    updateProdustNumber("phone", 1219, false);
});

// handle increase decrease
document.getElementById("case-plus").addEventListener("click", function() {
    updateProdustNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function() {
    updateProdustNumber("case", 59, false);
});