function timeInWords(h, m) {
    const minutes = {
         1: 'one minute',
         2: 'two minutes',
         3: 'three minutes',
         4: 'four minutes',
         5: 'five minutes',
         6: 'six minutes',
         7: 'seven minutes',
         8: 'eight minutes',
         9: 'nine minutes',
        10: 'ten minutes',
        11: 'eleven minutes',
        12: 'twelve minutes',
        13: 'thirteen minutes',
        14: 'fourteen minutes',
        15: 'quarter',
        16: 'sixteen minutes',
        17: 'seventeen minutes',
        18: 'eighteen minutes',
        19: 'nineteen minutes',
        20: 'twenty minutes',
        21: 'twenty one minutes',
        22: 'twenty two minutes',
        23: 'twenty three minutes',
        24: 'twenty four minutes',
        25: 'twenty five minutes',
        26: 'twenty six minutes',
        27: 'twenty seven minutes',
        28: 'twenty eight minutes',
        29: 'twenty nine minutes',
        30: 'half'
    }
    
    const hours = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
       10: 'ten',
       11: 'eleven',
       12: 'twelve',
    }
    
    let minute = 0;  
        
        if (m > 30) {
           minute = 60 - m;  // example: 5:32 == twenty eight minutes to six 
        } else {
            minute = m;
        }
        
        if (m === 0) {
            return (hours[h] + " o' clock");
        } else {
            let hoursWrite = minutes[minute]; // store the minutes
            if (m <= 30) {
                hoursWrite += ' past ' + hours[h]; // example: 4:25 == twenty five minutes past four
            } else {
                hoursWrite += ' to ' + hours[h+1]; // example: 5:32 == twenty eight minutes to six [FIVE +1]
            }
            return hoursWrite;
        }
    }