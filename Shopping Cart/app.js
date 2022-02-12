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
}
// phone increase descrease
document.getElementById("phone-plus").addEventListener("click", function() {
    updateProdustNumber("phone", 1259, true);
});

document.getElementById("phone-minus").addEventListener("click", function() {
    updateProdustNumber("phone", 1259, false);
});

// handle increase decrease
document.getElementById("case-plus").addEventListener("click", function() {
    updateProdustNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function() {
    updateProdustNumber("case", 59, false);
});