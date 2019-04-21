/**
    Iteration 1: [5,3,1,4,6] → [3,5,1,4,6] → [3,1,5,4,6] → [3,1,4,5,6] → [3,1,4,5,6]
    Iteration 2: [3,1,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [3,1,4,5,6] → [1,3,4,5,6]
    Iteration 3: [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6] → [1,3,4,5,6]
*/



function bubbleSort(array) {
    let isSwapped = true;
    while (isSwapped) {
        isSwapped = false;
        number.map((v, i) => {
            if (number[i] > number[i + 1]) {
                let temp = number[i];
                number[i] = number[i + 1];
                number[i + 1] = temp;
                isSwapped = true;
            }
        })
    }
    return array;
}

let number = [5, 3, 1, 4, 6, 3, 4, 6, 7, 8, 9];
console.log(bubbleSort(number))




