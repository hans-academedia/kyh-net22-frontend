/* 
    VARIABLER
    --------------------
    firstName = "Hans"              <=      GÖR INTE SÅ HÄR!
    var firstName = "Hans"          <=      GOBALT DEKLARERAD + ÖVERSKRIVNINGSBAR
    let firstName = "Hans"          <=      LOKALT KODBLOCKS DEKLARERAD
    const firstName = "Hans"        <=      ÄR STATISK OCH MÅSTE HA ETT KONSTANT VÄRDE I SIG FRÅN START


    DATATYPER
    -----------------------------------
    string
    number
    boolean
    object
    null
    undefined
    (any)

    NaN = Not a Number

*/


var text = "Här har vi en text."
var text = 'Här har vi en text.'
var text = `Här har vi en text.`

var person = "vi"
var text = `Här har ${person} en text`
console.log(text)


var sum = 0
sum += 12
sum += 15
sum += 6.5
console.log(sum)

var stringage = "E012"
var age = Number(stringage)
console.log(age)