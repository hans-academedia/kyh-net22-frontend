/*
    function    =   fristående och gobalt deklarerad
    metod       =   ingår i en instansierad klass
    const       =   statisk deklarerad - dvs gobal

    DEKLARERING AV FUNKTIONER
    --------------------------------------------------
    function() {}               =   anonymous function
    function name() {}          =   function

    () => {}                    =   anonymous arrow function (ES6)
    const name = () => {}       =   arrow function (ES 6)


    function welcomeMessage(name) {
        console.log(`välkommen ${name}`)
    }

    const welcomeMessage = (name) => {
        console.log(`välkommen ${name}`)
    }

    const welcomeMessage = (name) => console.log(`välkommen ${name}`)

    function doWork() {
        console.log("sparar saker till databasen...")
    }

    const doWork = () => { 
        console.log("sparar saker till databasen...") 
    }

    const doWork = () => console.log("sparar saker till databasen...")

    function getDisplayName(firstName, lastName) {
        return `${firstName} ${lastName}`
    }

    const getDisplayName = (firstName, lastName) => {
        return `${firstName} ${lastName}`
    }

    const getDisplayName = (firstName, lastName) => `${firstName} ${lastName}`



*/


