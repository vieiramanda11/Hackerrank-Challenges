function findDigits(n) {
    let counter = 0;
    const digits = n.toString().split(''); //returns an array with each digit of n

    for (let i = 0; i <= digits.length; i++) {
        if (n % digits[i] === 0 ) {
            counter++;
        }
    }
    return counter;
}
