/* 

function getProducts() {}
const getUsers = () => {}

Används vid callback-funktioner/events
function(e) {}
(e) => {}
e => e


JS
----------------------------------------------------------
const res = await fetch("https://domain.com/api/users")
const data = await res.json()

fetch("https://domain.com/api/users")
.then(res => res.json())
.then(data => console.log(data))


C#
---------------------------------------------------------
using var http = new HttpClient();
var res = await http.GetAsync("https://domain.com/api/users");
var data = await res.Content.ReadAsStringAsync();

*/


const getProducts = () => {

}

const getProductsAsync = async () => {
    const res = await fetch("https://domain.com/api/users")
    const data = await res.json()

    return data
}

async function getUsersAsync() {
    const res = await fetch("https://domain.com/api/users")
    const data = await res.json()

    return data
}


getProducts()

await getProductsAsync()
let data = getUsersAsync()