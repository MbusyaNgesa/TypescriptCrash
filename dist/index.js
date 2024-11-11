"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2020)
        return income * 1.2;
    return income * 1.4;
}
console.log(calculateTax(20000));
//# sourceMappingURL=index.js.map