function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let countGames = 0
    while (s >= p) { //while the amount money(s) is greater than the price of game(p)
        s -= p; //the amount money minus the cost of game
        countGames++; // add one more game
        if ((p - d) >= m) {
            p -= d; // apply the discount p = p - d
        } else {
            p = m // the price of the last product
        }
    }
    return countGames;
 }