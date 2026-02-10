/**
 * JavaScript Fundamentals - Loops: while and for
 * https://javascript.info/while-for
 *
 * Task: Output prime numbers
 * Task: Replace "for" with "while"
 */

// Output numbers from 2 to 10
for (let i = 2; i <= 10; i += 1) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Prime numbers up to n
function getPrimes(max) {
  const primes = [];
  for (let n = 2; n <= max; n += 1) {
    let isPrime = true;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(n);
  }
  return primes;
}
