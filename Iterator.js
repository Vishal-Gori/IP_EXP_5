function SquaresIterator(arr) {
    let index = 0;
    return {
        next: function() {
            if (index < arr.length) {
                return { value: arr[index] * arr[index++], done: false };
            } else {
                return { done: true };
            }
        },
        [Symbol.iterator]: function() {
            return this;
        }
    };
}

const numbers = [1, 2, 3, 4, 5];
const squaresIterator = SquaresIterator(numbers);

for (const square of squaresIterator) {
    console.log(square);
}
