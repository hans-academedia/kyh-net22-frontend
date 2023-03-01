const handleSubmit = (e) => {
    e.preventDefault()
}

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