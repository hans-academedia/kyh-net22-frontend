/* 
    id          firstName, lastName, displayName
    Name        firstName, lastName,
    class       form-control, mb-3
    element     input, div, span
*/

// DOM Manipulation
console.log( document.getElementById('firstName').value) 
console.log( document.querySelector('#firstName').value) 

console.log(document.getElementsByName('firstName')[0].value)

console.log(document.getElementsByTagName('input'))
console.log( document.querySelectorAll('input')) 

console.log(document.getElementsByClassName('form-control'))
console.log( document.querySelectorAll('.form-control'))

document.getElementById('displayName').innerText = "Hans Mattin-Lassei"
document.getElementById('displayName').innerHTML = "<strong>Hans Mattin-Lassei</strong>"
