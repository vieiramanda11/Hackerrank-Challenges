function pageCount(n, p) {
    let frontPage = Math.floor(p / 2); 
    let backPage = Math.floor((n / 2) - frontPage);
    
    if (frontPage < backPage) {
        return frontPage;
    } else {
        return backPage;
    }
}   