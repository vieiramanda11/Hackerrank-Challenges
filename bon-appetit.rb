def bonAppetit(bill, k, b)
    total = bill.inject { |sum, n| sum + n }
    split = (total - bill[k]) / 2 
    
    if split == b
        puts 'Bon Appetit'
    else
        b -= split
        puts b
    end
end