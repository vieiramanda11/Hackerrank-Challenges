function encryption(s) {
    let rows = Math.floor(Math.sqrt(s.length)); // number of rows
    let columns = Math.ceil(Math.sqrt(s.length)); // number of columns
    let message = ''; // variable to store the encrypted message;
    
    while (rows * columns < s.length) {
        rows++; // ensure that rows * columns >= L
    }
    
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            let line = s[i + j * columns]; // the number of columns = how many letters are in each line;
            message += line != null ? line : ''; //if is empty put the letters and if it's not add some space;
        }
        message += ' ';
    }
    return message;
}