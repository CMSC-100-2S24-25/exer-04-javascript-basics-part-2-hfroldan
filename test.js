import account from './index.js'

// ✓ complete details
console.log(account.addAccount(["Pikachu", "SparkTail", "pikachu@pokemon.com", 18])); // expected output: true

// ✕ incomplete field (missing lastName)
// console.log(account.addAccount(["Charmander", "charmander@pokemon.com", 28])); // expected output: false

// ✕ empty string (firstName is empty)
console.log(account.addAccount(["", "Waterfall", "bulbasaur@pokemon.com", 19])); // expected output: false

// ✕ invalid email format
console.log(account.addAccount(["Squirtle", "Splashles", "squirtle", 21])); // expected output: false

// ✕ age is less than 18
console.log(account.addAccount(["Jigglypuff", "CottonCandy", "jigglypuff@pokemon.com", 5])); // expected output: false

// ✓ complete details
console.log(account.addAccount(["Eevee", "Evolution", "eevee@pokemon.com", 19])); // expected output: true

// ✓ complete details
console.log(account.addAccount(["Snorlax", "SleepyHead", "snorlax@pokemon.com", 23])); // expected output: true

