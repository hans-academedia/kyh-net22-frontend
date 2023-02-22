/*
    DEKLARERING AV VARIABLER
    -------------------------------------------------------------------------------------------------------------------
    Javascript använder sig av camelCase

    camelCase       firstName       js, java, c, c++
    PascalCase      FirstName       pascal, vb, C#
    snake_case      first_name      python
    kebab-case      first-name      css, powershell

    var         global variabel                             var firstName = "Hans"
    let         lokalt scoped deklarerad variabel           let firstName = "Hans"
    const       är konstant och kan inte omdeklareras       const firstName = "Hans"

        let firstName = "Hans"
        console.log(firstName)

        if(true) {
            let firstName = "Tommy" 
            console.log(firstName)
        }

        console.log(firstName)



    DATATYPER
    JS                          C#                                                  SQL
    ------------------------------------------------------------------------------------------------------------------
    String                      String                                              char,varchar,nvarchar,nchar,text,ntext
    Number                      byte,sbyte,short,ushort,int,long,uint,ulong         tinyint,smallint,int,bigint
    Number                      float, double, decimal                              real,decimal,money
    Boolean                     bool                                                bit
    Object                      object
    Undefined                   ---
    null                        null

*/

/* 
    String - till för text
    ----------------------------------------------------    
    ""      citat                                 ""; => text
    ''      enkelfnuttar                          ''; => enskilt tecken
    ``      back-ticks (shift + ´)               $""; => placeholder
*/

let firstName = "Hans"
let lastName = 'Mattin-Lassei'
let address = `Nordkapsvägen 1`
let city = 'Vega';

var sentence = "Hej jag heter ... och jag bor på ... i ...."
var sentence = "Hej jag heter " + firstName + " " + lastName + " och jag bor på " + address + " i " + city + "."
var sentence = `Hej jag heter ${firstName} ${lastName} och jag bor på ${address} i ${city}.`

let category = "Computers"
let subCategory = "Laptops"
var apiUrl = "http://localhost:7071/api/products?category=" + category
var apiUrl = "http://localhost:7071/api/products?category=" + category +"&subcategory=" + subCategory
var apiUrl = ` http://localhost:7071/api/products?category=${category}&subcategory=${subCategory}`

var modifiedApiUrl = apiUrl.toLocaleUpperCase()
var modifiedApiUrl = apiUrl.toLocaleLowerCase()

var count = apiUrl.length
var trimmed = apiUrl.trim()

// NUMBER  - till för tal
var value = 1
var value = 1.1
var value = 123e-5
var value = 123e5
var value = 0.123456789012345678
var value = 9234567890123456
var value = 9999999999999999

// BOOLEAN - sant eller falskt
var isActive = true
var isActive = false

// NULL och Undefined
var ref                 //    <= undefined
var ref = null          //    <= object
var ref = undefined     //    <= undefined       
console.log(typeof ref)