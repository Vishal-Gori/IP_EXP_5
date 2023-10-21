function* generatePrimes(limit) {
    let num = 2;
    while (num <= limit) {
        if (isPrime(num)) {
            yield num;
        }
        num++;
    }
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return number !== 1;
}

const limit = 20;
const primeGenerator = generatePrimes(limit);

for (const prime of primeGenerator) {
    console.log(prime);
}
