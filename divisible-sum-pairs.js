function divisibleSumPairs(n, k, ar) {
    let countDiv = 0;
    for (let i = 0; i <= ar.length; i++) {
        for (let j = 0; j <= ar.length; j++) {
            if ((ar[i] + ar[j]) % k == 0 && i < j) {
                countDiv++;
            }
        }
    }
    return countDiv;
}