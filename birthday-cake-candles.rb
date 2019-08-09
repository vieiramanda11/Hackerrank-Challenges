def birthdayCakeCandles(ar)
    count = 0
    tallestCandle = ar.max
    
    for i in 0...ar.length
      if (tallestCandle == ar[i])
          count += 1
      end
    end
    count 
  end