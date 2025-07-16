// Redefinir console.log para imprimir en el div de mensajes
const prints = document.getElementById("print");
console.log = function(...args) {prints.innerHTML += args.join(" ") + "<br>";}

// Limpiar mensajes antes de cada ejecución
prints.innerHTML = "";

// Buttons

document.getElementById("btnTotem").onclick = () => {totem()}
document.getElementById("btnOddEven").onclick = () => {oddEven(no = prompt("No:"))}
document.getElementById("btnSumLupis").onclick = () => {sumLupis()}
document.getElementById("btnTeibolz").onclick = () => {teibolz(no = prompt("No:"))}
document.getElementById("btnVownglez").onclick = () => {vownglez(word = prompt("Word:"))}
document.getElementById("btnDog23").onclick = () => {dog23(no = prompt("No:"))}
document.getElementById("btnPalito").onclick = () => {palito(no = prompt("No:"))}
document.getElementById("btnSumDig").onclick = () => {sumDig(no = prompt("No:"))}
document.getElementById("btnPrimouN").onclick = () => {primouN(prompt("No:"))}
document.getElementById("btnTriN").onclick = () => {triN(prompt("Word:"))}
document.getElementById("btnPerfectN").onclick = () => {perfectN()}
document.getElementById("btnFactos").onclick = () => {factos(prompt("No:"))}
document.getElementById("btnFibonaci").onclick = () => {fibonaci()}
document.getElementById("btnVowCons").onclick = () => {vowCons(prompt("No:"))}
document.getElementById("btnEduNator").onclick = () => {eduNator(prompt("Word:"))}


// *  ~ ~ ~ Variables & Regular expressions ~ ~ ~

// Variables
no = //no = Number(no)
word = "Tutú"
let counter = 0

// Regular expressions
const noRule = /\d/
const wordRule = /[a-zA-Z]/


// * ~ ~ ~ Functions ~ ~ ~

// Validate variables
function rules(x) { // Set by default. x = anything
    if(!noRule.test(x)) no = 0
    if(!wordRule.test(x)) x = "Hola"

    return x
}


// 1. Totem: Print nos from 1-10
const totem = () => { console.log("\n\n1. Ex: Totem\n") // Exercise print
    str = []

    for(i=1; i<11; i++) str.push(i)

    console.log(str.join(" "))  // ? (`text ${i}`) => Used to print variables and text. `` = necessary | ${x} = variable.
}
    
// 2. OddEven: Request num to user and determine if it's odd or even
const oddEven = no => console.log("\n\n2. Ex: OddEven\n\n", no %2 == 0 ? `No. ${no}: Odd` : `${no}: Even`) // Ternary if


// 3. SumLupis: Request 5 nums to user, sum them n print the result
const sumLupis = () => { console.log(`\n\n3. Ex: SumLupis:\n`)
    sum = 0

    for(i=0; i<5; i++) sum += Number(prompt("No"))

    console.log(`\nSummatory: ${sum}`)
}


// 4. Teibolz: Request a no to user n print its multiple chart
const teibolz = no => { console.log(`\n\n4. Ex: MultiChart\n`)
    chart = [1,2,3,4,5,6,7,8,9,10] // Multiple Chart. Array 4 less code
    
    for(i=0; i<chart.length; i++) // use the array length
    console.log(`${no} x ${chart[i]} = ${no * chart[i]}`)
}


// 5. Vownglez: Request a word to user n print how many vowels it've
const vownglez = word => { console.log(`\n\n5. Ex: WordVowelz\n`)
    let vowel = "aeiouáéíóú", mWord = word.toLowerCase() // mWord = minus word. We don´t care bout mayus vowels
    
    for (i = 0; i < mWord.length; i++)
        if(vowel.includes(mWord[i])) counter++
    
    console.log(`Word: ${word}. Vowels = ${counter}`)
}


// 6. Dog23: Count odd & even digits
const dog23 = no => { console.log(`\n\n6. Ex: Dog23\n`)
    let odds = [], evens = []
    let nOdd = 0, nEven = 0
    
    for(i=0; i<no.length; i++)
    {
        let dig = Number(no[i])

        if(dig % 2 === 1){odds.push(dig); nOdd++}
        else{evens.push(dig); nEven++}
    }
    
    console.log(`No.${no}\nn Odd = ${nOdd}. Odds: ${odds.join(" ")}\nn Even = ${nEven}. Evens: ${evens.join(" ")}`)
}
    
// 7. Palito: Request num to user and determine if it's a palindrome
const palito = no => { console.log("\n\n7. Ex: Palito\n")
    let reversal = no.split("").reverse().join("")
    console.log(no == reversal ? `No. ${no}: Palitomo` : `${no}: No palitomo`)
}


// 8. SumDig: Digits sum
const sumDig = no => { console.log(`\n\n8. Ex: SumDig:\n`)
    let dig = []
    let sum = 0

    for(i=0; i<no.length; i++){
        sum += Number(no[i])
        dig.push(no[i])
    }

    console.log(`No ${no}: ${dig.join(" + ")} = ${sum}\n`)
}


// 9. PrimouN: Request n to user n' print all 1st n prime nos
const primouN = no => { console.log(`\n9. Ex: PrimouN\n`); no = Number(no)
    let primes = []
    const primou = (a % 2 === 0)
    for(i=2; i<=no; i++){
        let isPrime = true
        for(j=2; j<=Math.sqrt(i); j++) // Check 4 divisors
            if(i % j === 0){isPrime = false; break} // Found = Cancel shi
        if(isPrime) primes.push(i)
    }    
    console.log(`No: ${no}. Primous: ${primes.join(" ")}`)
}


// 10. TriN: Request n to user n' create a n rows pyramid
const triN = word =>{ console.log(`\n10. Ex: TriN\n`)
    let vowel = "aeiouáéíóú"
    
    word = word.toLowerCase() // we don´t care bout mayus vowls
    counter = 0
    
    for (i = 0; i < word.length; i++)
        if(vowel.includes(word[i])) counter++
    
    console.log(`.${word}. Vowels = ${counter}`)
}


// 11. PerfectN: Print nos from 1-10
const perfectN = () => {
    console.log("\n\n11. Ex: PerfectN\n") // Exercise print
    str = []

    for(i=1; i<11; i++) str.push(i)

    console.log(str.join(" "))  // ? (`text ${i}`) => Used to print variables and text. `` = necessary | ${x} = variable.
}
    
// 12. Factos: Request num to user and determine if it's odd or even
const factos = no => console.log("\n\n12. Ex: Factos\n", no %2 == 0 ? `No. ${no}: Odd` : `${no}: Even`) // Ternary if


// 13. Fibonaci: Request 5 nums to user, sum them n print the result
const fibonaci = () => {
    console.log(`\n\n3. Ex: Fibonaci:\n`)
    
    sum = 0

    for(i=0; i<5; i++){
        sum += Number(prompt("No"))
        //!noRule.test(sum) ? 0:
    }

    console.log(`\nSummatory: ${sum}\n`)
}


// 14. VowCons: Request a no to user n print its multiple chart
const vowCons = no => {
    console.log(`\n4. Ex: VowCons\n`)
    chart = [1,2,3,4,5,6,7,8,9,10] // Multiple Chart. Array 4 less code
    
    for(i=0; i<chart.length; i++) // use the array length
    console.log(`${no} x ${chart[i]} = ${no * chart[i]}`)
}


// 15. Adivina Adivinador: Request a word to user n print how many vowels it've
const eduNator = word =>{
    let vowel = "aeiouáéíóú"
    
    word = word.toLowerCase() // we don´t care bout mayus vowls
    counter = 0
    
    for (i = 0; i < word.length; i++)
        if(vowel.includes(word[i])) counter++
    
    console.log(`\n\n5. Ex: EduNator\n\nWord: ${word}. Vowels = ${counter}`)
}

// * ~ ~ ~ Run ~ ~ ~

/* totem()
oddEven(no)
sumLupis()
teibolz(no)
vownglez(word)
dog23(no)
palito(no)
sumDig()
primouN(no)
triN(word)
perfectN()
factos(no)
fibonaci()
vowCons(no)
eduNator(word) */
