function getMoneySpent(keyboards, drives, b) {
    let amountMoney = 0;
    
    for (let i = 0; i <= keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            if (keyboards[i] + drives[j] > amountMoney && keyboards[i] + drives[j] <= b) {
                amountMoney = keyboards[i] + drives[j];
            }
        }
    }
    if (amountMoney === 0) {
        return '-1';
    } else {
        return amountMoney;
    }
}