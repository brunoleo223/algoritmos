// O(nˆ2)
function solution1(numbers, target_sum) {
    for (number1 of numbers) {
        for (number2 of numbers) {
            if (number1 + number2 == target_sum) return [number1, number2] 
        }
    }
    return []
}

//O(n)
function solution2(numbers, target_sum){
    const calculated_numbers = {};
    
    for (let i = 0; i < numbers.length; i++) {
        const n = numbers[i]
        const y = target_sum - n;
        
        if(y in calculated_numbers) {
            return [y, n];
        }

        calculated_numbers[n] = true;
    }
    
    return []
    
}

console.log(solution1([4, 1, 2, -2, 11, 15, 1, -1, -6, -4], 9)) //[-2, 11]
console.log(solution2([4, 1, 2, -2, 11, 15, 1, -1, -6, -4], 9)) // [-2, 11]