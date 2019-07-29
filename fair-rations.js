function fairRations(B) {
    let countLoaf = 0; 
     
     for (let i = 0; i < B.length -1; i++) {
         
         if (B[i] % 2 !== 0) {
             B[i] += 1;
             B[i+1] += 1;
             countLoaf += 2;
         }
     }
         if (B[B.length - 1] % 2 ==! 0) {
             return 'NO';
         } else {
             return countLoaf;
         }
 }