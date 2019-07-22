function angryProfessor(k, a) {
    let onTimeStudents = 0;
    
    for (let i = 0; i <= a.length; i++) {
        if (a[i] <= 0) {
            onTimeStudents++;
        }
    }
    
    if(onTimeStudents >= k) {
        return 'NO';
    } else {
        return 'YES';
    }

}