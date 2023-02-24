/* 
    Events / EventsHandlers
    -----------------------------------------------------------------------------
    Triggers: click, focus, blur, keydown, keyup, change, mouseover....

    DOM (document object model) - hemsidan      =   document
    BOM (browser object model) - webbläsaren    =   window

    BOM
    -------------------------------------------
    console.log(window.innerWidth + "px")

    window.localStorage.setItem("name", "Hans Mattin-Lassei")
    window.sessionStorage.setItem("name", "Hans Mattin-Lassei")

    document.getElementById('localStorage').innerText = 
        window.localStorage.getItem("name")
        
    document.getElementById('sessionStorage').innerText = 
        window.sessionStorage.getItem("name")


    ---------------------------------------------------
    document.getElementById('btn-save').addEventListener("click", function() {
        window.localStorage.setItem("name", "Hans Mattin-Lassei")
        window.sessionStorage.setItem("name", "Hans Mattin-Lassei")   
    })
*/


function addStorage() {
    window.localStorage.setItem("name", "Hans Mattin-Lassei")
    window.sessionStorage.setItem("name", "Hans Mattin-Lassei")   
}

function showValue(event) {
    console.log(event.target.value)
}