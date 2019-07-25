function chocolateFeast(n, c, m) {
    let totalChoc = 0; //count the numbers of chocolates
    
    let choc = Math.floor(n / c); // get the numbers of chocolate bought
    
    totalChoc += choc; // adding the first eaten chocolates
    
    let wrappers = choc; // store how many wrappers 
    
    
    // while the numbers of wrappers is greater or equal the amount necessary to get new chocolates create a new variable to store the ADDITIONAL CHOCOLATES 
    
    while (wrappers >= m) {
        let addChoc = Math.floor(wrappers / m);
        totalChoc += addChoc; // reassing the value of chocolates with the adding ones.
        wrappers = wrappers - addChoc * m + addChoc; //reassing the value of the wrappers  
    }
    return totalChoc;

}