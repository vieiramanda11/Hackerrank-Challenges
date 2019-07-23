function hurdleRace(k, height) {
    let maxHeight = Math.max(...height);
    
    if (maxHeight <= k) {
        return 0;
    } else {
        return (maxHeight - k);
    }

}