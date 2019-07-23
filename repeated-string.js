function repeatedString(s, n) {
    
    let countStrings = Math.floor(n / s.length); // count how many times the string (s) appears in the number (n)
    let countA = (s.split('a').length - 1) * countStrings; // count letter "a" in each string (s) and then multiply for how many times the string appears
    let remainder = n % s.length; // remainder to get the letters a that are not inside the main string (s)
    
    for (let i = 0; i < remainder; i++) {
        if (s.charAt(i) === 'a') { //found the letter "a" in the remainder;
            countA++;
        } 
    }
    return countA;
}