function bonAppetit(bill, k, b) {
    let split = 0
    let amountAnna = b
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            split += bill[i]
        }
    }

    if (split / 2 === b) {
        console.log('Bon Appetit');
    } else {
        amountAnna -= split / 2;
        console.log(amountAnna);
    }
}