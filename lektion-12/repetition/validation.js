function validateEmail(element) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorElement = document.getElementById(`error-${element.id}`)

    if (!regEx.test(element.value)) {
        errorElement.innerHTML = `must be a valid email address.`
        return false
    }
        
    errorElement.innerHTML = ``
    return true
}

function validatePassword(element) {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    const errorElement = document.getElementById(`error-${element.id}`)

    if (!regEx.test(element.value)) {
        errorElement.innerHTML = `must be a valid password.`
        return false
    }
        
    errorElement.innerHTML = ``
    return true
}

function validate(event) {
    switch(event.target.type) {
        case 'email':
            validateEmail(event.target)
            break;
        case 'password':
            validatePassword(event.target)
            break;
    }
}


function handleLogin(e) {
    e.preventDefault()

    for(let element of e.target) {
        if(element.required) {
            const errorElement = document.getElementById(`error-${element.id}`)
            
            if (element.value.length === 0) {
                errorElement.innerHTML = `${element.id} is required.`
            } else {
                errorElement.innerHTML = ``

                switch(element.type) {
                    case 'email':
                        validateEmail(element)
                        break
                    case 'password':
                        validatePassword(element)
                        break
                }
            }
        }
    }
}
