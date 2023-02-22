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
console.log(apiUrl);

var modifiedApiUrl = apiUrl.toLocaleUpperCase()
var modifiedApiUrl = apiUrl.toLocaleLowerCase()
console.log(modifiedApiUrl)

var count = apiUrl.length
var trimmed = apiUrl.trim()
console.log(count)
console.log(trimmed)