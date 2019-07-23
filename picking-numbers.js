function pickingNumbers(a) {
    let init = 0; // if have no pairs;
    
    for (let i = 0; i <= a.length; i++) {
        let count = 0; // count how many pairs
        
        for (let j = 0; j <= a.length; j++){
            if (a[i] === a[j] || a[i] === a[j] + 1) { 
                count++;
            }
        }
        init =  Math.max(count, init); 
    }
    return init;
}