async function getData() {
    const res = await fetch('https://kyh-net22.azurewebsites.net/api/products')
    const data = await res.json()
   
    for(let product of data) {
        document.getElementById('products').innerHTML += `<div>
            <img src="${product.imageUrl}" >
        </div>`
    }
}

getData()