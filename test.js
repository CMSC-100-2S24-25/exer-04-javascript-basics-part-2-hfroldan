import account from './index.js'

account.addAccount(["Pikachu", "SparkTail", "pikachu@pokemon.com", 18]);        // ✓ complete details
account.addAccount(["Charmander", "charmander@pokemon.com", 28]);               // ✕ incomplete field
account.addAccount(["Squirtle", "Splashles", "squirtle", 21]);                  // ✕ invalid email
account.addAccount(["Jigglypuff", "CottonCandy", "jigglypuff@pokemon.com", 5]); // ✕ age is less than 18
account.addAccount(["Eevee", "Evolution", "eevee@pokemon.com", 19]);            // ✓
account.addAccount(["Snorlax", "SleepyHead", "snorlax@pokemon.com", 23]);       // ✓