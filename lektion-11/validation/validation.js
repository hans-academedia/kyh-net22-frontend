const handleSubmit = (e) => {
    e.preventDefault()
}

const togglePassword = () => {
    const password = document.getElementById('password')
    
    if(password.type === "password")
        password.type = "text"
    else
        password.type = "password"
        
}