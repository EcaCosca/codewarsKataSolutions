// https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f/train/javascript

// y PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

// Fortunately, I discovered that the virus hides my censored letters inside root directory.

// It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

// Examples
// uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

// uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"

// uncensor("xyz", "") ➜ "xyz"
// Notes
// Expect all discovered letters to be given in the correct order.
// Discovered letters will match the number of censored ones.
// Any character can be censored.

function uncensor(infected, discovered) {
    let infectedArr = infected.split('')
    let discoveredArr = discovered.split('')

    for (let i = 0; i < infectedArr.length; i++) {
        if (infectedArr[i] === "*") {
            infectedArr.splice(i, 1, discoveredArr[0])
            discoveredArr.splice(0, 1)
        }
    }

    return infectedArr.join('');
}

function uncensor(infected, discovered) {
    const arr = [...discovered]
    return [...infected].map(el=> el === '*' ? arr.shift() : el).join('')
  }

uncensor('A**Z*N*', 'MAIG')