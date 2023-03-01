const togglePassword = () => {
    const password = document.getElementById('password')
    const icon = document.getElementById('toggle-password-icon')

    if(password.type === "password") {
        password.type = "text"
        icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'

    } else {
        password.type = "password"
        icon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
}


const validateFirstName = (e) => {
    const regEx = /^[A-Z]([a-zA-Z\u00C0-\u017F]+(([' -][a-zA-Z])?[a-zA-Z]*)){1,30}$/
    if (!regEx.test(e.target.value)) {
        console.log("firstname not valid")
        return false
    }
        
    console.log("firstname valid")
    return true
}

