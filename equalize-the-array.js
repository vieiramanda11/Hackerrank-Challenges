function equalizeArray(arr) {

    let maxFrequency = 0;
    
    for(let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        
        maxFrequency = Math.max(count, maxFrequency);
    }
   return (arr.length - maxFrequency);
}