const toggu017FlePassword = () => {
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

const validateName = (e) => {
    e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

    const regEx = /^[A-Ö]([a-öA-Ö\u00C0-\u017F]+(([' -][a-öA-Ö])?[a-öA-Ö]*)){1,}$/
    if (!regEx.test(e.target.value)) {
        console.log("firstname not valid")
        return false
    }
        
    console.log("firstname valid")
    return true
}

const validateEmail = (e) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(e.target.value)) {
        console.log("email not valid")
        return false
    }
        
    console.log("email valid")
    return true
}

const validatePassword = (e) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!regEx.test(e.target.value)) {
        console.log("password not valid")
        return false
    }
        
    console.log("password valid")
    return true
}