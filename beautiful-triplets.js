function beautifulTriplets(d, arr) {
    let countTriplets = 0;
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] - arr[i] === d) {
                for (let k = 0; k < arr.length; k++) {
                if (d === arr[k] - arr[j]) {
                   countTriplets++;
                    }
                }
            }
        }
    }
    return countTriplets;
}