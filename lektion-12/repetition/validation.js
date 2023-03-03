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


async function handleLogin(e) {
    e.preventDefault()
    const errors = []
    const errorMessage = document.getElementById('errorMessage')
    errorMessage.innerHTML = ''

    for(let element of e.target) {
        if(element.required) {
            const errorElement = document.getElementById(`error-${element.id}`)
            
            if (element.value.length === 0) {
                errorElement.innerHTML = `${element.id} is required.`
                errors.push(false)
            } else {
                errorElement.innerHTML = ``

                switch(element.type) {
                    case 'email':
                        errors.push(validateEmail(element))
                        break
                    case 'password':
                        errors.push(validatePassword(element))
                        break
                }
            }
        }
    }

    if (!errors.includes(false)) {
        //https://localhost:7058/api/login

        const data = {
            email: e.target['email'].value,
            password: e.target['password'].value
        }

        const res = await fetch('https://localhost:7058/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
                // 'Autorization': `bearer ${sessionStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(data)
        })

        if (res.status === 200) {
           const result = await res.text()
           sessionStorage.setItem('accessToken', result)

        } else {
            errorMessage.innerHTML = 'Incorrect email or password'
        }

        
    }
}
