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
    const errors = []

    for(let element of e.target) {
        if (element.required) {
            switch(element.type) {
                case 'email':
                    if (!validateEmail(element.value))
                        errors.push(element)
                    break;
                case 'text':
                    if (!validateName(element.value))
                        errors.push(element)
                    break;
                case 'password':
                    if (!validatePassword(element.value))
                        errors.push(element)
                    break; 
            }
        }
    }

    if(errors.length == 0)
        window.location.reload('success.html')
}

const validateName = (value) => {
    // e.target.value = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)

    const regEx = /^([a-öA-Ö\u00C0-\u017F]+(([' -][a-öA-Ö])?[a-öA-Ö]*)){2,}$/
    if (!regEx.test(value)) {
        return false
    }
       
    console.log("name valid")
    return true


    // if(value.length < 2)
    //     return false
    
    // return true
}

const validateEmail = (value) => {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regEx.test(value)) {
        return false
    }
        
    return true
}

const validatePassword = (value) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (!regEx.test(value)) {
        return false
    }
        
    return true
}


const validate = (e) => {    
    switch(e.target.type) {
        case 'email':
            validateEmail(e.target.value)
            break;
        case 'text':
            validateName(e.target.value)
            break;
        case 'password':
            validatePassword(e.target.value)
            break;
    }
}